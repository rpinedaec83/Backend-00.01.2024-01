//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Algoritmo ejercicio_38

    Definir numero, sumaDivisores Como Entero

    Escribir 'Ingrese un número: '
    Leer numero

    sumaDivisores = 0

    Para i = 1 Hasta numero - 1 Hacer
        Si numero Mod i = 0 Entonces
            sumaDivisores = sumaDivisores + i
        FinSi
    FinPara

    Si sumaDivisores = numero Entonces
        Escribir 'El número ', numero, ' es un número perfecto.'
    SiNo
        Escribir 'El número ', numero, ' no es un número perfecto.'
    FinSi
	
FinAlgoritmo
