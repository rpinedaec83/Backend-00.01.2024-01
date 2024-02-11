// Definir variables
var numero, factorial;

// Solicitar al usuario que ingrese un número para calcular su factorial
console.log("Ingrese un número para calcular su factorial:");
numero = parseInt(prompt("Número:"));

// Inicializar el factorial en 1
factorial = 1;

// Verificar si el número ingresado es no negativo
if (numero >= 0) {
    // Calcular el factorial del número ingresado
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
    // Mostrar el resultado del factorial
    console.log("El factorial de " + numero + " es: " + factorial);
} else {
    console.log("Por favor, ingrese un número no negativo para calcular el factorial.");
}