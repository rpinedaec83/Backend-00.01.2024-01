
let numero1 = prompt("Ingrese el primer numero")
numero1=parseInt(numero1)

let numero2 = prompt("Ingrese el segundo numero")
numero2=parseInt(numero2)

let numero3 = prompt("Ingrese el tercer numero")
numero3=parseInt(numero3)


if (numero1> numero2 && numero1>numero3)
{
    console.log("El numero mayor es el " + numero1);
    if(numero2>numero3)
    {
        console.log("El segundo numero es el " + numero2)
        console.log("El tercer numero es el " + numero3)
    }
    else
    {
        console.log("El segundo numero es el " + numero3)
        console.log("El tercer numero es el " + numero2)
    }

}

else if (numero2> numero1 && numero2>numero3)
{
    console.log("El numero mayor es el " + numero2);
    if(numero1>numero3)
    {
        console.log("El segundo numero es el " + numero1)
        console.log("El tercer numero es el " + numero3)
    }
    else
    {
        console.log("El segundo numero es el " + numero3)
        console.log("El tercer numero es el " + numero1)
    }
}
else if (numero3> numero1 && numero3>numero2)
{
    console.log("El numero mayor es el "+ numero3);

    if(numero2>numero1)
    {
        console.log("El segundo numero es el " + numero2)
        console.log("El tercer numero es el " + numero1)
    }
    else
    {
        console.log("El segundo numero es el " + numero1)
        console.log("El tercer numero es el " + numero2)
    }
}