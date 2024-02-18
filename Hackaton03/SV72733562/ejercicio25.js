
let numero = parseint(prompt("Ingresa el numero")) 

let factorial = 1 

let i = 1;

do
{
    
    factorial=factorial*i;
    i++
    
} while(i<=numero)

console.log("El factoril del numero es: "+factorial)