function ejercicio26(params) {
    function divisionRestasSucesivas(dividendo, divisor) {
        let cociente = 0;
        let resto = dividendo;

        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }

        return { cociente: cociente, resto: resto };
    }

    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));

    let resultado = divisionRestasSucesivas(dividendo, divisor);
    console.log("Cociente: " + resultado.cociente);
    console.log("Resto: " + resultado.resto);

}