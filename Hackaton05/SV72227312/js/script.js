class Persona{
    constructor(nombres, apellidos){
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
}

class Equipo {
    constructor(marca) {
      this.marca = marca;
    }
}

class Cliente extends Persona{
    constructor(nombres, apellidos, telefono){
        super(nombres, apellidos);
        this.telefono = telefono;
    }
    consultar(){
        alert('Mi celular tiene los siguientes problemas.');
    }

    pagar(){
        alert('El cliente paga el servicio.');
    }

    irse(){
        alert('El cliente se retira preocupado.')
    }
}

class Tecnico extends Persona{
    constructor(nombres, apellidos, codigo, precio){
        super(nombres, apellidos);
        this.codigo = codigo;
        this.precio = precio;
    }

    analizar(){
        alert('Estamos analizando el celular.')
    }

    reparar(){
        alert('Estamos reparando el celular')
    }

    reportar(){
        alert('Hemos decomizado el celular. Llamando a los efectivos policiales.')
    }
}



class Celular extends Equipo {
    constructor(marca, sistemaOperativo, imei, estado, serie) {
      super(marca);
      this.sistemaOperativo = sistemaOperativo;
      this.imei = imei;
      this.estado = estado;
      this.serie = serie;
    }
  
    // Método de ejemplo
    obtenerDescripcion() {
      // Llamada al método de la clase padre utilizando super
      return `${super.obtenerDescripcion()}, Sistema operativo: ${this.sistemaOperativo}`;
    }
}

class Diagnostico {
    constructor(diagnostico){
        this.diagnostico = diagnostico;
    }
}

let arrClientes = [];
let arrTecnicos = [];
let arrayReportados = [];
let arrCelular = [];
let arrDiagnostico = [];


// Definimos los técnicos
let tecnico1 = new Tecnico("Juan Francisco","Perez Maldonado","17154545",500);
let tecnico2 = new Tecnico("Isabel Susana","Sanchez Herrera","45369846",500);
let tecnico3 = new Tecnico("José Pablo","Prado Marquez","36134965",250);
let tecnico4 = new Tecnico("Rosa Maria","Gonzales Torres","36492315",125);
let tecnico5 = new Tecnico("Alfonso Carlos","Suarez Hernandez","84313365",125);

arrTecnicos.push(tecnico1, tecnico2, tecnico3, tecnico4, tecnico5);
console.log(arrTecnicos);

var $tableCliente = $('#tableCliente');
$tableCliente.bootstrapTable()

var $tableReportados = $('#tableReportados');
$tableReportados.bootstrapTable()

var $tableDiagnostico = $('#tableDiagnostico');
$tableDiagnostico.bootstrapTable()

function hacerConsulta(){
    Swal.fire({
        title: "Ingrese su información correspondiente.",
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
            <label for="username">telefono</label>
                <div class="input-group">
                
                    <input type="text" class="form-control" id="telefono" name="username" placeholder="Ingresa su nro de telefono"/>
                </div>
        </div>
        <div class="form-group">
        <label for="username">marca</label>
            <div class="input-group">
            
                <input type="text" class="form-control" id="marca" name="username" placeholder="Ingresa la marca"/>
            </div>
        </div>
        <div class="form-group">
        <label for="username">sistemaOperativo</label>
            <div class="input-group">
            
                <input type="text" class="form-control" id="sistemaOperativo" name="username" placeholder="Ingrese (IOS o ANDROID)"/>
            </div>
        </div>
        <div class="form-group">
        <label for="username">serie</label>
            <div class="input-group">
            
                <input type="text" class="form-control" id="serie" name="username" placeholder="Ingresa el Nro de serie"/>
            </div>
        </div>
        <div class="form-group">
        <label for="username">imei</label>
            <div class="input-group">
            
                <input type="text" class="form-control" id="imei" name="username" placeholder="Ingrese el imei"/>
            </div>
        </div>
        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Siguiente",
        denyButtonText: `Salir`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let nombres  = document.getElementById("nombres").value;
            let apellidos  = document.getElementById("apellidos").value;
            let telefono  = document.getElementById("telefono").value;
            let marca = document.getElementById("marca").value;
            let sistemaOperativo = document.getElementById("sistemaOperativo").value;
            let serie = document.getElementById("serie").value;
            let imei = document.getElementById("imei").value;
            let objCliente = new Cliente(nombres,apellidos,telefono);
            let objCelular = new Celular(marca, sistemaOperativo, imei, true, serie);
            let objFinal = Object.assign({}, objCliente, objCelular);
            asignarImeiYReportar(objCelular);
            //let objCelular = new Celular(IMEI, estado);
            arrClientes.push(objFinal);
            //arrCelular.push(objCelular);
            console.log(arrClientes);
            $tableCliente.bootstrapTable('load', arrClientes);
          
        } else if (result.isDenied) {
          Swal.fire("No se realizó una consulta.");
        }
      });
}

function asignarImeiYReportar(a) {
    // Generar un número aleatorio entre 1 y 4
    let aleatorio = Math.floor(Math.random() * 2) + 1;
    
    // Si el número aleatorio es 4, marcar el IMEI como reportado
    if(aleatorio === 2) {
        Celular.estado = true;
        arrayReportados.push(a);
        $tableReportados.bootstrapTable('load', arrayReportados);
        console.log(arrayReportados);
        alert("Su celular fue reportado como robado");
    } else {
        Celular.estado = false;
        alert("Su celular no fue reportado, puede continuar.");
        let aleatorio1 = Math.floor(Math.random() * 4) + 1;
        let objDiagnostico;
        switch(aleatorio1){
            case 1:
                objDiagnostico = new Diagnostico("No prende");
                break;
            case 2:
                objDiagnostico = new Diagnostico("Se apaga solo");
                break;
            case 3:
                objDiagnostico = new Diagnostico("Se recalienta");
                break;
            case 4:
                objDiagnostico = new Diagnostico("Esta bloqueado");
                break;
        }

        arrDiagnostico.push(objDiagnostico);
        $tableDiagnostico.bootstrapTable('load', arrDiagnostico);
        seleccionTecnico(a);

    }
    console.log(Celular);
}

function seleccionTecnico(a){
    Swal.fire({
        title: "Seleccione el técnico de su preferencia.",
        html: `			
        <div id="container">
            <select id="ejercicioSelector">
                <option value="Juan Francisco">Juan Francisco</option>
                <option value="Isabel Susana">Isabel Susana</option>
                <option value="José Pablo">José Pablo</option>
                <option value="Rosa Maria">Rosa Maria</option>
                <option value="Alfonso Carlos">Alfonso Carlos</option>
            </select>
            <button onclick="Descripcion()">Ver Descripción</button>
        </div>
        <div id="descripcionContainer"></div>
        <script src="js/script.js"></script>
        `,
      }).then((result) => {
        if (result.isConfirmed) {
            let precio;
            switch (a) {
                case "Juan Francisco":
                    android = 1;
                    ios = 0.25;
                    precio = tecnico1.precio;
                    //diagnostico();
                    break;
                case "Isabel Susana":
                    android = 0.25;
                    ios = 1;
                    precio = tecnico2.precio;
                    //diagnostico();
                    break;
                case "José Pablo":
                    android = 0.5;
                    ios = 0.5;
                    precio = tecnico3.precio;
                    //diagnostico();
                    break;
                case "Rosa Maria":
                    android = 0.5;
                    ios = 0.25;
                    precio = tecnico4.precio;
                    //diagnostico();
                    break;
                case "Alfonso Carlos":
                    android = 0.25;
                    ios = 0.5;
                    precio = tecnico5.precio;
                    //();
                    break;
            }
            window.scrollTo(0, (document.body.scrollHeight - window.innerHeight) / 2);
            decision = prompt("Para proceder con la reparación se debe abonar el 50% y dar su autorización (si/no)");
            if (decision == "si"){
                let resultado;
                switch (Celular.marca){
                    case "Android":
                        resultado = android*Math.floor(Math.random() * 50) + 50;
                    case "IOS":
                        resultado = ios*Math.floor(Math.random() * 50) + 50;
                }
                console.log(precio);
                console.log(tecnico1.precio);
                if(resultado >= 50){
                    alert("El celular fue reparado, el precio total de reparación fue de "+precio+" soles.");
                }else{
                    alert("El celular no pudo ser reparado, el precio de la consulta es" + precio/2 + " soles.")
                }
            }
            else{
                alert("Eso sería todo de nuestra parte. Hasta pronto.")
            }
        } else if (result.isDenied) {
          Swal.fire("No se seleccionó un técnico");
        }
      });
}
    
function Seleccionar(){
        let selector = document.getElementById("ejercicioSelector");
        let ejercicio = selector.value; // Obtenemos el valor seleccionado
    
        // Ejecutar la función correspondiente según la selección
        switch (ejercicio) {
            case "Juan Francisco":
                android = 1;
                ios = 0.25;
                break;
            case "Isabel Susana":
                android = 0.25;
                ios = 1;
                //diagnostico();
                break;
            case "José Pablo":
                android = 0.5;
                ios = 0.5;
                //diagnostico();
                break;
            case "Rosa Maria":
                android = 0.5;
                ios = 0.25;
                //diagnostico();
                break;
            case "Alfonso Carlos":
                android = 0.25;
                ios = 0.5;
                //diagnostico();
                break;
            default:
                alert("Seleccione un ejercicio válido");
        }
        window.scrollTo(0, (document.body.scrollHeight - window.innerHeight) / 2);
}

function Descripcion(){
    let selector = document.getElementById("ejercicioSelector");
    let ejercicio = selector.value; // Obtenemos el valor seleccionado

    // Ejecutar la función correspondiente según la selección
    switch (ejercicio) {
        case "Juan Francisco":
            alert("Nivel en Android: Experto\nNivel en IOS: Básico\nprecio = 500")
            break;
        case "Isabel Susana":
            alert("Nivel en Android: Básico\nNivel en IOS: Experto\nprecio = 500");
            break;
        case "José Pablo":
            alert("Nivel en Android: Intermedio\nNivel en IOS: Intermedio\nprecio = 250");
            break;
        case "Rosa Maria":
            alert("Nivel en Android: Intermedio\nNivel en IOS: Básico\nprecio = 125");
            break;
        case "Alfonso Carlos":
            alert("Nivel en Android: Básico\nNivel en IOS: Intermedio\nprecio = 125");
            break;
        default:
            alert("Seleccione un ejercicio válido");
    }
    window.scrollTo(0, (document.body.scrollHeight - window.innerHeight) / 2);
}

/*function diagnostico(b){
    let resultado;
    switch (b) {
        case "Android":
            resultado = android;
            break;
        case "IOS":
            resultado = ios;
            break;
    }

    console.log(resultado);
    let aleatorio3 = Math.floor(Math.random() * 50) + 50;
    if (resultado*aleatorio3 >= 50){
        alert("El celular fue reparado.")
    } else{
        alert("El celular no pudo ser reparado.")
    }
}*/