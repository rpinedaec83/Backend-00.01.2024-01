


const ejercicio1=()=>{
    let numero=parseInt(prompt("escribe un numero : "))

if(numero>99 && numero<=999){
 alert("es un numero de 3 digitos")
}else {
    alert("no es un numero de 3 digitos")
}
}

const ejercicio2=()=>{
    let numero=parseInt(prompt("escribe un numero : "))

if(numero<0 ){
 alert("es un numero negativo")
}else {
    alert("no es un numero negativo")
}
}

const ejercicio3=()=>{
    let numero=parseInt(prompt("escribe un numero : "))

    if(numero%10==4 ){
     alert("el numero termina en 4")
    }else {
        alert("no termina en 4")
    }
}

const ejercicio4=()=>{
    let num1=parseInt(prompt("escribe un numero 1 : "))
 let num2=parseInt(prompt("escribe un numero 2 : "))
 let num3=parseInt(prompt("escribe un numero 3 : "))

if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (num2 > num3) {
        let temp = num2;
        num2 = num3;
        num3 = temp;
    }

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    alert("Números ordenados de menor a mayor: " + num1 + ", " + num2 + ", " + num3);
}
    
const ejercicio5=()=>{
let zapatos = parseInt(prompt("¿Cantidad de zapatos a comprar"))
let precio = zapatos * 80;

if (zapatos > 10 && zapatos <= 20) {
    document.write(`Cantidad de zapatos es ${zapatos};
    El costo es "  ${precio};
    Su descuento es de 10%;
    Total a pagar es  + ${(precio - (precio * 0.1))}`);
} else {
    if (zapatos > 20 && zapatos <= 30) {
        document.write(`Cantidad de zapatos es ${zapatos};
    El costo es "  ${precio};
    Su descuento es de 20%;
    Total a pagar es  + ${(precio - (precio * 0.2))}`);
    } else {
        if (zapatos > 30) {
            document.write(`Cantidad de zapatos es ${zapatos};
    El costo es "  ${precio};
    Su descuento es de 40%;
    Total a pagar es  + ${(precio - (precio * 0.4))}`);
        }
    }
}
}

const ejercicio6=()=>{
    let sueldo, extra, nSueldo, eSueldo, total;
    
   
    sueldo = parseInt(prompt("Cantidad de horas trabajadas: "));

    extra = 25;

    if (sueldo < 40) {
        nSueldo = 20 * sueldo;
        alert("Mi sueldo esta semana es " + nSueldo);
    } else {
        if (sueldo > 40) {
            nSueldo = sueldo - 40;
            sueldo = 20 * 40;
            eSueldo = nSueldo * extra;
            total = sueldo + eSueldo;
            alert("Mi sueldo esta semana es " + total);
        }
    }   
}
const ejercicio7=()=>{
    let tipo = parseInt(prompt("¿Qué membresía tiene? 1-TipoA 2-TipoB 3-TipoC"));

    if (tipo === 1) {
        alert("Tiene un descuento del 10%");
    } else {
        if (tipo === 2) {
            alert("Tiene un descuento del 15%");
        } else {
            if (tipo === 3) {
                alert("Tiene un descuento del 20%");
            }
        }
    }
}
const ejercicio8=()=>{
    let nota1 = parseFloat(prompt("La nota 1 es: "));

   
    let nota2 = parseFloat(prompt("La nota 2 es: "));

    
    let nota3 = parseFloat(prompt("La nota 3 es: "));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 12) {
        alert("Alumno aprobado con :  "+promedio);
    } else {
        alert("Alumno reprobado con : "+promedio);
    } 
}
const ejercicio9=()=>{
    let sueldo = parseFloat(prompt("¿Cuánto gana el trabajador?"));

    if (sueldo > 2000) {
        alert("Su aumento es del 5%: " + (sueldo + (sueldo * 0.05)));
    } else {
        alert("Su aumento es del 10%: " + (sueldo + (sueldo * 0.1)));
    }  
}
const ejercicio10=()=>{
    let numero = parseInt(prompt("Escriba el número"));

    let resto = numero % 2;

    if (resto === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }  
}
const ejercicio11=()=>{
    let numero1 = parseInt(prompt("Escriba el primer número"));
    let numero2 = parseInt(prompt("Escriba el segundo número"));
    let  numero3 = parseInt(prompt("Escriba el tercer número"));

    let mayor = 0;

    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else {
        if (numero2 >= numero1 && numero2 >= numero3) {
            mayor = numero2;
        } else {
            mayor = numero3;
        }
    }

    alert("El mayor es " + mayor);  
}
const ejercicio12=()=>{
    let numero1 = parseInt(prompt("Escriba el primer número"));
    let numero2 = parseInt(prompt("Escriba el segundo número"));

    mayor = 0;
    
     if (numero1 >= numero2) {
        mayor = numero1;
    } else {
        mayor = numero2;
    }
    alert("El mayor es " + mayor);  
}
const ejercicio13=()=>{
    let letra;

    
    letra = prompt("Escriba una letra");

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||
        letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"
    ) {
        alert("Es una vocal");
    }else {
        alert("No es una vocal");
    }   
}
const ejercicio14=()=>{
    let numero;

  
    numero = parseInt(prompt("Escribe un número:"));

    if (numero >= 1 && numero <= 10) {
        if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            alert("Es un número primo");
        } else {
            alert("No es primo");
        }
    }  
}
const ejercicio15=()=>{
    let numero1, numero2, pulgadas, kilogramos;

   
    numero1 = parseFloat(prompt("Escribe un número en cm:"));

    
    numero2 = parseFloat(prompt("Escribe un número en libras:"));

    pulgadas = 0.393701 * numero1;
    kilogramos = 0.453592 * numero2;
 
      alert (numero1 + " cm a pulgadas son " + pulgadas); 
      alert (numero2 + " libras a kilogramos son " + kilogramos)   
}
const ejercicio16=()=>{
    let dia;

    
    dia = parseInt(prompt("Digite un número (0-Salir, 1-Lunes, 2-Martes, 3-Miércoles, 4-Jueves, 5-Viernes, 6-Sábado, 7-Domingo):"));

    if (dia === 1) {
        alert("Hoy es lunes");
    } else if (dia === 2) {
        alert("Hoy es martes");
    } else if (dia === 3) {
        alert("Hoy es miércoles");
    } else if (dia === 4) {
        alert("Hoy es jueves");
    } else if (dia === 5) {
        alert("Hoy es viernes");
    } else if (dia === 6) {
        alert("Hoy es sábado");
    } else if (dia === 7) {
        alert("Hoy es domingo");
    } 
}

const ejercicio17=()=>{
    let horas, minutos, segundos;

    
    horas = parseInt(prompt("Escriba la hora:"));

    
    minutos = parseInt(prompt("Escriba los minutos:"));

    segundos = parseInt(prompt("Escriba los segundos:"));

    segundos = segundos + 1;

    if (segundos === 60) {
        segundos = 0;
        minutos = minutos + 1;

        if (minutos === 60) {
            minutos = 0;
            horas = horas + 1;

            if (horas === 24) {
                horas = 0;
            }
        }
    }

    alert("La nueva hora es " + horas + ":" + minutos + ":" + segundos);   
}
const ejercicio18=()=>{
    let articulos;

    articulos = parseInt(prompt("Cantidad de artículos a comprar:"));

    if (articulos <= 9) {
        alert("El precio es " + (articulos * 10) + " la ganancia del vendedor es: " + (articulos * 10 * 0.0825));
    } else if (articulos <= 99) {
        alert("El precio es " + (articulos * 8) + " la ganancia del vendedor es: " + (articulos * 8 * 0.0825));
    } else if (articulos <= 499) {
        alert("El precio es " + (articulos * 7) + " la ganancia del vendedor es: " + (articulos * 7 * 0.0825));
    } else if (articulos > 500) {
        alert("El precio es " + (articulos * 6) + " la ganancia del vendedor es: " + (articulos * 6 * 0.0825));
    }     
}
const ejercicio19=()=>{
    let numero, dias;
    let pcajero = 56, pservidor = 64, pmezclas = 80, pmantenimiento = 48;

    
    numero = parseInt(prompt("Ingrese número identificador (11-cajero, 12-servidor, 13-mezclas, 14-mantenimiento):"));

    
    dias = parseInt(prompt("Ingrese cantidad de días trabajados:"));

    if (dias <= 6) {
        if (numero === 11) {
            alert("El pago del cajero es " + pcajero * dias);
        } else if (numero === 12) {
            alert("El pago del servidor es " + pservidor * dias);
        } else if (numero === 13) {
            alert("El pago de mezclas es " + pmezclas * dias);
        } else if (numero === 14) {
            alert("El pago de mantenimiento es " + pmantenimiento * dias);
        }
    } else {
        alert("Días máximos sobrepasados");
    }    
  
}
const ejercicio20=()=>{
    let numerosPares = 0;
    let numeroMayor = 0
    let primero, segundo, tercero, cuarto;

    for (let i = 0; i < 4; i++) {
        
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));

        if (numero > 0) {
            if (numero % 2 === 0) {
                numerosPares++;
            }

            if (i === 0 || numero > numeroMayor) {
                numeroMayor = numero;
            }
        } else {
            alert("Por favor, ingrese un número positivo.");
            i--; 
        }

        if (i === 1) {
            segundo = numero;
        }

        if (i === 0) {
            primero = numero;
        }

        if (i === 2) {
            tercero = numero;
        }

        if (i === 3) {
            cuarto = numero;
        }
    }

    if (numerosPares > 0) {
        alert("De los 4 números ingresados, " + numerosPares + " son pares.");
    }

    alert("El número mayor ingresado es: " + numeroMayor);

    if (tercero % 2 === 0) {
        alert("El tercer número es: " + tercero + " -- " + (segundo * segundo));
    }

    if (primero < cuarto) {
        let media = (primero + segundo + tercero + cuarto) / 4;
        alert("La media es: " + media);
    }

    if (segundo > tercero) {
        if (segundo >= 50 && segundo <= 700) {
            let total = primero + segundo + tercero + cuarto;
            alert("El total es: " + total);
        }
    }
 
}
const ejercicio21=()=>{
    let numero, resultado = 1;

  
    numero = parseInt(prompt("Ingrese un número:"));

    if (numero < 0) {
        alert("Error");
    } else {
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        alert("El factorial de " + numero + " es: " + resultado);
    }
}
const ejercicio22=()=>{
    let numero, resultado = 0;

    
    numero = parseInt(prompt("Ingrese un número:"));

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 1) {
            resultado += i;
        }
    }

    alert("La suma de los números impares del 1 al " + numero + " es: " + resultado);
  
}
const ejercicio23=()=>{
    let resultado = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            resultado += i;
        }
    }

    alert("La suma de los números pares del 1 al 1000 es: " + resultado);
  
}
const ejercicio24=()=>{
    let numero, resultado = 1;

    
    numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

    if (numero < 0) {
        alert("No se puede calcular el factorial de un número negativo.");
    } else {
        for (let i = numero; i >= 1; i--) {
            resultado *= i;
        }
        alert("El factorial de " + numero + " es: " + resultado);
    } 
}
const ejercicio25=()=>{
   
}
const ejercicio26=()=>{
    let numero, resultado = 1;

    
    numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

    if (numero < 0) {
        alert("No se puede calcular el factorial de un número negativo.");
    } else {
        for (let i = numero; i >= 1; i--) {
            resultado *= i;
        }
        alert("El factorial de " + numero + " es: " + resultado);
    }  
}
const ejercicio27=()=>{
    let sum = 0;
    let prom = 0;
    let numero;

    while (true) {
        
        numero = parseInt(prompt("Ingrese un número:"));

        if (numero < 0) {
            alert("La suma es " + sum + " y su media es " + (sum / prom));
            break;
        }

        sum += numero;
        prom++;
    }
}
const ejercicio28=()=>{
    let x = 1;
    let sum = 0;

    while (x <= 100) {
        sum = sum + x;
        x = x + 1;
    }

    alert("La suma de los números del 1 al 100 es: " + sum);  
}
const ejercicio29=()=>{
    let x = 0;
    let sum = 0;

    do {
        sum = sum + x;
        x = x + 1;
    } while (x <= 100);

    alert("La suma de los números del 1 al 100 es: "+ sum);  
}
const ejercicio30=()=>{
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum = sum + i;
    }

    alert("La suma de los números del 1 al 100 es: ", sum);    
}
const ejercicio31=()=>{
    let pares = 0;
    let imp = 0;
    let mediap = 0;
    let mediai = 0;
    
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Ingrese un número:"));
        
        if (numero % 2 === 0) {
            pares += numero;
            mediap++;
        } else {
            imp += numero;
            mediai++;
        }
    }
    
    alert("Números pares media: "+ pares / mediap+ " Impares: "+ imp / mediai);  
}
const ejercicio33=()=>{
    
    let continuar = 1;
    while (continuar > 0) {
        
        continuar = parseInt(prompt("¿Desea continuar con el programa? 1-Si, 0-No"));
    }
    
    alert("Programa finalizado");


}
const ejercicio34=()=>{
    for (let i = 1; i <= 9; i++) {
        document.write("Tabla de multiplicar del " + i + ": <br>");
        for (let x = 1; x <= 10; x++) {
            document.write(i + " x " + x + " = " + (i * x) +"<br>");
        }
        
    } 
}
const ejercicio35=()=>{
    let mayor = 0;
    let menor = 0;
    
    for (let i = 1; i <= 20; i++) {
        let numero = parseInt(prompt("Ingrese el número " + i + ":"));
        
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
    
    alert("El número mayor es: " + mayor);
    alert("El número menor es: " + menor);
}
const ejercicio36=()=>{
    let cant = parseInt(prompt("Ingrese el límite para la serie de Fibonacci:"));
    let a = 0;
    let b = 1;
    
    document.write(a);
    
    while (b <= cant) {
        document.write(b);
        
        let temp = b;
        b = a + b;
        a = temp;
    }
  
}
const ejercicio37=()=>{
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let mcd, temp;

    while (numero2 !== 0) {
        temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }

    
    mcd = numero1;

    alert("El M.C.D de "+ numero1+ " y "+ numero2+ " es: "+ mcd); 
}
const ejercicio38=()=>{
    let numero = parseInt(prompt("digite un numero")); 

    let sumaDivisores = 0;
    
    
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) { 
            sumaDivisores += i;
        }
    }
    
    
    if (sumaDivisores === numero) {
        alert(numero + " es un número perfecto.");
    } else {
        alert(numero + " no es un número perfecto.");
    }
      
}
const ejercicio39=()=>{
  
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de Pi:"));
    let aproximacionPi = 0;
    let termino;

    for (let i = 1; i <= n; i++) {
        termino = 4 / (2 * i - 1);

        if (i % 2 === 1) {
            aproximacionPi = aproximacionPi + termino;
        } else {
            aproximacionPi = aproximacionPi - termino;
        }
    }

    alert("La aproximación de Pi con "+ n+ " términos es: "+ aproximacionPi);
  
}
const ejercicio40=()=>{
    let n = parseInt(prompt("Ingrese el número de términos para la aproximación de Pi:"));
    let aproximacionPi = 3;
    let numerador = 4;
    let denominador = 2;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            aproximacionPi += numerador / (denominador * (denominador + 1) * (denominador + 2));
        } else {
            aproximacionPi -= numerador / (denominador * (denominador + 1) * (denominador + 2));
        }
        
        denominador += 2;
    }

    alert("La aproximación de Pi con "+ n+ " términos es: "+ aproximacionPi);  
}