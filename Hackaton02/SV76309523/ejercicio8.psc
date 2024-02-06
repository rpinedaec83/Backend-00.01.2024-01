Proceso ejercicio8	
	numero1 = 0
	numero2 = 0
	numero3 = 0
	sumatotal=0
	promedio = 0
	Escribir "ingrese las tres notas"
	leer numero1, numero2, numero3
	Si numero1 < 0 o numero1 > 20 o numero2 < 0 o numero2 > 20 o numero3 < 0 o numero3 > 20 Entonces
		Escribir "ERROR. Las notas son de 0 a 20"
	SiNo
		sumatotal = numero1 + numero2 + numero3
		promedio = sumatotal / 3
		Escribir "el promedio de las tres notas es " promedio
	Fin Si
FinProceso
