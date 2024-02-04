Proceso Ejercicio35
	Definir numero, mayor, menor Como Real
	
    mayor <- 0
    menor <- 0
	
    Para i <- 1 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero
		
        Si i = 1 Entonces
            mayor <- numero
            menor <- numero
        Sino
            Si numero > mayor Entonces
                mayor <- numero
            FinSi
			
            Si numero < menor Entonces
                menor <- numero
            FinSi
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinProceso
