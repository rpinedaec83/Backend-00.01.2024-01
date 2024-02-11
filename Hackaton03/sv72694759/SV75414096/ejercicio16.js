
// Solicitar al usuario que ingrese un número del 1 al 7
console.log("Ingrese un número del 1 al 7:");
numero = parseInt(prompt("Número:")); // Leer el número ingresado por el usuario

// Utilizar una estructura switch para determinar el día correspondiente al número ingresado
switch (numero) {
    case 1:
        console.log("El número " + numero + " corresponde al día Lunes.");
        break;
    case 2:
        console.log("El número " + numero + " corresponde al día Martes.");
        break;
    case 3:
        console.log("El número " + numero + " corresponde al día Miércoles.");
        break;
    case 4:
        console.log("El número " + numero + " corresponde al día Jueves.");
        break;
    case 5:
        console.log("El número " + numero + " corresponde al día Viernes.");
        break;
    case 6:
        console.log("El número " + numero + " corresponde al día Sábado.");
        break;
    case 7:
        console.log("El número " + numero + " corresponde al día Domingo.");
        break;
    default:
        console.log("Número fuera del rango. Por favor, ingrese un número del 1 al 7.");
}