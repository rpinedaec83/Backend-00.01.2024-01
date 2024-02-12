var HorasTrabajadas = 0;
var sueldoporHora = 20;
var total = 0;

// Pedir al usuario que ingrese la cantidad de horas trabajadas
console.log("Ingrese la cantidad de horas trabajadas:");
// Leer la cantidad de horas trabajadas ingresadas por el usuario
HorasTrabajadas = parseInt(prompt("Horas trabajadas:"));

// Verificar las horas trabajadas y calcular el total a pagar
if (HorasTrabajadas < 40) {
    total = HorasTrabajadas * sueldoporHora;
    console.log("El total a pagar es: " + total);
} else {
    total = 40 * sueldoporHora + (HorasTrabajadas - 40) * 25;
    console.log("El total a pagar es: " + total);
}