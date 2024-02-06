// 31. Hacer un algoritmo en Pseint parar calcular la media de los numeros pares e impares, sulo se ingresaru diez numeros.


Proceso Ejercicio31
	
	Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares Como Entero
    Definir mediaPares, mediaImpares Como Real
	
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
	
    Para i = 1 Hasta 10 Hacer
        Escribir "Ingrese el numero ", i
        Leer numero
		
        Si numero % 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        FinSi
    FinPara
	
    Si contadorPares > 0 Entonces
        mediaPares = sumaPares / contadorPares
        Escribir "La media de los numeros pares ingresados es:", mediaPares
    Sino
        Escribir "No se ingresaron numeros pares."
    FinSi
	
    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares
        Escribir "La media de los numeros impares ingresados es:", mediaImpares
    Sino
        Escribir "No se ingresaron numeros impares."
    FinSi
	
FinProceso
