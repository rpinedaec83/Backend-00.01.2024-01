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
let arrEncuestadores = [];
let arrEncuestados = [];
let arrTipoPregunta = [];
let arrPregunta = [];
let arrEncuestas = [];

var $tableEncuestador = $('#tableEncuestador');
$tableEncuestador.bootstrapTable()

var $tableEncuestado = $('#tableEncuestado');
$tableEncuestado.bootstrapTable()
function crearEncuestador(){
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
                   
                    <input type="text" class="form-control" id="fechaNacimiento" name="descripcion" placeholder="Ingrese la fecha de nacimiento"/>
            </div>
        </div>

        <div class="form-group">
            <label for="username">Sexo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="sexo" name="username" placeholder="Ingresa el sexo"/>
                </div>
        </div>

        <div class="form-group">
        <label for="username">Direccion</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="direccion" name="username" placeholder="Ingresa la direccion"/>
            </div>
    </div>
        
    <div class="form-group">
        <label for="username">Codigo</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="codigo" name="username" placeholder="Ingresa el codigo"/>
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
            console.log(arrEncuestadores)
            
            $tableEncuestador.bootstrapTable('load', arrEncuestadores)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
function crearEncuestado(){
    Swal.fire({
        title: "Agregar Encuestado",
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
                   
                    <input type="text" class="form-control" id="fechaNacimiento" name="descripcion" placeholder="Ingrese la fecha de nacimiento"/>
            </div>
        </div>

        <div class="form-group">
            <label for="username">Sexo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="sexo" name="username" placeholder="Ingresa el sexo"/>
                </div>
        </div>

        <div class="form-group">
        <label for="username">Direccion</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="direccion" name="username" placeholder="Ingresa la direccion"/>
            </div>
    </div>
        
    <div class="form-group">
        <label for="username">Codigo</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="nivelEducativo" name="username" placeholder="Ingresa el nivel Educativo"/>
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
            let nivelEducativo  = document.getElementById("nivelEducativo").value;
            let objEncuestado = new Encuestado(nombres,apellidos,fechaNacimiento,sexo,direccion,nivelEducativo)
            arrEncuestados.push(objEncuestado);
            console.log(arrEncuestados)
            
            $tableEncuestado.bootstrapTable('load', arrEncuestados)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}


function crearTipoPregunta(){
    Swal.fire({
        title: "Agregar Encuestado",
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
            console.log(arrTipoPregunta)
            
           // $tableEncuestado.bootstrapTable('load', arrEncuestados)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function crearPregunta(){
    
    Swal.fire({
        title: "Agregar Pregunta",
        html: `			
        <div class="form-group">
            <label for="name">enunciado</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="enunciado"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">descripcion</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="descripcion"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>
        <div class="form-group">
        <label for="name">tipoPregunta</label>
            <div class="input-group">
            <select name="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
            <input type="text" class="form-control" name="name" id="tipoPregunta"  placeholder="Ingresa los Nombres"/>
        </div>
    </div>
    <div class="form-group">
            <label for="name">opciones</label>
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
            //enunciado, descripcion, tipoPregunta, opciones
            let enunciado  = document.getElementById("enunciado").value;
            let descripcion  = document.getElementById("descripcion").value;
            let tipoPregunta  = document.getElementById("tipoPregunta").value;
            let opciones  = document.getElementById("opciones").value;
            let objPregunta = new Pregunta(enunciado,descripcion,tipoPregunta,opciones)
            arrPregunta.push(objPregunta);
            console.log(arrPregunta)
            
           // $tableEncuestado.bootstrapTable('load', arrEncuestados)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function crearEncuesta(){
    Swal.fire({
        title: "Agregar Encuesta",
        html: `			
        <div class="form-group">
            <label for="name">Fecha</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="fecha"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Fecha</label>
                <div class="input-group">
                <select name="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
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
            let fecha  = document.getElementById("fecha").value;
            let objEncuesta = new Encuesta(fecha,arrPregunta)
            arrEncuestas.push(objEncuesta);
            console.log(arrEncuestas)
            
           // $tableEncuestado.bootstrapTable('load', arrEncuestados)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
