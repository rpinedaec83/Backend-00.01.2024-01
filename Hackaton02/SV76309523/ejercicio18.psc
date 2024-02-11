Proceso ejercicio18
	Definir cantidad, precioUnitario, precioTotal, gananciaVendedor Como Real
	Escribir "ingresar la cantidad de CD que desa comprar"
	leer cantidad
	Si cantidad >= 1 y cantidad <= 9 Entonces
        precioUnitario = 10
    Sino
        Si cantidad >= 10 y cantidad <= 99 Entonces
            precioUnitario = 8
        Sino
            Si cantidad >= 100 y cantidad <= 499 Entonces
                precioUnitario = 7
            Sino
                Si cantidad >= 500 Entonces
                    precioUnitario = 6
                Sino
                    Escribir "Cantidad no válida. Ingrese una cantidad positiva."
				
                FinSi
            FinSi
        FinSi
    FinSi
	precioTotal = cantidad * precioUnitario
    gananciaVendedor = precioTotal * 0.0825
    Escribir "total para el cliente: $", precioTotal
    Escribir "Ganancia para el vendedor: $", gananciaVendedor
FinProceso
