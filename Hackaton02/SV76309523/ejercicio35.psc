Proceso ejercicio35
	Definir numero, mayor, menor Como Real
    Escribir "Ingrese el primer número:"
    Leer numero
    mayor = numero
    menor = numero
    Para i = 2 Hasta 20 Hacer
        Escribir "Ingrese el número número ", i, ": "
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir "El número mayor es:", mayor
    Escribir "El número menor es:", menor
	
FinProceso
