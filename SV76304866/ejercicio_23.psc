//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso ejercicio_23
    // Definir variables
    Definir n, suma, numImpar Como Entero

    Escribir 'Ingrese un número entero positivo:'
    Leer n

    Si n < 0 Entonces
        Escribir 'Ingrese un número entero positivo.'
    Sino

        suma = 0

        numImpar = 1

        Mientras numImpar <= n Hacer
            suma = suma + numImpar
            numImpar = numImpar + 2
        FinMientras

        Escribir 'La suma de los números impares hasta ', n, 'es:', suma
    FinSi
	
FinProceso
