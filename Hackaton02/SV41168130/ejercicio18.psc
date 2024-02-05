//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender 
//calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso ejercicio18
	Definir cantidad_compra Como Entero
	Definir precio Como Real
	Definir precio_total Como Real
	Definir ganancia Como Real
	
	precio <- 0
	precio_total <- 0
	ganancia <- 8.25
	
	Escribir "Ingrese la cantidad de productos a comprar "
	Leer cantidad_compra
	
	Si cantidad_compra > 0 & cantidad_compra <= 9 Entonces
		precio <- 10
	SiNo
		Si cantidad_compra >= 10 & cantidad_compra <= 99
			precio <- 8
		SiNo
			Si cantidad_compra >= 100 & cantidad_compra <= 499
				precio <- 7
			SiNo
				Si cantidad_compra >= 500 Entonces
					precio <- 6
				SiNo
					Escribir "El valor ingresado no es válido"
					cantidad_compra <- 0
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir "El resumen de la compra es"
	Escribir "--------------------------"
	Escribir "Precio total para el cliente $: " cantidad_compra * precio
	Escribir "La ganancia del vendedor es $: " (cantidad_compra * precio) * (ganancia/100)
		
FinProceso
