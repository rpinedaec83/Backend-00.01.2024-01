Proceso Ejercicio_5
	cant<-0
	total<-0
	desc<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se hallara el precio total dependiendo de la cantidad de zapatos que pida"
	Escribir "Recordar que:"
	Escribir "-Si se compran mas de 10 zapatos habra un descuento del 10% sobre el total de la compra."
	Escribir "-Si se compran mas de 20 zapatos pero menor a 30 habra un descuento del 20% sobre el total de la compra."
	Escribir "-Si se compran mas de 30 zapatos habra un descuento del 40% sobre el total de la compra."
	Escribir "Ingrese la cantidad de zapatos que va a comprar:"
	Leer cant
	si cant>10 Entonces
		si cant<21 Entonces
			desc<-10
		SiNo
			si	cant<31 Entonces
				desc<-20
			SiNo
				desc<-40
			FinSi
		FinSi
	SiNo
		desc<-0
	FinSi
	total<-cant*80-(cant*80*desc)/100
	Escribir "Por la cantidad de ",cant," zapatos, tuvo un descuento del ",desc,"% y el total a pagar es de: ",total," dolares."
	
FinProceso
