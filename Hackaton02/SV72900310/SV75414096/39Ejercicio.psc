Algoritmo sin_titulo
	Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
	Proceso Ejercicio39
		
		Definir n Como Entero
		Definir piAproximado Como Real
		
		Escribir "Ingrese el número de términos para la aproximación de pi: "
		Leer n
		
		piAproximado = 0
		
		//utilizando la serie de Gregory-Leibniz
		Para i = 0 Hasta n - 1
			piAproximado = piAproximado + ((-1)^i) * (4 / (2 * i + 1))
		FinPara
		
		Escribir "La aproximación de pi con ", n, " términos es: ", piAproximado

FinAlgoritmo
