<?php

require_once('dbconfig.php');


If(isset($_POST['submit'])) {
    try {

// set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// prepare sql and bind parameters
        $insertQuery = $conn->prepare("INSERT INTO Test (testPrimary, test1, test2, test3)
VALUES (:testPrimary, :test1, :test2, :test3)");
        $insertQuery->bindParam(':testPrimary', $testPrimary);
        $insertQuery->bindParam(':test1', $test1);
        $insertQuery->bindParam(':test2', $test2);
        $insertQuery->bindParam(':test3', $test3);


// insert a row
        $testPrimary = $_POST['testPrimary'];
        $test1 = $_POST['test1'];
        $test2 = $_POST['test2'];
        $test3 = $_POST['test3'];
        $insertQuery->execute();

        echo "New records created successfully";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
}