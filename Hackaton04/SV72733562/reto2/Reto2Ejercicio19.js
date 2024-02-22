
/*
Cree una función que tome dos argumentos (elemento, tiempos). 
El primer argumento (elemento) es el elemento que necesita repetirse, 
mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento.
Devuelve el resultado en una matriz.
*/


let arreglo = [];


function Repetir_Elemento(elemento, veces)
{

    let numerodeiteraciones = veces;

    for(let i = 0; i<numerodeiteraciones; i++)
    {

        arreglo[i] = elemento;

    }

    return arreglo;

}


let numeros = Repetir_Elemento(5,10);

console.log(numeros)
