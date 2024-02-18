
 console.log("Bienvenido a la tienda de zapatos")

 let numerozapatos = prompt("Ingrese la cantidad de zapatos que desea");
 numerozapatos = parseInt(numerozapatos)

 const costoporzapato = 80;


 let preciototal = numerozapatos*costoporzapato;


 if (numerozapatos > 30) 
{
    preciototal = preciototal * 0.6; 
} 

else if (numerozapatos > 20) 
{
    preciototal = preciototal * 0.8; 
} 

else if (numerozapatos > 10) 
{
    preciototal = preciototal * 0.9;
}

console.log("El precio total es de: " + preciototal);