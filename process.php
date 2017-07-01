<?php
$n1 = $_POST['player1Name'];
$n2 = $_POST['player2Name'];
$s1 = $_POST['score1'];
$s2 = $_POST['score2'];


$servername = "ec2-34-207-252-72.compute-1.amazonaws.com";
$username = "fAjaxDB_user31";
$password = "fAjaxDB_user31";
$dbname = "fAjaxDB_user31";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO game (name, score)
VALUES ('$n1', '$s1')";
$sql2 = "INSERT INTO game (name, score)
VALUES ('$n2', '$s2')";
if ($conn->query($sql) === TRUE && $conn->query($sql2) === TRUE ) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>