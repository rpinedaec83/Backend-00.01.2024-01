Proceso Ejercicio18
	
	Escribir "Ingrese la cantidad de discos"
	Leer discos
	
	Si discos>0&discos<10 Entonces
		precio=10*discos
	Fin Si
	
	Si discos>=10&discos<100 Entonces
		precio=8*discos
	Fin Si
	
	Si discos>=100&discos<500 Entonces
		precio=7*discos
	Fin Si
	
	Si discos>500 Entonces
		precio=6*discos
	Fin Si
	
	gananciavendedor = 0.0825*precio
	
	Escribir"El precio total es de: " precio
	Escribir " "
	Escribir"La ganancia del vendedor es: " gananciavendedor
	
FinProceso
