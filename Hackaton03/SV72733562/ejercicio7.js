
const membresia = prompt("Escriba el tipo de membresia que desea: A | B | C ")

const preciohelado = 10;

let cantidadhelados = prompt("El precio de helado es 10 soles, ingrese cuántos helados quiere.");
cantidadhelados = parseInt(cantidadhelados)

let totaldecompra = parseInt(preciohelado*cantidadhelados); 

let descuento = 0

    switch (membresia) 
    {
        case 'A':
            descuento = totaldecompra * 0.1;
            break;
        case 'B':
            descuento = totaldecompra * 0.15; 
            break;
        case 'C':
            descuento = totaldecompra * 0.20; 
            break;
        default:
            console.log("membresia errónea");
            break;
    }

console.log("El valor de su compra con descuento es de : " + totaldecompra-descuento);