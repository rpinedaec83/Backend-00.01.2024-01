Proceso  EJERCICIO_27
	Definir numero1, suma1, contador Como Real
	Definir respuesta Como Caracter
	
    Repetir
		// Inicializamos variables
		suma1 <- 0
		contador <- 0
		
        Repetir // Lógica solicitada
			Escribir "Ingrese un número positivo (ingrese un número negativo para finalizar):"
			Leer numero1
			// Validar que el número sea positivo
			Si numero1 >= 0 Entonces
				suma1 <- suma1 + numero1
				contador <- contador + 1
			Sino
				Escribir "Ingresaste un número negativo. Finalizando el programa."
			FinSi
		Hasta Que numero1 < 0
		
		// Calcular de media, caso contrario avisar al usuario.
		Si contador > 0 Entonces
			Escribir "La media de los números ingresados es: ", suma1 / contador
		Sino
			Escribir "No se ingresaron números positivos."
		FinSi
		
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
