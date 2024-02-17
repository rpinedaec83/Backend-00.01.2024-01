function ejercicio19(params) {
    function calcularSalario(identificador, diasTrabajados) {
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
                return "Identificador de empleado inválido.";
        }

        let salarioSemanal = salarioDiario * diasTrabajados;

        return "El salario semanal para el empleado con identificador " + identificador + " es: $" + salarioSemanal.toFixed(2);
    }

    let identificadorEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));

    console.log(calcularSalario(identificadorEmpleado, diasTrabajados));

}