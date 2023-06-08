<?php

// Fetching Values from URL.
$prenom = $_POST['prenom1'];
$nom = $_POST['nom1'];
$adresse = $_POST['adresse1'];
$ville = $_POST['ville1'];
$email = $_POST['email1'];
$commentaires = $_POST['commentaires1'];
$desde = "claudiomonzoni@hotmail.com";
// $desde = "claudiomonzoni@hotmail.com";
$from = "shopincrans@jpbarras.ch";


$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
// To send HTML mail, the Content-type header must be set.
$subject = "Contact depuis le site jpbarras.ch";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-Type: text/html; charset=utf-8' . "\r\n";
//$headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' . "\r\n";
$headers .= 'From:' . $from. "\r\n"; // Sender's Email
// $headers .= 'Cc:' . "octabio@gmail.com". "\r\n"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:#000000;">
Datos del sitio.<br/>'
. 'Prenom: ' . $prenom . '<br/>'
. 'Nom: ' . $nom . '<br/>'
. 'Adresse: ' . $adresse . '<br/>'
. 'Ville: ' . $ville . '<br/>'
. 'Email: ' . $email. '<br/>'
. 'Commentaires: ' . $commentaires . '<br/>'
. '<br/>'
. 'Données extraites de Jpbarras.ch  .</div>';
$sendmessage = "<div style=\"background-color:#ffffff; color:white;\">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function. esau@bezirk.mx 
mail($desde, $subject, $sendmessage, $headers);
// mail("esau@bezirk.mx", $subject, $sendmessage, $headers);
echo "Merci " . $prenom . ", bientôt un conseiller vous contactera ";

} else {
echo "<span>* Email invalide *</span>";
}
?>