Proceso CalcularPago
    Definir numero, dias Como Entero
    Definir pcajero, pservidor, pmezclas, pmantenimiento Como Real
    
    Escribir "Ingrese número identificador (11-cajero, 12-servidor, 13-mezclas, 14-mantenimiento):"
    Leer numero
    
    Escribir "Ingrese cantidad de días trabajados:"
    Leer dias
    
    pcajero = 56
    pservidor = 64
    pmezclas = 80
    pmantenimiento = 48
    
    Si dias <= 6 Entonces
        Si numero = 11 Entonces
            Escribir "El pago del cajero es ", pcajero * dias
        Sino 
            Si numero = 12 Entonces
                Escribir "El pago del servidor es ", pservidor * dias
            Sino 
                Si numero = 13 Entonces
                    Escribir "El pago de mezclas es ", pmezclas * dias
                Sino 
                    Si numero = 14 Entonces
                        Escribir "El pago de mantenimiento es ", pmantenimiento * dias
                    Fin Si
                Fin Si
            Fin Si
        Fin Si
    Sino
        Escribir "Días máximos sobrepasados"
    Fin Si
Fin Proceso