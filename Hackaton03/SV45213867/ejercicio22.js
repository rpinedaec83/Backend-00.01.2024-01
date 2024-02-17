// Variables
let n, suma, i;

// Entrada de datos
n = parseInt(prompt("Ingrese un número entero positivo (n):"));

// Validar que n sea un número positivo
while (n <= 0) {
    n = parseInt(prompt("Por favor, ingrese un número entero positivo:"));
}

// Inicializar la suma a 0
suma = 0;
i = 1;

// Calcular la suma de los primeros n números
while (i <= n) {
    suma += i;
    i++;
}

// Mostrar resultado
console.log("La suma de los primeros " + n + " números es: " + suma);