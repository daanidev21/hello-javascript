let frutas = ["Apple", "Banana", "Cherry"]
console.log(frutas)

frutas.push("Orange")
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.unshift("Grape")
console.log(frutas)

let numeros = [5, 3, 8, 1, 2]
console.log(numeros.sort())
console.log(Math.max(...numeros))
console.log(Math.min(...numeros))
/* 
El operador spread (...) permite expandir un array en una lista de argumentos 
Esto se usa para pasar un array como argumentos a una función, tomando los elementos y distribuyéndolos 
como elementos separados
*/

let colores = new Set (["Rojo", "Verde", "Azul"])
console.log(colores)
colores.add("Amarillo")
console.log(colores)
colores.delete("Verde")
console.log(colores)

let setA = new Set([1, 2, 3, 4, 5])
let setB = new Set([4, 5, 6, 7, 8])
//interseccion
let interseccion = new Set([...setA].filter(x => setB.has(x)))
//union
let union = new Set([...setA, ...setB])
//diferencia
let diferencia = new Set([...setA].filter(x => !setB.has(x)))

//Eliminacion de duplicados en un array

let array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9]
console.log(array)
mySetNumeros = new Set(array)
console.log(mySetNumeros)