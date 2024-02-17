function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


const numero = parseInt(prompt("Ingrese un número entero positivo del 1 al 10 o el 9:"));

if (numero >= 1 && numero <= 10) {
    if (numero === 9 || esPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
} else {
    console.log("Por favor, ingrese un número válido del 1 al 10 o el 9.");
}