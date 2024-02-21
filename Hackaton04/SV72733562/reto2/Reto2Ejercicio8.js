
const mayores = []

function arreglo_mayores(arreglos) {
  
   
    for (let i = 0; i < arreglos.length; i++) 
    {
      
      const mayor = Math.max(...arreglos[i]);
      
      mayores.push(mayor);
    }
  
    return mayores;
  }
  
  

  const arreglo_de_arreglos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

  const resultado = arreglo_mayores(arreglo_de_arreglos);

  console.log(resultado); 