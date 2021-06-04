<?php
    $usuario="root";
    $contraseña="";
    $conn = new PDO('mysql:host=localhost;dbname=baltierrezto', $usuario, $contraseña);

    $sql = "SELECT * FROM AUTOS";
    foreach ($conn->query($sql) as $row) {

        echo  $row['marca']. " - ".
              $row['modelo'] . " - ".
              $row['año'] . " - ".
              $row['color'] . "<br><br>";
    }
?>