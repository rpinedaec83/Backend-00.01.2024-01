
function formato_telefono(arreglo) 

{

    const primeraparte = arreglo.slice(0, 3).join('');

    const segundaparte = arreglo.slice(3, 6).join('');

    const terceraparte = arreglo.slice(6).join('');
  
    return primeraparte + " " + segundaparte + "-" + terceraparte;
    
}
 
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numero_telefono = formato_telefono(numeros);
  console.log(numero_telefono); 