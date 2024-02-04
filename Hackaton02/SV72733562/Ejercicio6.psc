Proceso Ejercicio6

	Definir horastrabajadas, sueldoporhora, horasextra, sueldoextra, sueldofijo, sueldototal Como Real
		
	Escribir "Ingresa el numero de horas trabajadas a la semana:"
	Leer horastrabajadas
		
	Si horastrabajadas <= 40 entonces
		sueldoporhora = 20
		sueldototal=sueldoporhora*horastrabajadas;
		Escribir "El sueldo total es: " sueldototal
	FinSi
	
	
	Si horastrabajadas > 40 entonces
		sueldofijo = 20*40;
		horasextra = horastrabajadas-40;
		sueldoextra = 25*horasextra;
		
		sueldototal=sueldofijo+sueldoextra;
		Escribir "El sueldo total es: " sueldototal
	FinSi
	
	
	
		

FinProceso
