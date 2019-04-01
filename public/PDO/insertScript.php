<?php

require_once('dbconfig.php');


If(isset($_POST['submit'])) {
    try {

// set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// prepare sql and bind parameters
        $insertQuery = $conn->prepare("INSERT INTO user (username, password, firstname, lastname,licenseplate)
VALUES (:username, :password, :firstname, :lastname, :licenseplate)");
        $insertQuery->bindParam(':username', $username);
        $insertQuery->bindParam(':password', $password);
        $insertQuery->bindParam(':firstname', $firstname);
        $insertQuery->bindParam(':lastname', $lastname);
        $insertQuery->bindParam(':licenseplate', $licenseplate);

// insert a row
        $username = $_POST['username'];
        $password = $_POST['password'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $licenseplate = $_POST['licenseplate'];
        $insertQuery->execute();

        echo "New records created successfully";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
}