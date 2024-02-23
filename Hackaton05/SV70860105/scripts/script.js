
class empleado{
    constructor(nombre, skills){
        this.nombre = nombre;
        this.skills = skills;
    }

    skill(marca){
        return this.skills.includes(marca);
    }
}

class celular{
    constructor(sistemaoperativo, marca){
        this.sistemaoperativo = sistemaoperativo;
        this.marca = marca;
        this.abono = 0;
        this.autorizacion = false;
        this.diagnostico = "";
        this.reparacion = 0;
        this.estado = "En Espera";
    }
    
    imei(){
        let i = Math.floor(Math.random() * 5) + 1
        console.log(i);
        if(i == 5){
            return false;
        }
        else{
            return true;
        }
    }

    primerdiagnostico(descripcion, costoreparacion){
        console.log("Se realizo el primer diagnostico");
        this.diagnostico = descripcion;
        this.reparacion = costoreparacion;
    }

    abonado(abono){
        if(abono>= this.reparacion/2){
            return true;
        }
        else{
            return false;
        }
    }
    

    cambiarestado(estado){
        this.estado = estado;
    }
}

class repuesto{
    constructor(descripcion, precio){
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class reparacion{
    constructor(telefono){
        this.telefono = telefono;
        this.repuestos = [];
    }
    
    repuesto(repuesto){
        this.repuestos.push(repuesto);
        console.log("Se puso el repuesto " + repuesto.descripcion);
    }

    costo(){
        let costo = 0;
        for(let index = 0; index < this.repuestos.length; index++){
            costo += this.repuestos[index].precio;
        }
        return costo;
    }
}

let empleado_1= new empleado("Alvaro", ["Android", "Apple"]);
let celular_1 = new celular("Android", "Samsumg");
let rep_pantalla = new repuesto("Nueva Pantalla", 50);
let rep_bateria = new repuesto("Nueva Bateria", 50);
let rep_celular_1 = new reparacion(celular_1);

if(celular_1.imei()){
    console.log("REPARANDO");
    if(empleado_1.skill(celular_1.sistemaoperativo)){
        celular_1.primerdiagnostico("Pantalla Fallando", 100);
        if(celular_1.abonado(50)){
            console.log(celular_1.reparacion);
            console.log("Se abono y procedera a reparar");
            rep_celular_1.repuesto(rep_pantalla);
            let costofinal = celular_1.reparacion + rep_celular_1.costo();
            console.log(costofinal);
        }
        else{
            console.log("No se abono la cantidad necesaria");
        }
    }
    else{
        console.log("Llamaremos a otro empleado");
    }
}
else{
    console.log("IMIE BLOQUEADO");
}