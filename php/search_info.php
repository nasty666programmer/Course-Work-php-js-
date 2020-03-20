<?php  
$name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);
$amount = filter_var(trim($_POST['amount']),FILTER_SANITIZE_STRING);
$price = filter_var(trim($_POST['price']),FILTER_SANITIZE_STRING);
$code = filter_var(trim($_POST['code']),FILTER_SANITIZE_STRING);

$mysql = new mysqli('localhost','root','root','znucost');
 $result = $mysql->query("SELECT * FROM `product` WHERE `name` = '$name'");

 $user = $result->fetch_assoc();
 if(count($user) == 0) {
     echo 'by your request, nothing was found';
     exit();
 }
 
    foreach($user as $key => $value) {
        $i = $value;
        echo "<br/> $i";
       
    }
    
$mysql->close();

//header('Location: /');  

?>