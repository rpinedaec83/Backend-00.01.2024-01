//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso ejercicio_14
    Definir numero, i, contador Como Entero

    Escribir 'Ingrese un número entero positivo entre 1 y 10:'
    Leer numero

    Si numero > 0 Y numero < 11 Entonces
        contador = 0

        Para i = 1 Hasta numero Hacer
            Si numero % i = 0 Entonces
                contador = contador + 1
            FinSi
        FinPara

        Si contador = 2 Entonces
            Escribir 'El número ingresado es primo.'
        Sino
            Escribir 'El número ingresado no es primo.'
        FinSi
    Sino
        Escribir 'El número ingresado no corresponde al rango pedido'
    FinSi
	
FinProceso
