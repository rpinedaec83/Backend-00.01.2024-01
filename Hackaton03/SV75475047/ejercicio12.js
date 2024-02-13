function ejercicio12(params) {

    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    let mayor;

    if (numero1 > numero2) {
        mayor = numero1;
    } else if (numero2 > numero1) {
        mayor = numero2;
    } else {
        console.log("Los números son iguales.");
        process.exit();
    }

    console.log("El número mayor es: " + mayor);

}