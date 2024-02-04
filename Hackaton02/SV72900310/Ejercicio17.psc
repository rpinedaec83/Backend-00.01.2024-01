//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.


Proceso Ejercicio17
	
	Definir hora, minuto, segundo Como Entero
	
	Escribir "Ingrese la hora (formato de 24 horas):"
	Leer hora
	Mientras hora < 0 o hora > 23
		Escribir "Ingrese un numero entre 0 y 24:"	
	    Leer hora
	FinMientras
	
	Escribir "Ingrese los minutos:"
	Leer minuto
	Mientras minuto < 0 o minuto > 59
		Escribir "Ingrese un numero entre 0 y 59:"
    Leer minuto
	FinMientras
	
	Escribir "Ingrese los segundos:"
	Leer segundo
	Mientras segundo < 0 o segundo > 59
		Escribir "Ingrese un numero entre 0 y 59:"
    Leer segundo
	FinMientras


	segundo = segundo + 1

	Si segundo >= 60 Entonces
		segundo = 0
		minuto = minuto + 1
		
		Si minuto >= 60 Entonces
			minuto = 0
			hora = hora + 1
			
			Si hora >= 24 Entonces
				hora = 0
			FinSi
		FinSi
FinSi

Escribir "La hora despues de un segundo es:", hora, ":", minuto, ":", segundo
	
FinProceso
