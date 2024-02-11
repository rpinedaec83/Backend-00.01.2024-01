//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso ejercicio_22

    Definir n, suma, i Como Entero

    Escribir 'Ingrese un número entero positivo:'
    Leer n

    Si n < 0 Entonces
        Escribir 'Ingrese un número entero positivo.'
    Sino
        suma = 0

        Para i Desde 1 Hasta n Hacer
            suma = suma + i
        FinPara

        Escribir 'La suma de los primeros', n, 'números es:', suma
    FinSi
	
FinProceso

