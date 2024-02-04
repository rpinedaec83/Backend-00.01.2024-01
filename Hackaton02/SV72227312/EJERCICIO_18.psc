Proceso  EJERCICIO_18
	Definir cantidad, precio, ganancia Como Real
	Definir respuesta Como Caracter
	
    Repetir
		Repetir // Validación de número entero mayor igual a cero
			Escribir "Ingrese la cantidad:"
			Leer cantidad
			Si cantidad < 0 Entonces
				Escribir"Número incorrecto, asegúrese que sea entero mayor igual a 0."
			SiNo
				Si TRUNC(cantidad) <> cantidad Entonces
					Escribir "Número incorrecto, asegúrese que sea un entero."
				FinSi
			FinSi
		Hasta Que TRUNC(cantidad) = cantidad y cantidad >= 0 
		
		Si cantidad <= 9 Entonces
			precio = cantidad*10
		SiNo
			Si cantidad < 100 Entonces
				precio = cantidad*8
			SiNo
				Si cantidad < 500 Entonces
					precio = cantidad*7
				SiNo
					precio = cantidad*6
				FinSi
			FinSi
		FinSi
		
		ganancia = 0.0825 * precio
		
		Escribir "El precio para el cliente es de: ", precio, " soles"
		Escribir "La ganancia para el vendedor es de: ", ganancia, " soles"
		
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
