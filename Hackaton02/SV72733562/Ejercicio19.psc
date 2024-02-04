Proceso sin_titulo
	
	Definir empleado Como real	
	
	Escribir "Elige al empleado por numeros si:"
	Escribir " 11 = Cajero "
	Escribir " 22 = Servidor "
	Escribir " 33 = Preparador de mezclas "
	Escribir " 44 = Mantenimiento "
	Leer empleado
	
	Escribir "Cuantos dias ha trabajado? (1-6)"
	Leer diastrabajados
	
	
	Si empleado = 11 Entonces
		precio=diastrabajados*56
	Fin Si
	
	Si empleado = 22 Entonces
		precio=diastrabajados*64
	Fin Si
	
	Si empleado = 33 Entonces
		precio=diastrabajados*80
	Fin Si
	
	Si empleado = 44 Entonces
		precio=diastrabajados*48
	Fin Si
	
	Escribir "Lo que debe pagarle es: " precio
	
FinProceso
