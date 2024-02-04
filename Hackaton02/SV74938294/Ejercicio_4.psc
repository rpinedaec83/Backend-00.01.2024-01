Proceso Ejercicio_4
	a<-0
	b<-0
	c<-0
	r1<-0
	r2<-0
	pos1<-0
	pos2<-0
	pos3<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se ordenaran 3 numeros de menor a mayor"
	Escribir "Ingrese 3 numeros:"
	leer a,b,c
	si a<b Entonces
		pos1<-b
		pos2<-a
	SiNo
		pos1<-a
		pos2<-b
	FinSi
	si pos1<c Entonces
		r1<-pos1
		r2<-pos2
		pos1<-c
		pos2<-r1
		pos3<-r2
	SiNo
		si pos2<c Entonces
			r2<-pos2
			pos2<-c
			pos3<-r2
		SiNo
			pos3<-c
		FinSi
	FinSi
	Escribir "Los 3 numeros ordenados de menor a mayor son:"
	Escribir pos3," ",pos2," ", pos1
FinProceso
