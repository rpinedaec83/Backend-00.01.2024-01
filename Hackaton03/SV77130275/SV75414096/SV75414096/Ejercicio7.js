var TipoM = "";
var Precio = 0;
var total = 0;

// Pedir al usuario que ingrese el tipo de membresía
console.log("Ingrese el tipo de membresía:");
// Leer el tipo de membresía ingresado por el usuario
TipoM = prompt("Tipo de membresía:");

// Pedir al usuario que ingrese el precio
console.log("Ingrese el precio:");
// Leer el precio ingresado por el usuario
Precio = parseFloat(prompt("Precio:")); // Usamos parseFloat para permitir decimales

// Verificar el tipo de membresía y calcular el descuento correspondiente
if (TipoM.toUpperCase() === "A") {
    total = Precio - (Precio * 0.1);
    console.log("El tipo de membresía es " + TipoM + ", tiene un 10% de descuento. El importe total es: " + total);
} else if (TipoM.toUpperCase() === "B") {
    total = Precio - (Precio * 0.15);
    console.log("El tipo de membresía es " + TipoM + ", tiene un 15% de descuento. El importe total es: " + total);
} else if (TipoM.toUpperCase() === "C") {
    total = Precio - (Precio * 0.2);
    console.log("El tipo de membresía es " + TipoM + ", tiene un 20% de descuento. El importe total es: " + total);
} else {
    console.log("Tipo de membresía no válido. Por favor, ingrese A, B o C.");
}