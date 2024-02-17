// Variables
let opcion;
let numero, cuadrado;

// Inicio del bucle
do {
    // Lógica principal del programa aquí
    numero = parseFloat(prompt("Ingrese un número:"));
    cuadrado = numero * numero;
    console.log("El cuadrado del número ingresado es:", cuadrado);

    // Preguntar al usuario si desea continuar
    opcion = prompt("¿Desea continuar con el programa? (S/N):").toUpperCase();

// Salir del bucle si la opción es diferente de 'S' o 's'
} while (opcion === 'S');