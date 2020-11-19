<?php

session_start();
require_once('functions.php');

if(!isset($_SESSION['username'])) {
    header('Location: index.php');
    die;
}

dislike($_GET['id'], $_SESSION['username']);
header('Location: index.php');