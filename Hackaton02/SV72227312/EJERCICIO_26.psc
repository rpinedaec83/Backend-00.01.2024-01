Proceso  EJERCICIO_26
	Definir dividendo, divisor, cociente, resto Como Real
	Definir respuesta Como Caracter
	
    Repetir
		Repetir // Validación de divisor
			Escribir "Ingrese el dividendo: "
			Leer dividendo
			Si dividendo < 0 O TRUNC(dividendo) <> dividendo Entonces
				Escribir "El dividendo debe ser un entero mayor igual a 0. Intentelo de nuevo."
			SiNo
				Repetir
					Escribir "Ingrese el divisor:"
					Leer divisor
					Si divisor <= 0 O TRUNC(divisor) <> divisor Entonces
						Escribir "El divisor debe ser un entero positivo. Intentelo de nuevo."
					FinSi
				Hasta Que divisor > 0 Y TRUNC(divisor) = divisor
			FinSi
		Hasta Que TRUNC(dividendo) = dividendo y dividendo >= 0 
		
		cociente <- 0
        resto <- dividendo
		
        // Calcular cociente y resto mediante restas sucesivas
        Mientras resto >= divisor Hacer
            resto <- resto - divisor
            cociente <- cociente + 1
        FinMientras
		
        Escribir "El cociente es:", cociente
        Escribir "El resto es:", resto
		
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
