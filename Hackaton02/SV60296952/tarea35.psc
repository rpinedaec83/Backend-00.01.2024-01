Proceso tarea35
	Definir numero, mayor, menor Como Real
    Definir x Como Entero
	
    Escribir "Ingrese el número 1: "
    Leer numero
    mayor <- numero
    menor <- numero
	
    Para x <- 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", x, ": "
        Leer numero
		
        Si numero > mayor Entonces
            mayor <- numero
        FinSi
		
        Si numero < menor Entonces
            menor <- numero
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
	
FinProceso
