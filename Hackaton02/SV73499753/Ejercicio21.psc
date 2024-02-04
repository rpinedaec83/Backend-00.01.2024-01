//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	num = 0
	factorial=0 
	i=0 
	
    Escribir "Ingrese un numero  "
    Leer num
	
    Si num < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        factorial = 1
		
        Para i = 1 Hasta num
            factorial = factorial * i
        FinPara
		
        Escribir "El factorial de ", num, " es: ", factorial
    FinSi
FinProceso
