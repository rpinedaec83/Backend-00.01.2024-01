
let cantidadnumeros = 0;
let numero= [];

let suma = 0;

function sumacubos(cantidadnumeros)
{

 for (let i=0;i<cantidadnumeros;i++)
 {

 numero[i] = parseInt(prompt("Ingrese el numero en la posición " + i + ": "));

 suma += Math.pow(numero[i],3);

 }

 return suma;

}

console.log(sumacubos(3));