<?php
include("./config.php");
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"), true);

if(isset($data['username'])){
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];
    $confirm_password = $data['confirm_password'];

    $getProfile = $conn->prepare("
    INSERT INTO `student_data` (`username`, `email`, `password`, `confirm_password`)
    VALUES ('$username', '$email', '$password', '$confirm_password')
    ");

    $profiles = $getProfile->execute();
    if($profiles){
        echo json_encode(["status" => "success", "message" => "Data inserted!!"]);
    }else{
        echo json_encode(["status" => "error", "message" => "Data not inserted!!"]);

    }
}




?>