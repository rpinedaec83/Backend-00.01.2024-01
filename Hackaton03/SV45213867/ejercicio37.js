// Variables
let num1, num2, resto;

// Ingreso de los dos números
console.log("Ingrese el primer número:");
// Se puede usar 'prompt()' para obtener la entrada del usuario en un entorno de navegador.
// En un entorno de consola, podrías usar un paquete como 'readline-sync'.
num1 = parseInt(prompt());

console.log("Ingrese el segundo número:");
num2 = parseInt(prompt());

// Aplicar el algoritmo de Euclides para encontrar el MCD
while (num2 !== 0) {
    resto = num1 % num2;
    num1 = num2;
    num2 = resto;
}

// Mostrar el resultado
console.log("El MCD de los dos números es: ", num1);