Proceso CalcularCocienteResto
    Definir dividendo, divisor, cociente, resto Como Entero
	
    Escribir "Ingrese el dividendo:"
    Leer dividendo
	
    Escribir "Ingrese el divisor:"
    Leer divisor
	
    Si divisor = 0 Entonces
        Escribir "No es posible dividir por cero."
    Sino
        cociente = 0
        resto = dividendo
		
        Mientras resto >= divisor Hacer
            resto = resto - divisor
            cociente = cociente + 1
        Fin Mientras
		
        Escribir "Cociente: ", cociente, ", Resto: ", resto
    Fin Si
Fin Proceso