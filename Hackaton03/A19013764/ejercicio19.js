function calcularPago(identificador, diasTrabajados) {
    let salarioDiario;

    switch (identificador) {
        case 1:
            salarioDiario = 56;
            break;
        case 2:
            salarioDiario = 64;
            break;
        case 3:
            salarioDiario = 80;
            break;
        case 4:
            salarioDiario = 48;
            break;
        default:
            return "Número de empleado inválido.";
    }

    if (diasTrabajados <= 6 && diasTrabajados >= 0) {
        const pagoTotal = salarioDiario * diasTrabajados;
        return `El dueño debe pagar $${pagoTotal.toFixed(2)} al empleado.`;
    } else {
        return "Cantidad de días inválida. Por favor, ingrese un número de días entre 0 y 6.";
    }
}

// Ejemplo de uso:
const identificador = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
const diasTrabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó el empleado en la semana (0-6 días):"));

console.log(calcularPago(identificador, diasTrabajados));
