//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía 
//dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso ejercicio_7
	Definir tipo_membresia Como Caracter
	Definir descuento_membresia Como Caracter
	Definir monto_compra Como Real
	Definir monto_descuento Como Real
	Definir monto_final Como Real
	
	descuento_membresia <- "0%"
	monto_compra <- 0
	monto_descuento <- 0
	monto_final <- 0
	
	Escribir "Ingrese el tipo de membresia"
	Leer tipo_membresia
	tipo_membresia <- Mayusculas(tipo_membresia)
	
	Escribir "Ingrese el monto de la compra"
	Leer monto_compra
	
	Si monto_compra > 0 Entonces		
		
		Segun tipo_membresia Hacer
			"A":
				descuento_membresia <- "10%"
				monto_descuento <- monto_compra * 0.10
			"B":
				descuento_membresia <- "15%"
				monto_descuento <- monto_compra * 0.15
			"C":
				descuento_membresia <- "20%"
				monto_descuento <- monto_compra * 0.20
			De Otro Modo:
				monto_descuento <- 0
		Fin Segun
		
		monto_final <- monto_compra - monto_descuento
		
		Escribir "Detalle la compra"
		Escribir "-----------------"
		Escribir "El tipo de membresia es: " tipo_membresia ", accede a " descuento_membresia " de descuento"
		Escribir "El monto de la compra es : " monto_compra
		Escribir "El descuento es $: " monto_descuento
		Escribir "El monto total a pagar es $: " monto_final
		
	SiNo
		Escribir "El monto ingresado debe ser mayor a cero"
	FinSi
FinProceso
