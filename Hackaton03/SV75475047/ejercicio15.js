function ejercicio15() {
    function centimetrosAPulgadas(centimetros) {
        return centimetros / 2.54;
    }

    function librasAKilogramos(libras) {
        return libras * 0.453592;
    }

    let centimetros = 100;
    let pulgadas = centimetrosAPulgadas(centimetros);
    console.log(centimetros + " centímetros equivalen a " + pulgadas.toFixed(2) + " pulgadas.");

    let libras = 10;
    let kilogramos = librasAKilogramos(libras);
    console.log(libras + " libras equivalen a " + kilogramos.toFixed(2) + " kilogramos.");

}