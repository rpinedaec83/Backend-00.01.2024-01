Proceso Pregunta_06	
	definir horastrabajadas Como Entero
	definir salario Como Real
	definir horasextra Como Entero
	escribir "Ingrese horas trabajadas : "
	leer horastrabajadas
	
	Si horastrabajadas <= 40 Entonces
		salario = horastrabajadas * 20
	SiNo
		horasextra = horastrabajadas - 40
		salario = 40 * 20 + horasextra * 25
	Fin Si
	escribir "El trabajador recibir un salario de : $" salario
FinProceso
