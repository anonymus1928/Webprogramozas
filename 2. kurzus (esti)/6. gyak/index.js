const vaszon = document.querySelector('canvas');
const ecset = vaszon.getContext('2d');

ecset.moveTo(0,0);
ecset.lineTo(300,100);
ecset.lineTo(150,300);
ecset.lineTo(200,50);
ecset.moveTo(400,100);
ecset.lineTo(250,250);
ecset.stroke();

ecset.beginPath();
ecset.arc(400,400,30,0,2*Math.PI);

ecset.beginPath();
ecset.arc(450,450,20,0,Math.PI);


ecset.closePath();
ecset.stroke();


ecset.font = '20px Arial';
ecset.fillText('Hello there!', 130, 350);
ecset.strokeText('Hello there!', 130, 400);

let kep = new Image();
kep.src = './neptun.png';

function kepKirajzol() {
    ecset.drawImage(kep, 100, 200, 50, 50, 170, 216, 50, 50);
}

kep.addEventListener('load', kepKirajzol)