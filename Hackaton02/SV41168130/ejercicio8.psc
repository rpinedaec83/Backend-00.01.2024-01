//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

//Obtiene el Promedio
SubProceso prom <- Promedio ( arreglo, cantidad )
	suma <- 0
	Para i<-1 Hasta cantidad Hacer
		suma <- suma + arreglo[i]
	FinPara
	prom <- suma/cantidad
FinSubProceso

Proceso ejercicio_8
	Definir cant Como Entero
	cant<-3
	Dimension lista[cant]
	
	Para i<-1 Hasta cant Hacer
		Escribir "Ingrese la nota " i " del estudiante :"
		Leer lista[i]
	FinPara
	
	Escribir "El promedio del estudiantes es: ",Promedio(lista,cant)
	Si Promedio(lista,cant) > 10 Entonces
		Escribir "El estudiante aprobó"
	SiNo
		Escribir "El estudiante no aprobó"
	FinSi
	
FinProceso