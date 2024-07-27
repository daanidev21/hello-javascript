/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

let a=5
let b=10
let c=5
let d='5'

// 1. Crea una variable para cada operación aritmética

let suma = 1 + 2
let resta = 1 - 2
let multiplicacion = 1 * 2
let division = 1 / 2
let modulo = 1 % 2
let exponente = 1 ** 2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let numero = 2
let sumaAsignacion = numero += 2
let restaAsignacion = numero -= 2
let multiplicacionAsignacion = numero *= 2
let divisionAsignacion = numero /= 2
let moduloAsignacion = numero %= 2
let exponenteAsignacion = numero **= 2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

/*
let a=5
let b=10
let c=5
let d='5'
*/

console.log(1 > 0)
console.log(b > a)
console.log(a != b)
console.log(a == d) // Igualdad por valor, las dos variables tienen el mismo valor pero no son el mismo tipo
console.log(a === c) // Igualdad por identidad, las dos variables son del mismo tipo y tienen el mismo valor
console.log(a >= 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

/*
let a=5
let b=10
let c=5
let d='5'
*/

console.log(1 < 0)
console.log(b < a)
console.log(a === d)
console.log(a !== c)
console.log(a == " ")

// 5. Utiliza el operador lógico and

console.log(a === c && a >= 5) // Ambas condiciones deben ser verdaderas

// 6. Utiliza el operador lógico or

console.log(a === c || a == 0) // Al menos una de las condiciones debe ser verdadera

// 7. Combina ambos operadores lógicos

console.log(a >=5 && a === c || a == 0) // Primero se evalúa el and y luego el or   

// 8. Añade alguna negación

console.log(!(a ==7) && a > 0) // Se niega la primera condición

// 9. Utiliza el operador ternario

const isStudent = true
isStudent ? console.log('Es estudiante') : console.log('No es estudiante') 
// Si la variante isStudent es verdadera, imprime 'Es estudiante', si no imprime 'No es estudiante'

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(a + b < 10 && a === c || a == c) // Se evalúa primero la suma, luego el and y por último el or)