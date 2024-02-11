Proceso Ejercicio39
	
	Definir n Como Real
    Definir piAprox Como Real
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE SUMA HASTA EL 100 --------------------"
	
	Escribir "Ingrese la cantidad para aproximar pi: " 
    Leer n 
	
    Para i <- 0 Hasta n Hacer
		piAprox = piAprox + ((-1)^i) / (2 * i + 1)
    FinPara
	
    piAprox = 4 * piAprox
	
    Escribir "La aproximacion con " n " terminos es: " piAprox

	
FinProceso
