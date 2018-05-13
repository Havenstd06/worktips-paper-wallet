<?php 
// set the content type
header('Content-type: text/plain');
// force save as dialog (and suggest filename)
header('Content-Disposition: attachment; filename="WtipAddress.txt"');
// set the variables
$address = $_POST['address'];
$privspendkey = $_POST['privspendkey'];
$privviewkey = $_POST['privviewkey'];
$seedphrase = $_POST['seedphrase'];
// print the text
echo "Address: $address\r\nPrivate Spend Key: $privspendkey\r\nPrivate View Key: $privviewkey\r\nSeed Phrase: $seedphrase\r\n\r\nThank you for using the WorkTips Wallet Generator!\r\nhttps://wtipwallet.havens.space/";

 ?>