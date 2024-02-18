
let mayor = 0;

let menor = 0;
	
let i = 1;

	cantidadnumeros = 20;
	
    while (i<=cantidadnumeros)
    {

    x = parseInt(prompt("Ingrese el numero "+ i+": "));

      if(i=1)
      {
        mayor=x;
        menor=x;
      }
      else if (x>mayor)
      {
       mayor=x;
      }
      else if (x<menor)
      {
       menor=x;
      }

    i=i+1

    }

	console.log("El numero menor es: "+ menor) 
	console.log("El numero mayor es: "+ mayor)
	