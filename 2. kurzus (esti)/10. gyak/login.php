<?php
require_once('functions.php');

session_start();

if(userExists($_POST['username'])) {
    if(checkPassword($_POST['username'], $_POST['password'])) {
        $_SESSION['username'] = $_POST['username'];
        header('Location: index.php');
    } else {
        header('Location: index.php?hiba=rossz');
    }
} else {
    header('Location: index.php?hiba=rossz');
}