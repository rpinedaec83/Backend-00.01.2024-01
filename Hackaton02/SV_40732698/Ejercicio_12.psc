Proceso Num_mayor
	Definir num1,num2 Como Real
	Escribir "Ingrese numero 1:"
	Leer num1
	Escribir "Ingrese numero 2:"
	Leer num2
	
	Si num1 >= num2 Entonces
		mayor <- num1
	SiNo mayor<- num2
		
	FinSi
	
    Escribir "El mayor de los tres números es: ", mayor
FinProceso
