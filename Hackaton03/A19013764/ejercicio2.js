
const numero = parseInt(prompt("Por favor, ingresa un número entero:"));


if (!isNaN(numero) && numero < 0) {
    console.log("El número ingresado es negativo.");
} else {
    console.log("El número ingresado no es negativo o no es un número entero válido.");
}