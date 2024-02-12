// Definir variables para los tres números y una variable auxiliar
var num1 = 0;
var num2 = 0;
var num3 = 0;
var aux = 0;

// Pedir al usuario que escriba tres números
console.log("Escriba tres números:");
// Leer los números ingresados por el usuario
num1 = parseInt(prompt("Número 1:"));
num2 = parseInt(prompt("Número 2:"));
num3 = parseInt(prompt("Número 3:"));

// Ordenar los números de menor a mayor
do {
    if (num1 > num2) {
        aux = num1;
        num1 = num2;
        num2 = aux;
    }
    if (num2 > num3) {
        aux = num2;
        num2 = num3;
        num3 = aux;
    }
} while (!(num1 < num2 && num2 < num3));

// Mostrar el mayor de los tres números
console.log("El mayor es: " + num3);