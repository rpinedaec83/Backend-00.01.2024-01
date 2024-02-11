//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso ejercicio_11
    Definir num1, num2, num3, mayor Como Real
	
    Escribir 'Ingrese el primer número:'
    Leer numero1
    Escribir 'Ingrese el segundo número:'
    Leer numero2
    Escribir 'Ingrese el tercer número:'
    Leer numero3
	
    mayor = numero1
    Si numero2 > mayor Entonces
        mayor = numero2
    FinSi
    Si numero3 > mayor Entonces
        mayor = numero3
    FinSi
FinProceso

