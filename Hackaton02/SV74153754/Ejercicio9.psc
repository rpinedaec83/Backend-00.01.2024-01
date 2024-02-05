Proceso Ejercicio9
	Definir sueldo, aumento Como Real
	Escribir "Sueldo"
	Leer sueldo
	
	Si sueldo >= 2000 Entonces
		total = sueldo + (sueldo*0.05)
		aumento = sueldo*0.05
	SiNo
		Si sueldo < 2000 Entonces
			total = sueldo + (sueldo*0.1)
			aumento = sueldo*0.1
		FinSi
	FinSi
	
	Escribir "Aumento:" aumento
	Escribir "Nuevo Sueldo:" total
FinProceso
