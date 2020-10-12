const szo = 'SZEMLÉLET';
const table = document.querySelector('tr');
const eletDiv = document.querySelector('#elet');
const rosszDiv = document.querySelector('#rossz');
let elet = 10;
let jatekVege = false;
const betuk = 'AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ';
const rossz = Array();
const jo = Array();

function init(szo, table, elet, eletDiv) {
    for(let sz of szo) {
        table.appendChild(document.createElement('td'));
    }
    eletDiv.innerHTML = elet;
}

function betuTable(szo, betu, table) {
    tds = table.children;
    let nyert = true;
    for(let i = 0; i < szo.length; i++) {
        if(szo[i] === betu) {
            tds[i].innerHTML = betu;
        }
        nyert = nyert && tds[i].innerHTML != '';
    }
    return nyert;
}

function jatek(event) {
    const betu = event.key.toUpperCase();
    if(betuk.includes(betu) && !rossz.includes(betu) && !jo.includes(betu) && !jatekVege) {
        if(szo.includes(betu)) {
            // ha tartalmazza
            jo.push(betu);
            const nyert = betuTable(szo, betu, table);
            if(nyert) {
                alert('Nyertél!');
                jatekVege = true;
            }
        } else {
            // ha nem
            rossz.push(betu);
            rosszDiv.innerHTML += `${betu}, `;
            eletDiv.innerHTML = --elet;
            if(elet === 0) {
                alert('Vesztettél!');
                jatekVege = true;
            }
        }
    }
}

init(szo, table, elet, eletDiv);
document.addEventListener('keyup', jatek); //keydown, keyup