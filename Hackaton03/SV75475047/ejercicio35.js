function ejercicio35(params) {
    let cantidadNumeros = 20;
    let numeroMayor = Number.MIN_SAFE_INTEGER;
    let numeroMenor = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= cantidadNumeros; i++) {
        let numero = parseInt(prompt("Ingrese el número " + i + ":"));

        if (numero > numeroMayor) {
            numeroMayor = numero;
        }

        if (numero < numeroMenor) {
            numeroMenor = numero;
        }
    }

    console.log("El número mayor ingresado es: " + numeroMayor);
    console.log("El número menor ingresado es: " + numeroMenor);

}