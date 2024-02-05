Algoritmo sin_titulo
	Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	
	Proceso Ejercicio40
		
		Definir n Como Entero
		Definir piAproximado Como Real
		
		Escribir "Ingrese el número de términos para la aproximación de pi: "
		Leer n
		
		piAproximado = 3.0
		
		// utilizando la serie de Nilakantha
		Para i = 1 Hasta n
			piAproximado = piAproximado + ((-1)^i) * (4 / ((2 * i) * (2 * i + 1) * (2 * i + 2)))
		FinPara
		
		Escribir "La aproximación de pi con ", n, " términos es: ", piAproximado

FinAlgoritmo
