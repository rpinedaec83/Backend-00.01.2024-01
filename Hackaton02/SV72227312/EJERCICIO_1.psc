Proceso EJERCICIO_1
	
	Definir respuesta Como Caracter
	Definir numero1 Como Real
	
	Repetir
		Repetir
			Escribir "Escriba un numero"
			Leer  numero1
			Si Trunc(numero1) <> numero1 Entonces
				Escribir "Ingrese un número entero, inténtelo de nuevo."
			Sino	
				si numero1 > 99  y numero1 <= 999 Entonces
					Escribir "el Numero tiene 3 digitos"
				SiNo
					Si numero1 < -99  y numero1 >= -999 Entonces
						Escribir "el numero tiene 3 digitos y es negativo"
					SiNo
						Escribir "el numero no tiene 3 digitos."
					FinSi
				FinSi
			FinSi
		Hasta Que Trunc(numero1) = numero1
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
