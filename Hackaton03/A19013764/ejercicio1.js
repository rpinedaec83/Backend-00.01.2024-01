
const numero = parseInt(prompt("Por favor, ingresa un número:"));


if (!isNaN(numero) && numero >= 100 && numero <= 999) {
    console.log("El número ingresado tiene tres dígitos.");
} else {
    console.log("El número ingresado no tiene tres dígitos.");
}