const concatenarInformacion = (nombre, apellido, edad) => {
    const mensaje = `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
    return mensaje;
};

function Ejercicio1() {
    const nombre = String(prompt("Ingrese su nombre:"));
    const apellido = String(prompt("Ingrese su apellido"));
    const edad = parseInt(prompt("Ingrese su edad"));
    alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);
}

function calcularPotencia(base, exponente) {
    const resultado = base ** exponente;
    return resultado;
}
function Ejercicio2() {
    const base = parseInt(prompt("Ingrese el primer número:"));
    const exponente = parseInt(prompt("Ingrese el primer número:"));
    const resultado = calcularPotencia(base, exponente);
    alert(resultado);
}

function sumOfCubes(...numeros) {
    const sumaCubos = numeros.reduce((acumulador, numero) => {
        return acumulador + Math.pow(numero, 3);
    }, 0);

    return sumaCubos;
}

function Ejercicio3() {
    const resultado = sumOfCubes(parseInt(prompt("Ingrese el 1er numero")), parseInt(prompt("Ingrese el 2do numero")), parseInt(prompt("Ingrese el 3er numero")));
    alert(resultado);

}
function obtenerTipoDeValor(valor) {
    return typeof valor;
}


function sumar(...numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    return numeros.reduce((acumulador, numero) => acumulador + numero);
}

function Ejercicio4(...numeros) {
    const resultado = sumar(...numeros);
    alert(`La suma es: ${resultado}`);
}

function filtrarStrings(array) {
    const stringsFiltrados = array.filter(valor => typeof valor === 'string');
    return stringsFiltrados;
}

function Ejercicio5() {
    const miArray = [1, 'Hola', 3, 'Mundo', true, 'JavaScript'];
    const resultado = filtrarStrings(miArray);

    alert(resultado);
}

function obtenerNumerosMinMax() {
    const entrada = prompt("Ingrese una lista de números separados por comas:");

    const numeros = entrada.split(',').map(Number);

    if (numeros.some(isNaN)) {
        alert("Ingrese números válidos.");
        return [];
    }

    const min = Math.min(...numeros);
    const max = Math.max(...numeros);

    return [min, max];
}

function Ejercicio6() {
    const resultado = obtenerNumerosMinMax();

    if (resultado.length > 0) {
        alert(`El número mínimo es: ${resultado[0]}\nEl número máximo es: ${resultado[1]}`);
    } else {
        alert("No se ingresaron números válidos.");
    }
}

function formatPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        return "La matriz debe contener exactamente 10 números.";
    }

    const formattedNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;

    return formattedNumber;
}

function Ejercicio7() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const numeroTelefono = formatPhoneNumber(numeros);

    alert(numeroTelefono);
}

function findLargestNums(matrix) {
    const result = matrix.map(subArray => Math.max(...subArray));

    return result;
}

function Ejercicio8() {
    const matriz = [
        [4, 2, 7, 1],
        [20, 70, 40, 90],
        [1, 2, 0]
    ];

    const mayores = findLargestNums(matriz);
    alert(mayores);
}

function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);

    const ultimoIndice = palabra.lastIndexOf(caracter);

    if (primerIndice !== -1 && ultimoIndice !== -1) {
        return [primerIndice, ultimoIndice];
    } else {
        return "El carácter no está presente en la palabra.";
    }
}
function Ejercicio9() {
    alert(charIndex("hello", "l"));
    alert(charIndex("circumlocution", "c"));
}

function toArray(objeto) {
    const claves = Object.keys(objeto);

    const matriz = claves.map((clave) => [clave, objeto[clave]]);

    return matriz;
}

function Ejercicio10() {
    const objeto = { a: 1, b: 2 };
    const resultado = toArray(objeto);
    alert(resultado);
}

function getBudgets(personas) {
    const sumaPresupuestos = personas.reduce((total, persona) => total + persona.budget, 0);

    return sumaPresupuestos;
}

function Ejercicio11() {
    const personas = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
    ];

    const resultado = getBudgets(personas);
    alert("La suma de los presupuestos de las personas: " + resultado);
}

function getStudentNames(estudiantes) {
    const nombres = estudiantes.map(estudiante => estudiante.name);

    return nombres;
}

function Ejercicio12() {
    const estudiantes = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ];

    const resultado = getStudentNames(estudiantes);
    alert("Nombre de estudiantes: " + resultado);
}

function objectToArray(objeto) {
    const matrizResultado = Object.entries(objeto);

    return matrizResultado;
}
function Ejercicio13() {
    const objeto = {
        likes: 2,
        dislikes: 3,
        followers: 10
    };

    const resultado = objectToArray(objeto);
    alert(resultado);
}


function squaresSum(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }

    return suma;
}

function Ejercicio14() {
    const resultado = squaresSum(prompt("Ingrese un numero: "));
    alert(resultado);
}
function multiplyByLength(arr) {
    const length = arr.length;

    const resultado = arr.map(valor => valor * length);

    return resultado;
}

function Ejercicio15() {
    const resultado = multiplyByLength([2, 3, 1, 0]);
    alert(resultado);
}


function countdown(numero) {
    const numeros = [];

    for (let i = numero; i >= 0; i--) {
        numeros.push(i);
    }

    return numeros;
}

function Ejercicio16() {
    const resultado = countdown(prompt("Ingrese un numero:"));
    alert(resultado);
}

function diffMaxMin(matriz) {
    const minimo = Math.min(...matriz);
    const maximo = Math.max(...matriz);
    const diferencia = maximo - minimo;

    return diferencia;
}

function Ejercicio17() {
    const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
    alert(resultado);
}

function filterList(matriz) {
    const enteros = matriz.filter(elemento => typeof elemento === "number");

    return enteros;
}

function Ejercicio18() {
    const resultado = filterList([1, 2, 3, "x", "y", 10]);
    alert(resultado);
}

function repeat(elemento, veces) {
    const resultado = Array.from({ length: veces }, () => elemento);

    return resultado;
}

function Ejercicio19() {
    const resultado = repeat(prompt("Ingrese el numero a repetir"), prompt("Ingrese la cantidad de veces"));
    alert(resultado);
}


String.prototype.vreplace = function (vocalNueva) {
    return this.replace(/[aeiou]/g, vocalNueva);
};

function Ejercicio20() {
    const resultado = prompt("Ingrese una frase").vreplace("u");
    alert(resultado);
}

function encontrarNemo(cadena) {
    const palabras = cadena.split(' ');

    const posicionNemo = palabras.indexOf('Nemo');

    if (posicionNemo !== -1) {
        return `¡Encontré a Nemo en la posición ${posicionNemo + 1}!`;
    } else {
        return "No se encontró a Nemo";
    }
}

function Ejercicio21() {
    const cadenaDePalabras = "Este es un ejemplo de cadena que contiene a Nemo";
    const resultado = encontrarNemo(cadenaDePalabras);
    alert(resultado);
}

function capLast(cadena) {
    const palabras = cadena.split(' ');

    const palabrasCapitalizadas = palabras.map((palabra) => {
        if (palabra.length > 0) {
            const ultimaLetra = palabra.slice(-1).toUpperCase();
            return palabra.slice(0, -1) + ultimaLetra;
        } else {
            return palabra;
        }
    });

    const resultado = palabrasCapitalizadas.join(' ');

    return resultado;
}

function Ejercicio22() {
    const cadenaOriginal = String(prompt("Ingrese una frase"));
    const resultado = capLast(cadenaOriginal);
    alert(resultado);
}
