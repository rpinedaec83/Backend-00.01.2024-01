// Definir variables
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var contador_pares = 0;
var mayor = 0;
var media = 0;
var suma = 0;
var cuadrado = 0;

// Solicitar al usuario que ingrese los cuatro números
console.log("Ingrese el primer número:");
num1 = parseInt(prompt("Número 1:"));
console.log("Ingrese el segundo número:");
num2 = parseInt(prompt("Número 2:"));
console.log("Ingrese el tercer número:");
num3 = parseInt(prompt("Número 3:"));
console.log("Ingrese el cuarto número:");
num4 = parseInt(prompt("Número 4:"));

// Verificar cuántos números son pares
if (num1 % 2 === 0) {
    contador_pares++;
}
if (num2 % 2 === 0) {
    contador_pares++;
}
if (num3 % 2 === 0) {
    contador_pares++;
}
if (num4 % 2 === 0) {
    contador_pares++;
}

// Encontrar el mayor de todos
mayor = num1;
if (num2 > mayor) {
    mayor = num2;
}
if (num3 > mayor) {
    mayor = num3;
}
if (num4 > mayor) {
    mayor = num4;
}

// Si el tercero es par, calcular el cuadrado del segundo
if (num3 % 2 === 0) {
    cuadrado = num2 * num2;
}

// Si el primero es menor que el cuarto, calcular la media de los 4 números
if (num1 < num4) {
    media = (num1 + num2 + num3 + num4) / 4;
}

// Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
if (num2 > num3 && num3 >= 50 && num3 <= 700) {
    suma = num1 + num2 + num3 + num4;
}

// Mostrar resultados
console.log("Cantidad de números pares:", contador_pares);
console.log("El mayor de todos:", mayor);

if (num3 % 2 === 0) {
    console.log("Cuadrado del segundo si el tercero es par:", cuadrado);
}

if (num1 < num4) {
    console.log("Media de los 4 números si el primero es menor que el cuarto:", media);
}

if (num2 > num3 && num3 >= 50 && num3 <= 700) {
    console.log("Suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700:", suma);
}