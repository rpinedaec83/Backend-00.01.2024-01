function obtenerDia(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido, por favor ingresa un número del 1 al 7.";
    }
}

const numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

console.log(obtenerDia(numero));