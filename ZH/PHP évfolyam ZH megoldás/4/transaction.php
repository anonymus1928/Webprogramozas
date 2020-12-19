<?php

session_start();

// Ha POST metodust használunk és JSON formátumban adjuk át a paramétereket, akkor kell ez a sor:
$_GET = json_decode(file_get_contents('php://input'), true);

// Ha a bemenet 0g 0s, akkor vissza is térhetünk, nincs mit kiszámolni.
if($_GET['s'] == 0 && $_GET['g'] == 0) {
    echo json_encode((object)['status' => 'error']);
    die;
}

// Innentől kezdve a GET és a POST ugyanúgy működik, csak a globális változókat kell kicserélni mindenhol.
// Biztosan létezik szebb és jobb megoldás erre, 23:39-kor ennyire tellett tőlem...
// Illetve nem kellett ennyire pontosan megcsinálni, ez elfogad 11-nél nagyobb s-t is.
if($_GET['action'] == 'income') {       // income
    $tmp           =  ($_SESSION['s'] + $_GET['s']) % 12;
    $_SESSION['g'] += $_GET['g'] + intdiv(($_SESSION['s'] + $_GET['s']), 12);
    $_SESSION['s'] =  $tmp;
    $_SESSION['d'] = date('Y.m.d H:i:s');
} else if($_GET['action'] == 'spend') { // spend
    $s = ($_SESSION['s'] - $_GET['s']) % 12;
    $ss = 0;
    if(($_SESSION['s'] - $_GET['s']) < 0) {
        $ss = abs(intdiv($_SESSION['s'] - $_GET['s'], 12));
        if(abs(($_SESSION['s'] - $_GET['s']) / 12) !== $ss) {
            $ss += 1;
        }
        $s  = $s !== 0 ? 12 - abs($s) : 0;
    }
    $g = $_SESSION['g'] - ($_GET['g'] + $ss);

    if($g < 0) {
        echo json_encode((object)['status' => 'error']);
        die;
    } else {
        $_SESSION['g'] = $g;
        $_SESSION['s'] = $s;
        $_SESSION['d'] = date('Y.m.d H:i:s');
    }
}

echo json_encode(
    (object)[
        'status' => 'ok',
        'date'   => $_SESSION['d'],
        'g'      => $_SESSION['g'],
        's'      => $_SESSION['s']
    ]
);