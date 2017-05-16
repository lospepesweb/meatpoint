<?php
/*header('Content-type: application/json');*/

if(!empty($_POST["nombreApellido"]) && !empty($_POST["consulta"]) && !empty($_POST["telefono"])){

$to = "info@meatpoint-sj.com";
$subject = "Consulta via WEB";

$contenido = "Nombre: ".$_POST["nombreApellido"]."\n";
$contenido .= "Edad: ".$_POST["edad"]."\n\n";
$contenido .= "Telefono: ".$_POST["telefono"]."\n\n";
$contenido .= "Email: ".$_POST["mail"]."\n\n";
$contenido .= "Tipo de Evento: ".$_POST["tipoEvento"]."\n\n";
$contenido .= "Localizacion: ".$_POST["locEvento"]."\n\n";
$contenido .= "Adultos: ".$_POST["numInvitados"]."\n\n";
$contenido .= "Niños: ".$_POST["ocultar"]."\n\n";
$contenido .= "Consulta: ".$_POST["consulta"]."\n\n";

$header = "From: info@meatpoint-sj.com\nReply-To:".$_POST["email"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/plain";

/*return print (json_encode('ok'));*/
/*mail($to, $subject, $contenido ,$header)*/
}
mail($to, $subject, $contenido ,$header)
/*return print (json_encode('no'));*/
?>