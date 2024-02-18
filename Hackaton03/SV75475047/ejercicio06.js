function ejercicio06(params) {
    const tarifaNormal = 20;
    const tarifaExtra = 25;
    const horasNormalesSemanales = 40;

    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));

    let sueldoSemana = 0;

    if (horasTrabajadas <= horasNormalesSemanales) {

        sueldoSemana = horasTrabajadas * tarifaNormal;
    } else {

        let horasExtras = horasTrabajadas - horasNormalesSemanales;
        sueldoSemana = (horasNormalesSemanales * tarifaNormal) + (horasExtras * tarifaExtra);
    }

    console.log("El sueldo semanal del trabajador es: $" + sueldoSemana.toFixed(2));

}