
let numero = parseInt(prompt("Ingresa el numero: "))
let sumadivisores = 1;



for (let i = 2; i <= numero / 2; i++) 
{

    if (numero % i == 0) 
    {

       sumaDivisores += i;

    }

}


if (sumadivisores == numero) 
{

    console.log("El número es perfecto");

}
else 
{

    console.log("El número no es perfecto");

}

