// A feladat a delegal függvénnyel lett megoldva. Ez a példa bemutatja a függvény komplexebb felhasználását is.

const fogalomtar = [
    {
        "fogalom": "Kurzus",
        "magyarazat": "<p>A kurzus valamely tanegység teljesítésére egy adott tanulmányi időszakban meghirdetett tényleges lehetőség. A kurzushoz – típusától függően – tartozik konkrét hely, időpont, oktató. A kurzus típusa, tulajdonságai stb. megegyeznek annak a tanegységnek a típusával és tulajdonságaival, melyek teljesítésére meghirdették (időtartam, kontaktóraszám, a foglalkozás jellege, az érékelés típusa).</p>"
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
    }
]

// A delegal függvény, egyszerűen csak bemásolva
function delegal(szulo, gyerek, mikorCsinal, mitCsinal) {
    function esemenykezeles(esemeny){
        if(this.contains(esemeny.target.closest(gyerek))) {
            mitCsinal(esemeny, esemeny.target.closest(gyerek))
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles)
}

// A függvény, amely a lényegi munkát végzi
// A függvényt h1-re hívtuk meg
function kinyitBezar(esemeny, elem) {
    // Kiszedjük az összes kinyitott magyarázatot
    const osszesMagyarazat = elem.parentElement.querySelectorAll('div .megjelenit');
    // Ellenőrzés, hogy egy eleve kinyitott magyarázatra kattintottunk-e
    const aktualisElemKinyitva = elem.nextSibling.classList.contains('megjelenit');

    // Mindegyik kinyitott magyarázatot becsukunk
    osszesMagyarazat.forEach(m => {
        m.classList.replace('megjelenit', 'elrejt');
    });

    // Csak akkor nyitjuk ki az aktuálisan kattintott fogalom magyarázatát, ha az NEM volt kinyitva eddig
    if(!aktualisElemKinyitva) {
        elem.nextSibling.classList.replace('elrejt', 'megjelenit');
    }
}

const szulo = document.querySelector('#feladat2');

// A feladat legenerálása
// <div id="#feladat2">
//     <h1>...</h1>
//     <div class="elrejt">...</div>
//     <h1>...</h1>
//     <div class="elrejt">...</div>
//     ...
// </div>
fogalomtar.forEach(fogalom => {
    let ujH1 = document.createElement('h1');
    ujH1.innerHTML = fogalom.fogalom;
    ujH1.style.cursor = 'pointer';

    let ujDiv = document.createElement('div');
    ujDiv.innerHTML = fogalom.magyarazat;
    ujDiv.classList.add('elrejt');

    szulo.appendChild(ujH1);
    szulo.appendChild(ujDiv);
});

// Delegal függvény meghívása
delegal(szulo, 'h1', 'click', kinyitBezar)