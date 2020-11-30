const ido     = document.querySelector('#ido');
const idoGomb = document.querySelector('#ido-gomb');
document.querySelector('#spam').addEventListener('click', () => {
    console.log('spam');
})

idoGomb.addEventListener('click', ido3);


// Kliens oldal
function ido1() {
    ido.innerHTML = new Date().toUTCString();
}

// Szerverről, szinkron (nem jó, mert amíg a be nem fejeződik az oldal "meghal")
function ido2() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.php', false);
    xhr.send();

    ido.innerHTML = xhr.responseText;
}

// Szerverről, asszinkron módon (a readyState-ben tárolódik el, hogy a kérés hol tart -> 4-nél befejeződött)
function ido3() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.php', true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == 4) {
            ido.innerHTML = xhr.responseText;
        }
    });

}