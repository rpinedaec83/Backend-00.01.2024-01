Proceso ejercicio31
	Definir sumaPares, sumaImpares, numero, contadorPares, contadorImpares Como Real
	sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
	
    Para i = 1 Hasta 10 Hacer
        Escribir "Ingrese un número:"
        Leer numero
		
        Si numero % 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
    FinPara
	Escribir  "numeros impares: " contadorImpares "  numeros pares:" contadorPares
    Si contadorPares > 0 Entonces
        Escribir "Media de pares:", sumaPares / contadorPares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
	
    Si contadorImpares > 0 Entonces
        Escribir "Media de impares:", sumaImpares / contadorImpares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso
