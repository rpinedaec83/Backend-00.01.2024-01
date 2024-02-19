//1. Crea una función que retorne la suma de dos números.

// Función que retorna la suma de dos números
const sumar = (num1, num2) => num1 + num2;

// Ejemplo de uso
const resultado1 = sumar(5, 3);
console.log(resultado1); // Imprime: 8

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2  Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

// Función que retorna la potencia de un número
const potencia = (base, exponente) => Math.pow(base, exponente);

// Ejemplo de uso
const resultado = potencia(4, 3);
console.log(resultado); // Imprime: 64

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

// Función que devuelve la suma de los cubos de los números dados
const sumOfCubes = (...numeros) => {
    return numeros.reduce((suma, numero) => suma + Math.pow(numero, 3), 0);
  };
  
  // Ejemplo de uso
  const resultado3 = sumOfCubes(1, 5, 9);
  console.log(resultado3); // Imprime: 855


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //4. 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

  // Función que devuelve el área de un triángulo
const triArea = (base, altura) => (base * altura) / 2;

// Ejemplo de uso
const areaTriangulo = triArea(3, 2);
console.log(areaTriangulo); // Imprime: 3

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

// Función que realiza operaciones matemáticas
const calculator = (num1, operacion, num2) => {
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
  };
  
  // Ejemplo de uso
  const resultado4 = calculator(2, "+", 2);
  console.log(resultado4); // Imprime: 4


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //PREGUNTAS:

//-  ¿Cómo defines una función?
//   Una función es como una herramienta que realiza una tarea específica. Puedes usarla para dividir tu programa en partes más pequeñas y fáciles de manejar. 
//   Las funciones toman ciertos datos como entrada, llamados parámetros, hacen algo con esos datos y luego te devuelven un resultado. Son útiles porque hacen 
//   que tu código sea más organizado y fácil de entender.

//   TIPOS DE FUNCION 

//     - FUNCIÓN DECLARADA
//     - FUNCIÓN RESERVADA
//     - FUNCIÓN FLECHA

//-  ¿Hasta cuantos argumentos puedes declarar en una función?

//    No hay un límite estricto en la cantidad de argumentos que puedes declarar en una función en JavaScript. Sin embargo, se recomienda mantener el número de 
//    argumentos bajo para mejorar la legibilidad y estructura del código.