
/*Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.*/ 


let arreglo = [];

function mayor_a_menor(...n)
{

    let numerodeiteraciones = n.length

    for(let i = 0; i<numerodeiteraciones; i++)
    {

        arreglo[i] = n[i];

    }

    
    arreglo.sort
    (function(a, b)

       {
         return b - a
       }

    );


    return arreglo;

}


let numeros = mayor_a_menor(1,3,4,0);

console.log(numeros)