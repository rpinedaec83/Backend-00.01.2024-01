//************************************************************** */
function Ejercicio1() {
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if (nroCaracteres == 3) {
        alert("Si tiene 3 caracteres")
    }
    else {
        alert("No tiene 3 caracteres");
    }
}

//************************************************************** */
function Ejercicio2() {
    let numero = prompt("Escriba su numero");
    let n = numero;
    if (n >= 3) {
        alert("El numero es positivo")
    }
    else {
        alert("El numero es negativo");
    }
}

//************************************************************** */
function Ejercicio3() {
    let numero = prompt("Escriba su numero");
    let n = numero;
    if (n % 10 == 4) {
        alert("El numero " + n + " termina en 4");
    }
    else {
        alert("El numero " + n + " no termina en 4");
    }
}
//************************************************************** */

function Ejercicio4() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let aux = 0;
    num1 = prompt("Escriba el primer número:");
    num2 = prompt("Escriba el segundo número:");
    num3 = prompt("Escriba el tercer número:");

    do {
        if (num1 > num2) {
            aux = num1;
            num1 = num2;
            num2 = aux;
        }

        if (num2 > num3) {
            aux = num2;
            num2 = num3;
            num3 = aux;
        }
    } while (num1 > num2 || num2 > num3)
    alert("Números ordenados de menor a mayor:\n" + num1 + "\n" + num2 + "\n" + num3);


}
//************************************************************** */

function Ejercicio5() {
    let Zapatos, precio = 80, impo, total;
    Zapatos = parseInt(prompt("Ingrese la cantidad de zapatos:"));

    if (Zapatos > 10 && Zapatos < 20) {
        impo = Zapatos * precio;
        total = impo - (impo * 0.1);
        alert("Usted tiene un descuento del 10% en su compra. El total a pagar es: $" + total);
    } else if (Zapatos > 20 && Zapatos < 30) {
        impo = Zapatos * precio;
        total = impo - (impo * 0.2);
        alert("Usted tiene un descuento del 20% en su compra. El total a pagar es: $" + total);
    } else if (Zapatos > 30) {
        impo = Zapatos * precio;
        total = impo - (impo * 0.4);
        alert("Usted tiene un descuento del 40% en su compra. El total a pagar es: $" + total);
    }
}

//************************************************************************ */
function Ejercicio6() {
    let HorasT, total;
    let sHora = 20;

    HorasT = parseInt(prompt("Ingrese la cantidad de horas laboradas:"));
    if (HorasT < 40) {
        total = HorasT * sHora;
        alert("El total a pagar es: $" + total);
    } else {
        total = 40 * sHora + (HorasT - 40) * 25;
        alert("El total a pagar es: $" + total);
    }
}
//************************************************************************ */
function Ejercicio7() {
    let TipoM, Precio, total;
    TipoM = prompt("Ingrese el tipo de membresía (A, B, o C):");
    Precio = parseFloat(prompt("Ingrese el precio:"));

    if (TipoM.toLowerCase() === "a") {
        total = Precio - (Precio * 0.1);
        alert("El tipo de membresía es " + TipoM + ". Tiene un 10% de descuento. El importe total es: $" + total);
    } else if (TipoM.toLowerCase() === "b") {
        total = Precio - (Precio * 0.15);
        alert("El tipo de membresía es " + TipoM + ". Tiene un 15% de descuento. El importe total es: $" + total);
    } else if (TipoM.toLowerCase() === "c") {
        total = Precio - (Precio * 0.2);
        alert("El tipo de membresía es " + TipoM + ". Tiene un 20% de descuento. El importe total es: $" + total);
    } else {
        alert("Tipo de membresía no válido. Por favor, ingrese A, B o C.");
    }
}
//************************************************************************ */
function Ejercicio8() {
    let Nombre, N1, N2, N3, Promedio;
    Nombre = prompt("Ingrese el nombre del estudiante:");
    N1 = parseFloat(prompt("Ingrese la primera nota:"));
    N2 = parseFloat(prompt("Ingrese la segunda nota:"));
    N3 = parseFloat(prompt("Ingrese la tercera nota:"));
    Promedio = (N1 + N2 + N3) / 3;

    if (Promedio <= 12) {
        alert("El estudiante " + Nombre + " está reprobado con un promedio de: " + Math.trunc(Promedio));
    } else if (Promedio >= 13) {
        alert("El estudiante " + Nombre + " está aprobado con un promedio de: " + Math.trunc(Promedio));
    } else {
        alert("Ingrese notas válidas para calcular el promedio.");
    }
}

//************************************************************************ */
function Ejercicio9() {
    let Sueldo, total;
    Sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador:"));

    if (Sueldo > 2000) {
        total = Sueldo + (Sueldo * 0.05);
        alert("El sueldo del trabajador es $" + Sueldo + ". Tienes un 5% de aumento en tu sueldo. El total es: $" + total);
    } else if (Sueldo < 2000) {
        total = Sueldo + (Sueldo * 0.1);
        alert("El sueldo del trabajador es $" + Sueldo + ". Tienes un 10% de aumento en tu sueldo. El total es: $" + total);
    } else {
        alert("Ingrese un sueldo válido para calcular el aumento.");
    }
}

//************************************************************************ */
function Ejercicio10() {
    let numero, n;
    numero = parseInt(prompt("Ingrese un número:"));

    n = numero % 2;

    if (n === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}

//************************************************************************ */
function Ejercicio11() {
    let x, j, z, aux;
    x = parseInt(prompt("Ingrese el primer número:"));
    j = parseInt(prompt("Ingrese el segundo número:"));
    z = parseInt(prompt("Ingrese el tercer número:"));

    do {
        if (x > j) {
            aux = x;
            x = j;
            j = aux;
        }

        if (j > z) {
            aux = j;
            j = z;
            z = aux;
        }
    } while (!(x < j && j < z));

    alert("El mayor es: " + z);
}
//************************************************************************ */
function Ejercicio12() {
    let x, j, aux;
    x = parseInt(prompt("Ingrese el primer número:"));
    j = parseInt(prompt("Ingrese el segundo número:"));

    do {
        if (x > j) {
            aux = x;
            x = j;
            j = aux;
        }
    } while (!(x < j));

    alert("El mayor es: " + j);
}

//************************************************************************ */
function Ejercicio13() {
    let letra;
    letra = prompt("Ingrese una letra: ");
    letra = letra.toLowerCase(); // Convertir a minúsculas para comparar solo con minúsculas

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        alert("La letra ingresada es una vocal.");
    } else {
        alert("La letra ingresada no es una vocal.");
    }
}

//************************************************************************ */
function Ejercicio14() {
    let numero, i, contador;
    numero = parseInt(prompt("Ingrese un número entre 1 y 10 (excluyendo el 9): "));

    if (numero >= 1 && numero <= 10 && numero !== 9) {
        contador = 0;

        for (i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                contador = contador + 1;
            }
        }

        if (contador === 2) {
            alert("El número ingresado es primo.");
        } else {
            alert("El número ingresado no es primo.");
        }
    } else {
        alert("Número fuera del rango o igual a 9. Por favor, ingrese un número válido.");
    }
}
//************************************************************************ */
function Ejercicio15() {
    const cm_a_pulgadas = 0.393701;
    const libras_a_kg = 0.453592;
    centimetros = parseFloat(prompt("Ingrese la longitud en centímetros: "));
    libras = parseFloat(prompt("Ingrese el peso en libras: "));

    pulgadas = centimetros * cm_a_pulgadas;
    kilogramos = libras * libras_a_kg;

    alert("Longitud en pulgadas: " + pulgadas);
    alert("Peso en kilogramos: " + kilogramos);
}
//************************************************************************ */
function Ejercicio16() {
    let numero;
    numero = parseInt(prompt("Ingrese un número del 1 al 7: "));

    switch (numero) {
        case 1:
            alert("El número " + numero + " corresponde al día Lunes.");
            break;

        case 2:
            alert("El número " + numero + " corresponde al día Martes.");
            break;

        case 3:
            alert("El número " + numero + " corresponde al día Miércoles.");
            break;

        case 4:
            alert("El número " + numero + " corresponde al día Jueves.");
            break;

        case 5:
            alert("El número " + numero + " corresponde al día Viernes.");
            break;

        case 6:
            alert("El número " + numero + " corresponde al día Sábado.");
            break;

        case 7:
            alert("El número " + numero + " corresponde al día Domingo.");
            break;

        default:
            alert("Número fuera del rango. Por favor, ingrese un número del 1 al 7.");
    }
}
//************************************************************************ */
function Ejercicio17() {
    let hora, minuto, segundo;
    hora = parseInt(prompt("Ingrese la hora (formato 24 horas): "));
    minuto = parseInt(prompt("Ingrese los minutos: "));
    segundo = parseInt(prompt("Ingrese los segundos: "));

    if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
        segundo = segundo + 1;

        if (segundo === 60) {
            segundo = 0;
            minuto = minuto + 1;

            if (minuto === 60) {
                minuto = 0;
                hora = hora + 1;

                if (hora === 24) {
                    hora = 0;
                }
            }
        }

        alert("La hora un segundo después es: " + hora + ":" + minuto + ":" + segundo);
    } else {
        alert("Los valores ingresados no son válidos. Verifique la hora, los minutos y los segundos.");
    }

}
//************************************************************************ */
function Ejercicio18() {
    const precio_1_a_9 = 10;
    const precio_10_a_99 = 8;
    const precio_100_a_499 = 7;
    const precio_mas_500 = 6;
    const ganancia_porcentaje = 8.25 / 100;

    let cantidad_cds, precio_total, ganancia_vendedor;
    cantidad_cds = parseInt(prompt("Ingrese la cantidad de CDs a vender: "));

    if (cantidad_cds >= 1 && cantidad_cds <= 9) {
        precio_total = cantidad_cds * precio_1_a_9;
    } else if (cantidad_cds >= 10 && cantidad_cds <= 99) {
        precio_total = cantidad_cds * precio_10_a_99;
    } else if (cantidad_cds >= 100 && cantidad_cds <= 499) {
        precio_total = cantidad_cds * precio_100_a_499;
    } else if (cantidad_cds >= 500) {
        precio_total = cantidad_cds * precio_mas_500;
    }

    ganancia_vendedor = precio_total * ganancia_porcentaje;


    alert("Precio total para el cliente: $" + precio_total);
    alert("Ganancia para el vendedor: $" + ganancia_vendedor);
}
//************************************************************************ */
function Ejercicio19() {
    const salario_cajero = 56;
    const salario_servidor = 64;
    const salario_preparador = 80;
    const salario_mantenimiento = 48;

    let id_empleado, dias_trabajados, salario_total;
    id_empleado = parseInt(prompt("Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento): "));
    dias_trabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días): "));

    if (dias_trabajados < 1 || dias_trabajados > 6) {
        alert("La cantidad de días trabajados no es válida. Ingrese un valor entre 1 y 6.");
    } else {
        switch (id_empleado) {
            case 1:
                salario_total = salario_cajero * dias_trabajados;
                break;

            case 2:
                salario_total = salario_servidor * dias_trabajados;
                break;

            case 3:
                salario_total = salario_preparador * dias_trabajados;
                break;

            case 4:
                salario_total = salario_mantenimiento * dias_trabajados;
                break;

            default:
                alert("Número de empleado no válido. Ingrese un valor entre 1 y 4.");
        }

        alert("El dueño debe pagar al empleado: $" + salario_total);
    }

}
//************************************************************************ */
function Ejercicio20() {
    let num1, num2, num3, num4;
    let contador_pares = 0;
    let mayor, media, suma, Cuadrado;

    num1 = parseFloat(prompt("Ingrese el primer número: "));
    num2 = parseFloat(prompt("Ingrese el segundo número: "));
    num3 = parseFloat(prompt("Ingrese el tercer número: "));
    num4 = parseFloat(prompt("Ingrese el cuarto número: "));

    if (num1 % 2 === 0) {
        contador_pares++;
    }

    if (num2 % 2 === 0) {
        contador_pares++;
    }

    if (num3 % 2 === 0) {
        contador_pares++;
    }

    if (num4 % 2 === 0) {
        contador_pares++;
    }

    // Encontrar el mayor de todos
    mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    if (num4 > mayor) {
        mayor = num4;
    }

    // Si el tercero es par, calcular el cuadrado del segundo
    if (num3 % 2 === 0) {
        Cuadrado = num2 * num2;
    }

    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    if (num1 < num4) {
        media = (num1 + num2 + num3 + num4) / 4;
    }

    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        suma = num1 + num2 + num3 + num4;
    }

    // Mostrar resultados usando alert
    alert("Cantidad de números pares: " + contador_pares);
    alert("El mayor de todos: " + mayor);

    if (num3 % 2 === 0) {
        alert("Cuadrado del segundo si el tercero es par: " + Cuadrado);
    }

    if (num1 < num4) {
        alert("Media de los 4 números si el primero es menor que el cuarto: " + media);
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        alert("Suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700: " + suma);
    }
}
//************************************************************************ */
function Ejercicio21() {
    let numero, factorial;
    numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
    if (numero >= 0) {
        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }
        alert("El factorial de " + numero + " es: " + factorial);
    } else {
        alert("Por favor, ingrese un número no negativo para calcular el factorial.");
    }

}
//************************************************************************ */
function Ejercicio22() {
    let n, suma;

    n = parseInt(prompt("Ingrese el valor de n para calcular la suma de los primeros n números: "));

    suma = 0;

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            suma = suma + i;
        }
        alert("La suma de los primeros " + n + " números es: " + suma);
    } else {
        alert("Por favor, ingrese un valor de n mayor que 0 para calcular la suma.");
    }
}
//************************************************************************ */
function Ejercicio23() {
    let n, suma;
    n = parseInt(prompt("Ingrese el valor de n para calcular la suma de los números impares menores o iguales a n: "));

    suma = 0;

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                suma = suma + i;
            }
        }
        alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
    } else {
        alert("Por favor, ingrese un valor de n mayor que 0 para calcular la suma.");
    }
}
//************************************************************************ */
function Ejercicio24() {
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert("La suma de todos los números pares hasta 1000 es: " + suma);
}
//************************************************************************ */
function Ejercicio25() {
    let factorial = 1;
    let i = 1;
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));

    while (i <= numero) {
        factorial *= i;
        i++;
    }

    alert("El factorial de " + numero + " es: " + factorial);
}
//************************************************************************ */
function Ejercicio26() {
    let dividendo, divisor, cociente, resto;
    cociente = 0;
    resto = 0;

    dividendo = parseInt(prompt("Ingrese el dividendo: "));
    divisor = parseInt(prompt("Ingrese el divisor: "));

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    resto = dividendo;

    alert("El cociente es: " + cociente);
    alert("El resto es: " + resto);
}
//************************************************************************ */
function Ejercicio27() {
    let numero, suma = 0, cantidad = 0, media = 0;

    numero = parseFloat(prompt("Ingrese un número (ingrese un número negativo para finalizar): "));

    while (numero >= 0) {
        numero = parseFloat(prompt("Ingrese un número (ingrese un número negativo para finalizar): "));

        if (numero >= 0) {
            suma += numero;
            cantidad++;
        }
    }

    if (cantidad > 0) {
        media = suma / cantidad;
        alert("La media de los números positivos ingresados es: " + media);
    } else {
        alert("No se ingresaron números positivos.");
    }
}
//************************************************************************ */
function Ejercicio28() {
    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++;
    } while (contador <= 100);


    alert("La suma de los primeros cien números es: " + suma);
}

//************************************************************************ */
function Ejercicio29() {
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }


    alert("La suma de los primeros cien números es: " + suma);
}
//************************************************************************ */
function Ejercicio30() {
    let suma = 0;

    for (let contador = 1; contador <= 100; contador++) {
        suma += contador;
    }

    alert("La suma de los primeros cien números es: " + suma);
}
//************************************************************************ */
function Ejercicio31() {
    let numero, sumaPares = 0, sumaImpares = 0, contadorPares = 0, contadorImpares = 0, mediaPares, mediaImpares;

    for (let i = 1; i <= 10; i++) {
        numero = parseFloat(prompt("Ingrese el número " + i + ": "));

        if (numero % 2 === 0) {
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    if (contadorPares > 0) {
        mediaPares = sumaPares / contadorPares;
        alert("La media de los números pares es: " + mediaPares);
    } else {
        alert("No se ingresaron números pares.");
    }

    if (contadorImpares > 0) {
        mediaImpares = sumaImpares / contadorImpares;
        alert("La media de los números impares es: " + mediaImpares);
    } else {
        alert("No se ingresaron números impares.");
    }
}
//************************************************************************ */
function Ejercicio32() {
    let poblacion, maxPoblacion = 0;
    let provinciaMaxPoblacion, ciudadMaxPoblacion;

    for (let provincia = 1; provincia <= 3; provincia++) {
        for (let ciudad = 1; ciudad <= 11; ciudad++) {
            poblacion = parseInt(prompt("Ingrese la población de la ciudad " + ciudad + " en la provincia " + provincia + ": "));

            if (poblacion > maxPoblacion) {
                maxPoblacion = poblacion;
                provinciaMaxPoblacion = "Provincia " + provincia;
                ciudadMaxPoblacion = "Ciudad " + ciudad;
            }
        }
    }

    alert("La ciudad con la población más alta es: " + ciudadMaxPoblacion + " en la " + provinciaMaxPoblacion + " con una población de " + maxPoblacion)
}
//************************************************************************ */
function Ejercicio33() {
    let continuar;

    do {
        continuar = prompt("¿Desea continuar con el programa? (S/N): ");
        continuar = continuar.toUpperCase();
    } while (continuar !== "N");
}
//************************************************************************ */
function Ejercicio34() {
    let numero, multiplicador, resultado;

    for (numero = 1; numero <= 9; numero++) {
        let tablaMultiplicar = "Tabla de multiplicar del " + numero + ":\n";

        for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
            resultado = numero * multiplicador;
            tablaMultiplicar += numero + " x " + multiplicador + " = " + resultado + "\n";
        }

        tablaMultiplicar += "---------------------------";
        alert(tablaMultiplicar);
    }
}
//************************************************************************ */
function Ejercicio35() {
    let numero, mayor, menor;

    numero = parseFloat(prompt("Ingrese el primer número: "));
    mayor = numero;
    menor = numero;

    for (let i = 2; i <= 20; i++) {
        numero = parseFloat(prompt("Ingrese el número " + i + ": "));

        if (numero > mayor) {
            mayor = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }

    alert("El número mayor es: " + mayor);
    alert("El número menor es: " + menor);
}
//************************************************************************ */
function Ejercicio36() {
    let limite, a, b, c;

    a = 0;
    b = 1;

    limite = parseInt(prompt("Ingrese el límite de la serie de Fibonacci: "));
    alert(a);
    alert(b);

    for (let i = 3; i <= limite; i++) {
        c = a + b;
        alert(c);
        a = b;
        b = c;
    }
}
//************************************************************************ */
function Ejercicio37() {
    let num1, num2, resto;

    num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));

    while (num2 !== 0) {
        resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

    alert("El MCD de los dos números es: " + num1);
}
//************************************************************************ */
function Ejercicio38() {
    let numero, sumaDivisores, divisor;

    numero = parseInt(prompt("Ingrese un número para verificar si es perfecto: "));
    sumaDivisores = 0;

    for (divisor = 1; divisor <= numero / 2; divisor++) {
        if (numero % divisor === 0) {
            sumaDivisores += divisor;
        }
    }

    if (sumaDivisores === numero) {
        alert("El número " + numero + " es un número perfecto.");
    } else {
        alert("El número " + numero + " no es un número perfecto.");
    }
}
//************************************************************************ */
function Ejercicio39() {
    let n, piAproximado;

    n = parseInt(prompt("Ingrese el número de términos para la aproximación de pi: "));
    piAproximado = 0;

    // utilizando la serie de Gregory-Leibniz
    for (let i = 0; i < n; i++) {
        piAproximado += Math.pow(-1, i) * (4 / (2 * i + 1));
    }

    alert("La aproximación de pi con " + n + " términos es: " + piAproximado);
}
//************************************************************************ */
function Ejercicio40() {
    let n, piAproximado;

    n = parseInt(prompt("Ingrese el número de términos para la aproximación de pi: "));
    piAproximado = 3.0;

    // utilizando la serie de Nilakantha
    for (let i = 1; i <= n; i++) {
        piAproximado += Math.pow(-1, i) * (4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)));
    }

    alert("La aproximación de pi con " + n + " términos es: " + piAproximado);
}




