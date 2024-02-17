function ejercicio1(){
    var numero = prompt("Ingrese un número:");

    numero = parseInt(numero);

    if (numero >= 100 && numero <= 999) {
        alert("El número ingresado tiene tres dígitos.");
    } else {
        alert("El número ingresado no tiene tres dígitos.");
    }
}
function ejercicio2(){
    
    var numero = prompt("Ingrese un número entero:");

    numero = parseInt(numero);

    if (numero < 0) {
        alert("El número ingresado es negativo.");
    } else if (numero === 0) {
        alert("El número ingresado es cero.");
    } else {
        alert("El número ingresado es positivo.");
    }
}
function ejercicio3() {
    var numero = prompt("Ingrese un número:");

    numero = parseInt(numero);

    if (numero % 10 == 4) {
        alert("El número ingresado termina en 4.");
    } else {
        alert("El número ingresado no termina en 4.");
    }
}

function ejercicio4() {
    var numero1 = parseInt(prompt("Ingrese el primer número:"));
    var numero2 = parseInt(prompt("Ingrese el segundo número:"));
    var numero3 = parseInt(prompt("Ingrese el tercer número:"));

    var numerosOrdenados = [numero1, numero2, numero3].sort(function(a, b) {
        return a - b;
    });

    alert("Números ordenados de menor a mayor: " + numerosOrdenados.join(", "));
}

function ejercicio5() {
    var precioZapato = 80;

    var cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));

    var totalSinDescuento = cantidadZapatos * precioZapato;

    var descuento;
    if (cantidadZapatos > 30) {
        descuento = 40; 
    } else if (cantidadZapatos > 20 && cantidadZapatos < 30) {
        descuento = 20; 
    } else if (cantidadZapatos > 10) {
        descuento = 10; 
    } else {
        descuento = 0; 
    }

    var totalConDescuento = totalSinDescuento * (1 - (descuento/100));

    alert("Cantidad de zapatos comprados: " + cantidadZapatos + "\nSu descuento es "+ descuento + "%\nTotal a pagar con descuento: $" + totalConDescuento.toFixed(2));
}

function ejercicio6() {
    var precioPorHoraEstandar = 20;

    var precioPorHoraExtra = 25;

    var horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas esta semana:"));

    var sueldoSemanal;
    if (horasTrabajadas <= 40) {
        sueldoSemanal = horasTrabajadas * precioPorHoraEstandar;
    } else {
        var horasNormales = 40;
        var horasExtras = horasTrabajadas - horasNormales;

        sueldoSemanal = (horasNormales * precioPorHoraEstandar) + (horasExtras * precioPorHoraExtra);
    }
    alert("Horas trabajadas: " + horasTrabajadas + "\nSueldo Semanal: $" + sueldoSemanal + ".00");

}

function ejercicio7() {
    var tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();

    var montoCompra = parseFloat(prompt("Ingrese el monto total de la compra:"));

    var porcentajeDescuento;
    switch (tipoMembresia) {
        case "A":
            porcentajeDescuento = 10; 
            break;
        case "B":
            porcentajeDescuento = 15; 
            break;
        case "C":
            porcentajeDescuento = 20; 
            break;
        default:
            porcentajeDescuento = 0;
            break;
    }

    var descuento = montoCompra * (porcentajeDescuento/100);
    var totalPagar = montoCompra - descuento;

    alert("Tipo de membresía: " + tipoMembresia + "\nMonto de compra: $" + montoCompra.toFixed(2) + "\nDescuento: $" + descuento.toFixed(2) + "\nTotal a pagar: $" + totalPagar.toFixed(2));

}

function ejercicio8() {
    var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    var promedio = (nota1 + nota2 + nota3) / 3;

    if(promedio<=13){

    alert("Promedio: " + promedio.toFixed(2) + "\nResultado: Desaprobado");
    }else{
        alert("Promedio: " + promedio.toFixed(2) + "\nResultado: Aprobado");
    }

}

function ejercicio9() {
    var salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

    var porcentajeAumentoMayor2000 = 5; 
    var porcentajeAumentoMenor2000 = 10; 

    var aumento;
    if (salarioActual > 2000) {
        aumento = salarioActual * (porcentajeAumentoMayor2000/100);
    } else {
        aumento = salarioActual * (porcentajeAumentoMenor2000/100);
    }

    var nuevoSalario = salarioActual + aumento;

    alert("Salario actual: $" + salarioActual.toFixed(2) + "\nAumento: $" + aumento.toFixed(2) + "\nNuevo salario: $" + nuevoSalario.toFixed(2));

}

function ejercicio10() {
    var numero = parseInt(prompt("Ingrese un número:"));

    var mensaje;
    if (numero % 2 === 0) {
        mensaje = "El número ingresado es par.";
    } else {
        mensaje = "El número ingresado es impar.";
    }

    alert(mensaje);
}

function ejercicio11() {
    var numero1 = parseInt(prompt("Ingrese el primer número:"));
    var numero2 = parseInt(prompt("Ingrese el segundo número:"));
    var numero3 = parseInt(prompt("Ingrese el tercer número:"));

    var mayor = Math.max(numero1, numero2, numero3);

    alert("El mayor de los tres números es: " + mayor);
}

function ejercicio12() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var mayor;
    if (numero1 > numero2) {
        mayor = numero1;
    } else if (numero2 > numero1) {
        mayor = numero2;
    } else {
        mayor = "Ambos números son iguales";
    }

    alert("El mayor de los dos números es: " + mayor);
}

function ejercicio13() {
    var letra = prompt("Ingrese una letra:").toLowerCase();

    // Determinar si la letra es una vocal
    var esVocal = false;
    switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            esVocal = true;
            break;
    }

    // Mostrar el resultado al usuario
    if (esVocal) {
        alert("La letra ingresada es una vocal.");
    } else {
        alert("La letra ingresada no es una vocal.");
    }
}

function ejercicio14() {
    var numero = parseInt(prompt("Ingrese un entero positivo entre 1 y 10:"));

    if (numero >= 1 && numero <= 10) {
        var esPrimo = true;
        for (var i = 2; i < numero; i++) {
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
    } else {
        alert("Por favor, ingrese un entero positivo entre 1 y 10.");
    }
}

function ejercicio15() {
    var centimetros = parseFloat(prompt("Ingrese la cantidad en centímetros:"));

    var pulgadas = centimetros / 2.54;

    var libras = parseFloat(prompt("Ingrese la cantidad en libras:"));

    var kilogramos = libras * 0.453592;

    alert("Resultado de la conversión:\nCentímetros a Pulgadas: " + pulgadas.toFixed(2) + "\nLibras a Kilogramos: " + kilogramos.toFixed(2));
}

function ejercicio16() {

    function obtenerDiaPorResto(resto) {
        var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        return diasSemana[resto];
    }    
    var numero = parseInt(prompt("Ingrese un número para representar un día de la semana:"));
            var resto = (numero - 1) % 7;
            dia = obtenerDiaPorResto(resto);

    alert("El número " + numero + " corresponde a: " + dia);

    
}

function ejercicio17() {
    var hora = parseInt(prompt("Ingrese la hora:"));
    var minuto = parseInt(prompt("Ingrese el minuto:"));
    var segundo = parseInt(prompt("Ingrese el segundo:"));

    if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
        if(segundo === 59){
            segundo = 0;
            minuto = minuto + 1; 
            if(minuto === 60){
                minuto = 0;
                hora = hora +1;
                if(hora === 24){
                    hora = 0;
                }
            }
        }else{
        segundo = (segundo + 1) % 60;
        minuto = (minuto + Math.floor(segundo / 60)) % 60;
        hora = (hora + Math.floor(minuto / 60)) % 24;
        }

        alert("La hora siguiente es: " + pad(hora) + ":" + pad(minuto) + ":" + pad(segundo));
    } else {
        alert("Por favor, ingrese valores válidos para la hora, minuto y segundo.");
    }

    function pad(numero) {
        return numero < 10 ? "0" + numero : numero;
    }
}

function ejercicio18() {
    var cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));

    var precioUnitario, precioTotal, gananciaVendedor;

    if (cantidadCDs >= 1 && cantidadCDs <= 9) {
        precioUnitario = 10;
    } else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
        precioUnitario = 8;
    } else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
        precioUnitario = 7;
    } else if (cantidadCDs >= 500) {
        precioUnitario = 6;
    } else {
        alert("Cantidad no válida.");
        return;
    }

    precioTotal = cantidadCDs * precioUnitario;
    gananciaVendedor = 0.0825 * precioTotal;

    alert("Precio total para el cliente: $" + precioTotal.toFixed(2) + "\nGanancia para el vendedor: $" + gananciaVendedor.toFixed(2));

}

function ejercicio19() {
    var numeroIdentificador = parseInt(prompt("Ingrese el número identificador del empleado (1 a 4):"));
    var diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (1 a 6):"));

    var salarioCajero = 56;
    var salarioServidor = 64;
    var salarioPreparador = 80;
    var salarioMantenimiento = 48;

    if (isNaN(numeroIdentificador) || isNaN(diasTrabajados) || numeroIdentificador < 1 || numeroIdentificador > 4 || diasTrabajados < 1 || diasTrabajados > 6) {
        alert("Por favor, ingrese números válidos para el identificador del empleado y la cantidad de días trabajados.");
    } else {
        var salarioSemanal;
        switch (numeroIdentificador) {
            case 1:
                salarioSemanal = salarioCajero * diasTrabajados;
                break;
            case 2:
                salarioSemanal = salarioServidor * diasTrabajados;
                break;
            case 3:
                salarioSemanal = salarioPreparador * diasTrabajados;
                break;
            case 4:
                salarioSemanal = salarioMantenimiento * diasTrabajados;
                break;
            default:
                alert("Número de identificador no válido.");
                return;
        }

        alert("El salario semanal del empleado es: $" + salarioSemanal);
    }
}

function ejercicio20() {
    var num1 = parseInt(prompt("Ingrese el primer número:"));
    var num2 = parseInt(prompt("Ingrese el segundo número:"));
    var num3 = parseInt(prompt("Ingrese el tercer número:"));
    var num4 = parseInt(prompt("Ingrese el cuarto número:"));

    if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3) && Number.isInteger(num4) &&
        num1 > 0 && num2 > 0 && num3 > 0 && num4 > 0) {

        var pares = 0;
        if (num1 % 2 === 0) pares++;
        if (num2 % 2 === 0) pares++;
        if (num3 % 2 === 0) pares++;
        if (num4 % 2 === 0) pares++;

        var mayor = Math.max(num1, num2, num3, num4);
        var mensaje = "¿Cuántos números son Pares? " + pares + "\n" +
                      "¿Cuál es el mayor de todos? " + mayor;

        if (num3 % 2 === 0) {
            var resultadoCuadrado = Math.pow(num2, 2);
            mensaje += "\nSi el tercero es par, calcular el cuadrado del segundo: " + resultadoCuadrado;
        }

        if (num1 < num4) {
            var media = (num1 + num2 + num3 + num4) / 4;
            mensaje += "\nSi el primero es menor que el cuarto, calcular la media de los 4 números: " + media;
        }

        if (num2 > num3) {
            if (num3 >= 50 && num3 <= 700) {
                var suma = num1 + num2 + num3 + num4;
                mensaje += "\nSi el segundo es mayor que el tercero y este está entre 50 y 700, calcular la suma de los 4 números: " + suma;
            }
        }

        alert(mensaje);
    } else {
        alert("Por favor, ingrese 4 números enteros positivos.");
    }
}

function ejercicio21() {
    var numero = parseInt(prompt("Ingrese un número entero positivo:"));

    if (Number.isInteger(numero) && numero >= 0) {
        var factorial = 1;

        for (var i = 2; i <= numero; i++) {
            factorial *= i;
        }

        alert("El factorial de " + numero + " es: " + factorial);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio22() {
    var n = prompt("Ingrese un número entero positivo:");
    n = parseInt(n);
    var suma;
    var i;
    if (Number.isInteger(n) && n > 0) {
         suma = 0;
    
        for (i = 1; i <= n; i++) {
            suma += i;
        }
    
        alert("La suma de los primeros " + n + " números es: " + suma);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio23() {
    var n = prompt("Ingrese un número entero positivo:");
    n = parseInt(n);
    var sumaImpares;
    var i;
    if (Number.isInteger(n) && n > 0) {
        sumaImpares = 0;
    
        for (i = 1; i <= n; i += 2) {
            sumaImpares += i;
        }
    
        alert("La suma de los números impares hasta " + n + " es: " + sumaImpares);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio24() {
    var sumaPares = 0;
    var i;
    for (i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }
    
    alert("La suma de todos los números pares hasta 1000 es: " + sumaPares);
    
}

function ejercicio25() {
    var numero = prompt("Ingrese un número entero positivo:");
    numero = parseInt(numero);
    
    if (Number.isInteger(numero) && numero >= 0) {
        var factorial = 1;
    
        while (numero > 1) {
            factorial *= numero;
            numero--;
        }
    
        alert("El factorial del número es: " + factorial);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio26() {
    var dividendo = prompt("Ingrese el dividendo:");
    var divisor = prompt("Ingrese el divisor:");
    
    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor);
    
    if (Number.isInteger(dividendo) && Number.isInteger(divisor) && divisor !== 0) {
        var cociente = 0;
    
        while (dividendo >= divisor) {
            dividendo -= divisor;
            cociente++;
        }
    
        alert("Cociente: " + cociente + ", Resto: " + dividendo);
    } else {
        alert("Por favor, ingrese números enteros y asegúrese de que el divisor no sea cero.");
    }
}

function ejercicio27() {
    var totalNumeros = 0;
    var sumaNumeros = 0;
    
    while (true) {
        var numero = prompt("Ingrese un número positivo (ingrese un número negativo para terminar):");
        numero = parseFloat(numero);
    
        if (numero < 0) {
            break;
        }
    
        if (!isNaN(numero) && numero >= 0) {
            sumaNumeros += numero;
            totalNumeros++;
        } else {
            alert("Por favor, ingrese un número positivo válido.");
        }
    }
    
    if (totalNumeros > 0) {
        var media = sumaNumeros / totalNumeros;
        alert("La media de los números positivos ingresados es: " + media);
    } else {
        alert("No se ingresaron números positivos.");
    }
}

function ejercicio28() {
    var sumaRepetir = 0;
    var contadorRepetir = 1;
    
    do {
        sumaRepetir += contadorRepetir;
        contadorRepetir++;
    } while (contadorRepetir <= 100);
    
    alert("La suma de los primeros cien números con un ciclo repetir es: " + sumaRepetir);
    
}

function ejercicio29() {
    var sumaMientras = 0;
    var contadorMientras = 1;
    
    while (contadorMientras <= 100) {
        sumaMientras += contadorMientras;
        contadorMientras++;
    }
    
    alert("La suma de los primeros cien números con un ciclo mientras es: " + sumaMientras);
    
}

function ejercicio30() {
    var sumaPara = 0;

    for (var i = 1; i <= 100; i++) {
        sumaPara += i;
    }
    alert("La suma de los primeros cien números con un ciclo para es: " + sumaPara);
}

function ejercicio31() {
    var totalPares = 0;
    var sumaPares = 0;
    
    var totalImpares = 0;
    var sumaImpares = 0;
    
    for (var i = 1; i <= 10; i++) {
        var numero = prompt("Ingrese el número " + i + ":");
        numero = parseFloat(numero);
    
        if (!isNaN(numero)) {
            if (numero % 2 === 0) {
                totalPares++;
                sumaPares += numero;
            } else {
                totalImpares++;
                sumaImpares += numero;
            }
        } else {
            alert("Por favor, ingrese un número válido.");
            i--;
        }
    }
    
    if (totalPares > 0) {
        var mediaPares = sumaPares / totalPares;
        alert("La media de los números pares ingresados es: " + mediaPares);
    } else {
        alert("No se ingresaron números pares.");
    }
    
    if (totalImpares > 0) {
        var mediaImpares = sumaImpares / totalImpares;
        alert("La media de los números impares ingresados es: " + mediaImpares);
    } else {
        alert("No se ingresaron números impares.");
    }
    
}

function ejercicio32() {
    alert("No hay datos suficientes");
}

function ejercicio33() {
    while (confirm("¿Desea continuar con el programa?")) {

    }
    
    alert("Fin del programa.");
}

function ejercicio34() {
    var tablaMultiplicar = "";

    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 10; j++) {
            tablaMultiplicar += i + " x " + j + " = " + (i * j) + "\n";
        }
        tablaMultiplicar +="x-x-x-x-x-x-x-x-x-x\n";
    }
    
    alert(tablaMultiplicar);
}

function ejercicio35() {
    var numeros = [];

    for (var i = 1; i <= 20; i++) {
        var numero = prompt("Ingrese el número " + i + ":");
        numero = parseFloat(numero);
    
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, ingrese un número válido.");
            i--; // Decrementar el contador para que se vuelva a pedir el mismo número.
        }
    }
    
    if (numeros.length > 0) {
        var mayor = Math.max.apply(null, numeros);
        var menor = Math.min.apply(null, numeros);
    
        alert("El número mayor es: " + mayor);
        alert("El número menor es: " + menor);
    } else {
        alert("No se ingresaron números.");
    }
    
}

function ejercicio36() {
    var cantidadFibonacci = prompt("Ingrese la cantidad de términos de la serie de Fibonacci:");
    cantidadFibonacci = parseInt(cantidadFibonacci);
    
    if (Number.isInteger(cantidadFibonacci) && cantidadFibonacci > 0) {
        var fib = [0, 1];
    
        for (var i = 2; i < cantidadFibonacci; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    
        alert("Serie de Fibonacci con " + cantidadFibonacci + " términos: " + fib.join(", "));
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio37() {
    var numero1 = prompt("Ingrese el primer número:");
    var numero2 = prompt("Ingrese el segundo número:");
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    while (numero2 !== 0) {
        var temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
    
    alert("El M.C.D. de los dos números es: " + numero1);
}

function ejercicio38() {
    var numeroPerfecto = prompt("Ingrese un número para verificar si es un número perfecto:");
    numeroPerfecto = parseInt(numeroPerfecto);
    
    if (Number.isInteger(numeroPerfecto) && numeroPerfecto > 0) {
        var sumaDivisores = 0;
    
        for (var i = 1; i < numeroPerfecto; i++) {
            if (numeroPerfecto % i === 0) {
                sumaDivisores += i;
            }
        }
    
        if (sumaDivisores === numeroPerfecto) {
            alert("¡El número ingresado es un número perfecto!");
        } else {
            alert("El número ingresado no es un número perfecto.");
        }
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }   
}

function ejercicio39() {
    var nPiGregoryLeibniz = prompt("Ingrese la cantidad de términos para la aproximación de pi (serie de Gregory-Leibniz):");
    nPiGregoryLeibniz = parseInt(nPiGregoryLeibniz);
    
    if (Number.isInteger(nPiGregoryLeibniz) && nPiGregoryLeibniz > 0) {
        var piGregoryLeibniz = 0;
    
        for (var i = 0; i < nPiGregoryLeibniz; i++) {
            piGregoryLeibniz += 4 * Math.pow(-1, i) / (2 * i + 1);
        }
    
        alert("Aproximación de pi (Gregory-Leibniz) con " + nPiGregoryLeibniz + " términos: " + piGregoryLeibniz);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio40() {
    var nPiNilakantha = prompt("Ingrese la cantidad de términos para la aproximación de pi (serie de Nilakantha):");
    nPiNilakantha = parseInt(nPiNilakantha);
    
    if (Number.isInteger(nPiNilakantha) && nPiNilakantha > 0) {
        var piNilakantha = 3;
    
        for (var i = 1; i <= nPiNilakantha; i++) {
            piNilakantha += 4 * Math.pow(-1, i) / ((2 * i) * (2 * i + 1) * (2 * i + 2));
        }
    
        alert("Aproximación de pi (Nilakantha) con " + nPiNilakantha + " términos: " + piNilakantha);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}