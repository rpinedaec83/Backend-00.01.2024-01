function ejercicio08(params) {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6) {
        console.log("El estudiante aprobó con un promedio de " + promedio.toFixed(2));
    } else {
        console.log("El estudiante reprobó con un promedio de " + promedio.toFixed(2));
    }

}