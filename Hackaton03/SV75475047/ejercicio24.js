function ejercicio24(params) {
    function sumaNumerosParesHastaMil() {
        let suma = 0;
        for (let i = 2; i <= 1000; i += 2) {
            suma += i;
        }
        return suma;
    }

    let resultado = sumaNumerosParesHastaMil();
    console.log("La suma de todos los números pares hasta 1000 es: " + resultado);

}