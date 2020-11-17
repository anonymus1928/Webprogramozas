const data = [
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


  const table = document.querySelector('table');
  const strFejlec = ['Név', 'Egységár', 'Mennyiség'];

  const fejlec = document.createElement('tr');
  for(let cella of strFejlec) {
      let c = document.createElement('th');
      c.innerHTML = cella;
      fejlec.appendChild(c);
  }
  table.appendChild(fejlec);

  for(let sor of data) {
      let tr = document.createElement('tr');

      let nev = document.createElement('td');
      nev.innerHTML = sor.nev;
      tr.appendChild(nev);

      let egysegar = document.createElement('td');
      egysegar.innerHTML = sor.egysegar;
      tr.appendChild(egysegar);

      let mennyiseg = document.createElement('td');
      mennyiseg.innerHTML = sor.mennyiseg;
      tr.appendChild(mennyiseg);

      table.appendChild(tr);
  }


  // 1. feladat
  function delegal(szulo, gyerek, mikorCsinal, mitCsinal) {
    function esemenykezeles(esemeny){
        if(this.contains(esemeny.target.closest(gyerek))) {
            mitCsinal(esemeny, esemeny.target.closest(gyerek))
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles)
}

function kijelol(esemeny, elem) {
    elem.classList.toggle('kijelolve');
}

delegal(table, 'tr', 'click', kijelol);




// 2. feladat
const plusz = document.querySelector('#novel');
const minusz = document.querySelector('#csokkent');

function doTheThing(minusz) {
    const kijelolve = document.querySelectorAll('.kijelolve');

    for(let sor of kijelolve) {
        //console.log(sor);
        //console.log(sor.lastChild);

        if(minusz) {
            if(sor.lastChild.innerHTML != 0) {
                sor.lastChild.innerHTML = parseInt(sor.lastChild.innerHTML) - 1;
            }
        } else {
            sor.lastChild.innerHTML = parseInt(sor.lastChild.innerHTML) + 1;
        }
    }
}

plusz.addEventListener('click', () => { doTheThing(false); });
minusz.addEventListener('click', () => { doTheThing(true); });


// 3. feladat

const vegosszeg = document.querySelector('#vegosszeg-gomb');
const tetelek = document.querySelectorAll('tr');

vegosszeg.addEventListener('click', () => {
    let total = 0;

    // console.log(tetelek);
    for(let i = 1; i < tetelek.length; i++) {
        let cellak = tetelek[i].children;
        total += parseInt(cellak[1].innerHTML) * parseInt(cellak[2].innerHTML);
    }

    document.querySelector('#vegosszeg').innerHTML = `Végösszeg: ${total}`;
});