Proceso Pregunta_20
	definir num1, num2, num3, num4 como reales
	escribir "Ingrese 4 numeros : "
	leer num1
	leer num2
	leer num3
	leer num4
	
	Si num3 % 2 == 0 Entonces
		escribir num2 * num2
	SiNo
		Si num1 < num4 Entonces
			escribir (num1 + num2 + num3 + num4)/4
		SiNo
			Si num2 > num3 Entonces
				si num3 >= 50 y num3 <=700 Entonces
					escribir (num1 + num2 + num3 + num4)/4
				FinSi
			Fin Si
		Fin Si
	FinSi
	
	
FinProceso
