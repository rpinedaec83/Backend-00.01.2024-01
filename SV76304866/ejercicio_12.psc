//Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso ejercicio_12
    
    Definir numero1, numero2, mayor Como Real
	
    Escribir 'Ingresa el primer número:'
    Leer numero1
    Escribir 'Ingresa el segundo número:'
    Leer numero2

    mayor = numero1
	
    Si numero2 > mayor Entonces
        mayor = numero2
    FinSi
    Escribir 'El número mayor es:', mayor
	
FinProceso
