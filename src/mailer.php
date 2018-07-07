<?php
echo "que mensos";
$data = isset($_POST['data']) ? $_POST['data'] : null;

if(isset($data)){
	$to      = 'hsaul.sanchez@outlook.com';
	$subject = '';
	$message = $data['message'];
	$headers = 'From: '.$data['from'] . "\r\n" .
	    'Reply-To: webmaster@example.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
}
?> 