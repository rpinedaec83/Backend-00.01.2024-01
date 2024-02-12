// Constantes de conversión
const PulgadasPorCentimetro = 0.393701;
const KilogramosPorLibra = 0.453592;

// Variables
let centimetros, pulgadas, libras, kilogramos;

// Entrada de datos
centimetros = parseFloat(prompt("Ingrese la longitud en centímetros:"));
libras = parseFloat(prompt("Ingrese el peso en libras:"));

// Conversión de centímetros a pulgadas
pulgadas = centimetros * PulgadasPorCentimetro;

// Conversión de libras a kilogramos
kilogramos = libras * KilogramosPorLibra;

// Mostrar resultados
console.log("Longitud en pulgadas:", pulgadas);
console.log("Peso en kilogramos:", kilogramos);