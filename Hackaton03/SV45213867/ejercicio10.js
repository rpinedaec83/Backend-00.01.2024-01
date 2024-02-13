/*//10.	Hacer un algoritmo en Pseint que diga si un número es par o impar.
Proceso ejercico_10
	// Variable
    Definir numero Como Entero
	
    // Entrada de datos
    Escribir "Ingrese un número:"
    Leer numero
	
    // Determinar si el número es par o impar
    Si numero % 2 = 0 Entonces
        Escribir "El número es par."
    Sino
        Escribir "El número es impar."
    FinSi
	
FinProceso*/

let numero;

// Entrada de datos
numero = parseInt(prompt("Ingrese un número:"));

// Determinar si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

