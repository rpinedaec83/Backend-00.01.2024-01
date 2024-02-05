//Hacer un algoritmo en Pseint parar calcular la media de los n�meros pares e impares, s�lo se ingresar� diez n�meros.
Algoritmo ejeercicio_31

    Definir num, contador, sumaPares, sumaImpares Como Entero
    Definir mediaPares, mediaImpares Como Real

    sumaPares = 0
    sumaImpares = 0
    contador = 0

    Repetir
        Escribir 'Ingrese un n�mero:'
        Leer num

        Si num MOD 2 = 0 Entonces
 
            sumaPares = sumaPares + num
        Sino

            sumaImpares = sumaImpares + num
        FinSi
		
        contador = contador + 1
    Hasta Que contador = 10

    mediaPares = sumaPares / 10
    mediaImpares = sumaImpares / 10

    Escribir 'La media de los n�meros pares es:', mediaPares
    Escribir 'La media de los n�meros impares es:', mediaImpares
	
FinAlgoritmo
