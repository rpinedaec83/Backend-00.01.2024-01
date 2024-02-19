
let suma = 0;

function suma_presupuestos(personas) 
{

    for (let i = 0; i < personas.length; i++) 
    {
      
      suma += personas[i].presupuesto;

    }
    
    return suma;

  }

  
  const personas = 
  [

    { nombre: 'John', presupuesto: 1000 },
    { nombre: 'Cena', presupuesto: 3000 },
    { nombre: 'Pepito', presupuesto: 5000 }

  ];
  const suma_total = suma_presupuestos(personas);

  console.log("La suma total de los presupuestos es:" + suma_total); 