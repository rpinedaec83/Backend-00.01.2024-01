Proceso Ejercicio9
	
	Definir sueldo, aumento, nuevosueldo Como Real
	
	Escribir "Indique su sueldo:"
	Leer sueldo
	
	Si sueldo>2000 Entonces
		aumento = 0.05 * sueldo
		nuevosueldo= sueldo+aumento
	SiNo
		aumento = 0.1 * sueldo
		nuevosueldo= sueldo+aumento
	Fin Si
	
	Escribir "Su nuevo sueldo es: " nuevosueldo
	
	
	
FinProceso
