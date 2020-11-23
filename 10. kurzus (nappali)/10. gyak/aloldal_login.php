<form action="login.php" method="post">
    Felhasználónév: <input name="username"> <br>
    Jelszó: <input type="password" name="password"> <br>
    <input type="submit" value="Bejelentkezés">
</form>

<br>
<br>

<form action="register.php" method="post">
    Felhasználónév: <input name="username"> <br>
    Jelszó: <input type="password" name="password1"> <br>
    Jelszó ismét: <input type="password" name="password2"> <br>
    <input type="submit" value="Regisztráció">
</form>

<br>
<br>

<?php if(isset($_GET['hiba'])): ?>
    <?php if($_GET['hiba'] == 'rossz'): ?>
        Hibás felhasználónév vagy jelszó!
    <?php elseif($_GET['hiba'] == 'bonyolultsag'): ?>
        A jelszónak tartalmaznia kell az angol ábécéből egy kisbetűt, egy nagy betűt, egy számot és egy speciális karaktert!
    <?php elseif($_GET['hiba'] == 'jhossz'): ?>
        A jelszó minimális hossza 4 karakter!
    <?php elseif($_GET['hiba'] == 'egyezes'): ?>
        A két jelszó nem egyezik!
    <?php elseif($_GET['hiba'] == 'karakter'): ?>
        A felhasználónév csak a magyar ábécé betűit tartalmazhatja!
    <?php elseif($_GET['hiba'] == 'hossz'): ?>
        A felhasználónév hossza minimum 5 karakter, maximum 10!
    <?php elseif($_GET['hiba'] == 'letezik'): ?>
        A felhasználónév foglalt!
    <?php endif ?>
<?php endif ?>