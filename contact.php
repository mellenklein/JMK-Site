<?php
if($_POST["message"]) {
    mail("maryellenklein@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form method="post" action="contact.php">
      <textarea name="message"></textarea>
      <input type="submit">
    </form>
  </body>
</html>
