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

function getMovies() {
    return json_decode(file_get_contents('movies.json'));
}

function listCategories($categories) {
    $cat = '';
    foreach($categories as $category) {
        $cat .= $category;
    }
    return $cat;
}

function like($id, $uname) {
    $movies = json_decode(file_get_contents('movies.json'));
    if(!isset($movies->$id)) return;

    if(in_array($uname, $movies->$id->like)) {
        $tmp = [];
        foreach($movies->$id->like as $u) {
            if($u != $uname) $tmp[] = $u;
        }
        $movies->$id->like = $tmp;
    } else {
        if(in_array($uname, $movies->$id->dislike)) {
            $tmp = [];
            foreach($movies->$id->dislike as $u) {
                if($u != $uname) $tmp[] = $u;
            }
            $movies->$id->dislike = $tmp;
        }
        $movies->$id->like[] = $uname;
    }
    file_put_contents('movies.json', json_encode($movies, JSON_PRETTY_PRINT));
}

function dislike($id, $uname) {
    $movies = json_decode(file_get_contents('movies.json'));
    if(!isset($movies->$id)) return;

    if(in_array($uname, $movies->$id->dislike)) {
        $tmp = [];
        foreach($movies->$id->dislike as $u) {
            if($u != $uname) $tmp[] = $u;
        }
        $movies->$id->dislike = $tmp;
    } else {
        if(in_array($uname, $movies->$id->like)) {
            $tmp = [];
            foreach($movies->$id->like as $u) {
                if($u != $uname) $tmp[] = $u;
            }
            $movies->$id->like = $tmp;
        }
        $movies->$id->dislike[] = $uname;
    }
    file_put_contents('movies.json', json_encode($movies, JSON_PRETTY_PRINT));
}

function newMovie($title, $year, $uname) {
    $movies = json_decode(file_get_contents('movies.json'));
    $max = null;
    $volt = false;
    foreach($movies as $movie) {
        if(!$volt) {
            $volt = true;
            $max = $movie->id;
        } else if($max < $movie->id) {
            $max = $movie->id;
        }
    }
    $max++;
    $movies->$max = (object)[
        "id" => $max,
        "title" => $title,
        "year" => $year,
        "genre" => [],
        "like" => [],
        "dislike" => [],
        "create" => $uname,
    ];
    file_put_contents('movies.json', json_encode($movies, JSON_PRETTY_PRINT));
}