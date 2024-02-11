Proceso Ordenamiento_menor_a_mayor
	Definir num1,num2,num3 Como Entero
	Escribir "Ingrese Primer valor"
	Leer num1
	Escribir "Ingrese Segundo valor"
	Leer num2
	Escribir "Ingrese Tercer valor"
	Leer num3
	Si num1>num2 y num1>num3 y num2>num3 Entonces
		num_mayor<- num1
		num_medio<- num2
		num_menor<- num3
	SiNo
		Si num2>num1 y num2>num3 y num1>num3 Entonces
			num_mayor<- num2
			num_medio<- num1
			num_menor<- num3
			
		SiNo
			num_mayor<- num3
			num_medio<- num2
			num_menor<- num1
			
		Fin Si
	Fin si
	Escribir "Mayor=",num_mayor," Medio=",num_medio," Menor=",num_menor
FinProceso
