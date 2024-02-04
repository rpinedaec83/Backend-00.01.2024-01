// Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
// ¿Cuántos números son Pares?
// ¿Cuál es el mayor de todos?
// Si el tercero es par, calcular el cuadrado del segundo.
// Si el primero es menor que el cuarto, calcular la media de los 4 números.
// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
// Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso Ejercicio20
	num1 = 0
	num2 = 0
	num3 = 0
	num4 = 0
	cont = 0
	media = 0
	may = 0
	Escribir  "Ingrese los numeros positivos "
	Leer  num1
	Leer num2
	Leer num3
	Leer  num4
	//encontrar par 
	Si num1 % 2 == 0 Entonces
        cont = cont + 1
    Fin Si
    Si num2 % 2 == 0 Entonces
        cont = cont + 1
    Fin Si
    Si num3 % 2 == 0 Entonces
        cont = cont + 1
    Fin Si
    Si num4 % 2 == 0 Entonces
        cont = cont + 1
    Fin Si
	Escribir "Cantidad de números pares: ", cont
	//mayor de todos 
	may = num1
    Si num2 > may Entonces
        may = num2
    Fin Si
    Si num3 > may Entonces
        may = num3
    Fin Si
    Si num4 > may Entonces
        may = num4
    Fin Si
	Escribir "El mayor de todos: ", may

// Si el tercero es par, calcular el cuadrado del segundo
Si num3 Mod 2 = 0 Entonces
	num2 = num2 * num2
	Escribir "El cuardado del 2° es: ", num2
Fin Si

//Si el primero es menor que el cuarto, calcular la media de los 4 números.
Si num1 < num4 Entonces
	media = (num1 + num2 + num3 + num4) / 4
	Escribir "La media de los 4 números: ", media
Fin Si

//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
	suma = num1 + num2 + num3 + num4
	Escribir "La suma de los 4 números: ", suma
Fin Si




FinProceso