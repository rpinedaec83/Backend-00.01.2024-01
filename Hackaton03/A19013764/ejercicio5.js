const precioPorZapato = 80;
const cantidadDeZapatos = parseInt(prompt("Por favor, ingresa la cantidad de zapatos comprados:"));
const precioTotalSinDescuento = cantidadDeZapatos * precioPorZapato;
let precioTotalConDescuento;

if (cantidadDeZapatos > 30) {
    precioTotalConDescuento = precioTotalSinDescuento * 0.6; // 40% de descuento
} else if (cantidadDeZapatos > 20) {
    precioTotalConDescuento = precioTotalSinDescuento * 0.8; // 20% de descuento
} else if (cantidadDeZapatos > 10) {
    precioTotalConDescuento = precioTotalSinDescuento * 0.9; // 10% de descuento
} else {
    precioTotalConDescuento = precioTotalSinDescuento; // Sin descuento
}

console.log("El precio total con descuento es: $" + precioTotalConDescuento.toFixed(2));
