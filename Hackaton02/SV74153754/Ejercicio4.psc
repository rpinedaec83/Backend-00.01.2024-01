Proceso Ejercicio4
	
	Definir Numero1, Numero2, Numero3 Como Enteros
	Escribir "Ingrese primer numero:"
    Leer Numero1
	
    Escribir "Ingrese segundo numero:"
    Leer Numero2
	
    Escribir "Ingrese tercer numero:"
    Leer Numero3
	
	si Numero1 <Numero2 y Numero1 <Numero3 
		Escribir "El numero mayor es",  Numero3
	FinSi
	
	si Numero2 <Numero1 y Numero2 <Numero3 
		Escribir "El numero mayor es",  Numero3
	FinSi
	
	si Numero3 <Numero1 y Numero3 <Numero2
		Escribir "El numero mayor es", Numero2
	FinSi
	
	si Numero1 <Numero3 y Numero1 >Numero2
		Escribir "El numero mayor es",  Numero3
	FinSi
	
	si Numero3 >Numero2 y Numero1 >Numero3
		Escribir "El numero mayor es",  Numero1
	FinSi
	
FinProceso