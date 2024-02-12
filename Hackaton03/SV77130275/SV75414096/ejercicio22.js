// Definir variables
var n, suma;

// Solicitar al usuario que ingrese el valor de n para calcular la suma de los primeros n números
console.log("Ingrese el valor de n para calcular la suma de los primeros n números:");
n = parseInt(prompt("Número:"));

// Inicializar la variable suma en 0
suma = 0;

// Verificar si n es mayor que 0
if (n > 0) {
    // Calcular la suma de los primeros n números
    for (var i = 1; i <= n; i++) {
        suma += i;
    }
    // Mostrar el resultado de la suma
    console.log("La suma de los primeros " + n + " números es: " + suma);
} else {
    console.log("Por favor, ingrese un valor de n mayor que 0 para calcular la suma.");
}