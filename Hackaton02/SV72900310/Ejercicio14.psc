//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.


Proceso Ejercicio14
	
	Definir numero, i, contador Como Entero
	
    Escribir "Ingrese un numero entre 1 y 10:"
    Leer numero
	
    Mientras numero < 1 o numero > 10 Hacer
        Escribir "El numero debe estar entre 1 y 10. Por favor, vuelva a intentar:"
        Leer numero
    FinMientras
	
	contador = 0

	Para i = 1 Hasta numero Hacer
		Si numero % i = 0 Entonces
			contador = contador + 1
		FinSi
	FinPara

	Si contador <= 2 Entonces
		Escribir "El numero ", numero, " es primo."
	Sino
		Escribir "El numero ", numero, " no es primo."
		FinSi
	
FinProceso
