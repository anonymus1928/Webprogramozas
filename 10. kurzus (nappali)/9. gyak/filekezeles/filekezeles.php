<?php

echo file_get_contents('test.txt');
echo '<br>';

file_put_contents('test.txt', 'Esett egész nap az eső!');


$adatok = json_decode(file_get_contents('adatok.json'));

var_dump($adatok);
echo '<br>';
echo $adatok[1]->{'nev-k'};

$adatok[2]->nev = 'Barackfa", asdf';
$adatok[2]->gyumolcs = 'barack';

file_put_contents('adatok.json', json_encode($adatok, JSON_PRETTY_PRINT));