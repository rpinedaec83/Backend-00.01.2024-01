Proceso Ejercicio14
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE NUMEROS PRIMOS --------------------"
	
	Definir num, i, contador como entero
	
	Escribir"Ingrese un número entre 1 y 10: "
    Leer num
	
	Si num < 1 o num > 10 Entonces
        Escribir("Ingrese un numero entre 1 y 10.")
		
		Sino
			contador = 0
			
			Para i <- 1 Hasta num Hacer
				
				Si num MOD i = 0 Entonces
					contador <- contador + 1
				FinSi
				
			Fin Para
			
			Si contador = 2 Entonces
				
				Escribir "El número ingresado es un número primo." 
				
			SiNo
				
				Escribir "El número ingresado no es un número primo." 
				
			FinSi
    FinSi
	
FinProceso
