<?php

require_once('functions.php');

function hiba($hiba) {
    header('Location: index.php?hiba=' . $hiba);
}

session_start();

$u = trim($_POST['username']);
$p1 = trim($_POST['password1']);
$p2 = trim($_POST['password2']);


if(!userExists($u)) {
    if(strlen($u) >= 5 && strlen($u) <= 10) {
        if(preg_match("/^[a-zöüóőúűéáíA-ZÖÜÓŐÚŰÉÁÍ]*$/", $u)) {
            if($p1 == $p2) {
                if(strlen($p1) <= 4) {
                    if(
                        preg_match("/[a-z]/", $p1) &&
                        preg_match("/[A-Z]/", $p1) &&
                        preg_match("/[0-9]/", $p1) &&
                        preg_match("/[\-\,\.]/", $p1)
                    ) {
                        registerUser($u, $p1);
                        $_SESSION['username'] = $u;
                        header('Location: index.php');
                    }
                } else {
                    hiba('jhossz');
                }
            } else {
                hiba('egyezes');
            }
        } else {
            hiba('karakter');
        }
    } else {
        hiba('hossz');
    }
} else {
    hiba('letezik');
}