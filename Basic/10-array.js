/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array() // NO RECOMENDADO

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes para arrays declarados con []

myArray = []

// push y pop

myArray.push("Brais") // Añade un elemento al final del array
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primero y lo devuelve, como el pop
console.log(myArray)

myArray.unshift("Brais", "mouredev") // Añade elementos al principio del array
console.log(myArray)

// length

console.log(myArray.length) // Devuelve la longitud del array

// clear

myArray = [] // Para borrar el array se vuelve a inicializar
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]
let myNewArray = myArray.slice(1, 3) 
/*
Devuelve un nuevo array con los elementos desde la posición 1 hasta la 3 (sin incluir el ultimo)
*/
console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3) // Elimina los elementos desde la posición 1 hasta la 3 (sin incluir el último)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]
console.log(myArray)
myArray.splice(0, 2, "Nueva entrada") 
/*
Elimina los elementos desde la posición 1 hasta la 2 (sin incluir el último) 
y añade "Nueva entrada" en la posición 1
*/
console.log(myArray)