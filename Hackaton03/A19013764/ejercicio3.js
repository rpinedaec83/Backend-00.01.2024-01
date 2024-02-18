
const numero = parseInt(prompt("Por favor, ingresa un número:"));

if (!isNaN(numero) && numero % 10 === 4) {
    console.log("El número ingresado termina en 4.");
} else {
    console.log("El número ingresado no termina en 4 o no es un número válido.");
}