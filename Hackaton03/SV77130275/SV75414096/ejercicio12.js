var num1 = 0;
var num2 = 0;
var aux = 0;

// Pedir al usuario que escriba dos números
console.log("Escriba dos números:");
// Leer los números ingresados por el usuario
num1 = parseInt(prompt("Número 1:"));
num2 = parseInt(prompt("Número 2:"));

// Ordenar los números de menor a mayor
do {
    if (num1 > num2) {
        aux = num1;
        num1 = num2;
        num2 = aux;
    }
} while (!(num1 < num2));

// Mostrar el mayor de los dos números
console.log("El mayor es: " + num2);