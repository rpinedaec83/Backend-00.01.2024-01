
function sumarNumeros(num1, num2) {
    return num1 + num2;
}

// Ejemplo de uso:
let resultado = sumarNumeros(5, 3);
console.log(resultado); // Esto imprimirá 8

  
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

// Ejemplo de uso:
console.log(potencia(2, 3)); // Esto imprimirá 8, ya que 2 elevado a la 3 es igual


function sumOfCubes(...numeros) {
    let sumaCubos = 0;
    for (let numero of numeros) {
        sumaCubos += Math.pow(numero, 3);
    }
    return sumaCubos;
}

// Ejemplo de uso:
console.log(sumOfCubes(1, 5, 9)); // Esto imprimirá 855


function triArea(base, altura) {
    return (base * altura) / 2;
}

// Ejemplo de uso:
console.log(triArea(3, 2)); // Esto imprimirá 3


function calculator(num1, operacion, num2) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

// Ejemplo de uso:
console.log(calculator(2, "+", 2)); // Esto imprimirá 4


const saludo = (nombre, apellido, edad) => {
    return `Hola, mi nombre es ${nombre} ${apellido} y mi edad ${edad}.`;
}

// Ejemplo de uso:
console.log(saludo("Sebastián", "Yabiku", 33)); // Esto imprimirá "Hola, mi nombre es Sebastián Yabiku y mi edad 33."


function sumOfCubes(...numeros) {
    let sumaCubos = 0;
    for (let numero of numeros) {
        sumaCubos += Math.pow(numero, 3);
    }
    return sumaCubos;
}

function obtenerTipo(valor) {
    return typeof valor;
}

// Ejemplo de uso:
console.log(obtenerTipo(5)); // Esto imprimirá "number"
console.log(obtenerTipo("Hola")); // Esto imprimirá "string"
console.log(obtenerTipo(true)); // Esto imprimirá "boolean"
console.log(obtenerTipo([])); // Esto imprimirá "object" (para arrays)
console.log(obtenerTipo({})); // Esto imprimirá "object" (para objetos)
console.log(obtenerTipo(null)); // Esto imprimirá "object" (para null)
console.log(obtenerTipo(undefined)); // Esto imprimirá "undefined"


function sumar(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

// Ejemplo de uso:
console.log(sumar(1, 2, 3)); // Esto imprimirá 6, que es la suma de 1 + 2 + 3
console.log(sumar(5, 10, 15, 20)); // Esto imprimirá 50, que es la suma de 5 + 10 + 15 + 20



function filtrarStrings(array) {
    return array.filter(valor => typeof valor === 'string');
}

// Ejemplo de uso:
const arrayOriginal = [1, "hola", true, "mundo", 42, "cadena"];
const arrayFiltrado = filtrarStrings(arrayOriginal);
console.log(arrayFiltrado); // Esto imprimirá ["hola", "mundo", "cadena"]


function minMax(numeros) {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
}

// Ejemplo de uso:
console.log(minMax([1, 2, 3, 4, 5])); // Esto imprimirá [1, 5]


function formatPhoneNumber(arr) {
    const numeros = arr.join(''); // Convertimos el array en una cadena de números
    return `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6)}`;
}

// Ejemplo de uso:
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Esto imprimirá "(123) 456-7890"


function findLargestNums(matriz) {
    return matriz.map(submatriz => Math.max(...submatriz));
}

// Ejemplo de uso:
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // Esto imprimirá [7, 90, 2]


function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}

// Ejemplo de uso:
console.log(charIndex("hello", "l")); // Esto imprimirá [2, 3]
console.log(charIndex("circumlocution", "c")); // Esto imprimirá [0, 8]


function toArray(objeto) {
    return Object.entries(objeto);
}

// Ejemplo de uso:
console.log(toArray({ a: 1, b: 2 })); // Esto imprimirá [["a", 1], ["b", 2]]



function getBudgets(personas) {
    let sumaPresupuestos = 0;
    for (let persona of personas) {
        sumaPresupuestos += persona.budget;
    }
    return sumaPresupuestos;
}

// Ejemplo de uso:
console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
])); // Esto imprimirá 65700


function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

// Ejemplo de uso:
console.log(getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
])); // Esto imprimirá ["Steve", "Mike", "John"]




function objectToArray(objeto) {
    return Object.entries(objeto);
}

// Ejemplo de uso:
console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
})); // Esto imprimirá [["likes", 2], ["dislikes", 3], ["followers", 10]]



function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i; // Suma el cuadrado del número actual
    }
    return suma;
}

// Ejemplo de uso:
console.log(squaresSum(3)); // Esto imprimirá 14


function multiplyByLength(array) {
    return array.map(valor => valor * array.length);
}

// Ejemplo de uso:
console.log(multiplyByLength([2, 3, 1, 0])); // Esto imprimirá [8, 12, 4, 0]



function countdown(numero) {
    let resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    return resultado;
}

// Ejemplo de uso:
console.log(countdown(5)); // Esto imprimirá [5, 4, 3, 2, 1, 0]


function diffMaxMin(array) {
    const maximo = Math.max(...array);
    const minimo = Math.min(...array);
    return maximo - minimo;
}

// Ejemplo de uso:
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // Esto imprimirá 82


function filterList(array) {
    return array.filter(elemento => typeof elemento === 'number' && Number.isInteger(elemento));
}

// Ejemplo de uso:
console.log(filterList([1, 2, 3, "x", "y", 10])); // Esto imprimirá [1, 2, 3, 10]


function repeat(elemento, veces) {
    let resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

// Ejemplo de uso:
console.log(repeat(13, 5)); // Esto imprimirá [13, 13, 13, 13, 13]


Object.defineProperty(String.prototype, 'vreplace', {
    value: function(vocalNueva) {
        return this.replace(/[aeiou]/g, vocalNueva);
    },
    enumerable: false // Esto evita que la propiedad se enumere al iterar sobre las propiedades de cadena
});

// Ejemplo de uso:
console.log("apples and bananas".vreplace("u")); // Esto imprimirá "upplus und bununus"


function findNemo(cadena) {
    // Dividir la cadena en palabras
    const palabras = cadena.split(" ");
    // Buscar la palabra "Nemo"
    const posicionNemo = palabras.indexOf("Nemo") + 1; // Sumamos 1 porque indexOf devuelve un índice base cero
    if (posicionNemo !== 0) {
        return `I found Nemo at ${posicionNemo}!`;
    } else {
        return "Nemo not found";
    }
}

// Ejemplo de uso:
console.log(findNemo("I am finding Nemo !")); // Esto imprimirá "I found Nemo at 4!"


function capLast(cadena) {
    const palabras = cadena.split(" "); // Dividir la cadena en palabras
    const palabrasCapitalizadas = palabras.map(palabra => { // Capitalizar la última letra de cada palabra
        const ultimoIndice = palabra.length - 1;
        return palabra.slice(0, ultimoIndice) + palabra[ultimoIndice].toUpperCase();
    });
    return palabrasCapitalizadas.join(" "); // Unir las palabras nuevamente en una cadena
}

// Ejemplo de uso:
console.log(capLast("hello")); // Esto imprimirá "hellO"





