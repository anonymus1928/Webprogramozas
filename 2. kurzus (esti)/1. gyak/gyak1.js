// változók deklarálása
// let:   lokális változó létrehozása
// const: konstans létrehozása (ajánlott a használata mikor nem akarjuk véletlenül se módosítani)
// var:   globális változót hoz létre, ELAVULT, NE HASZNÁLJUK!
let s1 = 12341234
let s2 = "alma"

/* egyszerű típusok
    boolean   -> logikai típus (true / false)
    number    -> szám típus (mindenféle)
    string    -> szöveg típus (karakter is)
    undefined -> inicializálatlan vagy hiányzó érték

   egyéb érdekességek
    Number.NaN -> Not-A-Number (globális változó) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#Description
    Infinity   -> Legnagyobb gépi szám (globális változó) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity#Description
*/

console.log(t1,t2)

const c1 = 123123

// stringek, érdemes utána nézni a különféle string metódusoknak -> (https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/String)
let s3 = "Peti leesett az almafáról és azt mondta 'jajjj'"
let s4 = 'Peti leesett az almafáról és azt mondta "jajjj"'
let s5 = "Peti leesett az almafáról és azt mondta \"jajjj\""
let s6 = 'Peti leesett az almafáról és azt mondta \'jajjj\''
let s7 = ' leesett az almafáról és azt mondta \'jajjj\''

let ember = "Peti"

let s8 = "Valamikor " + ember + " leesett az almafáról és azt mondta 'jajjj'"
let s9 = `Valamikor ${ember} leesett az almafáról és azt mondta 'jajjj'`

console.log(s9)

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
let t1 = [123, 1.34, "alma", ['körte', 1245643]]

console.log(t1);

let t2 = [5,2,1,4,5]
t2.push(200,3000)
console.log(t2);
let tmp = t2.pop()
console.log(t2);
console.log(tmp);
t2.sort()
console.log(t2)
t2.reverse()
console.log(t2)
console.log(t2.includes(201))

t2.map(Math.sqrt)
console.log(t2.map(Math.sqrt))

t2.forEach(t => {
    console.log(t)
})

// filter arrow függvénnyel, kiválogatja (filter) a páros számokat
let t3 = [1,2,3,4,5]
t3.filter((x) => x % 2 === 0)

// reduce arrow függvénnyel
// s -> kiszámított érték
// x -> aktuális érték
t3.reduce((s, x) => s + x)


// if - else
if(!true) {
    console.log('igaz');
}else {
    console.log('hamis');
}



// for - hagyományos
tomb = [1,2,3,4,5,6,7]
for(let i=0; i<tomb.length; i++){
    console.log(tomb[i])
}

// for - elemeken végigiterál
for(t of tomb) {
    console.log(t)
}

tomb[200] = 3
tomb['alma'] = 45

// for - indexeken végigiterál
for(index in tomb) {
    console.log(index)
}

console.log(tomb.length);

/* végtelen ciklus, kerülni kell, mert megöli a böngészőt!

while(true) {
    console.log('alma')
}*/


// függvények - deklarálás
// named function
function fv1(param) {
    console.log(param)
}

// unnamed, arrow function
(param) => console.log(param)

// fv. hívás
fv1('Peti')


// object (json)
let obj = {
    'nev': 'Peti',
    'kor': 30,
    'szin': 'kek',
    30: 'sarga',
    'mozi': [
        {
            'cim': 'Sithek bosszúja',
            'mikor': '2020.09.07',
        },
        {
            'cim': 'Horgász a pácban',
            'mikor': '2020.09.10'
        }
    ]
}

for(m of obj.mozi) {
    console.log(`${obj.nev}, aki ${obj.kor} éves, elment a ${m.cim}-ra ${m.mikor}-án`);
}

console.log(obj);




// == / ===
// ==  -> értékeket hasonlít össze
// === -> típust és értéket hasonlít össze

console.log(0 == false)
console.log(1 == true)

console.log(0 === false)
console.log(1 === true)

console.log(typeof(0))
console.log(typeof(false))

console.log(0 == '0')
console.log(0 === '0')

console.log(0 + 1)
console.log('0' + 1)

console.log([] + [])
console.log([] + {})
console.log({} + [])
console.log({} + {})


console.log("b" + "a" + +"a" + "a");
let a
console.log(a);

console.log(null, NaN, undefined)
console.log(NaN === NaN)