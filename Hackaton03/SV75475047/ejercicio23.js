function ejercicio23(params) {
    function sumaNumerosImpares(n) {
        if (n < 0) {
            return "El número debe ser positivo.";
        } else {
            let suma = 0;
            for (let i = 1; i <= n; i += 2) {
                suma += i;
            }
            return suma;
        }
    }

    let n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a n:"));
    let resultado = sumaNumerosImpares(n);
    console.log("La suma de los números impares menores o iguales a " + n + " es: " + resultado);

}