
let pi = 3; 

let denominador = 2;

let termino = 4; 

let iteraciones = parseInt(prompt("Ingrese las iteraciones que desee; A más cantidad, más exacta la respuesta."));


for (let i = 0; i < iteraciones; i++) 
{

    pi += termino / (denominador * (denominador + 1) * (denominador + 2));
    termino = termino * -1;
    denominador = denominador + 2; 

}


console.log("La aproximacion de pi en " + iteraciones + " iteraciones fue de: " + pi);