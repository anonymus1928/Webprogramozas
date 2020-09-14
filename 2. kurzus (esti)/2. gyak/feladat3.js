const feladat = document.querySelector('ul')
const lis = feladat.querySelectorAll('li')

// üres tömb a sorbarendezéshez
const tmp = Array()

// a szöveges tartalom kigyűjtése (hozzáfűzi a színkódokat is)
lis.forEach(li => {
    tmp.push(li.innerHTML + '#' + li.dataset.color)
})

// sorbarendezés
tmp.sort()

// eredeti felsorolás kitörlése
feladat.innerHTML = ''

tmp.forEach(t => {
    let tmpLi = document.createElement('li') // új listaelem
    let tmpT = t.split('#')                  // a színkód és a szöveg szétválasztása (split -> tömb)
    tmpLi.style.color = `#${tmpT[1]}`        // a színkód beállítása
    tmpLi.innerHTML = tmpT[0]                // az innerHTML megadása
    feladat.appendChild(tmpLi)               // DOM-ba kiírás
})

/*tmp.forEach(li => {
    li.style.color = `#${li.dataset.color}`
})*/