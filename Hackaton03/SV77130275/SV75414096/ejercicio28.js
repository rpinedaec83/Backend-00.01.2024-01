// Definir variables
var suma = 0;
var contador = 1;

// Sumar los primeros cien números
do {
    suma += contador;
    contador++;
} while (contador <= 100);

// Mostrar el resultado
console.log("La suma de los primeros cien números es: " + suma);