Proceso tarea8
	Definir nota1, nota2, nota3, suma, promedio Como Real
    
    Escribir "Ingrese la nota 1: "
    Leer nota1
    
    Escribir "Ingrese la nota 2: "
    Leer nota2
    
    Escribir "Ingrese la nota 3: "
    Leer nota3
    
    suma = nota1 + nota2 + nota3
    promedio = suma / 3
    Escribir "El promedio es: ", promedio
	Si promedio<=10 Entonces
		Escribir "Desaprobado"
	SiNo
		Escribir "Aprobado"
	Fin Si
FinProceso
