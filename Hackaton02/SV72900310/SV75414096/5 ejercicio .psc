Algoritmo sin_titulo
	Zapatos = 0
	precio = 80
	impo=0
	total =0
	
	Escribir "Escriba  cantidad de zapatos";
	Leer  Zapatos
	
	si Zapatos >10 y Zapatos <20  Entonces
		impo= Zapatos*precio
		total= impo - (impo * 0.1)
		Escribir "Usted tiene un descuento del 10% en su compra El total apagar es "  total
		
	FinSi
	si Zapatos > 20 y Zapatos<30 Entonces
		impo= Zapatos*precio
		total= impo - (impo * 0.2)
		Escribir "Usted tiene un descuento del 20% en su compra El total apagar es "  total
	FinSi
	si Zapatos > 30  Entonces
		impo= Zapatos*precio
		total= impo - (impo * 0.4)
		Escribir "Usted tiene un descuento del 40% en su compra El total apagar es "  total
	FinSi
	
FinAlgoritmo
