/*Proceso pregunta_03
	Definir nummero Como Entero
	Definir ultimoDigito Como Entero
	
	Escribir " Ingrese un número: " //Lee un número entero desde el teclado.
	Leer nummero
	
	// Se obtiene el último dígito del número utilizando el operador módulo (%).
	
	ultimoDigito <- nummero % 10 //Utiliza el operador módulo (%) para obtener el último dígito del número.
	
	// Se verifica si el último dígito es igual a 4.
	
	Si ultimoDigito = 4 Entonces //Compara si el último dígito es igual a 4.
		Escribir "El numero termina en 4." //Imprime un mensaje indicando si el número termina en 4 o no.
	Sino
		Escribir "El numero no termina en 4." //Imprime un mensaje indicando si el número termina en 4 o no.
	FinSi
	
FinProceso*/

numero = prompt (" Ingrese un número: ")
let ultimoDigito = numero % 10;

if (ultimoDigito == 4) {
    console.log("El numero termina en 4.");
} else {
    console.log("El numero no termina en 4.");
}