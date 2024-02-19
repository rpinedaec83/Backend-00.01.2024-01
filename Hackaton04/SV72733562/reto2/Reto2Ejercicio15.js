
/*Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada*/


let arreglo = [];

function multiplicarporlength(...n)
{

    let numerodeiteraciones = n.length

    for(let i = 0; i<numerodeiteraciones; i++)
    {

        arreglo[i] = n[i]*numerodeiteraciones;

    }

    return arreglo;

}


let numeros = multiplicarporlength(1,3,4,0);

console.log(numeros)
