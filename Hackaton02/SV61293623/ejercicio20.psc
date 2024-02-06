Proceso CalcularNumeros
    Definir numerosPares, numeroMayor, tercero, segundo, primero, cuarto Como Entero
	
    Para i = 0 Hasta 3 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i + 1, ":"
        Leer numero
		
        Si numero > 0 Entonces
            Si numero MOD 2 = 0 Entonces
                numerosPares = numerosPares + 1
            Fin Si
			
            Si i = 0 O numero > numeroMayor Entonces
                numeroMayor = numero
            Fin Si
        Sino
            Escribir "Por favor, ingrese un número positivo."
            i = i - 1
        Fin Si
		
        Si i = 1 Entonces
            segundo = numero
        Fin Si
		
        Si i = 0 Entonces
            primero = numero
        Fin Si
		
        Si i = 2 Entonces
            tercero = numero
        Fin Si
		
        Si i = 3 Entonces
            cuarto = numero
        Fin Si
    Fin Para
	
    Si numerosPares > 0 Entonces
        Escribir "De los 4 números ingresados, ", numerosPares, " son pares."
    Fin Si
	
    Escribir "El número mayor ingresado es: ", numeroMayor
	
    Si tercero MOD 2 = 0 Entonces
        Escribir "El tercer numero es: ", tercero, " -- ", segundo * segundo
    Fin Si
	
    Si primero < cuarto Entonces
        media = (primero + segundo + tercero + cuarto) / 4
        Escribir "La media es: ", media
    Fin Si
	
    Si segundo > tercero Entonces
        Si segundo >= 50 Y segundo <= 700 Entonces
            total = primero + segundo + tercero + cuarto
            Escribir "El total es: ", total
        Fin Si
    Fin Si
Fin Proceso