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

let arrEncuestadores = [];

var $table = $('#table');

$table.bootstrapTable({data:arrEncuestadores})
//nombre, apellido, fechaNacimiento, sexo, direccion, codigo, empresa
function crearEncuestador(){
      Swal.fire({
        title: "Agregar Encuestadores",
        html: `			
        <div class="form-group">
            <label for="name">Nombre</label>
                <div class="input-group">
                <input type="text" class="form-control" name="name" id="nombre"  placeholder="Ingresa el Nombre"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Apellido</label>
                <div class="input-group">
                <input type="text" class="form-control" name="name" id="apellido"  placeholder="Ingresa el Apellido"/>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Fecha de Nacimiento</label>
                <div class="input-group">
                <input type="text" class="form-control" id="fechaNacimiento" name="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento"/>
            </div>
        </div>

        <div class="form-group">
            <label for="username">Escala</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="escala" name="username" placeholder="Ingresa la escala"/>
                </div>
        </div>

        <div class="form-group">
            <label for="password">Tipo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="tipo" name="password" placeholder="Ingresa el Tipo"/>
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
            let txtnombre  = document.getElementById("nombre").value;
            let txtdescripcion  = document.getElementById("descripcion").value;
            let txtescala  = document.getElementById("escala").value;
            let txttipo  = document.getElementById("tipo").value;
            let objModelo={
                nombre: txtnombre,
                descripcion:txtdescripcion,
                escala: txtescala,
                tipo: txttipo
            };
            
            arrModelos.push(objModelo);
            console.log(arrModelos)
            
            $table.bootstrapTable('load', arrModelos)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}