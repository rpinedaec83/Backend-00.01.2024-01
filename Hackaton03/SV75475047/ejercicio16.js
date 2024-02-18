function ejercicio16(params) {
    let numero = parseInt(prompt("Ingrese un número del 1 al 7 para indicar el día de la semana:"));

    let dia;

    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Número inválido. Por favor ingrese un número del 1 al 7.";
    }

    console.log("El número " + numero + " corresponde al día de la semana: " + dia);

}