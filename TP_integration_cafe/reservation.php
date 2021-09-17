<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3305);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);


var_dump($tableau);

$name = $tableau[0];
$nb = $tableau[1];
$date = $tableau[2];
$heure = $tableau[3];
$message = $tableau[4];

$stmt = $mysqli->prepare('INSERT INTO reservation (name, nb, date, heure, message) VALUES (?,?,?,?,?)');
$stmt->bind_Param("sisss", $name, $nb, $date, $heure, $message);
$stmt->execute();

var_dump($mysqli->error);
die("stop");

 ?>



