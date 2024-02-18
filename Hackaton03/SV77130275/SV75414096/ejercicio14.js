// Definir variables para el número, el índice y el contador
var numero, i, contador;

// Solicitar al usuario que ingrese un número entre 1 y 10 que no sea 9
console.log("Ingrese un número entre 1 y 10, que no sea 9:");
numero = parseInt(prompt("Número:")); // Leer el número ingresado por el usuario

// Verificar si el número ingresado es válido y diferente de 9
if (numero >= 1 && numero <= 10 && numero !== 9) {
    contador = 0;

    // Calcular la cantidad de divisores del número ingresado
    for (i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }

    // Verificar si el número ingresado es primo
    if (contador === 2) {
        console.log("El número ingresado es primo.");
    } else {
        console.log("El número ingresado no es primo.");
    }
} else {
    console.log("Número no válido o igual a 9. Por favor, ingrese un número válido.");
}