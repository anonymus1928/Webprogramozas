const ido      = document.querySelector('#ido');
const idoGomb  = document.querySelector('#ido-gomb');
const listaDiv = document.querySelector('#lista');
document.querySelector('#spam').addEventListener('click', () => {
    console.log('spam');
})


// Kliens oldal
function ido1() {
    ido.innerHTML = new Date().toUTCString();
}

// Szerverről, szinkron (nem jó, mert amíg a be nem fejeződik az oldal "meghal")
function ido2() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php', false);
    xhr.send();

    ido.innerHTML = xhr.responseText;
}

// Szerverről, asszinkron módon (a readyState-ben tárolódik el, hogy a kérés hol tart -> 4-nél befejeződött)
function ido3() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php', true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

}


function ido4() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'ido.php?varakozas', true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

}


function ido5() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'ido.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('varakozas=nem');

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

}


function lista() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'list.php', true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            listaDiv.innerHTML = xhr.responseText;
        }
    });
}


function listaJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'listJSON.php', true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            json = JSON.parse(xhr.responseText);
            console.log(json);

            let out = '<ul>';
            for(const film of json) out += `<li>${film.title} (${film.year})</li>`;
            listaDiv.innerHTML = out;
        }
    });
}


// function listFetch1() {
//     fetch('listJSON.php')
//     .then(valasz => valasz.json())
//     .then(eredmeny => console.log(eredmeny))
// }

async function listFetch2() {
    const valasz   = await fetch('listJSON.php');
    const eredmeny = await valasz.json();
    console.log(eredmeny);
}

async function listFetch3() {
    const valasz   = await fetch('listJSON.php', {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'application/json'
        },
        //body: 'modosit=igen'
        body: JSON.stringify({modosit: 'igen'})
    });
    const eredmeny = await valasz.json();
    console.log(eredmeny);
}





idoGomb.addEventListener('click', listFetch3);