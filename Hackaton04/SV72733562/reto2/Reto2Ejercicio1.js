
const saludo = ({ nombre, apellido, edad }) => 
{

    return "Hola mi nombre es " + nombre + apellido + " y mi edad " + edad;

};
  

  const sebas =
  { 

    nombre: "Sebastian ", 
    apellido: "Yabiku", 
    edad: 33 

  };

  console.log(saludo(sebas));