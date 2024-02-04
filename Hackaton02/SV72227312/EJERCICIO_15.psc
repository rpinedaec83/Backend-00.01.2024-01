Proceso  EJERCICIO_15
	Definir centimetros, pulgadas, libras, kilogramos Como Real
	Definir respuesta Como Caracter
    Repetir
		Repetir
			Escribir "Ingrese la longitud en centímetros:"
			Leer centimetros
			Si centimetros < 0 Entonces
				Escribir "Error. La longitud no puede ser negativa. Intente nuevamente."
			SiNo
				Repetir
					Escribir "Ingrese el peso en libras:"
					Leer libras
					Si libras < 0 Entonces
						Escribir "Error. El peso no puede ser negativo. Intente nuevamente."
					FinSi
				Hasta Que libras >= 0
			FinSi
		Hasta Que centimetros >= 0
		
		pulgadas <- centimetros / 2.54 // Convertir centímetros a pulgadas (1 pulgada = 2.54 cm)
		kilogramos <- libras * 0.453592 // Convertir libras a kilogramos (1 libra = 0.453592 kg)
		
		// Mostrar los resultados
		Escribir "Longitud en pulgadas:", pulgadas
		Escribir "Peso en kilogramos:", kilogramos
		
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