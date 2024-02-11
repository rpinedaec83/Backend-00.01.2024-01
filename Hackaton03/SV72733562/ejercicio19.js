

let precio = 0;
	
console.log("Elige al empleado por numeros si:")
console.log(" 11 = Cajero ")
console.log(" 22 = Servidor ")
console.log(") 33 = Preparador de mezclas ")
console.log(" 44 = Mantenimiento ")

let empleado = parseInt(prompt("Escriba el numero del trabajador"))

let diastrabajados = prompt("Cuantos dias ha trabajado? (1-6)")



if (empleado = 11)
{
    precio=diastrabajados*56
}

else if (empleado = 22)
{
    precio=diastrabajados*64
}

else if (empleado = 33)
{
    precio=diastrabajados*80
}

else if (empleado = 44)
{
    precio=diastrabajados*48
}


console.log("Lo que debe pagarle es: "+precio)
