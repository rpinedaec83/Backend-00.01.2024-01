Proceso Ejercicio39
    Definir piAproximado, termino Como Real
    Definir i, n como Entero
	
    piAproximado = 0
	
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi:"
    Leer n
	
    Para i = 0 Hasta n Hacer
        termino = 4 / (1 + 2 * i)
		
        Si i % 2 = 0 Entonces
            piAproximado = piAproximado + termino
        Sino
            piAproximado = piAproximado - termino
        FinSi
    FinPara
	
    Escribir "La aproximación de Pi con", n, "términos es:", piAproximado
FinProceso
