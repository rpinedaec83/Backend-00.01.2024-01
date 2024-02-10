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
function ejercicio2(){
     
     let numero = parseInt(prompt("Escriba un numero entero"));
     if (numero < 0) {
        alert("El número es Negativo");
    } else if (numero > 0) {
        alert("El número no es Negativo");
    } else {
        alert("El número es cero");
    }
}
function ejercicio3(){
    let numero =prompt("Escribe un numero")
    if(numero%10 ==4){
        alert("El número termina en 4");
    }else {
        alert("El número no termina en 4");
    }
}
function ejercicio4(){
    let numero1 = parseInt(prompt("Escriba el primer numero entero"));
    let numero2 = parseInt(prompt("Escriba el segundo numero entero"));
    let numero3 = parseInt(prompt("Escriba el tercer numero entero"));
    let numeros = [numero1, numero2, numero3];
    numeros.sort(function(a, b) {
        return a - b;
    });
    alert("El Ordenamiento: " + numeros[0] + ", " + numeros[1] + ", " + numeros[2]);
}
function ejercicio5(){
    const precioZ = 80;
    let cantZap = parseInt(prompt("Ingrese cantidad de Zapatos a Comprar"));
    let preCompra = cantZap * precioZ;
    let desc = 0;
    let precioTotal = 0;
    if (cantZap <= 10) {
        alert("Precio total de compra: $" + preCompra);
    } else if (cantZap <= 20) {
        desc = preCompra * 0.1;
    } else if (cantZap <= 30) {
        desc = preCompra * 0.2;
    } else {
        desc = preCompra * 0.4;
    }
    precioTotal = preCompra - desc;
    alert("Sub Total: $" + preCompra);
    alert(`Tiene un descuento de ${desc * 100 / preCompra}%, el descuento es: $${desc}`);
    alert("Precio Total a pagar: $" + precioTotal);

}
function ejercicio6(){
    const horas = 40
    let hrCuar = 20
    let hrEx = 25
    let pagoFinal = 0
    let temp = 0
    let hrasTra = prompt("Ingresar numero de horas de trabajo");
    if (hrasTra > horas) {
        temp = hrasTra - horas
        pagoFinal = (hrasTra * hrCuar) + (temp * hrEx)
        
    }else {
        pagoFinal = hrasTra * hrCuar
        }
        alert ("Su sueldo semanal sera de : " +pagoFinal+"$")
}
function ejercicio7(){
    let membresia = prompt("Escriba tipo de Membresia").toUpperCase(); 

    switch (membresia) {
        case "A":
            alert("Tiene un descuento del 10%");
            break;
        case "B":
            alert("Tiene un descuento del 15%");
            break;
        case "C":
            alert("Tiene un descuento del 20%");
            break;
        default:
            alert("No tiene descuento alguno");
    }
}
function ejercicio8(){
    // CONSIDERO QUE LA NOTA PARA APROBAR ES DE 12 
    let promedio = 0
    let nota1 = parseInt(prompt("Ingrese la Nota N° 1 "));  
    let nota2 = parseInt(prompt("Ingrese la Nota N° 2 "));  
    let nota3 = parseInt(prompt("Ingrese la Nota N° 3 ")); 
    promedio = Math.round((nota1 + nota2 + nota3) / 3);
    if (promedio >= 12) {
        alert("Aprobado");
        alert("Su nota final es: " + promedio);
    } else {
        alert("Desaprobado");
        alert("Su nota final es: " + promedio);
    }
}
function ejercicio9(){
   let aumento = 0
    let sueldo = parseInt(prompt("Ingrese su sueldo"));
    if (sueldo > 2000){
        aumento = sueldo * 1.05
        alert("Su nuevo salario con aumento del 5% es: " + aumento)
    }else{
        aumento = sueldo * 1.1
        alert("Su nuevo salario con aumento del 10% es: " + aumento)
    }
}
function ejercicio10(){
    let num = parseInt(prompt("Ingrese un número"));

    let mensaje = (num % 2 === 0) ? "El número es Par" : 
    "El número es Impar";

    alert(mensaje);
}
function ejercicio11(){
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número");
    let num3 = prompt("Ingrese el tercer número");

    let may = Math.max(num1, num2, num3);

    alert("El número mayor es: " + may);
}
function ejercicio12(){
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número");
    let may = Math.max(num1, num2 );

    alert("El número mayor es: " + may);
}
function ejercicio13(){
    let letra = prompt("Escriba la letra");
    letra = letra.toLowerCase();
    if ("aeiou".includes(letra)) {
        alert("La letra ingresada sí es una vocal");
    } else {
        alert("La letra ingresada no es una vocal");
    }
}
function ejercicio14(){
    let num = parseInt(prompt("Ingrese un número entre 1 y 10:"));

    if (num >= 1 && num <= 10) {
        let contador = 0;

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                contador = contador + 1;
            }
        }
        if (contador === 2) {
            alert("El número " + num + " es un número primo.");
        } else {
            alert("El número " + num + " no es un número primo.");
        }
    } else {
        alert("El número debe estar entre 1 y 10.");
    }
}
function ejercicio15(){
    let centimetros = parseFloat(prompt("Ingrese la longitud en centímetros:"));
    let pulgadas = centimetros / 2.54;
    alert(`${centimetros} centímetros son aproximadamente ${pulgadas.toFixed(2)} pulgadas.`);

    let libras = parseFloat(prompt("Ingrese el peso en libras:"));
    let kilogramos = libras / 2.20462;
    alert(`${libras} libras son aproximadamente ${kilogramos.toFixed(2)} kilogramos.`);
}
function ejercicio16(){
    let num = parseInt(prompt("Ingrese un número del 1 al 7:"));
    /* Considerando  el estandar ISO 8601 del año 2004 
    establecido que la semana comienza el lunes y termina 
     el domingo */
    switch (num) {
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
            alert("Número no válido. Debe estar entre 1 y 7.");
    }
}
function ejercicio17(){
    let h = parseInt(prompt("Ingrese la hora (formato de 24 horas):"));
    let m = parseInt(prompt("Ingrese los minutos:"));
    let s = parseInt(prompt("Ingrese los segundos:"));

    if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
        s = s + 1;

        if (s === 60) {
            s = 0;
            m = m + 1;

            if (m === 60) {
                m = 0;
                h = h + 1;

                if (h === 24) {
                    h = 0;
                }
            }
        }

        alert("La hora después de un segundo es: " + formatearHora(h) + ":" + formatearHora(m) + ":" + formatearHora(s));
    } else {
        alert("Hora no válida. Las horas deben estar en el rango de 0 a 23, los minutos y segundos están en el rango de 0 a 59.");
    }
    function formatearHora(numero) {
        return numero < 10 ? "0" + numero : numero;
    }
}
function ejercicio18(){
    let numCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    let precioUnitario = 0;
    let gananciaPorCD = 0;
    let precioTotalCliente = 0;
    let gananciaTotalVendedor = 0;
    const perctG = 8.25;

    if (numCDs >= 0) {
        if (numCDs <= 9) {
            precioUnitario = 10.0;
        } else if (numCDs <= 99) {
            precioUnitario = 8.0;
        } else if (numCDs >= 100 && numCDs <= 499) {
            precioUnitario = 7.0;
        } else {
            precioUnitario = 6.0;
        }

        // Precio total para el cliente
        precioTotalCliente = numCDs * precioUnitario;

        // Ganancia para el vendedor
        gananciaPorCD = precioUnitario * (perctG / 100);
        gananciaTotalVendedor = numCDs * gananciaPorCD;

        alert("Precio total para el cliente: $" + precioTotalCliente);
        alert("Ganancia para el vendedor: $" + gananciaTotalVendedor);
    } else {
        alert("La cantidad de CDs debe ser no negativa.");
    }
}
function ejercicio19(){
    const tarifasPorDia = {
        1: 56,
        2: 64,
        3: 80,
        4: 48
    };

    let tipo = parseInt(prompt("Ingrese el tipo de empleado:\n" +
        "Si eres cajero digita ---> 1\n" +
        "Servidor digita ---> 2\n" +
        "Preparador de mezclas digita ---> 3\n" +
        "Mantenimiento digita ---> 4"
    ));
    let dias = parseInt(prompt("Ingrese cantidad de días que trabajó en la semana:"));

    if (dias <= 6) {
        let tarifaPorDia = tarifasPorDia[tipo];

        if (tarifaPorDia !== undefined) {
            let pagof = dias * tarifaPorDia;
           alert("Pago final: $" + pagof);
        } else {
           alert("Error al digitar el tipo de empleado");
        }
    } else {
       alert("Máximo son 6 días de trabajo");
    }
}
function ejercicio20(){
   // Leer 4 números enteros positivos
   let numeros = Array.from({ length: 4 }, (_, i) => parseInt(prompt(`Ingrese el número ${i + 1}`)));

   // Cuántos números son pares
   let pares = numeros.filter(numero => numero % 2 === 0).length;
  alert(`Cantidad de números pares: ${pares}`);

   // Mayor de todos
   let mayor = Math.max(...numeros);
  alert(`El número mayor es: ${mayor}`);

   // Si el tercero es par, calcular el cuadrado del segundo
   if (numeros[2] % 2 === 0) {
       let cuadradoSegundo = Math.pow(numeros[1], 2);
      alert(`Cuadrado del segundo número: ${cuadradoSegundo}`);
   }

   // Si el primero es menor que el cuarto, calcular la media de los 4 números
   if (numeros[0] < numeros[3]) {
       let media = numeros.reduce((sum, numero) => sum + numero, 0) / numeros.length;
      alert(`Media de los 4 números: ${media}`);
   }

   // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
   if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
       let suma = numeros.reduce((sum, numero) => sum + numero, 0);
      alert(`Suma de los 4 números: ${suma}`);
   } 
}
