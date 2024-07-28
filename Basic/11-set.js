/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/ 

// Set

/* 
Listado de elementos ordenados, pero no indexados(no existen índices) y que no permite duplicados.
*/

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev") //añade al final 
console.log(mySet)

mySet.delete("https://moure.dev") //Hay que indica el valor a eliminar, no borra el ultimo elemento
console.log(mySet)

console.log(mySet.delete("Brais")) //Retorna un booleano si lo ha eliminado o no
console.log(mySet.delete(4)) //Devuelve false porque no se puede buscar por indice

console.log(mySet)

// has
/*
La función has() retorna un booleano indicando si un elemento existe en el set o no.
*/
console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size
/*
La propiedad size retorna el número de elementos en un set.
*/
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)