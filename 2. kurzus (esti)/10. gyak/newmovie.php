<?php
    function component($comp) {
        require_once('aloldal_' . $comp . '.php');
    }

    session_start();
    $bejelentkezve = isset($_SESSION['username']);

    if(!$bejelentkezve) {
        header('Location: index.php');
        die;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Új film beküldése</title>
</head>
<body>
    <?php component('menu'); ?>
    <form action="keres_newmovie.php">
        Film Címe<br>
        <input name="title">

        <br><br>

        Kiadás dátuma<br>
        <input name="year">

        <br><br>

        <input type="submit" value="Hozzáad">
    </form>
</body>
</html>