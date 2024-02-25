class Ticket {
    constructor(codigo,fecha,imei,diagnostico,estado,codsucursal,codtecnico) {
        this.codigo = codigo;
        this.fecha = fecha;
        this.imei = imei;
        this.diagnostico = diagnostico;
        this.estado = estado;
        this.codsucursal = codsucursal;
        this.codtecnico = codtecnico;
    }
}

export { Ticket }