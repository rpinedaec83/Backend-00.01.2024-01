Proceso Ejercicio6
		
		Definir sueldo Como Entero
		Definir cantidadhoras Como Real
		Definir preciohora Como Real
		Definir horasextra Como Real
		horasnormales = 40
		Escribir "Ingrese cantidad de horas"
		Leer cantidadhoras;
		
		Si cantidadhoras <= 40
			Entonces total = cantidadhoras*20
			horasextra=0
		SiNo
			Si cantidadhoras > 40
				Entonces total = horasnormales * 20 + (cantidadhoras-40)* 25
				horasextra = cantidadhoras - 40
			FinSi
		FinSi
		Escribir "cantidad de horas:" cantidadhoras
	   Escribir "horas extra:"  horasextra
		Escribir "sueldo:" total
		

FinProceso
