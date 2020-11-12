<?php
    session_start();
    $bejelentkezve = isset($_SESSION['username']);

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session</title>
</head>
<body>
    <?php if($bejelentkezve): ?>
        Hello <?=$_SESSION['username']?>!
        <form action="logout.php" method="post">
            <input type="submit" value="Kijelentkezés">
        </form>
    <?php else: ?>
        <form method="post" action="login.php">
            Felhasználónév: <input name="username"> <br>
            Jelszó: <input type="password" name="password"> <br>
            <input type="submit" value="Bejelentkezés">
        </form>
        <br>
        <br>

        <form method="post" action="register.php">
            Felhasználónév: <input name="username"> <br>
            Jelszó: <input type="password" name="password1"> <br>
            Jelszó ismét: <input type="password" name="password2"> <br>
            <input type="submit" value="Regisztráció">
        </form>

        <br>
        <br>

        <?php if(isset($_GET['hiba'])): ?>
            <?php $h = $_GET['hiba'] ?>
            <?php if($h == 'rossz'): ?>
                Hibás felhasználónév vagy jelszó!
            <?php elseif($h == 'jhossz'): ?>
                Jelszó minimális hossza 4 karakter!
            <?php elseif($h == 'egyezes'): ?>
                A két jelszó nem egyezik!
            <?php elseif($h == 'karakter'): ?>
                A felhasználónév csak a magyar ábécé betűit tartalmazhatja!
            <?php elseif($h == 'hossz'): ?>
                A felhasználónév hossza minimum 5 karakter, maximum 10!
            <?php elseif($h == 'letezik'): ?>
                A felhasználónév foglalt!
            <?php endif ?>
        <?php endif ?>
    <?php endif ?>
</body>
</html>