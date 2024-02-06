Proceso Pregunta_31
	definir numero como entero
	n = 10
	sumapares = 0
	sumaimpares = 0
	
	Para i = 1 Hasta n Con Paso 1 Hacer
		escribir "Ingrese numero " i " : "
		leer numero
		
		si numero % 2 == 0 Entonces
			sumapares = sumapares + numero
		SiNo
			sumaimpares = sumaimpares + numero
		FinSi
	Fin Para
	
	escribir "La suma de los numeros pares es : " sumapares
	escribir "La suma de los numeros impares es : " sumaimpares
FinProceso
