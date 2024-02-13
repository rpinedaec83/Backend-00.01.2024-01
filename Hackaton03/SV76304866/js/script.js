function playSound(soundFile) {
    var audio = document.getElementById("myAudio");
    audio.src = soundFile;
    audio.play();
  }


  //Hacer un algoritmo en JavaScript que lea un 
  //número por el teclado y determinar si tiene tres dígitos.
function ejercicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}


//El número ingresado se almacena en la variable numero.
function ejercicio2() {
    let numero = prompt("Ingrese un número entero:");
    numero = parseInt(numero);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
    } else if (numero < 0) {
        alert("El número ingresado es negativo.");
    } else {
        alert("El número ingresado no es negativo.");
    }
}


// Se obtiene la longitud del número ingresado utilizando 
// la propiedad length de la cadena de texto en la variable 
// numero. La longitud del número se almacena en la variable nroCaracteres.
function ejercicio3() {
    let numero = prompt("Ingrese un número:");

    numero = parseFloat(numero);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
    } else {
        let numeroComoTexto = numero.toString();
        let ultimoDigito = numeroComoTexto.charAt(numeroComoTexto.length - 1);

        if (ultimoDigito === '4') {
            alert("El número ingresado si termina en 4.");
        } else {
            alert("El número ingresado no termina en 4.");
        }
    }
}

//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

function ejercicio4() {
    let num1 = parseInt(prompt("Ingrese el primer número entero:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingrese números enteros válidos.");
        return;
    }

    let numerosOrdenados = [num1, num2, num3].sort(function(a, b) {
        return a - b;
    });
    alert("Números ordenados de menor a mayor: " + numerosOrdenados.join(", "));
}


// Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una 
// promoción de descuento para vender al mayor, esta dependerá del número de 
// zapatos que se compren. Si son más de diez, se les dará un 10% de descuento 
// sobre el total de la compra; si el número de zapatos es mayor de veinte pero 
// menor de treinta, se le otorga un 20% de descuento; y si son más treinta 
// zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio5() {

    const precioZapato = 80;
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos a comprar:"));

    if (isNaN(cantidadZapatos) || cantidadZapatos < 0) {
        alert("Por favor, ingrese una cantidad válida de zapatos.");
        return;
    }

    let totalSinDescuento = cantidadZapatos * precioZapato;
    let descuento = 0;

    if (cantidadZapatos > 30) {
        descuento = 0.4; 
    } else if (cantidadZapatos > 20) {
        descuento = 0.2;
    } else if (cantidadZapatos > 10) {
        descuento = 0.1; 
    }

    let totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento);

    alert("Cantidad de zapatos: " + cantidadZapatos +
          "\nPrecio por zapato: $" + precioZapato.toFixed(2) +
          "\nTotal sin descuento: $" + totalSinDescuento.toFixed(2) +
          "\nDescuento aplicado: " + (descuento * 100) + "%" +
          "\nTotal con descuento: $" + totalConDescuento.toFixed(2));
}


// Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál 
// será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará 
// $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le 
// pagarán a $25 por hora.

function ejercicio6() {
  
    const precioPorHoraNormal = 20;
    const precioPorHoraExtra = 25;

    let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana:"));

    if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
        alert("Por favor, ingrese una cantidad válida de horas trabajadas.");
        return;
    }

    let sueldo;

    if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * precioPorHoraNormal;
    } else {
        sueldo = 40 * precioPorHoraNormal + (horasTrabajadas - 40) * precioPorHoraExtra;
    }

    alert("Horas trabajadas: " + horasTrabajadas +
          "\nSueldo semanal: $" + sueldo.toFixed(2));
}


// Hacer un algoritmo en JavaScript para una tienda de helado que 
// da un descuento por compra a sus clientes con membresía dependiendo 
// de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y 
// tipo C. Los descuentos son los siguientes:

// Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
function ejercicio7() {
    let tipoMembresia = prompt("Ingrese su tipo de membresía (A, B, C):");

    let descuento;

    switch (tipoMembresia.toUpperCase()) {
        case 'A':
            descuento = 0.10; 
            break;
        case 'B':
            descuento = 0.15; 
            break;
        case 'C':
            descuento = 0.20; 
            break;
        default:
            alert("Tipo de membresía no válido. Por favor, ingrese A, B o C.");
            return;
    }
    alert("Tipo de membresía: " + tipoMembresia.toUpperCase() +
          "\nDescuento aplicado: " + (descuento * 100) + "%");
}

// Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y 
// determinar si el estudiante aprobó o no.
function ejercicio8() {

    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, ingrese notas válidas.");
        return;
    }
    let promedio = (nota1 + nota2 + nota3) / 3;
    let mensajeResultado = "El estudiante ";

    if (promedio >= 7) {
        mensajeResultado += "aprobó";
    } else {
        mensajeResultado += "no aprobó";
    }
    alert("Notas ingresadas: " + nota1 + ", " + nota2 + ", " + nota3 +
          "\nPromedio: " + promedio.toFixed(2) +
          "\n" + mensajeResultado);
}

// Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe 
// tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos 
// de $2000 su aumento será de un 10%.
function ejercicio9() {
    
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

    if (isNaN(salarioActual) || salarioActual < 0) {
        alert("Por favor, ingrese un salario válido.");
        return;
    }
    let aumento;

    if (salarioActual > 2000) {
        aumento = salarioActual * 0.05; 
    } else {
        aumento = salarioActual * 0.10; 
    }
    let nuevoSalario = salarioActual + aumento;

    alert("Salario actual: $" + salarioActual.toFixed(2) +
          "\nAumento aplicado: $" + aumento.toFixed(2) +
          "\nNuevo salario: $" + nuevoSalario.toFixed(2));
}


//Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10() {

    let numero = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }
    let resultado;

    if (numero % 2 === 0) {
        resultado = "El número ingresado es par.";
    } else {
        resultado = "El número ingresado es impar.";
    }
    alert(resultado);
}

//Hacer un algoritmo en JavaScript que lea tres números 
//y diga cuál es el mayor.
function ejercicio11() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    let mayor;

    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else {
        mayor = numero3;
    }

    alert("El número mayor es: " + mayor);
}


/*
  Ejercicio 12:
  Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
*/

function ejercicio12() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    let mayor;

    if (numero1 > numero2) {
        mayor = numero1;
    } else if (numero2 > numero1) {
        mayor = numero2;
    } else {
        alert("Los números ingresados son iguales.");
        return;
    }

    alert("El número mayor es: " + mayor);
}


/*
  Ejercicio 13:
  Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
*/

function ejercicio13() {
    let letra = prompt("Ingrese una letra:").toLowerCase();

    if (letra.length !== 1 || !(/[a-z]/.test(letra))) {
        alert("Por favor, ingrese una única letra válida.");
        return;
    }

    let esVocal = "aeiou".includes(letra);

    if (esVocal) {
        alert("La letra ingresada es una vocal.");
    } else {
        alert("La letra ingresada no es una vocal.");
    }
}

/*
  Ejercicio 14:
  Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
*/

function ejercicio14() {
    let numero = parseInt(prompt("Ingrese un entero positivo del 1 al diez y al 9:"));

    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert("Por favor, ingrese un entero positivo del 1 al diez y al 9.");
        return;
    }

    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert("El número ingresado es primo.");
    } else {
        alert("El número ingresado no es primo.");
    }
}

/*
  Ejercicio 15:
  Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
*/

function ejercicio15() {
    // Conversión de centímetros a pulgadas
    let centimetros = parseFloat(prompt("Ingrese la longitud en centímetros:"));

    if (isNaN(centimetros) || centimetros < 0) {
        alert("Por favor, ingrese una longitud válida en centímetros.");
        return;
    }

    let pulgadas = centimetros / 2.54;

    alert(centimetros.toFixed(2) + " centímetros equivalen a " + pulgadas.toFixed(2) + " pulgadas.");

    // Conversión de libras a kilogramos
    let libras = parseFloat(prompt("Ingrese el peso en libras:"));

    if (isNaN(libras) || libras < 0) {
        alert("Por favor, ingrese un peso válido en libras.");
        return;
    }

    let kilogramos = libras / 2.20462;

    alert(libras.toFixed(2) + " libras equivalen a " + kilogramos.toFixed(2) + " kilogramos.");
}

/*
  Ejercicio 16:
  Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
*/

function ejercicio16() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

    if (isNaN(numero) || numero < 1 || numero > 7) {
        alert("Por favor, ingrese un número válido del 1 al 7.");
        return;
    }

    let dia;

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
    }

    alert("El número " + numero + " corresponde a " + dia + ".");
}

/*
  Ejercicio 17:
  Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
*/

function ejercicio17() {
    let horaActual = prompt("Ingrese la hora en formato HH:MM:SS:");

    if (!/^\d{2}:\d{2}:\d{2}$/.test(horaActual)) {
        alert("Por favor, ingrese una hora válida en formato HH:MM:SS.");
        return;
    }

    let partesHora = horaActual.split(":");
    let horas = parseInt(partesHora[0]);
    let minutos = parseInt(partesHora[1]);
    let segundos = parseInt(partesHora[2]);

    let nuevaHora = new Date(0, 0, 0, horas, minutos, segundos + 1);
    let horaConUnSegundo = nuevaHora.toLocaleTimeString();

    alert("La hora dentro de un segundo es: " + horaConUnSegundo);
}


/*
  Ejercicio 18:
  Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes.
  Los clientes pueden adquirir los artículos por cantidad con diferentes precios.
  Calcular el precio total para el cliente y la ganancia para el vendedor.
*/

function ejercicio18() {
    let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));

    if (isNaN(cantidadCDs) || cantidadCDs <= 0) {
        alert("Por favor, ingrese una cantidad válida de CDs.");
        return;
    }

    let precioUnitario;

    if (cantidadCDs <= 9) {
        precioUnitario = 10;
    } else if (cantidadCDs <= 99) {
        precioUnitario = 8;
    } else if (cantidadCDs <= 499) {
        precioUnitario = 7;
    } else {
        precioUnitario = 6;
    }

    let precioTotalCliente = cantidadCDs * precioUnitario;
    let gananciaVendedor = precioTotalCliente * 0.0825;

    alert("Cantidad de CDs: " + cantidadCDs +
          "\nPrecio unitario: $" + precioUnitario.toFixed(2) +
          "\nPrecio total para el cliente: $" + precioTotalCliente.toFixed(2) +
          "\nGanancia para el vendedor: $" + gananciaVendedor.toFixed(2));
}


/*
  Ejercicio 19:
  Hacer un algoritmo en JavaScript para una heladería con diferentes tipos de empleados.
  Calcular el salario correspondiente para un empleado según su número identificador y la cantidad de días trabajados.
*/

function ejercicio19() {
    let empleadoId = parseInt(prompt("Ingrese el número identificador del empleado (1 a 4):"));

    if (isNaN(empleadoId) || empleadoId < 1 || empleadoId > 4) {
        alert("Por favor, ingrese un número identificador válido (1 a 4).");
        return;
    }

    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (1 a 6):"));

    if (isNaN(diasTrabajados) || diasTrabajados < 1 || diasTrabajados > 6) {
        alert("Por favor, ingrese una cantidad válida de días trabajados (1 a 6).");
        return;
    }

    let salarioDiario;

    switch (empleadoId) {
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
    }

    let salarioTotal = diasTrabajados * salarioDiario;

    alert("Número identificador del empleado: " + empleadoId +
          "\nSalario diario: $" + salarioDiario.toFixed(2) +
          "\nDías trabajados en la semana: " + diasTrabajados +
          "\nSalario total a pagar: $" + salarioTotal.toFixed(2));
}


/*
  Ejercicio 20:
  Hacer un algoritmo en JavaScript que lea 4 números enteros positivos y realice varias operaciones.
*/

function ejercicio20() {
    let numeros = [];

    for (let i = 1; i <= 4; i++) {
        let numero = parseInt(prompt("Ingrese el número entero positivo #" + i + ":"));

        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingrese un número entero positivo válido.");
            return;
        }

        numeros.push(numero);
    }

    // ¿Cuántos números son Pares?
    let pares = numeros.filter(numero => numero % 2 === 0).length;

    // ¿Cuál es el mayor de todos?
    let mayor = Math.max(...numeros);

    // Si el tercero es par, calcular el cuadrado del segundo.
    if (numeros[2] % 2 === 0) {
        numeros[1] = Math.pow(numeros[1], 2);
    }

    // Si el primero es menor que el cuarto, calcular la media de los 4 números.
    if (numeros[0] < numeros[3]) {
        let media = numeros.reduce((sum, num) => sum + num, 0) / 4;
        alert("La media de los 4 números es: " + media.toFixed(2));
        return;
    }

    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números.
    if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
        let suma = numeros.reduce((sum, num) => sum + num, 0);
        alert("La suma de los 4 números es: " + suma);
    } else {
        alert("Operaciones realizadas:" +
              "\n¿Cuántos números son Pares? " + pares +
              "\n¿Cuál es el mayor de todos? " + mayor +
              "\nSi el tercero es par, calcular el cuadrado del segundo. (Resultante: [" + numeros.join(", ") + "])" +
              "\nSi el primero es menor que el cuarto, calcular la media de los 4 números. (No cumple)" +
              "\nSi el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números. (No cumple)");
    }
}

/*
  Ejercicio 21:
  Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
*/

function ejercicio21() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número entero no negativo.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    alert("El factorial de " + numero + " es: " + factorial);
}


/*
  Ejercicio 22:
  Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
*/

function ejercicio22() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let suma = (n * (n + 1)) / 2;

    alert("La suma de los primeros " + n + " números es: " + suma);
}

/*
  Ejercicio 23:
  Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
*/

function ejercicio23() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let sumaImpares = 0;

    for (let i = 1; i <= n; i += 2) {
        sumaImpares += i;
    }

    alert("La suma de los números impares menores o iguales a " + n + " es: " + sumaImpares);
}

/*
  Ejercicio 24:
  Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
*/

function ejercicio24() {
    let sumaPares = 0;

    for (let i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }

    alert("La suma de todos los números pares hasta el 1000 es: " + sumaPares);
}

/*
  Ejercicio 25:
  Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
*/

function ejercicio25() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número entero no negativo.");
        return;
    }

    let factorial = 1;

    while (numero > 0) {
        factorial *= numero;
        numero--;
    }

    alert("El factorial de este número es: " + factorial);
}

/*
  Ejercicio 26:
  Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
*/

function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));

    if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
        alert("Por favor, ingrese valores numéricos y asegúrese de que el divisor no sea cero.");
        return;
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert("Cociente: " + cociente + "\nResto: " + resto);
}

/*
  Ejercicio 27:
  Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos.
  Se debe acabar el programa al ingresar un número negativo.
*/

function ejercicio27() {
    let numeros = [];
    let suma = 0;
    let contador = 0;

    while (true) {
        let numero = parseFloat(prompt("Ingrese un número positivo (ingrese un número negativo para finalizar):"));

        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            continue;
        }

        if (numero < 0) {
            break;
        }

        numeros.push(numero);
        suma += numero;
        contador++;
    }

    if (contador === 0) {
        alert("No se ingresaron números positivos.");
    } else {
        let media = suma / contador;
        alert("La media de los números positivos ingresados es: " + media.toFixed(2));
    }
}

/*
  Ejercicio 28:
  Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
*/

function ejercicio28() {
    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++;
    } while (contador <= 100);

    alert("La suma de los primeros cien números es: " + suma);
}

/*
  Ejercicio 29:
  Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
*/

function ejercicio29() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros cien números es: " + suma);
}

/*
  Ejercicio 30:
  Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
*/

function ejercicio30() {
    let suma = 0;

    for (let contador = 1; contador <= 100; contador++) {
        suma += contador;
    }

    alert("La suma de los primeros cien números es: " + suma);
}

ejercicio31:
 /*
  Ejercicio 31:
  Hacer un algoritmo en JavaScript para calcular la media de los números pares e impares, 
  sólo se ingresarán diez números.
*/

function ejercicio31() {
    let sumaPares = 0;
    let contadorPares = 0;
    let sumaImpares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt("Ingrese el número #" + i + ":"));

        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            i--;
            continue;
        }

        if (numero % 2 === 0) {
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    let mediaPares = contadorPares === 0 ? 0 : sumaPares / contadorPares;
    let mediaImpares = contadorImpares === 0 ? 0 : sumaImpares / contadorImpares;

    alert("Media de números pares: " + mediaPares.toFixed(2) +
          "\nMedia de números impares: " + mediaImpares.toFixed(2));
}

/*
  Ejercicio 32:
  Se quiere saber cuál es la ciudad con la población de más personas, 
  son tres provincias y once ciudades. Hacer un algoritmo en JavaScript que nos permita saber eso.
  (NO HAY DATOS SUFICIENTES)
*/

function ejercicio32() {
    let ciudadConMasPoblacion;
    let poblacionMaxima = -1;

    for (let provincia = 1; provincia <= 3; provincia++) {
        for (let ciudad = 1; ciudad <= 11; ciudad++) {
            let poblacion = parseInt(prompt("Ingrese la población de la ciudad #" + ciudad + " de la provincia #" + provincia + ":"));

            if (isNaN(poblacion) || poblacion < 0) {
                alert("Por favor, ingrese una población válida.");
                ciudad--;
                continue;
            }

            if (poblacion > poblacionMaxima) {
                poblacionMaxima = poblacion;
                ciudadConMasPoblacion = "Ciudad #" + ciudad + " de la Provincia #" + provincia;
            }
        }
    }

    if (poblacionMaxima === -1) {
        alert("No se ingresaron datos de población.");
    } else {
        alert("La ciudad con la población más grande es: " + ciudadConMasPoblacion + " con una población de " + poblacionMaxima + " personas.");
    }
}

/*
  Ejercicio 33:
  Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
*/

function ejercicio33() {
    let continuar = true;

    while (continuar) {
        alert("Realizando alguna tarea...");

        continuar = confirm("¿Desea continuar con el programa?");
    }

    alert("Fin del programa.");
}

/*
  Ejercicio 34:
  Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
*/

function ejercicio34() {
    let tablaMultiplicar = "";

    for (let multiplicador = 1; multiplicador <= 9; multiplicador++) {
        tablaMultiplicar += `Tabla de multiplicar del ${multiplicador}:\n`;

        for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
            let resultado = multiplicador * multiplicando;
            tablaMultiplicar += `${multiplicador} x ${multiplicando} = ${resultado}\n`;
        }

        tablaMultiplicar += "\n";
    }
    alert(tablaMultiplicar);
}


/*
  Ejercicio 35:
  Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, 
  se debe ingresar sólo veinte números.
*/

function ejercicio35() {
    let numeroMayor = Number.NEGATIVE_INFINITY;
    let numeroMenor = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= 20; i++) {
        let numero = parseFloat(prompt("Ingrese el número #" + i + ":"));

        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            i--;
            continue;
        }

        if (numero > numeroMayor) {
            numeroMayor = numero;
        }

        if (numero < numeroMenor) {
            numeroMenor = numero;
        }
    }

    if (numeroMayor === Number.NEGATIVE_INFINITY || numeroMenor === Number.POSITIVE_INFINITY) {
        alert("No se ingresaron números válidos.");
    } else {
        alert("Número mayor: " + numeroMayor + "\nNúmero menor: " + numeroMenor);
    }
}

/*
  Ejercicio 36:
  Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
*/

function ejercicio36() {
    let n = parseInt(prompt("Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    alert("Serie de Fibonacci de " + n + " términos: " + fibonacci.join(", "));
}

/*
  Ejercicio 37:
  Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
*/

function ejercicio37() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        alert("Por favor, ingrese dos números enteros positivos.");
        return;
    }

    let mcd = calcularMCD(numero1, numero2);

    alert("El M.C.D de " + numero1 + " y " + numero2 + " es: " + mcd);
}

function calcularMCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

/*
  Ejercicio 38:
  Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
*/

function ejercicio38() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es un número perfecto:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let sumaDivisores = calcularSumaDivisores(numero);

    if (sumaDivisores === numero) {
        alert(numero + " es un número perfecto.");
    } else {
        alert(numero + " no es un número perfecto.");
    }
}

function calcularSumaDivisores(numero) {
    let suma = 1; // 1 es divisor de todos los números

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            suma += i;

            if (i !== numero / i) {
                suma += numero / i;
            }
        }
    }

    return suma;
}

/*
  Ejercicio 39:
  Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz.
  La fórmula que se debe aplicar es:
  Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
*/

function ejercicio39() {
    let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de Pi (mayor número, mayor precisión):"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let piAproximado = calcularPi(n);

    alert("Aproximación de Pi con " + n + " términos de la serie de Gregory-Leibniz: " + piAproximado);
}

function calcularPi(n) {
    let pi = 0;

    for (let i = 0; i < n; i++) {
        pi += (4 / (2 * i + 1)) * (i % 2 === 0 ? 1 : -1);
    }

    return pi;
}


/*
  Ejercicio 40:
  Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha.
  La fórmula que se debe aplicar es:
  Pi = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
*/

function ejercicio40() {
    let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de Pi (mayor número, mayor precisión):"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    let piAproximado = calcularPi(n);

    alert("Aproximación de Pi con " + n + " términos de la serie de Nilakantha: " + piAproximado);
}

function verEjercicios() {
    var ejercicios = `Ejercicios:
    1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento 
       para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, 
       se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor 
       de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos 
       se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
       se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
       entonces las horas extras se le pagarán a $25 por hora.
    7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a 
       sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, 
       tipo B y tipo C. Los descuentos son los siguientes:
       - Tipo A: 10% de descuento
       - Tipo B: 15% de descuento
       - Tipo C: 20% de descuento
    8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el 
       estudiante aprobó o no.
    9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar 
       en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su 
       aumento será de un 10%.
    10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
    12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
    14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al 9 y determine si es un 
        número primo.
    15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    18. Hacer un algoritmo en JavaScript para una empresa que se encarga de la venta y distribución de CD 
        vírgenes. Los clientes pueden adquirir los artículos por cantidad con descuentos según la cantidad 
        comprada.
    19. Hacer un algoritmo en JavaScript para una heladería que tiene empleados de diferentes tipos y desea 
        calcular el pago correspondiente a cada uno.
    20. Hacer un algoritmo en JavaScript que lea 4 números enteros positivos y realice diferentes operaciones.
    21. Hacer un algoritmo en JavaScript para calcular el factorial de un número.
    22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
    23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
    24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
    25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
    26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
    27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números 
        positivos, se debe acabar el programa al ingresar un número negativo.
    28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números 
        con un ciclo repetir.
    29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números 
        con un ciclo mientras.
    30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien 
        números con un ciclo para.
    31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e 
        impares, sólo se ingresará diez números.
    32. Se quiere saber cuál es la ciudad con la población de más personas, son tres 
        provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber 
        eso. (NO HAY DATOS SUFICIENTES).
    33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
    34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números 
        del uno nueve.
    35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, 
        se debe ingresar sólo veinte números.
    36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
    37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del 
        algoritmo de Euclides.
    38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
    39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con 
        la serie de Gregory-Leibniz. La formula que se debe aplicar es:

        Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
    40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con 
        la serie de Nilakantha. La formula que se debe aplicar es:

        Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...`;
  
    var ventanaEmergente = window.open("", "", "height=600,width=600");
    ventanaEmergente.document.write("<pre>" + ejercicios + "</pre>");
  }



