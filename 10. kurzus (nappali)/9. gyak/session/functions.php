<?php

function userExists($uname) {
    $adatok = json_decode(file_get_contents('users.json'));
    return isset($adatok->$uname);
}

function checkPassword($uname, $pass) {
    $adatok = json_decode(file_get_contents('users.json'));
    return password_verify($pass, $adatok->$uname->password);
}

function hiba($hiba) {
    header('Location: index.php?hiba=' . $hiba);
}

function registerUser($uname, $pass) {
    $adatok = json_decode(file_get_contents('users.json'));
    $adatok->$uname = (object)[
        "username" => $uname,
        "password" => password_hash($pass, PASSWORD_DEFAULT)
    ];
    file_put_contents('users.json', json_encode($adatok));
}