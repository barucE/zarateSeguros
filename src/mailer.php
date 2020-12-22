<?php
if(isset($_SERVER['HTTP_ORIGIN']))
    {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') 
    {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }

$postdata = file_get_contents("php://input");

if(isset($postdata)){
	$data = json_decode($postdata);

	$to      = 'atencion@zarateseguros.com';
	$from 	 = 'contacto@zarateseguros.com';
	$fromName = 'Contacto';
	$subject = 'Contacto desde página web';

	//email body content
    $htmlContent = '<h1>Contacto desde página web</h1>
    <p>El siguiente usuario se contacto desde la página web:</p>
    <p>Nombre: <strong>'.$data->name.'</strong></p>
	<p>Teléfono: <strong>'.$data->phone.'</strong></p> 
	<p>Empresa: <strong>'.$data->company.'</strong></p>
	<p>Correo electrónico: <strong>'.$data->email.'</strong></p>';

	//header for sender info
	$headers = "From: $fromName"." <".$from.">";

	//boundary 
	$semi_rand = md5(time()); 
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

	//headers for attachment 
	$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 

	//multipart boundary 
	$message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
	"Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n"; 

	$message .= "--{$mime_boundary}--";
	$returnpath = "-f" . $from;

	//send email
	$mail = @mail($to, $subject, $message, $headers, $returnpath);
}
?> 