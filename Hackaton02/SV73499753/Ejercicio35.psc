// Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso Ejercicio35
	num = 0
	may = 0 
	men = 0  
    i  = 0
	Escribir "Ingrese el número 1: "
    Leer num
    may = num
    men = num
	
    Para i = 2 Hasta 20
        Escribir "Ingrese el número ", i, ": "
        Leer num
		
        Si num > may Entonces
            may = num
        FinSi
		
        Si num < men Entonces
            men = num
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", may
    Escribir "El número menor es: ", men
FinProceso
