<?php
// YESES SOLUTION — ONE-TIME Groq key seeder. Stores the key in the ys_settings
// table on the server (never in Git). Self-locks after one successful save.
// This file is deleted immediately after use.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$TOKEN_HASH = '94e11cad9b26f72e6f5820afa5fa3681e8fd85b859159f0c03346ec6342f598b';
$cfgFile = null;
foreach ([__DIR__ . '/config.php', dirname(__DIR__, 3) . '/ys-config.php', dirname(__DIR__, 4) . '/ys-config.php'] as $cand) {
    if (file_exists($cand)) { $cfgFile = $cand; break; }
}
if ($cfgFile === null) { http_response_code(503); echo json_encode(['ok' => false, 'error' => 'db-config-missing']); exit; }
require $cfgFile;
$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) $in = [];
$tok = is_string($in['token'] ?? null) ? $in['token'] : '';
if (!hash_equals($TOKEN_HASH, hash('sha256', $tok))) { http_response_code(403); echo json_encode(['ok' => false, 'error' => 'forbidden']); exit; }
$gkey = trim(is_string($in['key'] ?? null) ? $in['key'] : '');
if (strpos($gkey, 'gsk_') !== 0 || strlen($gkey) < 40 || strlen($gkey) > 90 || preg_match('/\s/', $gkey)) {
    echo json_encode(['ok' => false, 'error' => 'bad-key-format']); exit;
}
try {
    $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $pdo->exec("CREATE TABLE IF NOT EXISTS ys_settings (k VARCHAR(64) NOT NULL PRIMARY KEY, v TEXT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $st = $pdo->prepare("SELECT v FROM ys_settings WHERE k = 'groq_lock'");
    $st->execute();
    if ($st->fetch(PDO::FETCH_ASSOC)) { echo json_encode(['ok' => false, 'error' => 'locked']); exit; }
} catch (Exception $e) { echo json_encode(['ok' => false, 'error' => 'db']); exit; }
// verify the key against Groq before storing it
$ch = curl_init('https://api.groq.com/openai/v1/models');
curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_CONNECTTIMEOUT => 5, CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $gkey]]);
curl_exec($ch);
$code = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);
if ($code !== 200) { echo json_encode(['ok' => false, 'error' => 'groq-rejected', 'code' => $code]); exit; }
try {
    $pdo->prepare("INSERT INTO ys_settings (k, v) VALUES ('groq_key', ?) ON DUPLICATE KEY UPDATE v = VALUES(v)")->execute([$gkey]);
    $pdo->prepare("INSERT INTO ys_settings (k, v) VALUES ('groq_lock', '1') ON DUPLICATE KEY UPDATE v = '1'")->execute([]);
} catch (Exception $e) { echo json_encode(['ok' => false, 'error' => 'db-write']); exit; }
echo json_encode(['ok' => true, 'stored' => true, 'groq' => 'reachable']);
