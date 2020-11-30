# Webprogramozás - PHP csoport ZH

A ZH megírásához használható segédeszközök:
- órai kódok
- órai feladatok megoldásainak a kódjai
- PHP dokumentáció

A ZH alatt az egymással való kommunikáció nem megengedett, ha hasonló megoldásokat találok, akkor az illetőket megkérhetem arra, hogy védjék meg dolgozatukat.

A ZH ideje alatt bent leszek egy Teams hívásban, kérdés, probléma esetén elérhető leszek.

Nem követelmény az igényes megjelenés! Ne menjen el feleslegesen idő azzal, hogy CSS-el bajlódsz!

Összesen 3 plusz pont szerezhető, mely hozzáadódik az elért pontszámhoz. Abban az esetben, ha így a pontszám túllépné a 10-et, a többlettpontok hozzáadódnak az extra pontokhoz.

A ZH megírására 45 perc áll rendelkezésre, ezenfelül 15 perc jut az adminisztrációra (feladatok olvasása, feltöltés EBR-be stb.).

Beadás: http://webprogramozas.inf.elte.hu/ebr

Sok sikert kívánok!

## Lore

A következőkben egy ingatlaniroda nyilvántartó rendszerét kell elkészítened.

## Feladat

A lenti JSON-ben az ```ingatlanok``` tartalmazza a meghirdetett ingatlanok adatait. Ezek a következők: város, ingatlanügynök neve, hirdetés kategóriája (```elado```/```kiado```) és irányár. Az ```ugynokok``` pedig tartalmazza az ingatlanügynökök jutalékának mértékét.

Végezd el a következő feladatokat:
- A szűrési feltétel szerint jelenítsd meg táblázatban az adatokat!
- A táblázat utolsó oszlopában (```Várható jutalék```) számítsuk ki, hogy az irányár alapján mennyi a várható jutaléka az adott ingatlant árusító ügynöknek!
- Legyenek jelölőnégyzetek (```checkbox```) mindegyik ügynöknek (```ugynok```)
- Legyen egy gomb, amelyre kattintva a fenti input PHP-ban feldolgozásra kerül (mindegy, hogy GET vagy POST kéréssel):
  - ```ugynok```
    - A ```ugynokok``` alapján generáld le a ```checkbox```-okat
    - A táblázatban csak azokat az ingatlanokat jelenítsd meg, amelyek ügynökei ki lettek pipálva
    - Ha egyik ügynök sincs kipipálva, jelenítsd meg az összes ingatlant

- Feladatok extra pontokért:
  - Az ingatlanhirdetések kategóriája szerint (```elado```/```kiado```) alapján legyen a táblázat adott sora:
    - kék, ha eladó
    - zöld, ha kiadó
  - A ```form``` legyen állapottartó, tehát a megadott érték elküldést követően maradjon meg az elküldött adat!

## Pontozás

- Az adatok helyesen vannak beemelve json file-ból (**2 pont**)
  - Ha nem menne, égesd be a php file-ba (1 pont)
- A táblázat legenerálása helyes (szűrés nem számít) (**2 pont**)
- A táblázat ```Várható jutalék``` oszlopa helyesen számítódik ki (**2 pont**)
  - Képlet: ```irányár * az_ügynök_jutaléka```
  - **Figyelj arra, hogy az ügynökök jutaléka százalékosan van megadva (pl.: Laurának 2.5%)**
  - Ha nem sikerül az ügynök jutalékát kinyerni, akkor használj konstans ```2%```-ot (1 pont)
- A ```ugynok``` szűrés helyesen működik
  - A ```checkbox```-ok legenerálása helyes (**1 pont**)
    - Tipp: Ha végigiterálsz az ügynökökön, akkor a kulcsot egy foreach-ben így tudod megszerezni: ```foreach($adatok as $kulcs => $ertek)```
  - Helyesen szűri az ingatlanokat (**3 pont**)
    - Ha csak egy ügynökre szűr (2 pont)
    - Tipp (nem kell eszerint haladni):
      - Készíts egy függvényt, ami vár két tömböt. Egyet az ingatlanokkal és egyet az ügynökökkel (akikre szűrni akarsz)
      - Hozz létre lokálisan egy üres tömböt
      - Iterálj végig a paraméterben kapott ingatlanos tömbön, ha az adott elem ügynöke szerepel a paraméteresen kapott ügynökös tömbben, akkor szúrd be a most létrehozott lokális tömbbe az adott ingatlant
      - Végezetül térj vissza a most létrehozott lokális tömbbel
- *Extra pontok*
  - Az ingatlanhirdetések kategóriája alapján a táblázat sorai kékek (ha eladó) és zöldek (ha kiadó) (**+1 pont**)
  - A ```form``` állapottartó (a ```form``` elküldése után a bevitt adatok visszaíródnak) (**+2 pont**)

## Példa a táblázatra

Város       | Ügynök   | Irányár     | Várható jutalék
-----       | ------   | -------     | ------------------
Budapest    | Evelin   | 25000000 Ft | 812500 Ft
Debrecen    | Zoltán   | 250000 Ft   | 7500 Ft
Szeged      | Dorottya | 30000000 Ft | 1050000 Ft
Debrecen    | Zoltán   | 110000 Ft   | 3300 Ft
Nyíregyháza | Evelin   | 200000 Ft   | 7000 Ft
...         | ...      | ...         | ...

## Induló kód

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP csoport ZH - NEPTUNKÓD</title>
</head>
<style>
    table {
        border-collapse: collapse;
    }
    td, th {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
    }
</style>
<body>
    <form>
        Ügynökök:<br>
            <!-- Ide generáld le a checkbox-okat! -->
            
        <br><br>

        <input type="submit" value="Szűrés">
    </form>

    <br><br>

    <table>
        <tr>
            <th>Város</th>
            <th>Ügynök</th>
            <th>Irányár</th>
            <th>Várható jutalék</th>
        </tr>

        <!-- A táblázat többi sorát ide generáld -->

    </table>
</body>
</html>
```

## JSON

```json
{
    "ingatlanok": [
        {
            "varos": "Budapest",
            "ugynok": "Evelin",
            "kategoria": "elado",
            "iranyar": 25000000
        },
        {
            "varos": "Debrecen",
            "ugynok": "Zoltán",
            "kategoria": "kiado",
            "iranyar": 250000
        },
        {
            "varos": "Szeged",
            "ugynok": "Dorottya",
            "kategoria": "elado",
            "iranyar": 30000000
        },
        {
            "varos": "Debrecen",
            "ugynok": "Zoltán",
            "kategoria": "kiado",
            "iranyar": 110000
        },
        {
            "varos": "Nyíregyháza",
            "ugynok": "Evelin",
            "kategoria": "kiado",
            "iranyar": 200000
        },
        {
            "varos": "Szeged",
            "ugynok": "Laura",
            "kategoria": "elado",
            "iranyar": 15000000
        },
        {
            "varos": "Szekszárd",
            "ugynok": "Zoltán",
            "kategoria": "kiado",
            "iranyar": 120000
        },
        {
            "varos": "Paks",
            "ugynok": "Laura",
            "kategoria": "elado",
            "iranyar": 232000000
        },
        {
            "varos": "Pécs",
            "ugynok": "Laura",
            "kategoria": "elado",
            "iranyar": 20000000
        }
    ],
    "ugynokok": {
        "Laura": 2.5,
        "Zoltán": 3,
        "Evelin": 3.25,
        "Dorottya": 3.5
    }
}
```

## PHP tömbök
*Ha nem menne a file-ból beolvasás*

### Asszociatív tömbök tömbjeként

```php
// ingatlanok
[
    [
        "varos" => "Budapest",
        "ugynok" => "Evelin",
        "kategoria" => "elado",
        "iranyar" => 25000000
    ],
    [
        "varos" => "Debrecen",
        "ugynok" => "Zoltán",
        "kategoria" => "kiado",
        "iranyar" => 250000
    ],
    [
        "varos" => "Szeged",
        "ugynok" => "Dorottya",
        "kategoria" => "elado",
        "iranyar" => 30000000
    ],
    [
        "varos" => "Debrecen",
        "ugynok" => "Zoltán",
        "kategoria" => "kiado",
        "iranyar" => 110000
    ],
    [
        "varos" => "Nyíregyháza",
        "ugynok" => "Evelin",
        "kategoria" => "kiado",
        "iranyar" => 200000
    ],
    [
        "varos" => "Szeged",
        "ugynok" => "Laura",
        "kategoria" => "elado",
        "iranyar" => 15000000
    ],
    [
        "varos" => "Szekszárd",
        "ugynok" => "Zoltán",
        "kategoria" => "kiado",
        "iranyar" => 120000
    ],
    [
        "varos" => "Paks",
        "ugynok" => "Laura",
        "kategoria" => "elado",
        "iranyar" => 232000000
    ],
    [
        "varos" => "Pécs",
        "ugynok" => "Laura",
        "kategoria" => "elado",
        "iranyar" => 20000000
    ]
]



// ugynokok
[
    "Laura" => 2.5,
    "Zoltán" => 3,
    "Evelin" => 3.25,
    "Dorottya" => 3.5
]
```

### Objektumok tömbje

```php
// ingatlanok
[
    (object)[
        "varos" => "Budapest",
        "ugynok" => "Evelin",
        "kategoria" => "elado",
        "iranyar" => 25000000
    ],
    (object)[
        "varos" => "Debrecen",
        "ugynok" => "Zoltán",
        "kategoria" => "kiado",
        "iranyar" => 250000
    ],
    (object)[
        "varos" => "Szeged",
        "ugynok" => "Dorottya",
        "kategoria" => "elado",
        "iranyar" => 30000000
    ],
    (object)[
        "varos" => "Debrecen",
        "ugynok" => "Zoltán",
        "kategoria" => "kiado",
        "iranyar" => 110000
    ],
    (object)[
        "varos" => "Nyíregyháza",
        "ugynok" => "Evelin",
        "kategoria" => "kiado",
        "iranyar" => 200000
    ],
    (object)[
        "varos" => "Szeged",
        "ugynok" => "Laura",
        "kategoria" => "elado",
        "iranyar" => 15000000
    ],
    (object)[
        "varos" => "Szekszárd",
        "ugynok" => "Zoltán",
        "kategoria" => "kiado",
        "iranyar" => 120000
    ],
    (object)[
        "varos" => "Paks",
        "ugynok" => "Laura",
        "kategoria" => "elado",
        "iranyar" => 232000000
    ],
    (object)[
        "varos" => "Pécs",
        "ugynok" => "Laura",
        "kategoria" => "elado",
        "iranyar" => 20000000
    ]
]



// ugynokok
[
    "Laura" => 2.5,
    "Zoltán" => 3,
    "Evelin" => 3.25,
    "Dorottya" => 3.5
]
```
