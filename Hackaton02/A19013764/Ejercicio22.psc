Proceso Ejercicio22
	Definir n, suma Como Entero
	
    Escribir "Ingrese un número entero positivo n: "
    Leer n
	
    Si n >= 0 Entonces
        suma <- 0
		
        Para i Desde 1 Hasta n Hacer
            suma <- suma + i
        FinPara
		
        Escribir "La suma de los primeros ", n, " números es: ", suma
    Sino
        Escribir "Ingrese un número entero positivo."
    FinSi
FinProceso
