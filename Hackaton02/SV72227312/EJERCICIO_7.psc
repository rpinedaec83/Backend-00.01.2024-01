Proceso EJERCICIO_7
	Definir respuesta, membresia Como Caracter
	
	Repetir
		Repetir // Validación de membresia ingresada
			Escribir "Ingrese el tipo de membresia: "
			Leer membresia
			Si membresia <> "A" Y membresia <> "B" Y membresia <> "C" Entonces
                Escribir "Respuesta no válida. Solo se admiten A, B o C"
            FinSi
		Hasta Que membresia = "A" O membresia = "B" O membresia = "C"
 		
		Segun membresia Hacer
			"A":
				Escribir "Se le aplicará un descuento del 10 %"
			"B":
				Escribir "Se le aplicará un descuento del 15 %"
			De Otro Modo:
				Escribir "Se le aplicará un descuento del 20 %"
		Fin Segun
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

