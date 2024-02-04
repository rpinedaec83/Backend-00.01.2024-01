Proceso EJERCICIO_9
	Definir respuesta Como Caracter
	Definir sueldo, sueldo_final Como Real
	
	Repetir
		Repetir // Validación de sueldo
			Escribir "¿Cuánto gana el trabajador?: "
			Leer sueldo
			Si sueldo < 0 Entonces
                Escribir "Intentelo nuevamente, no ingresar sueldo negativo."
            FinSi
		Hasta Que sueldo >= 0
		
		Si sueldo > 2000 Entonces
			sueldo_final = 1.05 * sueldo
			Escribir "Le corresponde un aumento del 5 % y su nuevo sueldo será: ", sueldo_final
		SiNo
			sueldo_final = 1.1 * sueldo
			Escribir "Le corresponde un aumento del 10 % y su nuevo sueldo será: ", sueldo_final
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