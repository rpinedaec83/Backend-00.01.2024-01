Proceso Pregunta_04
	definir num1, num2, num3 Como Real
	escribir "Ingrese los 3 numeros : "
	leer num1
	leer num2
	leer num3
	Si num1 > num2 y num1 > num3 Entonces
		si num2 > num3 Entonces
			escribir num3 " < " num2 " < " num1
		SiNo
			escribir num2 " < " num3 " < " num1
		FinSi
	SiNo
		Si num2 > num1 y num2 > num3 Entonces
			Si num1 > num3 Entonces
				escribir num3 " < " num1 " < " num2
			SiNo
				escribir num1 " < " num3 " < " num2
			Fin Si
		SiNo
			Si num1 > num2 Entonces
				escribir num2 " < " num1 " < " num3
			SiNo
				escribir num1 " < " num2 " < " num3
			Fin Si
		Fin Si
	Fin Si
FinProceso
