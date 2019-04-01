<?php
require_once('dbconfig.php');

$sql = 'SELECT * FROM Test WHERE testPrimary = "ejsPrimary"';
foreach($conn ->query($sql) as $row){
    print $row['testPrimary'];
    echo "<br> <br>";
    print $row['test1'];
    echo "<br><br>";
    print $row['test2'];
    echo "<br><br>";
    print $row['test3'];
}
?>