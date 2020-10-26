# RASZTERGRAFIKA HASZNÁLATA – FLAPPY BIRD

[Eredeti feladatleírás](http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/flappybird/flappybird)

Készíts egy Flappy bird jellegű játékot! Legyen egy madár, aminek a közeledő oszlopokon kell áthaladnia az oszlopok érintése nélkül. A madár lefele zuhan, de gombnyomásra felugrik egy kicsit!

A megoldáshoz a [böngészők rasztergrafikus megjelenítőjét, a canvas-t (rajzvászon)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) fogjuk használni!

## ELŐKÉSZÜLETEK

HTML-ben csupán egy ```<canvas>``` elemre és a JavaScriptet behúzó ```<script>``` elemre lesz szükség:

``` html
<!-- index.html -->
<canvas width="600" height="400"></canvas>
<script src="index.js"></script>
```

JavaScript oldalon globális változókba felvesszük a rajzoláshoz szükséges változókat. Rajzolni a ```ctx``` változón keresztül tudunk majd:

``` javascript
// index.js
const canvas = document.querySelector('#jatek');
const ctx = canvas.getContext('2d');
```

## ALAKZATOK RAJZOLÁSA

Egy ```draw``` függvényben fogunk alap alakzatokat kirajzolni a program indulásakor:

``` javascript
// Start
draw()

function draw() {

}
```

Az egyetlen alapelem, a téglalap, kitöltve (```fillRect```) vagy kitöltetlen (```strokeRect```):

``` javascript
ctx.fillStyle = "red"
ctx.fillRect(10, 10, 20, 50)
```

A többi alakzatot egy vagy több [útvonal](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#Paths) kombinálásával lehet megadni:

``` javascript
ctx.beginPath()
ctx.moveTo(20,30)
ctx.lineTo(50,60)
// ctx.arc
// ctx.rect
// ctx.ellipse
ctx.closePath()
ctx.stroke()
```

### Feladatok

1. Fessük a rajzvászon hátterét kékre! (rajzoljunk egy kék téglalapot teljes szélességben (```canvas.width```) és magassá gban (```canvas.height```))
2. Rajzoljuk ki a madarat egy barna téglalapként, függőlegesen középre, balról 50px-re.

Ez utóbbi feladathoz vegyünk fel egy objektumot, amiben a madár adatait tároljuk:

hol van (```x```, ```y```)
milyen széles, magas (```szelesseg```, ```magassag```)

``` javascript
const madar = {
    x: 50,
    y: canvas.height / 2,
    szelesseg: 30,
    magassag: 50
}
```

## MADÁR ESÉSE

A madár eséséhez mozgatni kell a téglalapot. Ezt úgy szoktuk megoldani, hogy mindig (```jatekciklus```) újra- és újrarajzoljuk (```draw```) a vásznat, közben az állapotteret módosítjuk (```update```). Kell számolni a két hívás között eltelt időt:

``` javascript
// Állapottér = adatok
let elozoIdo = performance.now();

function jatekciklus(most = performance.now()) {
    const dt = (most - elozoIdo) / 1000
    elozoIdo = most

    update(dt);
    draw();

    requestAnimationFrame(jatekciklus);
}
function update(dt) {
    // Állapottér módosítása
}
function draw() {
    // Kirajzolás
}

// Start
jatekciklus();
```

A madárnak sebességet (```vy```) és gyorsulást (```ay```) vezetünk be. Kinematikai számolással módosítjuk a madár helyét:

``` javascript
const madar = {
    x: 50,
    y: canvas.height / 2,
    szelesseg: 30,
    magassag: 50,
    vy: 0,   // px/s
    ay: 250,    // px/s^2
}

function update(dt) {
    // Madár mozog
    // Sebesség módosítása: da = v * dt
    // Pozíció módosítása: ds = v * dt
}
```

## BILLENTYŰLEÜTÉSRE UGRÁS

A ```document```-hez érkező keydown eseményeket fogjuk figyelni, és a szóköz lenyomására adunk a madárnak egy kezdősebességet felfelé (```vy``` legyen ```-200```).

Oldjuk meg, hogy a madár fölfele ne tudja elhagyni a játékteret.

Oldjuk meg, hogy a madár lefele se tudja elhagyni a játékteret.

## OSZLOPOK

**Oszlopok tárolása** egy tömbben lesz, mivel több oszlop lesz. Bevezetünk pár állandót is:

``` javascript
const oszlopok = []
const RES = 150;    // px, felső és alsó oszlop közötti rés
const OSZLOP_TAVOLSAG = 300;  // px, egymást követő oszlopok közötti távolság
const OSZLOP_SEBESSEG = -200;  // px, az oszlopok vízszintes sebessége
```

Az oszlopokat párosával adjuk hozzá: alsó és felső oszlop. **Oszloppár hozzáadása:**

``` javascript
function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
function ujOszlop() {
    const h = random(10, canvas.height / 2);
    oszlopok.push(
        {
            x: canvas.width,
            y: 0,
            width: 30,
            height: h,
        },
        {
            x: canvas.width,
            y: h + RES,
            width: 30,
            height: canvas.height - RES - h,
        },
    );
}
// Start
ujOszlop()
```

Az oszlopokat fehér téglalapként rajzoljuk ki. **Oszlopok kirajzolása:**

``` javascript
function draw() {
    // Oszlopok
    ctx.fillStyle = 'white';
    oszlopok.forEach(oszlop => {
        // fehér téglalap rajzolása az oszlop helyére
    });
}
```

**Új oszloppár** megjelenése:

``` javascript
function update(dt) {
    // ...

    // Oszloppár hozzáadása
    // Ha az utolsó oszlop a canvas jobb szélétől OSZLOP_TAVOLSAG-ra eltávolodott,
    // akkor új oszlop hozzáadása
}
```

**Oszlopok mozgatása:**

``` javascript
function update(dt) {
    // ...

    // Oszlopok mozgatása
    oszlopok.forEach(oszlop => {
        // oszlop mozgatása OSZLOP_SEBESSEG-gel
    });
}
```

**Oszlopok törlése:**

``` javascript
function update(dt) {
    // Oszlopok törlése
    // Ha a tömb elején lévő oszlop elhagyta a canvast, akkor vedd ki az első kettőt ( tömb.shift() )
}
```

## ÜTKÖZÉSVIZSGÁLAT

Segédfüggvény:

``` javascript
function utkozikE(a, b) {
    return !(
        b.y + b.magassag  < a.y ||
        a.x + a.szelesseg < b.x ||
        a.y + a.magassag  < b.y ||
        b.x + b.szelesseg < a.x
    );
}
```

Ütközés vizsgálata az oszlopok mozgatásakor:

``` javascript
function update(dt) {
    // Oszlopok mozgatása
    oszlopok.forEach(oszlop => {
        // oszlop mozgatása OSZLOP_SEBESSEG-gel
        // Ha ütközik az oszlop és a madár, akkor vége
    });
}
```

## VÉGE JELZÉSE

Állapottér és módosítása ütközésnél:

``` javascript
let vege = false
```

**Vége kirajzolása**

``` javascript
function draw() {
    // ...

    // Vége
    if (vege) {
        ctx.fillStyle = 'red';
        ctx.font = '100px serif';
        ctx.fillText('Vége', 10, 50);
    }
}
```

**Animáció leállítása**

``` javascript
function jatekciklus(now = 0) {
    if (!vege) requestAnimationFrame(jatekciklus);
}
```

**Madár leesése:** legyen akkor is vége a játéknak, ha a madár kiesne a Canvasből!

## KÉPEK ALKALMAZÁSA

**Képek gyűjteménye és betöltése:**

[Képek letöltése](https://github.com/anonymus1928/Webprogramozas/tree/master/10.%20kurzus%20(esti)/7.%20gyak/flappy_images.zip)

``` javascript
const kepek = {
    madar: new Image(),
    hatter: new Image(),
    oszlop: new Image(),
};

// Start
kepek.madar.src = 'bird.png';
kepek.hatter.src = 'bg.png';
kepek.oszlop.src = 'column.png';
```

**Képek kirajzolása**

``` javascript
ctx.fillRect(madar.x, madar.y, madar.szelesseg, madar.magassag);
// HELYETTE
ctx.drawImage(images.madar, madar.x, madar.y, madar.szelesseg, madar.magassag);
```

## PONTOK SZÁMÍTÁSA

Oszlop törlésekor növeljük a pontszámot 1-gyel. Jelenítsük meg a pontszámot a játékterületen.
