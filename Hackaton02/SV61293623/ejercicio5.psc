Proceso CalcularCostoZapatos
    Definir zapatos, precio Como Entero
    
    Escribir "¿Cantidad de zapatos a comprar?"
    Leer zapatos
    precio <- zapatos * 80
    
    Si zapatos <= 10 Entonces
        Escribir "Cantidad de zapatos es ", zapatos
        Escribir "El costo es ", precio
        Escribir "No tienes descuento"
        Escribir "Total a pagar es ", precio
    Sino
        Si zapatos > 10 Y zapatos <= 20 Entonces
            Escribir "Cantidad de zapatos es ", zapatos
            Escribir "El costo es ", precio
            Escribir "Su descuento es de 10%"
            Escribir "Total a pagar es ", precio - (precio * 0.1)
        Sino
            Si zapatos > 20 Y zapatos <= 30 Entonces
                Escribir "Cantidad de zapatos es ", zapatos
                Escribir "El costo es ", precio
                Escribir "Su descuento es de 20%"
                Escribir "Total a pagar es ", precio - (precio * 0.2)
            Sino
                Si zapatos > 30 Entonces
                    Escribir "Cantidad de zapatos es ", zapatos
                    Escribir "El costo es ", precio
                    Escribir "Su descuento es de 40%"
                    Escribir "Total a pagar es ", precio - (precio * 0.4)
                Fin Si
            Fin Si
        Fin Si
    Fin Si
Fin Proceso
