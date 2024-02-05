// Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso ejercicio_17
	Definir hora, minutos, seg Como Entero
	Escribir " Ingrese hora : "
	Leer hora
	Escribir " Ingrese minutos : "
	Leer minutos
	Escribir " Ingrese segundos : "
	Leer seg
	
	Si ( hora >= 0 y hora <= 23 ) y ( minutos >= 0 y minutos <= 59 ) y ( seg >= 0 y seg <= 59 ) Entonces
		seg = seg + 1
		si seg = 60 Entonces
			seg = 0
			minutos = minutos + 1
			Si minutos = 60 Entonces
				minutos = 0
				hora = hora + 1
				Si hora = 24 Entonces
					hora = 0
				FinSi
			FinSi
		FinSi
		Escribir "La hora siguiente es: ", hora, ":", minutos, ":", seg
	Sino
        Escribir("Valores ingresados no válidos. Asegúrese de que la hora esté en el rango de 0 a 23, los minutos y los segundos estén en el rango de 0 a 59.")
    FinSi
		
	
FinProceso
