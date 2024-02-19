function ejercicio1(){
    prompt ("Crea una función que retorne la suma de dos números (oprima Enter para continuar)");
    const suma = (a, b) => a + b;

const a = parseInt(prompt('Ingrese el primer número:'));
const b = parseInt(prompt('Ingrese el segundo número:'));

alert(`La suma de ${a} y ${b} es ${suma(a, b)}`);
    
}
function ejercicio2(){

    prompt ("Función que retorne una potencia de un número dado (oprima Enter para continuar)");
const potencia=(numero, expon)=>numero**expon;
const numero = parseInt(prompt('Ingrese el numero base:'));
const expon = parseInt(prompt('Ingrese el exponente:'));
alert(`La potencia de ${numero} elevado a ${expon} es ${potencia(numero, expon)}`);
}

function ejercicio3(){
     prompt ("Función que toma 3 numeros y devuelve la suma de sus cubos (oprima Enter para continuar)");
     const suma_cubos=(num1,num2,num3)=>num1**3+num2**3+num3**3;
const num1 = parseInt(prompt('Ingrese el primer numero :'));
const num2 = parseInt(prompt('Ingrese el segundo numero :'));
const num3 = parseInt(prompt('Ingrese el tercer numero :'));
alert(`El resultado es ${suma_cubos(num1,num2,num3)}`);
    
}   

function ejercicio4(){
    prompt ("Función que tome la base y la altura de un triángulo y devuelva su área (oprima Enter para continuar)");
    const area_tri=(base,altura)=>base*altura/2;
    const base = parseInt(prompt('Ingrese la base del triangulo :'));
    const altura = parseInt(prompt('Ingrese la altura del triangulo :'));
  
    alert(`El area del triangulo es ${area_tri(base,altura)}`);
    
}


function ejercicio5(){
    prompt ("Calculadora (+,-,x,/,%) (oprima Enter para continuar)");
    const calcular = () => {
      const numero1 = parseFloat(prompt('Ingrese el primer número:'));
      const operador = prompt('Ingrese el operador (+, -, *, /, %):');
      const numero2 = parseFloat(prompt('Ingrese el segundo número:'));
    
      let resultado;
    
      switch (operador) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case '*':
          resultado = numero1 * numero2;
          break;
        case '/':
          if (numero2 === 0) {
            return 'Error: No se puede dividir por cero';
          }
          resultado = numero1 / numero2;
          break;
        case '%':
          resultado = numero1 % numero2;
          break;
        default:
          return 'Error: Operador no válido';
      }
    
      return `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`;
    };
    
    alert(calcular());
    
}

function ejecicio6(){
    prompt ("Calcula el pago semanal a un Empleado (oprima Enter para continuar)");
   
}

function ejecicio7(){
    prompt ("Calcula el precio total segun la membresia del cliente (oprima Enter para continuar)");
  
}

function ejecicio8(){
    prompt ("Determina si el alumno aprobó el año (oprima Enter para continuar)");
    
}

function ejecicio9(){
    prompt ("Calcula el nuevo sueldo de un Empleado (oprima Enter para continuar)");
    
}

function ejecicio10(){
    prompt ("Determina si un número es par o impar (oprima Enter para continuar)");

}

function ejecicio11(){
    prompt ("Encuentra el mayor de 3 números (oprima Enter para continuar)");


}

function ejecicio12(){
    prompt ("Encuentra el mayor de 2 números (oprima Enter para continuar)");

}

function ejecicio13(){
    prompt ("Identifica una vocal (oprima Enter para continuar)");


}

function ejecicio14(){
    prompt ("Identifica un numero primo del 1 al 10 (oprima Enter para continuar)");

}

function ejecicio15(){
    prompt ("Convierta centímetros a pulgadas y libras a kilogramos (oprima Enter para continuar)");
   

}
function ejecicio16(){
    prompt ("Encuentre el dia que corresponde a un número del 1 al 7 (oprima Enter para continuar)");

   
}

function ejercicio17(){
    prompt ("Calculula la hora en 1 segundo despues (oprima Enter para continuar)");
   
}

function ejecicio18(){

   
}

function ejecicio19(){
    prompt ("Pago semanal a empleados (oprima Enter para continuar)");


}

function ejecicio20(){
    prompt ("Operaciones con 4 numeros enteros positivos (oprima Enter para continuar)");


}


function ejecicio21(){
    prompt ("Calcule el factorial de un numero (oprima Enter para continuar)");
   
}
function ejecicio22(){
    prompt ("Calcula la suma de n numeros (oprima Enter para continuar)");


}

function ejecicio23(){
    prompt ("Calcula la suma de nuemros impares hasta un núnero n (oprima Enter para continuar)");


}

function ejecicio24(){
    prompt ("Calcula la suma de números pares hasta 1000 (oprima Enter para continuar)");


}

function ejecicio25(){
    prompt ("calcule el factorial de un número (oprima Enter para continuar)");


}

function ejecicio26(){
    prompt ("Calcula el cociente y el resto en una división (oprima Enter para continuar)");


}

function ejecicio27(){
    prompt ("Calcula la media hasta un numero n (oprima Enter para continuar)");


}
function ejecicio28(){
    prompt ("Calcula la suma de los numeros del 1 al 100 (oprima Enter para continuar)");


}

function ejecicio29(){
    prompt ("Calcula la suma de los numeros del 1 al 100 (oprima Enter para continuar)");


}

function ejecicio30(){
    prompt ("Calcula la suma de los numeros del 1 al 100 (oprima Enter para continuar)");


}

function ejecicio31(){
    prompt ("Calcula la media de 10 numeros, separadors en pares e impares (oprima Enter para continuar)");


}

function ejecicio32(){
    prompt ("muestra la ciudad con máyor población (oprima Enter para continuar)");


}

function ejecicio33(){
    prompt ("Consulta si desea continuar)");


}

function ejecicio34(){
    prompt ("Tabla de multiplincar del 1 al 9 (oprima Enter para continuar)");


}

function ejecicio35(){
    prompt ("Muestra el número mayor y menor de 20 numeros (oprima Enter para continuar)");


}

function ejecicio36(){
    prompt ("Calcula la serie de Fibonnci (oprima Enter para continuar)");


}

function ejecicio37(){
    prompt ("Calcula el M.C.D. (oprima Enter para continuar)");


}

function ejecicio38(){
    prompt ("Identifica si un numero es perfecto (oprima Enter para continuar)");


}

function ejecicio39(){
    prompt ("Aproximación a Pi por serie de Gregpry-Leibniz (oprima Enter para continuar)");


}

function ejecicio40(){
    prompt ("Aproximación a Pi por serie de Nilakantha (oprima Enter para continuar)");


}