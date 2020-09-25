// Delegálás
//     Nem kell érteni a belső működést
// Információ:
//     Egyszerűen használható ha egy szülő elemen belül több egyforma elemre 
//     (pl. listaelemek, divek stb...) szeretnénk hatékonyan eventListenert írni. 
//     Ez a függvény felhasználható a ZH-n, nyugodtan másolható. 
// Használata:
//     Másold be a delegal függvényt a kódodba.
//     Add át a megfelelő paramétereket.
// Paraméterezés:
//     1. paraméter (szulo):
//         A fő szülő elem ami tartalmazza az egyforma elemeket, amikre az eventListenert 
//         szeretnéd tenni. Egy konkrét node-nak kell lennie, vagyis querySelectorral vagy 
//         createElementtel kell megkapjuk.
// 
//     2. paraméter (gyerek):
//         Ez egy string selector ('p', '.szin', vagy komplexebb 'div table .sor td .alma'), 
//         ami hivatkozik a szülő objektumon belüli gyerek objektumokra, amelyekhez a listenert 
//         hozzá akarjuk adni.
// 
//     3. paraméter (mikorCsinal):
//         Ez egy event stringként megadva (pl.: 'click', 'input', 'mouseover'...), 
//         teljes lista: https://developer.mozilla.org/en-US/docs/Web/Events
// 
//     4. paraméter (mitCsinal):
//         Ez egy két paraméteres függvény (első paraméter: esemény, második paraméter: 
//         gyerek, akivel az esemény történik), melyben megadható, hogy mi történjen a 
//         gyerekkel azután, hogy az esemény bekövetkezik.

function delegal(szulo, gyerek, mikorCsinal, mitCsinal) {
    function esemenykezeles(esemeny){
        if(this.contains(esemeny.target.closest(gyerek))) {
            mitCsinal(esemeny, esemeny.target.closest(gyerek))
        }
    }

    szulo.addEventListener(mikorCsinal, esemenykezeles)
}


// Példa
// A delegal.html file-ban színes div-ek találhatóak '.szin' stílusosztállyal 
// és ezek egy '.szinek' stílusosztályú szülő divben vannak benne. A feladat, 
// hogy ha rákattintok az egyik színes sávban lévő x-re, akkor hozzáfűz ahhoz
// egy újabb x-et. Ehhez használjuk a delegal függvényt.

// A szülő div kinyerése. Ez történhet querySelector-ral vagy createElement-tel
const szinekDiv = document.querySelector('.szinek');

// A két paraméteres függvény, ami megadja, hogy mi történjen az esemény bekövetkeztekor.
// Az első paramétere egy esemény (ez az amit az addEventListener ad)
// A második paraméteren keresztül elérhető a gyerek elem, ezen keresztül módosítható az.
function xHozzafuz(esemeny, elem) {
    elem.innerHTML += 'x';
}

// Delegálás, a delegal fv. meghívása.
delegal(szinekDiv, '.szin', 'click', xHozzafuz)

