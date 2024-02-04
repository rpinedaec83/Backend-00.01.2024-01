Proceso EJERCICIO_38
	Definir numero1, suma, divisor Como Real
	Definir respuesta Como Caracter
	
	Repetir
		Repetir
			Escribir "Ingrese un número entero positivo: "
			Leer numero1
			Si numero1 <= 0 O Trunc(numero1) <> numero1
				Escribir "Debe ser un entero positivo. Inténtelo de nuevo. "
			FinSi
		Hasta Que numero1 > 0 Y Trunc(numero1) = numero1
		
		suma <- 0
		
		Para divisor <- 1 Hasta (numero1 / 2) Hacer
            Si numero1 MOD divisor = 0 Entonces
                suma <- suma + divisor
            FinSi
        FinPara
		
		Si suma = numero1 Entonces
			Escribir numero1, " es un número perfecto."
		SiNo
			Escribir numero1, " no es un número perfecto."
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
