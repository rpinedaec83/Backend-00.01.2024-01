// Constantes
const Precio1 = 10;
const Precio2 = 8;
const Precio3 = 7;
const Precio4 = 6;
const GananciaVendedor = 0.0825; // 8.25%

// Variables
let cantidadCDs, precioUnitario, precioTotal, gananciaVendedorTotal;

// Entrada de datos
cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));

// Calcular precio total para el cliente
if (cantidadCDs >= 1 && cantidadCDs <= 9) {
    precioUnitario = Precio1;
} else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
    precioUnitario = Precio2;
} else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
    precioUnitario = Precio3;
} else if (cantidadCDs >= 500) {
    precioUnitario = Precio4;
} else {
    console.log("La cantidad de CDs ingresada no es válida.");
}

precioTotal = cantidadCDs * precioUnitario;

// Calcular ganancia para el vendedor
gananciaVendedorTotal = precioTotal * GananciaVendedor;

// Mostrar resultados
console.log("Precio total para el cliente: $" + precioTotal);
console.log("Ganancia para el vendedor: $" + gananciaVendedorTotal);