// Constantes
const SalarioCajero = 56;
const SalarioServidor = 64;
const SalarioPreparador = 80;
const SalarioMantenimiento = 48;

// Variables
let idEmpleado, diasTrabajados, salarioTotal;

// Entrada de datos
idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (56, 64, 80 o 48):"));
diasTrabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó en la semana (1 a 6 días):"));

// Calcular salario total
switch (idEmpleado) {
    case 56:
        salarioTotal = SalarioCajero * diasTrabajados;
        break;
    case 64:
        salarioTotal = SalarioServidor * diasTrabajados;
        break;
    case 80:
        salarioTotal = SalarioPreparador * diasTrabajados;
        break;
    case 48:
        salarioTotal = SalarioMantenimiento * diasTrabajados;
        break;
    default:
        console.log("Número identificador de empleado no válido.");
}

// Mostrar resultado
if (salarioTotal !== undefined) {
    console.log("El dueño debe pagar al empleado $" + salarioTotal);
}