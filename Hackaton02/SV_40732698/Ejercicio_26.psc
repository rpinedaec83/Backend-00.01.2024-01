Proceso Resto_Cociente
	Definir dividendo, divisor, cociente, resto Como Entero
	cociente=0
	resto=0
	divisor=0
	
    Escribir "Ingrese un dividendo entero: "
    Leer dividendo
	Escribir "Ingrese un divisor entero menor al primer dividendo ingresado: "
    Leer divisor
	Si dividendo>0 y divisor>0 y dividendo>=divisor Entonces
		MIentras dividendo>=divisor
			dividendo=dividendo-divisor
			cociente= cociente+1
		FinMientras
	resto<-dividendo
		Escribir "El cociente es: ", cociente
		Escribir "El resto es: ", resto
	SiNo Escribir "Ingrese dividendos positivos, el segundo menor al primero reinicie"
		
	FinSi
    
FinProceso
