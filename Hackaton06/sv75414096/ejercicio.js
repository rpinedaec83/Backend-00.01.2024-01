let jsonCliente = [];

function init() {
    let localData = localStorage.getItem("cliente");
    console.log(localData);
    if (localData !== null) {
        jsonCliente = JSON.parse(localData);
    }
}

init();

// Definir $table antes de usarla en el evento
let $table = $('#tblDispositivos');

// Inicializar la tabla
$table.bootstrapTable({ data: [] });

let arrCliente = []; // Declarar el array arrCliente

jsonCliente.forEach(element => {
    let objDispositivo = new Dispositivo(element.iMei, element.nroSerie); // Corregido aquí
    arrCliente.push(new Cliente(
        element.nombre,
        element.apellido,
        element.nroIdentificacion,
        element.nroTelefono,
        element.direccion,
        objDispositivo
    ));
});

let arrDispositivos = arrCliente.map(cliente => cliente.dispositivo);

// eventos de los botones
document.getElementById("recibirDispositivo").addEventListener("click", () => {
    admin.recibirDispositivo(); // Llamada a la función en el contexto del administrador
    guardarData("cliente", arrCliente);
    console.log(arrCliente);
    arrCliente.forEach(element => {
        arrDispositivos.push(element.dispositivo);
    });
    $table.bootstrapTable('load', arrDispositivos);
});

function guardarData(nombre, data) {
    //cargar la info en el localstorage
    localStorage.setItem(nombre, JSON.stringify(data));
}

function borrarData() {

    guardarData("cliente", null);
    arrCliente = [];
    arrDispositivos = [];
    $table.bootstrapTable('load', arrDispositivos)
}

$table.on('click-row.bs.table', function (row, $element, field) {
    console.log($element);
    if (confirm(`Desea modificar el estado del dispositivo ${$element.iMei}???`)) {
        let objDispositivo = buscarDispositivo($element.iMei);
        if (objDispositivo.revisarReporteRobo()) {
            alert("El dispositivo está reportado como robado");
        } else {
            console.log("No está robado");
            objDispositivo.recibirPago();
            objDispositivo.iniciarDiagnostico();
        }
    }
    $table.bootstrapTable('load', arrDispositivos);
});

function buscarDispositivo(imei) {
    for (let index = 0; index < arrDispositivos.length; index++) {
        const element = arrDispositivos[index];
        if (element.iMei === imei) {
            return element;
        }
    }
}