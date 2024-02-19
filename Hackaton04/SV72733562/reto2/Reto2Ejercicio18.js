
/*Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros. */

let nuevoarreglo = [];

function filtro(...numerosafiltrar)
{

    let numerodeiteraciones = numerosafiltrar.length


    for(let i = 0; i<numerodeiteraciones; i++)
    {
    

        if ((typeof numerosafiltrar[i]) === "number")
        {

            nuevoarreglo.push(numerosafiltrar[i]);
        }

    }


    return nuevoarreglo;


}


let numeros = filtro(1,3,"melman",4,"xingqiu",0,"x");

console.log(numeros)