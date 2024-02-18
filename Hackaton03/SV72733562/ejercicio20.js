
let numero1 = parseInt(prompt("Ingresa el primer numero"))

let numero2 = parseInt(prompt("Ingresa el segundo numero"))

let numero3 = parseInt(prompt("Ingresa el tercer numero"))

let numero4 = parseInt(prompt("Ingresa el cuarto numero"))


if (numero1 % 2 == 0)
{
    console.log("El primer numero es par")
}
else
{
    console.log("El primer numero es impar")
}



if (numero2 % 2 == 0)
{
    console.log("El segundo numero es par")
}
else
{
    console.log("El segundo numero es impar")
}



if (numero3 % 2 == 0)
{
    console.log("El tercer numero es par")

    let cuadradosegundo = numero2*numero2
    console.log("El cuadrado del segundo es: "+cuadradosegundo)
}
else
{
    console.log("El tercecr numero es impar")
}



if (numero4 % 2 == 0)
{
    console.log("El cuarto numero es par")
}
else
{
    console.log("El cuarto numero es impar")
}





if (numero1>numero2 && numero1>numero3 && numero1> numero4)
{
    console.log("El numero mayor es el primero")
}

else if (numero2>numero1 && numero2>numero3 && numero2> numero4)
{
    console.log("El numero mayor es el segundo")
}
else if (numero3>numero1 && numero3>numero2 && numero3> numero4)
{
    console.log("El numero mayor es el tercero")
}
else 
{
    console.log("El numero mayor es el cuarto")
}




if (numero1<numero4)
{
    let mediadelos4 = (numero1+numero2+numero3+numero4)/4
    console.log("La media de los 4 numeros es:" + mediadelos4)
}



if (numero2>numero3 && numero3>=50 && numero3<=700)
{
   let sumadelos4 = (numero1+numero2+numero3+numero4)
   console.log("La suma de los 4 numeros es: "+ sumadelos4)
}



