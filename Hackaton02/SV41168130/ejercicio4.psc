//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

// Pasar a string una lista
SubProceso lista_total <- EscribirLista (cant, lista)
	Para i<-1 Hasta cant Hacer
		lista_total <- concatenar(lista_total, lista[i])
		lista_total <- concatenar(lista_total, " ")
	FinPara
Fin SubProceso

Proceso ejercicio_4
	
	Definir cant Como Entero
	cant<-3
	Dimension lista[cant]
	
	Escribir "Ingrese 3 números:"
			
	Para i<-1 Hasta cant Hacer
		Leer variable
		lista[i]<-variable
	FinPara
	
	//Escribir "La lista inicial es: " lista[1] " , " lista[2] " , " lista[3]
	Escribir "La lista original es: " EscribirLista(cant,lista)
	
	// ordenar
	Para i<-1 Hasta cant-1 Hacer
		// busca el menor número de la lista
		pos_menor<-i
		Para j<-i+1 Hasta cant Hacer
			Si lista[j]<lista[pos_menor] Entonces
				pos_menor<-j
			FinSi
		FinPara
		// intercambia el que estaba en i con el menor que encontro
		aux<-lista[i]
		lista[i]<-lista[pos_menor]
		lista[pos_menor]<-aux
	FinPara	
	
	// Muestra la lista de menor a mayor
	Escribir "La lista ordenada de menor a mayor es: " EscribirLista(cant,lista)
	
FinProceso