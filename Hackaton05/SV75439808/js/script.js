class Cliente{
    constructor(nombres, apellidos, dni){
        this.
    }
}

var $tableCliente = $("#tableCliente");
$tableCliente.bootstrapTable();

function crearCliente() {
  Swal.fire({
    title:"Administración de Clientes",
    html: `
    <div class="form-group">
        <label for="name">Nombres</label>
            <div class="input-group">
            <input type="text" class="form-control" name="name" id="nombres"  placeholder="Ingresa los Nombres"/>
        </div>
    </div>
    <div class="form-group">
        <label for="lastname">Apellidos</label>
            <div class="input-group">
            <input type="text" class="form-control" name="lastname" id="apellidos"  placeholder="Ingresa los Apellidos"/>
        </div>
    </div>
    <div class="form-group">
        <label for="dni">Apellidos</label>
            <div class="input-group">
            <input type="number" class="form-control" name="docIde" id="dni"  placeholder="Ingresa el Número de Documento de Identidad"/>
        </div>
    </div>
    `,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `Salir`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      let nombres = document.getElementById("nombres").value;
      let apellidos = document.getElementById("apellidos").value;
      let dni = document.getElementById("dni").value;
      let objCliente = new Cliente(
        nombres,
        apellidos,
        dni
      );
      arrEncuestadores.push(objEncuestador);
      console.log(arrEncuestadores);

      $tableEncuestador.bootstrapTable("load", arrEncuestadores);
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}


