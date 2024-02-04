//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
	n = 0
	suma = 0
	i = 0
	
    Escribir "Ingrese un número n para calcular la suma de los números impares menores o iguales a n: "
    Leer n
	
    Si n < 0 Entonces
        Escribir "El número debe ser no negativo."
    Sino
        suma = 0
		Para i = 1  Hasta n Con Paso 2 Hacer
			suma = suma + i
		Fin Para
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    FinSi
FinProceso
