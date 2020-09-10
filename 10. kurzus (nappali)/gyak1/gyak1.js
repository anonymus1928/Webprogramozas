// változók deklarálása
// let:   lokális változó létrehozása
// const: konstans létrehozása (ajánlott a használata mikor nem akarjuk véletlenül se módosítani)
// var:   globális változót hoz létre, ELAVULT, NE HASZNÁLJUK!
let a = "alma"
const b = "körte"
//var c = ""

/*if(true) {
    //let x = "alma"
    var d = "körte"
}*/

//console.log(x) // error, mert az x változó már nem él
//console.log(d) // a var miatt a d változó még mindig él



/* egyszerű típusok
    boolean   -> logikai típus (true / false)
    number    -> szám típus (mindenféle)
    string    -> szöveg típus (karakter is)
    undefined -> inicializálatlan vagy hiányzó érték
   egyéb érdekességek
    Number.NaN -> Not-A-Number (globális változó) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#Description
    Infinity   -> Legnagyobb gépi szám (globális változó) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity#Description
*/

// stringek, érdemes utána nézni a különféle string metódusoknak -> (https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/String)
let s1 = "Valamikor Peti leesett a fáról."
let s2 = 'Valamikor Peti leesett a fáról.'
let s3 = "Valamikor Peti leesett a fáról és azt mondta 'jajj'."
let s4 = "Valamikor Peti leesett a fáról és azt mondta \"jajj\"."

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

let n1 = 1234
let n2 = 123.23235

let ember = "Peti"

let s5 = "Valamikor " + ember + " leesett a fáról és azt mondta 'jajj'."
console.log(s5);

let s6 = `Valamikor ${ember} leesett a fáról és azt mondta 'jajj'.`
console.log(s6);


// tömbök -> heterogén és asszociatív
/* tömb metódusai, adattagjai:
    length      -> a tömb elemszáma (mérete)
    push(x)     -> a tömb végére beilleszti x-et
    pop()       -> a tömb utolsó elemét törli és ezt adja vissza
    sort()      -> rendezi a tömböt (!!! unicode érték szerint rendezi)
    reverse()   -> megfordítja a tömböt
    includes(x) -> igaz/hamissal tér vissza aszerint, hogy x benne van-e a tömbben
    map(f)      -> egy fv-t vár paraméterként, melyet meghív a tömb minden elemére (új tömb jön létre!)
    filter(f)   -> egy fv-t vár paraméterként, mely alapján kiválogat a tömb elemei közül
    reduce(f)   -> egy fv-t vár paraméterként, mely alapján összegzi a tömb elemeit
    forEach(f)  -> "mini" for ciklus, egy fv-t vár paraméterként, a metódus végigiterál a tömb elemein és meghívja mindegyikre az f fv-t
*/
let t1 = ["alma", 12345432, 123454.1234543, ember, ["alma", "körte"]]

//t1[432] = "semmi"
t1.push("mangó")
console.log(t1)
let tmp = t1.pop()
console.log(tmp);

console.log(t1);
console.log(t1.length);

let t2 = [200,2,6,3,4,5]
t2 = t2.sort()
console.log(t2)
t2 = t2.reverse()
console.log(t2)
console.log(t2.includes(202))

t2.forEach((x) => {
    console.log(x)
})

t2 = t2.map(Math.sqrt)
console.log(t2);


// filter arrow függvénnyel, kiválogatja (filter) a páros számokat
let t3 = [1,2,3,4,5]
t3.filter((x) => x % 2 === 0)

// reduce arrow függvénnyel
// s -> kiszámított érték
// x -> aktuális érték
t3.reduce((s, x) => s + x)



// függvények - deklarálás
// named function
function fv(a,b,c) {
    //...
}

// unnamed, arrow function
(x, y) => {
    //...
}

// if - else
if(!true) {
    console.log("igaz");
} else {
    console.log("hamis");
}


// for - hagyományos
for(let i = 0; i < t2.length; i++) {
    console.log(t2[i])
}
console.log("--------------------");


// for - elemeken végigiterál
for(t of t2) {
    console.log(t);
}

t2['alma'] = 'szilva' // asszociatív tömb


// for - indexeken végigiterál
for(t in t2) {
    console.log(t);
}



/* végtelen ciklus, kerülni kell, mert megöli a böngészőt!
while(true) {
    //...
}*/



// object (json)
let obj = {
    'nev': 'Peti',
    'kor': 20,
    'szin': ['kek', 'sarga'],
    'mozi': [
        {
            'cim': 'Horgász a pácban',
            'ido': '2020.05.23'
        },
        {
            'cim': 'Avangers',
            'ido': '2020.04.20'
        },
        {
            'cim': 'sithek bosszúja',
            'ido': '2020.06.30'
        },
        {
            'cim': 'Up',
            'ido': '2020.06.30'
        }
    ]
}

console.log(obj.nev, obj.mozi)
for(o of obj.mozi) {
    console.log(`${obj.nev} megnézte ${nevelo5(o.cim)} ${o.cim} filmet ${o.ido}`);
}


// Névelő probléma (by: Gerely Viktor github: @gvikthor)
function nevelo(title) {
    title = title.toUpperCase()
    if(title[0] == 'A') {
        return 'az'
    } else {
        return 'a'
    }
}

function nevelo2(title) {
    if(title.toUpperCase()[0] == 'A') {
        return 'az'
    } else {
        return 'a'
    }
}

function nevelo3(title){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    let found = false;
    let i = 0;
    while(i < mgh.length && !found) {
        found = title.toUpperCase()[0] == mgh[i]
        i++
    }

    return found ? 'az' : 'a'

    /*if(found) {
        return 'az'
    } else {
        return 'a'
    }*/
}

function nevelo4(title){
    let mgh = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']

    let i = 0
    while(i < mgh.length) {
        if(title.toUpperCase()[0] == mgh[i]) {
            return 'az'
        }
        i++
    }
    return 'a'
}

function nevelo5(title){
    return ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű'].includes(title.toUpperCase()[0]) ? 'az' : 'a'
}

// == / ===
// ==  -> értékeket hasonlít össze
// === -> típust és értéket hasonlít össze
console.log(0 == 0);
console.log(0 === 0);

console.log('0' == 0);
console.log('0' === 0);

console.log('123' - 123);
console.log([]+[]);

undefined
let kalap;