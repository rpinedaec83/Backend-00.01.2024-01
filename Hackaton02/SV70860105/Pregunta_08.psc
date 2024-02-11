Proceso Pregunta_08
	definir nota1, nota2, nota3 Como Real
	definir promedio Como Real
	escribir "Ingrese las notas del estudiante : "
	leer nota1
	leer nota2
	leer nota3
	promedio = (nota1 + nota2 + nota3)/3
	si promedio >= 10.5 Entonces
		Escribir "Alumno aprobo con un promedio de : " promedio
	SiNo
		Escribir  "Alumno reprobo con un promedio de : " promedio
	FinSi
	
FinProceso
