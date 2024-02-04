# Resolver los siguientes ejercicios

1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Proceso Ejercicio1
	numero = 0
	Escribir "Escriba un numero"
	Leer  numero
	
	si numero > 99  y numero <999 Entonces
		Escribir "el numero tiene 3 digitos"
	SiNo
		Escribir "el numero no tiene 3 digitos"
	FinSi
	
	
FinProceso


2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.

Proceso Ejercicio2
	numero = 0
	Escribir "Escriba un numero"
	Leer  numero
	
    si numero < 0 Entonces
		Escribir "Numero es negativo"
	SiNo
		Escribir "Numero es positivo"
	FinSi
	
	
FinProceso


3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso Ejercicio3
	numero = 0
	Escribir "Escriba un numero"
	Leer  numero
	
    si  numero mod 10 == 4 Entonces
		Escribir "el numero " numero " termina en 4"
	SiNo
		Escribir "El numero " numero " no termina en 4 "
	FinSi
	
	
FinProceso

4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Proceso Ejercicio4
	num1 = 0
	num2 = 0
	num3 = 0
	aux = 0
	Escribir "Escriba  numeros";
	Leer  num1, num2, num3
	Repetir
		si num1 > num2 Entonces
			aux = num1
			num1 = num2
			num2 = aux
		FinSi
		si num2 > num3 Entonces
			aux = num2
			num2 = num3
			num3 = aux
			
		FinSi

	Hasta Que  num1 < num2 y num2 < num3
	
	Escribir num1
	Escribir num2
	Escribir num3
    
FinProceso

5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso Ejercicio5
	Zapatos = 0
	precio = 80
	impo=0
	total =0
	
	Escribir "Escriba  cantidad de zapatos";
	Leer  Zapatos
	
	si Zapatos >10 y Zapatos <20  Entonces
		impo= Zapatos*precio
		total= impo - (impo * 0.1)
		Escribir "Usted tiene un descuento del 10% en su compra El total apagar es "  total
			
	FinSi
	si Zapatos > 20 y Zapatos<30 Entonces
		impo= Zapatos*precio
		total= impo - (impo * 0.2)
		Escribir "Usted tiene un descuento del 20% en su compra El total apagar es "  total
	FinSi
	si Zapatos > 30  Entonces
		impo= Zapatos*precio
		total= impo - (impo * 0.4)
		Escribir "Usted tiene un descuento del 40% en su compra El total apagar es "  total
	FinSi
    
FinProceso

6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso Ejercicio6
	HorasT= 0
	sHora=20
	total =0
	
	Escribir "Ingrese  cantidad de horas laboradas";
	Leer  HorasT
	
	si HorasT < 40  Entonces
	
		total= HorasT*sHora
		Escribir " El total a pagar  es "  total
			
	SiNo
		total=  40 * sHora + (HorasT - 40) * 25
		  
		Escribir " El total a pagar  es "  total
	FinSi
	
    
FinProceso
  
7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento

   Proceso Ejercicio7
	TipoM = ""
	Precio=0
	total=0
	Escribir "Ingrese el tipo de mebresia"
	leer TipoM
	Escribir "Ingrese el precio"
	leer Precio
	
	si TipoM =  "A" o TipoM =  "a" Entonces
		total =precio	-(precio*0.1) 	
		Escribir "El tipo de mebresia es " TipoM " tiene el 10% de descuento el importe Total es : " total 
	SiNo
		si TipoM =  "B" o TipoM =  "b"  Entonces
			total =precio	-(precio*0.15) 	
			Escribir "El tipo de mebresia es " TipoM " tiene el 15% de descuento el importe Total es : " total 
		
        SiNo
			si TipoM =  "C" o TipoM =  "c"  Entonces
				total =precio - (precio*0.2) 	
				Escribir "El tipo de mebresia es " TipoM " tiene el 20% de descuento el importe Total es : " total 
			FinSi
	FinSi
FinSi
FinProceso

8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso Ejercicio8
	Nombre = ""
	N1 = 0
	N2 = 0
	N3 = 0
	Promedio = 0
	
	Escribir "Ingrese Nombre del estudiante"
	leer Nombre
	Escribir "Ingreser primera nota"
	leer N1
	Escribir "Ingreser segunda nota"
	leer N2
	Escribir "Ingreser tercera nota"
	leer N3
	
	Promedio= (N1+ N2 + N3)/3
	
	si  Promedio <= 12  Entonces
		
		Escribir "El estudiante " Nombre " esta deprobado con  un promedio de  : " Promedio 
	SiNo
		si Promedio >= 13   Entonces
			
			Escribir "El estudiante " Nombre " esta aprobado con  un promedio de  : " Promedio 
		FinSi
		
	FinSi
    
    
FinProceso

9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Proceso Ejercicio9
	Sueldo = 0
	total=0
	Escribir "Ingrese el sueldo"
	leer Sueldo
	
	si sueldo>2000 Entonces
		total =Sueldo+(Sueldo*0.05) 	
		Escribir "El el sueldo del trabador es  " Sueldo " tienes el 5% de aumento en tu sueldo El total es : " total 
	SiNo
		si Sueldo <2000  Entonces
			total =Sueldo+(Sueldo*0.1) 	
			Escribir "El el sueldo del trabajador es  " Sueldo " tienes el 5% de aumento en tu sueldo EL total es : " total 
			
		FinSi
	FinSi
FinProceso


10. Hacer un algoritmo en Pseint que diga si un número es par o impar.

Proceso Ejercicio10
	numero = 0
	  n=0
	Escribir "Ingrese numero"
	leer numero
	
	n = numero %2
	si n = 0 Entonces
		
		Escribir "El numero es par "  
	SiNo
		Escribir "El numero es ipar "  
	FinSi
FinProceso

11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	x = 0
	j = 0
	z = 0
	aux = 0
	Escribir "Escriba tres numeros  numeros";
	Leer  x, j, z
	Repetir
		si x > j Entonces
			aux = x
			  x= j
			j= aux
		FinSi
		si j > z Entonces
			aux = j
			j = z
			z= aux
			
		FinSi
		
	Hasta Que  x < j y j< z
	
	Escribir "El mayor es " z
	  
FinProceso

12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso Ejercicio12
	x = 0
	j = 0
	
	aux = 0
	Escribir "Escriba dos numeros  numeros";
	Leer  x, j
	Repetir
		si x > j Entonces
			aux = x
			  x= j
			j= aux
		FinSi
		
	Hasta Que  x < j 
	
	Escribir "El mayor es " j
	
FinProceso

13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Proceso Ejercicio13
	Definir letra Como Caracter
	
    Escribir "Ingrese una letra: "
    Leer   letra
	
    Si Minusculas( letra) = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
        Escribir "La letra ingresada no es una vocal."
    FinSi
	
FinProceso

14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Proceso Ejercicio14
	Definir numero, i, contador Como Entero
	
    Escribir "Ingrese un número entre 1 y 10 (excluyendo el 9): "
    Leer numero
	
    Si numero >= 1 Y numero <= 10 Y numero <> 9 Entonces
        contador = 0
        Para i = 1 Hasta numero
            Si numero MOD i = 0 Entonces
                contador = contador + 1
            FinSi
        FinPara
		
        Si contador = 2 Entonces
            Escribir "El número ingresado es primo."
        Sino
            Escribir "El número ingresado no es primo."
        FinSi
    Sino
        Escribir "Número fuera del rango o igual a 9. Por favor, ingrese un número válido."
    FinSi

FinProceso

15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Proceso Ejercicio15
	
    cm_a_pulgadas = 0.393701
    libras_a_kg = 0.453592
	
    Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    Escribir "Ingrese la longitud en centímetros: "
    Leer centimetros
	
    Escribir "Ingrese el peso en libras: "
    Leer libras
	//conversion
    pulgadas = centimetros * cm_a_pulgadas
    kilogramos = libras * libras_a_kg
	
    // Mostrar los resultados
    Escribir "Longitud en pulgadas: ", pulgadas
    Escribir "Peso en kilogramos: ", kilogramos
	
FinProceso

16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	
	Definir numero Como Entero
	
    Escribir "Ingrese un número del 1 al 7: "
    Leer numero
	
    Segun numero Hacer
        Caso 1:
            Escribir "El número ", numero, " corresponde al día Lunes."
			
        Caso 2:
            Escribir "El número ", numero, " corresponde al día Martes."
			
        Caso 3:
            Escribir "El número ", numero, " corresponde al día Miércoles."
		
        Caso 4:
            Escribir "El número ", numero, " corresponde al día Jueves."
			
        Caso 5:
            Escribir "El número ", numero, " corresponde al día Viernes."
			
        Caso 6:
            Escribir "El número ", numero, " corresponde al día Sábado."
			
        Caso 7:
            Escribir "El número ", numero, " corresponde al día Domingo."
			
        De Otro modo:
            Escribir "Número fuera del rango. Por favor, ingrese un número del 1 al 7."
			
    FinSegun
	
FinProceso

17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	
	Definir hora, minuto, segundo Como Entero
	
    Escribir "Ingrese la hora (formato 24 horas): "
    Leer hora
	
    Escribir "Ingrese los minutos: "
    Leer minuto
	
    Escribir "Ingrese los segundos: "
    Leer segundo
	
    
    Si hora >= 0 Y hora <= 23 Y minuto >= 0 Y minuto <= 59 Y segundo >= 0 Y segundo <= 59 Entonces
        
        segundo = segundo + 1
		
        Si segundo = 60 Entonces
            segundo = 0
            minuto = minuto + 1
			
            Si minuto = 60 Entonces
                minuto = 0
                hora = hora + 1
				
                Si hora = 24 Entonces
                    hora = 0
                FinSi
            FinSi
        FinSi
		
        
        Escribir "La hora un segundo después es: ", hora, ":", minuto, ":", segundo
    Sino
        Escribir "Los valores ingresados no son válidos. Verifique la hora, los minutos y los segundos."
    FinSi
	
FinProceso


18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ejercicio18
	
	// Definir constantes
    precio_1_a_9 = 10
    precio_10_a_99 = 8
    precio_100_a_499 = 7
    precio_mas_500 = 6
	ganancia_porcentaje = 8.25 / 100
	
   
    Definir cantidad_cds Como Entero
    Definir precio_total, ganancia_vendedor Como Real
	
   
    Escribir "Ingrese la cantidad de CDs a vender: "
    Leer cantidad_cds
	
    
    Si cantidad_cds >= 1 Y cantidad_cds <= 9 Entonces
        precio_total = cantidad_cds * precio_1_a_9
    Sino
        Si cantidad_cds >= 10 Y cantidad_cds <= 99 Entonces
            precio_total = cantidad_cds * precio_10_a_99
        Sino
            Si cantidad_cds >= 100 Y cantidad_cds <= 499 Entonces
                precio_total = cantidad_cds * precio_100_a_499
            Sino
                Si cantidad_cds >= 500 Entonces
                    precio_total =cantidad_cds * precio_mas_500
                FinSi
            FinSi
        FinSi
    FinSi
	
   
    ganancia_vendedor = precio_total * ganancia_porcentaje
	
   
    Escribir "Precio total para el cliente: $", precio_total
    Escribir "Ganancia para el vendedor: $", ganancia_vendedor

	
FinProceso

19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó


Proceso Ejercicio19
	
    Csalario_cajero = 56
	salario_servidor = 64
    salario_preparador = 80
    salario_mantenimiento = 48
	
    Definir id_empleado, dias_trabajados Como Entero
    Definir salario_total Como Real
	
    Escribir "Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento): "
    Leer id_empleado
	
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días): "
    Leer dias_trabajados
	
    Si dias_trabajados < 1 O dias_trabajados > 6 Entonces
        Escribir "La cantidad de días trabajados no es válida. Ingrese un valor entre 1 y 6."
    Sino
        Segun id_empleado Hacer
            Caso 1:
                salario_total = salario_cajero * dias_trabajados
            Caso 2:
                salario_total = salario_servidor * dias_trabajados
            Caso 3:
                salario_total = salario_preparador * dias_trabajados
            Caso 4:
                salario_total = salario_mantenimiento * dias_trabajados
				
            De Otro Modo:
                Escribir "Número de empleado no válido. Ingrese un valor entre 1 y 4."
				
        FinSegun
		Escribir "El dueño debe pagar al empleado $", salario_total
    FinSi
	
FinProceso

20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Proceso Ejercicio20

    num1=0
	num2=0
	num3=0
	num4=0
    contador_pares=0
	mayor=0 
	media =0
	suma=0 
	CuadradoComo =0
	
   
    Escribir "Ingrese el primer número: "
    Leer num1
	
    Escribir "Ingrese el segundo número: "
    Leer num2
	
    Escribir "Ingrese el tercer número: "
    Leer num3
	
    Escribir "Ingrese el cuarto número: "
    Leer num4
	
    // Verificar cuántos números son pares
    Si num1 MOD 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
	
    Si num2 MOD 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
	
    Si num3 MOD 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
	
    Si num4 MOD 2 = 0 Entonces
        contador_pares = contador_pares + 1
    FinSi
	
    // Encontrar el mayor de todos
    mayor <- num1
	
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
	
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
	
    Si num4 > mayor Entonces
        mayor = num4
    FinSi
	
    // Si el tercero es par, calcular el cuadrado del segundo
    Si num3 MOD 2 = 0 Entonces
        Cuadrado = num2 * num2
    FinSi
	
    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
    FinSi
	
    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        suma = num1 + num2 + num3 + num4
    FinSi
	
    // Mostrar resultados
    Escribir "Cantidad de números pares: ", contador_pares
    Escribir "El mayor de todos: ", mayor
	
    Si num3 MOD 2 = 0 Entonces
        Escribir "Cuadrado del segundo si el tercero es par: ", Cuadrado
    FinSi
	
    Si num1 < num4 Entonces
        Escribir "Media de los 4 números si el primero es menor que el cuarto: ", media
    FinSi
	
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        Escribir "Suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700: ", suma
    FinSi
	
FinProceso

21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso Ejercicio21

    Definir numero, factorial Como Entero
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero
    factorial = 1
	
    
    Si numero >= 0 Entonces
        Para i = 1 Hasta numero
            factorial = factorial * i
        FinPara
        Escribir "El factorial de ", numero, " es: ", factorial
    Sino
        Escribir "Por favor, ingrese un número no negativo para calcular el factorial."
    FinSi
FinProceso


22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso Ejercicio22
	n=0
	suma = 0

    Escribir "Ingrese el valor de n para calcular la suma de los primeros n números: "
    Leer n
	
    Si n > 0 Entonces
        Para i = 1 Hasta n
            suma = suma + i
        FinPara
		
        Escribir "La suma de los primeros ", n, " números es: ", suma
    Sino
        Escribir "Por favor, ingrese un valor de n mayor que 0 para calcular la suma."
    FinSi
	
FinProceso

23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
	
    n=0
	suma = 0
    
    Escribir "Ingrese el valor de n para calcular la suma de los números impares menores o iguales a n: "
    Leer n
	
    Si n > 0 Entonces
        Para i = 1 Hasta n
            Si i MOD 2 <> 0 Entonces
                suma <- suma + i
            FinSi
        FinPara
		
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    Sino
        Escribir "Por favor, ingrese un valor de n mayor que 0 para calcular la suma."
    FinSi
FinProceso

24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso Ejercicio23
	
	i=0
	suma=0
    
	Para i=2 Hasta 1000 Con Paso 2 Hacer
		suma = suma + i
	Fin Para
    
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma

FinProceso

25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Proceso Ejercicio24
	
	factorial = 1
    i = 1
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero
	
    Mientras i <= numero
        factorial <- factorial * i
        i <- i + 1
    FinMientras
	
    Escribir "El factorial de ", numero, " es: ", factorial 


FinProceso

26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso Ejercicio26
	
    Definir dividendo, divisor, cociente, resto Como Entero
	cociente = 0
    resto = 0
    Escribir "Ingrese el dividendo: "
    Leer dividendo
	
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    Mientras dividendo >= divisor
        dividendo = dividendo - divisor
        cociente = cociente + 1
    FinMientras
	
    resto = dividendo
	
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto

FinProceso



27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Proceso Ejercicio27
	
    Definir numero, suma, cantidad, media Como Real
	
     media=0
     suma = 0
    cantidad = 0
	
    Mientras numero >= 0
        Escribir "Ingrese un número (ingrese un número negativo para finalizar): "
        Leer numero
		
        Si numero >= 0 Entonces
           
            suma = suma + numero
            cantidad = cantidad + 1
        FinSi
    FinMientras
	
    Si cantidad > 0 Entonces
        media = suma / cantidad
        Escribir "La media de los números positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi

FinProceso

28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.

Proceso Ejercicio28
	
    Definir suma, contador Como Entero
	
    suma = 0
    contador = 1
	
    Repetir
        suma = suma + contador
        contador = contador + 1
		Hasta  Que contador > 100
		
		// Mostrar el resultado
		Escribir "La suma de los primeros cien números es: ", suma
		
FinProceso


29. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.

Proceso Ejercicio29
	
    Definir suma, contador Como Entero
    suma = 0
    contador = 1
	
    Mientras contador <= 100
        suma = suma + contador
        contador = contador + 1
    FinMientras
	
		Escribir "La suma de los primeros cien números es: ", suma
		
FinProceso

30. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.

Proceso Ejercicio30
	
    Definir suma, contador Como Entero
    suma = 0
    contador = 1
	
	Para contador = 1 Hasta 100
        suma = suma + contador
    FinPara
		Escribir "La suma de los primeros cien números es: ", suma
		
FinProceso


31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso Ejercicio31
	
    Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImpares Como Real
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
	
    Para i = 1 Hasta 10
        Escribir "Ingrese el número ", i, ": "
        Leer numero
		
        Si numero MOD 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares =sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
    FinPara
	
    Si contadorPares > 0 Entonces
        mediaPares = sumaPares / contadorPares
        Escribir "La media de los números pares es: ", mediaPares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
	
    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares
        Escribir "La media de los números impares es: ", mediaImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
		
FinProceso


32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

Proceso Ejercicio32
	
    Definir poblacion, maxPoblacion Como Entero
    Definir provinciaMaxPoblacion, ciudadMaxPoblacion Como Cadena
	
    maxPoblacion = 0
	
    Para provincia = 1 Hasta 3
        Para ciudad = 1 Hasta 11
            Escribir "Ingrese la población de la ciudad ", ciudad, " en la provincia ", provincia, ": "
            Leer poblacion
			
            Si poblacion > maxPoblacion Entonces
                maxPoblacion = poblacion
                provinciaMaxPoblacion <- "Provincia " + ConvertirATexto(provincia)
                ciudadMaxPoblacion = "Ciudad " + ConvertirATexto(ciudad)
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con la población más alta es: ", ciudadMaxPoblacion, " en la ", provinciaMaxPoblacion, " con una población de ", maxPoblacion

FinProceso


33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Proceso Ejercicio33
	
    Definir continuar Como Caracter
	
    Repetir
        
        Escribir "¿Desea continuar con el programa? (S/N): "
        Leer continuar
		
        continuar = Mayusculas(continuar)
		
		Hasta Que continuar = "N"


FinProceso

34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.

Proceso Ejercicio34
	
	
    Definir numero, multiplicador, resultado Como Entero
	
    
    Para numero = 1 Hasta 9
        Escribir "Tabla de multiplicar del ", numero, ":"
		
       
        Para multiplicador = 1 Hasta 10
            resultado = numero * multiplicador
            Escribir numero, " x ", multiplicador, " = ", resultado
        FinPara
		
        Escribir "---------------------------"
    FinPara

FinProceso

35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso Ejercicio35
	
    Definir numero, mayor, menor Como Real
    Definir i Como Entero
	
    Escribir "Ingrese el primer número: "
    Leer numero
    mayor = numero
    menor = numero
	
    Para i <- 2 Hasta 20
        Escribir "Ingrese el número ", i, ": "
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor

FinProceso


36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Proceso Ejercicio36
	
    Definir limite, a, b, c, i Como Entero
	
    a = 0
    b = 1
	
    Escribir "Ingrese el límite de la serie de Fibonacci: "
    Leer limite
	
    Escribir a
    Escribir b
	
    Para i <- 3 Hasta limite
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara


FinProceso

37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso Ejercicio37
	
    Definir num1, num2, resto Como Entero
	
   
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
	
    Mientras num2 <> 0
        resto = num1 MOD num2
        num1 = num2
        num2 = resto
    FinMientras
	
    Escribir "El MCD de los dos números es: ", num1

FinProceso

38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.


Proceso Ejercicio37
	
    Definir numero, sumaDivisores, divisor Como Entero
	
    Escribir "Ingrese un número para verificar si es perfecto: "
    Leer numero
	sumaDivisores  = 0
 
    Para divisor = 1 Hasta (numero / 2)
        Si numero MOD divisor = 0 Entonces
            sumaDivisores = sumaDivisores + divisor
        FinSi
    FinPara
	
   
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    FinSi

FinProceso

39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

	Proceso Ejercicio39
	
    Definir n Como Entero
    Definir piAproximado Como Real
	
    Escribir "Ingrese el número de términos para la aproximación de pi: "
    Leer n
	
    piAproximado = 0
	
    //utilizando la serie de Gregory-Leibniz
    Para i = 0 Hasta n - 1
        piAproximado = piAproximado + ((-1)^i) * (4 / (2 * i + 1))
    FinPara
	
    Escribir "La aproximación de pi con ", n, " términos es: ", piAproximado

FinProceso

40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

	Proceso Ejercicio40
	
    Definir n Como Entero
    Definir piAproximado Como Real
	
    Escribir "Ingrese el número de términos para la aproximación de pi: "
    Leer n
	
    piAproximado = 3.0
	
    // utilizando la serie de Nilakantha
    Para i = 1 Hasta n
        piAproximado = piAproximado + ((-1)^i) * (4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)))
    FinPara
	
    Escribir "La aproximación de pi con ", n, " términos es: ", piAproximado


FinProceso