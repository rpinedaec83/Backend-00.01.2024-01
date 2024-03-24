function playSound(soundFile) {
    var audio = document.getElementById("myAudio");
    audio.src = soundFile;
    audio.play();
  }


  //Crea una función que retorne la suma de dos números.
  const ejercicio1 = () => {
    const num1 = prompt("Ingrese el primer número:");
    const num2 = prompt("Ingrese el segundo número:");

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
        const resultado = parsedNum1 + parsedNum2;
        alert(`La suma de ${parsedNum1} y ${parsedNum2} es: ${resultado}`);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
};

sumarNumeros();



//Crea una función que retorne la potencia de un número dado, esta función 
//deberá recibir la potencia y el número a potenciar.
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

function ejercicio2() {
    const base = prompt("Ingrese el número base:");
    const exponente = prompt("Ingrese el exponente:");

    const parsedBase = parseFloat(base);
    const parsedExponente = parseFloat(exponente);

    if (!isNaN(parsedBase) && !isNaN(parsedExponente)) {
        const resultado = calcularPotencia(parsedBase, parsedExponente);
        alert(`El resultado de ${parsedBase} elevado a la ${parsedExponente} es: ${resultado}`);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}




// Crea una función que tome números y devuelva la suma de sus cubos. 
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumaCubos(num1, num2, num3) {
    return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
}

function ejercicio3() {
    const num1 = prompt("Ingrese el primer número:");
    const num2 = prompt("Ingrese el segundo número:");
    const num3 = prompt("Ingrese el tercer número:");

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    const parsedNum3 = parseFloat(num3);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2) && !isNaN(parsedNum3)) {
        const resultado = sumaCubos(parsedNum1, parsedNum2, parsedNum3);
        alert(`La suma de los cubos es: ${resultado}`);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}


//Escribe una función que tome la base y la altura de un triángulo y devuelva su área.

function calcularAreaTriangulo(base, altura) {
    return 0.5 * base * altura;
}

function ejercicio4() {
    const base = prompt("Ingrese la base del triángulo:");
    const altura = prompt("Ingrese la altura del triángulo:");

    const parsedBase = parseFloat(base);
    const parsedAltura = parseFloat(altura);

    if (!isNaN(parsedBase) && !isNaN(parsedAltura)) {
        const area = calcularAreaTriangulo(parsedBase, parsedAltura);
        alert(`El área del triángulo es: ${area}`);
    } else {
        alert("Por favor, ingrese valores válidos.");
    }
}


// Crea una función llamada calculator que recibe 3 parámetros, 
//dos números y una operación matemática (+,-,/,x,%), y si la 
//operación no es correcta que envié un mensaje “El parámetro no 
//es reconocido” calculator(2,"+", 2) ➞ 4
function calculator(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
        case 'x':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

function ejercicio5() {
    const num1 = prompt("Ingrese el primer número:");
    const num2 = prompt("Ingrese el segundo número:");
    const operacion = prompt("Ingrese la operación matemática (+, -, /, x, %):");

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
        const resultado = calculator(parsedNum1, parsedNum2, operacion);
        alert(`El resultado de la operación es: ${resultado}`);
    } else {
        alert("Por favor, ingrese valores numéricos válidos.");
    }
}


// Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
//apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián 
//yabiku y mi edad 33”

const obtenerSaludo = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

    function ejercicio6() {
        const nombre = prompt("Ingrese su nombre:");
        const apellido = prompt("Ingrese su apellido:");
        const edad = prompt("Ingrese su edad:");

        if (nombre !== null && apellido !== null && edad !== null) {
            alert(obtenerSaludo(nombre, apellido, edad));
        } else {
            alert("Por favor, ingrese todos los datos.");
        }
    }


// Cree una función que tome números y devuelva la suma de sus cubos.
function sumaCubos(num1, num2, num3) {
    return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
}

function ejercicio7() {
    const num1 = prompt("Ingrese el primer número:");
    const num2 = prompt("Ingrese el segundo número:");
    const num3 = prompt("Ingrese el tercer número:");

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    const parsedNum3 = parseFloat(num3);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2) && !isNaN(parsedNum3)) {
        const resultado = sumaCubos(parsedNum1, parsedNum2, parsedNum3);
        alert(`La suma de los cubos es: ${resultado}`);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

// Crear una funcion que me retorne el tipo de valor entregado, 
//invocar la función para los distintos tipos de js
function ejercicio8() {
    const numero = 42;
    const cadena = "Hola, mundo";
    const booleano = true;
    const arreglo = [1, 2, 3];
    const objeto = { nombre: "Juan", edad: 25 };
    const funcion = function() {};
    const nulo = null;
    const noDefinido = undefined;

    alert(`Tipo de ${numero}: ${obtenerTipoDeValor(numero)}`);
    alert(`Tipo de "${cadena}": ${obtenerTipoDeValor(cadena)}`);
    alert(`Tipo de ${booleano}: ${obtenerTipoDeValor(booleano)}`);
    alert(`Tipo de [1, 2, 3]: ${obtenerTipoDeValor(arreglo)}`);
    alert(`Tipo de { nombre: "Juan", edad: 25 }: ${obtenerTipoDeValor(objeto)}`);
    alert(`Tipo de una función: ${obtenerTipoDeValor(funcion)}`);
    alert(`Tipo de null: ${obtenerTipoDeValor(nulo)}`);
    alert(`Tipo de undefined: ${obtenerTipoDeValor(noDefinido)}`);
}

// Crear una función que reciba n cantidad de argumentos y los sume 
//( utilizar parametros rest)
function sumar(...numeros) {
    return numeros.reduce((suma, numero) => suma + numero, 0);
}

function ejercicio9() {
    const num1 = prompt("Ingrese el primer número:");
    const num2 = prompt("Ingrese el segundo número:");
    const num3 = prompt("Ingrese el tercer número:");

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    const parsedNum3 = parseFloat(num3);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2) && !isNaN(parsedNum3)) {
        const resultado = sumar(parsedNum1, parsedNum2, parsedNum3);
        alert(`La suma de los números es: ${resultado}`);
    } else {
        alert("Por favor, ingrese valores numéricos válidos.");
    }
}


//Crear una función que reciba un array de valores y filtre los valores que no son string
function filtrarNoString(valores) {
    return valores.filter(valor => typeof valor === 'string');
}

function ejercicio10() {
    const arrayOriginal = [1, "Hola", true, "Mundo", 42, "JavaScript"];

    const arrayFiltrado = filtrarNoString(arrayOriginal);

    alert(`Array Original: ${JSON.stringify(arrayOriginal)}\nArray Filtrado: ${JSON.stringify(arrayFiltrado)}`);
}

//Cree una función que tome una matriz de números y devuelva los números 
//mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(numeros) {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
}

function mejercicio11() {
    const arrayNumeros = [1, 2, 3, 4, 5];
    const resultado = minMax(arrayNumeros);
    alert(`Array Original: ${JSON.stringify(arrayNumeros)}\nMínimo y Máximo: ${JSON.stringify(resultado)}`);
}


/*
  Ejercicio 12:
  Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva 
  una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

*/

function formatPhoneNumber(numbers) {
    const parte1 = numbers.slice(0, 3).join('');
    const parte2 = numbers.slice(3, 6).join('');
    const parte3 = numbers.slice(6, 10).join('');
    return `(${parte1}) ${parte2}-${parte3}`;
}

function ejercicio12() {
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numeroTelefono = formatPhoneNumber(arrayNumeros);
    alert(`Array Original: ${JSON.stringify(arrayNumeros)}\nNúmero de Teléfono: ${numeroTelefono}`);
}


/*
  Ejercicio 13:
  Cree una función que tome una matriz de matrices con números. Devuelve una 
  nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

*/

function findLargestNums(matrix) {
    return matrix.map(subArray => Math.max(...subArray));
}

function ejercicio13() {
    const matrizNumeros = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    const numerosGrandes = findLargestNums(matrizNumeros);
    alert(`Matriz Original: ${JSON.stringify(matrizNumeros)}\nNúmeros Más Grandes: ${JSON.stringify(numerosGrandes)}`);
}

/*
  Ejercicio 14:
  Dada una palabra, escriba una función que devuelva el primer índice y el último 
  índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

*/

function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}

function ejercicio14() {
    const palabra1 = "hello";
    const caracter1 = "l";
    const resultado1 = charIndex(palabra1, caracter1);

    const palabra2 = "circumlocution";
    const caracter2 = "c";
    const resultado2 = charIndex(palabra2, caracter2);

    alert(`Palabra: "${palabra1}", Carácter: "${caracter1}"\nÍndices: ${JSON.stringify(resultado1)}`);
    alert(`Palabra: "${palabra2}", Carácter: "${caracter2}"\nÍndices: ${JSON.stringify(resultado2)}`);
}

/*
  Ejercicio 15:
  Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par 
  clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

*/

function toArray(objeto) {
    return Object.entries(objeto);
}

function ejercicio15() {
    const objetoEjemplo = { a: 1, b: 2 };
    const matrizResultado = toArray(objetoEjemplo);

    alert(`Objeto Original: ${JSON.stringify(objetoEjemplo)}\nMatriz Resultante: ${JSON.stringify(matrizResultado)}`);
}

/*
  Ejercicio 16:
  Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

*/

function getBudgets(personas) {
    return personas.reduce((suma, persona) => suma + persona.budget, 0);
}

function ejercicio16() {
    const personas = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ];

    const sumaPresupuestos = getBudgets(personas);

    alert(`Personas: ${JSON.stringify(personas)}\nSuma de Presupuestos: ${sumaPresupuestos}`);
}

/*
  Ejercicio 17:
  Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]

*/

function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

function ejercicio17() {
    const estudiantes = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ];

    const nombresEstudiantes = getStudentNames(estudiantes);

    alert(`Estudiantes: ${JSON.stringify(estudiantes)}\nNombres de Estudiantes: ${JSON.stringify(nombresEstudiantes)}`);
}


/*
  Ejercicio 18:
  Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

*/

function objectToArray(objeto) {
    return Object.entries(objeto);
}

function ejercicio18() {
    const objetoEjemplo = {
        likes: 2,
        dislikes: 3,
        followers: 10
    };

    const matrizResultado = objectToArray(objetoEjemplo);

    alert(`Objeto Original: ${JSON.stringify(objetoEjemplo)}\nMatriz de Claves y Valores: ${JSON.stringify(matrizResultado)}`);
}


/*
  Ejercicio 19:
  Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

*/

function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }
    return suma;
}

function ejercicio19() {
    const numero = 3;
    const resultado = squaresSum(numero);

    alert(`Número: ${numero}\nSuma de Números Cuadrados: ${resultado}`);
}


/*
  Ejercicio 20:
  Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

*/

function multiplyByLength(matriz) {
    const longitud = matriz.length;
    return matriz.map(valor => valor * longitud);
}

function ejercicio20() {
    const arrayOriginal = [2, 3, 1, 0];
    const resultado = multiplyByLength(arrayOriginal);

    alert(`Array Original: ${JSON.stringify(arrayOriginal)}\nResultado: ${JSON.stringify(resultado)}`);
}

/*
  Ejercicio 21:
  Cree una función que tome un número como argumento y devuelva una matriz de números contando desde 
  este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]

*/

function countdown(numero) {
    const resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    return resultado;
}

function ejercicio21() {
    const numeroInicial = 5;
    const resultado = countdown(numeroInicial);

    alert(`Número Inicial: ${numeroInicial}\nConteo Hacia Atrás: ${JSON.stringify(resultado)}`);
}


/*
  Ejercicio 22:
  Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

*/

function diffMaxMin(matriz) {
    const minimo = Math.min(...matriz);
    const maximo = Math.max(...matriz);
    return maximo - minimo;
}

function ejercicio22() {
    const arrayNumeros = [10, 4, 1, 4, -10, -50, 32, 21];
    const resultado = diffMaxMin(arrayNumeros);

    alert(`Array de Números: ${JSON.stringify(arrayNumeros)}\nDiferencia entre Máximo y Mínimo: ${resultado}`);
}

/*
  Ejercicio 23:
  Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

*/

function filterList(matriz) {
    return matriz.filter(elemento => typeof elemento === 'number');
}

function ejercicio23() {
    const arrayOriginal = [1, 2, 3, "x", "y", 10];
    const resultado = filterList(arrayOriginal);

    alert(`Array Original: ${JSON.stringify(arrayOriginal)}\nEnteros Filtrados: ${JSON.stringify(resultado)}`);
}

/*
  Ejercicio 24:
  Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]

*/

function repeat(elemento, veces) {
    const resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

function ejercicio24() {
    const elemento = 13;
    const veces = 5;
    const resultado = repeat(elemento, veces);

    alert(`Elemento: ${elemento}, Veces: ${veces}\nResultado: ${JSON.stringify(resultado)}`);
}

/*
  Ejercicio 25:
  Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"

*/

String.prototype.vreplace = function(vocalReemplazo) {
    return this.replace(/[aeiou]/g, vocalReemplazo);
};

function ejercicio25() {
    const cadenaOriginal = "apples and bananas";
    const vocalReemplazo = "u";
    const resultado = cadenaOriginal.vreplace(vocalReemplazo);

    alert(`Cadena Original: "${cadenaOriginal}"\nVocal de Reemplazo: "${vocalReemplazo}"\nResultado: "${resultado}"`);
}

/*
  Ejercicio 26:
  Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
  "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

*/

function findNemo(cadena) {
    const palabras = cadena.split(' ');
    const indiceNemo = palabras.indexOf('Nemo');
    
    if (indiceNemo !== -1) {
        const ordenPalabra = indiceNemo + 1;
        return `I found Nemo at ${ordenPalabra}!`;
    } else {
        return "Nemo not found :(";
    }
}

function ejercicio26() {
    const ejemploCadena = "I am finding Nemo !";
    const resultado = findNemo(ejemploCadena);

    alert(`Cadena: "${ejemploCadena}"\nResultado: "${resultado}"`);
}

/*
  Ejercicio 27:
  Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"

*/

function capLast(palabra) {
    const palabras = palabra.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length > 1) {
            return palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
        } else {
            return palabra.toUpperCase();
        }
    });
    return palabrasCapitalizadas.join(' ');
}

function ejercicio27() {
    const ejemploPalabra = "hello";
    const resultado = capLast(ejemploPalabra);

    alert(`Palabra Original: "${ejemploPalabra}"\nPalabra Capitalizada: "${resultado}"`);
}


function verEjercicios() {
    var ejercicios = `
    1. Crea una función que retorne la suma de dos números.

    2. Crea una función que retorne la potencia de un número 
       dado, esta función deberá recibir la potencia y el 
       número a potenciar.
    
    3. Crea una función que tome números y devuelva la suma 
       de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
    
         Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    
    4. Escribe una función que tome la base y la altura de un 
       triángulo y devuelva su área. triArea(3, 2) ➞ 3
    
    5. Crea una función llamada calculator que recibe 
       3 parámetros, dos números y una operación matemática 
       (+,-,/,x,%), y si la operación no es correcta que 
       envié un mensaje “El parámetro no es reconocido” 
       calculator(2,"+", 2) ➞ 4
    
    PREGUNTAS:
    
    .¿Cómo defines una función?
    .¿Hasta cuantos argumentos puedes declarar en una función?`;
  
    var ventanaEmergente = window.open("", "", "height=600,width=600");
    ventanaEmergente.document.write("<pre>" + ejercicios + "</pre>");
  }

  function abrirEnlace() {
    window.open('https://docs.google.com/document/d/1aJlprbfiKADx-IazY9MMaeB84gsUR-0engVPEkWipNc/edit?pli=1', '_blank');
  }


  function copiarCodigo() {
    const codigoFuncion = document.getElementById('codigoFuncion');
    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(codigoFuncion);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
  
    try {
      document.execCommand('copy');
      seleccion.removeAllRanges();
      alert('Código copiado al portapapeles');
    } catch (error) {
      console.log('No se pudo copiar el código', error);
    }
  }
