//   1. Utilizando función arrow, crear una función que reciba como parámetros un nombre,
//      apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const crearSaludo = (nombre, apellido, edad) => {
    return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
};

// Ejemplo de uso
const saludo = crearSaludo("Sebastián", "Yabiku", 33);
console.log(saludo); // Imprime: Hola, mi nombre es Sebastián Yabiku y mi edad es 33.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cree una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const sumOfCubes = (...numeros) => {
    return numeros.reduce((suma, numero) => suma + Math.pow(numero, 3), 0);
};

// Ejemplo de uso
const resultado = sumOfCubes(1, 5, 9);
console.log(resultado); // Imprime: 855

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js


const obtenerTipoDeValor = (valor) => typeof valor;

// Ejemplos de uso
console.log(obtenerTipoDeValor(5));         // Imprime: "number"
console.log(obtenerTipoDeValor("Hola"));    // Imprime: "string"
console.log(obtenerTipoDeValor(true));       // Imprime: "boolean"
console.log(obtenerTipoDeValor(null));       // Imprime: "object"
console.log(obtenerTipoDeValor(undefined));  // Imprime: "undefined"
console.log(obtenerTipoDeValor({}));         // Imprime: "object"
console.log(obtenerTipoDeValor([]));         // Imprime: "object"
console.log(obtenerTipoDeValor(function(){}));// Imprime: "function"


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const sumarNumeros = (...numeros) => {
    return numeros.reduce((suma, numero) => suma + numero, 0);
};

// Ejemplos de uso
console.log(sumarNumeros(1, 2, 3));           // Imprime: 6
console.log(sumarNumeros(5, 10, 15, 20));     // Imprime: 50
console.log(sumarNumeros(2, 4, 6, 8, 10));    // Imprime: 30


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5. Crear una función que reciba un array de valores y filtre los valores que no son string

const filtrarStrings = (array) => {
    return array.filter(valor => typeof valor === 'string');
};

// Ejemplo de uso
const arrayOriginal = [1, 'Hola', true, 'Mundo', 42, 'JavaScript'];
const arrayFiltrado = filtrarStrings(arrayOriginal);

console.log(arrayFiltrado);
// Imprime: ["Hola", "Mundo", "JavaScript"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]


const minMax = (numeros) => {
    if (numeros.length === 0) {
        return []; // Devolver un array vacío si la matriz está vacía
    }

    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);

    return [minimo, maximo];
};

// Ejemplo de uso
const resultado7 = minMax([1, 2, 3, 4, 5]);
console.log(resultado7); // Imprime: [1, 5]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//7.  Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono. formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"


const formatPhoneNumber = (numeros) => {
    if (numeros.length !== 10 || !numeros.every(numero => typeof numero === 'number' && numero >= 0 && numero <= 9)) {
        return "La matriz debe contener 10 enteros entre 0 y 9.";
    }

    const parte1 = numeros.slice(0, 3).join('');
    const parte2 = numeros.slice(3, 6).join('');
    const parte3 = numeros.slice(6, 10).join('');

    return `(${parte1}) ${parte2}-${parte3}`;
};

// Ejemplo de uso
const resultado9 = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(resultado9); // Imprime: "(123) 456-7890"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8.  Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno. 
//    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const findLargestNums = (matrizDeMatrices) => {
    return matrizDeMatrices.map(submatriz => Math.max(...submatriz));
};

// Ejemplo de uso
const resultado10 = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
console.log(resultado10); // Imprime: [7, 90, 2]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter. //  charIndex("hello", "l") ➞ [2, 3] //  The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8] // The first "c" has index 0, the last "c" has index 8.

const charIndex = (palabra, caracter) => {
    const indices = [];

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        }
    }

    return indices.length > 0 ? [indices[0], indices[indices.length - 1]] : "Carácter no encontrado.";
};

// Ejemplos de uso
console.log(charIndex("hello", "l"));               // Imprime: [2, 3]
console.log(charIndex("circumlocution", "c"));      // Imprime: [0, 8]
console.log(charIndex("example", "z"));              // Imprime: "Carácter no encontrado."


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor. toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const charIndex1 = (palabra, caracter) => {
    const indices = [];

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        }
    }

    return indices.length > 0 ? [indices[0], indices[indices.length - 1]] : "Carácter no encontrado.";
};

// Ejemplos de uso
console.log(charIndex("hello", "l"));               // Imprime: [2, 3]
console.log(charIndex("circumlocution", "c"));      // Imprime: [0, 8]
console.log(charIndex("example", "z"));              // Imprime: "Carácter no encontrado."

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

///getBudgets([
//{ name: "John", age: 21, budget: 23000 },
//{ name: "Steve",  age: 32, budget: 40000 },
//{ name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700

const getBudgets = (personas) => {
    return personas.reduce((suma, persona) => suma + persona.budget, 0);
};

// Ejemplo de uso
const presupuestos = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

const resultado13 = getBudgets(presupuestos);
console.log(resultado13); // Imprime: 65700


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//{ name: "Steve" },
//{ name: "Mike" },
//{ name: "John" }
//]) ➞["Becky", "John", "Steve"]

const getStudentNames = (estudiantes) => {
    return estudiantes.map(estudiante => estudiante.name);
};

// Ejemplo de uso
const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];

const nombresEstudiantes = getStudentNames(estudiantes);
console.log(nombresEstudiantes); // Imprime: ["Steve", "Mike", "John"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//13. Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//likes: 2,
//dislikes: 3,
//followers: 10
//}) ➞[["likes", 2], ["dislikes", 3], ["followers", 10]]

const objectToArray = (objeto) => {
    return Object.entries(objeto);
};

// Ejemplo de uso
const resultado14 = objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
});

console.log(resultado14);
// Imprime: [["likes", 2], ["dislikes", 3], ["followers", 10]]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14


const squaresSum = (n) => {
    return Array.from({ length: n + 1 }, (_, i) => i * i).reduce((suma, cuadrado) => suma + cuadrado, 0);
};

// Ejemplo de uso
const resultado15 = squaresSum(3);
console.log(resultado15); // Imprime: 14

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//    multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

const multiplyByLength = (matriz) => {
    const factor = matriz.length;
    return matriz.map(valor => valor * factor);
};

// Ejemplo de uso
const resultado16= multiplyByLength([2, 3, 1, 0]);
console.log(resultado16); // Imprime: [8, 12, 4, 0]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

const countdown = (numero) => {
    return Array.from({ length: numero + 1 }, (_, index) => numero - index);
};

// Ejemplo de uso
const resultado17 = countdown(5);
console.log(resultado17); // Imprime: [5, 4, 3, 2, 1, 0]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//    diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
//    Smallest number is -50, biggest is 32.

const diffMaxMin = (matriz) => {
    const minimo = Math.min(...matriz);
    const maximo = Math.max(...matriz);
    return maximo - minimo;
};

// Ejemplo de uso
const resultado18 = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
console.log(resultado18); // Imprime: 82


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//    filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]


const filterList = (matriz) => {
    return matriz.filter(elemento => typeof elemento === 'number');
};

// Ejemplo de uso
const resultado19 = filterList([1, 2, 3, "x", "y", 10]);
console.log(resultado19); // Imprime: [1, 2, 3, 10]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//    repeat(13, 5) ➞ [13, 13, 13, 13, 13]

const repeat = (elemento, veces) => {
    return Array.from({ length: veces }, () => elemento);
};

// Ejemplo de uso
const resultado20 = repeat(13, 5);
console.log(resultado20); // Imprime: [13, 13, 13, 13, 13]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//20.  Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//     "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function (vocalReemplazo) {
    return this.replace(/[aeiou]/gi, vocalReemplazo);
};

// Ejemplo de uso
const resultado21 = "apples and bananas".vreplace("u");
console.log(resultado21); // Imprime: "upplus und bununus"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//    findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"


const findNemo = (cadena) => {
    const palabras = cadena.split(' ');
    const posicion = palabras.indexOf('Nemo') + 1;

    if (posicion > 0) {
        return `I found Nemo at ${posicion}!`;
    } else {
        return "I can't find Nemo :(";
    }
};

// Ejemplo de uso
const resultado23 = findNemo("I am finding Nemo !");
console.log(resultado23); // Imprime: "I found Nemo at 4!"



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//22.  Cree una función que capitalice la última letra de cada palabra. capLast("hello") ➞ "hellO"

const capLast = (cadena) => {
    return cadena.replace(/\b\w\b/g, letra => letra.toUpperCase());
};

// Ejemplo de uso
const resultado24 = capLast("hello");
console.log(resultado24); // Imprime: "hellO"

