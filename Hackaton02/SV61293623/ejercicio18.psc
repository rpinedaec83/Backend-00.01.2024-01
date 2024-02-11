Proceso CalcularPrecioGanancia
    Definir articulos Como Entero
	
    Escribir "Cantidad de artículos a comprar:"
    Leer articulos
    
    Si articulos <= 9 Entonces
        Escribir "El precio es ", articulos * 10, " la ganancia del vendedor es: ", articulos * 10 * 0.0825
    Sino 
        Si articulos <= 99 Entonces
            Escribir "El precio es ", articulos * 8, " la ganancia del vendedor es: ", articulos * 8 * 0.0825
        Sino 
            Si articulos <= 499 Entonces
                Escribir "El precio es ", articulos * 7, " la ganancia del vendedor es: ", articulos * 7 * 0.0825
            Sino 
                Si articulos > 500 Entonces
                    Escribir "El precio es ", articulos * 6, " la ganancia del vendedor es: ", articulos * 6 * 0.0825
                Fin Si
            Fin Si
        Fin Si
    Fin Si
Fin Proceso