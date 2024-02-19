
function nombres_estudiantes(personas) 
{

    const nombres = [];

    for (let i = 0; i < personas.length; i++) 
    {

      nombres.push(personas[i].nombre);

    }
    return nombres;
  }
  

  const estudiantes = 
  [

    { nombre: 'John', edad: 20 },
    { nombre: 'Cena', edad: 22 },
    { nombre: 'Pepito', edad: 21 }

  ];

  let nombrepersonas = nombres_estudiantes(estudiantes);
  
  console.log(nombrepersonas); 

  console.log(nombrepersonas.length)