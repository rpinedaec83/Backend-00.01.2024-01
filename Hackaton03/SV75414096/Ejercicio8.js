var Nombre = "";
var Nota1 = 0;
var Nota2 = 0;
var Nota3 = 0;
var Promedio = 0;

// Pedir al usuario que ingrese el nombre del estudiante
console.log("Ingrese el nombre del estudiante:");
// Leer el nombre del estudiante ingresado por el usuario
Nombre = prompt("Nombre del estudiante:");

// Pedir al usuario que ingrese la primera nota
console.log("Ingresar la primera nota:");
// Leer la primera nota ingresada por el usuario
Nota1 = parseFloat(prompt("Nota 1:"));

// Pedir al usuario que ingrese la segunda nota
console.log("Ingresar la segunda nota:");
// Leer la segunda nota ingresada por el usuario
Nota2 = parseFloat(prompt("Nota 2:"));

// Pedir al usuario que ingrese la tercera nota
console.log("Ingresar la tercera nota:");
// Leer la tercera nota ingresada por el usuario
Nota3 = parseFloat(prompt("Nota 3:"));

// Calcular el promedio de las notas
Promedio = (Nota1 + Nota2 + Nota3) / 3;

// Verificar el promedio y determinar si el estudiante está aprobado o desaprobado
if (Promedio <= 12) {
    console.log("El estudiante " + Nombre + " está desaprobado");
} else {
    console.log("El estudiante " + Nombre + " está aprobado");
}