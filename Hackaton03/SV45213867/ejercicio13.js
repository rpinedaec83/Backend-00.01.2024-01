// Variable
let letra;

// Entrada de datos
letra = prompt("Ingrese una letra:");

// Convertir la letra a minúscula
letra = letra.toLowerCase();

// Verificar si la letra es una vocal
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    console.log("La letra ingresada es una vocal.");
} else {
    console.log("La letra ingresada no es una vocal.");
}