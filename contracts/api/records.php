<?php
// YESES SOLUTION — central contract records API.
// Stores one row per signed contract (metadata only — no PDFs, no signatures).
// Access requires the shared site key. DB credentials live in config.php (same folder, NOT in Git).
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$API_KEY = '57757a84ff37d38dec60ca6e';

$cfgFile = __DIR__ . '/config.php';
if (!file_exists($cfgFile)) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'error' => 'db-config-missing']);
    exit;
}
require $cfgFile; // defines DB_HOST, DB_NAME, DB_USER, DB_PASS

$raw = file_get_contents('php://input');
$in = json_decode($raw, true);
if (!is_array($in)) $in = [];
$key = $in['key'] ?? ($_GET['key'] ?? '');
if (!is_string($key) || !hash_equals($API_KEY, $key)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'forbidden']);
    exit;
}

try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'db-connect-failed']);
    exit;
}

$pdo->exec("CREATE TABLE IF NOT EXISTS ys_contracts (
    agreement VARCHAR(64) NOT NULL PRIMARY KEY,
    client VARCHAR(190) NOT NULL DEFAULT '',
    email VARCHAR(190) NOT NULL DEFAULT '',
    pkg VARCHAR(64) NOT NULL DEFAULT '',
    rep VARCHAR(120) NOT NULL DEFAULT '',
    status VARCHAR(16) NOT NULL DEFAULT 'recorded',
    ts BIGINT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
try { $pdo->exec("ALTER TABLE ys_contracts ADD COLUMN data MEDIUMTEXT NULL"); } catch (Exception $e) {}

$action = $in['action'] ?? ($_GET['action'] ?? 'list');
$s = function ($v, $max) { return substr(is_string($v) ? $v : '', 0, $max); };

if ($action === 'ping') {
    echo json_encode(['ok' => true, 'db' => 'connected']);
    exit;
}

if ($action === 'save') {
    $agreement = $s($in['agreement'] ?? '', 64);
    if ($agreement === '') { echo json_encode(['ok' => false, 'error' => 'no-agreement']); exit; }
    $status = (($in['status'] ?? '') === 'sent') ? 'sent' : 'recorded';
    $data = $in['data'] ?? '';
    if (!is_string($data) || strlen($data) > 3000000) $data = '';
    $stmt = $pdo->prepare("INSERT INTO ys_contracts (agreement, client, email, pkg, rep, status, ts, data)
        VALUES (:a, :c, :e, :p, :r, :st, :ts, :d)
        ON DUPLICATE KEY UPDATE
            client = VALUES(client), email = VALUES(email), pkg = VALUES(pkg), rep = VALUES(rep),
            status = IF(status = 'sent', 'sent', VALUES(status)), ts = VALUES(ts),
            data = IF(VALUES(data) = '', data, VALUES(data))");
    $stmt->execute([
        ':a' => $agreement,
        ':c' => $s($in['client'] ?? '', 190),
        ':e' => $s($in['email'] ?? '', 190),
        ':p' => $s($in['pkg'] ?? '', 64),
        ':r' => $s($in['rep'] ?? '', 120),
        ':st' => $status,
        ':ts' => intval($in['ts'] ?? 0),
        ':d' => $data
    ]);
    echo json_encode(['ok' => true, 'saved' => $agreement]);
    exit;
}

if ($action === 'get') {
    $agreement = $s($in['agreement'] ?? '', 64);
    $stmt = $pdo->prepare("SELECT agreement, client, email, pkg, rep, status, ts, data FROM ys_contracts WHERE agreement = :a");
    $stmt->execute([':a' => $agreement]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($row) { $row['ts'] = intval($row['ts']); echo json_encode(['ok' => true, 'record' => $row]); }
    else { echo json_encode(['ok' => false, 'error' => 'not-found']); }
    exit;
}

if ($action === 'delete') {
    $agreement = $s($in['agreement'] ?? '', 64);
    $stmt = $pdo->prepare("DELETE FROM ys_contracts WHERE agreement = :a");
    $stmt->execute([':a' => $agreement]);
    echo json_encode(['ok' => true, 'deleted' => $agreement]);
    exit;
}

if ($action === 'clear') {
    $pdo->exec("DELETE FROM ys_contracts");
    echo json_encode(['ok' => true, 'cleared' => true]);
    exit;
}

// default: list
$rows = $pdo->query("SELECT agreement, client, email, pkg, rep, status, ts FROM ys_contracts ORDER BY ts DESC LIMIT 200")
            ->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as &$r) { $r['ts'] = intval($r['ts']); }
echo json_encode(['ok' => true, 'records' => $rows]);
