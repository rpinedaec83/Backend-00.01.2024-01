Proceso Ejercicio_18
	cant<-0
	precio<-0
	total<-0
	ganancia<-0
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa se hallara el precio total de un cliente al comprar cierta cantidad de discos y la ganancia que le correspondera al vendedor"
	Escribir "Recordar que:"
	Escribir "-Por la compra de 1 a 9 unidades cada disco costara 10 dolares"
	Escribir "-Por la compra de 10 a 99 unidades cada disco costara 8 dolares"
	Escribir "-Por la compra de 100 a 499 unidades cada disco costara 7 dolares"
	Escribir "-Por la compra de mas de 500 unidades cada disco costara 6 dolares"
	Escribir "Ingrese la cantidad de discos que va a comprar:"
	Leer cant
	Mientras cant<1 Hacer
		Escribir "No puede comprar esa cantidad, pida una cantidad mayor a 0:"
		Leer cant
	FinMientras
	si cant<10 Entonces
		precio<-10
	SiNo
		si cant<100 Entonces
			precio<-8
		SiNo
			si cant<500 Entonces
				precio<-7
			SiNo
				precio<-6
			FinSi
		FinSi
	FinSi
	total<-cant*precio
	ganancia<-(total*8.25)/100
	Escribir "El precio total de ",cant," discos con un precio de ",precio," dolares es: ",total," dolares"
	Escribir "Y al vendedor le correspondera: ",ganancia," dolares"
	
FinProceso
