function sutiBeallit(valtozonev, ertek, lejaratNapban) {
    let d = new Date();
    d.setTime(d.getTime() + (lejaratNapban*24*60*60*1000));
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
}

function sutiKiszed(valtozonev) {
    const sutik = document.cookie;
    const sutiTomb = sutik.split(';');

    for(const suti of sutiTomb) {
        let reszek = suti.split('=');
        if(reszek[0].trim() == valtozonev) {
            return reszek[1].trim();
        }
    }
    return '';
}

const form = document.querySelector('form');

function ellenorzes() {
    const hibak = Array();

    if(form.nev.value.trim() == '') {
        hibak.push('Név megadása kötelező!');
    }

    if(form.kor.value.trim() == '') {
        hibak.push('Életkor megadása kötelező!');
    } else if(isNaN(form.kor.value)) {
        hibak.push('Az életkornak számnak kell lennie!');
    }

    if(form.szeretem.value.trim() == '') {
        hibak.push('Kötelező választani!');
    } else if(!['tea', 'kave', 'kakao'].includes(form.szeretem.value)) {
        hibak.push('Hiba történt, próbáld újra!');
    }

    return hibak;
}



form.addEventListener('submit', esemeny => {
    esemeny.preventDefault();

    const hibak = ellenorzes();

    if(hibak.length == 0) {
        let ertek = {
            nev: form.nev.value,
            kor: form.kor.value,
            szeretem: form.szeretem.value,
        }
        console.log(ertek);
        //sutiBeallit('urlap', JSON.stringify(ertek), 2);
        localStorage.setItem('urlap', JSON.stringify(ertek));
    } else {
        console.warn("Hibás bevitel!", hibak);
        console.log(JSON.parse(sutiKiszed("urlap")));
        console.log(JSON.parse(localStorage.getItem('urlap')));
    }

});