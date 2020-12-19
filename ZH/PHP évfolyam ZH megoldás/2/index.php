<?php
$messages = [];

// goblins
// a ctype_digit-tel több legyet ütünk egy csapásra.
// Akkor igaz, ha az ellenőrizendő STRING mindegyik karaktere egy digit.
// Emiatt kiesnek a törtszámok (tizedespont nem digit) és a negatív számok is (a - karakter sem digit)
if(!isset($_GET['goblins']) || !ctype_digit($_GET['goblins'])) {
  $messages[] = 'Érvénytelen goblin mennyiség!';
}

// chief
// Ellenőrizni kellett, hogy tartalmaz-e szóközt. Itt ez elég rondán van megoldva, de erre van egy szép függvény:
//     str_contains($_GET['chief'], ' ')
// Azonban ez csak PHP 8-ban került be, a szerveren (és a világ nagy részén) még PHP 7.3 körül járunk
if(!isset($_GET['chief']) || strpos($_GET['chief'], ' ') == false) {
  $messages[] = 'Érvénytelen vezető!';
} else {

  // Ha van chief és van szóköz is, akkor ellenőrizzük a többit. Ezt természetesen szét lehet darabolni, így elég csúnya, de kompakt...
  // Belülről kifelé:
  //   - explode()       -> szóközönként "felrobbantja" a sztringet és a darabokból készít egy array-t.
  //   - array_reverse() -> mivel feltételezhetjük, hogy a rang mindig a legutolsó helyen szerepel, így
  //                        megfordítva az array-t a nulladik elem lesz a validálandó érték.
  //   - in_array()      -> végezetül pedig ellenőrizzük, hogy az alábbi $ranks-ben szerepel-e a kinyert rang.
  $ranks = ['goblinka', 'kisfőnök', 'nagyfőnök', 'főfőnök', 'törzsfő'];
  if(!in_array(array_reverse(explode(' ', $_GET['chief']))[0], $ranks)) {
    $messages[] = 'Érvénytelen rang!';
  }
  
  if($_GET['chief'] == 'goblinka' || array_reverse(explode(' ', $_GET['chief']))[0] == 'kisfőnök') {
    $messages[] = 'Túl alacsony rang!';
  }
}

// shovels
// Ugyanaz mint a goblins-nál, ld.: 8-as sor
if(!isset($_GET['shovels']) || !ctype_digit($_GET['shovels'])) {
  $messages[] = 'Érvénytelen ásó mennyiség!';
} else {
  if($_GET['goblins'] > $_GET['shovels']) {
    $messages[] = 'Túl kevés ásó!';
  }
}

// Ha ezen a ponton a $messages üres, akkor az azt jelenti, hogy nincs hiba, mehet az akció.
if(count($messages) == 0) {
  if($_GET['shovels'] <= $_GET['goblins']*2) {
    $messages[] = 'Gyorsan megszerezzük a kincset!';
  } else {
    $messages[] = 'Indulhat az akció!';
  }
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2. feladat</title>
</head>
<body>
  <h1>2. feladat</h1>

  <h2>Üzenetek</h2>
  <?php foreach($messages as $error): ?>
    <ul>
      <li><?=$error?></li>
    </ul>
  <?php endforeach ?>

  <h2>Próbalinkek</h2>
  <a href="index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=7"><pre>index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=7</pre></a>
  <a href="index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=5&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php"><pre>index.php</pre></a>
  <a href="index.php?goblins=nemszám&chief=nincsszóköz&shovels=nemszám"><pre>index.php?goblins=nemszám&chief=nincsszóköz&shovels=nemszám</pre></a>
  <a href="index.php?goblins=-5&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=-5&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php?goblins=16.2&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=16.2&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php?goblins=16&chief=Snuch Nawdow nagyfőnök&shovels=10"><pre>index.php?goblins=16&chief=Snuch Nawdow nagyfőnök&shovels=10</pre></a>
  <a href="index.php?goblins=5&chief=Snuch Nawdow párttitkár&shovels=10"><pre>index.php?goblins=5&chief=Snuch Nawdow párttitkár&shovels=10</pre></a>
  <a href="index.php?goblins=5&chief=Snuch Nawdow kisfőnök&shovels=10"><pre>index.php?goblins=5&chief=Snuch Nawdow kisfőnök&shovels=10</pre></a>
</body>
</html>