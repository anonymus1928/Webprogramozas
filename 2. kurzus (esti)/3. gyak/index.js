function kattint() {
    console.log("Hello there!");
}

function kattint2(esemeny) {
    console.log(esemeny);
}

const gomb = document.querySelector('#kattint');

// Egy bizonyos eseményre "figyelés"
// Események: https://developer.mozilla.org/en-US/docs/Web/Events
// Leggtöbbször használtak mouse..., input, change, click
// objektum.addEventListener('esemény', függvényAmiLefutAzEseményBekövetkezésekor)
gomb.addEventListener('click', kattint);
gomb.addEventListener('click', kattint2);

// Egy bizonyos esemény "figyelésének" megszűntetése
gomb.removeEventListener('click', kattint);


gomb.addEventListener('mouseover', function (esemeny) {
    gomb.style.backgroundColor = 'red'
})

gomb.addEventListener('mouseleave', () => {
    gomb.style.backgroundColor = 'blue'
})