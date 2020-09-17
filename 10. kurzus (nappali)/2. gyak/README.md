# 2. Gyakorlat feladatok

## 1. feladat - Filmek táblázatosan

### Leírás

A filmadatbázisok a kolorádóvírus miatt megnövekedett terhelés következtében lehaltak. A feladatod, hogy készíts egy táblázatot natív JavaScript segítségével, hogy megmentsd az emberiséget. A példa JSON file a readme végén található.

### Példa

Film címe | Év | Kategóriák
--------- | -- | ----------
Gyalog galopp | 1975 | kaland, vígjáték
A tanú | 1969 | szatíra, dráma, vígjáték
A keresztapa | 1972 | bűnügyi, dráma
... | ... | ...

## 2. feladat - Akció filmek

### Leírás

Most, hogy az emberiséget sikerült megmenteni, tegyük könyebbé az emberek életét. Az első feladatot egészítsd ki a következő formázásokkal!

- A "horror" és a "thriller" kategóriájú filmek sorainak (```<tr>```) hátterét figyelmeztetés képpen állítsd piros színűre
- A "vígjáték" kategóriájú 2000 előtti filmek címe legyen dőlt
- A "családi" vagy "animáció" kategóriájú filmek sorainak háttere legyen zöld, a címük pedig legyen félkövér
- Állítsd kékre azon filmek címét, amik a születésed évében, vagy azt követően volt a bemutatójuk (PC: ez lehet fiktív év is...) 

## 3. feladat - Adatok...adatok

### Leírás

Egy cég kezdő adatrögzítője nem volt éppen a toppon. Emiatt elég kusza lett a személyzeti lista. A HTML file már tartalmazza ezt a listát. A feladatod, hogy rendezd névsorrendbe, és a ```data-color``` attribútumuk alapján állítsd be a színüket (hexadecimális).

## A feladatokhoz használható HTML sablon

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>2. gyakorlat feladatok</title>
</head>
<body>
    <h1>1. feladat</h1>
    <table></table>
    <hr>
    <h1>3. feladat</h1>
    <div id="feladat-3">
        <ul>
            <li data-color="a728d2">Miksa Laura</li>
            <li data-color="a728d2">Bodnár Evelin</li>
            <li data-color="287ad2">Faragó Zoltán</li>
            <li data-color="287ad2">Csatár Marcell</li>
            <li data-color="a728d2">Antal Dorottya</li>
            <li data-color="a728d2">Balázs Melinda</li>
            <li data-color="287ad2">Kis Bence</li>
            <li data-color="287ad2">Major Károly</li>
            <li data-color="a728d2">Takács Szabina</li>
            <li data-color="287ad2">Somogyi Richárd</li>
        </ul>
    </div>
    <script src="feladat.js"></script>
</body>
</html>
```

## A feladatokhoz használható JSON

```json
[
    {
        "title": "Kémesítve",
        "year": 2019,
        "genre": ["animáció", "vígjáték"],
    },
    {
        "title": "Star Wars: A Birodalom visszavág",
        "year": 1980,
        "genre": ["sci-fi", "kaland"],
    },
    {
        "title": "Jumanji: A következő szint",
        "year": 2019,
        "genre": ["kaland", "vígjáték"],
    },
    {
        "title": "Az utolsó léghajlító",
        "year": 2010,
        "genre": ["családi", "fantasy"],
    },
    {
        "title": "Verdák",
        "year": 2006,
        "genre": ["animáció", "vígjáték"],
    },
    {
        "title": "Artemis Fowl",
        "year": 2020,
        "genre": ["akció", "fantasy"],
    },
    {
        "title": "Bloodshot",
        "year": 2020,
        "genre": ["akció", "Képregény adaptációk"],
    },
    {
        "title": "Harry Potter és a titkok kamrája",
        "year": 2002,
        "genre": ["kaland", "fantasy"],
    },
    {
        "title": "Az aszfalt királyai",
        "year": 2019,
        "genre": ["akció", "dráma"],
    },
    {
        "title": "A Gyűrűk Ura: A gyűrű szövetsége",
        "year": 2001,
        "genre": ["akció", "fantasy"],
    },
    {
        "title": "A Jó, a Rossz és a Csúf",
        "year": 1966,
        "genre": ["Western"],
    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "genre": ["dráma"],
    },
    {
        "title": "Közönséges bűnözők",
        "year": 1995,
        "genre": ["bűnügyi", "thriller"],
    },
    {
        "title": "Csillagok között",
        "year": 2014,
        "genre": ["kaland", "dráma", "sci-fi"],
    },
    {
        "title": "Ragyogás",
        "year": 1980,
        "genre": ["dráma", "horror"],
    },
    {
        "title": "Coco",
        "year": 2017,
        "genre": ["animáció", "kaland", "családi"],
    },
    {
        "title": "Gyalog galopp",
        "year": 1975,
        "genre": ["kaland", "vígjáték"],
    },
    {
        "title": "A tanú",
        "year": 1969,
        "genre": ["szatíra", "dráma", "vígjáték"],
    },
    {
        "title": "Így neveld a sárkányodat",
        "year": 2010,
        "genre": ["animáció", "kaland", "családi"],
    },
    {
        "title": "A keresztapa",
        "year": 1972,
        "genre": ["bűnügyi", "dráma"],
    }
]
```
