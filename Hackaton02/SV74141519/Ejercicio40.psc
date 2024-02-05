Proceso Ejercicio40
	
	Definir n Como Real
    Definir piAprox Como Real
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE SUMA HASTA EL 100 --------------------"
	
	Escribir "Ingrese la cantidad de términos para la aproximación de pi: " 
    Leer n 
	
    piAprox = 3
	
    Para i <- 1 Hasta n Hacer
        piAprox = piAprox + ((-1)^(i+1)) * 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
    FinPara
	
    Escribir "La aproximacion con " n " terminos es: " piAprox 

FinProceso
