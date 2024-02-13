function verificarParImpar(numero) {
    if (isNaN(numero)) {
        return "Por favor, ingresa un número válido.";
    } else {
        if (numero % 2 === 0) {
            return `${numero} es un número par.`;
        } else {
            return `${numero} es un número impar.`;
        }
    }
}


const numero = parseInt(prompt("Ingresa un número:"));
const resultado = verificarParImpar(numero);
console.log(resultado);