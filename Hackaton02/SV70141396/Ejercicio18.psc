// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad.
// Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta.
// Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente
// y la ganancia para el vendedor.

Proceso ejercicio_18
	Definir cantidad Como Entero
	Escribir " Ingrese la cantidad a comprar "
	Leer cantidad
	
	Si cantidad < 10 Entonces
		total = cantidad * 10
	SiNo
		
		Si cantidad >= 10 y cantidad < 100 Entonces
			total = cantidad * 8
		SiNo
			
			Si cantidad >= 100 y cantidad < 500 Entonces
				total = cantidad * 7
			SiNo
				
				Si cantidad >= 500 Entonces
					total = cantidad * 6
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir " EL precio total es : " total " $ "
	ganancia = total - ( total * 0.825 ) 
	Escribir " La ganancia es " ganancia " $ "
FinProceso
