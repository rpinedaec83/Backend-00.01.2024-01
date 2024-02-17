

// Variables
let numero, esPrimo;

// Entrada de datos
numero = parseInt(prompt("Ingrese un entero positivo del 1 al 10 (excepto 9):"));

// Inicializar la variable de control
esPrimo = true;

// Verificar si el número es primo
if (numero < 1 || numero > 10 || numero === 9) {
    console.log("El número ingresado no es válido para esta verificación.");
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            // Si se encuentra un divisor, el número no es primo
            break;
        }
    }

    // Mostrar resultado
    if (esPrimo) {
        console.log("El número ingresado es primo.");
    } else {
        console.log("El número ingresado no es primo.");
    }
}