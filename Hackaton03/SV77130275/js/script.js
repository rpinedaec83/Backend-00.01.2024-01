function ejercicio1(){

    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        console.log("Si tiene 3 caracteres");
    }
    else{
        console.log("No tiene 3 caracteres");
    }
}
function ejercicio2(){


let numero = parseInt(prompt("Escriba el número entero: "));

if (numero < 0) {

    console.log("El número ingresado es negativo.");

} else {
    console.log("El número ingresado no es negativo.");
}
}
function ejercicio3(){

	let numero1 = parseInt(prompt("Escriba un numero "));
 
    if(numero1 % 10 == 4){
        console.log("El numero ingresado termina en 4");
    }
    else {
        console.log("El numero ingresado no termina en 4");
    }
    }

function ejercicio4(){

	let numero1 = parseInt(prompt("Escriba el primer numero "));
    let numero2 = parseInt(prompt("Escriba el segundo numero "));
    let numero3 = parseInt(prompt("Escriba el tercer numero "));
    
    if(numero1 > numero2){

        temp = numero1
        numero1 = numero2
        numero2 = temp
    }
    
    if(numero2 > numero3){
        temp = numero2
        numero2 = numero3
        numero3 = temp
    }
    
    if(numero1 > numero2){
        temp = numero1
        numero1 = numero2
        numero2 = temp
        console.log("De menor a mayor: ", numero1, ",", numero2, ",", numero3)
    }
}

function ejercicio5() {

    let cantidadZapatos = parseInt(prompt("Escribe la cantidad de zapatos que desea comprar "));

        const precioPorZapato = 80;
        let descuento = 0;

        let precioTotal = cantidadZapatos * precioPorZapato;

    
        if (cantidadZapatos > 30) {
            descuento = 0.4; // 40% de descuento
            console.log("El descuento aplicado es del 40%");
        } else if (cantidadZapatos > 20) {
            descuento = 0.2; // 20% de descuento
            console.log("El descuento aplicado es del 20%");
        } else if (cantidadZapatos > 10) {
            descuento = 0.1; // 10% de descuento
            console.log("El descuento aplicado es del 10%");
        }
    
        precioTotal -= precioTotal * descuento;
    
        console.log("El precio total es: ", precioTotal);
    }
    
    function ejercicio6() {
        
    let horasTrabajadas = parseInt(prompt("Escribe la cantidad de horas trabajadas "));

        const salarioHoraNormal = 20;
        const salarioHoraExtra = 25;
        const horasNormales = 40;
    
        let salarioSemana = 0;
    
        if (horasTrabajadas <= horasNormales) {

            salarioSemana = horasTrabajadas * salarioHoraNormal;
            console.log("El sueldo semanal es de: ",salarioSemana);
        } else {
            const horasExtras = horasTrabajadas - horasNormales;
            salarioSemana = horasNormales * salarioHoraNormal + horasExtras * salarioHoraExtra;
       console.log("El sueldo semanal es de: ", salarioSemana);
        }
    
      
    }
    function ejercicio7() {
        
        let tipoMembresia = prompt("Elija el tipo de membresia: A, B o C")
        
        
        switch (tipoMembresia) {

            case 'A':
                console.log("El precio con descuento es del 10% ")
                break;
            case 'B':
                console.log("El precio con descuento es del 15% ")
                break;
            case 'C':
                console.log("El precio con descuento es del 20% ")
                break;
            default:
                descuento = 0; 
                console.log("El precio con descuento es del 0%")
            }
    }

    function ejercicio8() {
       
    let nota1 = parseInt(prompt("escriba la primera nota"));
    let nota2 = parseInt(prompt("escriba la segunda nota"));
    let nota3 = parseInt(prompt("escriba la tercera nota"));
    
    let promedio = ((nota1 + nota2 + nota3)/ 3)

        console.log("El promedio es: ", promedio);
     
        if (promedio < 10) {

            console.log("Usted ha desaprobado")
        }
        if (promedio > 11)
        console.log("Usted ha aprobadado")
    }
    /*Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    si generaba menos de $2000 su aumento será de un 10%./** */

    function ejercicio9() {

        let sueldoActual = parseInt(prompt("Escriba su sueldo actual"));
        console.log("sualseldoActual")
        
        if (sueldoActual < 2000){
            console.log("Usted tiene un aumento del 10%")
            console.log(sueldoActual + (sueldoActual * 0.10))
        }
            else if (sueldoActual > 2000)

            console.log ("Usted tiene un aumento del 5%")
            console.log(sueldoActual + (sueldoActual * 0.05))
    }
/*Hacer un algoritmo en JavaScript que diga si un número es par o impar./** */
 function ejercicio10() {

        let numero = parseInt(prompt("Escriba un numero"));

        if (numero % 2 == 0) {
            console.log("El numero es par")
        } else {
            console.log("El numero es impar")
        }
    }

    //Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11(){

 let numero1 = parseInt(prompt("Escriba el primero numero"))
 let numero2 = parseInt(prompt("Escriba el segundo numero"))
 let numero3 = parseInt(prompt("Escriba el tercer numero"))

 if(numero1 > numero2){

    temp = numero1
    numero1 = numero2
    numero2 = temp
}

if(numero2 > numero3){
    temp = numero2
    numero2 = numero3
    numero3 = temp
}

if(numero1 > numero2){
    temp = numero1
    numero1 = numero2
    numero2 = temp

}
console.log("El mayor numero es:",numero3) 
}

//Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12(){
let numero1 = parseInt(prompt("Escriba el primer numero"))
let numero2 = parseInt(prompt("Escriba el segundo numero"))

if(numero1 > numero2){

    temp = numero1
    numero1 = numero2
    numero2 = temp
}

if(numero1 > numero2){
    temp = numero1
    numero1 = numero2
    numero2 = temp

}
console.log("El mayor numero es:",numero2);

}

function ejercicio13(){

 let letra = prompt("Escriba una letra")

 switch(letra){

    case "a":
        console.log("Es una vocal")
        break;
    case "e":
        console.log("Es una vocal")
        break;
    case "i":
        console.log("Es una vocal")
        break;
    case "o":
        console.log("Es una vocal")
        break;
    case "u":
        console.log("Es una vocal")
        break;
        default:
            console.log("No es una vocal")
    
 }
}

function ejercicio14() {

let numero = parseInt(prompt("Escriba un número entre 1 y 10 "));
    let esPrimo = true;
    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= numero / 2; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        console.log("El número " + numero + " es primo.");
    } else {
        console.log("El número " + numero + " no es primo.");
    }
}

function ejercicio15(){

    let dato = prompt("Elija la operacion que desea convertir: 'C' entímetros o  'L' Libras): ").toLowerCase();
    switch (dato) {
        case 'c':
            let centimetros = parseFloat(prompt("Escriba la cantidad de centímetros:"));
            let pulgadas = centimetros / 2.54;
            console.log(centimetros + " centímetros son aproximadamente " + pulgadas.toFixed(2) + " pulgadas.");
            break;
        case 'l':
            let libras = parseFloat(prompt("Escriba la cantidad de libras:"));
            let kilogramos = libras * 0.453592;
            console.log(libras + " libras son aproximadamente " + kilogramos.toFixed(2) + " kilogramos.");
            break;
        default:
            console.log("Operacion no válidao. Por favor, ingrese 'C' o 'L'.");
            break;
    }
}   
function ejercicio16(){

    let numero = parseInt(prompt("Escriba un número del 1 al 7:"));
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
        default:
            dia = "Número inválido. Por favor ingrese un número del 1 al 7.";
    }
    console.log("El número " + numero + " corresponde a " + dia);
}
function ejercicio17(){

    let horaActual = prompt("Ingrese la hora en formato Hora:Minuto:Segundo");
    let partesHora = horaActual.split(":");
    let horas = parseInt(partesHora[0]);
    let minutos = parseInt(partesHora[1]);
    let segundos = parseInt(partesHora[2]);
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
            if (horas === 24) {
                horas = 0;
            }
        }
    }
    const nuevaHora = String(horas).padStart(2, '0') + ":" +
                    String(minutos).padStart(2, '0') + ":" +
                    String(segundos).padStart(2, '0');

    console.log("La hora después de un segundo es: " + nuevaHora);
}
function ejercicio18(){

    let cantidadCD = parseInt(prompt("Escriba el número de CD a vender:"));
    let precioUnitario;
    let gananciaVendedor;
    if (cantidadCD >= 1 && cantidadCD <= 9) {
        precioUnitario = 10;
    } else if (cantidadCD >= 10 && cantidadCD <= 99) {
        precioUnitario = 8;
    } else if (cantidadCD >= 100 && cantidadCD <= 499) {
        precioUnitario = 7;
    } else {
        precioUnitario = 6;
    }
    let precioTotalCliente = cantidadCD * precioUnitario;
    gananciaVendedor = precioTotalCliente * 0.0825;

    console.log("Precio total para el cliente: $" + precioTotalCliente.toFixed(2) + "\nGanancia para el vendedor: $" + gananciaVendedor.toFixed(2));
}
function ejercicio19(){
    
    const salariosDiarios = {
        1: 56, 
        2: 64, 
        3: 80, 
        4: 48 
    };
    const numeroEmpleado = parseInt(prompt("Escriba el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
    const diasTrabajados = parseInt(prompt("Escriba la cantidad de días trabajados en la semana (máximo 6 días):"));
    if (diasTrabajados < 1 || diasTrabajados > 6) {
        console.log("Número de días inválido. Debe ser un valor entre 1 y 6.");
    } else {
        const salarioDiario = salariosDiarios[numeroEmpleado];
        const salarioTotal = salarioDiario * diasTrabajados;
        console.log("El dueño debe pagar $" + salarioTotal + " al empleado número " + numeroEmpleado + " por " + diasTrabajados + " días trabajados en la semana.");
    }
}
function ejercicio20(){

    let numero1 = parseInt(prompt("Escriba el primer número entero positivo:"));
    let numero2 = parseInt(prompt("Escriba el segundo número entero positivo:"));
    let numero3 = parseInt(prompt("Escriba el tercer número entero positivo:"));
    let numero4 = parseInt(prompt("Escriba el cuarto número entero positivo:"));
    let cantidadPares = 0;
    let mayor = numero1;
    if (numero1 % 2 === 0) {
        cantidadPares++;
    }
    if (numero2 % 2 === 0) {
        cantidadPares++;
    }
    if (numero3 % 2 === 0) {
        cantidadPares++;
    }
    if (numero4 % 2 === 0) {
        cantidadPares++;
    }

    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }
    if (numero4 > mayor) {
        mayor = numero4;
    }
    if (numero3 % 2 === 0) {
        let cuadradoSegundo = numero2 * numero2;
        console.log("El cuadrado del segundo número es: " + cuadradoSegundo);
    }
    if (numero1 < numero4) {
        let media = (numero1 + numero2 + numero3 + numero4) / 4;
        console.log("La media de los 4 números es: " + media);
    }
    if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
        let sumaTotal = numero1 + numero2 + numero3 + numero4;
        console.log("La suma de los 4 números es: " + sumaTotal);
    }
    console.log("Cantidad de números pares: " + cantidadPares + "\nEl mayor de los 4 números es: " + mayor);
}
function ejercicio21(){
    let numero = parseInt(prompt("Escriba un número entero positivo:"));
    if (numero < 0 || isNaN(numero)) {
        console.log("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        console.log("El factorial de " + numero + " es: " + factorial);
    }
}
function ejercicio22(){

    let n = parseInt(prompt("Ingrese un número entero positivo:"));
    if (n <= 0 || isNaN(n)) {
        console.log("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
    } else {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        console.log("La suma de los primeros " + n + " números enteros positivos es: " + suma);
    }
}
function ejercicio23(){
    const n = parseInt(prompt("Escriba un número entero positivo: "));
    if (n <= 0 || isNaN(n)) {
        console.log("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
    } else {
        let sumaImpares = 0;
        for (let i = 1; i <= n; i += 2) {
            sumaImpares += i;
        }
        console.log("La suma de los números impares menores o iguales a " + n + " es: " + sumaImpares);
    }
}
function ejercicio24(){

    let sumaPares = 0;
    for (let i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }
    console.log("La suma de todos los números pares hasta 1000 es: " + sumaPares);
}
function ejercicio25(){
    let numero = parseInt(prompt("Escriba un número entero no negativo para calcular su factorial: "));
    if (numero < 0 || isNaN(numero)) {
        console.log("El número ingresado no es válido. Por favor, ingrese un número entero no negativo.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        console.log("El factorial de " + numero + " es: " + factorial);
    }
}
function ejercicio26(){

    let dividendo = parseInt(prompt("Escriba el dividendo: "));
    let divisor = parseInt(prompt("Escriba el divisor: "));
    if (divisor === 0) {
        console.log("El divisor no puede ser cero.");
    } else {
        let resto = dividendo;
        let cociente = 0;
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
        console.log("El cociente de la división es: " + cociente + "\nEl resto de la división es: " + resto);
    }
}
function ejercicio27(){

    let suma = 0;
    let cantidad = 0;
    while (true) {
        const numero = parseInt(prompt("Escriba un número positivo (escriba un número negativo para terminar):"));
        if (numero < 0 || isNaN(numero)) {
            break;
        }
        suma += numero;
        cantidad++;
    }
    if (cantidad > 0) {
        const media = suma / cantidad;
        console.log("La media de los números ingresados es: " + media);
    } else {
        console.log("No se ingresaron números positivos.");
    }
}
function ejercicio28(){

    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++;
    } while (contador <= 100);

    console.log("La suma de los primeros cien números es: " + suma);
}
function ejercicio29(){

    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    console.log("La suma de los primeros cien números es: " + suma);
}
function ejercicio30(){

    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    console.log("La suma de los primeros cien números es:" + suma);
}
function ejercicio31(){

    let sumaPares = 0;
    let cantidadPares = 0;
    let sumaImpares = 0;
    let cantidadImpares = 0;

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Ingrese un número: "));

        if (numero % 2 === 0) {
            sumaPares += numero;
            cantidadPares++;
        } else {
            sumaImpares += numero;
            cantidadImpares++;
        }
    }

    let mediaPares = cantidadPares === 0 ? 0 : sumaPares / cantidadPares;
    let mediaImpares = cantidadImpares === 0 ? 0 : sumaImpares / cantidadImpares;

    console.log("La media de los números pares es: " + mediaPares + "\nLa media de los números impares es: " + mediaImpares);

}
function ejercicio32(){

    let provinciaMayorPoblacion = "";
    let ciudadMayorPoblacion = "";
    let mayorPoblacionProvincia = 0;
    let mayorPoblacionCiudad = 0;

    const poblacionPorProvincia = {
        "Provincia1": 0,
        "Provincia2": 0,
        "Provincia3": 0
    };
    for (let provincia in poblacionPorProvincia) {
        for (let i = 1; i <= 11; i++) {
            const poblacionCiudad = parseInt(prompt("Escriba la población de la ciudad " + i + " en " + provincia + ":"));
            poblacionPorProvincia[provincia] += poblacionCiudad;

            if (poblacionCiudad > mayorPoblacionCiudad) {
                mayorPoblacionCiudad = poblacionCiudad;
                ciudadMayorPoblacion = "Ciudad " + i + " en " + provincia;
            }
        }
        if (poblacionPorProvincia[provincia] > mayorPoblacionProvincia) {
            mayorPoblacionProvincia = poblacionPorProvincia[provincia];
            provinciaMayorPoblacion = provincia;
        }
    }
    console.log("La provincia con la mayor población sumada es: " + provinciaMayorPoblacion + " con una población total de " + mayorPoblacionProvincia + " habitantes. \nLa ciudad con la mayor población es: " + ciudadMayorPoblacion + " con una población de " + mayorPoblacionCiudad + " habitantes.");
}
function ejercicio33(){
    let continuar = 'S'
    do {        
        continuar = prompt("¿Desea continuar? (S/N)").toUpperCase();
    } while (continuar === 'S');
}
function ejercicio34(){
    let mensaje = "";
    for (let i = 1; i <= 9; i++) {
        mensaje += "Tabla de multiplicar del " + i + ":\n";
        for (let j = 1; j <= 10; j++) {
            const resultado = i * j;
            mensaje += i + " x " + j + " = " + resultado + "\n";
        }
        mensaje += "\n";
    }
    console.log(mensaje);
}
function ejercicio35(){

    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        const numero = parseInt(prompt("Escriba el número " + i + ":"));
        numeros.push(numero);
    }
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    console.log("El número mayor es: " + mayor + "\nEl número menor es: " + menor);
}
function ejercicio36(){

    function fibonacci(n) {
        let fibonacciSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        }
        return fibonacciSeries;
    }
    const numTerminos = parseInt(prompt("Escriba el número de términos de la serie de Fibonacci que desea calcular:"));
    const serieFibonacci = fibonacci(numTerminos);
    console.log("Serie de Fibonacci hasta el término " + numTerminos + ":\n" + serieFibonacci.join(", "));
}
function ejercicio37(){
    function mcdEuclides(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    const num1 = parseInt(prompt("Escriba el primer número:"));
    const num2 = parseInt(prompt("Escriba el segundo número:"));
    const mcd = mcdEuclides(num1, num2);
    console.log("El máximo común divisor (M.C.D.) de " + num1 + " y " + num2 + " es: " + mcd);
}
function ejercicio38(){

    function esNumeroPerfecto(numero) {
        let sumaDivisores = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === numero;
    }
    const numero = parseInt(prompt("Escriba un número para verificar si es perfecto:"));
    const resultado = esNumeroPerfecto(numero);
    if (resultado) {
        console.log("El número " + numero + " es un número perfecto.");
    } else {
        console.log("El número " + numero + " no es un número perfecto.");
    }
}
function ejercicio39(){

    function calcularPi(n) {
        let pi = 0;
        let signo = 1;
        for (let i = 0; i < n; i++) {
            const termino = 4 / (2 * i + 1) * signo;
            pi += termino;
            signo *= -1;
        }
        return pi;
    }
    const terminos = 1000000;
    const pi = calcularPi(terminos);
    console.log("El valor aproximado de Pi es: " + pi);
}
function ejercicio40(){

    function calcularPi(n) {
        let pi = 3;
        let denominador = 2;
        let signo = 1;
        for (let i = 0; i < n; i++) {
            const termino = 4 / (denominador * (denominador + 1) * (denominador + 2)) * signo;
            pi += termino;
            denominador += 2;
            signo *= -1;
        }
        return pi;
    }
    const terminos = 1000000;
    const pi = calcularPi(terminos);
    console.log("El valor aproximado de Pi es: " + pi);
}