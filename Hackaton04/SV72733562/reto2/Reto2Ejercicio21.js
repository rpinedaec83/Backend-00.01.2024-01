/*
Te dan una cadena de palabras. 
Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
 */


let arreglo = [];

function palabraaencontrar(...hola)
{

    for( i=0; i<hola.length; i++)
   {
    arreglo[i] = hola[i];
   }
   

    let yelpollitopio = arreglo.lastIndexOf("pollito")


    return yelpollitopio;

}


let frase = palabraaencontrar("En", "la", "radio", "hay", "un", "pollito");

console.log(frase)