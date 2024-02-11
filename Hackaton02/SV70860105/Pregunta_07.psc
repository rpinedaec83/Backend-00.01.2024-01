Proceso Pregunta_07
	definir membresia Como Caracter
	definir costo Como Real
	definir monto Como Real
	escribir "Ingrese monto total : "
	leer monto
	escribir "Ingrese tipo de membresia del clientes : "
	leer membresia
	
	Segun membresia Hacer
		'A':
			monto = monto - monto * 0.1
		'B':
			monto = monto - monto * 0.15
		'C':
			monto = monto - monto * 0.2
	Fin Segun
	
	escribir "El cliente debera pagar un total de : " monto
	
FinProceso
