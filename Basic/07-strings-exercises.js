/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let saludo = 'Hola'
let concat = saludo + ' Mundo!'
console.log(concat)
console.log(saludo + ' Mundo!')

// 2. Muestra la longitud de una cadena de texto

console.log(saludo.length)

// 3. Muestra el primer y último carácter de un string

console.log(saludo[0], saludo[saludo.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(saludo.toUpperCase() + ', ' + saludo.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let multilinea = `Hola, esto es
una cadena de texto en varias lineas, 
se hace usando el símbolo de la comilla invertida (` + '`' + `)`
console.log(multilinea)

// 6. Interpola el valor de una variable en un string

let nombre = 'Dani'
console.log(`Hola, ${nombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let stringEspaciado = 'Hola, esto es un string con espacios'
console.log(stringEspaciado.replace(/ /g, "-")) 
/* 
Se usa la línea "/ /g" para buscar espacios en una cadena de texto.
*/

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(stringEspaciado.includes("un"))

// 9. Comprueba si dos strings son iguales

let string1 = 'Esto es el primer string'
let string2 = 'Esto es el segundo string'
console.log(string1 == string2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(string1.length == string2.length)