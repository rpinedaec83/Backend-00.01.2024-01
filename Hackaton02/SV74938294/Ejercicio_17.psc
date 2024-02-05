Proceso Ejercicio_17
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa, se le agregara 1 segundo a la hora que ingrese"
	Escribir "Ingrese la hora, los minutos y segundos:"
	Escribir "HORA: "
	Leer h
	Mientras h<-1 o h>23 Hacer
		Escribir "La hora tiene un rango de 0-24, ingrese una hora dentro de ese rango:"
		Leer h
	FinMientras
	Escribir "MINUTOS:"
	Leer m
	Mientras m<0 o m>59 Hacer
		Escribir "Las horas solo tiene un rango de 0-60, ingrese los minutos dentro de ese rango:"
		Leer m
	FinMientras
	Escribir "SEGUNDOS:"
	Leer s
	Mientras s<0 o s>59 Hacer
		Escribir "Las horas solo tiene un rango de 0-60, ingrese los minutos dentro de ese rango:"
		Leer s
	FinMientras
	s<-s+1
	si s=60 Entonces
		s<-00
		m<-m+1
		si m=60 Entonces
			m<-00
			h<-h+1
			si h=24 Entonces
				h<-00
			FinSi
		FinSi
	FinSi
	Escribir "La hora aumentado un segundo seria ==> ",h," : ",m," : ",s
FinProceso
