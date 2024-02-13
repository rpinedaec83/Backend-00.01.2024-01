function ejercicio25(params) {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }


    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let resultado = factorial(numero);
    console.log("El factorial de " + numero + " es: " + resultado);

}