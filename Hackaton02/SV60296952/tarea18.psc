Proceso tarea18
	Escribir  "Cuantos CDs desea comprar: "
	Leer cantidad
	
	pt = 0 //precio total
	pCliente = 0 //precio para el cliente
	ct = 0 //costo total
	gv = 0 //ganancia vendedor
	
	si cantidad <= 9 Entonces
		p = 10
	sino
		si cantidad >= 10 y cantidad <= 99 Entonces
			p = 8
		SiNo
			si cantidad >= 100 y cantidad <= 499 Entonces
				p = 7
			SiNo
				p = 6
			FinSi
		FinSi
	FinSi
	pt <- cantidad * p
    gv <- pt * 0.0825
	Escribir "El precio total para el cliente es: $", pt
    Escribir "La ganancia para el vendedor es: $", gv
	
FinProceso
