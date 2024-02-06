//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Algoritmo ejercicio_35

    Definir numero, mayor, menor Como Real
    Definir contador Como Entero
	
    mayor = 0
    menor = 0
	
    Escribir 'Ingrese el primer número: '
    Leer numero
    mayor = numero
    menor = numero
	
    Escribir 'Ingrese el segundo número: '
    Leer numero

    Si numero > mayor Entonces
        mayor = numero
    FinSi
	
    Si numero < menor Entonces
        menor = numero
    FinSi

    Para contador = 3 Hasta 20 Hacer
        Escribir 'Ingrese el número ', contador, ': '
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir 'El número mayor es: ', mayor
    Escribir 'El número menor es: ', menor
	
FinAlgoritmo
