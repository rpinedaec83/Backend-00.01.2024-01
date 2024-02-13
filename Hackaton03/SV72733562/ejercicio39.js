
let pi = 0;

let denominador = 1;

let terminos = 1;

let iteraciones = parseInt(prompt("Ingrese las iteraciones que desee; A más cantidad, más exacta la respuesta."));

for (let i = 0; i < iteraciones; i++) 
{

    pi = pi + terminos * 4 / denominador;
    denominador = denominador + 2;
    terminos = terminos * -1;

}

console.log("La aproximación de pi en 3 iteraciones según esta fórmula es: " + pi);
