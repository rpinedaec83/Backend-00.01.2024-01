Proceso Ejercicio08
	
	Definir prom como Real
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE NOTAS --------------------"
	
	Escribir "Ingrese la nota 1: " 
    Leer nota1 
	
    Escribir "Ingrese la nota 2: " 
    Leer nota2 
	
    Escribir "Ingrese la nota 3: " 
    Leer nota3 
	
    prom = (nota1 + nota2 + nota3) / 3
	
    Escribir "El promedio de las tres notas es: ", prom 
	
    Si prom >= 10.5 Entonces
        Escribir("El estudiante SI aprobo.")
    Sino
        Escribir("El estudiante NO aprobo.")
    FinSi
	
FinProceso
