Proceso Ejercicio38
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE NUMERO PERFECTO --------------------"
	
	Escribir "Ingrese un numero: " 
    Leer num 

    Para i <- 1 Hasta num / 2 Hacer
	Si num MOD i = 0 Entonces
		sumaDiv = sumaDiv + i
	FinSi
	FinPara

    Si sumaDiv = num Entonces
        Escribir "El numero " num " es perfecto." 
    Sino
        Escribir "El numero " num " no es perfecto." 
    FinSi
	
FinProceso
