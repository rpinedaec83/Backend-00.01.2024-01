var numero = 0;
var n = 0;

// Pedir al usuario que ingrese un número
console.log("Ingrese un número:");
// Leer el número ingresado por el usuario
numero = parseInt(prompt("Número:"));

// Calcular el residuo de dividir el número entre 2
n = numero % 2;

// Verificar si el residuo es igual a 0 para determinar si el número es par o impar
if (n === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}