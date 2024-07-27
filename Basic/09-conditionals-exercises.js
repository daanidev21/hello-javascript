/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Dani"
if (nombre == "Dani"){
    console.log("Hola, Dani")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Dani"
const contraseya = "1234"

if (usuario == "Dani" && contraseya == "1234") {
    console.log("Contraseña correcta, iniciando sesión")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -2

if (numero < 0){
    console.log("Número negativo")
} else if (numero == 0){
    console.log("Número 0")
} else {
    console.log("Número positivo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 14

if (edad < 18){
    console.log("Edad no permitida para votar, faltan " + (18 - edad) + " años para poder votar")
} else {
    console.log("¡A votar!")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age = 14
let mensajeEdad = age > 18 ? "Mayor de edad" : "Menor de edad"
console.log(mensajeEdad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1

if (mes == 1 || mes == 2 || mes == 12){
    console.log(`El mes  ${mes} pertenece a Invierno.`)
} else if (mes == 3 || mes == 4 || mes == 5){
    console.log(`El mes  ${mes} pertenece a Primavera.`)
} else if (mes == 6 || mes == 7 || mes == 8){
    console.log(`El mes  ${mes} pertenece a Verano.`)
} else if (mes == 9 || mes == 10 || mes == 11){
    console.log(`El mes  ${mes} pertenece a Otoño.`)
} else {
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log("Este mes tiene 31 días")
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("Este mes tiene 30 días")
} else if (mes == 2){
    console.log("Este mes tiene 28 días")
} else {
    console.log("Mes no válido")    
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "es"

switch (idioma) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    case "de":
        console.log("Hallo")
        break
    case "it":
        console.log("Ciao")
        break
    case "pt":
        console.log("Olá")
        break
    default:
        console.log("Idioma no válido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 1:
    case 2:
    case 12:
        console.log(`El mes  ${mes} pertenece a Invierno.`)
        break
    case 3:
    case 4:
    case 5:
        console.log(`El mes  ${mes} pertenece a Primavera.`)
        break
    case 6:
    case 7:
    case 8:
        console.log(`El mes  ${mes} pertenece a Verano.`)
        break
    case 9:
    case 10:
    case 11:
        console.log(`El mes  ${mes} pertenece a Otoño.`)
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días")
        break
    case 2:
        console.log("Este mes tiene 28 días")
        break
    default:
        console.log("Mes no válido")    
}