<?php

function userExists($uname) {
    $adat = json_decode(file_get_contents('users.json'));
    return isset($adat->$uname);
}

function checkPassword($uname, $pass) {
    $user = json_decode(file_get_contents('users.json'))->$uname;
    return password_verify($pass, $user->password);
}

function registerUser($uname, $pass) {
    $adat = json_decode(file_get_contents('users.json'));
    $adat->$uname = (object)[
        "username" => $uname,
        "password" => password_hash($pass, PASSWORD_DEFAULT)
    ];

    file_put_contents('users.json', json_encode($adat, JSON_PRETTY_PRINT));
}