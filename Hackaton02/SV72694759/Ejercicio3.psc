Proceso Ejercicio3
	Escribir "Ingrese un número entero:"
    Leer numero
	
    // Obtener el último dígito usando el operador módulo (%)
    Definir ultimoDigito Como Entero
    ultimoDigito = Abs(numero) % 10  // Tomamos el valor absoluto para manejar números negativos
	
    // Verificar si el último dígito es 4
    Si ultimoDigito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número no termina en 4."
    Fin Si

FinProceso
