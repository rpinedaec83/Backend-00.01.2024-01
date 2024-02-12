var Sueldo = 0;
var total = 0;

// Pedir al usuario que ingrese el sueldo del trabajador
console.log("Ingrese el sueldo del trabajador:");
// Leer el sueldo ingresado por el usuario
Sueldo = parseFloat(prompt("Sueldo:")); // Usamos parseFloat para permitir decimales

// Verificar el sueldo y calcular el aumento correspondiente
if (Sueldo > 2000) {
    total = Sueldo + (Sueldo * 0.05);
    console.log("El sueldo del trabajador " + Sueldo + " tiene un 5% de aumento. El total es: " + total);
} else if (Sueldo < 2000) {
    total = Sueldo + (Sueldo * 0.1);
    console.log("El sueldo del trabajador " + Sueldo + " tiene un 10% de aumento. El total es: " + total);
} else {
    console.log("El sueldo del trabajador no ha sido modificado. El total es: " + Sueldo);
}