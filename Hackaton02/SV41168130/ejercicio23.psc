//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso ejercicio23
	Definir n Como Entero
	Definir suma_impares Como Entero
	
	suma_impares <- 0
	n <- 0
	
	Escribir "23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n"
	Escribir "Ingrese el valor de n: "
	Leer n
		
	Si n <= 0 Entonces
		Escribir "Alerta, Ingrese un número mayor a cero";
	SiNo
		Para i <- 1 Hasta n Con Paso 2 Hacer
			Si i Mod 2 <> 0 Entonces
				suma_impares <- suma_impares + i
			FinSi
		FinPara
		Escribir "La suma de impares menores o iguales a " n " es: " suma_impares
	FinSi
FinProceso