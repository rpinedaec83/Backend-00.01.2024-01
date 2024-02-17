function ejercicio39(params) {
    function calcularAproximacionPi(terminos) {
        let piAproximado = 0;
        let signo = 1;

        for (let i = 0; i < terminos; i++) {
            piAproximado += signo * (4 / (2 * i + 1));
            signo *= -1;
        }

        return piAproximado;
    }


    let aproximacionPi = calcularAproximacionPi(10000);
    console.log("Aproximación de π con la serie de Gregory-Leibniz:", aproximacionPi);


}