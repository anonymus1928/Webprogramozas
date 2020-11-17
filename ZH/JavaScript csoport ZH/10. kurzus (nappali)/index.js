const data = [
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



const table = document.querySelector('table');
const strFejlec = ['Név', 'Szervezeti egység', 'Fizetés', 'Távolság a lakhelytől'];

const fejlec = document.createElement('tr');
for(let f of strFejlec) {
    let c = document.createElement('th');
    c.innerHTML = f;
    fejlec.appendChild(c);
}
table.appendChild(fejlec);

for(let sor of data) {
    let tr = document.createElement('tr');

    let nev = document.createElement('td');
    nev.innerHTML = sor.nev;
    tr.appendChild(nev);

    let egyseg = document.createElement('td');
    egyseg.innerHTML = sor["szervezeti-egyseg"];
    tr.appendChild(egyseg);

    let fizetes = document.createElement('td');
    fizetes.innerHTML = sor.fizetes;
    tr.appendChild(fizetes);

    let tavolsag = document.createElement('td');
    tavolsag.innerHTML = sor.tavolsag;
    tr.appendChild(tavolsag);

    table.appendChild(tr);
}


// kijelölés
function delegal(szulo, gyerek, mikorCsinal, mitCsinal) {
    function esemenykezeles(esemeny){
        if(this.contains(esemeny.target.closest(gyerek))) {
            mitCsinal(esemeny, esemeny.target.closest(gyerek))
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles)
}

function doTheThing(esemeny, elem) {
    elem.classList.toggle('kijelolve');
}

delegal(table, 'tr', 'click', doTheThing);


// fizetés növelése/csökkentése

const fizetesGomb = document.querySelector('#fizetes-gomb');

fizetesGomb.addEventListener('click', () => {
    let kijelolve = document.querySelectorAll('.kijelolve');
    let input = document.querySelector('#fizetes-osszeg');
    for(let alk of kijelolve) {
        // console.log(alk.children[2].innerHTML);
        if(parseInt(alk.children[2].innerHTML) + parseInt(input.value) >= 0) {
            alk.children[2].innerHTML = parseInt(alk.children[2].innerHTML) + parseInt(input.value);
        }
    }
});


// utazási támogatás
const tamogatasGomb = document.querySelector('#tamogatas-gomb');
const tamogatasDiv = document.querySelector('#tamogatas');

tamogatasGomb.addEventListener('click', () => {
    tamogatasDiv.innerHTML = '';
    let ado = 0;
    for(let alk of data) {
        if(alk.tavolsag > 20) {
            let p = document.createElement('p');
            let osszeg = alk.tavolsag * 500;
            ado += osszeg * 0.15;
            p.innerHTML = `${alk.nev} (${osszeg} Ft)`;
            tamogatasDiv.appendChild(p);
        }
    }

    let p = document.createElement('p');
    p.innerHTML = `Összes fizetendő adó: ${ado} Ft`;
    tamogatasDiv.appendChild(p);
});