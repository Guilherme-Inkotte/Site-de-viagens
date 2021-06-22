<?php
	$name = $_POST["ch_name"];
	$email = $_POST["ch_email"];
	$password = $_POST["ch_password"];
	$birthdate = $_POST["dt_birthdate"];
	$gender = $_POST["ch_gender"];
	
	$connection = mysqli_connect('localhost', 'root', '', 'grupo7');

	$result = mysqli_query($connection, "INSERT INTO users(name, email, password, birthdate, gender) VALUES ('".$name."','".$email."','".$password."','".$birthdate."','".$gender."')");

	echo json_encode($result);
?>