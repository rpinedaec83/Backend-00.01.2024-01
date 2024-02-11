// Definir constantes
const precio_1_a_9 = 10;
const precio_10_a_99 = 8;
const precio_100_a_499 = 7;
const precio_mas_500 = 6;
const ganancia_porcentaje = 8.25 / 100;

// Definir variables para la cantidad de CDs, el precio total y la ganancia del vendedor
var cantidad_cds;
var precio_total, ganancia_vendedor;

// Solicitar al usuario que ingrese la cantidad de CDs a vender
console.log("Ingrese la cantidad de CDs a vender:");
cantidad_cds = parseInt(prompt("Cantidad de CDs:")); // Leer la cantidad de CDs ingresada por el usuario

// Calcular el precio total según la cantidad de CDs vendidos
if (cantidad_cds >= 1 && cantidad_cds <= 9) {
    precio_total = cantidad_cds * precio_1_a_9;
} else if (cantidad_cds >= 10 && cantidad_cds <= 99) {
    precio_total = cantidad_cds * precio_10_a_99;
} else if (cantidad_cds >= 100 && cantidad_cds <= 499) {
    precio_total = cantidad_cds * precio_100_a_499;
} else if (cantidad_cds >= 500) {
    precio_total = cantidad_cds * precio_mas_500;
}

// Calcular la ganancia del vendedor
ganancia_vendedor = precio_total * ganancia_porcentaje;

// Mostrar el precio total para el cliente y la ganancia para el vendedor
console.log("Precio total para el cliente: $" + precio_total);
console.log("Ganancia para el vendedor: $" + ganancia_vendedor);