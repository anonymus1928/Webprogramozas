function atszamol(x, y) {
    return {
        x: x + 250,
        y: (-y) + 250
    }
}

const vaszon = document.querySelector('canvas');
const ecset  = vaszon.getContext('2d');
let szorzo = 1;

function fuggveny(x) {
    return szorzo*Math.sqrt(x);
}

function kirajzol() {
    ecset.clearRect(0,0,500,500);

    let elozoPont = {
        x: -250,
        y: fuggveny(-250)
    }
    
    for(let x = -250; x <= 250; x++) {
        let y = fuggveny(x);
    
        if(isNaN(y)) {
            console.warn(`A függvény nem értelmezhető a ${x} helyen`);
        } else {
            let ujPont = atszamol(x, y);
        
            ecset.beginPath();
            ecset.moveTo(elozoPont.x, elozoPont.y);
            ecset.lineTo(ujPont.x, ujPont.y);
            ecset.closePath();
        
            ecset.stroke();
        
            elozoPont.x = ujPont.x;
            elozoPont.y = ujPont.y;
        }
    }
}

let szam = document.querySelector('input');
szam.addEventListener('input', esemeny => {
    szorzo = parseInt(szam.value);
    kirajzol();
});