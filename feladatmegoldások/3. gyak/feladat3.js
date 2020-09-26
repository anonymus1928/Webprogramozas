const table = document.querySelector('table');

// Táblázat legenerálása
for(let i = 0; i < 10; i++) {
    let ujSor = document.createElement('tr');
    
    for(let j = 0; j < 10; j++) {
        let ujCella = document.createElement('td');

        ujSor.appendChild(ujCella);
    }
    table.appendChild(ujSor);
}

// A delegal függvény, egyszerűen csak bemásolva
function delegal(szulo, gyerek, mikorCsinal, mitCsinal) {
    function esemenykezeles(esemeny){
        if(this.contains(esemeny.target.closest(gyerek))) {
            mitCsinal(esemeny, esemeny.target.closest(gyerek))
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles)
}

// Random integer [0-255]
function getRandom() {
    return Math.floor(Math.random() * 256);
}

// ==============================================================

// Random színező
function randomSzinez(esemeny, elem) {
    elem.style.backgroundColor = `rgba(${getRandom()}, ${getRandom()}, ${getRandom()})`;
}

// Delegal függvény meghívása
// Próbáld ki más mouse event-tel is! pl.: mousemove, mouseleave, mouseenter...
delegal(table, 'td', 'mouseover', randomSzinez);

// ==============================================================

// Bal egérgomb lenyomása -> fekete háttérszín
function balKlikk(esemeny, elem) {
    elem.style.backgroundColor = 'black';
}

delegal(table, 'td', 'click', balKlikk);

// ==============================================================

// Jobb egérgomb lenyomása -> nincs háttérszín
function jobbKlikk(esemeny, elem) {
    esemeny.preventDefault(); // ezzel megakadályozható az esemény alapértelmezett mellékhatása (pl.: contextmenu-nél a helyi menü megjelenése)
    elem.style.backgroundColor = '';
}

delegal(table, 'td', 'contextmenu', jobbKlikk);