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

A feladatod, hogy elkészíts egy rendelést rögzítő alkalmazást.

A következő funkciókat kell megvalósítanod:
- a tételek táblázatba való legenerálása json alapján
- tételek kiválasztása kattintással
- kiválasztott tételek mennyiségének növelése vagy csökkentése
- végösszeg kiszámítása

### Pontozás

- A listaelemek kijelölhetőek, a már kijelölt elemek kijelölése kattintással megszűntethető. (2 pont)
  - Részpont: A kijelölés működik, de nem szüntethető meg (1,5 pont)
  - Részpont: Ha a ```delegal``` függvénnyel sikeresen oldod meg, akkor +2 pont, de 10 pont fölé nem mehetsz (a 10 pont feletti pontok a szorgalmi pontokba beleszámítom)
  - Tipp: használd az órai anyagból a [```delegal``` függvényt](https://github.com/anonymus1928/Webprogramozas/blob/master/2.%20kurzus%20(esti)/3.%20gyak/delegal.js)!
  - A kijelölést jelezd a ```.kijelolve``` stílusosztállyal!
    - Tipp: A ```.kijelolve``` stílusosztály definiálva van a html alapban. Mire kell "rátenni" ezt a class-t ahhoz, hogy működjön?
- A kiválasztott tételek mennyiségét a ```+``` gombbal növelni, a ```-``` gombbal csökkenteni lehet. (4 pont)
  - Részpont: A kijelölés nem működik, viszont mindegyik elem elemszáma növekszik/csökken. (2 pont)
  - Tipp: Figyelj az adattípusokra! (String, Number)
  - Ne lehessen 0-nál kisebb számot beállítani! (-0,5 pont ha nem teljesül, 0 pont alá nem mész a részfeladatnál)
- Az ```Végösszeg kiszámítása``` gombra kattintva kiszámítja a nettó (ÁFA nélküli) végösszeget (4 pont)
  - Részpont: Csak az egységárak vannak összeadva. (2 pont)
  - Részpont: Ha csak az egyik irányba működik, akkor a részfeladat pontja feleződik
  - Bónusz: A nettó végösszeg mögé írd ki az ÁFÁ-val terhelt végösszeget is! Általános esetben az ÁFA mértéke 27% (bruttó = nettó * 1,27), de figyelj arra, hogy a kenyér és liszt ÁFÁ-ja 18% (+2 pont, de 10 pont fölé nem mehetsz, afölötti többletpontok beleszámítanak a szorgalmi pontokba)

### Induló kód

```json
[
  {
    "nev": "alma",
    "egysegar": 650,
    "mennyiseg": 5,
  },
  {
    "nev": "tűzőgép",
    "egysegar": 400,
    "mennyiseg": 7,
  },
  {
    "nev": "kenyér",
    "egysegar": 370,
    "mennyiseg": 3,
  },
  {
    "nev": "élő fa",
    "egysegar": 5000,
    "mennyiseg": 8,
  },
  {
    "nev": "liszt",
    "egysegar": 120,
    "mennyiseg": 2,
  },
  {
    "nev": "cukor",
    "egysegar": 200,
    "mennyiseg": 3,
  },
  {
    "nev": "kóla",
    "egysegar": 450,
    "mennyiseg": 4,
  },
  {
    "nev": "ehető aranypor",
    "egysegar": 999999,
    "mennyiseg": 10,
  },
]
```