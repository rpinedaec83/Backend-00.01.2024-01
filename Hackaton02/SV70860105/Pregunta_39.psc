Proceso Pregunta_39

	definir suma Como real
	n = 99999
	suma = 0
	
	Para i = 0 Hasta n Con Paso 1 Hacer
		si i % 2 = 0 Entonces
			suma = suma + 4/(i*2 + 1)
		SiNo
			suma = suma - 4/(i*2 + 1)
		FinSi
	Fin Para
	escribir "EL valor aproximado de pi es : " suma
FinProceso
