// Constantes de conversión
const cm_a_pulgadas = 0.393701;
const libras_a_kg = 0.453592;

// Definir variables para centímetros, pulgadas, libras y kilogramos
var centimetros, pulgadas, libras, kilogramos;

// Solicitar al usuario que ingrese la longitud en centímetros
console.log("Ingrese la longitud en centímetros:");
centimetros = parseFloat(prompt("Centímetros:")); // Leer la longitud ingresada por el usuario

// Solicitar al usuario que ingrese el peso en libras
console.log("Ingrese el peso en libras:");
libras = parseFloat(prompt("Libras:")); // Leer el peso ingresado por el usuario

// Convertir longitud de centímetros a pulgadas y peso de libras a kilogramos
pulgadas = centimetros * cm_a_pulgadas;
kilogramos = libras * libras_a_kg;

// Mostrar los resultados
console.log("Longitud en pulgadas: " + pulgadas);
console.log("Peso en kilogramos: " + kilogramos);