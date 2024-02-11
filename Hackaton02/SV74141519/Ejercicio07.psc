Proceso Ejercicio07
	
	Escribir "-------------------- BIENVENIDO A LA HELADERIA JACOBO --------------------"
	
	Escribir "Ingrese el total de la compra: $" 
    Leer totalCom 
	
	Escribir "Ingrese el tipo de membresía (A, B o C): " 
    Leer tipoMem 
	
    Segun tipoMem Hacer
			Caso "A":
				desc = totalCom * 0.1
				porDesc = "10%"
			Caso "B":
				desc = totalCom * 0.15
				porDesc = "15%"
			Caso "C":
				desc = totalCom * 0.2
				porDesc = "20%"
			Default:
            Escribir "Tipo de membresía no válido." 
	FinSegun

totalConDesc = totalCom - desc

Escribir "Por tener membresia tipo " tipoMem " usted tiene un descuento de: " porDesc
Escribir "El descuento aplicado es: $" desc
Escribir "El total con descuento es: $" totalConDesc

FinProceso
