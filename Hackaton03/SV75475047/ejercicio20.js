function ejercicio20(params) {
    function realizarOperaciones(numeros) {
        let pares = 0;
        let mayor = numeros[0];
        let resultado = "";

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                pares++;
            }
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }

        resultado += "Cantidad de números pares: " + pares + "\n";
        resultado += "El mayor de todos los números: " + mayor + "\n";

        if (numeros[2] % 2 === 0) {
            resultado += "Cuadrado del segundo número: " + (numeros[1] * numeros[1]) + "\n";
        }

        if (numeros[0] < numeros[3]) {
            let media = (numeros[0] + numeros[1] + numeros[2] + numeros[3]) / 4;
            resultado += "Media de los 4 números: " + media.toFixed(2) + "\n";
        }

        if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
            let suma = numeros.reduce((total, num) => total + num, 0);
            resultado += "Suma de los 4 números: " + suma;
        }

        return resultado;
    }

    let numeros = [];
    for (let i = 1; i <= 4; i++) {
        let num = parseInt(prompt("Ingrese el número " + i + ":"));
        if (num >= 0) {
            numeros.push(num);
        } else {
            console.log("Debe ingresar un número entero positivo.");
            break;
        }
    }

    console.log(realizarOperaciones(numeros));

}