<?php

require_once('functions.php');

function hiba($hiba) {
    header('Location: index.php?hiba=' . $hiba);
    die;
}

session_start();

$u = trim($_POST['username']);
$p1 = trim($_POST['password1']);
$p2 = trim($_POST['password2']);


if(userExists($u)) hiba('letezik');

if(strlen($u) < 5 || strlen($u) > 10) hiba('hossz');

if(!preg_match("/^[a-zöüóőúűéáíA-ZÖÜÓŐÚŰÉÁÍ]*$/", $u)) hiba('karakter');

if($p1 != $p2) hiba('egyezes');

if(strlen($p1) > 4) hiba('jhossz');

if(
    !preg_match("/[a-z]/", $p1) &&
    !preg_match("/[A-Z]/", $p1) &&
    !preg_match("/[0-9]/", $p1) &&
    !preg_match("/[\-\,\.]/", $p1)
) hiba('rossz');

registerUser($u, $p1);
$_SESSION['username'] = $u;
header('Location: index.php');