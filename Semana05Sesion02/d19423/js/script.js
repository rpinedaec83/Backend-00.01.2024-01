/*
Clase Persona
Clase Encuestado -> Persona
Clase Encuestador - > Persona

Clase TipoPregunta {seleccion multiple o texto sino}
Clase Pregunta {enunciado tipoPregunta opciones de respuesta}
Clase Encuesta {Encustado, Encuestador, [preguntas]}
Clase Respuesta{ } 

Clase Reporte{}
*/

class Persona{
    constructor(nombres, apellidos, fechaNacimiento, sexo, direccion){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.direccion = direccion;
    }
}

class Encuestador extends Persona{
    constructor(nombres, apellidos, fechaNacimiento, sexo, direccion, codigo){
        super(nombres, apellidos, fechaNacimiento, sexo, direccion);
        this.codigo = codigo;
    }
    encuestar(encuestado,encuesta){

    }
}

class Encuestado extends Persona{
    constructor(nombres, apellidos, fechaNacimiento, sexo, direccion, nivelEducativo){
        super(nombres, apellidos, fechaNacimiento, sexo, direccion);
        this.nivelEducativo = nivelEducativo;
    }
}

class TipoPregunta{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Pregunta {
    constructor(enunciado, descripcion, tipoPregunta, opciones){
        this.enunciado = enunciado;
        this.descripcion= descripcion;
        this.tipoPregunta = tipoPregunta;
        this.opciones = opciones;
        this.respuesta = "";
    }
}


class Encuesta{
    constructor(fecha, preguntas){
        this.fecha = fecha;
        this.preguntas = preguntas;
    }
}

function crearEncuestador(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}