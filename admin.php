<?php
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
  echo "DB connection failed";
  exit;
}

$rows = $pdo->query("SELECT * FROM transactions ORDER BY id DESC")->fetchAll();
?>
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ERZA CELL - Admin</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f6f3ee; color: #222; padding: 24px; }
    h1 { margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; background: #fff; }
    th, td { padding: 10px; border-bottom: 1px solid #e5e0d8; text-align: left; }
    th { background: #f0e6db; }
    .muted { color: #666; font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>Transaksi Masuk</h1>
  <div class="muted">Total: <?php echo count($rows); ?> transaksi</div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Waktu</th>
        <th>Kategori</th>
        <th>Produk</th>
        <th>Nominal</th>
        <th>Tujuan</th>
        <th>Metode Bayar</th>
        <th>Wallet</th>
        <th>Bank Nominal</th>
        <th>Nama Penerima</th>
        <th>Catatan</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($rows as $r): ?>
      <tr>
        <td><?php echo htmlspecialchars($r['id']); ?></td>
        <td><?php echo htmlspecialchars($r['created_at']); ?></td>
        <td><?php echo htmlspecialchars($r['category']); ?></td>
        <td><?php echo htmlspecialchars($r['product']); ?></td>
        <td>Rp <?php echo number_format($r['amount'], 0, ',', '.'); ?></td>
        <td><?php echo htmlspecialchars($r['target']); ?></td>
        <td><?php echo htmlspecialchars($r['payment_method']); ?></td>
        <td><?php echo htmlspecialchars($r['wallet'] ?? '-'); ?></td>
        <td><?php echo $r['bank_amount'] ? 'Rp ' . number_format($r['bank_amount'], 0, ',', '.') : '-'; ?></td>
        <td><?php echo htmlspecialchars($r['bank_name'] ?? '-'); ?></td>
        <td><?php echo htmlspecialchars($r['note'] ?? '-'); ?></td>
      </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</body>
</html>
