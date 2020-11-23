# Webprogramozás - PHP csoport ZH

A ZH megírásához használható segédeszközök:
- órai kódok
- órai feladatok megoldásainak a kódjai
- PHP dokumentáció

A ZH alatt az egymással való kommunikáció nem megengedett, ha hasonló megoldásokat találok, akkor az illetőket megkérhetem arra, hogy védjék meg dolgozatukat.

A ZH ideje alatt bent leszek egy Teams hívásban, kérdés, probléma esetén elérhető leszek.

Nem követelmény az igényes megjelenés! Ne menjen el feleslegesen idő azzal, hogy CSS-el bajlódsz!

Összesen 3 plusz pont szerezhető, mely hozzáadódik az elért pontszámhoz. Abban az esetben, ha így a pontszám túllépné a 10-et, a többlettpontok hozzáadódnak az extra pontokhoz.

A ZH megírására 45 perc áll rendelkezésre.

Beadás: http://webprogramozas.inf.elte.hu/ebr

Sok sikert kívánok!

## Lore

A következőkben egy szálloda szobáit nyilvántartó rendszert kell elkészítened.

## Feladat

A lenti JSON-ben a ```szobak``` tartalmazza a szálloda szobáinak adatait. Ezek a következők: szobaszám, a szoba típusa, szoba jelenlegi foglaltsága, szobához tartozik-e erkély és az adott szobában megszálló vendégek azonosítóinak tömbjét. A ```vendegek``` pedig tartalmazza a szállodában aktuálisan megszálló vendégek neveit és azonosítójukat.

Végezd el a következő feladatokat:
- Legyen egy beviteli mező, ahol szobaszámra tudunk keresni (```kereso```)
- Legyen három választógomb (Van/Nincs/Mindegy), amik segítségével szűrhetünk a szobák között aszerint, hogy van-e erkélye (```erkely```)
- Legyen egy ```select``` mező, ahol szűrhetünk szobatípusra (```tipus```)
- Legyen egy gomb, amelyre kattintva a fenti inputok PHP-ban feldolgozásra kerülnek (mindegy, hogy POST vagy GET kéréssel):
  - ```kereso```
    - Ha üres, ne szűrjön a szobaszámokra
    - Ha nem üres, akkor csak azon szobákat listázzuk ki, amely megfelel a kereső kifejezésnek (Tipp: használd az ```tartalmaz``` függvényt, ld.: lent!)
  - ```erkely```
    - Validáció: kötelező kitölteni! Ha nincs kitöltve jelezzük ezt a felhasználónak hibaüzenettel
    - Validáció: ellenőrizd, hogy a bemenet helyes-e! Tehát a minta alapján csak ```Van```, ```Nincs``` és ```Mindegy``` lehet a bemenet!
    - Értelemszerűen szűrjük vele a táblázatot!
  - ```tipus```
    - Égess bele a ```select```-be egy "összes" ```option```-t!
    - A ```szobak[...]->tipus``` alapján generáld le a további ```option```-öket. Ügyelj arra, hogy mindegyik csak egyszer szerepeljen!

- Feladatok extra pontokért:
  - A szobák foglaltsága alapján legyen a táblázat adott sora:
    - zöld, ha szabad
    - piros, ha foglalt
  - A ```form``` legyen állapottartó, tehát a beírt értékek elküldéskor maradjanak meg! (Nem követelmény, hogy csak a helyes értékek maradjanak meg, de nem is gond, ha csak azok maradnak)

## Pontozás

- Az adatok helyesen vannak beemelve json file-ból (1 pont)
  - Ha nem menne, égesd be a php file-ba (0 pont)
- A táblázat legenerálása helyes (2 pont)
  - A mintában szereplő karakterek html kódjai (**nem kötelező ezeket használni, lehet van/nincs-et is írni**)
    - &#10008;: ```&#10008;```
    - &#10004;: ```&#10004;```
- A ```kereso``` szűrés helyesen működik
  - Ha üres a bemenet, akkor nincs szűrés (1 pont)
  - Ha van bemenet, akkor helyesen szűr a szobaszámokra (1 pont)
- Az ```erkely``` szűrés helyesen működik
  - Validáció (1 pont)
    - Ha csak az egyik feltétel teljesül (-0,5 pont)
  - Helyesen szűri a szobákat (1 pont)
- A ```tipus``` szűrés helyesen működik
  - Az ```option```-ök legenerálása helyes (1 pont)
  - Minden típus csak egyszer szerepel (1 pont)
  - Helyesen szűri a szobákat (1 pont)
- *Extra pontok*
  - A szobák foglaltsága alapján a táblázat sorai zöldek (ha nem foglalt) és pirosak (ha foglalt) (+1 pont)
  - A ```form``` állapottartó (a ```form``` elküldése után a bevitt adatok visszaíródnak)
    - ha csak egy helyen visszaíródik (+1 pont)
    - ha mindhárom helyen visszaíródik (+2 pont)

## Példa a táblázatra

Szobaszám | Típus    | Erkély   | Vendégek
--------- | -----    | ------   | --------
101       | standard | &#10008; | Miksa Laura<br>Faragó Zoltán
102       | standard | &#10008; | Bodnár Evelin
103       | superior | &#10004; | 
201       | standard | &#10008; | Csatár Marcell<br>Antal Dorottya
202       | deluxe   | &#10004; | 
...       | ...      | ...      | ...

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
        Szobaszám:
        <input name="kereso"><br>
        Erkély:
        <input type="radio" name="erkely" value="Van"> Van
        <input type="radio" name="erkely" value="Nincs"> Nincs
        <input type="radio" name="erkely" value="Mindegy"> Mindegy<br>
        Típus:
        <select name="tipus">
            <option value="összes">összes</option>
        </select><br><br>
        <input type="submit" value="Szűrés">
    </form>

    <br><br>

    <div>
        <!-- Ebbe a div-be jöhetnek a hibák, figyelj arra, hogy ha nincs hiba, akkor a div ne jelenjen meg! -->
    </div>

    <br><br>

    <table>
        <tr>
            <th>Szobaszám</th>
            <th>Típus</th>
            <th>Erkély</th>
            <th>Vendégek</th>
        </tr>
    </table>
</body>
</html>
```

## Tartalmaz segédfüggvény

```php
// Működés:
// Vár két string-et és megnézi, hogy az elsőben benne van-e a második.

function tartalmaz($haystack, $needle) {
    return strpos($haystack, $needle) !== false;
}
```

## JSON

```json
{
    "szobak": [
        {
            "szobaszam": 101,
            "tipus": "standard",
            "foglalt": true,
            "erkely": false,
            "vendegek": ["0", "2"],
        },
        {
            "szobaszam": 102,
            "tipus": "standard",
            "foglalt": true,
            "erkely": false,
            "vendegek": ["1"],
        },
        {
            "szobaszam": 103,
            "tipus": "superior",
            "foglalt": false,
            "erkely": true,
            "vendegek": [],
        },
        {
            "szobaszam": 201,
            "tipus": "standard",
            "foglalt": true,
            "erkely": false,
            "vendegek": ["3", "4"],
        },
        {
            "szobaszam": 202,
            "tipus": "deluxe",
            "foglalt": false,
            "erkely": true,
            "vendegek": [],
        },
        {
            "szobaszam": 237,
            "tipus": "superior",
            "foglalt": true,
            "erkely": false,
            "vendegek": ["6", "7", "8"],
        },
        {
            "szobaszam": 301,
            "tipus": "president",
            "foglalt": false,
            "erkely": true,
            "vendegek": [],
        },
        {
            "szobaszam": 302,
            "tipus": "superior",
            "foglalt": false,
            "erkely": true,
            "vendegek": [],
        },
        {
            "szobaszam": 303,
            "tipus": "standard",
            "foglalt": true,
            "erkely": false,
            "vendegek": ["5", "9"],
        },
    ],
    "vendegek": {
        "0": {
            "id": "0",
            "nev": "Miksa Laura"
        },
        "1": {
            "id": "1",
            "nev": "Bodnár Evelin"
        },
        "2": {
            "id": "2",
            "nev": "Faragó Zoltán"
        },
        "3": {
            "id": "3",
            "nev": "Csatár Marcell"
        },
        "4": {
            "id": "4",
            "nev": "Antal Dorottya"
        },
        "5": {
            "id": "5",
            "nev": "Balázs Melinda"
        },
        "6": {
            "id": "6",
            "nev": "Jack Torrance"
        },
        "7": {
            "id": "7",
            "nev": "Wendy Torrance"
        },
        "8": {
            "id": "8",
            "nev": "Danny Torrance"
        },
        "9": {
            "id": "9",
            "nev": "Somogyi Richárd"
        }
    }
}
```