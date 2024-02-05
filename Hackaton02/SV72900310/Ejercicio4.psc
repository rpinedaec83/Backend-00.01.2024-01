//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.


Proceso Ejercicio4
	
	Definir num1, num2, num3 Como Entero
	
	Escribir "Ingrese primer numero:"
    Leer num1
	
    Escribir "Ingrese segundo numero:"
    Leer num2
	
    Escribir "Ingrese tercer numero:"
    Leer num3
	
	Si num1 <= num2 y num1 <= num3 Entonces
        Escribir "El menor es:", num1
        Si num2 <= num3 Entonces
            Escribir "El intermedio es:", num2
            Escribir "El mayor es:", num3
        Sino
            Escribir "El intermedio es:", num3
            Escribir "El mayor es:", num2
        FinSi
    Sino
        Si num2 <= num1 y num2 <= num3 Entonces
            Escribir "El menor es:", num2
            Si num1 <= num3 Entonces
                Escribir "El intermedio es:", num1
                Escribir "El mayor es:", num3
            Sino
                Escribir "El intermedio es:", num3
                Escribir "El mayor es:", num1
            FinSi
        Sino
            Escribir "El menor es:", num3
            Si num1 <= num2 Entonces
                Escribir "El intermedio es:", num1
                Escribir "El mayor es:", num2
            Sino
                Escribir "El intermedio es:", num2
                Escribir "El mayor es:", num1
            FinSi
        FinSi
    FinSi
	
FinProceso
