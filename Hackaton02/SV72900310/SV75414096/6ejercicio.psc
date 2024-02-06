Algoritmo sin_titulo
	HorasTrabajadas= 0
	sueldoporHora=20
	total =0
	
	Escribir "Ingrese  cantidad de horas trabajadas";
	Leer  Horastrabajadas
	
	si HorasT < 40  Entonces
		
		total= HorasTrabajadas*sueldoporHora
		Escribir " El total a pagar  es "  total
		
	SiNo
		total=  40 * sueldoporHora + (HorasTrabajadas - 40) * 25
		
		Escribir " El total a pagar  es "  total
	FinSi
	
FinAlgoritmo
