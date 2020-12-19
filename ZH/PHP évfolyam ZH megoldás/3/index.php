<?php
// A legegyszerűbb módszer, ha a Storage osztályt használjuk.
// A kódot kimásoltam és betettem egy Storage.php fileba (http://webprogramozas.inf.elte.hu/hallgatok/dzhbcx/handout/hu-storage.html)
// Létrehoztam egy data.json filet és írási jogot adtam rá other-nek!
include_once('Storage.php');
$storage = new JsonStorage('data.json');

// Nem kellett validálni, feltesszük, hogy a bemenet helyes!
// Valahogyan viszont ellenőriznünk kell, hogy volt-e POST
// Ezt többféleképpen is ellenőrizhetjük:
//   - ha nagyon fancyk akarunk lenni: $_SERVER['REQUEST_METHOD'] == 'POST'
//   - de tökéletesen elegendő, ha megnézzük $_POST elemszámát
if(count($_POST) == 4) { // Azért 4, mert 4 inputnak kell lennie
  // Ellenőrizzük, hogy van-e már ilyen nevű eltárolt adatunk
  // Azért érdemes a findAll-t használni, mert akkor ki tudjuk nyerni az
  // eltárolt adat azonosítóját, amire frissítés esetén szükségünk lesz.
  $entry = $storage->findAll(['name' => $_POST['name']]);

  // A tárolni kívánt adatok előkészítése, ha megfelelőek voltak a form name-jei, akkor ez kihagyható.
  $tmpEntry = [
    'name' => $_POST['name'],
    'amount' => (int)$_POST['amount'],
    'color' => $_POST['color'],
    'keep' => $_POST['keep'] == 'false' ? false : true, // Erre azért van szükség, mert PHP-ban minden string true-ra értékelődik ki (empty-t ("") kivéve)
  ];

  // A findOne null-al tér vissza, ha nincs találat, így használhatunk isset()-et
  if(count($entry)) {
    // Az adat frissítése
    $id = key($entry); // key függvénnyel lekérjük az adat azonosítóját (biztosan tudjuk, hogy 1 eleme lesz mindig ennek a tömbnek)
    $storage->update($id, $tmpEntry);
  } else {
    // Új adat elmentése
    $storage->add($tmpEntry);
  }
}
var_dump($_GET);

if(isset($_GET['delete'])) {
  $storage->delete($_GET['delete']);
  header('Location: index.php'); // Ez nem a legszebb megoldás, viszont így egyszerűen eltüntetjük a delete paramétert az url-ből
  die; // A header önmagában nem elegendő, mert a további kód lefut a szerveren, ezért kell ez a sor.
}

// Az összes adatbázisban lévő elem kinyerése
$datas = $storage->findAll();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3. feladat</title>
</head>
<body>
  <h1>3. feladat</h1>

  <h2>Űrlap</h2>
  <form method="post">
    Kincs neve: <input type="text" name="name"><br>
    Kincs értéke: <input type="number" name="amount"><br>
    Kincs színe: 
    <select name="color">
      <option value="piros">Piros</option>
      <option value="narancs">Narancs</option>
      <option value="sárga">Sárga</option>
      <option value="zöld">Zöld</option>
      <option value="kék">Kék</option>
      <option value="lila">Lila</option>
    </select><br>
    Megtartjuk?<br>
    <input type="radio" name="keep" id="igen" value="true"><label for="igen">Igen</label><br>
    <input type="radio" name="keep" id="nem" value="false"><label for="nem">Nem</label><br>
    <input type="submit" value="Küldés">
  </form>

  <h2>Kincslista</h2>
  <table>
    <tr>
      <th>Név</th>
      <th>Érték</th>
      <th>Szín</th>
      <th>Megtartjuk?</th>
      <th></th>
    </tr>

    <!-- Itt ki tudjuk használni a Storage osztály egyik nagy előnyét, mert a $datas array
         elemeinek a kulcsai a Storage-beli azonosítók lesznek. Ezt pedig fel tudjuk használni
         a törlésnél, mert a $storage->delete() metódusnak a Storage-beli id kell. -->
    <?php foreach($datas as $id => $data): ?>

      <tr>
        <td><?=$data['name']?></td>
        <td><?=$data['amount']?></td>
        <td><?=$data['color']?></td>
        <td><?=$data['keep'] ? 'Megtartjuk' : 'Eladományozzuk'?></td>
        <td><a href="index.php?delete=<?=$id?>">Töröl</a></td>
      </tr>

    <?php endforeach ?>

  </table>

</body>
</html>