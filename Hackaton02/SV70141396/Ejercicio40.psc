// Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha.
// La formula que se debe aplicar es:
// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

Proceso ejercicio_40
	Definir n, i Como Entero
    Definir p, termino Como Real
    p = 3
	
    Escribir " Ingrese la cantidad de términos para la aproximación de pi: " 
    Leer n
	
	Para i = 1 Hasta n Hacer
        termino = 4 / ((2 * i) * ((2 * i) + 1) * ((2 * i) + 2)) * ((-1) ^ i)
        p = p + termino
    FinPara
	
    Escribir " La aproximación de pi con ", n, " términos es: ", p
	
FinProceso
