<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM projects ORDER BY created_at DESC";
$stmt = $db->prepare($query);
$stmt->execute();

$projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

http_response_code(200);
echo json_encode($projects);
?>
