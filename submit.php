<?php
header('Content-Type: application/json');

$host = 'localhost';
$db   = 'erzacell';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES => false,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'DB connection failed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
  exit;
}

$category = trim($data['category'] ?? '');
$product = trim($data['product'] ?? '');
$amount = (int)($data['amount'] ?? 0);
$target = trim($data['target'] ?? '');
$payment_method = trim($data['payment_method'] ?? '');
$wallet = trim($data['wallet'] ?? '');
$bank_amount = isset($data['bank_amount']) ? (int)$data['bank_amount'] : null;
$bank_name = trim($data['bank_name'] ?? '');
$note = trim($data['note'] ?? '');

if ($category === '' || $product === '' || $amount <= 0 || $target === '' || $payment_method === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

$stmt = $pdo->prepare("
  INSERT INTO transactions
  (category, product, amount, target, payment_method, wallet, bank_amount, bank_name, note)
  VALUES
  (:category, :product, :amount, :target, :payment_method, :wallet, :bank_amount, :bank_name, :note)
");

$stmt->execute([
  ':category' => $category,
  ':product' => $product,
  ':amount' => $amount,
  ':target' => $target,
  ':payment_method' => $payment_method,
  ':wallet' => $wallet !== '' ? $wallet : null,
  ':bank_amount' => $bank_amount ?: null,
  ':bank_name' => $bank_name !== '' ? $bank_name : null,
  ':note' => $note !== '' ? $note : null,
]);

echo json_encode(['ok' => true]);
