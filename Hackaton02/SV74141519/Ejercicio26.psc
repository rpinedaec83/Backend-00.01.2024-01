Proceso Ejercicio26
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE RESTAS DE COCIENTES --------------------"
	
	Escribir "Ingrese el dividendo: " 
    Leer dividendo 
	
    Escribir "Ingrese el divisor: " 
    Leer divisor 
	
    coc = 0
    res = dividendo
	
    Mientras res >= divisor Hacer
        res = res - divisor
        coc = coc + 1
    FinMientras
	
    Escribir "El cociente es: " coc 
    Escribir "El resto es: " res 
	
FinProceso
