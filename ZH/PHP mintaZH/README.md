# Webprogramozás - PHP minta ZH

## Lore

Munkahelyeden, az Elektromos Tolószékgyártó Kft-nél (röviden csak ELTO) azzal a feladattal bíztak meg, hogy készíts PHP-vel egy olyan nyilvántartó rendszert, melyben egyszerűen lekérdezhetőek az ```elto.local``` domainbe léptetett számítógépek.

## Feladat

A lenti JSON-ben a ```szamitogepek``` tartalmazza a domainbe léptetett számítógépek adatait és azon felhasználók azonosítóit, akik az adott klienst használják. A ```felhasznalok``` pedig tartalmazza a cégnél dolgozók neveit és azonosítójukat.

Végezd el a következő feladatokat:
- Legyen egy beviteli mező, ahol kereshető a számítógép neve (Kereső)
- Legyenek választógombok, amik segítségével szűrhetünk a részlegekre (Részleg)
- Legyen egy gomb, amely kattintásra legenerál egy táblázatot az inputok alapján:
  - Kereső
    - Ha üres, akkor ne szűrjön névre, mindegyik számítógépet listázzuk ki
    - Ha van beírva valami, akkor csak azon számítógépeket listázzuk ki, amelyek nevében szerepel a megadott keresőkifejezés (tipp: ```strpos```)
  - Választógombok
    - Kézzel adj hozzá egy ```osszes``` lehetőséget!
    - A ```szamitogepek -> reszleg```-ek alapján generáljuk le a további választógombokat, ügyeljünk arra, hogy mindegyik csak egyszer szerepeljen!
    - Ha egyik választógombot se jelöltük ki, adjunk hibaüzenetet
- A ```form``` legyen állapottartó, tehát a beírt értékek elküldéskor maradjanak meg! (Nem követelmény, hogy csak a helyes értékek maradjanak meg, de nem is gond, ha csak azok maradnak)
- A különböző részlegekhez tartozó számítógépek sorai legyenek különböző színűek:
  - ```vezetoseg``` -> kék
  - ```kereskedelem``` -> zöld
  - ```tamogatas``` -> piros

## Példa a táblázatra

Számítógép | IP | MAC | Felhasználók | \[sor színe\]
---------- | -- | --- | ------------ | -------------
ugyvezeto | 192.168.10.10 | 1d-9f-59-43-28-a8 | Miksa Laura | \[kék\]
kereskedelem-01 | 192.168.10.11 | 92-ad-45-91-09-4d | Bodnár Evelin<br>Takács Szabina | \[zöld\]
kereskedelem-02 | 192.168.10.12 | d6-36-28-42-1a-93 | Bodnár Evelin<br>Takács Szabina | \[zöld\]
tamogatas-01 | 192.168.10.13 | 8b-47-e3-cf-46-93 | Faragó Zoltán<br>Csatár Marcell<br>Antal Dorottya | \[piros\]
tamogatas-02 | 192.168.10.14 | 44-75-94-db-6c-fb | Faragó Zoltán<br>Csatár Marcell<br>Antal Dorottya | \[piros\]
tamogatas-03 | 192.168.10.15 | eb-3a-02-9e-ce-f4 | Faragó Zoltán<br>Csatár Marcell<br>Antal Dorottya | \[piros\]
informatika | 192.168.10.16 | e7-af-28-99-b0-cc | Somogyi Richárd | \[piros\]

*Az utolsó oszlopot természetesen nem kell kiírni, csak a github markdown-ja eléggé korlátozott formázás szempontjából...*

## Induló kód

```JSON
{
    "szamitogepek": [
        {
            "nev": "ugyvezeto",
            "reszleg": "vezetoseg",
            "ip": "192.168.10.10",
            "mac": "1d-9f-59-43-28-a8",
            "felhasznalok": ["0"]
        },
        {
            "nev": "kereskedelem-01",
            "reszleg": "kereskedelem",
            "ip": "192.168.10.11",
            "mac": "92-ad-45-91-09-4d",
            "felhasznalok": ["1", "8"]
        },
        {
            "nev": "kereskedelem-02",
            "reszleg": "kereskedelem",
            "ip": "192.168.10.12",
            "mac": "d6-36-28-42-1a-93",
            "felhasznalok": ["1", "8"]
        },
        {
            "nev": "tamogatas-01",
            "reszleg": "tamogatas",
            "ip": "192.168.10.13",
            "mac": "8b-47-e3-cf-46-93",
            "felhasznalok": ["2", "3", "4", "5"]
        },
        {
            "nev": "tamogatas-02",
            "reszleg": "tamogatas",
            "ip": "192.168.10.14",
            "mac": "44-75-94-db-6c-fb",
            "felhasznalok": ["2", "3", "4", "5"]
        },
        {
            "nev": "tamogatas-03",
            "reszleg": "tamogatas",
            "ip": "192.168.10.15",
            "mac": "eb-3a-02-9e-ce-f4",
            "felhasznalok": ["2", "3", "4", "5"]
        },
        {
            "nev": "informatika",
            "reszleg": "tamogatas",
            "ip": "192.168.10.16",
            "mac": "e7-af-28-99-b0-cc",
            "felhasznalok": ["8", "9"]
        },
    ],
    "felhasznalok": {
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
            "nev": "Kis Bence"
        },
        "7": {
            "id": "7",
            "nev": "Major Károly"
        },
        "8": {
            "id": "8",
            "nev": "Takács Szabina"
        },
        "9": {
            "id": "9",
            "nev": "Somogyi Richárd"
        },
    }
}
```
