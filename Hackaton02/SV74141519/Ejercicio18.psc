Proceso Ejercicio18
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE VENTA DE CDS --------------------"
	
	Escribir "Ingrese la cantidad de CDs a vender: " 
    Leer canCDs 
	
    Si canCDs >= 1 y canCDs <= 9 Entonces
        precioU = 10
    Sino
        Si canCDs >= 10 y canCDs <= 99 Entonces
            precioU = 8
        Sino
            Si canCDs >= 100 y canCDs <= 499 Entonces
                precioU = 7
            Sino
                Si canCDs >= 500 Entonces
                    precioU = 6
                Sino
                    Escribir "Cantidad no válida."
                FinSi
            FinSi
        FinSi
    FinSi
	
     
    pTotal = canCDs * precioU
	
     
    ganancia = pTotal * 0.0825
	
     
    Escribir "El precio total para el cliente es: $" pTotal 
    Escribir "La ganancia para el vendedor es: $" ganancia 

	
FinProceso
