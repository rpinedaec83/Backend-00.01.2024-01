
function objeto_a_arreglo(objeto) 
{

    return Object.entries(objeto);

}
  

  const objeto = 
  { a: 1, 
    b: 2, 
    c: 3 
  };

  const arreglo = objeto_a_arreglo(objeto);
  
  console.log(arreglo); 