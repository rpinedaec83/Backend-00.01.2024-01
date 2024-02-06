Proceso Ejercicio40
    Definir piAproximado, termino como Real
    Definir i, n como entero
	
    piAproximado = 3
	
    Escribir "Ingrese la cantidad de t�rminos para la aproximaci�n de Pi:"
    Leer n
	
    Para i = 1 Hasta n Hacer
        termino = 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
        
        Si (i % 2 == 1) Entonces
            piAproximado = piAproximado + termino
        Sino
            piAproximado = piAproximado - termino
        FinSi
    FinPara
	
    Escribir "La aproximaci�n de Pi con ", n, " t�rminos es:", piAproximado
FinProceso
