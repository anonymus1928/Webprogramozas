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

A következőkben egy szálloda szobáit nyilvántartó rendszert kell elkészítened.

## Feladat

A lenti JSON-ben a ```szobak``` tartalmazza a szálloda szobáinak adatait. Ezek a következők: szobaszám, a szoba típusa, szoba jelenlegi foglaltsága (```true```/```false```), amennyiben vannak vendégek az adott szobában, az ott töltendő éjszakák száma és az adott szobában megszálló vendégek neveinek tömbje. A ```szobaarak``` pedig tartalmazza a szobák árait szobatípusok szerint (**az árak egy főre és egy éjszakára vonatkoznak!**).

Végezd el a következő feladatokat:
- A szűrési feltétel szerint jelenítsd meg táblázatban az adatokat!
- A táblázat utolsó oszlopában ("```Összesen fizetendő```") számítsuk ki, hogy mennyit kell fizetniük összesen az ott megszálló vendégeknek!
- Legyen egy ```select``` mező, ahol szűrhetünk szobatípusra (```tipus```)
- Legyen egy gomb, amelyre kattintva a fenti input PHP-ban feldolgozásra kerül (mindegy, hogy GET vagy POST kéréssel):
  - ```tipus```
    - Égess bele a ```select```-be egy "összes" ```option```-t!
    - A ```szobaarak``` alapján generáld le a további ```option```-öket.

- Feladatok extra pontokért:
  - A szobák foglaltsága alapján legyen a táblázat adott sora:
    - zöld, ha szabad
    - piros, ha foglalt
  - A ```form``` legyen állapottartó, tehát a megadott érték elküldést követően maradjon meg az elküldött adat!

## Pontozás

- Az adatok helyesen vannak beemelve json file-ból (**2 pont**)
  - Ha nem menne, égesd be a php file-ba (1 pont)
- A táblázat legenerálása helyes (**2 pont**)
- A táblázat "```Összesen fizetendő```" oszlopa helyesen számítódik ki (**2 pont**)
  - Képlet: ```szobatípus_ára * szobában_megszálló_vendégek_száma * éjszakák_száma```
  - Ha a fenti képletből valamelyik tényező kimarad (1 pont)
- A ```tipus``` szűrés helyesen működik
  - Az ```option```-ök legenerálása helyes (**1 pont**)
    - Tipp: Ha végigiterálsz a szobatípusokon, akkor a kulcsot egy foreach-ben így tudod megszerezni: ```foreach($adatok as $kulcs => $ertek)```
  - Validáld le a bemenetet (**2 pont**)
    - Nem kötelező szűrni! Ha nem lett elküldve, jeleníts meg minden szobát!
    - Ha meg van adva, de nincs értéke, ne szűrj és jeleníts meg minden szobát!
    - Ha meg van adva és értéke is van, akkor ellenőrizd, hogy létező szobatípus lett-e megadva (**itt beleégetheted egy tömbbe a szobatípusokat**)
      - Ha helyes, akkor szűrj a táblázat sorai között (pl. a lenti algoritmus szerint)
      - Ha helytelen jeleníts meg egy hibaüzenetet (pl.: "Nem létező szobatípus!")
  - Helyesen szűri a szobákat (**1 pont**)
    - Tipp (nem kell eszerint haladni):
      - Készíts egy függvényt, ami vár egy tömböt és egy szobatípust (string)
      - Hozz létre lokálisan egy üres tömböt
      - Iterálj végig a paraméterben kapott tömbön, ha az adott elem szobatípusa megegyezik a paraméteresen megkapott szobatípussal, akkor szúrd be a most létrehozott tömbbe
      - Végezetül térj vissza a most létrehozott lokális tömbbel
- *Extra pontok*
  - A szobák foglaltsága alapján a táblázat sorai zöldek (ha nem foglalt) és pirosak (ha foglalt) (**+1 pont**)
  - A ```form``` állapottartó (a ```form``` elküldése után a bevitt adat visszaíródik) (**+2 pont**)

## Példa a táblázatra

Szobaszám | Típus    | Vendégek                         | Összesen fizetendő
--------- | -----    | --------                         | ------------------
101       | standard | Miksa Laura<br>Faragó Zoltán     | 100000 Ft
102       | standard | Bodnár Evelin                    | 20000 Ft
103       | superior |                                  | 0 Ft
201       | standard | Csatár Marcell<br>Antal Dorottya | 40000 Ft
202       | deluxe   |                                  | 0 Ft
...       | ...      | ...                              | ...

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
        Típus:
        <select name="tipus">
            <option value="összes">összes</option>

            <!-- Ide generáld le a többi option-t! -->
            
        </select><br><br>
        <input type="submit" value="Szűrés">
    </form>

    <br><br>

    <div>
        <!-- Ebbe a div-be jöjjön a hibaüzenet, figyelj arra, hogy ha nincs hiba, akkor a div se jelenjen meg! -->
    </div>

    <br><br>

    <table>
        <tr>
            <th>Szobaszám</th>
            <th>Típus</th>
            <th>Vendégek</th>
            <th>Összesen fizetendő</th>
        </tr>

        <!-- A táblázat többi sorát ide generáld -->

    </table>
</body>
</html>
```

## JSON

```json
{
    "szobak": [
        {
            "szobaszam": "101",
            "tipus": "standard",
            "foglalt": true,
            "ejszakak": 5,
            "vendegek": ["Miksa Laura", "Faragó Zoltán"]
        },
        {
            "szobaszam": "102",
            "tipus": "standard",
            "foglalt": true,
            "ejszakak": 2,
            "vendegek": ["Bodnár Evelin"]
        },
        {
            "szobaszam": "103",
            "tipus": "superior",
            "foglalt": false,
            "ejszakak": 0,
            "vendegek": []
        },
        {
            "szobaszam": "201",
            "tipus": "standard",
            "foglalt": true,
            "ejszakak": 2,
            "vendegek": ["Csatár Marcell", "Antal Dorottya"]
        },
        {
            "szobaszam": "202",
            "tipus": "deluxe",
            "foglalt": false,
            "ejszakak": 0,
            "vendegek": []
        },
        {
            "szobaszam": "237",
            "tipus": "superior",
            "foglalt": true,
            "ejszakak": 4,
            "vendegek": ["Jack Torrance", "Wendy Torrance", "Danny Torrance"]
        },
        {
            "szobaszam": "301",
            "tipus": "president",
            "foglalt": false,
            "ejszakak": 0,
            "vendegek": []
        },
        {
            "szobaszam": "302",
            "tipus": "superior",
            "foglalt": false,
            "ejszakak": 0,
            "vendegek": []
        },
        {
            "szobaszam": "303",
            "tipus": "standard",
            "foglalt": true,
            "ejszakak": 2,
            "vendegek": ["Balázs Melinda", "Somogyi Richárd"]
        }
    ],
    "szobaarak": {
        "standard": "10000",
        "superior": "20000",
        "deluxe": "30000",
        "president": "40000"
    }
}
```

## PHP tömbök
*Ha nem menne a file-ból beolvasás*

### Asszociatív tömbök tömbjeként

```php
// szobak
[
    [
        "szobaszam": "101",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 5,
        "vendegek": ["Miksa Laura", "Faragó Zoltán"]
    ],
    [
        "szobaszam": "102",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 2,
        "vendegek": ["Bodnár Evelin"]
    ],
    [
        "szobaszam": "103",
        "tipus": "superior",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    [
        "szobaszam": "201",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 2,
        "vendegek": ["Csatár Marcell", "Antal Dorottya"]
    ],
    [
        "szobaszam": "202",
        "tipus": "deluxe",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    [
        "szobaszam": "237",
        "tipus": "superior",
        "foglalt": true,
        "ejszakak": 4,
        "vendegek": ["Jack Torrance", "Wendy Torrance", "Danny Torrance"]
    ],
    [
        "szobaszam": "301",
        "tipus": "president",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    [
        "szobaszam": "302",
        "tipus": "superior",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    [
        "szobaszam": "303",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 2,
        "vendegek": ["Balázs Melinda", "Somogyi Richárd"]
    ]
]



// szobaarak
[
    "standard" => 10000,
    "superior" => 20000,
    "deluxe" => 30000,
    "president" => 40000
]
```

### Objektumok tömbje

```php
// szobak
[
    (object)[
        "szobaszam": "101",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 5,
        "vendegek": ["Miksa Laura", "Faragó Zoltán"]
    ],
    (object)[
        "szobaszam": "102",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 2,
        "vendegek": ["Bodnár Evelin"]
    ],
    (object)[
        "szobaszam": "103",
        "tipus": "superior",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    (object)[
        "szobaszam": "201",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 2,
        "vendegek": ["Csatár Marcell", "Antal Dorottya"]
    ],
    (object)[
        "szobaszam": "202",
        "tipus": "deluxe",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    (object)[
        "szobaszam": "237",
        "tipus": "superior",
        "foglalt": true,
        "ejszakak": 4,
        "vendegek": ["Jack Torrance", "Wendy Torrance", "Danny Torrance"]
    ],
    (object)[
        "szobaszam": "301",
        "tipus": "president",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    (object)[
        "szobaszam": "302",
        "tipus": "superior",
        "foglalt": false,
        "ejszakak": 0,
        "vendegek": []
    ],
    (object)[
        "szobaszam": "303",
        "tipus": "standard",
        "foglalt": true,
        "ejszakak": 2,
        "vendegek": ["Balázs Melinda", "Somogyi Richárd"]
    ]
]



// szobaarak
[
    "standard" => 10000,
    "superior" => 20000,
    "deluxe" => 30000,
    "president" => 40000
]
```