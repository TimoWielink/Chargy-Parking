<?php

require_once('dbconfig.php');


If (isset($_POST['submit'])) {
    try {

// set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// prepare sql and bind parameters
//        $insertQuery = $conn->prepare("INSERT INTO user (username, password, firstname, lastname,licenseplate)
//VALUES (:username, :password, :firstname, :lastname, :licenseplate)");
                  $insertQuery = $conn->prepare("INSERT INTO user (email) VALUES (:email)");
//        $insertQuery->bindParam(':username', $username);
//        $insertQuery->bindParam(':password', $password);
//        $insertQuery->bindParam(':firstname', $firstname);
//        $insertQuery->bindParam(':lastname', $lastname);
//        $insertQuery->bindParam(':licenseplate', $licenseplate);
                $insertQuery->bindParam('form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0', $email);

// insert a row
//        $username = $_POST['username'];
//        $password = $_POST['password'];
//        $firstname = $_POST['firstname'];
//        $lastname = $_POST['lastname'];
//        $licenseplate = $_POST['licenseplate'];
          $email = $_POST['email'];
        $insertQuery->execute();

        echo "New records created successfully";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
}