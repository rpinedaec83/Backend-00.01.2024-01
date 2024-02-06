Proceso Ejercicio21
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE FACTORIALES --------------------"
	
	Escribir "Ingrese un numero para calcular su factorial: " 
    Leer num 
	
    Si num < 0 Entonces
        Escribir "Error: El factorial no está definido para números negativos." 
    FinSi
	
    fac = 1
	
    Para i<-1 Hasta num Con Paso 1 Hacer
		fac = fac * i
	Fin Para
	
    Escribir "El factorial de " num " es: " fac
	
FinProceso
