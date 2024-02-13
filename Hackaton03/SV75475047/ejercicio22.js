function ejercicio22(params) {
    function sumaPrimerosNNumeros(n) {
        if (n < 0) {
            return "El número debe ser positivo.";
        } else {
            return n * (n + 1) / 2;
        }
    }

    let n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
    let resultado = sumaPrimerosNNumeros(n);
    console.log("La suma de los primeros " + n + " números es: " + resultado);

}