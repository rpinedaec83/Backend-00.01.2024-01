//Pregunta 1
const infoPer = (nom, ape, edad) => {
    return alert("Hola mi nombre es " + nom + " " + ape + " y mi edad " + edad)
}
function obtenerDatos() {
    let nom = prompt("Escribe tu nombre")
    let ape = prompt("Escribe tu apellido")
    let edad = parseInt(prompt("Escribe tu edad"))
    infoPer(nom, ape, edad)
}
//Pregunta 2
const sumaCubos = (n1, n2, n3) => {
    let cub1 = Math.pow(n1, 3)
    let cub2 = Math.pow(n2, 3)
    let cub3 = Math.pow(n3, 3)
    return alert("La suma es: " + (cub1 + cub2 + cub3))
}
function obtNumeros() {
    let n1 = parseFloat(prompt("Digite Numero 1"))
    let n2 = parseFloat(prompt("Digite Numero 2"))
    let n3 = parseFloat(prompt("Digite Numero 3"))
    sumaCubos(n1, n2, n3)
}
//Pregunta 3
function obtenerTipoDeValor() {
    let valor = prompt("Escribe el valor");
    // Intentar convertir la entrada a un número
    let numero = parseFloat(valor);

    // Comprobar si la conversión fue exitosa
    if (!isNaN(numero)) {
        alert("El tipo de valor es: number");
    } else {
        alert("El tipo de valor es: " + typeof valor);
    }
}
//Pregunta 4 funciona por consola
function sumar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}
function pruebas() {
    alert(sumar(1, 2, 3));
    alert(sumar(5, 10, 15, 20));
    alert(sumar(2, 4, 6, 8, 10));
    alert(sumar(1, 2, 3, 5, 20, 30));
}
//Pregunta 5
function filtrarCadenas(array) {
    return array.filter(valor => typeof valor === 'string');
}

function pruebas2() {
    const miArray = [1, 'hola', true, 42, 'adios', false, 'pruebas'];
    const soloCadenas = filtrarCadenas(miArray);
    alert(soloCadenas);
}
//Pregunta 6
function minMax(array) {
    if (array.length === 0) {
        return [];
    }
    const min = Math.min(...array);
    const max = Math.max(...array);
    return [min, max];
}
function pruebas3() {
    const resultado = minMax([1, 2, 3, 4, 5]);
    alert(resultado);
}
//Pregunta 7
function formatTelef(array) {
    if (array.length !== 10 || !array.every(num => typeof num === 'number' && num >= 0 && num <= 9)) {
        return "La matriz debe contener 10 enteros entre 0 y 9.";
    }
    const [a, b, c, d, e, f, g, h, i, j] = array;
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}
function pruebas4() {
    const resultado = formatTelef([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    alert(resultado); // Imprimirá "(123) 456-7890"
}
//Pregunta 8
function matrizMat(matrix) {
    return matrix.map(submatrix => Math.max(...submatrix));
}

function pruebas5() {
    const resultado = matrizMat([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
    alert(resultado);
}

//Pregunta 9
function charIndex(palabra, caracter) {
    const indices = [];
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        }
    }

    if (indices.length === 0) {
        return "El carácter no se encuentra en la palabra.";
    }
    return [indices[0], indices[indices.length - 1]];
}
function pruebas6() {
    // Ejemplos 
    const resultado1 = charIndex("hello", "l");
    alert(resultado1);

    const resultado2 = charIndex("circumlocution", "c");
    alert(resultado2);
}

//pregunta 10 
function toArray(objeto) {
    return Object.entries(objeto);
}
function pruebas7() {
    const resultado = toArray({ a: 1, b: 2 });
    alert(resultado);
}

//Pregunta 11
function getBudgets(personas) {
    const sumaPresupuestos = personas.reduce((total, persona) => total + persona.budget, 0);
    return sumaPresupuestos;
}
function pruebas8() {
    const presupuestosTotales = getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
    ]);
    alert(presupuestosTotales);
}

//Pregunta 12
function getEstudiantes(estudiantes) {
    const nombres = estudiantes.map(estudiante => estudiante.name);
    return nombres;
}
function pruebas9() {
    const nombresEstudiantes = getEstudiantes([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ]);
    alert(nombresEstudiantes);
}

//Pregunta 13
function objectToArray(objeto) {
    return Object.keys(objeto).map(key => [key, objeto[key]]);
}

function pruebas10() {
    const resultado = objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
    });
    alert(resultado);
}
//Pregunta 14

function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }
    return suma;
}

function pruebas11() {
    const resultado = squaresSum(3);
    alert(resultado);
}

//Pregunta 15
function multiplyByLength(array) {
    const longitud = array.length;
    return array.map(valor => valor * longitud);
}

function pruebas12() {
    const resultado = multiplyByLength([2, 3, 1, 0]);
    alert(resultado);
}

//Pregunta 16
function countdown(numero) {
    const resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    return resultado;
}

function pruebas13() {
    const resultado = countdown(5);
    alert(resultado);
}
//Pregunta 17
function diffMaxMin(array) {
    const maximo = Math.max(...array);
    const minimo = Math.min(...array);
    return maximo - minimo;
}
function pruebas14() {
    const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
    alert(resultado);
}
//Pregunta 18
function filterList(array) {
    return array.filter(elemento => typeof elemento === 'number');
}

function pruebas15() {
    const resultado = filterList([1, 2, 3, "x", "y", 10]);
    alert(resultado);
}
//Pregunta 19
function repetir(elemento, veces) {
    const resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado;
}
function pruebas16() {
    const resultado = repetir(19, 8);
    alert(resultado);
}
//pregunta 20
String.prototype.vreplace = function (vocalReemplazo) {
    return this.replace(/[aeiou]/gi, vocalReemplazo);
};
function pruebas17() {
    const resultado = "apples and bananas".vreplace("u");
    alert(resultado);  
}
//Pregunta 21
function findNemo(cadena) {
    const palabras = cadena.split(' ');
    const indiceNemo = palabras.indexOf('Nemo');
    if (indiceNemo !== -1) {
           return `¡Encontre a Nemo en el orden ${indiceNemo + 1}!`;
    } else {
       return "No encontre a Nemo.";
    }
  }
function pruebas18(){
  const resultado = findNemo("I am finding Nemo !");
 alert(resultado);  
}
//Pregunta 22
function capLast(cadena) {
   const palabras = cadena.split(' ');
  const palabrasCapitalizadas = palabras.map(palabra => {
    const ultimaLetra = palabra.slice(-1).toUpperCase();
    return palabra.slice(0, -1) + ultimaLetra;
  });
  const resultado = palabrasCapitalizadas.join(' ');
  return resultado;
}
function pruebas19 () {
const resultado = capLast("hello world");
alert(resultado); 
}