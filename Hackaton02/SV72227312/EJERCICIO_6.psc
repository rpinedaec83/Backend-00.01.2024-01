Proceso EJERCICIO_6
	Definir respuesta Como Caracter
	Definir horas, pagofinal Como Real
	Repetir
		Repetir // Validación de cantidad no negativa
			Escribir "Ingrese la cantidad de horas trabajadas: "
			Leer horas
			Si horas < 0 O horas > 168 Entonces
                Escribir "Error. La cantidad no puede ser negativa ni superar el máximo de horas semanales (168). Intente nuevamente."
            FinSi
		Hasta Que horas >= 0 Y horas <= 168
		
		Si horas >= 0 y horas <= 40 Entonces
			pagofinal = 20*horas
		SiNo
			pagofinal = 20*40 + 25*(horas - 40)
		FinSi
		
		Escribir "El pago semanal es: ", pagofinal
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
