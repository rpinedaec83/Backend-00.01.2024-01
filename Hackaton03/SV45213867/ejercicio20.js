// Variables
let num1, num2, num3, num4;
let contadorPares = 0;
let mayor;
let cuadradoSegundo = 0;
let sumaTotal = 0;

// Entrada de datos
num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

// Verificar y realizar operaciones
if (num1 % 2 === 0) {
    contadorPares++;
}

if (num2 % 2 === 0) {
    contadorPares++;
}

if (num3 % 2 === 0) {
    contadorPares++;
}

if (num4 % 2 === 0) {
    contadorPares++;
}

// Encontrar el mayor
mayor = Math.max(num1, num2, num3, num4);

// Si el tercer número es par, calcular el cuadrado del segundo
if (num3 % 2 === 0) {
    cuadradoSegundo = num2 * num2;
}

// Si el primer número es menor que el cuarto, calcular la media de los 4 números
if (num1 < num4) {
    sumaTotal = num1 + num2 + num3 + num4;
    media = sumaTotal / 4;
}

// Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
if (num2 > num3 && num3 >= 50 && num3 <= 700) {
    sumaTotal = num1 + num2 + num3 + num4;
}

// Mostrar resultados
console.log("Cantidad de números pares:", contadorPares);
console.log("El mayor de todos es:", mayor);

if (cuadradoSegundo > 0) {
    console.log("Cuadrado del segundo si el tercero es par:", cuadradoSegundo);
}

if (media > 0) {
    console.log("Media de los 4 números si el primero es menor que el cuarto:", media);
}

if (sumaTotal > 0) {
    console.log("Suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700:", sumaTotal);
}