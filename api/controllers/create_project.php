<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->title) && !empty($data->description)) {
    $query = "INSERT INTO projects SET title=:title, description=:description, thumbnail=:thumbnail, category=:category, tech_stack=:tech_stack, year=:year, client=:client, demo_link=:demo_link, github_link=:github_link";
    
    $stmt = $db->prepare($query);

    $stmt->bindParam(":title", $data->title);
    $stmt->bindParam(":description", $data->description);
    $stmt->bindParam(":thumbnail", $data->thumbnail);
    $stmt->bindParam(":category", $data->category);
    $stmt->bindParam(":tech_stack", $data->tech_stack);
    $stmt->bindParam(":year", $data->year);
    $stmt->bindParam(":client", $data->client);
    $stmt->bindParam(":demo_link", $data->demo_link);
    $stmt->bindParam(":github_link", $data->github_link);

    if($stmt->execute()) {
        http_response_code(201);
        echo json_encode(["message" => "Project created successfully."]);
    } else {
        http_response_code(503);
        echo json_encode(["message" => "Unable to create project."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data."]);
}
?>
