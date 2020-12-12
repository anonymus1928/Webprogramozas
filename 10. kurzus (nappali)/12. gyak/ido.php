<?php

if(isset($_GET['varakozas']) && $_GET['varakozas'] == 'igen') {
    sleep(3);
}

if(isset($_POST['varakozas']) && $_POST['varakozas'] == 'igen') {
    sleep(3);
}

echo date('H:i:s');