
/*Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.*/

let cuadradosperfectos = [];
let suma=0;

function sumacuadradosperfectos(numero)
{

    for(let i = 0; i<=numero; i++)
    {

        cuadradosperfectos[i] = i*i;

        suma = suma+cuadradosperfectos[i];

        

    }

    return suma;

}


const numero = sumacuadradosperfectos(6);

console.log(numero)