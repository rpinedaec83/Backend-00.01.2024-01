Proceso Ejercicio_13
	Escribir "------| BIENVENIDOS |------"
	Escribir "En este programa se le mencionara si la letra ingresada es vocal o no"
	Escribir "Ingrese su letra:"
	Leer letra
	cant<-Longitud(letra)
	Mientras cant>1 Hacer
		Escribir "Ingrese una LETRA:"
		Leer letra
		cant<-Longitud(letra)
	FinMientras
	si letra='a' o letra='e' o letra='i' o letra='u' o letra='o' o letra='O' o letra='A' o letra='E' o letra='I' o letra='U' Entonces
		Escribir "Es vocal"
	SiNo
		Escribir "NO es vocal"
	FinSi
	
	
FinProceso
