Algoritmo sin_titulo
	Nombre = ""
	Nota1 = 0
	Nota2 = 0
	Nota3 = 0
	Promedio = 0
	
	Escribir "Ingrese Nombre del estudiante"
	leer Nombre
	Escribir "Ingresar la primera nota"
	leer N1
	Escribir "Ingresar la segunda nota"
	leer N2
	Escribir "Ingresar la tercera nota"
	leer N3
	
	Promedio =(Nota1+ Nota2 + Nota3)/3
	
	si  Promedio <=12  Entonces
		
		Escribir "El estudiante " Nombre " esta desaprobado"
	SiNo
		si Promedio >= 13   Entonces
			
			Escribir "El estudiante " Nombre " esta aprobado"
		FinSi
		
	FinSi
	
FinAlgoritmo
