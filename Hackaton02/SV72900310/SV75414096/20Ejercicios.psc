Algoritmo sin_titulo
	
							num1=0
							num2=0
							num3=0
							num4=0
							contador_pares=0
							mayor=0 
							media =0
							suma=0 
							CuadradoComo =0
							
							
							Escribir "Ingrese el primer número: "
							Leer num1
							
							Escribir "Ingrese el segundo número: "
							Leer num2
							
							Escribir "Ingrese el tercer número: "
							Leer num3
							
							Escribir "Ingrese el cuarto número: "
							Leer num4
							
							// Verificar cuántos números son pares
							Si num1 MOD 2 = 0 Entonces
								contador_pares = contador_pares + 1
							FinSi
							
							Si num2 MOD 2 = 0 Entonces
								contador_pares = contador_pares + 1
							FinSi
							
							Si num3 MOD 2 = 0 Entonces
								contador_pares = contador_pares + 1
							FinSi
							
							Si num4 MOD 2 = 0 Entonces
								contador_pares = contador_pares + 1
							FinSi
							
							// Encontrar el mayor de todos
							mayor <- num1
							
							Si num2 > mayor Entonces
								mayor = num2
							FinSi
							
							Si num3 > mayor Entonces
								mayor = num3
							FinSi
							
							Si num4 > mayor Entonces
								mayor = num4
							FinSi
							
							// Si el tercero es par, calcular el cuadrado del segundo
							Si num3 MOD 2 = 0 Entonces
								Cuadrado = num2 * num2
							FinSi
							
							// Si el primero es menor que el cuarto, calcular la media de los 4 números
							Si num1 < num4 Entonces
								media = (num1 + num2 + num3 + num4) / 4
							FinSi
							
							// Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
							Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
								suma = num1 + num2 + num3 + num4
							FinSi
							
							// Mostrar resultados
							Escribir "Cantidad de números pares: ", contador_pares
							Escribir "El mayor de todos: ", mayor
							
							Si num3 MOD 2 = 0 Entonces
								Escribir "Cuadrado del segundo si el tercero es par: ", Cuadrado
							FinSi
							
							Si num1 < num4 Entonces
								Escribir "Media de los 4 números si el primero es menor que el cuarto: ", media
							FinSi
							
							Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
								Escribir "Suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700: ", suma
    FinSi
FinAlgoritmo
