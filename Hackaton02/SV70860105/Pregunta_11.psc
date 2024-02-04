Proceso Pregunta_11
	definir num1, num2, num3 como reales
	escribir "Ingrese 3 numeros : "
	leer num1
	leer num2
	leer num3
	
	Si num1 > num2 y num1 > num3 Entonces
		escribir num1 " es el numero mayor"
	SiNo
		Si num2 > num1 y num2 > num3 Entonces
			escribir num2 " es el numero mayor"
		SiNo
			escribir num3 " es el numero mayor"
		Fin Si
	Fin Si
	

FinProceso
