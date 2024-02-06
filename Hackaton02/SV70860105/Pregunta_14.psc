Proceso Pregunta_14
	definir numero Como Entero
	divisores = 0
	escribir "Ingrese un numero del 1 al 10 : "
	leer numero
	
	para i = 2 Hasta numero
		Si numero % i = 0 Entonces
			divisores = divisores + 1
		FinSi
	FinPara

	
	si divisores >= 2 Entonces
		escribir numero " no es primo"
	SiNo
		escribir numero " es primo"
	FinSi

	
FinProceso
