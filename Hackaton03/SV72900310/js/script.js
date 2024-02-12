function ejercicio1(){
    let numero = +prompt("Escriba su numero");
        if(numero>99 && numero<1000){
        alert("Si tiene 3 caracteres");
    }
    else{
        alert("No tiene 3 caracteres");
    }
}

function ejercicio2(){
    let numero = +prompt("Escriba su numero");
    
    if(numero<0){
        alert("El número es negativo");
    }
    else{
        alert("El número es positivo");
    }
}

function ejercicio3(){
    let numero = +prompt("Ingrese un número");

    numero = parseInt(numero);

    if (!isNaN(numero) && numero % 10 === 4) {
        alert(`El número ${numero} termina en 4.`);
    } else {
        alert("No termina en 4 o no es un número");
    }
}

function ejercicio4(){
    let numero1 = +prompt("Ingrese el primer número entero");
    let numero2 = +prompt("Ingrese el segundo número entero");
    let numero3 = +prompt("Ingrese el tercer número entero");

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        if (numero1 > numero2) {
            [numero1, numero2] = [numero2, numero1];
        }
        if (numero2 > numero3) {
            [numero2, numero3] = [numero3, numero2];
        }
        if (numero1 > numero2) {
            [numero1, numero2] = [numero2, numero1];
        }

        alert(`Números ordenados de menor a mayor: ${numero1}, ${numero2}, ${numero3}`);
    } else {
        alert("Ingrese números válidos.");
    }
}

function ejercicio5(){
  const precioUnitario = 80;
  const cantidad = parseInt(prompt("¿Cuántos zapatos va a comprar?"));

  if (cantidad > 10 && cantidad <= 20) {
    alert(`Para ${cantidad} zapatos, el precio final es de $${precioUnitario * cantidad * 0.9}`);
  } else if (cantidad > 20 && cantidad <= 30) {
    alert(`Para ${cantidad} zapatos, el precio final es de $${precioUnitario * cantidad * 0.8}`);
  } else if (cantidad > 30) {
    alert(`Para ${cantidad} zapatos, el precio final es de $${precioUnitario * cantidad * 0.6}`);
  } else {
    alert(`Para ${cantidad} zapatos, el precio final es de $${precioUnitario * cantidad}`);
  }
}

function ejercicio6(){
  const pagoHoraNormal = 20;
  const pagoHoraExtra = 25;

  const jornada = parseInt(prompt("¿Cuántas horas trabajó esta semana?"));

  if (jornada <= 40) {
    const sueldo = jornada * pagoHoraNormal;
    alert(`Su sueldo de esta semana fue de $${sueldo}`);
  } else {
    const sueldoExtra = 800 + (jornada - 40) * pagoHoraExtra;
    alert(`Su sueldo de esta semana fue de $${sueldoExtra}`);
  }
}

function ejercicio7(){
  const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();

  let descuento;
  
  switch (tipoMembresia) {
    case "A":
      descuento = 0.10;
      alert("Su descuento es del 10%");
      break;
    case "B":
      descuento = 0.15;
      alert("Su descuento es del 15%");
      break;
    case "C":
      descuento = 0.20;
      alert("Su descuento es del 20%");
      break;
    default:
      alert("Por favor, seleccione un tipo de membresía válido");
  }
}

function ejercicio8(){
  const nota1 = +prompt("Ingrese la primera nota:");
  const nota2 = +prompt("Ingrese la segunda nota:");
  const nota3 = +prompt("Ingrese la tercera nota:");

  const promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio > 10.5) {
    alert("El estudiante aprobó con un promedio de: " + promedio);
  } else {
    alert("El estudiante no aprobó con un promedio de: " + promedio);
  }
}

function ejercicio9(){
  const salarioActual = +prompt("Ingrese el salario actual:");

  let nuevoSalario;

  if (salarioActual > 2000) {
    nuevoSalario = salarioActual * 1.05;
    alert("El nuevo salario con un aumento del 5% es: " + nuevoSalario);
  } else {
    nuevoSalario = salarioActual * 1.1;
    alert("El nuevo salario con un aumento del 10% es: " + nuevoSalario);
  }
}

function ejercicio10(){
    let numeroIngresado = +prompt("Ingrese un número");

    if (!isNaN(numeroIngresado)) {
      if (numeroIngresado % 2 === 0) {
        alert("El número es par.");
      } else {
        alert("El número es impar.");
      }
    } else {
      alert("Ingrese un número válido.");
    }
}

function ejercicio11(){
    let numero1 = +prompt("Ingrese el primer número");
    let numero2 = +prompt("Ingrese el segundo número");
    let numero3 = +prompt("Ingrese el tercer número");

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
      let mayor = Math.max(numero1, numero2, numero3);
      alert(`El número mayor es: ${mayor}`);
    } else {
      alert("Ingrese números válidos.");
    }
}

function ejercicio12(){
    let numero1 = +prompt("Ingrese el primer número");
    let numero2 = +prompt("Ingrese el segundo número");

    if (!isNaN(numero1) && !isNaN(numero2) ) {
      let mayor = Math.max(numero1, numero2);
      alert(`El número mayor es: ${mayor}`);
    } else {
      alert("Ingrese números válidos.");
    }
}

function ejercicio13(){
    let letra = prompt("Escriba una letra")

    letra = letra.toLocaleLowerCase()

    switch (letra){
        case "a":
            alert("Es una vocal");
            break;
        case "e":
            alert("Es una vocal");
            break;    
        case "i":
            alert("Es una vocal");
            break;
        case "o":
            alert("Es una vocal");
            break;        
        case "u":
            alert("Es una vocal");
            break;
        default:
            alert("NO es una vocal");
            break;
    }
}

function ejercicio14(){
    let numero;

    do {
        numero = +prompt("Ingrese un número entre 1 y 10:");
    } while (numero < 1 || numero > 10);

    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }

    if (contador <= 2) {
        alert(`El número ${numero} es primo.`);
    } else {
        alert(`El número ${numero} no es primo.`);
    }
}

function ejercicio15(){
    let centimetros = +prompt("Ingrese la longitud en centímetros");
    let pulgadas = centimetros / 2.54;

    alert(`${centimetros} centímetros son ${pulgadas.toFixed(2)} pulgadas.`);

    let libras = +prompt("Ingrese el peso en libras");
    let kilogramos = libras / 2.20462;

    alert(`${libras} libras son ${kilogramos.toFixed(2)} kilogramos.`);
  }

function ejercicio16(){
    let numeroDia = +prompt("Ingrese un número del 1 al 7");

    switch (numeroDia) {
        case 1:
        alert("El número 1 corresponde al día Lunes.");
        break;
        case 2:
        alert("El número 2 corresponde al día Martes.");
        break;
        case 3:
        alert("El número 3 corresponde al día Miércoles.");
        break;
        case 4:
        alert("El número 4 corresponde al día Jueves.");
        break;
        case 5:
        alert("El número 5 corresponde al día Viernes.");
        break;
        case 6:
        alert("El número 6 corresponde al día Sábado.");
        break;
        case 7:
        alert("El número 7 corresponde al día Domingo.");
        break;
      default:
        alert("Ingrese un número válido del 1 al 7.");
    }
}

function ejercicio17(){
    let hora, minuto, segundo;

      do {
        hora = parseInt(prompt("Ingrese la hora (formato de 24 horas):"));
      } while (hora < 0 || hora > 23);

      do {
        minuto = parseInt(prompt("Ingrese los minutos:"));
      } while (minuto < 0 || minuto > 59);

      do {
        segundo = parseInt(prompt("Ingrese los segundos:"));
      } while (segundo < 0 || segundo > 59);

      segundo++;

      if (segundo >= 60) {
        segundo = 0;
        minuto++;

        if (minuto >= 60) {
          minuto = 0;
          hora++;

          if (hora >= 24) {
            hora = 0;
          }
        }
      }

      alert(`La hora después de un segundo es: ${String(hora).padStart(2, "0")}:${String(minuto).padStart(2, "0")}:${String(segundo).padStart(2, "0")}`);
    }

function ejercicio18(){
    let cantidadCds = +prompt("Ingrese la cantidad de CDs a vender:");
   
      if (cantidadCds <= 9) {
        precioUnitario = 10;
      } else if (cantidadCds <= 99) {
        precioUnitario = 8;
      } else if (cantidadCds <= 499) {
        precioUnitario = 7;
      } else {
        precioUnitario = 6;
      }

      precioTotal = cantidadCds * precioUnitario;
      margen = precioTotal * 0.0825;

      alert(`Precio total para el cliente: $${precioTotal.toFixed(2)}`);
      alert(`Ganancia para el vendedor: $${margen.toFixed(2)}`);
    }

function ejercicio19(){
    do {
      idEmpleado = +prompt("Ingrese el número identificador del empleado: \nCajero=1 \nServidor=2 \nPreparador=3 \nMantenimiento=4");
    } while (idEmpleado < 1 || idEmpleado > 4);

    do {
      diasTrabajados = +prompt("Ingrese la cantidad de días trabajados en la semana (máximo 6 días):");
    } while (diasTrabajados < 1 || diasTrabajados > 6);

    switch (idEmpleado) {
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
        break;
    }

    salarioTotal = salarioDiario * diasTrabajados;

    alert(`El salario total a pagar al empleado es: $${salarioTotal.toFixed(2)}`);
  }

function ejercicio20(){
    let num1, num2, num3, num4;
      
    do {
      num1 = +prompt("Ingrese el primer número entero positivo:");
    } while (isNaN(num1) || num1 <= 0);

    do {
      num2 = +prompt("Ingrese el segundo número entero positivo:");
    } while (isNaN(num2) || num2 <= 0);

    do {
      num3 = +prompt("Ingrese el tercer número entero positivo:");
    } while (isNaN(num3) || num3 <= 0);

    do {
      num4 = +prompt("Ingrese el cuarto número entero positivo:");
    } while (isNaN(num4) || num4 <= 0);

    let numerosPares = 0;
    if (num1 % 2 === 0) numerosPares++;
    if (num2 % 2 === 0) numerosPares++;
    if (num3 % 2 === 0) numerosPares++;
    if (num4 % 2 === 0) numerosPares++;

    alert(`Números Pares: ${numerosPares}`);

    let mayor = Math.max(num1, num2, num3, num4);
    alert(`El número mayor es: ${mayor}`);

    if (num3 % 2 === 0) {
      let cuadradoSegundo = num2 ** 2;
      alert(`Cuadrado del segundo: ${cuadradoSegundo}`);
    }

    if (num1 < num4) {
      let media = (num1 + num2 + num3 + num4) / 4;
      alert(`Media de los 4 números: ${media}`);
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
      let sumaTotal = num1 + num2 + num3 + num4;
      alert(`Suma de los 4 números: ${sumaTotal}`);
    }
  }

  function ejercicio21(){
    let numero = +prompt("Ingrese un número para calcular su factorial:");
      let factorial = 1;

      if (numero >= 0) {
        for (let i = 1; i <= numero; i++) {
          factorial *= i;
        }

        alert(`El factorial de ${numero} es: ${factorial}`);
      } else {
        alert("Ingrese un número no negativo.");
      }
}

function ejercicio22(){
        let n = +prompt("Ingrese el valor de n para calcular la suma de los primeros n números:");
        let suma = 0;
  
        for (let i = 1; i <= n; i++) {
          suma += i;
        }
  
        alert(`La suma de los primeros ${n} números es: ${suma}`);
}

function ejercicio23(){
    let n = +prompt("Escriba el número a calcular:");
    let suma = 0;

    for (let i = 1; i <= n; i++) {
      if (i % 2 > 0) {
        suma += i;
      }
    }

    alert(`La suma de los impares hasta ${n} es igual a ${suma}`);
}

function ejercicio24(){
    let suma = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
        suma += i;
        }
    }

    alert(`La suma de todos los números pares hasta 1000 es de: ${suma}`);
}

function ejercicio25(){
    let numero = +prompt("Ingrese un número para calcular su factorial:");
    let factorial = 1;
    let i = 1;

    do {
      factorial *= i;
      i++;
    } while (i <= numero);

    alert(`El factorial de ${numero} es igual a ${factorial}`);
  }

function ejercicio26(){
    let dividendo = +prompt("Ingrese el dividendo:");
    let divisor = +prompt("Ingrese el divisor:");
    let resto = dividendo;
    let cociente = 0;

    while (resto - divisor >= 0) {
      resto = resto - divisor;
      cociente++;
    }

    alert(`El cociente es: ${cociente} y el resto es: ${resto}`);
}

function ejercicio27(){
    let suma = 0;
    let contador = 0;
    let numero;

    do {
      numero = parseFloat(prompt("Ingrese un número:"));

      if (numero >= 0) {
        suma += numero;
        contador++;
        alert("Ingrese otro número.");
      }
    } while (numero >= 0);

    if (contador > 0) {
      let media = suma / contador;
      alert(`La media de los números ingresados es: ${media}`);
    } else {
      alert("No se ingresaron números positivos.");
    }         
}

function ejercicio28() {
  let suma = 0;
  let i = 1;

  do {
    suma = suma + i;
    i++;
  } while (i <= 100);

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio29(){
    let suma = 0;
    let i = 1;

    while (i <= 100) {
      suma += i;
      i++;
    }

    alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio30(){
        let suma = 0;
  
        for (let i = 1; i <= 100; i++) {
          suma += i;
        }
  
        alert(`La suma de los primeros 100 números es: ${suma}`);
      }

function ejercicio31(){
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= 10; i++) {
      let numero = +prompt(`Ingrese el número ${i}:`);

      if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
      } else {
        sumaImpares += numero;
        contadorImpares++;
      }
    }
    alert(`La suma de los pares es: ${sumaPares} \nLa suma de los impares es: ${sumaImpares}`)
}

function ejercicio32(){
    let poblacionMaxima = 0;
    let maxCiudad = 0;
    let maxProvincia = 0;

    for (let provincia = 1; provincia <= 3; provincia++) {
      for (let ciudad = 1; ciudad <= 11; ciudad++) {
        let poblacion = Math.floor(Math.random() * 1000) + 1;
        alert(`Ingrese la población de la ciudad ${ciudad} en la provincia ${provincia}: ${poblacion}`);

        if (poblacion > poblacionMaxima) {
          poblacionMaxima = poblacion;
          maxCiudad = ciudad;
          maxProvincia = provincia;
        }
      }
    }

    alert(`La ciudad con la población más alta tiene ${poblacionMaxima} habitantes.\nProvincia: ${maxProvincia}, Ciudad: ${maxCiudad}`);
}

function ejercicio33(){
    let continuar;

    do {
      continuar = prompt("Desea continuar con el programa? (S/N):");
      continuar = continuar.toUpperCase();
    } while (continuar !== "N");

    alert("Fin del programa.");
}

function ejercicio34(){
    document.write("<h2>Tablas de Multiplicar:</h2>");

    for (let numero = 1; numero <= 9; numero++) {
      document.write("<h3>Tabla del " + numero + ":</h3>");

      for (let multiplicador = 1; multiplicador <= 12; multiplicador++) {
        document.write(numero + " * " + multiplicador + " = " + numero * multiplicador + "<br>");
      }

      document.write("<br>");
    }  
}

function ejercicio35(){
    let numero;
    let mayor;
    let menor;

    for (let i = 1; i <= 20; i++) {
      numero = +prompt(`Ingrese el número ${i}:`);

      if (i === 1) {
        mayor = numero;
        menor = numero;
      } else {
        if (numero > mayor) {
          mayor = numero;
        }

        if (numero < menor) {
          menor = numero;
        }
      }
    }

    alert(`El número mayor es: ${mayor} \nEl número menor es: ${menor}`);
}

function ejercicio36(){
        let n = parseInt(prompt("¿Cuántas repeticiones vamos a hacer?"));
        let a = 1;
        let b = 1;
  
        document.write("<h2>Serie de Fibonacci:</h2>");
        document.write(a + "<br>");
        document.write(b + "<br>");
  
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          document.write(c + "<br>");
  
          a = b;
          b = c;
        }
}

function ejercicio37(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));

    while (num2 !== 0) {
      let resto = num1 % num2;
      num1 = num2;
      num2 = resto;
    }

    alert("El M.C.D. de los dos números es: " + num1);
}

function ejercicio38(){
    let numero = +prompt("Ingrese un número: ");
    let sumaDivisores = 0;

    for (let divisor = 1; divisor < numero; divisor++) {
      if (numero % divisor === 0) {
        sumaDivisores += divisor;
      }
    }

    if (sumaDivisores === numero) {
      alert("El número ingresado es un número perfecto.");
    } else {
      alert("El número ingresado NO es un número perfecto.");
    }
}

function ejercicio39(){
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de pi: "));
      let decimales = parseInt(prompt("Ingrese la cantidad de decimales para la aproximación de pi: "));
      let numeropi = 0;

      for (let i = 0; i < n; i++) {
        let termino = 4 / (2 * i + 1);

        if (i % 2 === 0) {
          numeropi += termino;
        } else {
          numeropi -= termino;
        }
      }

      let factorRedondeo = Math.pow(10, decimales);
      numeropi = Math.round(numeropi * factorRedondeo) / factorRedondeo;

      alert(`La aproximación de pi con ${n} términos y ${decimales} decimales es: ${numeropi}`);
}

function ejercicio40(){
    let n = +prompt("Ingrese el número de términos para la aproximación de pi:");
    let decimales = +prompt("Ingrese la cantidad de decimales para la aproximación de pi:");
    let numeropi = 3;

    for (let i = 1; i <= n; i++) {
      let termino = 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2));

      if (i % 2 !== 0) {
        numeropi += termino;
      } else {
        numeropi -= termino;
      }
    }

    let factorRedondeo = Math.pow(10, decimales);
    numeropi = Math.round(numeropi * factorRedondeo) / factorRedondeo;

    alert(`La aproximación de pi con ${n} términos y ${decimales} decimales es: ${numeropi}`);
}