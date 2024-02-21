
let arrModelos = [];

var $table = $('#table');

$table.bootstrapTable({data:arrModelos})

function agregarModelo(){
      Swal.fire({
        title: "Agregar Modelos",
        html: `			
        <div class="form-group">
            <label for="name">Nombre</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="nombre"  placeholder="Ingresa el Nombre"/>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Descripcion</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="descripcion" name="descripcion" placeholder="Ingrese la descripcion"/>
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