function ejercicio05() {
    const precioZapato = 80;

    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));

    let precioTotalSinDescuento = cantidadZapatos * precioZapato;

    let descuento;
    if (cantidadZapatos > 30) {
        descuento = 0.4;
    } else if (cantidadZapatos > 20) {
        descuento = 0.2;
    } else if (cantidadZapatos > 10) {
        descuento = 0.1;
    } else {
        descuento = 0;
    }


    let precioTotalConDescuento = precioTotalSinDescuento * (1 - descuento);


    console.log("El precio total con descuento es: $" + precioTotalConDescuento.toFixed(2));

}