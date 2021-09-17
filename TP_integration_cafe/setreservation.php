<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3305);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);
$nom=$tableau[0];
$nombre=$tableau[1];
$date=$tableau[2];
$heure=$tableau[3];
$message=$tableau[4];
$heureConc= strstr($heure,':',true).':%';

$stmt = $mysqli-> prepare("SELECT SUM(nb) as places_occupees from reservation where (heure like ? and date = ?) GROUP BY date ");

$stmt->bind_Param("ss", $heureConc, $date);

$stmt->execute();

$stmt->bind_result($places_occupees);
$stmt->fetch();
$stmt->close();


    if (($places_occupees + $nombre)> 50) {
    echo "Plus de places disponibles, veuillez réserver un autre créneau";
    } else {
    $stmt = $mysqli->prepare('INSERT INTO reservation (name, nb, date, heure, message) VALUES (?,?,?,?,?)');
    $stmt->bind_Param("sisss", $nom, $nombre, $date, $heure, $message);
    $stmt->execute();
    $stmt->close();
    echo "Table réservée :-)";
    }

$mysqli->close();

 ?>








