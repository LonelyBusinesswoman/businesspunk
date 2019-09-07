<?php
	$formName = $_POST["hide"];
	$name = $_POST["name"];
	$tel = $_POST["tel"];
	$email = $_POST["email"];
	$message = "Имя: %s \nТелефон: %s \ne-mail: %s \nНазвание формы: %s";
	$message = sprintf($message, $name, $tel, $email, $formName);
	mail(" test@mail.ru", "Заявка с сайта", $message);
 ?>



