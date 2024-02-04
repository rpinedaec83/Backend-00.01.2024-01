// 40. Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Nilakantha. La formula que se debe aplicar es:
//    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...


Proceso Ejercicio40
	
	Definir n, decimales Como Entero
    Definir numeropi, termino, factorRedondeo Como Real
	
    Escribir "Ingrese el numero de terminos para la aproximacion de pi:"
    Leer n
	Escribir "Ingrese la cantidad de decimales para la aproximacion de pi:"
    Leer decimales
	
    numeropi = 3
	
    Para i = 1 Hasta n Hacer
        termino = 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
        Si i % 2 <> 0 Entonces
            numeropi = numeropi + termino
        Sino
            numeropi = numeropi - termino
        FinSi
    FinPara
	
    factorRedondeo = 10 ^ decimales
	
    numeropi = Redon(numeropi * factorRedondeo) / factorRedondeo
	
    Escribir "La aproximacion de pi con", n, "terminos y", decimales, "decimales es:", numeropi
	
FinProceso
