<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM profile LIMIT 1";
$stmt = $db->prepare($query);
$stmt->execute();

$profile = $stmt->fetch(PDO::FETCH_ASSOC);

http_response_code(200);
echo json_encode($profile);
?>
