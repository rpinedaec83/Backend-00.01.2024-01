// Definir salarios por tipo de empleado
const salario_cajero = 56;
const salario_servidor = 64;
const salario_preparador = 80;
const salario_mantenimiento = 48;

// Definir variables para el ID del empleado y los días trabajados
var id_empleado, dias_trabajados;
var salario_total;

// Solicitar al usuario que ingrese el ID del empleado y los días trabajados
console.log("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento):");
id_empleado = parseInt(prompt("ID del empleado:")); // Leer el ID del empleado ingresado por el usuario
console.log("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):");
dias_trabajados = parseInt(prompt("Días trabajados:")); // Leer los días trabajados ingresados por el usuario

// Verificar si la cantidad de días trabajados es válida
if (dias_trabajados < 1 || dias_trabajados > 6) {
    console.log("La cantidad de días trabajados no es válida. Ingrese un valor entre 1 y 6.");
} else {
    // Calcular el salario total según el ID del empleado
    switch (id_empleado) {
        case 1:
            salario_total = salario_cajero * dias_trabajados;
            break;
        case 2:
            salario_total = salario_servidor * dias_trabajados;
            break;
        case 3:
            salario_total = salario_preparador * dias_trabajados;
            break;
        case 4:
            salario_total = salario_mantenimiento * dias_trabajados;
            break;
        default:
            console.log("Número de empleado no válido. Ingrese un valor entre 1 y 4.");
    }

    // Mostrar el salario total que el dueño debe pagar al empleado
    console.log("El dueño debe pagar al empleado $" + salario_total);
}