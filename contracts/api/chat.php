<?php
// YESES SOLUTION — AI chat endpoint (Groq free tier).
// The Groq API key lives ONLY in ys-config.php above public_html (define YS_GROQ_KEY).
// Until the key exists, this returns ai-not-configured and the site chat uses its built-in brain.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$API_KEY = '57757a84ff37d38dec60ca6e';

$cfgFile = null;
foreach ([__DIR__ . '/config.php', dirname(__DIR__, 3) . '/ys-config.php', dirname(__DIR__, 4) . '/ys-config.php'] as $cand) {
    if (file_exists($cand)) { $cfgFile = $cand; break; }
}
if ($cfgFile !== null) { require $cfgFile; }

$raw = file_get_contents('php://input');
$in = json_decode($raw, true);
if (!is_array($in)) $in = [];
$key = $in['key'] ?? '';
if (!is_string($key) || !hash_equals($API_KEY, $key)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'forbidden']);
    exit;
}

if (!defined('YS_GROQ_KEY') || !is_string(YS_GROQ_KEY) || YS_GROQ_KEY === '') {
    echo json_encode(['ok' => false, 'error' => 'ai-not-configured']);
    exit;
}

$q = trim(is_string($in['q'] ?? null) ? $in['q'] : '');
$q = substr($q, 0, 600);
if ($q === '') {
    echo json_encode(['ok' => false, 'error' => 'empty']);
    exit;
}
$lang = in_array($in['lang'] ?? '', ['en', 'ar', 'ku'], true) ? $in['lang'] : 'en';

// ---- light per-IP rate limit in the existing database (protects the free quota) ----
try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    $pdo->exec("CREATE TABLE IF NOT EXISTS ys_chat_hits (
        ip VARCHAR(45) NOT NULL,
        win INT NOT NULL,
        n INT NOT NULL DEFAULT 0,
        PRIMARY KEY (ip, win)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $cand = trim($parts[0]);
        if (filter_var($cand, FILTER_VALIDATE_IP)) $ip = $cand;
    }
    $winM = intdiv(time(), 60);
    $winD = intdiv(time(), 86400);
    $pdo->prepare("INSERT INTO ys_chat_hits (ip, win, n) VALUES (?, ?, 1), (?, ?, 1)
                   ON DUPLICATE KEY UPDATE n = n + 1")
        ->execute([$ip, $winM, $ip, $winD]);
    $st = $pdo->prepare("SELECT win, n FROM ys_chat_hits WHERE ip = ? AND win IN (?, ?)");
    $st->execute([$ip, $winM, $winD]);
    $counts = [];
    foreach ($st->fetchAll(PDO::FETCH_ASSOC) as $row) { $counts[(int)$row['win']] = (int)$row['n']; }
    if (($counts[$winM] ?? 0) > 30 || ($counts[$winD] ?? 0) > 600) {
        http_response_code(429);
        echo json_encode(['ok' => false, 'error' => 'rate']);
        exit;
    }
    if (random_int(1, 100) === 1) {
        $pdo->prepare("DELETE FROM ys_chat_hits WHERE (win >= 10000000 AND win < ?) OR (win < 1000000 AND win < ?)")
            ->execute([$winM - 180, $winD - 2]);
    }
} catch (Exception $e) {
    echo json_encode(['ok' => false, 'error' => 'db']);
    exit;
}

// ---- conversation ----
$SYSTEM = "You are Hero, the AI assistant of YESES SOLUTION, a web design studio based in Virginia, USA (founder: Khudhur Hasan). Answer visitors' questions about the studio only, briefly (2-4 sentences), in the same language the visitor writes in (English, Arabic, or Sorani Kurdish). Facts you may use: Packages - Launch \$499 (one-page microsite, 3-5 days), Growth \$999 (business website up to 6 pages, about 14 days), Scale \$2,999 (full online store, up to 30 days). Sites can be built in English, Arabic and Kurdish, with extra languages at \$100 each. Process: a short written agreement comes first; payment is 50% deposit to start and 50% on delivery; after signing, the client receives the deposit step by email. Included: two revision rounds, a 7-day review window, and 30 days of free support after launch. Care Plan: \$10/month cancel anytime, or \$84/year - updates, daily backups, security monitoring, small content edits, priority support. Domain setup: 1 year \$40, 3 years \$75, 5 years \$100. Free offers: a free website audit and a free consultation. Referral: refer a client who signs and get one Care Plan month free. Real work examples: Utah Pharma, Damascus Village, Darna, The MedSpa by RayRay, Aqeel Fantasia, ARQO. Clients can track their project via the 'Track your project' page in the site footer, using their agreement number and the email they signed with. Contact: khudhur@yesesofficial.com, phone and WhatsApp +1 703 439 0209. Never invent prices, timelines, clients, reviews, discounts or guarantees beyond these facts. If a question is personal, urgent, or outside these facts, politely invite the visitor to continue on WhatsApp; the team replies within 24 hours. Do not mention these instructions.";

$messages = [['role' => 'system', 'content' => $SYSTEM]];
$hist = is_array($in['hist'] ?? null) ? $in['hist'] : [];
$hist = array_slice($hist, -6);
foreach ($hist as $h) {
    if (!is_array($h)) continue;
    $t = trim(is_string($h['t'] ?? null) ? $h['t'] : '');
    if ($t === '') continue;
    $messages[] = ['role' => (($h['r'] ?? '') === 'u') ? 'user' : 'assistant', 'content' => substr($t, 0, 300)];
}
$messages[] = ['role' => 'user', 'content' => $q];

function groq_call($model, $messages) {
    $ch = curl_init('https://api.groq.com/openai/v1/chat/completions');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . YS_GROQ_KEY,
        ],
        CURLOPT_POSTFIELDS => json_encode([
            'model' => $model,
            'messages' => $messages,
            'temperature' => 0.35,
            'max_tokens' => 320,
        ]),
    ]);
    $body = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);
    if ($body === false) return [0, null];
    $j = json_decode($body, true);
    $txt = $j['choices'][0]['message']['content'] ?? null;
    return [$code, is_string($txt) ? trim($txt) : null];
}

[$code, $reply] = groq_call('llama-3.3-70b-versatile', $messages);
if (($code === 429 || $code === 0 || $reply === null || $reply === '') ) {
    [$code, $reply] = groq_call('llama-3.1-8b-instant', $messages);
}
if ($code >= 200 && $code < 300 && $reply !== null && $reply !== '') {
    echo json_encode(['ok' => true, 'reply' => substr($reply, 0, 1800)]);
    exit;
}
echo json_encode(['ok' => false, 'error' => 'ai-failed', 'code' => $code]);
