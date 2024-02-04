Proceso Ejercicio40
	Definir n Como Entero
    Definir piAproximado Como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación de pi: "
    Leer n
	
    piAproximado <- 3.0
	
    Para i Desde 1 Hasta n Hacer
  
        termino <- 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
		
        
        Si i Mod 2 = 1 Entonces
            piAproximado <- piAproximado + termino
        Sino
            piAproximado <- piAproximado - termino
        FinSi
    FinPara
	
    Escribir "La aproximación de pi con ", n, " términos es: ", piAproximado
FinProceso
