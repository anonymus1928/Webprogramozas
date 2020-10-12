function delegal(szulo, gyerek, mikorCsinal, mitCsinal) {
    function esemenykezeles(esemeny){
        if(this.contains(esemeny.target.closest(gyerek))) {
            mitCsinal(esemeny, esemeny.target.closest(gyerek))
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles)
}

const vaszon = document.querySelector('canvas');
const ecset = vaszon.getContext('2d');
ecset.lineJoin = 'round';

kurzor = {
    x: 0,
    y: 0,
    elso: false,
    lenyomva: false
}

vaszon.addEventListener('mousemove', esemeny => {
    if(!kurzor.lenyomva) return;

    let eltolas = vaszon.getBoundingClientRect();
    if(kurzor.elso) {
        ecset.beginPath();
        ecset.moveTo(kurzor.x - eltolas.x, kurzor.y - eltolas.y);
        ecset.lineTo(esemeny.x - eltolas.x, esemeny.y - eltolas.y);
        ecset.closePath();
        ecset.stroke();
        kurzor.x = esemeny.x;
        kurzor.y = esemeny.y;
    } else {
        kurzor.x = esemeny.x;
        kurzor.y = esemeny.y;
        kurzor.elso = true;
    }
});

vaszon.addEventListener('mousedown', () => {
    kurzor.lenyomva = true;
});

vaszon.addEventListener('mouseup', () => {
    kurzor.elso = false;
    kurzor.lenyomva = false;
});

vaszon.addEventListener('mouseleave', () => {
    kurzor.elso = false;
    kurzor.lenyomva = false;
});

delegal(document, '.szin', 'click', (esemeny, elem) => {
    ecset.strokeStyle = elem.dataset.szin;
});

delegal(document, '.meret', 'click', (esemeny, elem) => {
    ecset.lineWidth = elem.dataset.meret;
});