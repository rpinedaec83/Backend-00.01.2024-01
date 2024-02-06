Proceso ejercicio18
	
	Definir cantidad como Entero
	precio = 0
	ganancia = 8.25
	
	Escribir "Ingrese la cantidad de CDs a comprar"
	leer cantidad
	
	Si cantidad > 0 y cantidad < 10 Entonces
		precio = 10
	Sino Si cantidad >= 10 y cantidad < 100 Entonces
		precio = 8
	Sino Si cantidad >= 100 y cantidad < 500 Entonces
		precio = 7
	Sino Si cantidad >= 500 Entonces
			precio = 6
	Sino Si cantidad <= 0
		Escribir "Cantidad equivocada."
	FinSi
	FinSi
	FinSi
	FinSi	
	FinSi

	Escribir "El precio total es de " cantidad*precio ", y la ganancia del vendedor es de " cantidad*precio/100*ganancia
	
	
	
	
FinProceso

//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un 
//número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
