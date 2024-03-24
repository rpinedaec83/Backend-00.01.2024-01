//EL PROBLEMA:

//1. Crea una función que retorne la suma de dos números. 
const sumarDosNumeros = (num1, num2) => {
    return num1 + num2;
}
// console.log(sumarDosNumeros(20, 30));

//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
const potenciarNumero = (base, potencia) => {
    let acumularPotencia = base;
    for (let i = 0; i < potencia-1; i++) {
        acumularPotencia *= base;
    }
    return acumularPotencia;
}
// console.log(potenciarNumero(5, 3));

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// const arregloNumeros = [1, 5, 9];
const sumaCubos = (numeros) => {
    let acumulador = 0;
    numeros.forEach(numero => {
        acumulador += potenciarNumero(numero, 3);
    });
    return acumulador;
}
// console.log(sumaCubos(arregloNumeros));

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3
const areaTriangulo = (base, altura) => {
    return base * altura / 2;
}
// console.log(areaTriangulo(3, 2));

//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
const calculator = (num1, operador, num2) => {
    const operadoresPermitidos = ['+','-','/','*','%'];
    let resultado = 0;
    if (!operadoresPermitidos.includes(operador)) {
        return 'El parámetro no es reconocido';
    }
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '%':
            resultado = num1 % num2;
            break;
    }
    return resultado;
}
// console.log(calculator(2,"+",2));

//PREGUNTAS

//¿Cómo defines una función?
//Una función en JavaScript es un bloque de código o un conjunto de instrucciones que realiza una tarea específica y que puede reutilizarse a voluntad.

//¿Hasta cuantos argumentos puedes declarar en una función?
//Una función puede tener hasta 255 argumentos

//Reto 2:

//1) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const concatenarDatosPersonales = (nombre, apellido, edad) => {
    return `Hola mi nombre ${nombre} ${apellido} y mi edad ${edad}`;
}
// console.log(concatenarDatosPersonales('Marco', 'Alarcón', 29));

//2) Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const sumOfCubes = (numeros) => {
    let acumulador = 0;
    numeros.forEach(numero => {
        acumulador += potenciarNumero(numero, 3);
    });
    return acumulador;
}
// console.log(sumOfCubes([1,5,9]));

//3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const tipoDato = (valor) => {
    return `Valor ingresado: ${valor} y es un ${typeof valor}`;
}
// console.log(tipoDato('Marco'));

//4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumarArgumentos = (...argumentos) => {
    let total = 0;
    for (const arg of argumentos) total += arg;
    return total;
}
// console.log(sumarArgumentos(1,2,3,4));

//5) Crear una función que reciba un array de valores y filtre los valores que no son string
const arregloValores = ['Marco',5.5,3,'Antonio',true];
const filtrarValoresString = (valores) => {
    const valoresString = valores.filter(val => typeof val == 'string');
    return valoresString;
}
// console.log(filtrarValoresString(arregloValores));

//6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = (numeros) => {
    const valorMaximo = Math.max(...numeros);
    const valorMinimo = Math.min(...numeros);
    return [valorMinimo, valorMaximo];
}
// console.log(minMax([1, 2, 3, 4, 5]));

//7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const formatPhoneNumber = (numeros) => {
    return `(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`
}
// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const findLargestNums = (arreglos) => {
    return arreglos.map(arreglo => Math.max(...arreglo));
}
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

//9) Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
const charIndex = (palabra, letra) => {
    let resultado = [];
    const arreglo = palabra.split('');
    let idx = arreglo.indexOf(letra);
    while (idx != -1) {
        if (resultado.length >= 2) {
            resultado[1] = idx;
        } else {
            resultado.push(idx);
        }
        idx = arreglo.indexOf(letra, idx + 1);
    }
    return resultado;
}
// console.log(charIndex('hello','l'));

//10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const data = { a: 1, b: 2 };
// console.log(Object.entries(data));

//11) Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]) ➞ 65700
const getBudgets = (objetos) => {
    const sumaTotal = objetos.reduce((total, obj) => {
        return total + obj.budget;
   }, 0);
   return sumaTotal;
}
// console.log(getBudgets([
//         { name: "John", age: 21, budget: 23000 },
//         { name: "Steve",  age: 32, budget: 40000 },
//         { name: "Martin",  age: 16, budget: 2700 }
//       ]));

//12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//     { name: "Steve" },
//     { name: "Mike" },
//     { name: "John" }
//   ]) ➞ ["Becky", "John", "Steve"]  
const getStudentNames = (estudiantes) => {
    return estudiantes.map(est => est.name);
}
// console.log(getStudentNames([
//     { name: "Steve" },
//     { name: "Mike" },
//     { name: "John" }
//   ]));

//13) Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
const objectToArray = (objeto) => {
    return Object.entries(objeto);
}
// console.log(objectToArray({
//         likes: 2,
//         dislikes: 3,
//         followers: 10
//       }));

//14) Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
const squaresSum = (numero) => {
    let resultado = 0, contador = 1;
    while (contador <= numero) {
        resultado += potenciarNumero(contador, 2);
        contador++;
    }
    return resultado;
}
// console.log(squaresSum(3));

//15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
const multiplyByLength = (arreglo) => {
    const cantArreglo = arreglo.length;
    return arreglo.map(num => num * cantArreglo);
}
// console.log(multiplyByLength([2, 3, 1, 0]));

//16) Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
const countdown = (numero) => {
    let resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    return resultado;
}
// console.log(countdown(5));

//17) Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
const diffMaxMin = (arreglo) => {
    const numMin = Math.min(...arreglo);
    const numMax = Math.max(...arreglo);
    return numMax - numMin;
}
// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
const filterList = (valores) => {
    const valoresInt = valores.filter(val => typeof val == 'number');
    return valoresInt;
}
// console.log(filterList([1, 2, 3, "x", "y", 10]));

//19) Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
const repeat = (elemento, tiempos) => {
    let resultado = [];
    for (let i = 0; i < tiempos; i++) resultado.push(elemento);
    return resultado;
}
// console.log(repeat(13, 5));

//20) Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
};
// console.log('apples and bananas'.vreplace('u'));

//21) Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
const findNemo = (frase) => {
    const arreglo = frase.split(' ');
    let posicion = 0;
    if (arreglo.includes('Nemo')) {
        arreglo.forEach((palabra, i) => {
            if (palabra === 'Nemo') {
                posicion = i+1;
            }
        });
        return `I found Nemo at ${posicion}!`
    }
}
// console.log(findNemo("I am finding Nemo !"));

//22) Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"
const capLast = (palabra) => {
    let arreglo = palabra.split('');
    arreglo[arreglo.length-1] = arreglo[arreglo.length-1].toUpperCase();
    return arreglo.join('');
}
// console.log(capLast('hello'));