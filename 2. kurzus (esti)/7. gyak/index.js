function sutiBeallit(valtozonev, ertek, lejaratNapban) {
    let d = new Date();
    d.setTime(d.getTime() + (lejaratNapban*24*60*60*1000))
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
}

function sutiKiszed(valtozonev) {
    let sutik = document.cookie;
    let sutikTomb = sutik.split(';');

    for(const suti of sutikTomb) {
        let reszek = suti.split('=');
        if(reszek[0].trim() == valtozonev) {
            return reszek[1].trim();
        }
    }
}



const form = document.querySelector('form');
const div = document.querySelector('div');

function ellenorzes() {
    const hibak = Array();

    if(form.nev.value.trim() == '') {
        hibak.push('Név megadása kötelező!');
    }

    if(form.eletkor.value.trim() == '') {
        hibak.push('Az életkor megadása kötelező!');
    } else if(isNaN(form.eletkor.value)) {
        hibak.push('Az életkornak számnak kell lennie!');
    }

    if(form.szeretem.value.trim() == '') {
        hibak.push('Kötelező kiválasztani mit szeretek!');
    } else if(!['tea', 'kávé', 'kakaó'].includes(form.szeretem.value)) {
        hibak.push('Hiba történt, próbáld újra!');
    }
    console.log(hibak);

    return hibak;
}


form.addEventListener('submit', esemeny => {
    esemeny.preventDefault();

    const hibak = ellenorzes();

    if(hibak.length == 0) {
        let ertek = {
            nev: form.nev.value,
            nev: form.eletkor.value,
            nev: form.szeretem.value,
        }
        ertek = JSON.stringify(ertek);
        sutiBeallit('urlap', ertek, 3);
        localStorage.setItem('urlap', ertek);
    }

    console.log(document.cookie);



});

