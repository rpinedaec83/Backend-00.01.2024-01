Proceso Ejercicio37
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE ALGORITMO DE EUCLIDES --------------------"
	
	Escribir "Ingrese el primer numero: " 
    Leer num1 
	
    Escribir "Ingrese el segundo numero: " 
    Leer num2 
	

    Mientras num2 <> 0 Hacer
        resto = num1 MOD num2
        num1 = num2
        num2 = resto
    FinMientras
	
    Escribir "El M.C.D de los dos numeros es: " num1
	
FinProceso
