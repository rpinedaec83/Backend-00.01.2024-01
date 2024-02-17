
let numero = parseInt(prompt("Ingresa un numero: "));

let divisor = 1; 
let contador = 0; 
while (divisor <=numero)
{
   if(numero % divisor == 0) 
    {
        contador++;
    } 
    divisor++
}
    
if (contador == 2)
{
    "El numero es primo"
}
else 
{
    "El numero no es primo"
}


