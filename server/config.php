<?php
$host = "localhost";
$username = "root";
$password = null;

$conn = new PDO("mysql:host=$host;dbname=data_shop", $username, $password);
$conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) ;

?>