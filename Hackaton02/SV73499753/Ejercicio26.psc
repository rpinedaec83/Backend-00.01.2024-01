// Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso Ejercicio26
	dividendo = 0
	divisor = 0
	cociente = 0
	resto  = 0
	
    Escribir "Ingrese el dividendo: "
    Leer dividendo
	
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    Si divisor = 0 Entonces
        Escribir "No es posible dividir por cero."
    Sino
        cociente = 0
        resto = dividendo
		
        Mientras resto >= divisor
            resto = resto - divisor
            cociente = cociente + 1
        FinMientras
		
        Escribir "El cociente es: ", cociente
        Escribir "El resto es: ", resto
    FinSi
	
FinProceso
