
 console.log("Bienvenido a la tienda de zapatos")

 const numerozapatos = prompt("Ingrese la cantidad de zapatos que desea")
 
 const costoporzapato = 80;

 const preciototal = numerozapatos+costoporzapato;


 if (numerozapatos > 30) 
{
    preciototal = preciototal * 0.6; 
} 

else if (cantidadZapatos > 20) 
{
    preciototal = preciototal * 0.8; 
} 

else if (cantidadZapatos > 10) 
{
    preciototal = preciototal * 0.9;
}

console.log(precioTotal);

 