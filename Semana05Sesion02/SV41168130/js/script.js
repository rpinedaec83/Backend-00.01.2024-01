class Persona {
    constructor(nombre, apellido, fechaNacimiento, sexo, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.direccion = direccion;
    }
}

class Encuestador extends Persona {
    constructor (nombre, apellido, fechaNacimiento, sexo, direccion, codigo, empresa){
        super(nombre,apellido,fechaNacimiento, sexo, direccion);
        this.codigo = codigo;
        this.empresa = empresa;
    }

    encuestar(encuestado, encuesta){

    }
}

class Encuestado extends Persona {
    constructor(nombre, apellido, fechaNacimiento, sexo, direccion, nivelEducativo, nivelSocioEconomico){
        super(nombre, apellido, fechaNacimiento, sexo, direccion);
        this.nivelEducativo = nivelEducativo;
        this.nivelSocioEconomico = nivelSocioEconomico;
    }
}

class TipoPregunta{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Pregunta{
    constructor(enunciado, descripcion, tipoPregunta, opciones){
        this.enunciado = enunciado;
        this.descripcion = descripcion;
        this.tipoPregunta = tipoPregunta;
        this.opciones = opciones;
        this.respuesta = '';
    }
}

class Encuesta{
    constructor(fecha, preguntas){
        this.fecha = fecha;
        this.preguntas = preguntas;
    }
}

function crearEncuestador{
    
}