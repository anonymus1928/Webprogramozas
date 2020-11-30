<?php

// Dokumentáció: http://webprogramozas.inf.elte.hu/hallgatok/dzhbcx/handout/hu-storage.html

require_once('storage.php');

$storage = new JsonStorage('data.json');

$film = [
    "name" => "Ragyogás",
    "year" => 1980
];

// $storage->add($film);



// $film['year'] = 1982;
// $storage->update('5fbf849d887f3', $film);


var_dump($storage->findById('5fbf849d887f3'));

echo '<br><br>';

var_dump($storage->findAll());

echo '<br><br>';

var_dump($storage->findAll(['year' => 1966]));

echo '<br><br>';

var_dump($storage->query(function ($elem) {
    return $elem['year'] < 2000 && $elem['name'] == 'Ragyogás';
}));

echo '<br><br>';

$storage->delete('5fbf849d887f3');