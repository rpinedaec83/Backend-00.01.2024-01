Algoritmo SumaNumerosPares
    Definir resultado, i Como Entero
	
    resultado <- 0
	
    Para i <- 1 Hasta 1000 Con Paso 1
        Si i MOD 2 = 0 Entonces
            resultado <- resultado + i
        Fin Si
    Fin Para
	
    Escribir "Los números son: " + ConvertirATexto(resultado)
Fin Algoritmo