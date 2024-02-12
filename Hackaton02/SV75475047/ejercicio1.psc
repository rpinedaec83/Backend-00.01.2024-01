Proceso ejercicio1
	
1.

 Proceso ejercicio_1
	Definir numero1 como Numerica
	Escribir "Digite un número de 3 dígitos"
	Leer numero1
	

	si numero1 >= 100 y numero1 < 1000 Entonces
		Escribir "su numero : " numero1 " contiene 3 dígitos" 
		
	SiNo
		Escribir "No cuenta con 3 dígitos"
	FinSi
FinProceso

2.

Proceso  ejercicio2
    Definir numero Como Entero	
    Escribir "Ingrese un número entero"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "El número es negativo."
		
    Sino
        Escribir "El número no es negativo."
    FinSi	
FinProceso

3.

Proceso  ejercicio3
    Definir numero1	como numerica
    Escribir "Ingrese un número que termine en 4"
    Leer numero1
	
    Si numero1 Mod 10 = 4 Entonces
		Escribir "El número termina en 4"
	Sino 
		Escribir "El número no termina en 4"
	FinSi
FinProceso

4.

Proceso  ejercicio4
    Definir numero1, numero2, numero3, temp Como Entero
    Escribir "Ingrese el primer número:"
    Leer numero1
	
    Escribir "Ingrese el segundo número:"
    Leer numero2
	
    Escribir "Ingrese el tercer número:"
    Leer numero3
	
    Si numero1 > numero2 Entonces
        temp = numero1
        numero1 = numero2
        numero2 = temp
    FinSi
	
    Si numero2 > numero3 Entonces
        temp = numero2
        numero2 = numero3
        numero3 = temp
    FinSi
	
    Si numero1 > numero2 Entonces
        temp = numero1
        numero1 = numero2
        numero2 = temp
    FinSi

5.

Proceso ejercicio05
	definir cantidad Como Entero
	definir precioZapato  Como Real
	Definir  totalPagar Como Real
	Definir  descuento Como Entero
	precioZapato <- 80
	Escribir  "Digite la cantidad de zapatos comprados"
	leer cantidad;
	totalPagar <- cantidad*80
	descuento  <- 0
	
	Si cantidad > 10 y cantidad <= 20 Entonces
		totalPagar <- cantidad*80 - (cantidad * 80 *0.10)
		descuento  <- 10
		SiNo
			si cantidad >20 y cantidad <=30 Entonces
			
				totalPagar<- cantidad*80 - (cantidad * 80 *0.20)
				descuento  <- 20
				SiNo
				si cantidad>30 Entonces
						totalPagar<- cantidad*80 - (cantidad * 80 *0.40)
						descuento  <- 40
						
						FinSi
						FinSi
					
						FinSi
					
					
					Escribir  "precio total: " cantidad * 80
						Escribir "descuesto: %" descuento
						Escribir "total a pagar: " totalPagar
FinProceso

6.

Proceso ejercicio_6
    Definir horasTrabajadas, sueldoBase, sueldoTotal Como Real
    sueldoBase = 20
    Escribir "Ingrese el número de horas trabajadas en la semana:"
    Leer horasTrabajadas
    Si horasTrabajadas <= 40 Entonces
        sueldoTotal = horasTrabajadas * sueldoBase
    Sino
        sueldoTotal = 40 * sueldoBase + (horasTrabajadas - 40) * 25  // 40 horas a $20 y horas extras a $25
    FinSi
    Escribir "El sueldo semanal es: $", sueldoTotal	
FinProceso

7.

Proceso  ejercicio_07
    Definir tipoMembresia Como Caracter
    Definir totalCompra, descuento, totalConDescuento Como Real
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
	
    Escribir "Ingrese el total de la compra:"
    Leer totalCompra

    Segun tipoMembresia Hacer
        Caso "A":
            descuento = 0.1 * totalCompra  
        Caso "B":
            descuento = 0.15 * totalCompra 
        Caso "C":
            descuento = 0.2 * totalCompra  
        OtroCaso:
            descuento = 0  
    FinSegun
    totalConDescuento = totalCompra - descuento
	
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total con descuento: $", totalConDescuento	
FinProceso

8.

Proceso  ejercicio_08
    Definir nota1, nota2, nota3, promedio Como Real
	
    Escribir "Ingrese la nota 1:"
    Leer nota1
	
    Escribir "Ingrese la nota 2:"
    Leer nota2
	
    Escribir "Ingrese la nota 3:"
    Leer nota3

    promedio = (nota1 + nota2 + nota3) / 3

    Si promedio >= 6 Entonces
        Escribir "El estudiante aprobó con un promedio de:", promedio
    Sino
        Escribir "El estudiante no aprobó con un promedio de:", promedio
    FinSi
FinProceso

9.

Proceso ejercicio_09
    Definir salarioActual, salarioAumentado Como Real
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
	
    Si salarioActual > 2000 Entonces
        salarioAumentado = salarioActual + (0.05 * salarioActual) 
    Sino
        salarioAumentado = salarioActual + (0.1 * salarioActual)
    FinSi

    Escribir "Salario actual: $", salarioActual
    Escribir "Salario con aumento: $", salarioAumentado
FinProceso

10.

Proceso ejercicio_10
    Definir numero Como Entero
    Escribir "Ingrese un número:"
    Leer numero

    Si numero Mod 2 = 0 Entonces
        Escribir "El número ingresado es par."
    Sino
        Escribir "El número ingresado es impar."
    FinSi
FinProceso

11.

Proceso ejercicio_11
    Definir num1, num2, num3 Como Real
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Escribir "Ingrese el tercer número:"
    Leer num3

    Si num1 >= num2 Y num1 >= num3 Entonces
        Escribir "El mayor es:", num1
            Sino 
	Si num2 >= num1 Y num2 >= num3 Entonces
		Escribir "El mayor es:", num2
			Sino
			      Escribir "El mayor es:", num3
		FinSi
	FinSi
FinProceso

12.

Proceso ejercicio_12
    Definir num1 , num2 Como Real
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	

    Si num1 >= num2 Entonces
        Escribir "El mayor es:", num1
            Sino 
		         Escribir "El mayor es:", num2
		FinSi
FinProceso

13.

Proceso ejercicio_13
    Definir letra Como Caracter
    Escribir "Ingrese una letra:"
    Leer letra
	
    letra = minúsculas (letra)
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
        Escribir "La letra ingresada no es una vocal."
    FinSi
FinProceso

14. 

Proceso ejercicio_14
    Definir numero Como Entero
    Escribir "Ingrese un número del 1 al 10:"
    Leer numero
	
    Si numero >= 1 Y numero <= 10 Entonces
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 O numero = 9 Entonces
            Escribir "El número ingresado ES PRIMO."
        Sino
            Escribir "El número ingresado NO ES PRIMO."
        FinSi
    Sino
        Escribir "El número ingresado no está en el rango permitido."
    FinSi	
FinProceso

15.

Proceso ejercicio_15
    Definir centimetros, pulgadas, libras, kilogramos Como Real
    FACTOR_PULGADAS = 0.393701  
    FACTOR_KILOGRAMOS = 0.453592 
    Escribir "Ingrese la cantidad en centímetros:"
    Leer centimetros

    pulgadas = centimetros * FACTOR_PULGADAS

    Escribir "Ingrese la cantidad en libras:"
    Leer libras
	
    kilogramos = libras * FACTOR_KILOGRAMOS

    Escribir "Resultado de la conversión:"
    Escribir centimetros, " centímetros equivale a ", pulgadas, " pulgadas."
    Escribir libras, " libras equivale a ", kilogramos, " kilogramos."
FinProceso

16.

Proceso ejercicio_16
    Definir numero Como Entero
    Escribir "Ingrese un número del 1 al 7:"
    Leer numero

    Segun numero Hacer
        Caso 1:
            Escribir "El número ingresado corresponde al día lunes."
        Caso 2:
            Escribir "El número ingresado corresponde al día martes."
        Caso 3:
            Escribir "El número ingresado corresponde al día miércoles."
        Caso 4:
            Escribir "El número ingresado corresponde al día jueves."
        Caso 5:
            Escribir "El número ingresado corresponde al día viernes."
        Caso 6:
            Escribir "El número ingresado corresponde al día sábado."
        Caso 7:
            Escribir "El número ingresado corresponde al día domingo."
        OtroCaso:
            Escribir "Número no válido. Debe estar entre 1 y 7."
    FinSegun
FinProceso

17.

Proceso ejercicio_17
    Definir horas, minutos, segundos Como Entero
    Escribir "Ingrese la hora (formato 24 horas):"
    Leer horas

    Si horas < 0 O horas > 23 Entonces
        Escribir "Hora no válida. Debe estar entre 0 y 23."
    Sino
        Escribir "Ingrese los minutos:"
        Leer minutos

        Si minutos < 0 O minutos > 59 Entonces
            Escribir "Minutos no válidos. Deben estar entre 0 y 59."
        Sino
            Escribir "Ingrese los segundos:"
            Leer segundos
			
            Si segundos < 0 O segundos > 59 Entonces
                Escribir "Segundos no válidos. Deben estar entre 0 y 59."
            Sino
                segundos = segundos + 1
                Si segundos >= 60 Entonces
                    segundos = 0
                    minutos = minutos + 1
                    Si minutos >= 60 Entonces
                        minutos = 0
                        horas = horas + 1
                        Si horas >= 24 Entonces
                            horas = 0
                        FinSi
                    FinSi
                FinSi
                Escribir "La hora siguiente es:", horas, ":", minutos, ":", segundos
            FinSi
        FinSi
    FinSi
FinProceso

18.

Proceso ejercicio_18
    Definir cantidadCDs Como Entero
    Definir precioUnitario, precioTotal, gananciaVendedor Como Real
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidadCDs

    Si cantidadCDs <= 9 Entonces
        precioUnitario = 10
    Sino Si cantidadCDs <= 99 Entonces
			precioUnitario = 8
		Sino Si cantidadCDs <= 499 Entonces
				precioUnitario = 7
			Sino
				precioUnitario = 6
			FinSi
		FinSi
	FinSi
			precioTotal = cantidadCDs * precioUnitario
			gananciaVendedor = 0.0825 * precioTotal
			
			Escribir "Precio total para el cliente: $", precioTotal
			Escribir "Ganancia para el vendedor: $", gananciaVendedor
FinProceso

19.

Proceso ejercicio_19
    Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, salarioSemanal Como Real
    Escribir "Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"
    Leer idEmpleado

    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"
    Leer diasTrabajados

    Si diasTrabajados < 1 O diasTrabajados > 6 Entonces
        Escribir "Cantidad de días no válida. Debe estar entre 1 y 6."
    Sino
        Segun idEmpleado Hacer
            Caso 1:
                salarioDiario = 56 
            Caso 2:
                salarioDiario = 64 
            Caso 3:
                salarioDiario = 80  
            Caso 4:
                salarioDiario = 48
            OtroCaso:
                Escribir "Número de empleado no válido."
        FinSegun
        salarioSemanal = salarioDiario * diasTrabajados

        Si idEmpleado >= 1 Y idEmpleado <= 4 Entonces
            Escribir "El salario semanal del empleado es: $", salarioSemanal
        FinSi
    FinSi
FinProceso

20.

Proceso ejercicio_20
    Definir num1, num2, num3, num4 Como Entero
    Definir cantidadPares, mayor, resultadoMedia, resultadoSuma Como Real
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Escribir "Ingrese el cuarto número:"
    Leer num4

    cantidadPares = 0
    mayor = 0
    resultadoMedia = 0
    resultadoSuma = 0

    Si num1 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num2 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num3 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num4 Mod 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi

    mayor = num1
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
	
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
	
    Si num4 > mayor Entonces
        mayor = num4
    FinSi

    Si num3 Mod 2 = 0 Entonces
        resultadoMedia = num2 ^ 2
    FinSi

    Si num1 < num4 Entonces
        resultadoMedia = (num1 + num2 + num3 + num4) / 4
    FinSi
	
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        resultadoSuma = num1 + num2 + num3 + num4
    FinSi

    Escribir "Cantidad de números pares:", cantidadPares
    Escribir "El mayor de todos es:", mayor
    Escribir "Resultado de la operación 3 (cuadrado del segundo si el tercero es par):", resultadoMedia
    Escribir "Resultado de la operación 4 (media de los 4 números si el primero es menor que el cuarto):", resultadoMedia
    Escribir "Resultado de la operación 5 (suma de los 4 números si el segundo es mayor que el tercero entre 50 y 700):", resultadoSuma
FinProceso

21.

Proceso ejercicio_21
    Definir numero, factorial Como Entero
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero

    factorial = 1

    Si numero >= 0 Entonces
        Para i Desde 1 Hasta numero Hacer
            factorial = factorial * i
        FinPara

        Escribir "El factorial de", numero, " es:", factorial
    Sino
        Escribir "No se puede calcular el factorial de un número negativo."
    FinSi
FinProceso

22.

Proceso ejercicio_22
    Definir n, suma, i Como Entero
    suma = 0
    Escribir "Ingrese un número positivo para calcular la suma de los n primeros números:"
    Leer n

    Si n < 0 Entonces
        Escribir "Por favor, ingrese un número positivo."
    Sino
        Para i Desde 1 Hasta n Hacer
            suma = suma + i
        FinPara
        Escribir "La suma de los primeros ", n, " números es:", suma
    FinSi
FinProceso

23.

Proceso ejercicio_23
    Definir n, suma, i Como Entero
    suma = 0
    Escribir "Ingrese un número positivo para calcular la suma de los números impares menores o iguales a n:"
    Leer n

    Si n < 0 Entonces
        Escribir "Por favor, ingrese un número positivo."
    Sino
        Para i Desde 1 Hasta n Hacer
            Si i Mod 2 <> 0 Entonces  
                suma = suma + i
            FinSi
        FinPara
        Escribir "La suma de los números impares menores o iguales a", n, "es:", suma
    FinSi
FinProceso

24.

Proceso ejercicio_24
    Definir suma, i Como Entero

    suma = 0

    Para i Desde 1 Hasta 1000 Hacer
        Si i Mod 2 = 0 Entonces 
            suma = suma + i
        FinSi
    FinPara

    Escribir "La suma de todos los números pares hasta 1000 es:", suma
FinAlgoritmo


25.

Proceso ejercicio_25
    Definir numero, factorial Como Entero

    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero

    factorial = 1

    Para i Desde 1 Hasta numero Hacer
        factorial = factorial * i
    FinPara
    Escribir "El factorial de", numero, " es:", factorial
FinProceso

26.

Proceso ejercicio_26
    Definir dividendo, divisor, cociente, resto Como Entero
    Escribir "Ingrese el dividendo:"
    Leer dividendo
	
    Escribir "Ingrese el divisor:"
    Leer divisor
    cociente = 0
    resto = dividendo
    Mientras resto >= divisor Hacer
        resto = resto - divisor
        cociente = cociente + 1
    FinMientras
    Escribir "El cociente es:", cociente
    Escribir "El resto es:", resto
FinProceso

27.

Proceso ejercicio_27
    Definir numero, suma, cantidad Como Real
    suma = 0
	definir bandera Como Logico
	bandera = Verdadero 
    cantidad = 0
    Escribir "Ingrese números positivos para calcular la media. Ingrese un número negativo para finalizar."

    Mientras bandera Hacer
        Escribir "Ingrese un número:"
        Leer numero
		
        Si numero >= 0 Entonces
            suma = suma + numero
            cantidad = cantidad + 1
        Sino
			bandera = Falso
       
        FinSi
    FinMientras

    Si cantidad > 0 Entonces
        Definir media Como Real
        media = suma / cantidad
        Escribir "La media de los números positivos ingresados es:", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
	
FinProceso

28.

Proceso ejercicio_28
    Definir suma, contador Como Entero
    suma = 0
    contador = 1

    Repetir
        suma = suma + contador
        contador = contador + 1
		HastaQue contador > 100

		Escribir "La suma de los primeros cien números es:", suma
FinProceso

29.

Proceso ejercicio_29
	definir suma,cont Como Entero
	suma <- 0;
	cont <- 0;
	Mientras cont<=100 Hacer
		
		suma <- suma + cont
		cont <- cont +1
		
		Fin Mientras
		
		Escribir  suma;
FinProceso

30.

Proceso ejercicio_30
    Definir suma Como Entero
    suma = 0
    Para i Desde 1 Hasta 100 Hacer
        suma = suma + i
    FinPara
    Escribir "La suma de los primeros cien números es:", suma
FinProceso

31.

Proceso ejercicio_31
    Definir numero, sumaPares, sumaImpares, cantidadPares, cantidadImpares, i Como Entero
    Definir mediaPares, mediaImpares Como Real

    sumaPares = 0
    sumaImpares = 0
    cantidadPares = 0
    cantidadImpares = 0

    Para i Desde 1 Hasta 10 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
		
        Si numero Mod 2 = 0 Entonces
            sumaPares = sumaPares + numero
            cantidadPares = cantidadPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            cantidadImpares = cantidadImpares + 1
        FinSi
    FinPara

    Si cantidadPares > 0 Entonces
        mediaPares = sumaPares / cantidadPares
        Escribir "La media de los números pares es:", mediaPares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
	
    Si cantidadImpares > 0 Entonces
        mediaImpares = sumaImpares / cantidadImpares
        Escribir "La media de los números impares es:", mediaImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso

32.

Proceso ejercicio_32
    Definir provincia, ciudad Como Entero
    Definir poblacion, poblacionMaxima,maxCiudad,maxProvincia Como Entero
    poblacionMaxima <- 0
	maxCiudad <-0;
	maxProvincia <- 0;

    Para provincia <- 1 Hasta 3 Hacer
		
        Para ciudad <- 1 Hasta 11 Hacer
			poblacion <- azar(1000)+1;
            Escribir "Ingrese la población de la ciudad ", ciudad, " en la provincia ", provincia, ": ", poblacion
            
            Si poblacion > poblacionMaxima Entonces
                poblacionMaxima <- poblacion
				maxCiudad <- ciudad
				maxProvincia <- provincia
            FinSi
        FinPara
    FinPara
	
    
    Escribir "La ciudad con la población más alta tiene ", poblacionMaxima, " habitantes."
	Escribir  "Provincia: ",maxProvincia," ciudad: ",maxCiudad
FinProceso

33.

Proceso ejercicio_33
    Definir continuar Como Caracter
    Definir numero, suma, contador Como Entero
    continuar = "S"
    contador = 1

    Mientras continuar = "S" Hacer
        suma = 0
        contador = 1
        Repetir
            Escribir "Ingrese el número ", contador, ":"
            Leer numero
            suma = suma + numero
            contador = contador + 1
			HastaQue contador > 10

			Escribir "La suma de los primeros diez números es:", suma

			Escribir "¿Desea continuar? (S para Sí, cualquier otra tecla para No):"
			Leer continuar
		FinMientras

		Escribir "¡Gracias por usar el programa!"
FinProceso

34.

Proceso ejercicio_33
    Definir opc Como Caracter
	Repetir
		Escribir "Este programa se esta ejecutando";
		Escribir "¿Desea continuar?"
		Leer opc
	Hasta Que opc ="no"
FinProceso

35.

Proceso Ejercicio_35
    Definir numero, mayor, menor Como Real
    Definir i Como Entero

    mayor = -Infinito         
    menor = Infinito  

    Para i Desde 1 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
    Escribir "El número mayor es:", mayor
    Escribir "El número menor es:", menor
FinProceso

36.

Proceso ejercicio_36
    Definir n, i, terminoAnterior, terminoActual, nuevoTermino Como Entero
    Escribir "Ingrese el número de términos de la serie de Fibonacci a calcular:"
    Leer n

    terminoAnterior = 0
    terminoActual = 1

    Escribir "Serie de Fibonacci:"
    Escribir terminoAnterior
    Escribir terminoActual

    Para i Desde 3 Hasta n Hacer
        nuevoTermino = terminoAnterior + terminoActual
        Escribir nuevoTermino
        terminoAnterior = terminoActual
        terminoActual = nuevoTermino
    FinPara
FinProceso

37.

Proceso ejercicio_37
    Definir num1, num2, resto Como Entero

    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2

    Mientras num2 <> 0 Hacer
        resto = num1 % num2
        num1 = num2
        num2 = resto
    FinMientras

    Escribir "El Máximo Común Divisor (M.C.D) es:", num1
FinProceso

38.

Proceso ejercicio_38
    Definir numero, sumaDivisores Como Entero
    Escribir "Ingrese un número:"
    Leer numero

    sumaDivisores = 0

    Para i Desde 1 Hasta (numero / 2) Hacer
        Si numero % i = 0 Entonces
            sumaDivisores = sumaDivisores + i
        FinSi
    FinPara

    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    FinSi
FinProceso

39.

Proceso ejercicio_39
    Definir n, i, signo como Entero
    Definir termino, piAprox como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi:"
    Leer n
    piAprox = 0.0  
    signo = 1  
	
    Para i = 1 Hasta n
        termino = 4.0 / ((2 * i) - 1)
        piAprox = piAprox + (signo * termino)
        signo = signo * (-1)  
    FinPara
    Escribir "La aproximación de Pi con", n, "términos es:", piAprox
FinProceso

40.

Proceso ejercicio_40
    Definir n, i como Entero
    Definir termino, piAprox como Real
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi:"
    Leer n	
    piAprox = 3.0  
	
    Para i = 2 Hasta n * 2 Paso 2
        termino = 4.0 / (i * (i + 1) * (i + 2))
      
        Si i Mod 4 == 0 Entonces
            piAprox = piAprox - termino
        Sino
            piAprox = piAprox + termino
        FinSi
    FinPara
    Escribir "La aproximación de Pi con", n, "términos es:", piAprox
FinProceso

