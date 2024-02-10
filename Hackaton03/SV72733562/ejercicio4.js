
let numero1 = prompt("Ingrese el primer numero")
numero1=parseInt(numero1)

let numero2 = prompt("Ingrese el segundo numero")
numero2=parseInt(numero2)

let numero3 = prompt("Ingrese el tercer numero")
numero3=parseInt(numero3)


if (numero1> numero2 && numero1>numero3)
{
    console.log("El primer numero es el mayor");
}
else if (numero2> numero1 && numero2>numero3)
{
    console.log("El segundo numero es el mayor");
}
else if (numero3> numero1 && numero3>numero2)
{
    console.log("El tercer numero es el mayor");
}