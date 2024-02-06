Proceso Ejercicio_9
	total<-0
	p<-0
	aumento<-0
	Escribir "-----| BIENVENDIO |------"
	Escribir "En este programa se sabra su sueldo en base a lo ganado"
	Escribir "Cuanto fue el ingreso generado:"
	Leer p
	si p>2000 Entonces
		aumento<-5
	SiNo
		aumento<-10
	FinSi
	total<-p+(p*aumento)/100
	Escribir "Con ",p," de ingreso, le corresponde un aumento de ",aumento,"%; generando un total de: ",total
	
	
FinProceso
