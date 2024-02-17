// Definir variables para la cantidad de zapatos, el precio por par, el importe y el total
var Zapatos = 0;
var precio = 80;
var impo = 0;
var total = 0;

// Pedir al usuario que escriba la cantidad de zapatos
console.log("Escriba la cantidad de zapatos:");
// Leer la cantidad de zapatos ingresada por el usuario
Zapatos = parseInt(prompt("Cantidad de zapatos:"));

// Verificar el número de zapatos y calcular el descuento correspondiente
if (Zapatos > 10 && Zapatos < 20) {
    impo = Zapatos * precio;
    total = impo - (impo * 0.1);
    console.log("Usted tiene un descuento del 10% en su compra. El total a pagar es: " + total);
} else if (Zapatos >= 20 && Zapatos < 30) {
    impo = Zapatos * precio;
    total = impo - (impo * 0.2);
    console.log("Usted tiene un descuento del 20% en su compra. El total a pagar es: " + total);
} else if (Zapatos >= 30) {
    impo = Zapatos * precio;
    total = impo - (impo * 0.4);
    console.log("Usted tiene un descuento del 40% en su compra. El total a pagar es: " + total);
} else {
    console.log("No hay descuento disponible para esta cantidad de zapatos. El total a pagar es: " + (Zapatos * precio));
}
