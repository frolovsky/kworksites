<?php

$adminmail = "admin@gexan.io";
$title 	   = "Message from GEXAN";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$comment = htmlspecialchars($comment);
$message = "Имя: $name \nТелефон: $phone\nКомментарий: $comment";

mail($adminmail, $title, $message);