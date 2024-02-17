
function ejercicio01(){
    let nombre1 = prompt("Escriba su nombre: ");
    let apellido1 = prompt("Escriba su apellido: "); 
    let edad1 = parseInt(prompt("Escriba su edad: ")); 

    const obtenerSaludo = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
    alert(obtenerSaludo(nombre1, apellido1, edad1));
}


function ejercicio02(){
   
    let numero1 = parseInt(prompt("Escriba el primer numero: "));
    let numero2 = parseInt(prompt("Escriba el segundo numero: "));
    let numero3 = parseInt(prompt("Escriba el tercer numero: "));
    let sumacubos = sumaDeCubos(numero1, numero2, numero3);
    
    alert(`La suma de los cubos de los numeros ${numero1}, ${numero2}, ${numero3} es: ${sumacubos}`)
}

function sumaDeCubos(numero1, numero2, numero3){
    
    let sumacubos1 = (numero1 ** 3) + (numero2 ** 3) + (numero3 ** 3);
    return sumacubos1; 
}

function ejercicio03(){
    const getType = (valor) => typeof valor;
 
    alert("El dato Hola es de tipo: " + getType("hola"));
    alert("El dato 1 es de tipo: " + getType(1));
}


function ejercicio04(){

    let continuar = true;
    let numeros = [];
    
    while (continuar) {
      let numero = prompt("Ingrese un número o escriba 'fin' para terminar:");
    
      if (numero === "fin") {
        continuar = false;
      } else {
        numeros.push(Number(numero));
      }
    }
    let resultado = sumarNumeros(...numeros);

    alert(`La suma de los números ingresados es: ${resultado}`);

}

function sumarNumeros(...args) {
    let suma = 0;
    for (let i = 0; i < args.length; i++) {
      suma += args[i];
    }
    return suma;
  }

function ejercicio05(){

    const valores = [1, 'hola', 2, 'mundo', true, ''];
    const soloStrings = filtrarStrings(valores);
    alert(soloStrings);   

}

function filtrarStrings(array) {
    return array.filter((valor) => typeof valor === 'string');
  }

function ejercicio06(){

    let [min, max] = minMaxUsuario();
    alert("El numero minimo es: " + min + " y el numero maximo es: " + max);
}

function minMaxUsuario() {
    let numeros = [];
    let continuar = true;
  
    while (continuar) {
      let numero = prompt("Ingrese un número o escriba 'fin' para terminar:");
  
      if (numero === "fin") {
        continuar = false;
      } else {
        numeros.push(Number(numero));
      }
    }
  
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
  
    return [min, max];
  }

  function ejercicio07(){

    let numeroTelefono = formatearNumeroTelefono();
    alert(numeroTelefono);

}

function formatearNumeroTelefono() {
    let numeros = [];
    let continuar = true;
  
    while (continuar) {
      let numero = prompt("Ingrese un número entre 0 y 9:");
  
      if (numero.length !== 1 || isNaN(numero) || numero < 0 || numero > 9) {
        alert("Por favor, ingrese un número válido entre 0 y 9.");
      } else {
        numeros.push(numero);
      }
  
      if (numeros.length === 10) {
        continuar = false;
      }
    }
  
    return formatearTelefono(numeros);
  }
  
  function formatearTelefono(numeros) {
    let area = numeros.slice(0, 3).join('');
    let prefijo = numeros.slice(3, 6).join('');
    let numero = numeros.slice(6).join('');
  
    return `(${area}) ${prefijo}-${numero}`;
  }

  function ejercicio08(){

    let mayores = obtenerMayoresNumeros();
    alert(mayores);

}

function obtenerMayoresNumeros() {
    let matriz = [];
    let continuar = true;
  
    while (continuar) {
      let numeros = [];
      let continuarNumeros = true;
  
      while (continuarNumeros) {
        let numero = prompt("Ingrese un número o escriba 'fin' para terminar:");
  
        if (numero === "fin") {
          continuarNumeros = false;
        } else {
          numeros.push(Number(numero));
        }
      }
  
      matriz.push(numeros);
  
      let continuarMatriz = prompt("¿Desea ingresar otra fila de números? (s/n)").toLowerCase();
      if (continuarMatriz !== 's') {
        continuar = false;
      }
    }
  
    return obtenerMayores(matriz);
  }
  
  function obtenerMayores(matriz) {
    let mayores = [];
  
    for (let i = 0; i < matriz.length; i++) {
      let max = Math.max(...matriz[i]);
      mayores.push(max);
    }
  
    return mayores;
  }

  function ejercicio09(){
    let palabra = prompt("Ingrese una palabra: ");
    let caracter = prompt("Seleccione el caracter: ");
    let [primerIndice, ultimoIndice] = indicesCaracter(palabra, caracter);
    alert("El primero indice del caracter " + caracter + " es " + primerIndice + " y el ultimo indice del caracter es: " + ultimoIndice);
  }

  function indicesCaracter(palabra, caracter) {
    let primerIndice = palabra.indexOf(caracter);
    let ultimoIndice = palabra.lastIndexOf(caracter);
    
    return [primerIndice, ultimoIndice];
  }

  function ejercicio10(){

    let miObjeto = {
        a: 1,
        b: 2,
    };

    let miMatriz = convertirAMatriz(miObjeto);
    alert(miMatriz);

  }

  function convertirAMatriz(objeto) {
    let matriz = [];

    if (typeof objeto === 'object') {
        for (let clave in objeto) {
            if (objeto.hasOwnProperty(clave)) {
                let valor = prompt(`Ingrese el valor para la clave "${clave}"`);
                matriz.push([clave, valor]);
            }
        }
    } else {
        matriz.push([0, objeto]);
    }

    return matriz;
}

function ejercicio11(){
    
    let personas = [
        { nombre: 'Juan', presupuesto: 0 },
        { nombre: 'Maria', presupuesto: 0 },
        { nombre: 'Pedro', presupuesto: 0 }
    ];

    let suma = sumaPresupuestos(personas);
    alert(suma);
  }

function sumaPresupuestos(personas) {
    let suma = 0;

    for (let i = 0; i < personas.length; i++) {
        let presupuesto = parseFloat(prompt(`Ingrese el presupuesto de ${personas[i].nombre}`));
        personas[i].presupuesto = presupuesto;
        suma += presupuesto;
    }

    return suma;
}

function ejercicio12(){
    let estudiantes = [
        { id: 1, nombre: '' },
        { id: 2, nombre: '' },
        { id: 3, nombre: '' }
    ];

    let nombres = obtenerNombresEstudiantes(estudiantes);
    alert(nombres);

  }

function obtenerNombresEstudiantes(estudiantes) {
    let nombres = [];

    for (let i = 0; i < estudiantes.length; i++) {
        let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
        estudiantes[i].nombre = nombre;
        nombres.push(nombre);
    }

    return nombres;
}

function ejercicio13(){

    let miObjeto = {
        likes: 2,
        dislikes: 3,
        followers: 10,
    };

    let miMatriz = convertirAMatriz(miObjeto);
    alert(miMatriz);


  }

function ejercicio14(){

    let n = parseInt(prompt('Ingrese un número'));
    let resultado = sumaCuadrados(n);
    alert(`La suma de los números cuadrados hasta ${n} es ${resultado}`);

  }

function sumaCuadrados(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }

    return suma;
}

function ejercicio15(){

    let miMatriz = [1, 2, 3, 4, 5];
    let resultado = multiplicarPorCantidad(miMatriz);
    alert(resultado);
  }

function multiplicarPorCantidad(matriz) {
    let cantidad = matriz.length;

    for (let i = 0; i < matriz.length; i++) {
        matriz[i] *= cantidad;
    }

    return matriz;
}

function ejercicio16(){

    let numero = parseInt(prompt('Ingrese un número'));
    let resultado = contarDesdeNumero(numero);
    alert(`La matriz de números desde ${numero} hasta 0 es: ${resultado.join(', ')}`);

  }

function contarDesdeNumero(numero) {
    let matriz = [];

    for (let i = numero; i >= 0; i--) {
        matriz.push(i);
    }

    return matriz;
}

function ejercicio17(){

    let numeros = [];

    while (true) {
        let numero = parseFloat(prompt('Ingrese un número (o deje en blanco para terminar)'));
        if (isNaN(numero)) {
            break;
        }
        numeros.push(numero);
    }
    
    let resultado = diferenciaMaxMin(numeros);
    alert(`La diferencia entre el número más grande y el más pequeño es: ${resultado}`);

  }

function diferenciaMaxMin(matriz) {
    let maximo = Math.max(...matriz);
    let minimo = Math.min(...matriz);

    return maximo - minimo;
}

function ejercicio18(){

    let matriz = [1, 'dos', 3, 'cuatro', 5];
    let enteros = filtrarEnteros(matriz);
    alert(enteros);

  }

function filtrarEnteros(matriz) {
    return matriz.filter(elemento => Number.isInteger(elemento));
}

function ejercicio19(){

    let elemento = prompt('Ingrese el elemento');
    let veces = parseInt(prompt('Ingrese la cantidad de veces que desea repetir el elemento'));
    
    let resultado = repetirElemento(elemento, veces);
    alert(`La matriz resultante es: ${resultado}`);

  }

function repetirElemento(elemento, veces) {
    let matriz = [];

    for (let i = 0; i < veces; i++) {
        matriz.push(elemento);
    }

    return matriz;
}

function ejercicio20(){

    String.prototype.vreplace = function(vocalEspecifica) {
        return this.replace(/[aeiou]/gi, vocalEspecifica);
    };
    
    let cadena = prompt('Ingrese una cadena de texto');
    let vocal = prompt('Ingrese la vocal con la que desea reemplazar las vocales');
    
    let resultado = cadena.vreplace(vocal);
    alert(`El resultado después de reemplazar las vocales es: ${resultado}`);

  }

function ejercicio21(){

    let cadena = prompt('Ingrese una cadena de palabras');
    let resultado = encontrarNemo(cadena);
    alert(resultado);

  }

  function encontrarNemo(cadena) {
    let palabras = cadena.split(' ');
    let indiceNemo = palabras.indexOf('Nemo');

    if (indiceNemo !== -1) {
        return `¡Encontré a Nemo en la palabra número ${indiceNemo + 1}!`;
    } else {
        return '¡No encontré a Nemo!';
    }
}

function ejercicio22(){

    let cadena = prompt('Ingrese una cadena de palabras');
    let resultado = capitalizarUltimaLetra(cadena);
    alert(resultado);

  }

function capitalizarUltimaLetra(cadena) {
    let palabras = cadena.split(' ');
    let resultado = '';

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let ultimaLetra = palabra.slice(-1).toUpperCase();
        let restoPalabra = palabra.slice(0, -1);
        resultado += restoPalabra + ultimaLetra + ' ';
    }

    return resultado.trim();
}