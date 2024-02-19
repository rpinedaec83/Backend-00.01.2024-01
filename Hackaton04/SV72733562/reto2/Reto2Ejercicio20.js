
/*
Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando
 todas las vocales en una cadena con una vocal especificada.
 */


function lenguajeinclusivoxdd(palabranormal) 

{

    function reemplazo_letra_a(valor) 
    
    {

    return valor.replace(/a/gi, "e");

    }


return reemplazo_letra_a(palabranormal);


}



let palabratransformada = lenguajeinclusivoxdd("hola, bienvenida, esta es mi casa");

console.log(palabratransformada)
