
/*Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)*/

let suma = 0;


function sumar (...n) 
  {

    for (let i = 0; i < n.length; i++)
     {

        suma += n[i];

     }

      return suma;

  }
    
  
  console.log(sumar(1, 2, 3, 4, 5)); 
  
  
  

  
  