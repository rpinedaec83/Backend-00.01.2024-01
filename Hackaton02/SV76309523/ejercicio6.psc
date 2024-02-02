Proceso ejercicio6
	Escribir "ingrese el numero de horas trabajadas a la semana"
	nhoras = 0
	Leer nhoras
	pagoporhora = 0
	sueldosemanal = 0
	Si nhoras <= 40 Entonces
		pagoporhora = 20
	SiNo
		pagoporhora = 25
	Fin Si
	sueldosemanal = nhoras * pagoporhora
	Escribir "el sueldo semanal del trabajador es " sueldosemanal
	
FinProceso
