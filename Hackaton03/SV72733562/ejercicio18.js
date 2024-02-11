
let cantidadcds = parseInt(prompt("Ingresa la cantidad de cds que desee"))

let precio = 0

if (cantidadcds<10)
{
precio = 10*cantidadcds
console.log("El precio a pagar es: " + precio)
}

else if (cantidadcds>=10 && cantidadcds<100)
{
precio = 8*cantidadcds
console.log("El precio a pagar es: " + precio)
}

else if (cantidadcds>=100 && cantidadcds<500)
{
precio = 7*cantidadcds
console.log("El precio a pagar es: " + precio)
}
else
{
precio = 6*cantidadcds  
console.log("El precio a pagar es: " + precio)
}

let gananciavendedor = precio/0.0825
console.log("La ganancia del vendedor es: "+gananciavendedor)