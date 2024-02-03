Proceso Ejercicio11
	Definir num1, num2, num3, mayor Como Real
	Escribir "Ingrese primer numero"
	leer num1
	Escribir "Ingrese segundo numero"
	leer num2
	Escribir "Ingrese tercer numero"
	leer num3
	mayor <- num1
	Si num2 > mayor Entonces
        mayor <- num2
    FinSi
	
    Si num3 > mayor Entonces
        mayor <- num3
	FinSi
	Escribir "El mayor de los tres números es: ", mayor
FinProceso
