Proceso EJERCICIO_10
	Definir respuesta Como Caracter
	Definir numero1 Como Real
	
	Repetir
		Repetir
			Escribir "Ingrese un número entero:"
			Leer numero1
			Si TRUNC(numero1) <> numero Entonces
				Escribir "Número incorrecto, asegúrese que sea un entero."
			FinSi
		Hasta Que TRUNC(numero1) = numero1
		
		Si numero1 MOD 2 = 0 Entonces
			Escribir "El número ingresado es par."
		Sino
			Escribir "El número ingresado es impar."
		FinSi
		// Validación de respuesta ingresada
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
