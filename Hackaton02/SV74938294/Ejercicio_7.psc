Proceso Ejercicio_7
	desc<-0
	class<-0
	mem<-0
	Escribir "-----| BIENVENIDO |-----"
	Escribir "En este programa se hallara el descuento dependiendo la membresia"
	Escribir "1. Tipo A con 10% de descuento"
	Escribir "2. Tipo B con 15% de descuento"
	Escribir "3. Tipo C con 20% de descuento"
	Escribir "Que tipo de membresia tiene:"
	Leer mem
	Mientras mem<>1 y mem<>2 y mem<>3 Hacer
		Escribir "Las opciones permitibles son 1-2-3, ingrese el numero a la clase que le corresponde:"
		Leer mem
	FinMientras
	
	Segun mem Hacer
		1:
			desc<-10
			Escribir "La clase seleccionada fue -A- y le corresponde un descuento de ",desc,"%"
		2:
			desc<-15
			Escribir "La clase seleccionada fue -B- y le corresponde un descuento de ",desc,"%"
		3:
			desc<-20
			Escribir "La clase seleccionada fue -C- y le corresponde un descuento de ",desc,"%"
	FinSegun
FinProceso
