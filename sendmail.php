<?php

$email = $_POST['email'];
$firstname = $_POST['firstname'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$text = $_POST['text'];
$para  = 'brayanacebo@gmail.com';
$titulo = 'Contacto Web';

// message
$mensaje = '
<html>
<head>
  <title>Sitio Web Personal</title>
</head>
<body>
  <p>¡Hola Brayan Acebo, hay alguien que desea contactar contigo!</p>
  <table>
    <tr>
      <th>Nombre</th><th>Email</th><th>Teléfono</th><th>Empresa</th><th>Mensaje</th>
    </tr>
    <tr>
      <td>'.$firstname.'</td><td>'.$email.'</td><td>'.$phone .'</td><td>'.$company .'</td><td>'.$text .'</td>
    </tr>
  </table>
</body>
</html>
';


$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Cabeceras adicionales
$cabeceras .= 'To: Brayan Acebo' . "\r\n";
$cabeceras .= 'From: Contacto <'.$email.'>' . "\r\n";

$return = mail($para, $titulo, $mensaje, $cabeceras);


if($return){
	header("Location: index.php?res=ok#ancla");
	die();
}else{
	header("Location: index.php?res=er#ancla");
	die();
}