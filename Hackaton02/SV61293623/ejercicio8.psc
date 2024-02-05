Proceso VerificarAprobacion
    Definir nota1, nota2, nota3, promedio Como Real
	
    Escribir "La nota 1 es: "
    Leer nota1
	
    Escribir "La nota 2 es: "
    Leer nota2
	
    Escribir "La nota 3 es: "
    Leer nota3
	
    promedio = (nota1 + nota2 + nota3) / 3
	
    Si promedio >= 12 Entonces
        Escribir "Alumno aprobado"
    Sino
        Escribir "Alumno reprobado"
    FinSi
	
FinProceso