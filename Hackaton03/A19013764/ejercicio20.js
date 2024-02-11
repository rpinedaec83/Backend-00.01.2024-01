function verificarNumerosYOperaciones(num1, num2, num3, num4) {
    let contadorPares = 0;
    if (num1 % 2 === 0) contadorPares++;
    if (num2 % 2 === 0) contadorPares++;
    if (num3 % 2 === 0) contadorPares++;
    if (num4 % 2 === 0) contadorPares++;

    const mayor = Math.max(num1, num2, num3, num4);

    let resultado = `Cantidad de números pares: ${contadorPares}\n`;
    resultado += `El mayor de todos los números es: ${mayor}\n`;

    if (num3 % 2 === 0) {
        const cuadradoSegundo = num2 * num2;
        resultado += `El cuadrado del segundo número es: ${cuadradoSegundo}\n`;
    }

    if (num1 < num4) {
        const media = (num1 + num2 + num3 + num4) / 4;
        resultado += `La media de los 4 números es: ${media}\n`;
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        const suma = num1 + num2 + num3 + num4;
        resultado += `La suma de los 4 números es: ${suma}\n`;
    }

    return resultado;
}

const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));
const num3 = parseInt(prompt("Ingrese el tercer número:"));
const num4 = parseInt(prompt("Ingrese el cuarto número:"));

console.log(verificarNumerosYOperaciones(num1, num2, num3, num4));
