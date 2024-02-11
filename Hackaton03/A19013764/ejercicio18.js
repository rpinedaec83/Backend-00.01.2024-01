function calcularPrecioYGanancia(cantidadCDs) {
    let precioPorUnidad;

    if (cantidadCDs <= 9) {
        precioPorUnidad = 10;
    } else if (cantidadCDs <= 99) {
        precioPorUnidad = 8;
    } else if (cantidadCDs <= 499) {
        precioPorUnidad = 7;
    } else {
        precioPorUnidad = 6;
    }

    const precioTotal = cantidadCDs * precioPorUnidad;
    const gananciaVendedor = precioTotal * 0.0825; // 8.25% de la venta

    return { precioTotal, gananciaVendedor };
}


const cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));

if (!isNaN(cantidadCDs) && cantidadCDs >= 0) {
    const { precioTotal, gananciaVendedor } = calcularPrecioYGanancia(cantidadCDs);
    console.log(`Precio total para el cliente: $${precioTotal.toFixed(2)}`);
    console.log(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
} else {
    console.log("Por favor, ingrese una cantidad válida de CDs.");
}
