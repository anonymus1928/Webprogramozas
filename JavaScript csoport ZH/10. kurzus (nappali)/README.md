# Webprogramozás - JavaScript csoport ZH

A ZH megírásához használható segédeszközök:
- órai kódok
- órai feladatok megoldásainak a kódjai
- MDN dokumentáció

A ZH alatt az egymással való kommunikáció nem megengedett, ha hasonló megoldásokat találok, akkor az illetőket megkérhetem arra, hogy védjék meg dolgozatukat.

A ZH ideje alatt bent leszek egy Teams hívásban, kérdés, probléma esetén elérhető leszek.

Nem követelmény az igényes megjelenés! Ne menjen el feleslegesen idő azzal, hogy CSS-el bajlódtok.

A ZH megírására 45 perc áll rendelkezésre.

Beadás: http://webprogramozas.inf.elte.hu/ebr

Sok sikert kívánok!

## Feladat

A feladatod, hogy elkészíts egy alkalmazottakat nyilvántartó alkalmazást.

A következő funkciókat kell megvalósítanod:
- az alkalmazottak táblázatba való legenerálása json alapján
- alkalmazottak kiválasztása kattintással
- a kijelölt alkalmazottak fizetésének emelése/csökkentése
- azon alkalmazottak kiválogatása, akik messze laknak és emiatt munkábajárási támogatást kell adni nekik és ezen összeg kiszámítása

### Pontozás

- Az alkalmazottak sorai kijelölhetőek, a már kijelölt elemek kijelölése kattintással megszűntethető. (2 pont)
  - Részpont: A kijelölés működik, de nem szüntethető meg (1,5 pont)
  - Részpont: Ha a ```delegal``` függvénnyel sikeresen oldod meg, akkor +2 pont, de 10 pont fölé nem mehetsz (a 10 pont feletti pontok a szorgalmi pontokba beleszámítom)
  - Tipp: használd az órai anyagból a [```delegal``` függvényt](https://github.com/anonymus1928/Webprogramozas/blob/master/2.%20kurzus%20(esti)/3.%20gyak/delegal.js)!
  - A kijelölést jelezd a ```.kijelolve``` stílusosztállyal!
    - Tipp: A ```.kijelolve``` stílusosztály definiálva van a html alapban. Mire kell "rátenni" ezt a class-t ahhoz, hogy működjön?
- A kijelölt alkalmazottak fizetésének módosítása (csökkentése/növelése) a ```Fizetés módosítása``` gombra kattintva az input mezőbe beírt összeggel (ha negatív az összeg levonja, ha pozitív hozzáadja). (4 pont)
  - Részpont: A kijelölés nem működik, viszont mindegyik alkalmazott fizetése növekszik/csökken. (2 pont)
  - Részpont: Ha csak az egyik irányba működik, akkor a részfeladat pontja feleződik
  - Ne lehessen 0-nál kevesebb a fizetése az alkalmazottnak! (-0,5 pont ha nem teljesül, 0 pont alá nem mész a részfeladatnál)
  - Tipp: Figyelj az adattípusokra! (String, Number)
- Az ```Utazási támogatás``` gombra kattintva kiszámítja a **20 km-nél távolabb** élő alkalmazottak pótlékát. A pótlék mértéke: **1 km = 500 Ft** (4 pont)
  - A gomb alatti ```div```-ben ki kell írni a **jogosult** alkalmazottak nevét és zárójelben a támogatás mértékét.
  - Részpont: Csak az alkalmazottak nevei vannak felsorolva. (1 pont)
  - Bónusz: Ezt a juttatást is adó terheli, számítsd ki, hogy összesen mennyi adót kell fizetnie a cégnek ezen pótlék után. (+2 pont, összesen 10 fölé nem mehetsz, szorgalmi pontokba számítom bele, ha túlléped a 10 pontot)
    - Az adó mértéke 15% (```utazasi_potlek * 0,15```)
- A táblázat legenerálása JSON alapján történik. A JSON módosítása esetén a táblázat is eképpen generálódik le. (+1 pont, csak akkor, ha még nem érted a maximális 10 pontot, nem vihető át a szorgalmi pontokhoz)

### Példa a táblázatra

Név | Szervezeti egység | Fizetés | Távolság a lakhelytől
--- | ----------------- | ------- | ---------------------
Miksa Laura | igazgatóság | 870000 | 10
Bodnár Evelin | pénzmosási főosztály | 230000 | 14
Faragó Zoltán | iratmegsemmisítési különítmény | 150000 | 34
... | ... | ... | ...

### Példa az Utazási támogatás megjelenítésére

Faragó Zoltán (17000 Ft)

Csatár Marcell (10500 Ft)

Balázs Melinda (25000 Ft)

Major Károly (15500 Ft)

Összes fizetendő adó: 10200 Ft

### Induló kód

```json
[
  {
    "nev": "Miksa Laura",
    "szervezeti-egyseg": "igazgatóság",
    "fizetes": 870000,
    "tavolsag": 10,
  },
  {
    "nev": "Bodnár Evelin",
    "szervezeti-egyseg": "pénzmosási főosztály",
    "fizetes": 230000,
    "tavolsag": 14,
  },
  {
    "nev": "Faragó Zoltán",
    "szervezeti-egyseg": "iratmegsemmisítési különítmény",
    "fizetes": 150000,
    "tavolsag": 34,
  },
  {
    "nev": "Antal Dorottya",
    "szervezeti-egyseg": "iratmegsemmisítési különítmény",
    "fizetes": 220000,
    "tavolsag": 19,
  },
  {
    "nev": "Csatár Marcell",
    "szervezeti-egyseg": "igazgatóság",
    "fizetes": 800000,
    "tavolsag": 21,
  },
  {
    "nev": "Balázs Melinda",
    "szervezeti-egyseg": "pénzmosási főosztály",
    "fizetes": 190000,
    "tavolsag": 50,
  },
  {
    "nev": "Kis Bence",
    "szervezeti-egyseg": "iratmegsemmisítési különítmény",
    "fizetes": 340000,
    "tavolsag": 12,
  },
  {
    "nev": "Major Károly",
    "szervezeti-egyseg": "pénzmosási főosztály",
    "fizetes": 246000,
    "tavolsag": 31,
  },
]
```

### HTML

```HTML
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Csoport ZH - NEPTUNKÓD</title>
</head>
<body>
    <style>
        table {
            width: 80%;
            border-collapse: collapse;
            margin-bottom: 2em;
        }

        th, td {
            text-align: center;
            width: 20%;
        }

        input {
            margin-bottom: 1em;
        }

        .kijelolve td {
            font-weight: bold;
            background-color: lightblue;
        }
    </style>
    <table></table>

    <input id="fizetes-osszeg" type="text">
    <button id="fizetes-gomb">Fizetés módosítása</button><br>
    <button id="tamogatas-gomb">Utazási támogatás</button>
    <div>Utazási támogatásra jogosult:</div>
    <div id="tamogatas"></div>

    <script src="index.js"></script>
</body>
</html>
```