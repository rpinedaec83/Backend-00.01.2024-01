// Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
// Pi =  3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
Proceso Ejercicio40
	 n = 0
  	 termino   = 0
	
    Escribir "Ingrese la cantidad de términos para la aproximación de ?: "
    Leer n
	pii = 3
	
    // utilizando la serie de Nilakantha
    Para i = 1 Hasta n
        termino = 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
		
        // Alternar entre sumar y restar términos
        Si i % 2 = 1 Entonces
            pii = pii + termino
        Sino
            pii = pii - termino
        FinSi
    FinPara
    Escribir "La aproximación con ", n, " términos es: ", pi	
FinProceso
