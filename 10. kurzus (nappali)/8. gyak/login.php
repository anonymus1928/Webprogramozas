<?php
    $hiba = true;
    if(isset($_POST['felhasznalonev']) && $_POST['felhasznalonev'] == 'almafa' && isset($_POST['password']) && $_POST['password'] == 'almafa1234') {
        $hiba = false;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <?php if(isset($_POST['felhasznalonev'])): ?>
        <?php if($hiba): ?>
            <form method="post">
                Felhasználónév: <input name="felhasznalonev"> <br>
                Jelszó: <input type="password" name="password"> <br>
                <input type="submit">
            </form>
            Sikertelen bejelentkezés!
        <?php else: ?>
            Sikeres bejelentkezés!
        <?php endif ?>
    <?php else: ?>
        <form method="post">
            Felhasználónév: <input name="felhasznalonev"> <br>
            Jelszó: <input type="password" name="password"> <br>
            <input type="submit">
        </form>
    <?php endif ?>
</body>
</html>