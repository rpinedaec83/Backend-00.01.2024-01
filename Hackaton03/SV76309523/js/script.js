function ejercicio1() {
    let numero = prompt("Escriba su numero");
    if (!isNaN(numero)) {
        numero = parseInt(numero);

        if (numero >= 100 && numero <= 999) {
            alert("El número tiene tres dígitos.");
        } else {
            alert("El número NO tiene tres dígitos.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function ejercicio2() {
    let numero = prompt("Escriba su número entero");
    
    if (!isNaN(numero)) {
        numero = parseInt(numero);

        if (numero < 0) {
            alert("El número es negativo.");
        } else if (numero === 0) {
            alert("El número es cero.");
        } else {
            alert("El número es positivo.");
        }
    } else {
        alert("Por favor, ingrese un número entero válido.");
    }
}

function ejercicio3() {
    let numero = prompt("Escriba su número");
    
    if (!isNaN(numero)) {
        if (numero % 10 === 4) {
            alert("El número termina en 4.");
        } else {
            alert("El número NO termina en 4.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function ejercicio4() {
    let num1 = prompt("Escriba el primer número entero");
    let num2 = prompt("Escriba el segundo número entero");
    let num3 = prompt("Escriba el tercer número entero");

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);

        let numerosOrdenados = [num1, num2, num3];
        numerosOrdenados.sort(function(a, b) {
            return a - b;
        });

        alert("Números ordenados de menor a mayor: " + numerosOrdenados.join(", "));
    } else {
        alert("Por favor, ingrese tres números enteros válidos.");
    }
}

function ejercicio5() {
    let cantidadZapatos, precioUnitario, totalCompra, descuento, totalConDescuento;

    cantidadZapatos = prompt("Ingrese la cantidad de zapatos comprados:");
    cantidadZapatos = parseInt(cantidadZapatos);
    precioUnitario = 80;
    totalCompra = cantidadZapatos * precioUnitario;

    if (cantidadZapatos > 30) {
        descuento = 0.4;
    } else if (cantidadZapatos > 20) {
        descuento = 0.2;
    } else if (cantidadZapatos > 10) {
        descuento = 0.1;
    } else {
        descuento = 0;
    }

    totalConDescuento = totalCompra - (totalCompra * descuento);

    alert("Total de la compra: $" + totalCompra.toFixed(2));
    alert("Descuento aplicado: " + (descuento * 100) + "%");
    alert("Total con descuento: $" + totalConDescuento.toFixed(2));
}

function ejercicio6() {
    let nhoras, pagoporhora, sueldosemanal;

    nhoras = prompt("Ingrese el número de horas trabajadas a la semana:");
    nhoras = parseInt(nhoras);
    pagoporhora = 0;
    sueldosemanal = 0;

    if (nhoras <= 40) {
        pagoporhora = 20;
    } else {
        pagoporhora = 25;
    }

    sueldosemanal = nhoras * pagoporhora;

    alert("El sueldo semanal del trabajador es: $" + sueldosemanal.toFixed(2));
}

function ejercicio7() {
    let totalCompra, descuento, totalConDescuento;
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");

    if (tipoMembresia === 'A' || tipoMembresia === 'B' || tipoMembresia === 'C') {
        switch (tipoMembresia) {
            case 'A':
                descuento = 0.1;
                break;
            case 'B':
                descuento = 0.15;
                break;
            case 'C':
                descuento = 0.2;
                break;
        }

        totalCompra = prompt("Ingrese el total de la compra:");
        totalCompra = parseFloat(totalCompra);

        totalConDescuento = totalCompra - (totalCompra * descuento);

        alert("Total de la compra: $" + totalCompra.toFixed(2));
        alert("Descuento aplicado: " + (descuento * 100) + "%");
        alert("Total con descuento: $" + totalConDescuento.toFixed(2));
    } else {
        alert("Tipo de membresía no válido.");
    }
}

function ejercicio8() {
    let numero1, numero2, numero3, sumatotal, promedio;

    numero1 = prompt("Ingrese la primera nota:");
    numero2 = prompt("Ingrese la segunda nota:");
    numero3 = prompt("Ingrese la tercera nota:");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);

    if (numero1 < 0 || numero1 > 20 || numero2 < 0 || numero2 > 20 || numero3 < 0 || numero3 > 20) {
        alert("ERROR. Las notas deben estar en el rango de 0 a 20.");
    } else {
        sumatotal = numero1 + numero2 + numero3;
        promedio = sumatotal / 3;

        alert("El promedio de las tres notas es: " + promedio.toFixed(2));

        if (promedio >= 10) {
            alert("Estudiante Aprobado.");
        } else {
            alert("Estudiante Reprobado.");
        }
    }
}

function ejercicio9() {
    let salario, aumento, nuevosalario;

    salario = prompt("Ingrese el sueldo del trabajador:");
    salario = parseFloat(salario);

    if (salario > 2000) {
        aumento = 0.05;
    } else {
        aumento = 0.10;
    }

    nuevosalario = salario + (salario * aumento);

    alert("El salario más el aumento es: $" + nuevosalario.toFixed(2));
    alert("El aumento es de: $" + (salario * aumento).toFixed(2));
}

function ejercicio10() {
    let numero = prompt("Ingrese el numero:");
    numero = parseFloat(numero);

    if (isNaN(numero)) {
      alert('Por favor, ingresa un número válido.');
    } else if (numero % 2 === 0) {
      alert('El número es par.');
    } else {
      alert('El número es impar.');
    }
}

function ejercicio11() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert('Por favor, ingresa números válidos.');
    } else {
        if (numero1 > numero2 && numero1 > numero3) {
            alert('El primer número es el mayor: ' + numero1);
        } else if (numero2 > numero1 && numero2 > numero3) {
            alert('El segundo número es el mayor: ' + numero2);
        } else if (numero3 > numero1 && numero3 > numero2) {
            alert('El tercer número es el mayor: ' + numero3);
        } else {
            alert('Hay números iguales o todos son iguales.');
        }
    }
}

function ejercicio12() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingresa números válidos.');
    } else {
        if (numero1 > numero2) {
            alert('El primer número es el mayor: ' + numero1);
        } else if (numero2 > numero1) {
            alert('El segundo número es el mayor: ' + numero2);
        } else {
            alert('Los dos números son iguales.');
        }
    }
}

function ejercicio13() {
    var letra = prompt("Ingresa una letra:").toLowerCase();
    var esVocal = "aeiou".includes(letra);

    if (esVocal) {
        alert("Es una vocal.");
    } else {
        alert("No es una vocal.");
    }
}

function ejercicio14() {
    var numero = parseInt(prompt("Ingresa un entero positivo del 1 al 10 o 9:"));

    if (numero >= 1 && numero <= 10 && numero !== 9) {
        var esPrimo = true;
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            alert("Es un número primo.");
        } else {
            alert("No es un número primo.");
        }
    } else {
        alert("Número fuera del rango permitido.");
    }
}

function ejercicio15() {
    var centimetros = parseFloat(prompt("Ingresa la longitud en centímetros:"));
    var pulgadas = centimetros / 2.54;

    var libras = parseFloat(prompt("Ingresa el peso en libras:"));
    var kilogramos = libras / 2.20462;

    alert(centimetros + " centímetros son equivalentes a " + pulgadas + " pulgadas.");
    alert(libras + " libras son equivalentes a " + kilogramos + " kilogramos.");
}

function ejercicio16() {
    var numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

    switch (numero) {
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
        default:
            alert("Número no válido.");
            break;
    }
}

function ejercicio17() {
    var hora = parseFloat(prompt("Ingresa la hora actual (formato 24 horas):"));
    var horaEnUnSegundo = (hora + 1) % 24;

    alert("La hora dentro de un segundo será: " + horaEnUnSegundo.toFixed(2) + " horas.");
}

function ejercicio18() {
    var cantidadCDs = parseInt(prompt("Ingresa la cantidad de CDs a vender:"));
    var precioUnitario;

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

    var precioTotal = cantidadCDs * precioUnitario;
    var gananciaVendedor = precioTotal * 0.0825;

    alert("Precio total para el cliente: $" + precioTotal.toFixed(2));
    alert("Ganancia para el vendedor: $" + gananciaVendedor.toFixed(2));
}

function ejercicio19() {
    const empleadoId = parseInt(prompt("Ingrese el número identificador del empleado (1-4):"));
    const diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (1-6):"));

    const salario = calcularPago(empleadoId, diasTrabajados);

    if (typeof salario === "number") {
        alert(`El dueño debe pagar $${salario} al empleado.`);
    } else {
        alert(salario);
    }
}

function ejercicio20() {
    const num1 = parseInt(prompt("Ingrese el primer número:"));
    const num2 = parseInt(prompt("Ingrese el segundo número:"));
    const num3 = parseInt(prompt("Ingrese el tercer número:"));
    const num4 = parseInt(prompt("Ingrese el cuarto número:"));

    const resultados = operacionesConNumeros(num1, num2, num3, num4);

    alert(`Resultados:
        - Números pares: ${resultados.numerosPares}
        - Mayor de todos: ${resultados.mayor}
        - Si el tercero es par, cuadrado del segundo: ${resultados.resultadoOperacion3 || "N/A"}
        - Si el primero es menor que el cuarto, media de los 4 números: ${resultados.resultadoOperacion4 || "N/A"}
        - Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, suma de los 4 números: ${resultados.resultadoOperacion5 || "N/A"}`);
}

function ejercicio21() {
    const numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    const factorial = calcularFactorial(numero);

    alert(`El factorial de ${numero} es: ${factorial}`);
}

function ejercicio22() {
    const n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
    const suma = sumaPrimerosNNumeros(n);

    alert(`La suma de los primeros ${n} números es: ${suma}`);
}

function ejercicio23() {
    const n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a n:"));
    const suma = sumaImparesMenoresOIgualesAN(n);

    alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
}

function ejercicio24() {
    const suma = sumaNumerosParesHasta1000();
    alert(`La suma de los números pares hasta 1000 es: ${suma}`);
}

function ejercicio25() {
    const numero = parseInt(prompt("Ingrese un número para calcular su factorial de forma distinta:"));
    const factorial = calcularFactorialDistinto(numero);

    alert(`El factorial de ${numero} calculado de forma distinta es: ${factorial}`);
}

function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    let cociente, resto;

    if (divisor === 0) {
        alert("Error: El divisor no puede ser cero.");
    } else {
        cociente = 0;
        resto = dividendo;

        while (resto >= divisor) {
            resto = resto - divisor;
            cociente = cociente + 1;
        }

        alert("Cociente: " + cociente + "\nResto: " + resto);
    }
}

function ejercicio27() {
    let suma = 0;
    let cantidadNumeros = 0;

    while (true) {
        const numero = parseInt(prompt("Ingrese un número positivo (Ingrese un número negativo para terminar):"));

        if (numero < 0) {
            break;
        }

        suma += numero;
        cantidadNumeros++;
    }

    if (cantidadNumeros === 0) {
        alert("No se ingresaron números positivos.");
    } else {
        const media = suma / cantidadNumeros;
        alert(`La media de los números ingresados es: ${media}`);
    }
}

function ejercicio28() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert(`La suma de los primeros cien números con un ciclo repetir es: ${suma}`);
}

function ejercicio29() {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert(`La suma de los primeros cien números con un ciclo mientras es: ${suma}`);
}

function ejercicio30() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    alert(`La suma de los primeros cien números con un ciclo para es: ${suma}`);
}

function ejercicio31() {
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt("Ingrese un número:"));

        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    }

    const mediaPares = sumaPares / 10;
    const mediaImpares = sumaImpares / 10;

    alert(`Media de números pares: ${mediaPares}\nMedia de números impares: ${mediaImpares}`);
}

function ejercicio32() {
    
    const poblacionPorCiudad = {
        "Cañete": {
            "San Luis": 50000,
            "San Vicente": 75000,
            "Chilca": 60000,
            "Asia": 70000,
            "Coayllo": 55000,
            "Mala": 80000,
            "Pacarán": 60000,
            "Quilmaná": 90000,
            "San Antonio": 65000,
            "Calango": 72000,
            "Imperial": 80000
        },
        "Barranca": {
            "San Luis": 60000,
            "San Vicente": 82000,
            "Chilca": 75000,
            "Asia": 78000,
            "Coayllo": 62000,
            "Mala": 86000,
            "Pacarán": 67000,
            "Quilmaná": 95000,
            "San Antonio": 72000,
            "Calango": 68000,
            "Imperial": 89000
        },
        "Yauyos": {
            "San Luis": 55000,
            "San Vicente": 78000,
            "Chilca": 68000,
            "Asia": 72000,
            "Coayllo": 59000,
            "Mala": 83000,
            "Pacarán": 63000,
            "Quilmaná": 92000,
            "San Antonio": 70000,
            "Calango": 67000,
            "Imperial": 86000
        }
    };

    let ciudadMaxPoblacion = "";
    let maxPoblacion = 0;

    for (const provincia in poblacionPorCiudad) {
        for (const ciudad in poblacionPorCiudad[provincia]) {
            const poblacion = poblacionPorCiudad[provincia][ciudad];

            if (poblacion > maxPoblacion) {
                maxPoblacion = poblacion;
                ciudadMaxPoblacion = ciudad;
            }
        }
    }

    alert(`La ciudad con mayor población es: ${ciudadMaxPoblacion}`);
}

function ejercicio33() {
    let continuar = true;

    while (continuar) {
        alert("El programa está en ejecución.");

        const respuesta = prompt("¿Desea continuar con el programa? (Sí/No)").toLowerCase();
        continuar = respuesta === "si";
    }

    alert("El programa ha sido detenido.");
}

function ejercicio34() {
    let tablaMultiplicar = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            tablaMultiplicar += `${i} x ${j} = ${i * j}\n`;
        }
        tablaMultiplicar += "\n";
    }

    alert("Tabla de multiplicar del 1 al 9:\n\n" + tablaMultiplicar);
}

function ejercicio35() {
    let numeros = [];

    for (let i = 0; i < 20; i++) {
        const numero = parseInt(prompt("Ingrese un número:"));
        numeros.push(numero);
    }

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    alert(`Número mayor: ${mayor}\nNúmero menor: ${menor}`);
}

function ejercicio36() {
    const limite = parseInt(prompt("Ingrese el límite para la serie de Fibonacci:"));

    let a = 0, b = 1, temp;

    let serieFibonacci = "0, 1";

    while (b <= limite) {
        temp = a + b;
        a = b;
        b = temp;
        serieFibonacci += `, ${b}`;
    }

    alert(`Serie de Fibonacci hasta ${limite}:\n${serieFibonacci}`);
}

function ejercicio37() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let residuo;

    while (num2 !== 0) {
        residuo = num1 % num2;
        num1 = num2;
        num2 = residuo;
    }

    alert("El M.C.D. de los dos números es: " + num1);
}

function ejercicio38() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es un número perfecto:"));
    let sumaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        alert("Es un número perfecto.");
    } else {
        alert("No es un número perfecto.");
    }
}

function ejercicio39() {
    let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de pi: "));
    let suma = 0;
    let signo = 1;

    for (let i = 0; i < n; i++) {
        let terminos = 2 * i + 1;
        suma += signo / terminos;
        signo *= -1;
    }

    let piAproximado = 4 * suma;

    alert(`La aproximación de pi con ${n} términos es: ${piAproximado}`);
}

function ejercicio40() {
    let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de pi: "));
    let suma = 3;

    for (let i = 1; i <= n; i++) {
        let denominador = (2 * i) * (2 * i + 1) * (2 * i + 2);
        let termino = 4 / denominador;

        if (i % 2 === 1) {
            suma += termino;
        } else {
            suma -= termino;
        }
    }

    alert(`La aproximación de pi con ${n} términos es: ${suma}`);
}