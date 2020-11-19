<?php

session_start();
require_once('functions.php');

if(!isset($_SESSION['username'])) {
    header('Location: index.php');
    die;
}

like($_GET['id'], $_SESSION['username']);
header('Location: index.php');