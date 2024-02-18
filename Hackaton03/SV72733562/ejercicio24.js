
console.log("Suma de los numeros pares hasta el numero 1000:")

n=1000;

let suma=0;

for(i=0; i<=n; i++)
{
    if (i%2==0)
    {
        suma=suma+i;
    }
}

console.log("La suma de todos los numeros pares hasta el 1000 es: "+ suma)