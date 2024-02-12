// ARREGLAR LA OPCIÓN DE CANCELAR EN LOS PROMPT
// FUNCIONES REPETIDAS, GENERALIZARLAS Y USARLAS DENTRO DE OTRAS FUNCIONES
// LAS FUNCIONES QUE SE PUEDEN REUTILIZAR SE COLOCARON AL FINAL
function ejercicio1() {
    do {
        const numero = solicitarNumeroEntero();
        if (numero !== null) {
            if (numero > 99 && numero <= 999) {
                alert("El número tiene 3 dígitos.");
            } else if (numero < -99 && numero >= -999) {
                alert("El número tiene 3 dígitos y es negativo.");
            } else {
                alert("El número no tiene 3 dígitos.");
            }
        }
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio2() {
    do {
        let numero = obtenerNumero();
        if (numero < 0) {
            alert("El número es negativo.");
        } else {
            alert("El número no es negativo.");
        }
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio3(){
    do{
        let numero = solicitarNumeroEntero();
        let ultimaCifra = obtenerUltimaCifra(numero);
            
        if (ultimaCifra === 4) {
            alert("La última cifra del número " + numero + " es 4.");
        } else {
            alert("La última cifra del número " + numero + " no es 4.");
        }
    }while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio4(){
    do {
        var num1, num2, num3;

        do {
            num1 = parseFloat(prompt("Ingrese el primer número:"));
            if (!Number.isInteger(num1)) {
                alert("Ingrese un número entero, inténtelo de nuevo.");
            }
        } while (!Number.isInteger(num1));

        do {
            num2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (!Number.isInteger(num2)) {
                alert("Ingrese un número entero, inténtelo de nuevo.");
            }
        } while (!Number.isInteger(num2));

        do {
            num3 = parseFloat(prompt("Ingrese el tercer número:"));
            if (!Number.isInteger(num3)) {
                alert("Ingrese un número entero, inténtelo de nuevo.");
            }
        } while (!Number.isInteger(num3));

        if (num1 > num2) {
            if (num2 > num3) {
                alert("Los números de menor a mayor son: " + num3 + ", " + num2 + ", " + num1);
            } else {
                if (num1 > num3) {
                    alert("Los números de menor a mayor son: " + num2 + ", " + num3 + ", " + num1);
                } else {
                    alert("Los números de menor a mayor son: " + num2 + ", " + num1 + ", " + num3);
                }
            }
        } else {
            if (num1 > num3) {
                alert("Los números de menor a mayor son: " + num3 + ", " + num1 + ", " + num2);
            } else {
                if (num2 > num3) {
                    alert("Los números de menor a mayor son: " + num1 + ", " + num3 + ", " + num2);
                } else {
                    alert("Los números de menor a mayor son: " + num1 + ", " + num2 + ", " + num3);
                }
            }
        }

    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio5(){
    do {
        let cantidad, descuento, preciofinal;
        cantidad = validarEnteroNoNegativo("Ingrese la cantidad de zapatos a comprar:");

        if (cantidad >= 0 && cantidad <= 10) {
            descuento = 0;
        } else if (cantidad > 10 && cantidad <= 20) {
            descuento = 0.1;
        } else if (cantidad > 20 && cantidad <= 30) {
            descuento = 0.2;
        } else {
            descuento = 0.4;
        }

        preciofinal = 80 * cantidad - descuento * 80 * cantidad;

        alert("El precio final es: " + preciofinal.toFixed(2) + "soles");
        alert("Se aplicó un descuento del: " + (descuento * 100) + "%");

    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio6() {
    let respuesta;
    do {
        let pagoSemanal = calcularPagoSemanal();
        alert("El pago semanal es: " + pagoSemanal);
    } while (confirmarRepetir())
}
// EJERCICIO 7 --------------------------------------------------------------------------
function validarMembresia() {
    let membresia;
    do {
        membresia = prompt("Ingrese el tipo de membresia (A, B o C):").toUpperCase();
        if (membresia !== "A" && membresia !== "B" && membresia !== "C") {
            alert("Respuesta no válida. Solo se admiten A, B o C.");
        }
    } while (membresia !== "A" && membresia !== "B" && membresia !== "C");
    return membresia;
}

function obtenerDescuento(membresia) {
    switch (membresia) {
        case "A":
            return 0.1;
        case "B":
            return 0.15;
        default:
            return 0.2;
    }
}

function ejercicio7() {
    let respuesta;
    do {
        let tipoMembresia = validarMembresia();
        let descuento = obtenerDescuento(tipoMembresia);
        alert("Se le aplicará un descuento del " + (descuento * 100) + "%.");
    } while (confirmarRepetir())
}
// EJERCICIO 8 -----------------------------------------------------------------
function validarNota() {
    let nota;
    do {
        nota = parseFloat(prompt("Ingrese una nota (0 - 20):"));
        if (isNaN(nota) || nota < 0 || nota > 20) {
            alert("Ingrese una nota válida entre 0 y 20.");
        }
    } while (isNaN(nota) || nota < 0 || nota > 20);
    return nota;
}

function ejercicio8() {
    let respuesta;
    do {
        let nota1 = validarNota();
        let nota2 = validarNota();
        let nota3 = validarNota();

        let promedio = (nota1 + nota2 + nota3) / 3;
        alert("El promedio es: " + promedio.toFixed(2));

        if (promedio >= 10.5) {
            alert("Aprobó el curso.");
        } else {
            alert("Desaprobó el curso.");
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio9() {
    do {
        let sueldo;
        do {
            sueldo = parseFloat(prompt("¿Cuánto gana el trabajador?"));
            if (isNaN(sueldo) || sueldo < 0) {
                alert("Ingrese un sueldo válido (no negativo).");
            }
        } while (isNaN(sueldo) || sueldo < 0);
        
        let sueldo_final;
        if (sueldo > 2000) {
            sueldo_final = 1.05 * sueldo;
            alert("Le corresponde un aumento del 5 % y su nuevo sueldo será: " + sueldo_final.toFixed(2) + " soles");
        } else {
            sueldo_final = 1.1 * sueldo;
            alert("Le corresponde un aumento del 10 % y su nuevo sueldo será: " + sueldo_final.toFixed(2) + " soles");
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio10() {
    let respuesta;
    do {
        let numero1;
        do {
            numero1 = solicitarNumeroEntero();
            if (!Number.isInteger(numero1)) {
                alert("Número incorrecto, asegúrese de ingresar un entero.");
            }
        } while (!Number.isInteger(numero1));
        
        if (numero1 % 2 === 0) {
            alert("El número ingresado es par.");
        } else {
            alert("El número ingresado es impar.");
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio11() {
    do {
        let num1, num2, num3;
        num1 = validarNumeroInput("Ingrese el primer número:");
        num2 = validarNumeroInput("Ingrese el segundo número:");
        num3 = validarNumeroInput("Ingrese el tercer número:");

        if (num1 >= num2 && num1 >= num3) {
            alert("El mayor es: " + num1);
        } else if (num2 >= num1 && num2 >= num3) {
            alert("El mayor es: " + num2);
        } else {
            alert("El mayor es: " + num3);
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio12(){
    do {
        let num1, num2;
        num1 = validarNumeroInput("Ingrese el primer número:");
        num2 = validarNumeroInput("Ingrese el segundo número:");
        if (num1 > num2) {
            alert("El mayor es: " + num1);
        } else if (num2 > num1) {
            alert("El mayor es: " + num2);
        } else {
            alert("Los números son iguales y tienen el valor de: " + num1);
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio13() {
    let respuesta;
    do {
        let letra;
        do {
            letra = prompt("Ingrese una letra:").toLowerCase();
            if (!/^[a-zA-Z]$/.test(letra)) {
                alert("Ingrese solo una letra.");
            }
        } while (!/^[a-zA-Z]$/.test(letra));

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            alert("La letra ingresada es una vocal.");
        } else {
            alert("La letra ingresada no es una vocal.");
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio14(){
    function esPrimo(numero) {
        var contador = 0;
        for (var i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                contador++;
            }
        }
        return contador === 2;
    }
    
    do {
        var numero1;
        var respuesta;
        var contador;
        
        do {
            contador = 0;
            numero1 = parseFloat(prompt("Ingrese un número entero del 1 al 10:"));
            if (numero1 < 1 || numero1 > 10 || parseInt(numero1) !== numero1) {
                alert("Número incorrecto, asegúrese que sea un entero del 1 al 10.");
            }
        } while (parseInt(numero1) !== numero1 || numero1 < 1 || numero1 > 10);
    
        if (esPrimo(numero1)) {
            alert("El número " + numero1 + " es primo.");
        } else {
            alert("El número " + numero1 + " no es primo.");
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio15(){
    do {
        var centimetros = validarNumeroPositivo("Ingrese la longitud en centímetros:");
        var libras = validarNumeroPositivo("Ingrese el peso en libras:");
    
        var pulgadas = centimetros / 2.54; // Convertir centímetros a pulgadas (1 pulgada = 2.54 cm)
        var kilogramos = libras * 0.453592; // Convertir libras a kilogramos (1 libra = 0.453592 kg)
        
        // Mostrar los resultados
        alert("Longitud en pulgadas: " + pulgadas);
        alert("Peso en kilogramos: " + kilogramos);
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio16(){
    do {
        var numero1 = validarNumeroEntero("Ingrese un número entero del 1 al 7:", 1, 7);
    
        switch (numero1) {
            case 1:
                alert("Lunes");
                break;
            case 2:
                alert("Martes");
                break;
            case 3:
                alert("Miércoles");
                break;
            case 4:
                alert("Jueves");
                break;
            case 5:
                alert("Viernes");
                break;
            case 6:
                alert("Sábado");
                break;
            case 7:
                alert("Domingo");
                break;
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio17() {
    do{
        var hora, minuto, segundo;
        var mensajeHora = "Ingrese la hora (entero de 0 a 23):";
        var mensajeMinuto = "Ingrese los minutos (entero de 0 a 59):";
        var mensajeSegundo = "Ingrese los segundos (entero de 0 a 59):";

        // Función para validar un número entero en un rango específico
        function validarNumero(mensaje, min, max) {
            var numero;
            do {
                numero = prompt(mensaje);
                if (isNaN(numero) || parseInt(numero) !== parseFloat(numero) || numero < min || numero > max) {
                    alert("Error. " + mensaje + " Intente nuevamente.");
                }
            } while (isNaN(numero) || parseInt(numero) !== parseFloat(numero) || numero < min || numero > max);
            return parseInt(numero);
        }

        // Solicitar la hora, los minutos y los segundos
        hora = validarNumero(mensajeHora, 0, 23);
        minuto = validarNumero(mensajeMinuto, 0, 59);
        segundo = validarNumero(mensajeSegundo, 0, 59);

        // Calcular la hora siguiente
        segundo++;
        if (segundo === 60) {
            segundo = 0;
            minuto++;
            if (minuto === 60) {
                minuto = 0;
                hora++;
                if (hora === 24) {
                    hora = 0;
                }
            }
        }

        // Mostrar la hora siguiente
        alert("La hora siguiente es: " + hora + ":" + minuto + ":" + segundo);
    }while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio18(){
    do {
        let cantidad = validarNumEntMayCero("Ingrese la cantidad:");
        let precio;
        if (cantidad <= 9) {
            precio = cantidad * 10;
        } else if (cantidad < 100) {
            precio = cantidad * 8;
        } else if (cantidad < 500) {
            precio = cantidad * 7;
        } else {
            precio = cantidad * 6;
        }
        let ganancia = 0.0825 * precio;
        alert("El precio para el cliente es de: " + precio + " soles");
        alert("La ganancia para el vendedor es de: " + ganancia.toFixed(2) + " soles");
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio19(){ 
    let respuesta;
    do {
        let ID;
        do {
            alert("Cajero ID: 1, Servidor ID: 2, Preparador de mezcla ID: 3, Mantenimiento ID: 4");
            ID = validarNumeroEntero("Ingrese el ID (entero de 1 a 4):", 1, 4);
        } while (ID !== 1 && ID !== 2 && ID !== 3 && ID !== 4);
        
        let cantidad = validarNumeroEntero("Ingrese el número de días trabajados (entero de 0 a 6):", 0, 6);
        
        let pago;
        switch (ID) {
            case 1:
                pago = cantidad * 56;
                alert("El cajero recibirá un pago de: $ " + pago);
                break;
            case 2:
                pago = cantidad * 64;
                alert("El servidor recibirá un pago de: $ " + pago);
                break;
            case 3:
                pago = cantidad * 80;
                alert("El preparador de mezclas recibirá un pago de: $ " + pago);
                break;
            default:
                pago = cantidad * 48;
                alert("El de mantenimiento recibirá un pago de: $ " + pago);
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio20(){
    do {
        let num1 = validarNumEntMayCero("Ingrese el primer número:");
        let num2 = validarNumEntMayCero("Ingrese el segundo número:");
        let num3 = validarNumEntMayCero("Ingrese el tercer número:");
        let num4 = validarNumEntMayCero("Ingrese el cuarto número:");
    
        alert("Sus números ingresados son: " + num1 + "; " + num2 + "; " + num3 + "; " + num4);
    
        let contadorPares = 0;
        if (num1 % 2 === 0) contadorPares++;
        if (num2 % 2 === 0) contadorPares++;
        if (num3 % 2 === 0) contadorPares++;
        if (num4 % 2 === 0) contadorPares++;
    
        let mayor1 = Math.max(num1, num2, num3, num4);
    
        alert("Cantidad de números pares: " + contadorPares);
        alert("El mayor de todos: " + mayor1);
    
        if (num3 % 2 === 0) {
            let cuadradoSegundo = num2 * num2;
            alert("Resultado cuadrado del segundo si el tercero es par: "+ cuadradoSegundo);
        } else {
            alert("No se cumplió la condición para la 3ra operación");
        }
    
        if (num1 < num4) {
            let media = (num1 + num2 + num3 + num4) / 4;
            alert("Media de los 4 números si el primero es menor que el cuarto: "+ media);
        } else {
            alert("No se cumplió la condición para la 4ta operación");
        }
    
        if (num2 > num3) {
            let condicion2 = num3 >= 50 && num3 <= 700;
            if (condicion2) {
                let sumaComoNumeroEntero = num1 + num2 + num3 + num4;
                alert("Suma de los 4 números: "+ sumaComoNumeroEntero);
            } else {
                alert("No se cumplió la condición para la 5ta operación");
            }
        } else {
            alert("No se cumplió la condición para la 5ta operación");
        }
    } while (confirmarRepetir())
}
//---------------------------------------------------------------------------------------
function ejercicio21() {
    do {
        let numero = validarNumEntMayCero("Ingrese un número para calcular su factorial:");
        let factorial = calcularFactorial(numero);
        alert("El factorial de " + numero + " es: " + factorial);

    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio22() {
    do {
        let n = validarNumEntMayCero("Ingrese la cantidad de números a sumar:");
        let suma = calcularSumaNumeros(n);
        alert("La suma de los primeros " + n + " números es: " + suma);
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio23() {
    do {
        let n = validarNumEntMayCero("Ingrese el número máximo:");
        let suma = calcularSumaImpares(n);
        alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio24() {
    do {
        cantidad = 1000;
        let suma = calcularSumaPares(cantidad);
        alert("La suma de los números pares hasta 1000 es: " + suma);
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio25() {
    do {
        let numero = validarNumEntMayCero("Ingrese un número para calcular su factorial:");
        let factorial = factorialConRecursion(numero);
        alert("El factorial de " + numero + " es: " + factorial);
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio26() {
    do {
        let dividendo;
        let divisor;
        let cociente = 0;
        let resto;

        dividendo = validarNumEntMayCero("Ingrese el dividendo: ")
        divisor = validarEntMayorACero("Ingrese el divisor: ")
        resto = dividendo;

        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }

        alert("El cociente es: " + cociente);
        alert("El resto es: " + resto);

    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio27() {
    do{
        let numeros = obtenerNumerosPositivos();
        let media = calcularMedia(numeros);
        if (media !== null) {
            alert("La media de los números ingresados es: " + media);
        } else {
            alert("No se ingresaron números positivos.");
        }
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio28() {
    do{
        let suma = 0;
        let contador = 1;
        while (contador <= 100) {
            suma += contador;
            contador++;
        }
        alert("La suma de los primeros 100 números es "+suma)
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio29(){
    do{
        let suma = 0;
        for (let contador = 1; contador <= 100; contador++) {
            suma += contador;
        }
        alert("La suma de los primeros 100 números es "+suma)
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function sumaRecursiva(n) {
    function calcularSuma(num) {
        if (num === 1) {
            return 1;
        } else {
            return num + calcularSuma(num - 1);
        }
    }
    return calcularSuma(n);
}

function ejercicio30(){
    do{
        alert("La suma de los primeros 100 números es "+sumaRecursiva(100))

    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio31() {
    let sumapar, sumaimpar, contadorpar, contadorimpar;
    do {
        sumapar = 0;
        sumaimpar = 0;
        contadorpar = 0;
        contadorimpar = 0;

        for (let contador = 1; contador <= 10; contador++) {
            let numero1 = solicitarNumeroEntero();

            if (numero1 % 2 === 0) {
                sumapar += numero1;
                contadorpar++;
            } else {
                sumaimpar += numero1;
                contadorimpar++;
            }
        }

        if (contadorpar > 0) {
            alert("La media de los números pares es: "+ sumapar / contadorpar);
        } else {
            alert("No se ingresaron números pares.");
        }

        if (contadorimpar > 0) {
            alert("La media de los números impares es: "+ sumaimpar / contadorimpar);
        } else {
            alert("No se ingresaron números impares.");
        }
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio32() {
    let poblacionMaxima = 0;
    let maxCiudad = 0;
    let maxProvincia = 0;

    for (let provincia = 1; provincia <= 3; provincia++) {
        for (let ciudad = 1; ciudad <= 11; ciudad++) {
            let poblacion = Math.floor(Math.random() * 100000) + 1;
            console.log("Población de la ciudad " + ciudad + " en la provincia " + provincia + ": " + poblacion);

            if (poblacion > poblacionMaxima) {
                poblacionMaxima = poblacion;
                maxCiudad = ciudad;
                maxProvincia = provincia;
            }
        }
    }
    alert("Para este ejercicio se asigna aleatoriamente una cantidad de población a las ciudades de distintas provincias y luego se hace el cálculo correspondiente.")
    alert("La ciudad con la población más alta tiene " + poblacionMaxima + " habitantes.");
    alert("Provincia: " + maxProvincia + ", ciudad: " + maxCiudad);
}
//---------------------------------------------------------------------------------------
function ejercicio33(){
    do{
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio34() {
    // Muestra el contenedor de la ventana
    document.getElementById("ventanaEjercicio34").style.display = "block";

    // Genera la tabla de multiplicar
    var tablaMultiplicar = generarTablaMultiplicar();

    // Muestra la tabla de multiplicar en el contenedor
    document.getElementById("contenidoTablaMultiplicar").innerHTML = tablaMultiplicar;
}

// Función para cerrar la ventana de ejercicio 38
function cerrarVentanaEjercicio34() {
    // Oculta el contenedor de la ventana
    document.getElementById("ventanaEjercicio34").style.display = "none";
}

// Función para generar la tabla de multiplicar del 1 al 9
function generarTablaMultiplicar() {
    var tabla = "<table class='tabla-multiplicar'>";
    for (var j = 1; j <= 9; j++) {
        tabla += "<tr>";
        for (var i = 1; i <= 10; i++) {
            tabla += "<td>" + i + " x " + j + " = " + (i * j) + "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    return tabla;
}
//---------------------------------------------------------------------------------------
function ejercicio35() {
    let mayor1 = -Infinity;
    let menor1 = Infinity;

    do {
        mayor1 = -Infinity;
        menor1 = Infinity;
        for (let contador = 1; contador <= 20; contador++) {
            let numero1 = validarNumeroInput("Ingrese el "+contador+" número: ")
            if (numero1 > mayor1) {
                mayor1 = numero1;
            }
            if (numero1 < menor1) {
                menor1 = numero1;
            }
        }
        alert("El número mayor es: " + mayor1);
        alert("El número menor es: " + menor1);;
    } while (confirmarRepetir());
}
//---------------------------------------------------------------------------------------
function ejercicio36(){
    let cantidad = validarEnteroNoNegativo("Cuantos términos desea ver de la serie: ")
    let serieFibonacci = fibonacci(cantidad-1);
    alert("Serie de Fibonacci: "+ serieFibonacci);
}

function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
//---------------------------------------------------------------------------------------
function ejercicio37(){
    let respuesta;
    do {
        const a = validarEnteroNoNegativo("Ingrese el primer número:");
        const b = validarEnteroNoNegativo("Ingrese el segundo número:");
        if (a == 0 && b == 0){
            alert("Por lo menos uno de los valores debe ser diferente de 0")
        }
        else{
            const mcd = calcularMCD(a, b);
            alert("El M.C.D de los números ingresados es: " + mcd);
        }
    } while (confirmarRepetir());
}

function calcularMCD(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
//---------------------------------------------------------------------------------------
function ejercicio38(){
    let respuesta;
    do {
        const numero = validarEnteroNoNegativo("Ingrese un número para verificar si es un número perfecto:");
        if (esNumeroPerfecto(numero)) {
            alert(numero + " es un número perfecto.");
        } else {
            alert(numero + " no es un número perfecto.");
        }
    } while (confirmarRepetir());
}

function esNumeroPerfecto(numero) {
    if (numero <= 0) {
        return false;
    }

    let sumaDivisores = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}
//---------------------------------------------------------------------------------------
function ejercicio39(){
    do {
        const iterac = validarEnteroNoNegativo("Ingrese el número de iteraciones para la aproximación de Pi:");
        const piAprox = aproximacionPi(iterac);
        alert("La aproximación de Pi con " + iterac + " iteraciones es: " + piAprox);
    } while (confirmarRepetir());
}

function aproximacionPi(iterac) {
    let pi = 0;
    for (let i = 0; i < iterac; i++) {
        const termino = 4 / (2 * i + 1);
        if (i % 2 === 0) {
            pi += termino;
        } else {
            pi -= termino;
        }
    }
    return pi;
}
//---------------------------------------------------------------------------------------
function ejercicio40(){
    let respuesta;
    do {
        const iteraciones = validarEnteroNoNegativo("Ingrese el número de iteraciones para la aproximación de Pi:");
        const piAproximado = aproximacionPi(iteraciones);
        alert("La aproximación de Pi con " + iteraciones + " iteraciones es: " + piAproximado);
        respuesta = prompt("¿Desea repetir el proceso? (si / no)").toLowerCase();
    } while (respuesta === "si");
}

function aproximacionPi2(iteraciones) {
    let pi = 3;
    let signo = 1;
    let denominador = 2;
    for (let i = 0; i < iteraciones; i++) {
        const termino = 4 / (denominador * (denominador + 1) * (denominador + 2));
        pi += signo * termino;
        signo *= -1;
        denominador += 2;
    }
    return pi;
}

// FUNCIONES REUTILIZADAS
// VALIDACIÓN PARA REPETIR EL PROCESO, USADO EN TODOS LOS EJERCICIOS
function confirmarRepetir() {
    let respuesta;
    do {
        respuesta = prompt("¿Desea repetir el proceso? (si / no): ").toLowerCase();
        if (respuesta !== "si" && respuesta !== "no") {
            alert("Respuesta no válida. Solo se admiten si o no.");
        }
    } while (respuesta !== "si" && respuesta !== "no");
    return respuesta === "si";
}
// VALIDACIÓN DE ELEMENTOS INGRESADOS, SE REPETIRÁ EL BUCLE SI INGRESAN LETRAS O NUMEROS DECIMALES (1, 3, 10,31)
function solicitarNumeroEntero() {
    let numero;
    do {
        numero = prompt("Escriba un número:");
        if (numero === null) return null; // Si el usuario cancela, retornar null
        if (parseInt(numero) !== parseFloat(numero)) {
            alert("Ingrese un número entero, inténtelo de nuevo.");
        }
    } while (parseInt(numero) !== parseFloat(numero));
    return parseInt(numero);
}
// VALIDACIÓN DE ELEMENTOS INGRESADOS, SE REPETIRÁ EL BUCLE SI INGRESAN LETRAS, USADO EN EJERCICIOS (2)
function obtenerNumero() {
    let numero;
    do {
        numero = parseFloat(prompt("Escriba un número:"));
        if (isNaN(numero)) {
            alert("Debe ingresar un número válido. Inténtelo de nuevo.");
        }
    } while (isNaN(numero));
    return numero;
}
// PARA OBTENER LA ULTIMA CIFRA DE UN NUMERO, USADO EN EJERCICIOS (3)
function obtenerUltimaCifra(numero) {
    return Math.abs(numero % 10); // Obtener la última cifra del número (positiva)
}
// VALIDACIÓN DE ENTEROS NO NEGATIVOS, USADO EN EJERCICIOS (5)
function validarEnteroNoNegativo(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (!Number.isInteger(numero) || numero < 0) {
            alert("Error. Debe ingresar un número entero no negativo. Inténtelo de nuevo.");
        }
    } while (!Number.isInteger(numero) || numero < 0);
    return numero;
}

// INGRESAR UNA "n" CANTIDAD DE NÚMEROS, USADO EN EJERCICIOS (aún no)
/*function ingresarNumeros(cantidadNumeros) {
    do {
        cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
        if (isNaN(cantidadNumeros) || cantidadNumeros <= 0 || !Number.isInteger(cantidadNumeros)) {
            alert("Ingrese un número entero positivo, inténtelo de nuevo.");
        }
    } while (isNaN(cantidadNumeros) || cantidadNumeros <= 0 || !Number.isInteger(cantidadNumeros));

    var numeros = [];
    for (var i = 0; i < cantidadNumeros; i++) {
        var numero;
        do {
            numero = parseInt(prompt("Ingrese el" + (i + 1) + "número: "));
            if (isNaN(numero) || !Number.isInteger(numero)) {
                alert("Ingrese un número entero, inténtelo de nuevo.");
            }
        } while (isNaN(numero) || !Number.isInteger(numero));
        numeros.push(numero);
    }
    alert("Los números ingresados son: " + numeros.join(", "));
}*/
// FUNCIONES USADAS EN EL EJERCICIO 6
function validarHorasTrabajadas() {
    let horas;
    do {
        horas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));
        if (horas < 0 || horas > 168 || isNaN(horas)) {
            alert("Error. La cantidad no puede ser negativa ni superar el máximo de horas semanales (168) ni ser letras. Intente nuevamente.");
        }
    } while (horas < 0 || horas > 168 || isNaN(horas));
    return horas;
}

function calcularPagoSemanal() {
    let horasTrabajadas = validarHorasTrabajadas();
    let pagoFinal;
    if (horasTrabajadas >= 0 && horasTrabajadas <= 40) {
        pagoFinal = 20 * horasTrabajadas;
    } else {
        pagoFinal = 20 * 40 + 25 * (horasTrabajadas - 40);
    }
    return pagoFinal;
}
// VALIDACIÓN DE NÚMERO, NO SE PERMITE LETRAS, USADO EN EJERCICIOS (11)
function validarNumeroInput(mensaje) {
    let input;
    do {
        input = prompt(mensaje);
        if (isNaN(input)) {
            alert("Ingrese un número válido.");
        }
    } while (isNaN(input));
    return parseFloat(input);
}
// VALIDACIÓN DE NÚMERO, NO SE PERMITE LETRAS NI NEGATIVOS, USADO EN EJERCICIOS (15)
function validarNumeroPositivo(mensaje) {
    var numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero) || numero < 0) {
            alert("Error. Debe ingresar un número positivo. Intente nuevamente.");
        }
    } while (isNaN(numero) || numero < 0);
    return numero;
}
// VALIDACIÓN DE ENTERO EN UN RANGO, USADO EN EJERCICIOS (16, 19)
function validarNumeroEntero(mensaje, min, max) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (numero === null) return null; // Si el usuario cancela, retornar null
        if (parseInt(numero) !== parseFloat(numero) || numero < min || numero > max) {
            alert("Error. " + mensaje + " Intente nuevamente.");
        }
    } while (parseInt(numero) !== parseFloat(numero) && numero >= min && numero <= max);
    return parseInt(numero);
}
// FUNCIÓN QUE VALIDA UN ENTERO MAYOR A CERO, USADO EN EJERCICIOS (18, 21, 22, 23, 26)
function validarNumEntMayCero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || parseInt(numero) !== parseFloat(numero) || numero < 0) {
            alert("Número incorrecto. Asegúrese de ingresar un número entero mayor o igual a 0.");
        }
    } while (isNaN(numero) || parseInt(numero) !== parseFloat(numero) || numero < 0);
    return parseInt(numero);
}
//
function validarEntMayorACero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || numero <= 0 || parseInt(numero) !== parseFloat(numero)) {
            alert("Asegúrese de que sea un entero mayor a cero.");
        }
    } while (isNaN(numero) || numero <= 0 || parseInt(numero) !== parseFloat(numero));
    return parseInt(numero);
}
// FUNCIÓN PARA CALCULAR FACTORIAL USADO EN EJERCICIOS (21)
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
// suma de numero, usado en (22)
function calcularSumaNumeros(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}
// SUMA DE IMPARES, USADO EN (23)
function calcularSumaImpares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}
// SUMA DE PARES HASTA "cantidad"
function calcularSumaPares(cantidad) {
    let suma = 0;
    for (let i = 2; i <= cantidad; i += 2) {
        suma += i;
    }
    return suma;
}
// FACTORIAL CON RECURSIÓN
function factorialConRecursion(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorialConRecursion(numero - 1);
    }
}
// INGRESAR VALORES HASTA QUE SE INGRESE UN NEGATIVO 
function obtenerNumerosPositivos() {
    let numeros = [];
    let numero;
    do {
        numero = parseFloat(prompt("Ingrese un número positivo (ingrese un número negativo para finalizar):"));
        if (numero >= 0) {
            numeros.push(numero);
        } else if (numero >= 0) {
            alert("Ingresaste un número negativo. Finalizando la entrada de números.");
        }
    } while (numero >= 0);
    return numeros;
}

//CALCULO DE MEDIA
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return null; // No se ingresaron números positivos
    }
    let suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}
//