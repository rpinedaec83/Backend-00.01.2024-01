Proceso EJERCICIO_13
	Definir respuesta, letra Como Caracter
	Repetir
		Escribir "Ingrese una letra:"
		Leer letra
		// Convertir la letra a minúscula para simplificar las comparaciones
		letra <- Minusculas(letra)	
		// Verificar si la letra es una vocal
		Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
			Escribir "La letra ingresada es una vocal."
		Sino
			Escribir "La letra ingresada no es una vocal."
		FinSi
		//Validación de respuesta ingresada
		Repetir
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso