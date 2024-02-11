Proceso Num_mayor
Definir num1,num2,num3 Como Real
Escribir "Ingrese numero 1:"
Leer num1
Escribir "Ingrese numero 2:"
Leer num2
Escribir "Ingrese numero 3:"
Leer num3
Si num1 >= num2 Y num1 >= num3 Entonces
	mayor <- num1
FinSi
Si num2 >= num1 Y num2 >= num3 Entonces
        mayor <- num2
FinSi
Si num3 >= num1 Y num3 >= num3 Entonces
	mayor <- num3
FinSi
   
    Escribir "El mayor de los tres números es: ", mayor
FinProceso
