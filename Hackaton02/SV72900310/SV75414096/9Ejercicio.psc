Algoritmo sin_titulo
	Sueldo = 0
	total=0
	Escribir "Ingrese el sueldo del trabajador"
	leer Sueldo
	
	si sueldo>2000 Entonces
		total =Sueldo+(Sueldo*0.05) 	
		Escribir "El sueldo del trabajador  " Sueldo " tienes el 5% de aumento de sueldo El total es : " total 
	SiNo
		si Sueldo <2000  Entonces
			total =Sueldo+(Sueldo*0.1) 	
			Escribir "El sueldo del trabajador  " Sueldo " tienes el 5% de aumento de sueldo EL total es : " total 
			
		FinSi
	FinSi
FinAlgoritmo
