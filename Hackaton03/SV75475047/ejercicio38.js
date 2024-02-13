function ejercicio38(params) {
    function esNumeroPerfecto(numero) {
        let sumaDivisores = 0;

        for (let i = 1; i <= numero / 2; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }

        return sumaDivisores === numero;
    }

    let num = parseInt(prompt("Ingrese un número para verificar si es un número perfecto:"));
    if (esNumeroPerfecto(num)) {
        console.log(num + " es un número perfecto.");
    } else {
        console.log(num + " no es un número perfecto.");
    }

}