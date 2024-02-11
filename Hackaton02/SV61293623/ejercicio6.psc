Proceso CalcularSueldo
    Definir sueldo, extra, nSueldo, eSueldo, total Como Real
	
    Escribir "Cantidad de horas trabajadas: "
    Leer sueldo
	
    extra = 25
	
    Si sueldo < 40 Entonces
        nSueldo = 20 * sueldo
        Escribir "Mi sueldo esta semana es ", nSueldo
    Sino
        Si sueldo > 40 Entonces
            nSueldo = sueldo - 40
            sueldo = 20 * 40
            eSueldo = nSueldo * extra
            total = sueldo + eSueldo
            Escribir "Mi sueldo esta semana es ", total
        FinSi
    FinSi
	
FinProceso