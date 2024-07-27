/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

    // Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

    /*
    Esto es un comentario
    en varias lineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = 'Dani'
let altura = 1.80
let estudiando = true
let undefinedValue = undefined
let nulo = null
let simbolo = Symbol('Simbolo')
let bigInt = BigInt(10034928576239847659238476598237465)
let bigInt2 = 10034928576239847659238476598237465n 

// 4. Imprime por consola el valor de todas las variables

console.log(nombre, altura, estudiando, undefined, nulo, simbolo)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof nombre, typeof altura, typeof estudiando, typeof undefined, typeof nulo, typeof simbolo, typeof bigInt, typeof bigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

nombre = 'Alex'
altura = 1.70
estudiando = false
undefinedValue = undefined
nulo = null
simbolo = Symbol(' Otro Simbolo')
bigInt = BigInt(100349285762398411165)
bigInt2 = 100349285762398411165n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

nombre = 1
altura = '1.70'
estudiando = undefined
undefinedValue = "No definido"
nulo = 0
simbolo = Symbol(' Otro Simbolo')
bigInt = 0.20

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombre2 = 'Dani'
const altura2 = 1.80
const estudiando2 = true
const undefinedValue2 = undefined
const nulo2 = null
const simbolo2 = Symbol('Simbolo')
const bigInt3 = BigInt(10034928576239847659238476598237465)
const bigInt4 = 10034928576239847659238476598237465n

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//nombre = 'Alex'
//altura = 1.70
//estudiando = false
undefinedValue = undefined
nulo = null
//simbolo = Symbol(' Otro Simbolo')
//bigInt = BigInt(100349285762398411165)
//bigInt2 = 100349285762398411165n

