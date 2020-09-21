# 3. Gyakorlat feladatok

## 1. feladat - Csúszka

### Leírás

Adott egy ```range``` beviteli mező.

1. Alatta jelenítsd meg a csúszka aktuális értékét (gondolkozz el azon, hogy ehhez melyik esemény kell) és ezt jelenítsd is meg!

2. Az aktuális érték alapján változtasd a számkijelző háttérszínét úgy, hogy a minimumnál legyen zöld (rgb(0,0,255)), a maximumnál pedig legyen piros (rgb(255,0,0)). Az egyszerűség kedvéért a range minimuma lehet 0, maximuma 255.

## 2. feladat - FAQ

### Leírás

A hallgatók segítése érdekében a megadott JSON objektum alapján hozz létre egy tudásbázist.
A fogalmak kerüljenek címsorokba, a hozzájuk tartozó magyarázat pedig a címsor után egy div-be. Ezek a div-ek legyenek rejtettek, a címsorra kattintva jelenjenek meg.

Ha ezzel kész vagy, akkor bővítsd ki a feladatot azzal, hogy egyszerre mindig csak egy fogalom lehet nyitva. Amint egy nyitva van és rákattintunk egy másikra, az előbbi csukódjon be.

<details>
<summary>Tipp</summary>
Készíts egy stílusosztályt amivel tudod vezérelni, hogy mikor legyen nyitva a fogalom.
</details>

### JSON

```JSON
[
    {
        "fogalom": "Kurzus",
        "magyarazat": "A kurzus valamely tanegység teljesítésére egy adott tanulmányi időszakban meghirdetett tényleges lehetőség. A kurzushoz – típusától függően – tartozik konkrét hely, időpont, oktató. A kurzus típusa, tulajdonságai stb. megegyeznek annak a tanegységnek a típusával és tulajdonságaival, melyek teljesítésére meghirdették (időtartam, kontaktóraszám, a foglalkozás jellege, az érékelés típusa)."
    },
    {
        "fogalom": "Kredit",
        "magyarazat": "<p>A kredit a hallgatói tanulmányi munka mértékegysége, egy kredit a Nemzeti Felsőoktatási Törvény szerint 30 tanulmányi munkaórával egyenértékű. A tantárgyakhoz rendelt kreditérték azt a becsült időt fejezi ki, amely a meghatározott ismeretek teljesítéséhez és a követelmények teljesítéséhez szükséges.</p><p>Ha nem teljesítesz az első négy félévben legalább 30 kreditet, akkor a hallgatói jogviszonyod megszűnik.</p>"
    },
    {
        "fogalom": "Előadás",
        "magyarazat": "<p>Olyan kurzus, melynek során elsősorban az oktató (előadó) szóbeli magyarázata alapján lehet elsajátítani a tárgyhoz kapcsolódó elméleti anyagrészt. Általában kollokviummal (vizsgával) végződik. Ha a képzési terv előírja, akkor az előadás látogatása kötelező, karunkon már nem egy olyan tárgy van, amelyre ez igaz. Azonban ennek hiányában sem célszerű elhanyagolni ezen órák látogatását, hiszen az órán leírt saját jegyzetedből egyszerűbb tanulni, főleg, ha egyszer már „találkoztál” az anyaggal a vizsga előtt.</p>"
    },
    {
        "fogalom": "Gyakorlatvezető",
        "magyarazat": "<p>A gyakorlatot tartó oktatókat gyakorlatvezetőnek, rövidítve gyakran csak „gyakveznek” nevezik. Míg az előadásokat általában magasabb beosztású oktatók tartják, addig a gyakorlatvezetők között doktoranduszokat és demonstrátorokat (felsőbb éves hallgatókat) is találni.</p>"
    },
    {
        "fogalom": "Zárthelyi",
        "magyarazat": "<p>A zárthelyi a gyakorlati tárgyakból tett írásbeli számonkérés, egy kurzusból átlagosan 2-3 van belőle félévenként. Leginkább a középiskola témazáró dolgozatához hasonlítható, az addig vett anyagrészből szerzett tudásodról kell számot adnod.</p>"
    },
    {
        "fogalom": "Vizsgahalasztás",
        "magyarazat": "<p>A vizsgahalasztásnak három formája van, az első az, ha a vizsgaidőpontról a vizsga előtt legalább 24órával lejelentkezel vagy – amennyiben van szabad hely – átjelentkezel egy másik időpontra. A második lehetőség az, hogy a vizsgán megjelenve – még a vizsgázás megkezdése előtt – kéred az oktatótól az „igazoltan nem jelent meg” státusz bejegyzését, amit egy vizsgaidőszakban egy tárgyból legfeljebb egyszer tehetsz meg. Annak érdekében, hogy hallgatótársaid elől ne vedd el feleslegesen a vizsgahelyet, mindig jelentkezz le az Neptunbana vizsgaalkalomról, ha előre tudod, hogy mégsem kívánsz akkor számot adni tudásodról.</p><p>A vizsgahalasztás harmadik formája akkor áll fenn, ha a vizsgán igazolható, rajtad kívül álló okból nem jelentél meg, ezt igazolt vizsgahalasztásnak is nevezik. Az oktató csak ebben az esetben köteles újabb vizsgaidőpontot biztosítani számodra, ha amúgy már nem lenne több.</p><p>A vizsgahalasztás nem minősül elhasznált vizsgaalkalomnak.</p>"
    },
    {
        "fogalom": "Vizsgajegy",
        "magyarazat": "<p>A felvett vizsgáidon megjelenned kötelező. Az igazolt, rajtad kívül álló okból származó távollét vizsgahalasztásnak számít, de az igazolatlan hiányzással amellett, hogy elhasználsz egy vizsgalehetőséget érdemjegyszerzési kísérlet nélkül, még térítési díjat is kell fizetned. Amennyiben a vizsga megkezdődik, a teljesítményedet az oktatónak érdemjeggyel minősítenie kell.</p>"
    },
    {
        "fogalom": "Hagyományos tanulmányi átlag",
        "magyarazat": "<p>Ez az érték felel meg a közoktatásban is alkalmazott tanulmányi átlagnak. Azaz a számítási módja az adott szemeszterben szerzett érdemjegyeid összege elosztva a tantárgyaid számával. A felsőoktatásban a kreditrendszer bevezetésével a hagyományos tanulmányi átlagot azonban nem használják semminek sem alapjául már.</p>"
    },
    {
        "fogalom": "Súlyozott tanulmányi átlag",
        "magyarazat": "<p>A kreditrendszerű képzésben ezt a mutatót szokás használni a hallgatók tanulmányi eredmények összevetésére. Nevezik halmozott tanulmányi átlagnak is, de gyakran egyszerűen csak tanulmányi átlagnak hívják. Számításánál a félév során teljesített tantárgyaid kreditértékének és érdemjegyének szorzataiból képzett összeget kell a teljesített tárgyaid kreditjeinek összegével elosztani.</p>"
    },
    {
        "fogalom": "Kreditindex",
        "magyarazat": "<p>A kreditindex az átlagos előrehaladáshoz viszonyított tanulmányi mutató. Egy félévben átlagosan harminc kreditet kell teljesíteni, ezért a kreditindex számításakor a szemeszter során teljesített tantárgyaid kreditértékének és érdemjegyének szorzataiból képzett összeget kell harminccal elosztani.</p>"
    },
    {
        "fogalom": "Korrigált kreditindex",
        "magyarazat": "<p>A korrigált kreditindexed kreditindexedből kaphatod meg oly módon, hogy megszorozod azt az adott félévben teljesített, illetve felvett kreditjeidnek hányadosával.</p><p>A korrigált kreditindex a másik fontos egyetemi tanulmányi mutató a súlyozott tanulmányi átlag mellett.</p>"
    },
]
```

## 3. feladat - Színes táblázat

### Leírás

Készíts egy táblázatot, melynek cellái egyenlő szélesek és magasak!

- Ha az egér valamelyik cellába belép állítsd be annak véletlenszerű háttérszínt.
- Ha bal egérgombot nyomunk egy cellában, annak háttérszíne legyen fekete.
- Ha jobb egérgombot nyomunk egy cellában, ne legyen háttérszín beállítva.
