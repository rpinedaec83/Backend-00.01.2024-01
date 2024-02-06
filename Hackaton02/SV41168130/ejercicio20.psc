//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

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
	
	//Indica la cantidad de número a leer
	cant <- 4
	pos_mayor <- 1
	
	Dimension lista[cant]
	
	Escribir "Ingrese los " cant " números:"
	Para i <- 1 Hasta cant Hacer
		Leer variable
		lista[i] <- variable
	FinPara
	
	//¿Cuántos números son Pares?
	Escribir "¿Cuántos números son Pares?"
	Escribir "La cantidad de números pares es: " ObtenerPares(lista,cant)
	Escribir " "
	
	//¿Cuál es el mayor de todos?
	Escribir "¿Cuál es el mayor de todos?"
	pos_mayor <- ObtenerMayor(lista, cant)
	Escribir "El número mayor es " lista[pos_mayor]
	Escribir " "
	
	//Si el tercero es par, calcular el cuadrado del segundo.
	Escribir "Si el tercero es par, calcular el cuadrado del segundo."
	tercero_par <- TerceroPar(lista,3)
	Segun tercero_par Hacer
		-1:
			Escribir "El tercer número ingresado " lista[3] " es par"
			Escribir "El segundo número ingresado " lista[2] " es negativo, no es posible obtener su raíz cuadrada"
		-2: 
			Escribir "El tercer número ingresado " lista[3] " NO es par"
		De Otro Modo:
			Escribir "El tercer número ingresado " lista[3] " es par"
			Escribir "El cuadrado del segundo número " lista[2] " es :" tercero_par
	FinSegun
	Escribir " "
	
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	Escribir "Si el primero es menor que el cuarto, calcular la media de los 4 números"
	Si lista[1] < lista[4] Entonces
		Escribir "El primer número " lista[1] " es menor que el cuarto número " lista[4]
		promedio <- PrimeroMenorCuarto (lista, cant, 1, 4)
		Escribir "El promedio de los " cant " número es: " promedio 
	SiNo
		Escribir "El primer número" lista[1] " no es menor que el cuarto número " lista[4]
	FinSi
	Escribir " "
	
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Escribir "Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números"
	suma <- 0
	Si lista[2] > lista[3] Entonces
		Escribir "El segundo número " lista[2] " es mayor que el tercer número " lista[3]
		Si lista[3] >= 50 & lista[3] <= 700
			suma <- SumarLista(lista,4)
			Escribir "El tercer número " lista[3] " se encuentra entre 50 y 700"
			suma <- SumarLista(lista,cant)
			Escribir "La suma de los " cant " números es " suma
		SiNo
			Escribir "El tercer número " lista[3] " NO se encuentra entre 50 y 700"
		FinSi
	SiNo
		Escribir "El segundo número " lista[2] " no es mayor que el tercer número " lista[3]
	FinSi
	
	
FinProceso