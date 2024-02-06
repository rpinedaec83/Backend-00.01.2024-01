Proceso tarea39
    Definir n Como Entero
    Definir piAproximado Como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi: "
    Leer n
	
    piAproximado <- 0
    Para i <- 0 Hasta n - 1 Con Paso 1 Hacer
        piAproximado <- piAproximado + ((-1)^i) * (4 / (2 * i + 1))
    FinPara
    Escribir "La aproximación de Pi con ", n, " términos es: ", piAproximado
	
FinProceso
