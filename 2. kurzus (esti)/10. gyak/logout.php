<?php
session_start();

// $_SESSION kiürítése
session_unset();

// $_SESSION törlése
session_destroy();

header('Location: index.php');