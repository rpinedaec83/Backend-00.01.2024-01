//  Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//  esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre 
//el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//	y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso Ejercicio5
	cantZap=0
	precioZ=80
	preCompra=0
	desc=0
	precioTotal=0
	Escribir "Ingrese cantidad de Zapatos a Comprar"
	Leer catZap
	
	Si catZap <= 10 Entonces
		preCompra = catZap * precioZ
		Escribir  "Precio total de compra: ", preCompra,"$"
	FinSi	

	si catZap >= 11 y catZap <= 20 Entonces
			preCompra = catZap * precioZ
			desc = preCompra * 0.1
			precioTotal = preCompra - desc
			Escribir  "Sub Total: " ,preCompra, "$"
			Escribir  "Tiene un descuento de 10%, el descuento es: ", desc, "$"
			Escribir  "Precio Total a pagar:",precioTotal, "$"
	FinSi
	
	si catZap >= 21 y catZap <= 30 Entonces
		preCompra = catZap * precioZ
		desc = preCompra * 0.2
		precioTotal = preCompra - desc
		Escribir  "Sub Total: " ,preCompra, "$"
		Escribir  "Tiene un descuento de 20%, el descuento es:", desc, "$"
		Escribir  "Precio Total a pagar:",precioTotal, "$"
	FinSi
	si catZap >= 31 Entonces
		preCompra = catZap * precioZ
		desc = preCompra * 0.4
		precioTotal = preCompra - desc
		Escribir  "Sub Total: " ,preCompra, "$"
		Escribir  "Tiene un descuento de 40%, el descuento es:", desc, "$"
		Escribir  "Precio Total a pagar:",precioTotal, "$"
	FinSi

FinProceso
