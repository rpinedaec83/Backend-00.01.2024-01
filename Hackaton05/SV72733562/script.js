

arrIMEI_Reportado = []


//-----------------------------------------
//--------SEPARADOR - CLASS CLIENTE--------
//-----------------------------------------

class Cliente 
{

    constructor(nombre, autorizacion, abono) 
    {
        this.nombre = nombre;
        this.autorizacion=autorizacion
        this.abono=abono
    }

    autorizarReparacion() 
    {
        if (this.autorizacion==true)
        {
            console.log('Reparación autorizada por el cliente: ' + this.nombre);
        }
        
        else
        {
            console.log('Reparación NO autorizada por el cliente: ' + this.nombre);
            
        }
    }

    realizarAbono() 
    {
        if (this.abono==true)
        {
            console.log('Abono autorizado por el cliente: ' + this.nombre);
            console.log("")
        }
        
        else
        {
            console.log('Abono NO autorizado por el cliente: ' + this.nombre);
            console.log("")
        }
       
    }
}

//-----------------------------------------
//--------SEPARADOR - CLASS TECNICO--------
//-----------------------------------------

class Tecnico 
{

    constructor(nombre, skills) 
    {
        this.nombre = nombre;
        this.skills = skills;
    }

    reparar(telefono, cliente) 
    {
        if (telefono.autorizacion === true && telefono.abono === true && telefono.reportado == false) 
        {
            console.log("El técnico " + this.nombre + " está reparando el teléfono del cliente " + cliente.nombre + " con problema: " + telefono.problema);

            telefono.reparado = true;
            telefono.diagnostico = telefono.problema;

            
            let repuesto;
            switch (telefono.problema) 
            {
                case 'Pantalla rota':
                    repuesto = 'Nueva pantalla';
                    break;
                case 'Batería agotada':
                    repuesto = 'Nueva batería';
                    break;
                default:
                    break;
            }

            telefono.repuestos.push(repuesto);

            console.log("Reparación completada por el técnico: " + this.nombre + ". Se utilizó el repuesto: " + repuesto);
        } 
        
        else 
        {
            console.log("El teléfono de " + cliente.nombre + " no tiene autorización y/o abono o verificación para la reparación.");
        }
    }
}

//-----------------------------------------
//--------SEPARADOR - CLASS TECNICO--------
//-----------------------------------------

class Telefono 
{
    constructor(numeroSerie, imei, marca, problema, autorizacion, abono, reportado) 
    {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.reportado = reportado;
        this.diagnostico = " Se ha encontrado " + problema;
        this.reparado = false;
        this.autorizacion = autorizacion;
        this.abono = abono;
        this.problema = problema;
        this.repuestos = [];
    }

    verificarReparacion() 
    {
        let puedeRepararse;

        if (this.reportado === false) 
        {
            puedeRepararse = true;
            console.log("El teléfono con número de serie " + this.numeroSerie + " y IMEI " + this.imei + " no está reportado y puede ser reparado.");
        } 

        else 
        {
            puedeRepararse = false;
            console.log("El teléfono con número de serie " + this.numeroSerie + " y IMEI " + this.imei + " está reportado y NO puede ser reparado.");
            arrIMEI_Reportado.push(this.imei);
        }

        return puedeRepararse;
    }

    pasarPrimeraRevision(diagnostico) 
    {
        console.log("El telefono con número de serie " + this.numeroSerie + " y IMEI " + this.imei + " ha pasado por la primera revisión con diagnóstico:" + diagnostico);
        this.diagnostico = diagnostico;
    }

    recibirAutorizacionYAbono() 
    {
        if (this.autorizacion === true && this.abono === true && this.reportado ==false) 
        {
            console.log('Autorización y abono recibidos para reparar el teléfono con número de serie ' + this.numeroSerie + ' y IMEI ' + this.imei);
            return true;
        } 

        else 
        {
            console.log('Falta autorización o abono o verificar para reparar el teléfono con número de serie ' + this.numeroSerie + ' y IMEI ' + this.imei);
            return false;
        }
    }
}


const clientes = [];


const nombresClientes = ["Javier Prado", "Santiago de Surco"];

for (let i = 0; i < nombresClientes.length; i++) 
{

    if(i%2==0)
    {
        clientes[i] = new Cliente(nombresClientes[i], true, false);
        clientes[i].autorizarReparacion();
        clientes[i].realizarAbono();
    }
    else
    {
        clientes[i] = new Cliente(nombresClientes[i], true, true);

        clientes[i].autorizarReparacion();
        clientes[i].realizarAbono();
    }
   
}



const tecnico1 = new Tecnico("Tecnico Pedro", ["Samsung"]);
const tecnico2 = new Tecnico("Tecnica Andrea", ["Motorola"]);

const telefono1 = new Telefono('12905', '832059843905068', 'Samsung', 'Pantalla rota', true, false, true);
telefono1.pasarPrimeraRevision(telefono1.diagnostico);
const telefono2 = new Telefono('33221', '724920466435577', 'Motorola', 'Batería agotada', true, true, false);
telefono2.pasarPrimeraRevision(telefono2.diagnostico);



tecnico1.reparar(telefono1, clientes[0]);
tecnico2.reparar(telefono2, clientes[1]);

telefono1.verificarReparacion();
telefono2.verificarReparacion();
// aca muestro los resultados a consola:
console.log("")
console.log("")
console.log("Cliente 1: " + nombresClientes[0]);
console.log("Cliente 2: " + nombresClientes[1]);
console.log("")
console.log("Tecnico 1: " + tecnico1.nombre)
console.log("Tecnico 2: " + tecnico2.nombre)
console.log("")
console.log('Teléfono 1:', telefono1);
console.log('Teléfono 2:', telefono2);

console.log("")
console.log("")
console.log("")
console.log("CODIGOS DE IMEI  REPORTADOS: " + arrIMEI_Reportado[0])


