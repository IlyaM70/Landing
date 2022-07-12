<?
$person=$_POST['person'];
$phone=$_POST['phone'];
$message=$_POST['message'];
$theme=$_POST['theme'];


$to = "iliya.merkulov@mail.ru";

$subject = $theme;

if (($_POST['person']!='') and ($_POST['phone']!='')){

$message = 
    '<html>
        <head>
            <title>'.$subject.'</title>
        </head>
        <body>
            <b>Имя: </b>'.$_POST['person'].'<br>
            <b>Телефон: </b>'.$_POST['phone'].'<br>
            <b>Сообщение: </b>'.$_POST['message'].'<br>
        </body>
    </html>';


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From:me<iliya.merkulov@mail.ru>\r\n";
$headers .= "Reply-To: iliya.merkulov@mail.ru\r\n";


mail($to, $subject, $message, $headers);

echo '<div class="review-block-mess">Спасибо за обращение! Мы свяжемся с вами в ближайшее время.</div>';
}

else{
    $message = 
    '<html>
        <head>
            <title>'.$subject.'</title>
        </head>
        <body>
            
            <b>Телефон: </b>'.$_POST['phone'].'<br>
            
        </body>
    </html>';


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From:me<iliya.merkulov@mail.ru>\r\n";
$headers .= "Reply-To: iliya.merkulov@mail.ru\r\n";


mail($to, $subject, $message, $headers);

echo '<div class="review-block-mess-1">Спасибо за обращение! Мы свяжемся с вами в ближайшее время.</div>';
}
?>