function ejercicio40(params) {
    function calcularAproximacionPi(terminos) {
        let piAproximado = 3;
        let denominador = 2;
        for (let i = 1; i <= terminos; i++) {

            piAproximado += 4 / (denominador * (denominador + 1) * (denominador + 2)) * (i % 2 === 0 ? -1 : 1);
            denominador += 2;
        }

        return piAproximado;
    }

    let aproximacionPi = calcularAproximacionPi(10000);
    console.log("Aproximación de π con la serie de Nilakantha:", aproximacionPi);

}