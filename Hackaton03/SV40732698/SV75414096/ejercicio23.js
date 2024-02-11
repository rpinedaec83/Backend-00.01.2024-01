// Definir variables
var n, suma;

// Solicitar al usuario que ingrese el valor de n para calcular la suma de los números impares menores o iguales a n
console.log("Ingrese el valor de n para calcular la suma de los números impares menores o iguales a n:");
n = parseInt(prompt("Número:"));

// Inicializar la variable suma en 0
suma = 0;

// Verificar si n es mayor que 0
if (n > 0) {
    // Calcular la suma de los números impares menores o iguales a n
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }
    // Mostrar el resultado de la suma
    console.log("La suma de los números impares menores o iguales a " + n + " es: " + suma);
} else {
    console.log("Por favor, ingrese un valor de n mayor que 0 para calcular la suma.");
}