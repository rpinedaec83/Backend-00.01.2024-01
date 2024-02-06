//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	num1 = 0
	num2 = 0
	num3 = 0
	may = 0
	Escribir "Ingrese  los numeros"
    Leer num1
    Leer num2
    Leer num3
	Si num1 > num2 Y num1 > num3 Entonces
        may = num1	
	Sino
        Si num2 > num3 Entonces	
			may = num2
		SiNo
			may = num3
		Fin Si
	Fin Si	
	Escribir "El número mayor es: ", may
FinProceso
