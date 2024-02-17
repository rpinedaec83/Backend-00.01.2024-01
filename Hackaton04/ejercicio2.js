
let numero = prompt("Ingrese el número");
numero = parseInt(numero)

let potencia = prompt("Ingrese la potencia");
potencia = parseInt(potencia)


function Potenciación(num,pote)
{
    return(Math.pow(num,pote))
}


console.log("La potencia solicitada del " + numero + " es: "  + Potenciación(numero,potencia))