Proceso ejercicio9
	salario = 0
	aumento = 0
	nuevosalario = 0
	Escribir "ingrese el sueldo del trabajador"
	leer salario
	Si salario > 2000 Entonces
		aumento = 0.05
	SiNo
		aumento = 0.10
	Fin Si
	nuevosalario = salario + (salario * aumento)
	Escribir "el salario mas el aumento es: " nuevosalario "$"
	Escribir "el aumento es de:" aumento * 100 "$"
FinProceso
