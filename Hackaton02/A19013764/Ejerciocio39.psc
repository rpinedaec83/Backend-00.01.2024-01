Proceso Ejericio39
	Definir n Como Entero
    Definir piAproximado, termino Como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación de pi: "
    Leer n
	
    piAproximado <- 0
	
    Para i Desde 0 Hasta n - 1 Hacer
       
        termino <- 4 / (2 * i + 1)
		
        
        Si i Mod 2 = 0 Entonces
            piAproximado <- piAproximado + termino
        Sino
            piAproximado <- piAproximado - termino
        FinSi
    FinPara
	
    Escribir "La aproximación de pi con ", n, " términos es: ", piAproximado
FinProceso
