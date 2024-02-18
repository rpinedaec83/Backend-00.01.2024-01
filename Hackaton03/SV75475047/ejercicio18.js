function ejercicio18(params) {
    function calcularPrecioYGanancia(cantidad) {
        let precioUnitario;
        let gananciaPorVenta;

        if (cantidad >= 1 && cantidad <= 9) {
            precioUnitario = 10;
        } else if (cantidad >= 10 && cantidad <= 99) {
            precioUnitario = 8;
        } else if (cantidad >= 100 && cantidad <= 499) {
            precioUnitario = 7;
        } else {
            precioUnitario = 6;
        }

        let precioTotalCliente = cantidad * precioUnitario;

        gananciaPorVenta = precioTotalCliente * 0.0825;

        return {
            precioTotalCliente: precioTotalCliente,
            gananciaPorVenta: gananciaPorVenta
        };
    }

    let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    let resultado = calcularPrecioYGanancia(cantidadCDs);
    console.log("Precio total para el cliente: $" + resultado.precioTotalCliente.toFixed(2));
    console.log("Ganancia para el vendedor: $" + resultado.gananciaPorVenta.toFixed(2));

}