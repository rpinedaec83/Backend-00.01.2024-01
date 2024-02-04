Proceso EJERCICIO_8 // NOTA: Se considerará como aprobado una nota superior a 10.5
	Definir respuesta Como Caracter
	Definir nota1, nota2, nota3, promedio Como Real
	
	Repetir
		Repetir // Validación de notas ingresadas
			Escribir "Ingrese la primera nota: "
			Leer nota1
			Escribir "Ingrese la segunda nota: "
			Leer nota2
			Escribir "Ingrese la tercera nota: "
			Leer nota3
			Si nota1 < 0 O nota2 < 0 O nota3 < 0 O nota1 > 20 O nota2 > 20 O nota3 > 0 Entonces
                Escribir "Intentelo nuevamente, no ingresar notas negativas ni que superen 20."
            FinSi
		Hasta Que nota1 >= 0 Y nota2 >= 0 Y nota3 >= 0 Y nota1 <= 20 Y nota2 <= 20 Y nota3 <= 20
		promedio = (nota1 + nota2 + nota3)/3
		Escribir "El promedio es: ", promedio
		
		Si promedio >= 10.5 Entonces
			Escribir "Aprobó el curso."
		SiNo
			Escribir "Desaprobó el curso."
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
