<?php
    echo "Hello there!<br>";

    $nev = "Béla";
    $eletkor = 20;
    $logikai = false;

    if($logikai) {
        echo "IGAZ<br>";
    } else {
        echo "HAMIS<br>";
    }

    $tomb = ['Béla', 'István', 'András', 12, false, [true, 'hamis']];

    for($i = 0; $i < count($tomb); $i++) {
        echo $tomb[$i] . '<br>';
    }
    
    var_dump($tomb);

    echo '<br><br>';

    function fuggvenynev($param1, $param2) {
        return $param1+$param2;
    }

    echo fuggvenynev(5, 10);

    $emberek = [
        [
            'nev' => 'András',
            'kor' => 50
        ],
        [
            'nev' => 'Gergő',
            'kor' => 18
        ],
        [
            'nev' => 'Béla',
            'kor' => 30
        ],
        [
            'nev' => 'István',
            'kor' => 22
        ]
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>7. gyakorlat - PHP</title>
</head>
<body>
    <?php foreach($emberek as $index => $ember): ?>
        <?=$ember['nev']?> (<?=$ember['kor']?>)<br>
    <?php endforeach ?>
</body>
</html>