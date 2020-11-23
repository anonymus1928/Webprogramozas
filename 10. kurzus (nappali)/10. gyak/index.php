<?php
    require_once('functions.php');

    session_start();
    $bejelentkezve = isset($_SESSION['username']);

    $movies = getMovies();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session</title>
</head>
<style>
    table input {
        background: none;
        border: none;
        cursor: pointer;
    }
    table form {
        display: inline-block;
    }
    td {
        padding: 5px;
    }
</style>
<body>
    <?php if($bejelentkezve): ?>
        Hello <?=$_SESSION['username']?>!
        <?php component('menu') ?>

        
    <?php else: ?>
        
        <?php component('login') ?>
        
    <?php endif ?>

    <?php component('movielist') ?>
    <?php movieList($movies, $bejelentkezve) ?>

</body>
</html>