const divek = document.querySelectorAll('div')
const input = document.querySelector('#input')

// Nem hatékony, helyette érdemes delegálást alkalmazni -> lásd: feladat.js file-ban
divek.forEach(div => {
    div.addEventListener('click', (e) => {
        div.style.color = input.value
    })
})