<?php
session_start();
if(isset($_SESSION['user'])){
    header("location: general message.php");
}
require "dbconfig.php";

if(isset($_POST['login'])){
    $user = $_POST['username'];
    $pass = md5($_POST['password']);
    $messeg = "";

    if(empty($user) || empty($pass)) {
        $messeg = "Username/Password con't be empty";
    } else {
        $sql = "SELECT username, password FROM user WHERE username=? AND 
  password=? ";
        $query = $conn->prepare($sql);
        $query->execute(array($user,$pass));

        if($query->rowCount() >= 1) {
            $_SESSION['user'] = $user;
            $_SESSION['time_start_login'] = time();
            echo ("done");
            header("location: general message.php");
        } else {
            $messeg = "Username/Password is wrong";
        }
    }
}
?>