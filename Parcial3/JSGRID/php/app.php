<?php
    $usuario="root";
    $contraseña="";
    $conn = new PDO('mysql:host=localhost;dbname=baltierrezto', $usuario, $contraseña);

    $sql = "SELECT * FROM AUTOS";

    $res = $conn->query($sql)->fetchAll();

    $autos = [];

    class Auto{
        public $Marca = "";
        public $Modelo = "";
        public $Año = "";
        public $Color = "";
    }

    
    
    foreach ($res as $row)
    {
        $auto = new Auto();
        $auto->Marca = $row['marca'];
        $auto->Modelo =  $row['modelo'];
        $auto->Año = $row['año'];
        $auto->Color =  $row['color'];

        array_push($autos,$auto);

    }

    echo json_encode($autos);

        
?>