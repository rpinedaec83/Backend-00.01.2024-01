//20. Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
//�Cu�ntos n�meros son Pares?
//�Cu�l es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.

SubProceso cant_pares <- ObtenerPares (arreglo, cant)
	cant_pares <- 0
	Para j <- 1 Hasta cant Hacer
		resto <- arreglo[j] MOD 2
		Si resto == 0 Entonces
			cant_pares <- cant_pares + 1
		FinSi
	FinPara
FinSubProceso

SubProceso pos_mayor <- ObtenerMayor (arreglo,cant)
	pos_mayor <- 1
	Para j <- 2 Hasta cant Hacer
		Si arreglo[j]>arreglo[pos_mayor] Entonces
			pos_mayor <- j
		FinSi
	FinPara
Fin SubProceso

SubProceso cuadrado_segundo <- TerceroPar (arreglo, posicion)
	Si arreglo[posicion] MOD 2 == 0 Entonces
		Si arreglo[posicion-1] >= 0 Entonces
			cuadrado_segundo <- rc(arreglo[posicion-1])
		SiNo
			cuadrado_segundo <- -1
		FinSi
	SiNo
		cuadrado_segundo <- -2
	FinSi
Fin SubProceso	

SubProceso media <- PrimeroMenorCuarto (arreglo, cant, posicion1, posicion2)
	Si arreglo[posicion1] < arreglo[posicion2] Entonces
		suma <- 0
		Para j <- 1 Hasta cant Hacer
			suma <- suma + arreglo[j]
		FinPara
		media <- suma/cant
	FinSi
Fin SubProceso	

SubProceso suma <- SumarLista (arreglo, cant)
	suma <- 0
	Para j <- 1 Hasta cant Hacer
		suma <- suma + arreglo[j]
	FinPara
Fin SubProceso	

Proceso ejercicio12
	
	Definir cant Como Entero
	Definir pos_mayor Como Entero
	Definir cant_pares Como Entero
	Definir variable Como Real
	
	//Indica la cantidad de n�mero a leer
	cant <- 4
	pos_mayor <- 1
	
	Dimension lista[cant]
	
	Escribir "Ingrese los " cant " n�meros:"
	Para i <- 1 Hasta cant Hacer
		Leer variable
		lista[i] <- variable
	FinPara
	
	//�Cu�ntos n�meros son Pares?
	Escribir "�Cu�ntos n�meros son Pares?"
	Escribir "La cantidad de n�meros pares es: " ObtenerPares(lista,cant)
	Escribir " "
	
	//�Cu�l es el mayor de todos?
	Escribir "�Cu�l es el mayor de todos?"
	pos_mayor <- ObtenerMayor(lista, cant)
	Escribir "El n�mero mayor es " lista[pos_mayor]
	Escribir " "
	
	//Si el tercero es par, calcular el cuadrado del segundo.
	Escribir "Si el tercero es par, calcular el cuadrado del segundo."
	tercero_par <- TerceroPar(lista,3)
	Segun tercero_par Hacer
		-1:
			Escribir "El tercer n�mero ingresado " lista[3] " es par"
			Escribir "El segundo n�mero ingresado " lista[2] " es negativo, no es posible obtener su ra�z cuadrada"
		-2: 
			Escribir "El tercer n�mero ingresado " lista[3] " NO es par"
		De Otro Modo:
			Escribir "El tercer n�mero ingresado " lista[3] " es par"
			Escribir "El cuadrado del segundo n�mero " lista[2] " es :" tercero_par
	FinSegun
	Escribir " "
	
	//Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
	Escribir "Si el primero es menor que el cuarto, calcular la media de los 4 n�meros"
	Si lista[1] < lista[4] Entonces
		Escribir "El primer n�mero " lista[1] " es menor que el cuarto n�mero " lista[4]
		promedio <- PrimeroMenorCuarto (lista, cant, 1, 4)
		Escribir "El promedio de los " cant " n�mero es: " promedio 
	SiNo
		Escribir "El primer n�mero" lista[1] " no es menor que el cuarto n�mero " lista[4]
	FinSi
	Escribir " "
	
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.
	Escribir "Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros"
	suma <- 0
	Si lista[2] > lista[3] Entonces
		Escribir "El segundo n�mero " lista[2] " es mayor que el tercer n�mero " lista[3]
		Si lista[3] >= 50 & lista[3] <= 700
			suma <- SumarLista(lista,4)
			Escribir "El tercer n�mero " lista[3] " se encuentra entre 50 y 700"
			suma <- SumarLista(lista,cant)
			Escribir "La suma de los " cant " n�meros es " suma
		SiNo
			Escribir "El tercer n�mero " lista[3] " NO se encuentra entre 50 y 700"
		FinSi
	SiNo
		Escribir "El segundo n�mero " lista[2] " no es mayor que el tercer n�mero " lista[3]
	FinSi
	
	
FinProceso