Algoritmo CalculoAumentoTrabajador
    Definir salario, salConAumento Como Real
    Definir porceAumento Como Entero
	
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario
	
    Si salario > 2000 Entonces
        porceAumento = 5
    Sino
        porceAumento = 10
    FinSi
	
    salConAumento = salario + (salario * porceAumento / 100)
	
    Escribir "El salario nuevo con aumento es: ", salConAumento
	
FinAlgoritmo
