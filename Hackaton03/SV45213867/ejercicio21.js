// Variables
let numero, factorial, i;

// Entrada de datos
numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

// Validar que el número sea no negativo
while (numero < 0) {
    numero = parseInt(prompt("Por favor, ingrese un número no negativo:"));
}

// Inicializar el factorial a 1
factorial = 1;
i = 1;

// Calcular el factorial
while (i <= numero) {
    factorial *= i;
    i++;
}

// Mostrar resultado
console.log("El factorial de " + numero + " es: " + factorial);