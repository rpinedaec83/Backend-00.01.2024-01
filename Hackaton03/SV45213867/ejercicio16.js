// Variable
let numero;

// Entrada de datos
numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

// Verificar el número ingresado y mostrar el día correspondiente
switch (numero) {
    case 1:
        console.log("El número corresponde al día lunes.");
        break;
    case 2:
        console.log("El número corresponde al día martes.");
        break;
    case 3:
        console.log("El número corresponde al día miércoles.");
        break;
    case 4:
        console.log("El número corresponde al día jueves.");
        break;
    case 5:
        console.log("El número corresponde al día viernes.");
        break;
    case 6:
        console.log("El número corresponde al día sábado.");
        break;
    case 7:
        console.log("El número corresponde al día domingo.");
        break;
    default:
        console.log("Número no válido. Por favor, ingrese un número del 1 al 7.");
}