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
    die;
}

function component($aloldal) {
    require_once('aloldal_' . $aloldal . '.php');
}

function registerUser($uname, $pass) {
    $adatok = json_decode(file_get_contents('users.json'));
    $adatok->$uname = (object)[
        "username" => $uname,
        "password" => password_hash($pass, PASSWORD_DEFAULT)
    ];
    file_put_contents('users.json', json_encode($adatok, JSON_PRETTY_PRINT));
}

function getMovies() {
    $movies = json_decode(file_get_contents('movies.json'));
    return $movies;
}

function listCategories($categories) {
    $cat = '';
    foreach($categories as $category) {
        $cat .= $category . ', ';
    }
    return $cat;
}

function like($id, $uname) {
    $movies = getMovies();
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
    $movies = getMovies();
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
    $movies = getMovies();
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
        "title" =>$title,
        "year" =>$year,
        "genre" =>[],
        "like" =>[],
        "dislike" =>[],
        "create" =>$uname,
    ];
    file_put_contents('movies.json', json_encode($movies, JSON_PRETTY_PRINT));
}

function deleteMovie($id) {
    $movies = getMovies();
    $tmp = (object)[];
    foreach($movies as $idm => $movie) {
        if($idm != $id) {
            $tmp->$idm = $movie;
        }
    }
    file_put_contents('movies.json', json_encode($tmp, JSON_PRETTY_PRINT));
}

function getMovie($id) {
    $movies = getMovies();
    if(isset($movies->$id)) {
        return $movies->$id;
    } else {
        return (object)[];
    }
}