Proceso  EJERCICIO_21
	Definir numero1, factorial Como Real
	Definir respuesta Como Caracter
	
    Repetir
		Repetir // Validación de número entero positivo
			Escribir "Ingrese un número para calcular su factorial:"
			Leer numero1
			Si numero1 < 0 O TRUNC(numero1) <> numero1 Entonces
				Escribir "El factorial no está definido para números negativos ni decimales. Intentelo de nuevo"
			FinSi
		Hasta Que TRUNC(numero1) = numero1 y numero1 >= 0 
		
		factorial <- 1
		
		Si numero1 = 0 Entonces
			factorial <- 1
		SiNo
			Para i <- 1 Hasta numero1 Hacer // Calcular el factorial
				factorial <- factorial * i
			FinPara
		FinSi
        
		Escribir "El factorial de ", numero1, " es: ", factorial
		
		Repetir	// Validación de respuesta ingresada
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso
