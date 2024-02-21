
let arreglo = [];

function minimoymaximo(arreglo) {
    
    arreglo.sort((a, b) => a - b);
  
    
    return [arreglo[0], arreglo[arreglo.length - 1]];
  }
  
  
  const numeros = [30, 3, 14, 1, 5];

  const resultado = minimoymaximo(numeros);

  console.log(resultado);