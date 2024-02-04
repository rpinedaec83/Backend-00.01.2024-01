//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
Proceso Ejercicio14
	num = 0
	i  = 0
	Escribir "Ingrese un número entre 1 y 10:"
    Leer num
	Si num >= 1 Y num <= 10 Entonces
        contador = 0
		
        Para i = 1 Hasta num Hacer
            Si num % i = 0 Entonces
                contador = contador + 1
            Fin Si
        Fin Para
		
        Si contador = 2 Entonces
            Escribir "El número ", num, " es un número primo."
		SiNo
			
            Escribir "El número ", num, " no es un número primo."
        Fin Si
	SiNo
		
        Escribir "El número debe estar entre 1 y 10."
    Fin Si
FinProceso
