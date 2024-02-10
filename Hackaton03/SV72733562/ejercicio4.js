
const numero1 = prompt("Ingrese el primer numero");

const numero2 = prompt("Ingrese el segundo numero");

const numero3 = prompt("Ingrese el tercer numero");



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