Algoritmo sin_titulo
	Definir dividendo, divisor, cociente, resto Como Entero
	cociente = 0
    resto = 0
    Escribir "Ingrese el dividendo: "
    Leer dividendo
	
    Escribir "Ingrese el divisor: "
    Leer divisor
	
    Mientras dividendo >= divisor
        dividendo = dividendo - divisor
        cociente = cociente + 1
    FinMientras
	
    resto = dividendo
	
    Escribir "El cociente es: ", cociente
    Escribir "El resto es: ", resto
	
FinAlgoritmo
