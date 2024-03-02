//Definicion de clase Sucursal
class Sucursal{
    constructor(cod_sucursal, distrito, num_tecnicos)
    {
        this.cod_sucursal = cod_sucursal;
        this.distrito =  distrito;
        this.num_tecnicos = num_tecnicos;
    }
}
//Definicion de clase Tecnico
class Tecnico extends Sucursal{
constructor(cod_sucursal, distrito, tec_nom_apell,dni_tec,cod_tec,especialidad)
{
    super (cod_sucursal,distrito);
    this.tec_nom_apell=tec_nom_apell;
    this.dni_tec = dni_tec;
    this.cod_tec =  cod_tec;
    this.especialidad = especialidad;
}
}
//Definicion de clase Cliente
class Cliente{
    constructor(dni, nombres, apellidos, fecha_nac, sexo, direccion, profesion){
        this.dni=dni
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fecha_nac = fecha_nac;
        this.sexo = sexo;
        this.direccion = direccion;
        this.profesion = profesion;
    }
}
//Definicion de clase Celular
class Celular{
    constructor(dni, cod_celular, marca, modelo, problema, estado){
        this.dni = dni;
        this.cod_celular = cod_celular;
        this.marca = marca;
        this.modelo = modelo;
        this.problema = problema;
        this.estado=estado;
        }
}

let arrTecnicos = [];
let arrClientes = [];
let arrCelulares = [];


var $tableTecnicos = $('#tableTecnicos');
$tableTecnicos.bootstrapTable()

var $tableClientes = $('#tableClientes');
$tableClientes.bootstrapTable()

var $tableCelulares = $('#tableCelulares');
$tableCelulares.bootstrapTable()


function crearTecnico(){
    Swal.fire({
        title: "Asignar Tecnico",
        html: `			
        <div class="form-group">
            <label for="cod_sucursal">Codigo_Sucursal</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="cod_sucursal" id="cod_sucursal"  placeholder="Crea el codigo de la Sucursal asignada"/>
            </div>
        </div>
        <div class="form-group">
            <label for="distrito">Distrito</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="distrito" id="distrito"  placeholder="Ingresa el Distrito de la Sucursal"/>
            </div>
        </div>

        <div class="form-group">
            <label for="tec_nom_apell">Nombres y Apellidos</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="tec_nom_apell" name="tec_nom_apell" placeholder="Ingrese el nombre completo del Tecnico"/>
            </div>
        </div>

        <div class="form-group">
            <label for="dni_tec">DNI Tecnico</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="dni_tec" name="dni_tec" placeholder="Ingresa DNI del Tecnico"/>
                </div>
        </div>

        <div class="form-group">
        <label for="cod_tec">Codigo del Tecnico</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="cod_tec" name="cod_tec" placeholder="Asigne el codigo al tecnico (CodSUcursal-DNI)"/>
            </div>
    </div>
        
    <div class="form-group">
        <label for="especialidad">Especialidad</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="especialidad" name="especialidad" placeholder="Indique la especialidad del Tecnico"/>
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
            let cod_sucursal  = document.getElementById("cod_sucursal").value;
            let distrito  = document.getElementById("distrito").value;
            let tec_nom_apell  = document.getElementById("tec_nom_apell").value;
            let dni_tec  = document.getElementById("dni_tec").value;
            let cod_tec  = document.getElementById("cod_tec").value;
            let especialidad  = document.getElementById("especialidad").value;
            let objTecnico = new Tecnico(cod_sucursal, distrito, tec_nom_apell,dni_tec,cod_tec,especialidad)
            arrTecnicos.push(objTecnico);
            console.log(arrTecnicos)
            
            $tableTecnicos.bootstrapTable('load', arrTecnicos)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function crearCliente(){
    Swal.fire({
        title: "Agregar CLiente",
        html: `			
        <div class="form-group">
            <label for="dni">DNI</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="dni" id="dni"  placeholder="Crea el codigo del Cliente"/>
            </div>
        </div>
        <div class="form-group">
            <label for="nombres">Nombres</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="nombres" id="nombres"  placeholder="Ingresa el nombre"/>
            </div>
        </div>

        <div class="form-group">
            <label for="apellidos">Apellidos</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Ingrese los Apellidos"/>
            </div>
        </div>

        <div class="form-group">
        <label for="fecha_nac">Fecha de Nacimiento</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="fecha_nac" name="fecha_nac" placeholder="Ingrese Fecha de nacimiento (dd-mm-año"/>
        </div>
    </div>

        <div class="form-group">
            <label for="sexo">Sexo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="sexo" name="sexo" placeholder="Ingresa el sexo"/>
                </div>
        </div>

        <div class="form-group">
        <label for="direccion">Direccion</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="direccion" name="direccion" placeholder="Ingrese la direccion"/>
            </div>
    </div>
        
    <div class="form-group">
        <label for="profesion">Profesion</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="profesion" name="profesion" placeholder="Indique la profesion del Cliente"/>
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
            let dni  = document.getElementById("dni").value;
            let nombres  = document.getElementById("nombres").value;
            let apellidos  = document.getElementById("apellidos").value;
            let fecha_nac  = document.getElementById("fecha_nac").value;
            let sexo  = document.getElementById("sexo").value;
            let direccion  = document.getElementById("direccion").value;
            let profesion  = document.getElementById("profesion").value;
            let objCliente = new Cliente(dni, nombres, apellidos, fecha_nac, sexo, direccion, profesion)
            arrClientes.push(objCliente);
            console.log(arrClientes)
            
            $tableClientes.bootstrapTable('load', arrClientes)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function ingresaCelular(){
    Swal.fire({
        title: "Ingresar Celular",
        html: `			
        <div class="form-group">
            <label for="dni">DNI</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="dni" id="dni"  placeholder="Crea el codigo del Cliente"/>
            </div>
        </div>
        <div class="form-group">
            <label for="cod_celular">Codigo_Celular</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="cod_celular" id="cod_celular"  placeholder="Crea el codigo del Celular"/>
            </div>
        </div>

        <div class="form-group">
            <label for="marca">Marca</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="marca" name="marca" placeholder="Ingrese la Marca"/>
            </div>
        </div>

        <div class="form-group">
        <label for="modelo">Modelo</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="modelo" name="modelo" placeholder="Ingrese el modelo"/>
            </div>
        </div>

        <div class="form-group">
            <label for="problema">Problema</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="problema" name="problema" placeholder="Ingresa el problema detectado"/>
                </div>
        </div>
        <div class="form-group">
            <label for="estado">Estado actual</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="estado" name="estado" placeholder="Estado actual del equipo (Trabajo, Reparado o Entregado)"/>
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
            let dni  = document.getElementById("dni").value;
            let cod_celular  = document.getElementById("cod_celular").value;
            let marca  = document.getElementById("marca").value;
            let modelo  = document.getElementById("modelo").value;
            let problema  = document.getElementById("problema").value;
            let estado  = document.getElementById("estado").value;
            let objCelular = new Celular(dni, cod_celular, marca, modelo, problema, estado)
            arrCelulares.push(objCelular);
            console.log(arrCelulares)
            
            $tableCelulares.bootstrapTable('load', arrCelulares)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

function reporte_cel(){
    var codIngresado = prompt("Ingresa el DNI de Cliente:");

var celularesFiltrados = arrCelulares.filter(function(celular) {
    return celular.dni === codIngresado;
});

var cuerpoTabla = document.getElementById('cuerpoTabla');

celularesFiltrados.forEach(function(celular) {
    var fila = document.createElement('tr');

    var celdaCodCliente = document.createElement('td');
    celdaCodCliente.textContent = celular.dni;
    fila.appendChild(celdaCodCliente);

    var celdaCodCelular = document.createElement('td');
    celdaCodCelular.textContent = celular.cod_celular;
    fila.appendChild(celdaCodCelular);

    var celdaMarca = document.createElement('td');
    celdaMarca.textContent = celular.marca;
    fila.appendChild(celdaMarca);

    var celdaModelo = document.createElement('td');
    celdaModelo.textContent = celular.modelo;
    fila.appendChild(celdaModelo);

    var celdaProblema = document.createElement('td');
    celdaProblema.textContent = celular.problema;
    fila.appendChild(celdaProblema);

    var celdaEstado = document.createElement('td');
    celdaEstado.textContent = celular.estado;
    fila.appendChild(celdaEstado);

    cuerpoTabla.appendChild(fila);
});
}




