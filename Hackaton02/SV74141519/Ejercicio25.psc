Proceso Ejercicio25
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE CALCULO DE FACTORIAL --------------------"
	
	Escribir "Ingrese un número para calcular su factorial: " 
    Leer num 
	
    Si num < 0 Entonces
        Escribir "Error: El factorial no está definido para números negativos." 
    FinSi
	
    factorial = 1
	
    i = 1
    Mientras i <= num Hacer
        factorial = factorial * i
        i = i + 1
    FinMientras
	

    Escribir "El factorial de " num " es: " factorial 

	
FinProceso
