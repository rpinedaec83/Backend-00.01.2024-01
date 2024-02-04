// 35. Hacer un algoritmo en Pseint que nos permita saber cu�l es el n�mero mayor y menor, se debe ingresar s�lo veinte n�meros.


Proceso Ejercicio35
	
	Definir numero, mayor, menor Como Real
    Definir i Como Entero
	
    Escribir "Ingrese el numero 1:"
    Leer numero
	
    mayor = numero
    menor = numero
	
    Para i = 2 Hasta 20 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        SiNo
					
        Si numero < menor Entonces
            menor = numero
        FinSi
	FinSi
	
    FinPara
	
    Escribir "El numero mayor es:", mayor
    Escribir "El numero menor es:", menor
	
FinProceso
