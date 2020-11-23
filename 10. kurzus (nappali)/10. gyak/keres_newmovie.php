<?php

session_start();

if(!isset($_SESSION['username'])) {
    header('Location: index.php');
    die;
}

require_once('functions.php');
newMovie($_GET['title'], $_GET['year'], $_SESSION['username']);
header('Location: index.php');