/*
Clase Persona
Clase Encuestado -> Persona
Clase Encuestador -> Persona

Clase TipoPregunta {seleccion multiple o texto sino}
Clase Pregunta {enunciado tipoPregunta opciones de respuesta}
Clase Encuesta {Encuestado, Encuestador, [preguntas]}
Clase Respuesta { }

Clase Reporte {}
*/

class Persona{
    constructor(nombres,apellidos,fechaNacimiento,sexo,direccion){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo
        this.direccion = direccion
    }
};


class Encuestador extends Persona{
    constructor(nombres,apellidos,fechaNacimiento,sexo,direccion,codigo){
        super(nombres,apellidos,fechaNacimiento,sexo,direccion);
        this.codigo = codigo
    }
}

class Encuestado extends Persona{
    constructor(nombres,apellidos,fechaNacimiento,sexo,direccion,nivelEducativo){
        super(nombres,apellidos,fechaNacimiento,sexo,direccion,nivelEducativo);
        this.nivelEducativo = nivelEducativo
    }
}

class TipoPregunta{
    constructor(tipo){
        this.tipo = tipo
    }
}

class Pregunta {
    constructor(enunciado, descripcion, TipoPregunta, opciones){
        this.enunciado = enunciado;
        this.descripcion = descripcion;
        this.TipoPregunta = TipoPregunta;
        this.opciones = opciones;
        this.respuesta = ""
    }
}

class Encuesta{
    constructor(fecha, preguntas){
        this.fecha = fecha;
        this.preguntas = preguntas;
    }
}

let arrEncuestadores = [];
let arrEncuestados = [];
let arrTipoPregunta = [];
let arrPregunta = [];



var $tableEncuestador = $('#tableEncuestador')
$tableEncuestador

function crearEncuestador() {
    Swal.fire({
        title: "Agregar Encuestador",
        html: `			
        <div class="form-group">
            <label for="name">Nombres</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="nombres"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>

        <div class="form-group">
            <label for="name">Apellidos</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="apellidos"  placeholder="Ingresa los Apellidos"/>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Fecha de Nacimiento</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="fechaNacimiento" name="descripcion" placeholder="Ingrese la fecha de nacimiento."/>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Sexo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="sexo" name="descripcion" placeholder="Ingrese la fecha de nacimiento."/>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Sexo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="fechaNacimiento" name="descripcion" placeholder="Ingrese su fecha de nacimiento."/>
            </div>
        </div>

        <div class="form-group">
        <label for="name">Direccion</label>
            <div class="input-group">
            
            <input type="text" class="form-control" name="name" id="direccion"  placeholder="Ingresa su direccion."/>
        </div>
    </div>

    <div class="form-group">
        <label for="email">Codigo</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="codigo" name="codigo" placeholder="Ingrese el codigo."/>
        </div>
    </div>


        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let nombres  = document.getElementById("nombres").value;
            let apellidos  = document.getElementById("apellidos").value;
            let fechaNacimiento  = document.getElementById("fechaNacimiento").value;
            let sexo  = document.getElementById("sexo").value;
            let direccion  = document.getElementById("direccion").value;
            let codigo  = document.getElementById("codigo").value;
            let objEncuestador = new Encuestador(nombres,apellidos,fechaNacimiento,sexo,direccion,codigo)
            arrEncuestadores.push(objEncuestador);
            console.log(arrEncuestadores);
           // escribirJson("encuestadores.json",arrEncuestadores);
            $tableEncuestadores.bootstrapTable('load', arrEncuestadores)

          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function crearTipoPregunta() {
    Swal.fire({
        title: "Agregar Tipo Pregunta",
        html: `			
        <div class="form-group">
            <label for="name">Tipo Pregunta</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="tipoPregunta"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>

        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let tipoPregunta  = document.getElementById("tipoPregunta").value;
            let objTipoPregunta = new TipoPregunta(tipoPregunta)
            arrTipoPregunta.push(objTipoPregunta);
            console.log(arrTipoPregunta);
            //escribirJson("encuestadores.json",arrEncuestadores);
            //$tableEncuestadores.bootstrapTable('load', arrEncuestadores)

          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function crearPregunta() {
    Swal.fire({
        title: "Agregar Tipo Pregunta",
        html: `			
        <div class="form-group">
            <label for="name">Enunciado</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="enunciado"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>

        <div class="form-group">
            <label for="name">Descripcion</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="descripcion"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>

        <div class="form-group">
            <label for="name">Tipo Pregunta</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="tipoPregunta"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>

        <div class="form-group">
            <label for="name">Opciones</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="opciones"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>

        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let enunciado  = document.getElementById("enunciado").value;
            let descripcion  = document.getElementById("descripcion").value; 
            let tipoPregunta  = document.getElementById("tipoPregunta").value;
            let opciones  = document.getElementById("opciones").value;
            let objPregunta = new Pregunta(enunciado,descripcion,tipoPregunta,opciones)
            arrPregunta.push(objPregunta);
            console.log(arrPregunta);
            //$tableEncuestadores.bootstrapTable('load', arrEncuestadores)

          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

