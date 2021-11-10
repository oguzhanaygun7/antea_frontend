<?php
require("class.phpmailer.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
//$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
$mail->Host = "mail.anteaclinic.com";
$mail->Port = 587; //465; // or 587
//$mail->IsHTML(true);
$mail->SetLanguage("tr", "phpmailer/language");
$mail->CharSet  ="utf-8";

$mail->Username = "deneme@anteaclinic.com"; // Mail adresi
$mail->Password = "deneme123"; // Parola
$mail->SetFrom("deneme@anteaclinic.com", $_POST['Title']); // Mail adresi

$mail->AddAddress("info@anteaclinic.com"); // Gönderilecek kişi

$mail->Subject = $_POST['Subject'];
$mail->Body = $_POST['Body'];

if(!$mail->Send()){
                echo "Mailer Error: ".$mail->ErrorInfo;
                echo "Mailer Error: ".$request->body;
} else {
                echo "Message has been sent";
}
//Title=asdSubject=asdBody=Ad: asd
//E-Mail: asd
//Telefon: asdMailer Error: Message body emptyMailer Error:
?>

