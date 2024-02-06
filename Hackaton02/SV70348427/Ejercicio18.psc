Proceso VentaCDs
    
    definir cantidadCDs como Entero
    Definir precioUnitario, precioTotalCliente, gananciaVendedor como real
	
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidadCDs
	
    Si cantidadCDs >= 1 Y cantidadCDs <= 9 Entonces
        precioUnitario = 10
    Sino
        Si cantidadCDs >= 10 Y cantidadCDs <= 99 Entonces
            precioUnitario = 8
        Sino
            Si cantidadCDs >= 100 Y cantidadCDs <= 499 Entonces
                precioUnitario = 7
            Sino
                Si cantidadCDs >= 500 Entonces
                    precioUnitario = 6
                FinSi
            FinSi
        FinSi
    FinSi
	
    precioTotalCliente = cantidadCDs * precioUnitario
    gananciaVendedor = precioTotalCliente * 0.0825
	
    Escribir "Precio unitario por CD: $", precioUnitario
    Escribir "Precio total para el cliente: $", precioTotalCliente 
    Escribir "Ganancia para el vendedor: $", gananciaVendedor 
FinProceso
