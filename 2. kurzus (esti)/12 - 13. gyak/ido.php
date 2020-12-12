<?php


if(isset($_POST['varakozas']) && $_POST['varakozas'] == 'igen') {
    sleep(3);
}

echo date('H:i:s');