// 3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso ejercicio_3
	Definir n Como Real
	Definir cont Como Entero
	Definir aux Como Entero
	
	Escribir "Ingrese un numero:"
	Leer n
	
	//Obtenemos el valor absoluto, en caso se ingrese un negativo
	n <- trunc(abs(n))
	
	// primero, contar cuantos digitos
	cont <- 0 
	aux <- n
	Mientras aux>0 hacer // mientras no sea cero
		cont <- cont + 1 // contar cuantos digitos
		aux <- trunc(aux/10) // dividir por 10 y despreciar los de
	FinMientras
		
	// luego, mostrarlos uno por uno 
	aux<-n
	Para i<-1 hasta cont Hacer
		pot <- 10^(cont-i) // por cuanto hay que dividir para obtener el primer digito
		digito <- trunc (aux / pot) // obtener el digito
		aux <- aux - digito*pot // quitar ese digito al numero
	FinPara
	
	//Evaluamos si el último digito termina en 4
	Si digito == 4 Entonces 
		Escribir "El numero " n " termina en " digito
	SiNo
		Escribir "El numero " n " NO termina en 4"
	FinSi
	
FinProceso
