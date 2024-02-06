Proceso Ejercicio_8
	a<-0
	b<-0
	c<-0
	prom<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa sabra la aprobacion de un alumno en base a sus 3 notas"
	Escribir "Ingrese notas:"
	Leer a,b,c
	prom<-(a+b+c)/3
	si prom<10.455 Entonces
		Escribir "Con un promedio de ",prom," , el alumno ha DESAPROBADO"
	SiNo
		Escribir "Con un promedio de ",prom," , el alumno ha APROBADO"
	FinSi
FinProceso
