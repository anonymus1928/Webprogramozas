<?php

session_start();
if(!isset($_SESSION['username'])) {
    header('Location: index.php');
    die;
}

require_once('functions.php');

dislike($_GET['id'], $_SESSION['username']);
header('Location: index.php');