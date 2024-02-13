function division(resto, divisor) {
    let cociente = 0;
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }
    return [cociente, resto];
}

const dividendo = parseInt(prompt("Ingrese el dividendo:"));
const divisor = parseInt(prompt("Ingrese el divisor:"));
const resultadoDivision = division(dividendo, divisor);
console.log(`Cociente: ${resultadoDivision[0]}, Resto: ${resultadoDivision[1]}`);
