
let numero1 = prompt("Escribe el primer numero")
numero1 = parseInt(numero1)

let numero2 = prompt("Escribe el segundo numero")
numero2 = parseInt(numero2)

let numero3 = prompt("Escribe el segundo numero")
numero3 = parseInt(numero3)

if (numero1>numero2&&numero1>numero3)
{
    console.log("El numero mayor es el primero")
}
else if (numero2>numero1&&numero2>numero3)
{
    console.log("El numero mayor es el segundo")
}
else
{
    console.log("El numero mayor es el tercero")
}