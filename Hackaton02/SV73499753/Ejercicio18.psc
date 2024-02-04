// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad.
// Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.

// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs
// a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ejercicio18
	 numCDs	     = 0
     precioUnitario  = 0
	 gananciaPorCD  = 0
	 precioTotalCliente  = 0
	 gananciaTotalVendedor   = 0
    perctG = 8.25
	
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer numCDs
	
    // Verificación de cantidad no negativa
    Si numCDs >= 0 Entonces
        
        Si numCDs <= 9 Entonces
            precioUnitario = 10.0
        Sino
            Si numCDs <= 99 Entonces
                precioUnitario = 8.0
            Sino
                Si numCDs >= 100 y numCDs <= 499 Entonces
                    precioUnitario = 7.0
					sino
                    precioUnitario = 6.0
                Fin Si
            Fin Si
        Fin Si
		
        //  precio total para el cliente
        precioTotalCliente = numCDs * precioUnitario
		
        //  ganancia para el vendedor
        gananciaPorCD = precioUnitario * (perctG / 100)
        gananciaTotalVendedor = numCDs * gananciaPorCD
		
     
        Escribir "Precio total para el cliente: $", precioTotalCliente
        Escribir "Ganancia para el vendedor: $", gananciaTotalVendedor
	SiNo
        Escribir "La cantidad de CDs debe ser no negativa."
    Fin Si
FinProceso
