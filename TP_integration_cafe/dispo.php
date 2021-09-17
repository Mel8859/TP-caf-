<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3305);
if($mysqli->connect_error) {
  exit('Could not connect');
}



$sql="SELECT date, heure, SUM(nb) AS nombre_personnes FROM reservation GROUP BY date,heure";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "<table>";
  echo "<tr>";
  echo "<th>Date</th>";
  echo "<th>Heure</th>";  
  echo "<th>Nombre total de personnes</th>";
  echo "</tr>";
  echo "</table>";
  while($row = $result->fetch_assoc()) {
echo "<tr>";
echo "<td>" . $row["date"] . "</td>";
echo "<td>" . $row["heure"] . "</td>";
echo "<td>" . $row["nombre_personnes"] . "</td>";
echo "</tr>";
  }
} else {
  echo "0 results";
}
$mysqli->close();

 ?>

