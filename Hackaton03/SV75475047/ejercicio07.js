function ejercicio07(params) {
    const descuentoTipoA = 0.10;
    const descuentoTipoB = 0.15;
    const descuentoTipoC = 0.20;
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
    let montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));

    let descuento = 0;
    switch (tipoMembresia.toUpperCase()) {
        case 'A':
            descuento = montoCompra * descuentoTipoA;
            break;
        case 'B':
            descuento = montoCompra * descuentoTipoB;
            break;
        case 'C':
            descuento = montoCompra * descuentoTipoC;
            break;
        default:
            console.log("Tipo de membresía inválido.");
    }

    let montoAPagar = montoCompra - descuento;

    console.log("El monto a pagar después del descuento es: $" + montoAPagar.toFixed(2));

}