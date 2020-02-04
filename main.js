// metodo forEach

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach((canciones) => {
    console.log(canciones)
})

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];

 let totalLibros = 0;

  librosDeJS.forEach((totalLibrosJS) => {
         
    totalLibros++

 })
 console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');


const playlistUno = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlistUno. forEach((cancion, indice)=> {
    console.log(indice, cancion);
})

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

numbers.forEach ((number)=> {
    sum += number
    
})
console.log(sum);

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;

notasDeTPs.forEach((nota)=>{
    notaFinal+=nota
})
console.log(notaFinal/notasDeTPs.length)

const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
const numerosPares = [];
const numerosImpares = [];

masNumeros.forEach((numero)=> {
    if(numero % 2 == 0){
        numerosPares.push(numero)
        
    } else {
        numerosImpares.push(numero)
    }
})
console.log(numerosPares)
console.log(numerosImpares)

const valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
const doblesDos = [];

valores.forEach((doble)=>{
    doble = doble *2
    doblesDos.push(doble)
})

console.log("valores: ", valores);
console.log("dobles: ", doblesDos);




// método map

const numeros = [1, 2, 3, 4, 5];

const numerosMasDiez = numeros.map((numero) => {
  return numero + 10;
});

console.log(numerosMasDiez)

const numerosDos = [3, 7, 13, 99];

const dobles = numerosDos.map((numero) => {
    return numero * 2;
  });
  
  console.log(dobles) 
  console.log(numerosDos) 

  const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

  const frasesExclamadas = frases.map((frase) => {
    return "¡" + frase + "!"
  });

  console.log(frases); 
console.log(frasesExclamadas); 


const librosDeJSDos = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];

  let listaDeLibros = librosDeJSDos.map((libro) => {
    return `<li>${libro}</li>`
})

console.log(`<ul>${listaDeLibros. join(" ")}</ul>`)

const frasesLatin = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let longitudes = frasesLatin.map((largo)=> {
    return largo.length
})


console.log(frasesLatin); 
console.log(longitudes); 

const playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

const nuevaPlaylistFoo = playlistFoo.map((cancion, indice)=>{
    return  [indice, cancion]
})
 console.log(nuevaPlaylistFoo)


//  const costos = [ 12.5, 56, 98, 45.75 ];

//  const agregarIVA = function (costo) {
//    return costo * 1.21;
//  }
 
//  const sumarGanancia = function (costo) {
//    return costo * 1.5;
//  }
  
// //  const preciosFinales = costos.map((costo) =>{
// //     return (costo + sumarGanancia(costo) + agregarIVA(costo))

// //  })

//  // codear acá la solución del ejercicio
 
 
// //  console.log(preciosFinales);
//  // deberia mostrar
//  // [ 22.6875, 101.64, 177.87, 83.03625 ]

// // metodo filter

const frasesNuevas = [
    'Ut vero.',
    'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
    'Diam rebum nonumy et.',
    'Kasd stet.',
    'Sit et dolor.',
    'Est diam justo gubergren dolores et vero.',
    'Et sanctus sanctus et dolor clita.',
    'Dolores.',
    'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
  ];

const frasesCortas = frasesNuevas.filter(frase =>frase.length <20)

console.log(frasesCortas)

const costosProductos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
let  losMasCaros = []

 const preciosFiltrados = costosProductos.filter ((costo)=>{
    if (costo > 50){
        losMasCaros.push(costo)
    }
})
// codear acá la solución del ejercicio


console.log(costosProductos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

const masNumerosDos = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
let numerosParesDos = []
let numerosImparesDos = []

// codea acá tu solución
numerosParesDos = masNumerosDos.filter((numero)=> {
    if (numero % 2 == 0){
        return numerosParesDos.push(numero)
    }
});
numerosImparesDos = masNumerosDos.filter((numero)=> {
    if (numero % 2 !== 0){
        return numerosImparesDos.push(numero)
    }
});

console.log("pares: ", numerosParesDos);
console.log("impares: ", numerosImparesDos);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
 

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
  ];
  
  // codear acá la solución del ejercicio
  let soloStrings =[]

   soloStrings = mix.filter((string)=>{
      if(typeof(string) === "string"){
          return soloStrings.push(string)

      }
  })
  
  console.log(soloStrings);
  // deberia mostrar
  // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
  

const playlistSpotify = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
const playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

let  playlistSinEscuchar =[]

playlistSinEscuchar = playlistSpotify.filter((cancion)=> {
    if(!playlistEscuchada.includes(cancion)){
        return playlistSinEscuchar.push(cancion)
    }
})


console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]