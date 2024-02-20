let cliente = {
    numId: "72227312",
    tipoId: "DNI",
    nombre: "Henry",
    apellido: "Gómez",
    fechaNacimiento: Date("1998-04-29"),
    sexo: "Masculino",

    comprar(){
        console.log(`El cliente `)
    },
    devolver(){

    }
}

let proveedor = {
    codigo: "PROV123",
    nombre: "Juan",
    apellido: "Ramirez",
    fechaNacimiento: Date("1995-08-12"),
    telefono: "123456789",
    correo: "JuanR@gmail.com",
    productos: [], // Lista de productos vacía inicialmente

    agregarProducto(producto) {
        this.productos.push(producto);
    },

    darProductos() {

    },
    recibirPagos() {

    }
};

let armario = {
    material: "Madera",
    altura: 180, 
    anchura: 90, 
    profundidad: 50, 
    color: "Marrón",
    capacidad: 5, 
    precio: 200, 

    abrir() {

    },
    cerrar() {

    }
};

let celular = {
    marca: "Samsung",
    modelo: "Galaxy S20",
    color: "Plata",
    pantalla: "6 pulgadas",
    memoria: "128 GB",
    precio: 800,

    llamar(numero) {

    },
    enviarMensaje(numero, mensaje) {

    }
};

let aspiradora = {
    marca: "Thomas",
    modelo: "V11 Absolute",
    tipo: "Inalámbrica",
    potencia: "3000 vatios",
    durBatería: "80 minutos",
    precio: 500, 

    encender() {
        
    },
    apagar() {

    }
};

let helado = {
    sabor: "Chocolate",
    tipo: "Crema",
    ingredientes: ["Leche", "Azúcar", "Cacao"],
    precio: 3, 

    servir() {
        
    },
    comer() {
        
    }
};

let maquinaRegistradora = {
    marca: "SAGAS",
    modelo: "SAGAS XR8",
    pantallaTactil: true,
    conexiones: ["USB", "Ethernet"],
    precio: 1500,

    cobrar() {

    },
    imprimirTicket() {

    }
};

// Agregando productos al objeto proveedor
proveedor.agregarProducto(armario);
proveedor.agregarProducto(celular);
proveedor.agregarProducto(aspiradora);
proveedor.agregarProducto(helado);
proveedor.agregarProducto(maquinaRegistradora);