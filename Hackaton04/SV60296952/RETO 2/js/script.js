//EJERCICIO 1
function ejercicio1() {
const saludar = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
//IMPRIME
console.log(saludar('Sebastián', 'Yabiku', 33));
alert(saludar('Sebastián', 'Yabiku',33));
}
//--------------------------------------------------------------------------------------------------------
//EJERCICIO 2
function ejercicio2() {
const sumOfCubes = (...numeros) => {
    return numeros.reduce((acumulador, numero) => {
      return acumulador + Math.pow(numero, 3);
    }, 0);
  };
  //IMPRIME
  console.log(sumOfCubes(1, 5, 9)); // Salida: 855
alert ("la suma de los cubos es: " + sumOfCubes(1,5,9));
}
//------------------------------------------------------------------------------------------------------
  //EJERCICIO 3
  function ejercicio3() {
  const obtenerTipoDeValor = (valor) => {
    return typeof valor;
  };
  //IMPRIME
  console.log(obtenerTipoDeValor(5));            // numero
  console.log(obtenerTipoDeValor('Hola'));       // cadena
  console.log(obtenerTipoDeValor(true));         // booleano
  console.log(obtenerTipoDeValor(undefined));    // indefinido
  console.log(obtenerTipoDeValor(null));         // objeto
  console.log(obtenerTipoDeValor([]));           // objeto
  console.log(obtenerTipoDeValor({}));           // objeto
  console.log(obtenerTipoDeValor(function(){})); // funciom
  alert(
    "Los tipos de valores son: " + "\n" + 
    obtenerTipoDeValor(5) + "\n" +
    obtenerTipoDeValor('Hola') + "\n" +
    obtenerTipoDeValor(true) + "\n" +
    obtenerTipoDeValor(undefined) + "\n" +
    obtenerTipoDeValor(null) + "\n" +
    obtenerTipoDeValor([]) + "\n" +
    obtenerTipoDeValor({}) + "\n" +
    obtenerTipoDeValor(function(){})
  );  
  }
  //--------------------------------------------------------------------------------------------------------
//EJERCICIO 4
function ejercicio4() {
const sumar = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  };
  //IMPRIME
  console.log(sumar(1, 2, 3));      // Salida: 6
  console.log(sumar(1, 2, 3, 4));   // Salida: 10
  console.log(sumar(1, 2, 3, 4, 5));// Salida: 15
alert("n cantidad de argumentos con rest" + "\n" +
  sumar(1,2,3) + "\n" +  
  sumar(1, 2, 3, 4)+ "\n" + 
  sumar(1, 2, 3, 4, 5)+ "\n" 
);
}
//-------------------------------------------------------------------------------------------------------
  //EJERCICIO 5
  function ejercicio5() {
  const filtrarStrings = (array) => {
    return array.filter(valor => typeof valor === 'string');
  };
  const valores = [1, 'Hola', true, 'Idat', 42, 'Pachaqtec'];
  //IMPRIME
  console.log(filtrarStrings(valores)); // Salida: ['Hola', 'Idat', 'Pachaqtec']
alert ("Función que recibe un array de valores y los filtra si no es un string: "+ "\n" +
(filtrarStrings(valores)))
}
//-------------------------------------------------------------------------------------------------------
 //EJERCICIO 6
 function ejercicio6() {
 const minMax = (numeros) => {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
  };
  //IMPRIME
  console.log(minMax([1, 2, 3, 4, 5])); // Salida: [1, 5]
alert("función que toma una matriz de números y devuelve los números mínimos y máximos: "+ "\n" +
(minMax([1, 2, 3, 4, 5]))
);
 }
  //-------------------------------------------------------------------------------------------------------
  //EJERCICIO 7
  function ejercicio7() {
  const formatPhoneNumber = (numeros) => {
    const numeroFormateado = numeros.join('');
    return `(${numeroFormateado.slice(0, 3)}) ${numeroFormateado.slice(3, 6)}-${numeroFormateado.slice(6)}`;
  };
  //IMPRIME
  console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Salida: "(123) 456-7890"
alert(
" Matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono: "+ "\n" +
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
}
//--------------------------------------------------------------------------------------------------------
  //EJERCICIO 8
  function ejercicio8() {
  const findLargestNums = (matrices) => {
    return matrices.map(submatriz => Math.max(...submatriz));
  };
  //IMPRIME
  console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // Salida: [7, 90, 2]
alert("Toma una matriz de matrices con números, Devuelve una nueva matriz (única) con el mayor número de cada uno: " + "\n" +
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
}
//---------------------------------------------------------------------------------------------------------
  //EJERCICIO 9
  function ejercicio9() {
  const charIndex = (palabra, caracter) => {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
  };
  //IMPRIME
  console.log(charIndex("hello", "l")); // Salida: [2, 3]
  console.log(charIndex("circumlocution", "c")); // Salida: [0, 8]
alert("Escribe una función que devuelve el primer índice y el último de un carácter: " + "\n" + 
charIndex("hello", "l") + "\n" + charIndex("circumlocution", "c"));
}
//----------------------------------------------------------------------------------------------------------
  //EJERCICIO 10
  function ejercicio10() {
  const toArray = (objeto) => {
    // [["a", 1], ["b", 2]]
   
    const matriz = [];
    //{ a: 1, b: 2}
    for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        matriz.push([clave, objeto[clave]]);
      }
    }
   
    return matriz;
  };
   
  const data = { a: 1, b: 2 };
  const result = toArray(data);
   
  console.log(Object.entries(data));
alert("Convierte un objeto en una matriz, donde cada elemento representa un par clave-valor: "+ "\n" + Object.entries(data));
}
//----------------------------------------------------------------------------------------------------------
  //EJERCICIO 11
  function ejercicio11() {
  const getBudgets = (personas) => {
    return personas.reduce((suma, persona) => suma + persona.budget, 0);
  };
  
  //IMPRIME
  const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  ];
  
  console.log(getBudgets(personas)); // Salida: 65700
  alert("Crea la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas: " + "\n" + (getBudgets(personas)) );
}
//----------------------------------------------------------------------------------------------------------
  //EJERCICIO 12
  function ejercicio12() {
  const getStudentNames = (estudiantes) => {
    return estudiantes.map(estudiante => estudiante.name);
  };
  
  //IMPRIME
  const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ];
  //IMPRIME
  console.log(getStudentNames(estudiantes)); // Salida: ["Steve", "Mike", "John"]
  alert("Toma una matriz de estudiantes y devuelva una matriz de nombres de estudiantes: "+ "\n" +
  (getStudentNames(estudiantes)));
}
//----------------------------------------------------------------------------------------------------------
  //EJERCICIO 13
  function ejercicio13() {
  const objectToArray = (objeto) => {
    return Object.entries(objeto);
  };
  // IMPRIME
  const objeto = {
    likes: 2,
    dislikes: 3,
    followers: 10
  };
  
  console.log(objectToArray(objeto)); // Salida: [["likes", 2], ["dislikes", 3], ["followers", 10]]
alert("Convierte un objeto en una matriz de claves y valores: "+ "\n" + (objectToArray(objeto)));
}
//----------------------------------------------------------------------------------------------------------
  //EJERCICIO 14
  function ejercicio14() {
  const squaresSum = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i ** 2;
    }
    return suma;
  };
  //IMPRIME
  console.log(squaresSum(3)); // Salida: 14
alert("Devuelve la suma de todos los números cuadrados  incluyendo n: "+ "\n" +(squaresSum(3)) );
}
//-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 15
  function ejercicio15() {
  const multiplyByLength = (array) => {
    const longitud = array.length;
    return array.map(valor => valor * longitud);
  };
  // IMPRIME
  console.log(multiplyByLength([2, 3, 1, 0])); // Salida: [8, 12, 4, 0]
alert("Multiplica todos los valores en una matriz por la cantidad de valores en la matriz dada: " + "\n" + (multiplyByLength([2, 3, 1, 0])));
}
//-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 16
  function ejercicio16() {
  const countdown = (numero) => {
    const matriz = [];
    for (let i = numero; i >= 0; i--) {
      matriz.push(i);
    }
    return matriz;
  };
  //IMPRIME
  console.log(countdown(5)); // Salida: [5, 4, 3, 2, 1, 0]
alert("Toma un número como argumento y devuelve una matriz de números contando desde este número a cero: " + "\n" +(countdown(5)));
}
//-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 17
  function ejercicio17() {
  const diffMaxMin = (array) => {
    const minimo = Math.min(...array);
    const maximo = Math.max(...array);
    return maximo - minimo;
  };
  //IMPRIME
  console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // Salida: 82
  alert("Toma una matriz y devuelve la diferencia entre los números más grandes y más pequeños: " + "\n" + (diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])));
}
//-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 18
  function ejercicio18() {
  const filterList = (array) => {
    return array.filter(elemento => typeof elemento === 'number');
  };
  
  // IMPRIME
  console.log(filterList([1, 2, 3, "x", "y", 10])); // Salida: [1, 2, 3, 10]
  alert("Filtra las cadenas de una matriz y devuelve una nueva matriz que solo contenga enteros: "+ "\n" +(filterList([1, 2, 3, "x", "y", 10]) ));
}
//-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 19 
  function ejercicio19() {
  const repeat = (elemento, veces) => {
    const resultado = [];
    for (let i = 0; i < veces; i++) {
      resultado.push(elemento);
    }
    return resultado;
  };
  
  // IMPRIME
  console.log(repeat(13, 5)); // Salida: [13, 13, 13, 13, 13]
alert("Toma dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz: "
+ "\n" + (repeat(13, 5)) );
}
  //-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 20
  function ejercicio20() {
  String.prototype.vreplace = function(nuevaVocal) {
    // Usamos una expresión regular para encontrar todas las vocales (mayúsculas y minúsculas)
    return this.replace(/[aeiouAEIOU]/g, nuevaVocal);
  };
  
 //IMPRIME
  console.log("apples and bananas".vreplace("u")); // Salida: "upplus und bununus"
alert("Utiliza la funcion .vreplace() que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada: "+ "\n" + ("apples and bananas".vreplace("u")));
}
  //-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 21
  function ejercicio21() { 
  const findNemo = (cadena) => {
    const palabras = cadena.split(' ');
    const posicion = palabras.findIndex(palabra => palabra === 'Nemo');
    if (posicion !== -1) {
      return `I found Nemo at ${posicion + 1}!`;
    } else {
      return "Nemo not found :(";
    }
  };
 //IMPRIME
  console.log(findNemo("I am finding Nemo !")); // Salida: "I found Nemo at 4!"
  alert("Encuentra la palabra Nemo y devuelve una cadena: " + "\n" + (findNemo("I am finding Nemo !")));
}
 //-----------------------------------------------------------------------------------------------------------
  //EJERCICIO 22
  function ejercicio22() {
  const capLast = (cadena) => {
    const palabras = cadena.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => {
      const ultimaLetra = palabra.slice(-1).toUpperCase();
      return palabra.slice(0, -1) + ultimaLetra;
    });
    return palabrasCapitalizadas.join(' ');
  };
  //IMPRIME
  console.log(capLast("hello")); // Salida: "hellO"
alert("Capitaliza la última letra de cada palabra: "+ "\n" +(capLast("hello")) );
}
//------------------------------------------------------------------------------  

  
