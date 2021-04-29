<?php
$servername = "localhost";
$username = "root";
$password_bd = "";
$db = "LOGINJB";

$connection = new mysqli($servername, $username, $password_bd, $db);

if ($connection->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}



$user = $_POST['user'];
$password = $_POST['password'];



$sql = "SELECT * FROM users WHERE (email='$user' OR user='$user') AND password='$password' LIMIT 1;";
$result = $connection->query($sql);
$data = mysqli_num_rows($result);
if ($data == 1) {
    $msg = "OK";

    $row = mysqli_fetch_assoc($result);
    $first_name = $row['FIRST_NAME'];
    $last_name = $row['LAST_NAME'];

    $name = "$first_name $last_name";

    echo json_encode([
        'user' => $user,
        'password' => $password,
        'name' => $name,
        'msg' => $msg
    ]);
} else {
    $msg = "Datos incorrectos";

    
    echo json_encode([
        'msg' => $msg
        ]);
    
}


$connection->close();
