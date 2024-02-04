Proceso Ejercicio_6
	s<-0
	h<-0
	extra<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa sabra su sueldo en base a su cantidad de horas trabajadas"
	Escribir "Cuantas horas trabajo?:"
	Leer h
	si h<=40 Entonces
		s<-h*20
	SiNo
		extra<-h-40
		s<-800+(extra*25)
	FinSi
	Escribir "Su sueldo a recibir en base a ",H," horas es:"
	Escribir s, " dolares"
	
FinProceso
