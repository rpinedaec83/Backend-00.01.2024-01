function ejecicio1(){
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
    let numero = prompt("Escriba su numero");
    if(numero>0){
        alert("El nùmero es positivo")
    }
    else{
        alert("El nùmero es negativo");
    }
}

function ejecicio3(){
    let numero = prompt("Escriba su numero");
    if(numero%10===4){
        alert("El nùmero termina en 4")
    }
    else{
        alert("El nùmero no termina en 4");
    }
}

function ejecicio4(){
    let numero1 = prompt("Escriba el primer numero");
    let numero2 = prompt("Escriba el segundo numero");
    let numero3 = prompt("Escriba el tercer numero");
    numeros = [numero1, numero2, numero3].sort((a, b) => a - b);

    alert('Números de menor a mayor: ' +numeros.join(' , '));
}

function ejecicio5(){
    let Cantzap = prompt("Ingrese la cantidad de zapatos que desea comprar");
    precioUnitario = 80;
    total= Cantzap*precioUnitario;
    if(Cantzap > 30){
        descuento=0.4;
    }    else if(Cantzap > 20){
        descuento=0.2;
    }    else if(Cantzap > 10){
        descuento=0.1;
    }
    const montoFinal = total*(1-descuento);
    alert('Se debe pagar: '  +montoFinal);
}

function ejecicio6(){
    let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas en la semana");
    tarifanormal = 20;
    tarifaExtra = 25;
    
    if(horasTrabajadas <= 40) {
        sueldoSemana = horasTrabajadas * tarifanormal;
    } else {
        const horasNormales = 40;
        const horasExtras = horasTrabajadas - horasNormales;
        sueldoSemana = (horasNormales * tarifanormal) + (horasExtras * tarifaExtra);
      }

    alert('El sueldo es: '  +sueldoSemana);
}

function ejecicio7(){
let tipocliente = prompt("Ingrese el tipo de membresìa (A,B o C)");
let monto= prompt("Ingrese el tipo de la compra");
if(tipocliente==='A'){
    totalpagar=0.9*monto;
}    else if(tipocliente==='B'){
    totalpagar=0.85*monto;
}    else if(tipocliente==='C'){
    totalpagar=0.8*monto;
}
alert('Total a pagar:' +totalpagar);
}

function ejecicio8(){
    let nota1 = prompt("Ingrese la primera nota");
    let nota2 = prompt("Ingrese la segunda nota");
    let nota3 = prompt("Ingrese la tercera nota");
    notapromedio=(nota1/3+nota2/3+nota3/3)
    if(notapromedio>=12){
        alert('El estudiante aprobò con: ' +notapromedio);
    }    else{
        alert('El estudiante desaprobò con: ' +notapromedio);
    } 
    }

function ejecicio9(){
    let sueldo = prompt("Ingrese su sueldo actual en $");
    porcentaje1=0.05;
    porcentaje2=0.10;
    if(sueldo>2000){
        alert('Su aumento serà de ' +sueldo*porcentaje1);
    }    else{
        alert('Su aumento serà de ' +sueldo*porcentaje2);
    } 
    }

function ejecicio10(){
    let numero = prompt("Escriba su numero");
    if(numero%2===0){
        alert("El nùmero ingresado es par")
    }
    else{
        alert("El nùmero ingresado es impar");
    }
}

function ejecicio11(){
    let numero1 = prompt("Ingrese el primer nùmero");
    let numero2 = prompt("Ingrese el segundo nùmero");
    let numero3 = prompt("Ingrese el tercer nùmero");
    let mayor;
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else if (numero3 >= numero1 && numero3 >= numero2){
        mayor = numero3;
    }
    alert("El mayor nùmero es: " +mayor);
}

function ejecicio12(){
    let numero1 = prompt("Ingrese el primer nùmero");
    let numero2 = prompt("Ingrese el segundo nùmero");
    let mayor;
    if (numero1 >= numero2) {
        mayor = numero1;
    } else {
        mayor = numero2;
    }
    alert("El mayor nùmero es: " +mayor);
}

function ejecicio13(){
    let letra = prompt("Ingrese una letra en minùscula");
    if (letra === 'a'||letra === 'e'||letra === 'i'||letra === 'o'||letra === 'u') {
        alert("El caracter es una vocal");
    } else {
        alert("El caracter es una consonante");
    }

}

function ejecicio14(){
    let numero = prompt("Ingrese un nùmero entero del 1 al 10");
    if(10>=numero){
    if (numero === '2'||numero === '3'||numero === '5'||numero === '7') {
        alert("El nùmero es primo");
    } else{
        alert("El nùmero no es primo");
    }
    }
    else {
        alert("El nùmero es mayor a 10, ingrese un nùmero entero menor a 10")
    }
}

function ejecicio15(){
    let centi = prompt("Ingrese una longitud en centimetros: ");
    centi2= centi/2.54;
    alert("La longitud en pulgadas es: " +centi2);
    
    let peso = prompt("Ingrese el peso en libras: ");
    peso2= peso*0.453592
    alert("El peso en kilogramos es: " +peso2);
}

function ejecicio16(){
    let numero = prompt("Ingrese un nùmero del 1 al 7: ");
   switch(numero){
    case '1':
    alert("El dìa es lunes");
    break;

    case '2':
    alert("El dìa es martes");
    break;

    case '3':
    alert("El dìa es miercoles");
    break;

    case '4':
    alert("El dìa es jueves");
    break;

    case '5':
    alert("El dìa es viernes");
    break;

    case '6':
    alert("El dìa es sabado");
    break;

    case '7':
    alert("El dìa es domingo");
    break;

    default :
    alert("Ingrese un nùmero del 1 al 7");
    }
}


function ejecicio17(){
    let horaIngresada = prompt("Ingrese la hora en formato HH:mm:ss");
}

function ejecicio18(){
    let cantidadCDs = prompt("Ingrese la cantidad de CDs a vender:");

    // Calcular el precio total para el cliente y la ganancia para el vendedor
    let precioTotal;
    let gananciaVendedor;
    
    if (cantidadCDs >= 1 && cantidadCDs <= 9) {
      precioTotal = cantidadCDs * 10;
    } else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
      precioTotal = cantidadCDs * 8;
    } else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
      precioTotal = cantidadCDs * 7;
    } else if (cantidadCDs >= 500) {
      precioTotal = cantidadCDs * 6;
    } else {
      // Si la cantidad ingresada no es válida
      alert("Cantidad de CDs no válida. Por favor, ingrese una cantidad válida.");
    }
    
    // Calcular la ganancia para el vendedor (8.25% de la venta)
    gananciaVendedor = precioTotal * 0.0825;
    
    // Mostrar los resultados mediante alert
    if (precioTotal !== undefined) {
      alert(`Precio total para el cliente: $${precioTotal.toFixed(2)}`);
      alert(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
    }
}

function ejecicio19(){
    let numeroIdentificador = prompt("Ingrese el número identificador del empleado(1=cajero, 2=servidor, 3=preparador, 4=mantenimiento):");

// Solicitar al usuario que ingrese la cantidad de días trabajados en la semana
let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));

// Definir salarios diarios para cada tipo de empleado
const salarioCajero = 56;
const salarioServidor = 64;
const salarioPreparador = 80;
const salarioMantenimiento = 48;

// Calcular el salario total según el tipo de empleado y la cantidad de días trabajados
let salarioTotal;

switch (numeroIdentificador) {
  case '1':
    salarioTotal = salarioCajero * diasTrabajados;
    break;
  case '2':
    salarioTotal = salarioServidor * diasTrabajados;
    break;
  case '3':
    salarioTotal = salarioPreparador * diasTrabajados;
    break;
  case '4':
    salarioTotal = salarioMantenimiento * diasTrabajados;
    break;
  default:
    alert("Número identificador de empleado no válido.");
}

// Mostrar el salario total mediante alert
if (!isNaN(salarioTotal)) {
  alert(`El salario total para el empleado es: $${salarioTotal}`);
}
}

function ejecicio20(){
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número:"));
    
    // Inicializar el contador de números pares
    let numerosPares = 0;
    
    // Verificar si los números son pares y contarlos
    if (num1 % 2 === 0) {
      numerosPares++;
    }
    if (num2 % 2 === 0) {
      numerosPares++;
    }
    if (num3 % 2 === 0) {
      numerosPares++;
    }
    if (num4 % 2 === 0) {
      numerosPares++;
    }
    
    // Mostrar la cantidad de números pares mediante alert
    alert(`Cantidad de números pares: ${numerosPares}`);
    
    // Encontrar el mayor de los números
    let mayor = Math.max(num1, num2, num3, num4);
    
    // Realizar operaciones condicionales
    if (num3 % 2 === 0) {
      let cuadradoSegundo = num2 * num2;
      alert(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
    }
    
    if (num1 < num4) {
      let media = (num1 + num2 + num3 + num4) / 4;
      alert(`La media de los 4 números es: ${media}`);
    }
    
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
      let sumaTotal = num1 + num2 + num3 + num4;
      alert(`La suma de los 4 números es: ${sumaTotal}`);
    }
}


function ejecicio21(){
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

    // Validar si el número es un entero positivo
    if (!isNaN(numero) && numero >= 0) {
      // Calcular el factorial
      let factorial = 1;
    
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
    
      // Mostrar el resultado mediante alert
      alert(`El factorial de ${numero} es: ${factorial}`);
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo.");
    }

}

function ejecicio22(){
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));

    // Validar si el número ingresado es válido
    if (!isNaN(n) && n >= 1) {
      // Calcular la suma de los primeros n números
      let suma = 0;
    
      for (let i = 1; i <= n; i++) {
        suma += i;
      }
    
      // Mostrar el resultado mediante alert
      alert(`La suma de los primeros ${n} números es: ${suma}`);
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo mayor o igual a 1.");
    }
}

function ejecicio23(){
    let n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a n:"));

    // Validar si el número ingresado es válido
    if (!isNaN(n) && n >= 1) {
      // Calcular la suma de los números impares menores o iguales a n
      let sumaImpares = 0;
    
      for (let i = 1; i <= n; i += 2) {
        sumaImpares += i;
      }
    
      // Mostrar el resultado mediante alert
      alert(`La suma de los números impares menores o iguales a ${n} es: ${sumaImpares}`);
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo mayor o igual a 1.");
    }
}

function ejecicio24(){
    let sumaPares = 0;

    // Calcular la suma de los números pares hasta 1000
    for (let i = 2; i <= 1000; i += 2) {
      sumaPares += i;
    }
    
    // Mostrar el resultado mediante alert
    alert(`La suma de todos los números pares hasta 1000 es: ${sumaPares}`);
}

function ejecicio25(){
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

    // Validar si el número es un entero positivo
    if (!isNaN(numero) && numero >= 0) {
      // Calcular el factorial
      let factorial = 1;
    
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
    
      // Mostrar el resultado mediante alert
      alert(`El factorial de ${numero} es: ${factorial}`);
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo.");
    }

}

function ejecicio26(){
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));

    // Solicitar al usuario que ingrese el divisor
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    
    // Validar si los números ingresados son válidos
    if (!isNaN(dividendo) && !isNaN(divisor) && divisor !== 0) {
      // Inicializar variables para almacenar el cociente y el resto
      let cociente = 0;
      let resto = dividendo;
    
      // Calcular el cociente y el resto por medio de restas sucesivas
      while (resto >= divisor) {
        resto -= divisor;
        cociente++;
      }
    
      // Mostrar el resultado mediante alert
      alert(`El cociente es: ${cociente}\nEl resto es: ${resto}`);
    } else {
      // Mostrar mensaje de error si los números no son válidos
      alert("Por favor, ingrese números enteros y asegúrese de que el divisor no sea cero.");
    }
}

function ejecicio27(){
    let suma = 0;
    let cantidad = 0;
    
    // Solicitar al usuario ingresar números positivos hasta que se ingrese un número negativo
    let numero = parseFloat(prompt("Ingrese un número positivo (o un número negativo para finalizar):"));
    
    while (numero >= 0 || isNaN(numero)) {
      if (isNaN(numero)) {
        // Mostrar mensaje de error si no se ingresa un número válido
        alert("Por favor, ingrese un número válido.");
      } else {
        // Actualizar la suma y la cantidad de números
        suma += numero;
        cantidad++;
      }
    
      // Solicitar el siguiente número
      numero = parseFloat(prompt("Ingrese otro número positivo (o un número negativo para finalizar):"));
    }
    
    // Calcular la media si se ingresaron números positivos
    if (cantidad > 0) {
      let media = suma / cantidad;
      alert(`La media de los números positivos ingresados es: ${media.toFixed(2)}`);
    } else {
      // Mostrar mensaje si no se ingresaron números positivos
      alert("No se ingresaron números positivos.");
    }
}

function ejecicio28(){
    let suma = 0;

    // Utilizar un ciclo repetitivo para sumar los primeros cien números
    let contador = 1;
    do {
      suma += contador;
      contador++;
    } while (contador <= 100);
    
    // Mostrar el resultado mediante alert
    alert(`La suma de los primeros cien números es: ${suma}`);

}

function ejecicio29(){
    let suma = 0;
    let contador = 1;
    
    // Utilizar un ciclo while para sumar los primeros cien números
    while (contador <= 100) {
      suma += contador;
      contador++;
    }
    
    // Mostrar el resultado mediante alert
    alert(`La suma de los primeros cien números es: ${suma}`);
}

function ejecicio30(){
    let suma = 0;

    // Utilizar un ciclo for para sumar los primeros cien números
    for (let contador = 1; contador <= 100; contador++) {
      suma += contador;
    }
    
    // Mostrar el resultado mediante alert
    alert(`La suma de los primeros cien números es: ${suma}`);
}

function ejecicio31(){
    let sumaPares = 0;
    let contadorPares = 0;
    let sumaImpares = 0;
    let contadorImpares = 0;
    
    // Solicitar al usuario ingresar diez números
    for (let i = 1; i <= 10; i++) {
      let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    
      if (!isNaN(numero)) {
        if (numero % 2 === 0) {
          // Sumar al total de pares
          sumaPares += numero;
          contadorPares++;
        } else {
          // Sumar al total de impares
          sumaImpares += numero;
          contadorImpares++;
        }
      } else {
        // Mostrar mensaje de error si no se ingresa un número válido
        alert("Por favor, ingrese un número válido.");
        i--;  // Decrementar i para repetir la iteración con el mismo valor de i
      }
    }
    
    // Calcular la media de los números pares e impares
    let mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
    let mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;
    
    // Mostrar los resultados mediante alert
    alert(`La media de los números pares es: ${mediaPares.toFixed(2)}`);
    alert(`La media de los números impares es: ${mediaImpares.toFixed(2)}`);
}

function ejecicio32(){
    let ciudadMasPoblada = "";
    let poblacionMasAlta = 0;
    
    // Iterar sobre las provincias y ciudades
    for (let provincia = 1; provincia <= 3; provincia++) {
      for (let ciudad = 1; ciudad <= 11; ciudad++) {
        // Solicitar al usuario ingresar la población de la ciudad
        let poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${ciudad} en la provincia ${provincia}:`));
    
        // Validar si la población ingresada es válida
        if (!isNaN(poblacion)) {
          // Verificar si la población actual es mayor a la población más alta registrada
          if (poblacion > poblacionMasAlta) {
            poblacionMasAlta = poblacion;
            ciudadMasPoblada = `Ciudad ${ciudad} (Provincia ${provincia})`;
          }
        } else {
          // Mostrar mensaje de error si no se ingresa un número válido
          alert("Por favor, ingrese una población válida.");
          ciudad--;  // Decrementar la variable de la ciudad para repetir la iteración con el mismo valor
        }
      }
    }
    
    // Mostrar la ciudad con la población más alta mediante alert
    alert(`La ciudad con la población más alta es: ${ciudadMasPoblada} con una población de ${poblacionMasAlta}`);
}

function ejecicio33(){
    let continuar = true;

    while (continuar) {
      // Coloca aquí el código que deseas que se repita
    
      // Por ejemplo, solicitar al usuario algún dato
      let nombre = prompt("Ingrese su nombre:");
    
      // Mostrar un mensaje con el dato ingresado
      alert(`Hola, ${nombre}!`);
    
      // Preguntar al usuario si desea continuar
      let respuesta = prompt("¿Desea continuar? (Ingrese 'si' para continuar, cualquier otra cosa para detener)");
    
      // Verificar la respuesta para decidir si continuar o detener
      if (respuesta.toLowerCase() !== 'si') {
        continuar = false;
      } else {
        alert("Continuemos...");
      }
    }
    
    // Mostrar un mensaje de despedida al finalizar
    alert("¡Hasta luego!");
}

function ejecicio34(){
    for (let i = 1; i <= 9; i++) {
        let tablaMultiplicar = "";
      
        // Generar la tabla de multiplicar para el número actual
        for (let j = 1; j <= 10; j++) {
          tablaMultiplicar += `${i} x ${j} = ${i * j}\n`;
        }
      
        // Mostrar la tabla de multiplicar mediante alert
        alert(`Tabla de multiplicar del ${i}:\n\n${tablaMultiplicar}`);
      }
}

function ejecicio35(){
    let numeroMayor = Number.MIN_VALUE;
    let numeroMenor = Number.MAX_VALUE;
    
    // Iterar para ingresar veinte números
    for (let i = 1; i <= 20; i++) {
      // Solicitar al usuario ingresar un número
      let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    
      // Validar si el número ingresado es válido
      if (!isNaN(numero)) {
        // Actualizar el número mayor y menor
        if (numero > numeroMayor) {
          numeroMayor = numero;
        }
        if (numero < numeroMenor) {
          numeroMenor = numero;
        }
      } else {
        // Mostrar mensaje de error si no se ingresa un número válido
        alert("Por favor, ingrese un número válido.");
        i--;  // Decrementar i para repetir la iteración con el mismo valor de i
      }
    }
    
    // Mostrar el número mayor y menor mediante alert
    alert(`El número mayor es: ${numeroMayor}\nEl número menor es: ${numeroMenor}`);
}

function ejecicio36(){
    let n = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci:"));

    // Validar si el número ingresado es válido
    if (!isNaN(n) && n > 0) {
      // Inicializar las variables para los dos primeros términos
      let a = 0;
      let b = 1;
    
      // Mostrar el primer término
      let resultado = `Serie de Fibonacci (${n} términos):\n${a}`;
    
      // Calcular y mostrar los términos restantes de la serie
      for (let i = 1; i < n; i++) {
        let temp = a + b;
        resultado += `, ${temp}`;
        a = b;
        b = temp;
      }
    
      // Mostrar la serie mediante alert
      alert(resultado);
    } else {
      // Mostrar mensaje de error si el número ingresado no es válido
      alert("Por favor, ingrese un número válido mayor a 0.");
    }
}

function ejecicio37(){
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    
    // Validar si los números ingresados son válidos
    if (!isNaN(numero1) && !isNaN(numero2) && numero1 > 0 && numero2 > 0) {
      // Calcular el M.C.D utilizando el algoritmo de Euclides
      let mcd = calcularMCD(numero1, numero2);
    
      // Mostrar el resultado mediante alert
      alert(`El M.C.D de ${numero1} y ${numero2} es: ${mcd}`);
    } else {
      // Mostrar mensaje de error si los números no son válidos
      alert("Por favor, ingrese números enteros válidos mayores a 0.");
    }
    
    // Función para calcular el M.C.D utilizando el algoritmo de Euclides
    function calcularMCD(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
}

function ejecicio38(){
    let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));

    // Validar si el número ingresado es válido
    if (!isNaN(numero) && numero > 0) {
      // Verificar si el número es perfecto
      if (esNumeroPerfecto(numero)) {
        alert(`${numero} es un número perfecto.`);
      } else {
        alert(`${numero} no es un número perfecto.`);
      }
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo.");
    }
    
    function esNumeroPerfecto(num) {
        let sumaDivisores = 0;
      
        // Iterar sobre los posibles divisores hasta la mitad del número
        for (let i = 1; i <= num / 2; i++) {
          if (num % i === 0) {
            sumaDivisores += i;
          }
        }
      
        // Verificar si la suma de divisores es igual al número
        return sumaDivisores === num;
      }
}

function ejecicio39(){
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de π(recordar que esta serie es lenta asì que deberà poner nùmero de terminos grandes para mayor precisiòn):"));

    // Validar si el número ingresado es válido
    if (!isNaN(n) && n > 0) {
      // Calcular la aproximación de π utilizando la serie de Gregory-Leibniz
      let resultado = calcularAproximacionPi(n);
    
      // Mostrar el resultado mediante alert
      alert(`La aproximación de π con ${n} términos es: ${resultado}`);
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo.");
    }
    
    // Función para calcular la aproximación de π con la serie de Gregory-Leibniz
    function calcularAproximacionPi(terminos) {
      let aproximacion = 0;
    
      for (let i = 0; i < terminos; i++) {
        let numerador = 4 * ((i % 2 === 0) ? 1 : -1);
        let denominador = (2 * i) + 1;
        aproximacion += numerador / denominador;
      }
    
      return aproximacion.toFixed(15); // Ajustar la precisión a 15 decimales
    }
}

function ejecicio40(){
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de π:"));

    // Validar si el número ingresado es válido
    if (!isNaN(n) && n > 0) {
      // Calcular la aproximación de π utilizando la serie de Nilakantha
      let resultado = calcularAproximacionPi(n);
    
      // Mostrar el resultado mediante alert
      alert(`La aproximación de π con ${n} términos es: ${resultado}`);
    } else {
      // Mostrar mensaje de error si el número no es válido
      alert("Por favor, ingrese un número entero positivo.");
    }
    
    function calcularAproximacionPi(terminos) {
      let aproximacion = 3;
    
      for (let i = 1; i <= terminos; i++) {
        let numerador = (i % 2 === 0) ? -4 : 4;
        let denominador1 = 2 * i;
        let denominador2 = 2 * i + 1;
        let termino = numerador / (denominador1 * denominador2 * (denominador2 + 1));
        
        aproximacion += termino;
      }
    
      return aproximacion.toFixed(15); // Ajustar la precisión a 15 decimales
    }
}