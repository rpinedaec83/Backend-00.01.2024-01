function ejecicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("El numero es negativo.")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}
function ejecicio2(){
    let numero  = prompt("Ingrese un numero entero: ");
    if(numero<0){
        alert("El numero SI es negativo.");
    }
    else{
        alert("El numero NO es negativo.");
    }
}
function ejecicio3(){
    let numero  = prompt("Ingrese un número: ");
    numero = parseInt(numero);
    numeroString = numero.toString();
    ultimoDigito = numeroString.charAt(numeroString.length - 1);
    if(ultimoDigito == '4'){
        alert("El número termina en 4.");
    }
    else{
        alert("El número NO termina en 4.");
    }
}
function ejecicio4(){
    let numero1 = parseInt(prompt("Número 1"));
	let numero2 = parseInt(prompt("Número 2"));
	let numero3 = parseInt(prompt("Número 3"));
	numeros = [numero1, numero2, numero3];
    numeros.sort(function(a, b){return a - b}); 
    alert("Los números ordenados de menor a mayor son: " + numeros);
}
function ejecicio5(){
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos a comprar: "));
    let precioZapato = 80;
    let descuento = 0;
    let totalCompra = 0;
    let subtotalCompra = cantidadZapatos * precioZapato;

    if (cantidadZapatos > 30) {
        descuento = subtotalCompra * 0.4;
    } else if (cantidadZapatos > 20) {
        descuento = subtotalCompra * 0.2;
    } else if (cantidadZapatos > 10) {
        descuento = subtotalCompra * 0.1;
    }

    
    totalCompra = subtotalCompra - descuento;
    
    alert("El subtotal es de: " + subtotalCompra + "\nSe aplico un descuento de: " + descuento + "\nEl precio total es de: " + totalCompra);
   
}
function ejecicio6(){
    let horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas esta semana: "));
    let sueldo = 0;
    let horasNormales = 40;
    let horasExtra = 0;
    let pagoExtra = 0;
    let pagoNormal = 0;

    if(horasTrabajadas<=40){
        sueldo = horasTrabajadas * 20;
        pagoNormal = (horasTrabajadas * 20);
    }  
    else{
        horasExtra = horasTrabajadas - horasNormales;
        pagoExtra = (horasExtra * 25);
        pagoNormal = (horasNormales * 20);
        sueldo = pagoNormal + pagoExtra;
    }
    alert("Usted trabajo en total: " + horasTrabajadas + " horas. \nSu sueldo normal es de $: " + pagoNormal + "\nUsted recibira el monto de $ " + pagoExtra + " por las horas extras laboradas" + "\nSu sueldo semanal es: $" + sueldo);
}
function ejecicio7(){
    const precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));
    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
    let porDesc;
    let descuento = 0;
    switch (tipoMembresia) {
        case 'A':
            descuento = precioHelado * 0.10;
            porDesc = "10%";
            break;
        case 'B':
            descuento = precioHelado * 0.15;
            porDesc = "15%";
            break;
        case 'C':
            descuento = precioHelado * 0.20;
            porDesc = "20%";
            break;
        default:
            alert("Tipo de membresía no válido.");
    }
    const precioFinal = precioHelado - descuento;
    alert("Su cuenta es de: $" + precioHelado +"\nPor tener membresia tipo " + tipoMembresia + " usted tiene un descuento de: $" + porDesc + "\nEl descuento aplicado es: $" + descuento + "\nEl precio final a pagar es: $" + precioFinal.toFixed(2));
}
function ejecicio8(){
    let nota1 = parseInt(prompt("Ingrese la nota 1: "));
    let nota2 = parseInt(prompt("Ingrese la nota 2: "));
    let nota3 = parseInt(prompt("Ingrese la nota 3: "));

    let promedio = (nota1 + nota2 + nota3) / 3;
    if(promedio >= 10.5){
        alert("La nota del estudiante es: " + promedio.toFixed(1) + "\nEl estudiante SI aprobo");
    } else{
        alert("La nota del estudiante es: " + promedio.toFixed(1) + "\nEl estudiante NO aprobo");
    }
}
function ejecicio9(){
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
    let aumento = 0;
    if (salarioActual > 2000) {
        aumento = salarioActual * 0.05;
    } else {
        aumento = salarioActual * 0.10;
    }
    let nuevoSalario = salarioActual + aumento;
    alert("Su salario es de: $" + salarioActual + "\nEl aumento es de: $" + aumento.toFixed(2) + "\nEl nuevo salario es: $" + nuevoSalario.toFixed(2));
}
function ejecicio10(){
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}
function ejecicio11(){
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    const numero3 = parseFloat(prompt("Ingrese el tercer número:"));
    let mayor = numero1;
    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }
    alert("El mayor número es: " + mayor);
}
function ejecicio12(){
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let mayor;
    if (numero1 > numero2) {
        mayor = numero1;
    } else if (numero2 > numero1) {
        mayor = numero2;
    } else {
        alert("Los números son iguales.");
        process.exit();
    }
    alert("El mayor número es: " + mayor);
}
function ejecicio13(){
    let letra = prompt("Ingrese una letra:").toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("La letra " + letra + " es una vocal.");
    } else {
        alert("La letra " + letra + " no es una vocal.");
    }
}
function ejecicio14(){
    let numero = parseInt(prompt("Ingrese un número entre 1 y 10 o el número 9:"));
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
        alert("El número " + numero + " es primo.");
    } else {
        alert("El número " + numero + " no es primo.");
    }
}
function ejecicio15(){
    let dato = prompt("Ingrese el dato a convertir (C)entímetros o (L)ibras): ").toLowerCase();
    switch (dato) {
        case 'c':
            let centimetros = parseFloat(prompt("Ingrese la cantidad de centímetros:"));
            let pulgadas = centimetros / 2.54;
            alert(centimetros + " centímetros son aproximadamente " + pulgadas.toFixed(2) + " pulgadas.");
            break;
        case 'l':
            let libras = parseFloat(prompt("Ingrese la cantidad de libras:"));
            let kilogramos = libras * 0.453592;
            alert(libras + " libras son aproximadamente " + kilogramos.toFixed(2) + " kilogramos.");
            break;
        default:
            alert("Dato ingresado no válido. Por favor, ingrese 'C' o 'L'.");
            break;
    }
}   
function ejecicio16(){
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
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
    alert("El número " + numero + " corresponde a " + dia);
}
function ejecicio17(){
    let horaActual = prompt("Ingrese la hora en formato HH:MM:SS:");
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
    alert("La hora después de un segundo es: " + nuevaHora);
}
function ejecicio18(){
    let cantidadCDs = parseInt(prompt("Ingrese el número de CDs a vender:"));
    let precioUnitario;
    let gananciaVendedor;
    if (cantidadCDs >= 1 && cantidadCDs <= 9) {
        precioUnitario = 10;
    } else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
        precioUnitario = 8;
    } else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
        precioUnitario = 7;
    } else {
        precioUnitario = 6;
    }
    let precioTotalCliente = cantidadCDs * precioUnitario;
    gananciaVendedor = precioTotalCliente * 0.0825;
    alert("Precio total para el cliente: $" + precioTotalCliente.toFixed(2) + "\nGanancia para el vendedor: $" + gananciaVendedor.toFixed(2));
}
function ejecicio19(){
    const salariosDiarios = {
        1: 56, 
        2: 64, 
        3: 80, 
        4: 48 
    };
    const numeroEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
    const diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));
    if (diasTrabajados < 1 || diasTrabajados > 6) {
        alert("Número de días inválido. Debe ser un valor entre 1 y 6.");
    } else {
        const salarioDiario = salariosDiarios[numeroEmpleado];
        const salarioTotal = salarioDiario * diasTrabajados;
        alert("El dueño debe pagar $" + salarioTotal + " al empleado número " + numeroEmpleado + " por " + diasTrabajados + " días trabajados en la semana.");
    }
}
function ejecicio20(){
    let numero1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
    let numero4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));
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
        alert("El cuadrado del segundo número es: " + cuadradoSegundo);
    }
    if (numero1 < numero4) {
        let media = (numero1 + numero2 + numero3 + numero4) / 4;
        alert("La media de los 4 números es: " + media);
    }
    if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
        let sumaTotal = numero1 + numero2 + numero3 + numero4;
        alert("La suma de los 4 números es: " + sumaTotal);
    }
    alert("Cantidad de números pares: " + cantidadPares + "\nEl mayor de los 4 números es: " + mayor);
}
function ejecicio21(){
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));
    if (numero < 0 || isNaN(numero)) {
        alert("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        alert("El factorial de " + numero + " es: " + factorial);
    }
}
function ejecicio22(){
    let n = parseInt(prompt("Ingrese un número entero positivo:"));
    if (n <= 0 || isNaN(n)) {
        alert("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
    } else {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        alert("La suma de los primeros " + n + " números enteros positivos es: " + suma);
    }
}
function ejecicio23(){
    const n = parseInt(prompt("Ingrese un número entero positivo: "));
    if (n <= 0 || isNaN(n)) {
        alert("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
    } else {
        let sumaImpares = 0;
        for (let i = 1; i <= n; i += 2) {
            sumaImpares += i;
        }
        alert("La suma de los números impares menores o iguales a " + n + " es: " + sumaImpares);
    }
}
function ejecicio24(){
    let sumaPares = 0;
    for (let i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }
    alert("La suma de todos los números pares hasta 1000 es: " + sumaPares);
}
function ejecicio25(){
    let numero = parseInt(prompt("Ingrese un número entero no negativo para calcular su factorial: "));
    if (numero < 0 || isNaN(numero)) {
        console.log("El número ingresado no es válido. Por favor, ingrese un número entero no negativo.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        alert("El factorial de " + numero + " es: " + factorial);
    }
}
function ejecicio26(){
    let dividendo = parseInt(prompt("Ingrese el dividendo: "));
    let divisor = parseInt(prompt("Ingrese el divisor: "));
    if (divisor === 0) {
        console.log("El divisor no puede ser cero.");
    } else {
        let resto = dividendo;
        let cociente = 0;
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
        alert("El cociente de la división es: " + cociente + "\nEl resto de la división es: " + resto);
    }
}
function ejecicio27(){
    let suma = 0;
    let cantidad = 0;
    while (true) {
        const numero = parseInt(prompt("Ingrese un número positivo (ingrese un número negativo para terminar):"));
        if (numero < 0 || isNaN(numero)) {
            break;
        }
        suma += numero;
        cantidad++;
    }
    if (cantidad > 0) {
        const media = suma / cantidad;
        alert("La media de los números ingresados es: " + media);
    } else {
        alert("No se ingresaron números positivos.");
    }
}
function ejecicio28(){
    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++;
    } while (contador <= 100);

    alert("La suma de los primeros cien números es: " + suma);
}
function ejecicio29(){
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros cien números es: " + suma);
}
function ejecicio30(){
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros cien números es:" + suma);
}
function ejecicio31(){
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

    alert("La media de los números pares es: " + mediaPares + "\nLa media de los números impares es: " + mediaImpares);
    
}
function ejecicio32(){
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
            const poblacionCiudad = parseInt(prompt("Ingrese la población de la ciudad " + i + " en " + provincia + ":"));
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
    alert("La provincia con la mayor población sumada es: " + provinciaMayorPoblacion + " con una población total de " + mayorPoblacionProvincia + " habitantes. \nLa ciudad con la mayor población es: " + ciudadMayorPoblacion + " con una población de " + mayorPoblacionCiudad + " habitantes.");
}
function ejecicio33(){
    let continuar = 'S'
    do {        
        continuar = prompt("¿Desea continuar? (S/N)").toUpperCase();
    } while (continuar === 'S');
}
function ejecicio34(){
    let mensaje = "";
    for (let i = 1; i <= 9; i++) {
        mensaje += "Tabla de multiplicar del " + i + ":\n";
        for (let j = 1; j <= 10; j++) {
            const resultado = i * j;
            mensaje += i + " x " + j + " = " + resultado + "\n";
        }
        mensaje += "\n";
    }
    alert(mensaje);
}
function ejecicio35(){
    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        const numero = parseInt(prompt("Ingrese el número " + i + ":"));
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
    alert("El número mayor es: " + mayor + "\nEl número menor es: " + menor);
}
function ejecicio36(){
    function fibonacci(n) {
        let fibonacciSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        }
        return fibonacciSeries;
    }
    const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci que desea calcular:"));
    const serieFibonacci = fibonacci(numTerminos);
    alert("Serie de Fibonacci hasta el término " + numTerminos + ":\n" + serieFibonacci.join(", "));
}
function ejecicio37(){
    function mcdEuclides(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    const num1 = parseInt(prompt("Ingrese el primer número:"));
    const num2 = parseInt(prompt("Ingrese el segundo número:"));
    const mcd = mcdEuclides(num1, num2);
    alert("El máximo común divisor (M.C.D.) de " + num1 + " y " + num2 + " es: " + mcd);
}
function ejecicio38(){
    function esNumeroPerfecto(numero) {
        let sumaDivisores = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === numero;
    }
    const numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
    const resultado = esNumeroPerfecto(numero);
    if (resultado) {
        alert("El número " + numero + " es un número perfecto.");
    } else {
        alert("El número " + numero + " no es un número perfecto.");
    }
}
function ejecicio39(){
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
    alert("El valor aproximado de Pi es: " + pi);
}
function ejecicio40(){
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
    alert("El valor aproximado de Pi es: " + pi);
}