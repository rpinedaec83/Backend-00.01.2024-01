function ejercicio09(params) {
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

    let aumento = 0;

    if (salarioActual > 2000) {

        aumento = salarioActual * 0.05;
    } else {

        aumento = salarioActual * 0.10;
    }

    let nuevoSalario = salarioActual + aumento;

    console.log("El nuevo salario del trabajador es: $" + nuevoSalario.toFixed(2));

}