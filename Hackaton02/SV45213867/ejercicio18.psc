Proceso ejercicio_19
	// Constantes
    Precio1 <- 10
    Precio2 <- 8
    Precio3 <- 7
    Precio4 <- 6
    GananciaVendedor <- 0.0825  // 8.25%
	
    // Variables
    Definir cantidadCDs Como Entero
    Definir precioUnitario, precioTotal, gananciaVendedorTotal Como Real
	
    // Entrada de datos
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidadCDs
	
    // Calcular precio total para el cliente
    Segun cantidadCDs Hacer
        Caso Desde 1 Hasta 9:
            precioUnitario <- Precio1
        Desde 10 Hasta 99:
            precioUnitario <- Precio2
        Desde 100 Hasta 499:
            precioUnitario <- Precio3
        Mayor = 500:
            precioUnitario <- Precio4
        De Otro Modo:
            Escribir "La cantidad de CDs ingresada no es válida."
    FinSegun
	
    precioTotal <- cantidadCDs * precioUnitario
	
    // Calcular ganancia para el vendedor
    gananciaVendedorTotal <- precioTotal * GananciaVendedor
	
    // Mostrar resultados
    Escribir "Precio total para el cliente: $", precioTotal
    Escribir "Ganancia para el vendedor: $", gananciaVendedorTotal

FinProceso
