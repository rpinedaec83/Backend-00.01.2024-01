
/*Cree una función que capitalice la última letra de cada palabra.*/


function mayuscula_final_palabra(frase) 
{

    let palabras = frase.split(" ");
    
    for (let i = 0; i < palabras.length; i++) 
    {

        let palabra = palabras[i];
        let ultima_letra_palabra = palabra.length - 1;
        

        if (palabra.length > 1) 
        {

            palabras[i] = palabra.substring(0, ultima_letra_palabra) + palabra[ultima_letra_palabra].toUpperCase();

        } 
        
        else 
        {

            palabras[i] = palabra.toUpperCase();

        }

    }
    
    
    return palabras.join(" ");

}



let frase = "porque yo estoy aquí";

let frase_en_mayusculas = mayuscula_final_palabra(frase);

console.log(frase_en_mayusculas); 
