const gomb = document.querySelector('#gomb');
const ido  = document.querySelector('#ido');
const listaDiv  = document.querySelector('#lista');

let i = 0;
document.querySelector('#spam').addEventListener('click', () => console.log('spam', i++));

function ido1() {
    ido.innerHTML = new Date().toUTCString();
}


function ido2() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php', false);
    xhr.send();
    //console.log(xhr);
    ido.innerHTML = xhr.responseText;
}


function ido3() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'ido.php', true);
    xhr.send();
}


function ido4() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('GET', 'ido.php?varakozas=igen', true);
    xhr.send();
}


function ido5() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

    xhr.open('POST', 'ido.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('varakozas=igen');
}


function lista() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            listaDiv.innerHTML = xhr.responseText;
            console.log(xhr);
        }
    });

    xhr.open('GET', 'lista.php', true);
    xhr.send();
}



function listaJSON() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            const adatok = JSON.parse(xhr.responseText);
            console.log(adatok);

            let tmp = '<ul>';
            for(const adat of adatok) {
                tmp += `<li>${adat.title} (${adat.year})</li>`;
            }
            tmp += '</ul>';

            listaDiv.innerHTML = tmp;
        }
    });

    xhr.open('GET', 'listaJSON.php?year=2010', true);
    xhr.send();
}


// function listaFetch111() {
//     fetch('listaJSON.php')
//     .then(valasz => valasz.json())
//     .then(eredmeny => console.log(eredmeny));
// }

async function listaFetch1() {
    const valasz = await fetch('listaJSON.php');
    const eredmeny = await valasz.json();
    console.log(eredmeny);
}


async function listaFetch2() {
    const valasz = await fetch('listaJSON.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'year': 2010})
    });
    const eredmeny = await valasz.json();
    console.log(eredmeny);
}


async function listaFetch3() {
    const valasz = await fetch('listaJSON.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/json'
        },
        body: 'varakozas=igen'
        //body: JSON.stringify({varakozas: 'igen'})
    });
    const eredmeny = await valasz.json();
    console.log(eredmeny);
}


async function listaFetch4(parameterek) {
    const valasz = await fetch('listaJSON.php?year=2010', {
        method: 'GET'
    });
    const eredmeny = await valasz.json();
    console.log(eredmeny);
}




gomb.addEventListener('click', listaFetch3);