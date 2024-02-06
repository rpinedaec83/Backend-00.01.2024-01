Proceso Ejercicio35
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE NUMERO MAYOR Y MENOR --------------------"
	
	may = -Infinito
    men = Infinito
	
    Para i <- 1 Hasta 20 Hacer
        Escribir "Ingrese el numero " i ": " 
        Leer num
		
        Si num > may Entonces
            may = num
        FinSi
		
        Si num < men Entonces
            men = num
        FinSi
    FinPara
	
    Escribir "El número mayor es: " may 
    Escribir "El número menor es: ", men
	
FinProceso
