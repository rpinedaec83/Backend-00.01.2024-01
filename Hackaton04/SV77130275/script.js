
//ejercico 01

function SumaDosNumeros() {

let numero1 = parseInt(prompt("Escriba el primer numero a Sumar :) "));
let numero2 = parseInt(prompt("Escriba el segundo numero a Sumar :) "));
const suma = numero1 + numero2;

console.log("El resultado es", suma);
}

function Ejercicio02(){

let numero_base = parseInt(prompt("Ingrese el numero"));

let exponente = parseInt(prompt("Ingrese el exponente"));

let resultado = numero_base ** exponente;

alert("El resultado es " + resultado);          //Resultado en Pantalla 
console.log("El resultado es: " + resultado);   //Resultado en CONSOLA

}


function Ejercicio03() {

    const exponente = 3;
    let numero01 = parseInt(prompt("Ingresa el primer numero"));
    let numero02 = parseInt(prompt("Ingresa el segundo numero"));
    let numero03 = parseInt(prompt("Ingresa el tercer numero"));

primerResultado = numero01 ** exponente 
segundoResultado = numero02 ** exponente
tercerResultado = numero03 ** exponente

resultadoFinal = primerResultado + segundoResultado + tercerResultado 

alert("La suma de sus cubos es " + resultadoFinal);
console.log("La suma de sus cubos es " + resultadoFinal);

}

function Ejercicio04() {

const areDelTriangulo = 2;
let base = parseInt(prompt("Ingresa la base del triangulo"));
let altura = parseInt(prompt("Ingresa la altura del triangulo"));

CalcularArea = (base * altura) / areDelTriangulo

alert("El area del triangulo es " + CalcularArea);
console.log("El area del triangulo es " + CalcularArea)
}

function Calculator() {

let operacion = parseInt(prompt("Elija una operacion: (1) SUMA, (2) RESTA, (3) MULTIPLICACION"));
if (operacion == 1) {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 + numero2;
    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);

}
else if (operacion == 2) {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 - numero2;
    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);
}
else if (operacion == 3) {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 * numero2;
    alert("El resultado es " + resultado);
    console.log("El resultado es " + resultado);

}
else 
    {
        alert("Operacion no valida");
    }

};

function preguntas() {

alert("¿Como defines una function? --> Una funcion se define, usando la palabra clave: function o sino escribir const nombre () => {}");

}
function preguntas01() {
    alert("¿Hasta cuantos argumentos puedes declarar en una función?--> una funcion no tiene limite para poseer argumentos");

}
function ejercicioR1() {

   const usuario = {
    nombre: prompt("Ingresa el nombre"),
    apellido: prompt("Ingresa el apellido"),
    edad: prompt("Ingresa la edad")
   }

   alert("Hola mi nombre es " + usuario.nombre + " " + usuario.apellido + " y tengo  " + usuario.edad + " años de edad");
   console.log("Hola mi nombre es " + usuario.nombre + " " + usuario.apellido + " y tengo  " + usuario.edad + " años de edad");
    }

    function EjercicioR2() {

        const exponente = 3;
        let numero01 = parseInt(prompt("Ingresa el primer numero"));
        let numero02 = parseInt(prompt("Ingresa el segundo numero"));
        let numero03 = parseInt(prompt("Ingresa el tercer numero"));
    
    primerResultado = numero01 ** exponente 
    segundoResultado = numero02 ** exponente
    tercerResultado = numero03 ** exponente
    
    resultadoFinal = primerResultado + segundoResultado + tercerResultado 
    
    alert("La suma de sus cubos es " + resultadoFinal);
    console.log("La suma de sus cubos es " + resultadoFinal);
    }

    function EjercicioR3 (){
   
let userInput = prompt("Por favor, ingresa un dato:");


if (!isNaN(userInput)) {
  
    userInput = parseFloat(userInput);
}

console.log("El dato ingresado es:", typeof userInput);

}
function EjercicioR4 (){

    let continuar = true;
    let numeros = [];
    
    while (continuar) {
      let numero = prompt("Ingrese un número o escriba 'sumar' para terminar:");
    
      if (numero === "sumar") {
        continuar = false;
      } else {
        numeros.push(Number(numero));
      }
    }
    let resultado = sumarNumeros(...numeros);

    alert(`La suma de los números ingresados es: ${resultado}`);
    console.log(`La suma de los números ingresados es: ${resultado}`);

}

function sumarNumeros(...args) {
    let suma = 0;
    for (let i = 0; i < args.length; i++) {
      suma += args[i];
    }
    return suma;
  
}

function EjercicioR5 (){

        const valores = [1, 'hola', 2, 'mundo', true, ''];
        const soloStrings = filtrarStrings(valores);
        alert(soloStrings);   
    
    }
    
    function filtrarStrings(array) {
        return array.filter((valor) => typeof valor === 'number');
      
}
function EjercicioR6(){

    let [min, max] = minMaxUsuario();
    alert("El numero minimo es: " + min + " y el numero maximo es: " + max);


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
  }}

  function EjercicioR7(){
    

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
  function EjercicioR8(){

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

  function EjercicioR9(){
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

  function EjercicioR10(){

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

function EjercicioR11(){
    
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

function EjercicioR12(){
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

function EjercicioR13(){

    let miObjeto = {
        likes: 2,
        dislikes: 3,
        followers: 10,
    };

    let miMatriz = convertirAMatriz(miObjeto);
    alert(miMatriz);


  }

function EjercicioR14(){

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

function EjercicioR15(){

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

function EjercicioR16(){

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

function EjercicioR17(){

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

function EjercicioR18(){

    let matriz = [1, 'dos', 3, 'cuatro', 5];
    let enteros = filtrarEnteros(matriz);
    alert(enteros);

  }

function filtrarEnteros(matriz) {
    return matriz.filter(elemento => Number.isInteger(elemento));
}

function EjercicioR19(){

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

function EjercicioR20(){

    String.prototype.vreplace = function(vocalEspecifica) {
        return this.replace(/[aeiou]/gi, vocalEspecifica);
    };
    
    let cadena = prompt('Ingrese una cadena de texto');
    let vocal = prompt('Ingrese la vocal con la que desea reemplazar las vocales');
    
    let resultado = cadena.vreplace(vocal);
    alert(`El resultado después de reemplazar las vocales es: ${resultado}`);

  }

function EjercicioR21(){

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

function EjercicioR22(){

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