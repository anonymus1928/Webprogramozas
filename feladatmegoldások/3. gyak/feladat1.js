

function szamEsSzinKijelzes(esemeny, elem) {
    elem.innerHTML = esemeny.target.value;
    elem.style.backgroundColor = `rgba(${esemeny.target.max - esemeny.target.value},${esemeny.target.value},0)`
}


// feladat megoldása 'change' eseménnyel
const inputChange = document.querySelector('#change');
const divChange = document.querySelector('#change-div');

// A meghívott függvénynek két paramétert is át akarunk adni, szamEsSzinKijelzes(x,y) önmagában nem lenne jó,
// mert akkor helyben meghívná a függvényt. Megoldás lehet ha névtelen vagy arrow fv. használunk.
inputChange.addEventListener('change', esemeny => {szamEsSzinKijelzes(esemeny, divChange)});


// feladat megoldása 'input' eseménnyel
const inputInput = document.querySelector('#input');
const divInput = document.querySelector('#input-div');

inputInput.addEventListener('input', esemeny => {szamEsSzinKijelzes(esemeny, divInput)});