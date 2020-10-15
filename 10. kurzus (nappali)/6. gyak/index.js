const vaszon = document.querySelector('canvas');
const ecset  = vaszon.getContext('2d');

ecset.moveTo(0,0);
ecset.lineTo(300, 100);
ecset.lineTo(150, 30);
ecset.lineTo(200, 25);
ecset.moveTo(400,300);
ecset.lineTo(430, 200);
ecset.stroke();

ecset.beginPath();
ecset.arc(400, 400, 20, 0, 2*Math.PI);

ecset.beginPath();
ecset.arc(450, 450, 20, 0, Math.PI);
ecset.closePath();
ecset.stroke();


ecset.font = '20px Arial';
ecset.strokeText('Hello there!', 100, 450);
ecset.fillText('Hello there!', 100, 480);

let kep = new Image();
kep.src = './neptun.png';

function kepKirajzol() {
    ecset.drawImage(kep, 200, 200, 100, 100, 0, 375, 91, 466);
}

kep.addEventListener('load', kepKirajzol);