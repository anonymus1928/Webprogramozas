// querySelector -> a DOM-ban a legelső megfelelő elemét veszi
// querySelectorAll -> a DOM összes megfelelő elemét egy NodeList-be teszi
const div = document.querySelector('div')

console.log(div.innerHTML)

// innerHTML fontos! az elem tartalmának módosítása (html-t értelmezi!)
div.innerHTML = "General Kenobi!"

console.log(div.innerHTML)


const divs = document.querySelectorAll('div')


divs[2].innerHTML = 'Alma'
divs[4].style.color = 'red'
divs[3].style.fontSize = '40px'


console.log(divs);



const gyumolcsok = document.querySelector('#gyumolcs')

//gyumolcsok.innerHTML += '<li class="gyumi">Paradicsom</li>'

// új DOM elem létrehozása (paraméter: tag)
const ujLi = document.createElement('li')

ujLi.innerHTML = 'Paradicsom'
ujLi.style.fontWeight = 'bold' // inline CSS módosítás a style adattagon keresztül 
ujLi.classList.add('gyumi')    // class hozzáadása (classList -> classok listája)
ujLi.classList.remove('gyumi') // class levétele
console.log(ujLi.classList)

gyumolcsok.appendChild(ujLi)   // egy DOM elem befűzése egy másik DOM elembe

console.log(gyumolcsok.innerHTML)


// A NodeListen végig lehet iterálni (működik a .forEach() metódus is) 
for(gy of gyumolcsok.querySelectorAll('li')) {
    console.log(gy.innerHTML);
}



// feladat: szöveg kiírása, egyre nagyobb betűmérettel, színezve
const feladat = document.querySelector('#feladat')

for(let i = 10; i <= 100; i += 10) {
    let ujP = document.createElement('p')
    ujP.style.fontSize = `${i}px`
    ujP.innerHTML = "Hello there"
    ujP.style.color = `#13${i}4B`
    feladat.appendChild(ujP)
}

// string törése több sorba (régi)
let tobbSorosString = "Ez egy \
több \
soros \
string"

// string törése több sorba (új) /AltGr+7/
let modernebb = `Ez egy
több
soros
string
`


const json = [
    {
        "title": "Kémesítve",
        "year": 2019,
        "genre": ["animáció", "vígjáték"],
    },
    {
        "title": "Star Wars: A Birodalom visszavág",
        "year": 1980,
        "genre": ["sci-fi", "kaland"],
    },
    {
        "title": "Jumanji: A következő szint",
        "year": 2019,
        "genre": ["kaland", "vígjáték"],
    },
    {
        "title": "Az utolsó léghajlító",
        "year": 2010,
        "genre": ["családi", "fantasy"],
    },
    {
        "title": "Verdák",
        "year": 2006,
        "genre": ["animáció", "vígjáték"],
    },
    {
        "title": "Artemis Fowl",
        "year": 2020,
        "genre": ["akció", "fantasy"],
    },
    {
        "title": "Bloodshot",
        "year": 2020,
        "genre": ["akció", "Képregény adaptációk"],
    },
    {
        "title": "Harry Potter és a titkok kamrája",
        "year": 2002,
        "genre": ["kaland", "fantasy"],
    },
    {
        "title": "Az aszfalt királyai",
        "year": 2019,
        "genre": ["akció", "dráma"],
    },
    {
        "title": "A Gyűrűk Ura: A gyűrű szövetsége",
        "year": 2001,
        "genre": ["akció", "fantasy"],
    },
    {
        "title": "A Jó, a Rossz és a Csúf",
        "year": 1966,
        "genre": ["Western"],
    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "genre": ["dráma"],
    },
    {
        "title": "Közönséges bűnözők",
        "year": 1995,
        "genre": ["bűnügyi", "thriller"],
    },
    {
        "title": "Csillagok között",
        "year": 2014,
        "genre": ["kaland", "dráma", "sci-fi"],
    },
    {
        "title": "Ragyogás",
        "year": 1980,
        "genre": ["dráma", "horror"],
    },
    {
        "title": "Coco",
        "year": 2017,
        "genre": ["animáció", "kaland", "családi"],
    },
    {
        "title": "Gyalog galopp",
        "year": 1975,
        "genre": ["kaland", "vígjáték"],
    },
    {
        "title": "A tanú",
        "year": 1969,
        "genre": ["szatíra", "dráma", "vígjáték"],
    },
    {
        "title": "Így neveld a sárkányodat",
        "year": 2010,
        "genre": ["animáció", "kaland", "családi"],
    },
    {
        "title": "A keresztapa",
        "year": 1972,
        "genre": ["bűnügyi", "dráma"],
    }
]