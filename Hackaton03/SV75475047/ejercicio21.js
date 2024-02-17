function ejercicio(params) {
    function calcularFactorial(numero) {
        if (numero < 0) {
            return "El factorial no está definido para números negativos.";
        } else if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let factorial = 1;
            for (let i = 2; i <= numero; i++) {
                factorial *= i;
            }
            return factorial;
        }
    }

    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let resultado = calcularFactorial(numero);
    console.log("El factorial de " + numero + " es: " + resultado);

}