
let filtro_string = [];
let ejemplo = []

function filtro(arreglo) 
{

  for (let i = 0; i < arreglo.length; i++) 
  {

    if (Array.isArray(arreglo[i])) 
    {
        
      filtro_string.push(arreglo[i]);

    }

  }
  return filtro_string;
}

ejemplo = [1, 'depende', false, [3, 5], 'cinco'];


filtro_string = filtro(ejemplo);

console.log(filtro_string)