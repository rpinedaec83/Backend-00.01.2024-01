Proceso tarea31
	Definir sumaPares, sumaImpares, num, contador, numPares, numImpares Como Real
    sumaPares <- 0
    sumaImpares <- 0
    numPares <- 0
    numImpares <- 0
    Para contador <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese un numero ", contador, ": "
        Leer num
        
        Si num MOD 2 = 0 Entonces
            sumaPares <- sumaPares + num
            numPares <- numPares + 1
        Sino
            sumaImpares <- sumaImpares + num
            numImpares <- numImpares + 1
        FinSi
    FinPara
    
    Si numPares > 0 Entonces
        mediaPares <- sumaPares / numPares
        Escribir "La media de los números pares es: ", mediaPares
    Sino
        Escribir "No se encontró números pares."
    FinSi
    
    Si numImpares > 0 Entonces
        mediaImpares <- sumaImpares / numImpares
        Escribir "La media de los números impares es: ", mediaImpares
    Sino
        Escribir "No se se encontró números impares."
    FinSi
FinProceso
