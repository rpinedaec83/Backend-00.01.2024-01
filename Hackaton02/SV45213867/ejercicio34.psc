Proceso ejercicio_34
	
		// Variables
		Definir numero, multiplicador Como Entero
		
		// Ciclo externo para recorrer los números del 1 al 9
		Para numero <- 1 Hasta 9 Hacer
			Escribir "Tabla de multiplicar del ", numero, ":"
			
			// Ciclo interno para generar la tabla de multiplicar
			Para multiplicador <- 1 Hasta 10 Hacer
				Escribir numero, " x ", multiplicador, " = ", numero * multiplicador
			FinPara
			
			// Separador entre tablas
			Escribir "------------------------"
		FinPara
FinProceso
