<?php

session_start();

if(!isset($_SESSION['username'])) {
    header('Location: index.php');
    die;
}

require_once('functions.php');

if(getMovies($_GET['id'])->create != $_SESSION['username']) {
    header('Location: index.php');
    die;
}

deleteMovie($id);
header('Location: index.php');