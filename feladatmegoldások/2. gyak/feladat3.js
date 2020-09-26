// Az 1-2. feladatok megoldását nem készítem el, mert azt feladtam szorgalminak.
// Ha valaki azokkal megakadt volna keressen meg és segítek.

// Ez a megoldás nem a legoptimálisabb, hiszen ezt a feladatot is feladtam szorgalminak.

const ul = document.querySelector('ul');
const listaelemek = document.querySelectorAll('li');

const nevek = Array();

listaelemek.forEach(elem => {
    nevek.push(elem.innerHTML + '#' + elem.dataset['color']);
});

nevek.sort();

ul.innerHTML = '';
nevek.forEach(nev => {
    let ujLi = document.createElement('li');
    let splitNev = nev.split('#');
    ujLi.innerHTML = splitNev[0];
    ujLi.style.color = `#${splitNev[1]}`;
    
    ul.appendChild(ujLi);
});

console.log(nevek);