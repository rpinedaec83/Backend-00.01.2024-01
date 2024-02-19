
function primer_ultimo_indice(palabra, caracter) {

    const PrimerIndice = palabra.indexOf(caracter);
    const UltimoIndice = palabra.lastIndexOf(caracter);
    
    return [PrimerIndice,UltimoIndice];
  }
  
  
  const palabra = "IDAT DEDOS";
  const caracter = "D";

  const [primer_indice, ultimo_indice] = primer_ultimo_indice(palabra, caracter);

  console.log("Primer índice:", primer_indice); 

  console.log("Último índice:", ultimo_indice);