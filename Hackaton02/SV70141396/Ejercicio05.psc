//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoci�n
//de descuento para vender al mayor, esta depender� del n�mero de zapatos que se compren.
//Si son m�s de diez, se les dar� un 10% de descuento sobre el total de la compra;
//si el n�mero de zapatos es mayor de veinte pero menor de treinta,
//se le otorga un 20% de descuento; y si son m�s treinta zapatos se otorgar� un 40% de descuento.
//El precio de cada zapato es de $80

Proceso ejercicio_05
	Definir cantidad Como Entero
	Definir precioZapato Como Real
	Definir totalPagar Como Real
	precioZapato <- 80
	Escribir "Digite la cantidad de zapatos comprados"
	Leer cantidad;
	
	totalPagar <- cantidad*80
	descuento <- 0
	
	SI cantidad > 10 y cantidad <=20 Entonces
		totalPagar <- cantidad*80-(cantidad * 80 *0.10)
		descuento <-10
	SiNo
		si cantidad >20 y cantidad <=30 Entonces
			 
			totalPagar<- cantidad*80 - (cantidad *80 *0.20)
			descuento <- 20
		SiNo
			si cantidad>30 Entonces
				totalPagar<- cantidad*80 - (cantidad * 80 *0.40)
				descuento <- 40
			FinSi
		FinSi
	FinSi
	
	Escribir "precio total: " cantidad * 80
	Escribir "descuento: %" descuento
	Escribir "total a pagar: " totalPagar
FinProceso
