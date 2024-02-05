Algoritmo sin_titulo
	Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImpares Como Real
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
	
    Para i = 1 Hasta 10
        Escribir "Ingrese el número ", i, ": "
        Leer numero
		
        Si numero MOD 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares =sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
		Si contadorPares > 0 Entonces
			mediaPares = sumaPares / contadorPares
			Escribir "La media de los números pares es: ", mediaPares
		Sino
			Escribir "No se ingresaron números pares."
		FinSi
		
		Si contadorImpares > 0 Entonces
			mediaImpares = sumaImpares / contadorImpares
			Escribir "La media de los números impares es: ", mediaImpares
		Sino
			Escribir "No se ingresaron números impares."
		FinSi
FinAlgoritmo
