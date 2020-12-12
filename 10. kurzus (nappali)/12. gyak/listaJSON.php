<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$adatok = [
    [
        "title" => "Kémesítve",
        "year" => 2019,
    ],
    [
        "title" => "Star Wars: A Birodalom visszavág",
        "year" => 1980,
    ],
    [
        "title" => "Jumanji: A következő szint",
        "year" => 2019,
    ],
    [
        "title" => "Az utolsó léghajlító",
        "year" => 2010,
    ],
    [
        "title" => "Verdák",
        "year" => 2006,
    ],
    [
        "title" => "Artemis Fowl",
        "year" => 2020,
    ],
    [
        "title" => "Bloodshot",
        "year" => 2020,
    ],
    [
        "title" => "Harry Potter és a titkok kamrája",
        "year" => 2002,
    ],
    [
        "title" => "Az aszfalt királyai",
        "year" => 2019,
    ],
    [
        "title" => "A Gyűrűk Ura: A gyűrű szövetsége",
        "year" => 2001,
    ],
    [
        "title" => "A Jó, a Rossz és a Csúf",
        "year" => 1966,
    ],
    [
        "title" => "Forrest Gump",
        "year" => 1994,
    ],
    [
        "title" => "Közönséges bűnözők",
        "year" => 1995,
    ],
    [
        "title" => "Csillagok között",
        "year" => 2014,
    ],
    [
        "title" => "Ragyogás",
        "year" => 1980,
    ],
    [
        "title" => "Coco",
        "year" => 2017,
    ],
    [
        "title" => "Gyalog galopp",
        "year" => 1975,
    ],
    [
        "title" => "A tanú",
        "year" => 1969,
    ],
    [
        "title" => "Így neveld a sárkányodat",
        "year" => 2010,
    ],
    [
        "title" => "A keresztapa",
        "year" => 1972,
    ]
];

// if(isset($_GET['year'])) {
//     $tmp = [];
//     foreach($adatok as $adat) {
//         if($adat['year'] == $_GET['year']) {
//             $tmp[] = $adat;
//         }
//     }
//     $adatok = $tmp;
// }
// 
// if(isset($_POST['year'])) {
//     $tmp = [];
//     foreach($adatok as $adat) {
//         if($adat['year'] == $_POST['year']) {
//             $tmp[] = $adat;
//         }
//     }
//     $adatok = $tmp;
// }


if(isset($_POST['varakozas']) && $_POST['varakozas'] == 'igen') {
    sleep(3);
}

$adatok['post'] = $_POST;

echo json_encode($adatok);