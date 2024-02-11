Proceso Ejercicio36
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE CALCULO FUBONACCI --------------------"
	
	Escribir "Ingrese cantidad: " 
    Leer cant 
	
    fi1 = 0
    fi2 = 1
	
    Escribir "Serie de Fibonacci: " 
    Escribir fi1 
    Escribir fi2 
	
    Para i <- 3 Hasta cant Hacer
		
        sigFib = fi1 + fi2
		
        Escribir sigFib 
        
        fi1 = fi2
        fi2 = sigFib
		
    FinPara
	
	
FinProceso
