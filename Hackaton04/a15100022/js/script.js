//Reto 1

const openForm = (formNumber) => {
    const form = document.getElementById(`form${formNumber}`);
    form.style.display = "block";
};

const closeForm = (formNumber) => {
    const form = document.getElementById(`form${formNumber}`);
    form.style.display = "none";
};

const calculateResult = (formNumber) => {
    const value1 = parseFloat(document.getElementById(`value1`).value) || 0;
    const value2 = parseFloat(document.getElementById(`value2`).value) || 0;

    // Lógica para calcular resultados con los valores ingresados
    const result = value1 + value2;

    alert(`Resultado del Formulario ${formNumber}: ${result}`);


};
//**************************************************************************************** */

const calcularPotencia = (base, exponente) => {
    // Utiliza el operador ** para calcular la potencia
    const resultado = base ** exponente;
    return resultado;
};

const calcularYMostrarPotencia = () => {
    const base = parseFloat(document.getElementById('base').value) || 0;
    const exponente = parseFloat(document.getElementById('exponente').value) || 0;

    const resultado = calcularPotencia(base, exponente);

    alert(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);


};


//****************************************************************************** */
const sumOfCubes = (...numeros) => {

    return numeros.reduce((acumulador, numero) => {
        return acumulador + Math.pow(numero, 3);
    }, 0);
};

const calcularYMostrarSumaCubos = () => {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const num3 = parseFloat(document.getElementById('num3').value) || 0;

    const resultadoSumaCubos = sumOfCubes(num1, num2, num3);

    alert(`La suma de los cubos es: ${resultadoSumaCubos}`);
};

//********************************************************************************************** */

const triArea = (base1, altura) => {

    return (base1 * altura) / 2;
};

const calcularYMostrarAreaTriangulo = () => {
    const base1 = parseFloat(document.getElementById('base1').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;

    const resultado = triArea(base1, altura);


    alert(`El area del triangulo es: ${resultado}`);


};
//************************************************************************* */

const calculator = (numero1, operacion, numero2) => {
    switch (operacion) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        case '%':
            return numero1 % numero2;
        default:
            return "El parámetro no es reconocido";
    }
};

const calcularYMostrarResultado = () => {
    const numero1 = parseFloat(document.getElementById('numero1').value) || 0;
    const operacion = document.getElementById('operacion').value;
    const numero2 = parseFloat(document.getElementById('numero2').value) || 0;

    const resultado = calculator(numero1, operacion, numero2);


    alert(`Resultado: ${resultado}`);

};
//*¿Cómo defines una función?
//*function miFuncion(parametro1, parametro2) {
// Código de la función
// Puedes realizar operaciones aquí
//  return resultado; // opcional: devuelve un valor
//}

//*¿Hasta cuantos argumentos puedes declarar en una función?
//En JavaScript, no hay un límite específico para la cantidad de parámetros que puedes declarar en una función. 
//Puedes declarar cualquier cantidad de parámetros que necesites para que tu función funcione correctamente


//****************************************Reto 2************************************/

//Ejercicio 1

const saludar = (nombre, apellido, edad) => {
    return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
};

const generarSaludo = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;

    const mensajeSaludo = saludar(nombre, apellido, edad);
    alert( mensajeSaludo);
    }
//La función arrow se caracteriza por su sintaxis concisa 
//la función es simple y tiene una sola expresión de retorno. La notación ${variable} dentro
// de las plantillas de cadenas es conocida como "template literals" y facilita la inclusión 
//de variables dentro de strings en JavaScript.

//************************************************************* */
//Ejercio 2

const sumOfCubes2 = (...numeros) => {

    return numeros.reduce((acumulador, numero) => {
        return acumulador + Math.pow(numero, 3);
    }, 0);
};

const calcularYMostrarSumaCubos2 = () => {
    const nume1 = parseFloat(document.getElementById('nume1').value) || 0;
    const nume2 = parseFloat(document.getElementById('nume2').value) || 0;
    const nume3 = parseFloat(document.getElementById('nume3').value) || 0;

    const resultadoSumaCubos2 = sumOfCubes2(nume1, nume2, nume3);

    alert(`La suma de los cubos es: ${resultadoSumaCubos2}`);
};
// Utiliza el método reduce para sumar los cubos de los números. acumulador es la variable que acumula la suma,
// y numero es cada elemento del array. Math.pow(numero, 3) calcula el cubo de cada número. El segundo argumento
// de reduce (0 en este caso) es el valor inicial del acumulador.

//************************************************************* */
//Ejercicio3
const obtenerTipoDeValor = (valor) => {
    if (!isNaN(valor)) {
        if (Number.isInteger(parseFloat(valor))) {
            return 'Número entero';
        } else {
            return 'Número decimal';
        }
    } else if (valor.toLowerCase() === 'true' || valor.toLowerCase() === 'false') {
        return 'Booleano';
    } else {
        try {
            JSON.parse(valor);
            return 'Objeto JSON';
        } catch (error) {
            return 'Cadena';
        }
    }
};

const obtenerYMostrarTipoDeValor = () => {
    const valorIngresado = document.getElementById('valor').value;

    const tipoDeValor = obtenerTipoDeValor(valorIngresado);

    alert(`El tipo de valor ingresado es: ${tipoDeValor}`);
};

// función obtenerTipoDeValor toma un parámetro valor y utiliza typeof para obtener
// el tipo de valor. se invoca la función con diferentes tipos de valores y se imprime el resultado.

//************************************************************** */

//Ejerccio 4

const sumarArgumentos = (...argumentos) => {
    return argumentos.reduce((acumulador, numero) => acumulador + parseFloat(numero), 0);
};

const sumarYMostrarResultado = () => {
    const argumentosIngresados = document.getElementById('argumentos').value;
    const arrayDeArgumentos = argumentosIngresados.split(',').map(argumento => argumento.trim());

    const resultado = sumarArgumentos(...arrayDeArgumentos);

    alert(`La suma de los argumentos es: ${resultado}`);
};

//la función sumarArgumentos toma cualquier cantidad de argumentos utilizando
// el operador rest (...argumentos). Luego, utiliza el método reduce para sumar todos los valores

//*************************************************************** */

//Ejercio 5
const filtrarNumeros = (array) => {
    return array.filter(valor => typeof valor === 'number' && !isNaN(valor));
};

const filtrarYMostrarResultado = () => {
    const arrayOriginalIngresado = document.getElementById('arrayOriginal').value;
    const arrayOriginal = arrayOriginalIngresado.split(',').map(elemento => {
        const num = parseFloat(elemento.trim());
        return isNaN(num) ? elemento.trim() : num;
    });

    const arrayNumeros = filtrarNumeros(arrayOriginal);
    alert(`Array orginal: [${arrayOriginal.join(', ')}]`);
    alert(`Valors no string: [${arrayNumeros.join(', ')}]`);
};

//En este ejemplo, la función filtrarStrings toma un array como parámetro y utiliza el método filter
// para crear un nuevo array que solo contiene los valores que son de tipo string. 
//La condición typeof valor === 'string' se utiliza en la función de filtrado para verificar
// si cada elemento del array es un string.

//********************************************************************************** */
// Ejercicio 6

const minMax = (numeros) => {
    if (numeros.length === 0) {
        return [];
    }
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    const minimo = numerosOrdenados[0];
    const maximo = numerosOrdenados[numerosOrdenados.length - 1];

    return [minimo, maximo];
};
const calcularYMostrarMinMax = () => {
    const numerosIngresados = document.getElementById('numerosInput').value;
    const numerosArray = numerosIngresados.split(',').map(numero => parseFloat(numero.trim()));

    const valoresMinMax = minMax(numerosArray);

    if (valoresMinMax.length === 0) {
        alert('Ingrese al menos un número.');
    } else {
        alert(`Mínimo: ${valoresMinMax[0]}, Máximo: ${valoresMinMax[1]}`);
    }
}; 

//En este ejemplo, la función minMax toma un array de números como parámetro.
//Primero, verifica si el array está vacío y devuelve un array vacío en ese caso. 
//Luego, crea una copia ordenada del array original utilizando el spread operator y el método sort.
// Después, obtiene el mínimo y máximo de la matriz ordenada y devuelve un nuevo array con estos dos valores.

//***************************************************************** */
// Ejercicio 7:

 const formatPhoneNumber = (numeros) => {
    if (numeros.length !== 10 || !numeros.every(numero => typeof numero === 'number' && numero >= 0 && numero <= 9)) {
        return "La matriz debe contener exactamente 10 enteros entre 0 y 9.";
    }

    const parte1 = numeros.slice(0, 3).join('');
    const parte2 = numeros.slice(3, 6).join('');
    const parte3 = numeros.slice(6, 10).join('');

    const numeroFormateado = `(${parte1}) ${parte2}-${parte3}`;
    return numeroFormateado;
};

const formatearYMostrarTelefono = () => {
    const numerosIngresados = document.getElementById('numerosInput').value;
    const numerosArray = numerosIngresados.split('').map(numero => parseInt(numero, 10));

    const telefonoFormateado = formatPhoneNumber(numerosArray);
    
    if (telefonoFormateado === "La matriz debe contener exactamente 10 enteros entre 0 y 9.") {
        alert(telefonoFormateado);
    } else {
        alert(`Número de Teléfono Formateado: ${telefonoFormateado}`);
    }
};

//* la función findLargestNums toma una matriz de matrices como parámetro. 
//Utiliza el método map para aplicar una función a cada submatriz, y
// dentro de esa función utiliza Math.max(...submatriz) para obtener el mayor número de cada submatriz. 

//  Ejercicio8 

const encontrarNumerosMasGrandes = (matrices) => {
    return matrices.map(matriz => Math.max(...matriz));
};

const encontrarYMostrarNumerosMasGrandes = () => {
    const matricesIngresadas = document.getElementById('matricesInput').value;

    try {
        const matrices = JSON.parse(matricesIngresadas);
        const numerosMasGrandes = encontrarNumerosMasGrandes(matrices);

        alert(`Los números más grandes de cada matriz son: [${numerosMasGrandes.join(', ')}]`);
    } catch (error) {
        alert("Ingrese matrices válidas en el formato adecuado.");
    }
};
/* la función encontrarYMostrarNumerosMasGrandes. La función intentará analizar el 
texto ingresado como JSON y calculará los números más grandes de cada matriz usando la 
función encontrarNumerosMasGrandes. El resultado se mostrará en una alerta.*/

/******************************************************************************************* */

//  Ejercicio9                        
const charIndex = (palabra, caracter) => {
    const indices = [];

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        }
    }

    if (indices.length === 0) {
        return "El carácter no se encontró en la palabra.";
    }

    return [indices[0], indices[indices.length - 1]];
};

const buscarYMostrarIndices = () => {
    const palabra = document.getElementById('palabraInput').value;
    const caracter = document.getElementById('caracterInput').value;

    const indices = charIndex(palabra, caracter);

    if (Array.isArray(indices)) {
        alert(`El carácter "${caracter}" se encontró en la palabra "${palabra}" en los índices: ${indices[0]} y ${indices[1]}`);
    } else {
        alert(indices);
    }
};

//la función charIndex recorre la palabra y compara cada carácter con el carácter proporcionado.
// Si se encuentra el carácter, se añade el índice a una lista de índices. 
//Luego, se verifica si se encontraron índices y se devuelve un array con el primer y último índice si es el caso.

//************************************************************************** */

//Ejercicio 10
const toArray = (objeto) => {
    return Object.entries(objeto);
};

const convertirYMostrarMatriz = () => {
    const objetoInput = document.getElementById('objetoInput').value;

    try {
        // Convertir la cadena a un objeto
        const objeto = eval(`({${objetoInput}})`);
        const matriz = toArray(objeto);

        alert(`La matriz resultante es: ${JSON.stringify(matriz)}`);
    } catch (error) {
        alert("Ingrese un objeto válido.");
    }
};
//En este ejemplo, la función toArray utiliza el método Object.entries(objeto), 
//que devuelve una matriz de pares clave-valor de un objeto. La matriz resultante
// contiene subarrays donde el primer elemento es la clave y el segundo elemento es el valor.

//************************************************************************************ */
// Ejercicio 11
const getBudgets = (personas) => {
    const presupuestos = personas.filter((valor, indice) => indice % 3 === 2);  // Filtrar solo los terceros valores
    const sumaPresupuestos = presupuestos.reduce((acumulador, presupuesto) => acumulador + presupuesto, 0);
    return sumaPresupuestos;
};

const parsearPresupuestos = (entrada) => {
    const partes = entrada.split(',').map(e => e.trim());
    const valores = partes.map((valor, indice) => (indice % 3 === 2) ? parseInt(valor) : valor);

    return valores;
};

const calcularYMostrarTotal = () => {
    const presupuestosInput = document.getElementById('presupuestosInput').value;

    try {
        const valores = parsearPresupuestos(presupuestosInput);
        const total = getBudgets(valores);

        alert(`El total de presupuestos es: ${total}`);
    } catch (error) {
        alert("Ingrese los presupuestos en el formato correcto.");
    }
};

//la función getBudgets toma una matriz de objetos llamada personas. Utiliza el método reduce para sumar
// los presupuestos de cada persona, accediendo a la propiedad budget de cada objeto. 
//El segundo argumento de reduce (0 en este caso) es el valor inicial del acumulador

//************************* ********************************************/
// Ejercicio 12
const getStudentNames = (estudiantes) => {
    return estudiantes.map(estudiante => estudiante.name);
};

const parsearEstudiantes = (entrada) => {
    try {
        return JSON.parse(entrada);
    } catch (error) {
        throw new Error("Ingrese los datos de los estudiantes en el formato correcto.");
    }
};

const obtenerYMostrarNombres = () => {
    const estudiantesInput = document.getElementById('estudiantesInput').value;

    try {
        const estudiantes = parsearEstudiantes(estudiantesInput);
        const nombres = getStudentNames(estudiantes);

        alert(`Nombres de los estudiantes: ${nombres.join(', ')}`);
    } catch (error) {
        alert(error.message);
    }
};

//la función getStudentNames toma una matriz de objetos llamada estudiantes.
// Utiliza el método map para crear un nuevo array que contenga solo los nombres de los estudiantes,
// accediendo a la propiedad name de cada objeto.

//************************************************************************************* */

//Ejercicio 13
const objectToArray = (objeto) => {
    return Object.entries(objeto);
};

const convertirYMostrarArray = () => {
    const likes = parseInt(document.getElementById('likesInput').value) || 0;
    const dislikes = parseInt(document.getElementById('dislikesInput').value) || 0;
    const followers = parseInt(document.getElementById('followersInput').value) || 0;

    const objeto = { likes, dislikes, followers };
    const resultado = objectToArray(objeto);
    alert(JSON.stringify(resultado));
};



/*La función objectToArray utiliza el método Object.entries(objeto), que devuelve una matriz de
 pares clave-valor de un objeto. La matriz resultante contiene subarrays donde el primer 
elemento es la clave y el segundo elemento es el valor.*/

/****************************************************************************************** */
//Ejercicio 14
const squaresSum = (n) => {
    const sumaCuadrados = Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((acumulador, cuadrado) => acumulador + cuadrado, 0);
    return sumaCuadrados;
};

const calcularYMostrarSumaCuadrados = () => {
    const numero = parseInt(document.getElementById('numeroInput').value) || 0;
    const resultado = squaresSum(numero);
    alert(`La suma de los cuadrados hasta ${numero} es: ${resultado}`);
};



/*la función squaresSum toma un número n. Utiliza Array.from para crear un array
 de longitud n y luego utiliza reduce para sumar los cuadrados de los números desde 1 hasta n.*/

/******************************************************************************************* */
//Ejercicio 15
const multiplyByLength = (matriz) => {
    const longitud = matriz.length;
    return matriz.map(valor => valor * longitud);
};

const calcularYMostrarMultiplicacion = () => {
    const matrizIngresada = document.getElementById('matrizInput').value;
    const matriz = matrizIngresada.split(',').map(elemento => parseInt(elemento.trim()));

    const resultado = multiplyByLength(matriz);
    alert(`El resultado de multiplicar cada elemento por la longitud de la matriz es: [${resultado}]`);
};


/*a función multiplyByLength toma una matriz y utiliza el método map para crear un
 nuevo array donde cada valor es multiplicado por la longitud de la matriz*/

/************************************************************************************* */
//Ejercicio 16
const countdown = (numero) => {
    const numeroValido = parseFloat(numero);
    if (isNaN(numeroValido) || numeroValido < 0) {
        return "Por favor, ingrese un número válido y mayor o igual a cero.";
    }

    return Array.from({ length: Math.floor(numeroValido) + 1 }, (_, index) => Math.floor(numeroValido) - index);
};

const calcularCountdown = () => {
    const numeroIngresado = document.getElementById('startNumber').value;
    const resultadoCountdown = countdown(numeroIngresado);
  
    if (typeof resultadoCountdown === 'string') {
      alert(resultadoCountdown);
    } else {
      alert(`El resultado del countdown es: ${JSON.stringify(resultadoCountdown)}`);
    }
  };


/*la función countdown toma un número como argumento y utiliza Array.from junto con 
reverse para crear una matriz que cuenta desde ese número hasta cero.*/

/********************************************************************************** */
//Ejercicio 17
const diffMaxMin = (numeros) => {
    const arrayNumeros = numeros;
    const maximo = Math.max(...arrayNumeros);
    const minimo = Math.min(...arrayNumeros);
    return maximo - minimo;
};

// Ejemplo de uso
const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
console.log(resultado);  
/* la función diffMaxMin toma una matriz y utiliza las funciones Math.min y
 Math.max junto con el operador spread (...) para encontrar el número más pequeño
  y el número más grande en la matriz. Luego, devuelve la diferencia entre estos dos números.*/

/********************************************************************************** */

//Ejercicio 18
const filterList = (matriz) => {
    return matriz.filter(elemento => typeof elemento === 'number');
};

const filtrarYMostrar = () => {
    const entradaTexto = document.getElementById('numeros').value;
    const matrizOriginal = entradaTexto.split(',').map(elemento => {
        const num = parseFloat(elemento.trim());
        return isNaN(num) ? elemento.trim() : num;
    });
    const matrizFiltrada = filterList(matrizOriginal);

    alert(`Matriz filtrada: [${matrizFiltrada.join(', ')}]`);
};
/* la función filterList toma una matriz y utiliza el método filter 
para crear un nuevo array que solo contiene los elementos que son de tipo número (enteros).*/

/********************************************************************************** */
//Ejercicio 19
const repeat = (elemento, veces) => {
    return Array.from({ length: veces }, () => elemento);
};

const repetirYMostrarResultado = () => {
    const elemento = document.getElementById('elementoInput').value;
    const veces = document.getElementById('vecesInput').value;

    const resultado = repeat(elemento, veces);

    alert(`Resultado: [${resultado.join(', ')}]`);
};
/*la función repeat toma dos argumentos, elemento y veces. Utiliza Array.from para crear una nueva matriz
 con una longitud igual a la cantidad de veces que se debe repetir el elemento. La función de mapeo 
 proporcionada a Array.from devuelve el elemento en cada iteración, creando así una matriz 
 con el elemento repetido la cantidad de veces especificada.*/

/********************************************************************************************* */

//Ejercicio 20
String.prototype.vreplace = function (vocalReemplazo) {
    return this.replace(/[aeiouAEIOU]/g, vocalReemplazo);
};

const reemplazarVocalesYMostrarResultado = () => {
    const cadena = document.getElementById('cadenaInput').value;
    const vocalReemplazo = document.getElementById('vocalInput').value;

    const resultado = cadena.vreplace(vocalReemplazo);

    alert(`Resultado: ${resultado}`);
};
/**se añade la función vreplace al prototipo de cadena (String.prototype).
  Dentro de la función, se utiliza this.replace con una expresión regular (/[aeiouAEIOU]/g)
 para reemplazar todas las vocales con la vocal especificada.*/

 /******************************************************************************************* */
 // Ejercicio 21

 const findNemo = (cadena) => {
    const palabras = cadena.split(' ');
    const posicionNemo = palabras.indexOf('Nemo');
    
    if (posicionNemo !== -1) {
        return `I found Nemo at ${posicionNemo + 1}!`;
    } else {
        return "Nemo not found!";
    }
};

const buscarNemoYMostrarResultado = () => {
    const frase = document.getElementById('fraseInput').value;
    const resultado = findNemo(frase);
    alert(resultado);
}; 

/* la función findNemo toma una cadena de palabras, la convierte en un array de palabras utilizando
 split(' '), y luego utiliza indexOf('Nemo') para encontrar la posición de la palabra "Nemo".
  Si se encuentra "Nemo", la función devuelve la cadena con el mensaje indicando la posición.*/

  /********************************************************************************************* */

 //Ejercicio 22
 const capLast = (cadena) => {
    const palabras = cadena.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase());
    const resultado = palabrasCapitalizadas.join(' ');
    return resultado;
};

const capitalizarUltimaLetraYMostrarResultado = () => {
    const frase = document.getElementById('frase').value;
    const resultado13 = capLast(frase);
    alert(resultado13);
}