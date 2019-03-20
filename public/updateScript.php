<?php
require_once ('dbconfig.php');

// the list of allowed field names
$allowed = ["test1","test2","test3"];

// initialize an array with values:
$params = [];

// initialize a string with `fieldname` = :placeholder pairs
$setStr = "";

// loop over source data array
foreach ($allowed as $key)
{
    if (isset($_POST[$key]) && $key != "id")
    {
        $setStr .= "`$key` = :$key,";
        $params[$key] = $_POST[$key];
    }
}
$setStr = rtrim($setStr, ",");

$params['id'] = $_POST['id'];
$pdo->prepare("UPDATE Test SET $setStr WHERE testPrimary = :id")->execute($params);