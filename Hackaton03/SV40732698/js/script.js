function ejecicio1(){
    prompt ("Reconoce si un numero tiene 3 digitos (oprima Enter para continuar)");
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}
function ejecicio2(){
    prompt ("Reconoce si un numero es negativo (oprima Enter para continuar)");
// Solicitar al usuario que ingrese un número
let numero = prompt("Ingrese el número a verificar:");

// Verificar si el número es negativo
if (numero < 0) {
  alert("El número ingresado es negativo.");
} else if (numero === 0) {
  alert("El número ingresado es cero.");
} else {
  alert("El número ingresado es positivo.");
}
}
function ejecicio3(){
     prompt ("Reconoce si un numero termina en 4 (oprima Enter para continuar)");
     // Solicitar al usuario que ingrese un número
  let numero = prompt("Ingrese un número:");

    // Verificar si el número termina en 4
  if (numero % 10 === 4) {
    alert("El número ingresado termina en 4.");
  } else {
    alert("El número ingresado no termina en 4.");
  }
}   
function ejecicio4(){
    prompt ("Ordena numeros de menor a mayor (oprima Enter para continuar)");
    // Solicitar al usuario que ingrese tres números
  let numero1 = prompt("Ingrese un primer número:");
  let numero2 = prompt("Ingrese un segundo número:");
  let numero3 = prompt("Ingrese un tercer número:");

  // Crear un array con los números ingresados
  let numeros = [numero1, numero2, numero3];

  // Ordenar los números de menor a mayor
  numeros.sort(function(a, b) {
    return a - b;
  });

  // Mostrar los números ordenados en un mensaje de alerta
  alert("Los números ordenados de menor a mayor son: " + numeros.join(", "));
}


function ejecicio5(){
    prompt ("Calcula el precio total con descuentos segun pedido (oprima Enter para continuar)");
   
  let cantidad = prompt("Ingrese la cantidad de pares de zapatos:");

    const precioPorZapato = 80;

  // Calcular el precio total
  let precioTotal = cantidad * precioPorZapato;

  // Aplicar descuentos según la cantidad de zapatos
  if (cantidad > 30) {
        precioTotal *= 0.6;
  } else if (cantidad > 20) {
        precioTotal *= 0.8;
  } else if (cantidad > 10) {
       precioTotal *= 0.9;
}
alert("El precio total es: $" + precioTotal.toFixed(2));
}
function ejecicio6(){
    prompt ("Calcula el pago semanal a un Empleado (oprima Enter para continuar)");
    // Solicitar al usuario que ingrese el número de días trabajados
  let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en esta semana:"));

  // Precio por hora regular y por hora extra
  const precioHoraRegular = 20;
  const precioHoraExtra = 25;
 
     // Calcular pago semanal
    
    if (horasTrabajadas <= 40) {
      Pagosemanal = horasTrabajadas * precioHoraRegular;
    } else {
      let horasExtra = horasDia - 40;
      Pagosemanal = (40 * precioHoraRegular) + (horasExtra * precioHoraExtra);
    }
  // Mostrar el salario total con un mensaje de alerta
  alert("El salario total es: $" + Pagosemanal);
}
function ejecicio7(){
    prompt ("Calcula el precio total segun la membresia del cliente (oprima Enter para continuar)");
    // Solicitar al usuario que ingrese el tipo de membresía del cliente
  let tipoMembresia = prompt("Ingrese el tipo de membresía del cliente (A, B o C):");

  // Solicitar al usuario que ingrese el precio total base
  let precioBase = prompt("Ingrese el precio total base:");

  // Inicializar variable para el descuento
  let descuento = 0;

  // Calcular descuento según el tipo de membresía
  switch (tipoMembresia.toUpperCase()) {
    case 'A':
      descuento = 0.1;
      break;
    case 'B':
      descuento = 0.15;
      break;
    case 'C':
      descuento = 0.2;
      break;
    default:
      alert("Tipo de membresía inválido. Por favor, ingrese A, B o C.");
      return;
  }

  // Calcular el precio total con descuento
  let precioConDescuento = precioBase * (1 - descuento);

  // Mostrar el precio total con descuento con un mensaje de alerta
  alert("El precio final con descuento es: $" + precioConDescuento.toFixed(2));
}
function ejecicio8(){
    prompt ("Determina si el alumno aprobó el año (oprima Enter para continuar)");
    // Solicitar al usuario que ingrese las notas de los tres cursos
  let notaCurso1 = parseFloat(prompt("Ingrese la nota del primer curso:"));
  let notaCurso2 = parseFloat(prompt("Ingrese la nota del segundo curso:"));
  let notaCurso3 = parseFloat(prompt("Ingrese la nota del tercer curso:"));

  // Calcular el promedio de las tres notas
  let promedio = (notaCurso1 + notaCurso2 + notaCurso3) / 3;

  // Verificar si el alumno está aprobado según el promedio
  if (promedio >= 11) {
    alert("Alumno aprobado con nota de:" + promedio.toFixed(2));
  } else {
    alert("Alumno desaprobado con nota de: " + promedio.toFixed(2));
  }
}
function ejecicio9(){
    prompt ("Calcula el nuevo sueldo de un Empleado (oprima Enter para continuar)");
    // Solicitar al usuario que ingrese el sueldo actual
  let sueldoActual = parseFloat(prompt("Ingrese el sueldo actual del trabajador:"));

  // Determinar el aumento según el sueldo actual
  let aumento = 0;
  
  if (sueldoActual > 2000) {
    aumento = sueldoActual * 0.05; // 5% de aumento
      } else {
    aumento = sueldoActual * 0.1; // 10% de aumento
      }
  let nuevoSueldo = sueldoActual + aumento;

  // Mostrar el nuevo sueldo con un mensaje de alerta
  alert("El nuevo sueldo es: $"+nuevoSueldo); 
}
function ejecicio10(){
    prompt ("Determina si un número es par o impar (oprima Enter para continuar)");
// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
  alert("El número ingresado es par.");
} else {
  alert("El número ingresado es impar.");
}
}
function ejecicio11(){
    prompt ("Encuentra el mayor de 3 números (oprima Enter para continuar)");
// Solicitar al usuario que ingrese tres números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Determinar el mayor de los tres números
let mayor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
}

if (numero3 > mayor) {
  mayor = numero3;
}
// Mostrar el mayor de los tres números con un mensaje de alerta
alert("El mayor de los tres números ingresados es: " + mayor);
}
function ejecicio12(){
    prompt ("Encuentra el mayor de 2 números (oprima Enter para continuar)");
// Solicitar al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Determinar el mayor de los dos números
let mayor;

if (numero1 > numero2) {
  mayor = numero1;
} else {
  mayor = numero2;
}

// Mostrar el mayor de los dos números con un mensaje de alerta
alert("El mayor de los dos números ingresados es: " + mayor);
}
function ejecicio13(){
    prompt ("Identifica una vocal (oprima Enter para continuar)");

// Verificar si la letra es una vocal
let letra = prompt("Ingrese una letra:");
letra = letra.toLowerCase();
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    alert("La letra ingresada es una vocal."); // La letra es una vocal
} else {
    alert("La letra ingresada no es una vocal."); // La letra no es una vocal
}
}

function ejecicio14(){
    prompt ("Identifica un numero primo del 1 al 10 (oprima Enter para continuar)");
// Verificar si el número es menor o igual a 1
if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }

  // Verificar si el número es divisible por algún número entre 2 y la mitad de su valor
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false; // El número es divisible, por lo tanto, no es primo
    }
  }

  return true; // Si el número no es divisible por ningún número entre 2 y la mitad de su valor, entonces es primo


// Solicitar al usuario que ingrese un número entre 1 y 9
let numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 9:"));

// Verificar si el número ingresado es primo y mostrar el resultado con un mensaje de alerta
if (esPrimo(numeroUsuario)) {
  alert("El número " + numeroUsuario + " es primo.");
} else {
  alert("El número " + numeroUsuario + " no es primo.");
}
}

function ejecicio15(){
    prompt ("Convierta centímetros a pulgadas y libras a kilogramos (oprima Enter para continuar)");
    const CM_TO_INCH = 0.393701; // Factor de conversión de centímetros a pulgadas
    const LB_TO_KG = 0.453592; // Factor de conversión de libras a kilogramos
  
    // Solicitar al usuario que ingrese los valores de centímetros y libras
    let centimetros = parseFloat(prompt("Ingrese la longitud en centímetros:"));
    let libras = parseFloat(prompt("Ingrese el peso en libras:"));
  
    // Convertir centímetros a pulgadas
    let pulgadas = centimetros * CM_TO_INCH;
  
    // Convertir libras a kilogramos
    let kilogramos = libras * LB_TO_KG;
  
    // Mostrar los resultados de la conversión
    alert(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.");
    alert(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");

}
function ejecicio16(){
    prompt ("Encuentre el dia que corresponde a un número del 1 al 7 (oprima Enter para continuar)");

    let dia;

    // Solicitar al usuario que ingrese un número del 1 al 7
  let numero = parseInt(prompt("Ingrese un número del 1 al 7 para obtener el día de la semana:"));

    switch (numero) {
      case 1:
        dia = "Lunes";
        break;
      case 2:
        dia = "Martes";
        break;
      case 3:
        dia = "Miércoles";
        break;
      case 4:
        dia = "Jueves";
        break;
      case 5:
        dia = "Viernes";
        break;
      case 6:
        dia = "Sábado";
        break;
      case 7:
        dia = "Domingo";
        break;
      default:
        dia = "Número inválido. Por favor, ingrese un número del 1 al 7.";
        break;
    }  
       
  // Mostrar el día de la semana correspondiente con un mensaje de alerta
  alert("El día correspondiente al número ingresado es: " + dia);
}

function ejercicio17(){
    prompt ("Calculula la hora en 1 segundo despues (oprima Enter para continuar)");
    // Solicitar al usuario que ingrese la hora, minutos y segundos
  let hora = parseInt(prompt("Ingrese la hora (0-23):"));
  let minutos = parseInt(prompt("Ingrese los minutos (0-59):"));
  let segundos = parseInt(prompt("Ingrese los segundos (0-59):"));
  
  // Avanzar el tiempo en 1 segundo
  segundos++;

  // Verificar si se excede de 59 segundos
  if (segundos > 59) {
    segundos = 0; // Reiniciar los segundos
    minutos++; // Aumentar los minutos en 1
    
    // Verificar si se excede de 59 minutos
    if (minutos > 59) {
      minutos = 0; // Reiniciar los minutos
      hora++; // Aumentar la hora en 1
      
      // Verificar si se excede de 23 horas
      if (hora > 23) {
        hora = 0; // Reiniciar la hora
      }
    }
  }
    // Mostrar el nuevo tiempo con un mensaje de alerta
  alert("La hora despues de 1 segundo es: " + hora + ":" + minutos + ":" + segundos);
}
function ejecicio18(){

    // Solicitar al usuario que ingrese la cantidad de artículos del pedido
  let cantidadArticulos = parseInt(prompt("Ingrese la cantidad de artículos del pedido:"));

  let precioUnitario;

  // Determinar el precio unitario según la cantidad de artículos
  if (cantidadArticulos >= 1 && cantidadArticulos <= 9) {
    precioUnitario = 10;
  } else if (cantidadArticulos >= 10 && cantidadArticulos <= 99) {
    precioUnitario = 8;
  } else if (cantidadArticulos >= 100 && cantidadArticulos <= 499) {
    precioUnitario = 7;
  } else {
    precioUnitario = 6;
  }

  // Calcular el precio total
  let precioTotal = cantidadArticulos * precioUnitario;

  // Calcular la comisión para el vendedor (8.25% del total)
  let comisionVendedor = precioTotal * 0.0825;

  // Mostrar el precio total y la comisión para el vendedor con un mensaje de alerta
  alert("El precio total del pedido es: $" + precioTotal.toFixed(2) + "\nLa comisión para el vendedor es: $" + comisionVendedor.toFixed(2));
}

function ejecicio19(){
    prompt ("Pago semanal a empleados (oprima Enter para continuar)");

// Solicitar al usuario que ingrese el número identificador del empleado y la cantidad de días trabajados
  let identificadorEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1-4):"));
  let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (1-6):"));

  let salarioDiario;

  // Determinar el salario diario según el número identificador del empleado
  switch (identificadorEmpleado) {
    case 1:
      salarioDiario = 56;
      break;
    case 2:
      salarioDiario = 64;
      break;
    case 3:
      salarioDiario = 80;
      break;
    case 4:
      salarioDiario = 48;
      break;
    default:
      return "Número de identificador de empleado inválido.";
  }

    // Calcular el pago total al empleado
  let pagoTotal = salarioDiario * diasTrabajados;

 
alert("El pago es " + pagoTotal);
}
function ejecicio20(){
    prompt ("Operaciones con 4 numeros enteros positivos (oprima Enter para continuar)");
// Solicitar al usuario que ingrese los 4 números enteros positivos
let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

// Contadores para números pares y mayor
let pares = 0;
let mayor = num1;

// Verificar si num1 es par y actualizar el mayor
if (num1 % 2 === 0) {
  pares++;
}
if (num1 > mayor) {
  mayor = num1;
}

// Verificar si num2 es par y actualizar el mayor
if (num2 % 2 === 0) {
  pares++;
}
if (num2 > mayor) {
  mayor = num2;
}

// Verificar si num3 es par y actualizar el mayor
if (num3 % 2 === 0) {
  pares++;
}
if (num3 > mayor) {
  mayor = num3;
}

// Verificar si num4 es par y actualizar el mayor
if (num4 % 2 === 0) {
  pares++;
}
if (num4 > mayor) {
  mayor = num4;
}
alert("Hay "+pares+" numeros pares");
alert("El mayor de esos es "+mayor);
// Operación si el tercero es par: calcular el cuadrado del segundo
let resultadoOperacion1;
if (num3 % 2 === 0) {
  cuadradosegundo = num2 * num2;
  alert("El cuadrado del segundo es "+cuadradosegundo);
}

// Operación si el primero es menor que el cuarto: calcular la media de los 4 números
let resultadoOperacion2;
if (num1 < num4) {
  media = (num1 + num2 + num3 + num4) / 4;
  alert("La media de los 4 es "+media);
}

// Operación si el segundo es mayor que el tercero y el tercero está entre 50 y 700
let resultadoOperacion3;
if (num2 > num3 && num3 >= 50 && num3 <= 700) {
  suma = num1 + num2 + num3 + num4;
  alert("La suma de los 4 es "+suma);
}

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