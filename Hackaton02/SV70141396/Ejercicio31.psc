// Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso ejercicio_31
	Definir num, sumaimpares, sumapares, cantidadimpares, cantidadpares Como Entero
	Escribir " Ingrese un numero entero "
	Leer num
	
	sumapares = 0
	sumaimpares = 0
	cantidadpares = 0
	cantidadimpares = 0
	
	Para i = 1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese el número ", i, ": "
        Leer num
	
		Si num Mod 2 = 0 Entonces
			sumapares = sumapares + num
			cantidadpares = cantidadpares + 1
			
		SiNo
			
			sumaimpares = sumaimpares + num
			cantidadimpares = cantidadimpares + 1
		FinSi
		
	FinPara		
	Si cantidadpares > 0 Entonces
		mediapares = sumapares / cantidadpares
		Escribir "La media de los números pares ingresados es: ", mediapares
	FinSi
	Si cantidadimpares > 0 Entonces
		mediaimpares = sumaimpares / cantidadimpares
		Escribir "La media de los números impares ingresados es: ", mediaimpares
	FinSi
	

FinProceso
