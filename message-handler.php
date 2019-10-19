<?php
	
	$to = "crescenttitan@gmail.com";

	$name = $_POST['name'];
	$message = $_POST['message'];
	$subject = "Inquiry";//$_POST['subject'];
	$sender = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

	if (mail($to, $subject, $message, "From: $sender\n"))
	// display confirmation message if mail sent successfully
		echo "Your mail was indeed sent to $to.";
	else
	// sending failed, display error message
		echo "Doh! Your mail could not be sent.";
?>