//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción 
//de descuento para vender al mayor, esta dependerá del número de zapatos que se compren.
//	Si son más de 10, se les dará un 10% de descuento sobre el total de la compra;
//	si el número de zapatos es mayor de 20 pero menor de 30,
//	se le otorga un 20% de descuento; y si son más 30 zapatos se otorgará un 40% de descuento.
//El precio de cada zapato es de $80.

Proceso ejercicio_5
	Definir cantidad Como Entero
	Definir precioZapato  Como Real
	Definir  totalPagar Como Real
	Definir  descuento Como Entero
	precioZapato <- 80
	
	Escribir  "Digite la cantidad de zapatos comprados"
	leer cantidad
	totalPagar <- cantidad*80
	descuento  <- 0
	Si cantidad > 10 y cantidad <= 20 Entonces
		totalPagar <- cantidad*80 - (cantidad * 80 *0.10)
		descuento  <- 10
	SiNo
		si cantidad >20 y cantidad <=30 Entonces
			totalPagar<- cantidad*80 - (cantidad * 80 *0.20)
			descuento  <- 20
		SiNo
			si cantidad>30 Entonces
				totalPagar<- cantidad*80 - (cantidad * 80 *0.40)
				descuento  <- 40
			FinSi
		FinSi
	FinSi
	
	Escribir  "precio total $" cantidad * 80
	Escribir "descuesto: %" descuento
	Escribir "total a pagar $" totalPagar
FinProceso