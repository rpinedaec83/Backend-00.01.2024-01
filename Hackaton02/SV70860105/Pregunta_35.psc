Proceso Pregunta_35
	definir numero Como Real
	mayor = 0
	menor = 999
	Para i = 1 Hasta 20 Con Paso 1 Hacer
		escribir "Ingrese numero " i
		leer numero
		
		si numero > mayor Entonces
			mayor = numero
		FinSi
		si numero < menor Entonces
			menor = numero
		FinSi
	Fin Para
	escribir "El numero mayor es : " mayor
	escribir "El numero menor es : " menor
FinProceso
