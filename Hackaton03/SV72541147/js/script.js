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
    const numero = prompt("Por favor ingrese un número entero:");
    const entero = parseInt(numero);
    if (entero < 0) {
    alert(`El número ${entero} es negativo.`);
    } else {
    alert(`El número ${entero} no es negativo.`);
    }
}
function ejercicio3(){
    const numero = prompt("Por favor ingrese un número:");
    if (numero.slice(-1) === '4') {
    alert(`El número ${numero} termina en 4.`);
    } else {
    alert(`El número ${numero} no termina en 4.`);
    }
}
function ejercicio4(){
    const numero1 = parseInt(prompt("Por favor ingrese el primer número entero:"));
    const numero2 = parseInt(prompt("Por favor ingrese el segundo número entero:"));
    const numero3 = parseInt(prompt("Por favor ingrese el tercer número entero:"));

    const numeros = [numero1, numero2, numero3];

    numeros.sort((a, b) => a - b);

    alert("Los números ordenados de menor a mayor son:");
    alert(numeros.join(", "));
 }
 function ejercicio5(){
    const precioZapato = 80;
    const cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos comprados:"));
    const precioTotalSinDescuento = cantidadZapatos * precioZapato;

    let descuento = 0;
    let porcentajeDescuento = 0;

    if (cantidadZapatos > 30) {
         descuento = precioTotalSinDescuento * 0.4; // 40% de descuento
         porcentajeDescuento = 40;
   } else if (cantidadZapatos > 20) {
         descuento = precioTotalSinDescuento * 0.2; // 20% de descuento
         porcentajeDescuento = 20;
   } else if (cantidadZapatos > 10) {
         descuento = precioTotalSinDescuento * 0.1; // 10% de descuento
         porcentajeDescuento = 10;
   }

   const precioTotalConDescuento = precioTotalSinDescuento - descuento;

   alert(`El precio total sin descuento es: $${precioTotalSinDescuento.toFixed(2)}`);
   alert(`Se aplica un descuento del ${porcentajeDescuento}% ($${descuento.toFixed(2)})`);
   alert(`El precio total con descuento es: $${precioTotalConDescuento.toFixed(2)}`);

 }
 function ejercicio6(){
    const tarifaHoraNormal = 20;
    const tarifaHoraExtra = 25;
    
    const horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));
    
    let sueldoSinExtras = 0;
    if (horasTrabajadas <= 40) {
        sueldoSinExtras = horasTrabajadas * tarifaHoraNormal;
    } else {
        sueldoSinExtras = 40 * tarifaHoraNormal; 
    }
    
    const horasExtras = Math.max(0, horasTrabajadas - 40);
    const sueldoTotal = sueldoSinExtras + (horasExtras * tarifaHoraExtra);
    
    alert(`El sueldo semanal del trabajador es: $${sueldoTotal.toFixed(2)}`);
 }
 function ejercicio7(){
    const descuentos = {
        A: 0.1, 
        B: 0.15, 
        C: 0.2 
      };
      
    const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
    const precioHelado = parseFloat(prompt("Ingrese el precio del helado:"));
      
      if (tipoMembresia in descuentos) {
        
    const descuento = descuentos[tipoMembresia];
        
    const precioFinal = precioHelado * (1 - descuento);
         
        alert(`El precio final del helado con membresía tipo ${tipoMembresia} es: $${precioFinal.toFixed(2)}`);
      } else {
        alert("El tipo de membresía ingresado no es válido.");
      }
}
 function ejercicio8(){
    const nota1 = parseFloat(prompt("Ingrese la nota 1:"));
    const nota2 = parseFloat(prompt("Ingrese la nota 2:"));
    const nota3 = parseFloat(prompt("Ingrese la nota 3:"));

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 60) {
      alert(`El estudiante aprobó con un promedio de ${promedio.toFixed(2)}.`);
    } else {
      alert(`El estudiante no aprobó con un promedio de ${promedio.toFixed(2)}.`);
    }
 }
 function ejercicio9(){
    const salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
    const porcentajeAumentoMayor2000 = 0.05; 
    const porcentajeAumentoMenor2000 = 0.1; 

    let aumento = 0;
    if (salarioActual > 2000) {
    aumento = salarioActual * porcentajeAumentoMayor2000;
    } else {
    aumento = salarioActual * porcentajeAumentoMenor2000;
    }

    const nuevoSalario = salarioActual + aumento;
    alert(`El aumento para el trabajador será de $${aumento.toFixed(2)}.`);
    alert(`El nuevo salario del trabajador será de $${nuevoSalario.toFixed(2)}.`);
 }
 function ejercicio10(){
    const numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
      alert(`${numero} es un número par.`);
    } else {
      alert(`${numero} es un número impar.`);
    }
 }
 function ejercicio11(){
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
    alert(`El mayor de los tres números es: ${mayor}`);
 }
 function ejercicio12(){
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    let mayor;
    if (numero1 > numero2) {
    mayor = numero1;
} else if (numero2 > numero1) {
    mayor = numero2;
} else {
    alert("Los números son iguales.");
}
    if (mayor !== undefined) {
    alert(`El número mayor es: ${mayor}`);
}
 }
 function ejercicio13(){
    const letra = prompt("Ingrese una letra:");
    const letraMinuscula = letra.toLowerCase();

    if (letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u') {
    alert("La letra ingresada es una vocal.");
  } else {
    alert("La letra ingresada no es una vocal.");
  }
 }
 function ejercicio14(){
    const numero = parseInt(prompt("Ingrese un número del 1 al 10:"));
    if (numero >= 1 && numero <= 10) {
    let esPrimo = true;

    if (numero === 1) {
    esPrimo = false;
  } else if (numero !== 2 && numero % 2 === 0) {
    esPrimo = false;
  } else if (numero !== 3 && numero % 3 === 0) {
    esPrimo = false;
  } else if (numero !== 5 && numero % 5 === 0) {
    esPrimo = false;
  }

    if (esPrimo) {
      alert(`El número ${numero} es primo.`);
  } else {
      alert(`El número ${numero} no es primo.`);
  }
} else {
  alert("El número ingresado no es válido. Por favor ingrese un número del 1 al 10.");
}
 }
 function ejercicio15(){
    function centimetrosAPulgadas(centimetros) {
        return centimetros / 2.54;
    }
    
    function librasAKilogramos(libras) {
        return libras * 0.453592;
    }
    
    const centimetros = 20;
    const pulgadas = centimetrosAPulgadas(centimetros);
    console.log(`${centimetros} centímetros equivalen a ${pulgadas.toFixed(2)} pulgadas.`);
    
    const libras = 10;
    const kilogramos = librasAKilogramos(libras);
    console.log(`${libras} libras equivalen a ${kilogramos.toFixed(2)} kilogramos.`);
 }
 function ejercicio16(){
    const numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    let nombreDia;
    switch (numero) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Número inválido";
}
    alert(`El número ${numero} corresponde al día ${nombreDia}.`);
 }
 function ejercicio17(){
    const horaIngresada = prompt("Ingrese la hora en formato hora:minuto:segundo ");
    const fecha = new Date(`2000-01-01T${horaIngresada}`);

    fecha.setSeconds(fecha.getSeconds() + 1);

    const nuevaHora = fecha.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});

    alert(`La hora dentro de un segundo es: ${nuevaHora}`);
}
 function ejercicio18(){
    function calcularPrecioYGanancia(cantidad) {
        let precioUnitario;
        
        if (cantidad >= 1 && cantidad <= 9) {
            precioUnitario = 10;
        } else if (cantidad >= 10 && cantidad <= 99) {
            precioUnitario = 8;
        } else if (cantidad >= 100 && cantidad <= 499) {
            precioUnitario = 7;
        } else {
            precioUnitario = 6;
        }
        
        const precioTotalCliente = cantidad * precioUnitario;
        
        const gananciaVendedor = precioTotalCliente * 0.0825;
        
        return {
            precioTotalCliente: precioTotalCliente,
            gananciaVendedor: gananciaVendedor
        };
    }
    const cantidadCDs = 150;
    const resultado = calcularPrecioYGanancia(cantidadCDs);
    
    alert(`Precio total para el cliente: $${resultado.precioTotalCliente}`);
    alert(`Ganancia para el vendedor: $${resultado.gananciaVendedor.toFixed(2)}`);
 }
 function ejercicio19(){
    const salariosDiarios = {
        1: 56,  
        2: 64,  
        3: 80,  
        4: 48   
    };
    function calcularSalarioSemanal(idEmpleado, diasTrabajados) {
        const salarioDiario = salariosDiarios[idEmpleado];
        if (salarioDiario === undefined) {
            return "Número de empleado no válido";
        }
    
        if (diasTrabajados < 1 || diasTrabajados > 6) {
            return "Cantidad de días no válida";
        }
    
        const salarioSemanal = salarioDiario * diasTrabajados;
        return salarioSemanal;
    }
    const idEmpleado = 3; 
    const diasTrabajados = 5; 
    const salario = calcularSalarioSemanal(idEmpleado, diasTrabajados);
    if (typeof salario === "number") {
        console.log(`El salario semanal del empleado es: $${salario}`);
    } else {
        console.log(salario);
    }
 }
 function ejercicio20(){
    const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num2 = parseInt(prompt("Ingresa el segundo número:"));
    const num3 = parseInt(prompt("Ingresa el tercer número:"));
    const num4 = parseInt(prompt("Ingresa el cuarto número:"));

    let cantidadPares = [num1, num2, num3, num4].filter(num => num % 2 === 0).length;
    const mayor = Math.max(num1, num2, num3, num4);

    let resultado;
    if (num3 % 2 === 0) {
        resultado = num2 * num2;
 } else if (num1 < num4) {
        resultado = (num1 + num2 + num3 + num4) / 4;
 } else if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        resultado = num1 + num2 + num3 + num4;
}

    alert(`Cantidad de números pares: ${cantidadPares}`);
    alert(`El mayor de los 4 números es: ${mayor}`);
    if (resultado !== undefined) {
    alert(`Resultado de la operación: ${resultado}`);
}
 }
 function ejercicio21(){
    function factorial(num) {
        let resultado = 1;
        for (let i = 2; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
    
    const numero = 5;
    alert(`El factorial de ${numero} es: ${factorial(numero)}`);
 }
 function ejercicio22(){
    function sumaPrimerosNNumeros(n) {
        return (n * (n + 1)) / 2;
    }
    
    const n = 10;
    alert(`La suma de los primeros ${n} números son: ${sumaPrimerosNNumeros(n)}`);
 }
 function ejercicio23(){
    function sumaImparesHastaN(n) {
        let suma = 0;
        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }
        return suma;
    }
    
    const n = 10;
    alert(`La suma de los números impares menores o iguales a ${n} son: ${sumaImparesHastaN(n)}`);
 }
 function ejercicio24(){
    function sumaNumerosParesHasta1000() {
        let suma = 0;
        for (let i = 2; i <= 1000; i += 2) {
            suma += i;
        }
        return suma;
    }
    
    alert(`La suma de todos los números pares hasta 1000 son: ${sumaNumerosParesHasta1000()}`);
 }
 function ejercicio25(){
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let resultado = n;
            while (n > 1) {
                n--;
                resultado *= n;
            }
            return resultado;
        }
    }
    
    const numero = 5;
    alert(`El factorial de ${numero} es: ${factorial(numero)}`);
 }
 function ejercicio26(){
    function calcularCocienteYResto(dividendo, divisor) {
        let cociente = 0;
        let resto = dividendo;
    
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
    
        return {
            cociente,
            resto
        };
    }
    const dividendo = 20;
    const divisor = 3;
    const { cociente, resto } = calcularCocienteYResto(dividendo, divisor);
    alert(`Cociente: ${cociente}`);
    alert(`Resto: ${resto}`);
 }
 function ejercicio27(){
    function calcularMedia() {
        let suma = 0;
        let contador = 0;
        let numero;
    
        while ((numero = parseInt(prompt("Ingrese un número positivo (ingrese un número negativo para terminar):"))) >= 0) {
            suma += numero;
            contador++;
        }
    
        return contador === 0 ? "No se ingresaron números positivos." : suma / contador;
    }
    const media = calcularMedia();
    alert(typeof media === "number" ? `La media de los números ingresados es: ${media}` : media);
 }
 function ejercicio28(){
    let suma = 0;
    let contador = 1;

    repetir(100, () => {
        suma += contador;
        contador++;
     });

    alert(`La suma de los primeros cien números es: ${suma}`);

function repetir(veces, accion) {
    let contador = 0;
    while (contador < veces) {
        accion();
        contador++;
    }
}
 }
 function ejercicio29(){
    let suma = 0;
    let contador = 1;
    
    while (contador <= 100) {
        suma += contador;
        contador++;
    }
    
    alert(`La suma de los primeros cien números es: ${suma}`);
 }
 function ejercicio30(){
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
      suma += i;
}
    alert(`La suma de los primeros cien números es: ${suma}`);
 }
 function ejercicio31(){
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < 10; i++) {
       const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    
    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    } else {
        sumaImpares += numero;
        contadorImpares++;
    }
}
    const mediaPares = contadorPares === 0 ? 0 : sumaPares / contadorPares;
    const mediaImpares = contadorImpares === 0 ? 0 : sumaImpares / contadorImpares;

    alert(`La media de los números pares es: ${mediaPares}`);
    alert(`La media de los números impares es: ${mediaImpares}`);
 }
 function ejercicio32(){

 }
 function ejercicio33(){

 }
 function ejercicio34(){

 }
 function ejercicio35(){

 }
 function ejercicio36(){

 }
 function ejercicio37(){

 }
 function ejercicio38(){

 }
 function ejercicio39(){

 }
 function ejercicio40(){

 }