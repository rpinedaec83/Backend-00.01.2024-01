// Definir variables
var factorial = 1;
var i = 1;

// Solicitar al usuario que ingrese un número para calcular su factorial
console.log("Ingrese un número para calcular su factorial:");
var numero = parseInt(prompt("Número:"));

// Calcular el factorial del número ingresado
while (i <= numero) {
    factorial *= i;
    i++;
}

// Mostrar el factorial calculado
console.log("El factorial de " + numero + " es: " + factorial);