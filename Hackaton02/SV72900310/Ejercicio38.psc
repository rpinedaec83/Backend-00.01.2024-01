// 38. Hacer un algoritmo en Pseint que nos permita saber si un numero es un numero perfecto.


Proceso Ejercicio38
	
	Definir numero, sumaDivisores, divisor Como Entero
	
    Escribir "Ingrese un numero:"
    Leer numero
	
    sumaDivisores = 0
	
    Para divisor = 1 Hasta numero - 1 Hacer
        Si numero % divisor = 0 Entonces
            sumaDivisores = sumaDivisores + divisor
        FinSi
    FinPara
	
    Si sumaDivisores = numero Entonces
        Escribir "El numero ingresado es un numero perfecto."
    Sino
        Escribir "El numero ingresado NO es un numero perfecto."
    FinSi
	
FinProceso
