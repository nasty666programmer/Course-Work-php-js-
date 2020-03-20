<?php  
$name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);
$amount = filter_var(trim($_POST['amount']),FILTER_SANITIZE_STRING);
$price = filter_var(trim($_POST['price']),FILTER_SANITIZE_STRING);
$code = filter_var(trim($_POST['code']),FILTER_SANITIZE_STRING);

$mysql = new mysqli('localhost','root','root','znucost');
$mysql->query("INSERT INTO `product` (`name`,`amount`,`price`,`code`) VALUES('$name','$amount','$price','$code')");

$mysql->close();
header('Location: /');

?>