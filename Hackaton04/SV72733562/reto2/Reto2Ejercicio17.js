
/*Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.*/ 

let arreglo = [];

function diferencia(...n)
{

    let numerodeiteraciones = n.length

    for(let i = 0; i<numerodeiteraciones; i++)
    {

        arreglo[i] = n[i];

    }

    
    arreglo.sort
    (function(a, b)

       {
         return a - b
       }

    );


    return arreglo;

}


let numeros = diferencia(15,37,40,24);

console.log(numeros)

let menor = numeros[0]

let mayor = numeros[numeros.length-1];

console.log("El número menor es: " + menor)

console.log("El número mayor es: " + mayor)

console.log("La diferencia entre ambos números es: " + (mayor-menor))