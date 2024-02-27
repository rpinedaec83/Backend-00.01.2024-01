function ejercicio1() {
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if (nroCaracteres == 3) {
        alert("Si tiene 3 caracteres")
    }
    else {
        alert("No tiene 3 caracteres");
    }
}

function ejercicio2() {

    let numero = parseInt(prompt("Ingrese un número entero:"));

    if (numero < 0) {
        alert("El número ingresado es negativo.");
    } else {
        alert("El número ingresado no es negativo.");
    }
}

function ejercicio3() {

    let numero = prompt("Ingrese un número:");

    if (numero.charAt(numero.length - 1) === '4') {
        alert("El número termina en 4.");
    } else {
        alert("El número no termina en 4.");
    }
}

function ejercicio4() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número:"));

    let numeros = [numero1, numero2, numero3];

    numeros.sort((a, b) => a - b);

    alert("Los números ordenados de menor a mayor son:");
    for (let numero of numeros) {
        alert(numero);
    }

}

function ejercicio5() {
    const precioZapato = 80;

    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));

    let precioTotalSinDescuento = cantidadZapatos * precioZapato;

    let descuento;
    if (cantidadZapatos > 30) {
        descuento = 0.4;
    } else if (cantidadZapatos > 20) {
        descuento = 0.2;
    } else if (cantidadZapatos > 10) {
        descuento = 0.1;
    } else {
        descuento = 0;
    }


    let precioTotalConDescuento = precioTotalSinDescuento * (1 - descuento);


    alert("El precio total con descuento es: $" + precioTotalConDescuento.toFixed(2));

}

function ejercicio6(params) {
    const tarifaNormal = 20;
    const tarifaExtra = 25;
    const horasNormalesSemanales = 40;

    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));

    let sueldoSemana = 0;

    if (horasTrabajadas <= horasNormalesSemanales) {

        sueldoSemana = horasTrabajadas * tarifaNormal;
    } else {

        let horasExtras = horasTrabajadas - horasNormalesSemanales;
        sueldoSemana = (horasNormalesSemanales * tarifaNormal) + (horasExtras * tarifaExtra);
    }

    alert("El sueldo semanal del trabajador es: $" + sueldoSemana.toFixed(2));

}

function ejercicio7() {
    const descuentoTipoA = 0.10;
    const descuentoTipoB = 0.15;
    const descuentoTipoC = 0.20;
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
    let montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));

    let descuento = 0;
    switch (tipoMembresia.toUpperCase()) {
        case 'A':
            descuento = montoCompra * descuentoTipoA;
            break;
        case 'B':
            descuento = montoCompra * descuentoTipoB;
            break;
        case 'C':
            descuento = montoCompra * descuentoTipoC;
            break;
        default:
            alert("Tipo de membresía inválido.");
    }

    let montoAPagar = montoCompra - descuento;

    alert("El monto a pagar después del descuento es: $" + montoAPagar.toFixed(2));

}

function ejercicio8() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6) {
        alert("El estudiante aprobó con un promedio de " + promedio.toFixed(2));
    } else {
        alert("El estudiante reprobó con un promedio de " + promedio.toFixed(2));
    }

}

function ejercicio9() {
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

    let aumento = 0;

    if (salarioActual > 2000) {

        aumento = salarioActual * 0.05;
    } else {

        aumento = salarioActual * 0.10;
    }

    let nuevoSalario = salarioActual + aumento;

    alert("El nuevo salario del trabajador es: $" + nuevoSalario.toFixed(2));

}

function ejercicio10() {
    let n = prompt("Ingresar un número");
    n = parseInt(n);
    if (n % 2 === 0) {
        alert("El número ", n, " es par.");
    } else {
        alert("El número ", n, " es impar.");
    }
}

function ejercicio11() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
    let mayor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }

    if (numero3 > mayor) {
        mayor = numero3;
    }

    alert("El mayor de los tres números es: " + mayor);

}

function ejercicio12() {

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

    alert("El número mayor es: " + mayor);

}

function ejercicio13() {
    let letra = prompt("Ingrese una letra:");

    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("La letra ingresada es una vocal.");
    } else {
        alert("La letra ingresada no es una vocal.");
    }

}

function ejercicio14() {

    let numero = parseInt(prompt("Ingrese un número entero positivo del 1 al 10:"));

    if (numero >= 1 && numero <= 10) {
        if (numero === 1) {
            alert("El número 1 no es primo.");
        } else if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            alert("El número " + numero + " es primo.");
        } else if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0) {
            alert("El número " + numero + " es primo.");
        } else {
            alert("El número " + numero + " no es primo.");
        }
    } else {
        alert("El número ingresado está fuera del rango válido.");
    }

}

function ejercicio15() {
    let centimetros = parseFloat(prompt("Ingrese la longitud en centímetros:"));

    if (isNaN(centimetros) || centimetros < 0) {
        alert("Por favor, ingrese una longitud válida en centímetros.");
        return;
    }

    let pulgadas = centimetros / 2.54;

    alert(centimetros.toFixed(2) + " centímetros equivalen a " + pulgadas.toFixed(2) + " pulgadas.");

    let libras = parseFloat(prompt("Ingrese el peso en libras:"));

    if (isNaN(libras) || libras < 0) {
        alert("Por favor, ingrese un peso válido en libras.");
        return;
    }

    let kilogramos = libras / 2.20462;

    alert(libras.toFixed(2) + " libras equivalen a " + kilogramos.toFixed(2) + " kilogramos.");
}
function ejercicio16() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 7 para indicar el día de la semana:"));

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

    alert("El número " + numero + " corresponde al día de la semana: " + dia);

}

function ejercicio17() {
    function calcularHoraSiguiente(hora) {
        let partesHora = hora.split(":");
        let horas = parseInt(partesHora[0]);
        let minutos = parseInt(partesHora[1]);
        let segundos = parseInt(partesHora[2]);

        segundos++;
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
            if (minutos >= 60) {
                minutos = 0;
                horas++;
                if (horas >= 24) {
                    horas = 0;
                }
            }
        }

        let nuevaHora = horas.toString().padStart(2, "0") + ":" +
            minutos.toString().padStart(2, "0") + ":" +
            segundos.toString().padStart(2, "0");

        return nuevaHora;
    }

    let horaActual = prompt("Ingrese la hora en formato HH:MM:SS:");
    let horaSiguiente = calcularHoraSiguiente(horaActual);
    alert("La hora un segundo después es: " + horaSiguiente);

}

function ejercicio18() {
    function calcularPrecioYGanancia(cantidad) {
        let precioUnitario;
        let gananciaPorVenta;

        if (cantidad >= 1 && cantidad <= 9) {
            precioUnitario = 10;
        } else if (cantidad >= 10 && cantidad <= 99) {
            precioUnitario = 8;
        } else if (cantidad >= 100 && cantidad <= 499) {
            precioUnitario = 7;
        } else {
            precioUnitario = 6;
        }

        let precioTotalCliente = cantidad * precioUnitario;

        gananciaPorVenta = precioTotalCliente * 0.0825;

        return {
            precioTotalCliente: precioTotalCliente,
            gananciaPorVenta: gananciaPorVenta
        };
    }

    let cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    let resultado = calcularPrecioYGanancia(cantidadCDs);
    alert("Precio total para el cliente: $" + resultado.precioTotalCliente.toFixed(2));
    alert("Ganancia para el vendedor: $" + resultado.gananciaPorVenta.toFixed(2));

}

function ejercicio19() {
    function calcularSalario(identificador, diasTrabajados) {
        let salarioDiario;
        switch (identificador) {
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
                return "Identificador de empleado inválido.";
        }

        let salarioSemanal = salarioDiario * diasTrabajados;

        return "El salario semanal para el empleado con identificador " + identificador + " es: $" + salarioSemanal.toFixed(2);
    }

    let identificadorEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"));

    alert(calcularSalario(identificadorEmpleado, diasTrabajados));

}

function ejercicio20() {
    function realizarOperaciones(numeros) {
        let pares = 0;
        let mayor = numeros[0];
        let resultado = "";

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                pares++;
            }
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }

        resultado += "Cantidad de números pares: " + pares + "\n";
        resultado += "El mayor de todos los números: " + mayor + "\n";

        if (numeros[2] % 2 === 0) {
            resultado += "Cuadrado del segundo número: " + (numeros[1] * numeros[1]) + "\n";
        }

        if (numeros[0] < numeros[3]) {
            let media = (numeros[0] + numeros[1] + numeros[2] + numeros[3]) / 4;
            resultado += "Media de los 4 números: " + media.toFixed(2) + "\n";
        }

        if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
            let suma = numeros.reduce((total, num) => total + num, 0);
            resultado += "Suma de los 4 números: " + suma;
        }

        return resultado;
    }

    let numeros = [];
    for (let i = 1; i <= 4; i++) {
        let num = parseInt(prompt("Ingrese el número " + i + ":"));
        if (num >= 0) {
            numeros.push(num);
        } else {
            alert("Debe ingresar un número entero positivo.");
            break;
        }
    }

    alert(realizarOperaciones(numeros));

}

function ejercicio21() {
    function calcularFactorial(numero) {
        if (numero < 0) {
            return "El factorial no está definido para números negativos.";
        } else if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let factorial = 1;
            for (let i = 2; i <= numero; i++) {
                factorial *= i;
            }
            return factorial;
        }
    }

    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let resultado = calcularFactorial(numero);
    alert("El factorial de " + numero + " es: " + resultado);

}

function ejercicio22() {
    function sumaPrimerosNNumeros(n) {
        if (n < 0) {
            return "El número debe ser positivo.";
        } else {
            return n * (n + 1) / 2;
        }
    }

    let n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
    let resultado = sumaPrimerosNNumeros(n);
    alert("La suma de los primeros " + n + " números es: " + resultado);

}

function ejercicio23() {
    function sumaNumerosImpares(n) {
        if (n < 0) {
            return "El número debe ser positivo.";
        } else {
            let suma = 0;
            for (let i = 1; i <= n; i += 2) {
                suma += i;
            }
            return suma;
        }
    }

    let n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a n:"));
    let resultado = sumaNumerosImpares(n);
    alert("La suma de los números impares menores o iguales a " + n + " es: " + resultado);

}

function ejercicio24() {
    function sumaNumerosParesHastaMil() {
        let suma = 0;
        for (let i = 2; i <= 1000; i += 2) {
            suma += i;
        }
        return suma;
    }

    let resultado = sumaNumerosParesHastaMil();
    alert("La suma de todos los números pares hasta 1000 es: " + resultado);

}

function ejercicio25() {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }


    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let resultado = factorial(numero);
    alert("El factorial de " + numero + " es: " + resultado);

}

function ejercicio26() {
    function divisionRestasSucesivas(dividendo, divisor) {
        let cociente = 0;
        let resto = dividendo;

        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }

        return { cociente: cociente, resto: resto };
    }

    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));

    let resultado = divisionRestasSucesivas(dividendo, divisor);
    alert("Cociente: " + resultado.cociente);
    alert("Resto: " + resultado.resto);

}

function ejercicio27() {
    function calcularMedia() {
        let suma = 0;
        let cantidadNumeros = 0;

        while (true) {
            let numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para finalizar):"));

            if (numero < 0) {
                break;
            }

            suma += numero;
            cantidadNumeros++;
        }

        if (cantidadNumeros === 0) {
            return "No se ingresaron números positivos.";
        } else {
            let media = suma / cantidadNumeros;
            return "La media de los números ingresados es: " + media.toFixed(2);
        }
    }

    alert(calcularMedia());

}

function ejercicio28() {
    let contador = 1;
    let suma = 0;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros cien números es: " + suma);

}

function ejercicio29() {
    let contador = 1;
    let suma = 0;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    alert("La suma de los primeros cien números es: " + suma);

}

function ejercicio30() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert("La suma de los primeros cien números es: " + suma);
}

function ejercicio31() {
    function calcularMediaParesImpares() {
        let sumaPares = 0;
        let cantidadPares = 0;
        let sumaImpares = 0;
        let cantidadImpares = 0;

        for (let i = 1; i <= 10; i++) {
            let numero = parseInt(prompt("Ingrese el número " + i + ":"));

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

        return {
            mediaPares: mediaPares,
            mediaImpares: mediaImpares
        };
    }

    let medias = calcularMediaParesImpares();
    alert("La media de los números pares es: " + medias.mediaPares.toFixed(2));
    alert("La media de los números impares es: " + medias.mediaImpares.toFixed(2));

}

function ejercicio32() {
    function ciudadConMayorPoblacion() {
        let provincias = ["Provincia 1", "Provincia 2", "Provincia 3"];
        let ciudades = ["Ciudad 1", "Ciudad 2", "Ciudad 3", "Ciudad 4", "Ciudad 5", "Ciudad 6", "Ciudad 7", "Ciudad 8", "Ciudad 9", "Ciudad 10", "Ciudad 11"];
        let poblacionMayor = 0;
        let ciudadMayor = "";

        for (let i = 0; i < provincias.length; i++) {
            for (let j = 0; j < ciudades.length; j++) {
                let poblacion = parseInt(prompt("Ingrese la población de " + ciudades[j] + " en " + provincias[i] + ":"));
                if (poblacion > poblacionMayor) {
                    poblacionMayor = poblacion;
                    ciudadMayor = ciudades[j] + " en " + provincias[i];
                }
            }
        }

        return ciudadMayor;
    }

    let ciudadMayor = ciudadConMayorPoblacion();
    alert("La ciudad con la población más grande es: " + ciudadMayor);

}

function ejercicio33() {
    do {

        var continuar = prompt("¿Desea continuar? (Sí/No)").toLowerCase();
    } while (continuar === "sí" || continuar === "si");

}

function ejercicio34() {
    for (let i = 1; i <= 9; i++) {
        alerte("Tabla de multiplicar del " + i + ":");

        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            alert(i + " x " + j + " = " + resultado);
        }

        alert("");
    }

}

function ejercicio35() {
    let cantidadNumeros = 20;
    let numeroMayor = Number.MIN_SAFE_INTEGER;
    let numeroMenor = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= cantidadNumeros; i++) {
        let numero = parseInt(prompt("Ingrese el número " + i + ":"));

        if (numero > numeroMayor) {
            numeroMayor = numero;
        }

        if (numero < numeroMenor) {
            numeroMenor = numero;
        }
    }

    alert("El número mayor ingresado es: " + numeroMayor);
    alert("El número menor ingresado es: " + numeroMenor);

}

function ejercicio36() {
    function fibonacci(n) {
        let fibonacciArray = [0, 1];

        for (let i = 2; i <= n; i++) {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }

        return fibonacciArray;
    }

    let n = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci que desea generar:"));
    let serieFibonacci = fibonacci(n);
    alert("La serie de Fibonacci con " + n + " términos es: " + serieFibonacci.join(', '));

}

function ejercicio37() {
    function mcdEuclides(a, b) {

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    let mcd = mcdEuclides(num1, num2);
    alert("El MCD de " + num1 + " y " + num2 + " es: " + mcd);

}

function ejercicio38() {
    function esNumeroPerfecto(numero) {
        let sumaDivisores = 0;

        for (let i = 1; i <= numero / 2; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }

        return sumaDivisores === numero;
    }

    let num = parseInt(prompt("Ingrese un número para verificar si es un número perfecto:"));
    if (esNumeroPerfecto(num)) {
        alert(num + " es un número perfecto.");
    } else {
        alert(num + " no es un número perfecto.");
    }

}

function ejercicio39() {
    function calcularAproximacionPi(terminos) {
        let piAproximado = 0;
        let signo = 1;

        for (let i = 0; i < terminos; i++) {
            piAproximado += signo * (4 / (2 * i + 1));
            signo *= -1;
        }

        return piAproximado;
    }


    let aproximacionPi = calcularAproximacionPi(10000);
    alert("Aproximación de π con la serie de Gregory-Leibniz:", aproximacionPi);


}

function ejercicio40() {
    function calcularAproximacionPi(terminos) {
        let piAproximado = 3;
        let denominador = 2;
        for (let i = 1; i <= terminos; i++) {

            piAproximado += 4 / (denominador * (denominador + 1) * (denominador + 2)) * (i % 2 === 0 ? -1 : 1);
            denominador += 2;
        }

        return piAproximado;
    }

    let aproximacionPi = calcularAproximacionPi(10000);
    alert("Aproximación de π con la serie de Nilakantha:", aproximacionPi);

}