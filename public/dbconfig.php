<?php
$servername = "185.224.138.70";
$username = "u844582952_pad19";
$database = "u844582952_pad";
$password = "pad2019";
$test = file_get_contents('https://www.google.com');

//  Create a new connection to the MySQL database using PDO
//$conn = new mysqli($servername, $username, $password);
$conn = new PDO("mysql:host=$servername;dbname=$database",$username,$password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo $test;

?>