<?php

// Dokumentáció: http://webprogramozas.inf.elte.hu/hallgatok/dzhbcx/handout/hu-storage.html

require_once('storage.php');

$data = new JsonStorage('data.json');

// $film = [
//     "name" => "A Gyűrűk Ura: A gyűrű szövetsége",
//     "year" => 2001
// ];
// 
// $data->add($film);

// $film['year'] = 2002;

// $data->update('5fbbed296b050', $film);


$film = $data->findById('5fbbed296b050');
var_dump($film);

echo '<br><br>';

$film = $data->findAll();
var_dump($film);

echo '<br><br>';

$film = $data->findAll(['year' => 1980]);
var_dump($film);

echo '<br><br>';

$film = $data->query(function ($elem) {
    return $elem['year'] < 2000;
});
var_dump($film);

echo '<br><br>';

$data->delete('5fbbed296b050');