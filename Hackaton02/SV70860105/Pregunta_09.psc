Proceso Pregunta_09
	definir salario Como Real
	escribir "Ingrese salario del trabajador : "
	leer salario
	Si salario <= 2000 Entonces
		salario = salario * 1.1
	SiNo
		salario = salario * 1.05
	Fin Si
	escribir "El trabajador pasara de ganar $" salario
FinProceso
