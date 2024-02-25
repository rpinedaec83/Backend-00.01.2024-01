import { Sucursal } from './sucursal.js'
import { Tecnico } from './tecnico.js'
import { Celular } from './celular.js'
import { Ticket } from './ticket.js';

class Compania {
    sucursales = [];
    celulares = [];
    tickets = [];

    constructor(codigo,nombre,nroruc) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nroruc = nroruc;
    }

    agregarSucursales() {
        const sucursal_1 = new Sucursal(1,'Chorrillos');
        this.sucursales.push(sucursal_1);
        sucursal_1.tecnicos.push(new Tecnico(1,'Roberto Ramirez','ANDROID',4488));
        sucursal_1.tecnicos.push(new Tecnico(2,'Gabriel Melendez','IOS',7566));
        const sucursal_2 = new Sucursal(2,'Miraflores');
        this.sucursales.push(sucursal_2);
        sucursal_2.tecnicos.push(new Tecnico(3,'Melissa Lopez','ANDROID',2233));
        sucursal_2.tecnicos.push(new Tecnico(4,'Manuel Segura','IOS',7755));
    }

    agregarCelulares() {
        this.celulares.push(new Celular('sz45dxvc54','Motorola','G8 Power','ANDROID',true,[
            {fecha: '12/02/2024 20:00:05', incidente: 'Celular fue hurtado en transporte público.'}
        ]));
        this.celulares.push(new Celular('5sa4dv6s4d','Samsung','S4 Lite','ANDROID',false,[]));
        this.celulares.push(new Celular('5s64db46vs','Iphone','12 pro max','IOS',false,[]));
    }

    agregarTickets() {
        this.tickets.push(new Ticket(1,'25/12/2023 08:25:00','5sa4dv6s4d','Celular en buen estado.','INGRESADO',2,3));
    }

    buscarCelularXIMEI(codigoimei) {
        const celular = this.celulares.find(cr => cr.imei == codigoimei);
        return celular;
    }

    buscarSucursal(codigosucursal) {
        const sucursal = this.sucursales.find(suc => suc.codigo == codigosucursal);
        return sucursal;
    }

    mostrarNombreSucursal(codigosucursal) {
        const sucursal = this.buscarSucursal(codigosucursal);
        return `${this.nombre} - ${sucursal.nombre}`;
    }

    loguearTecnico(codigosucursal,codigotecnico,clavetecnico) {
        const sucursal = this.buscarSucursal(codigosucursal);
        const tecnico = sucursal.tecnicos.find(tec => tec.codigo == codigotecnico && tec.clave == clavetecnico);
        return tecnico;
    }

    listarSucursales() {
        return this.sucursales;
    }

    listarTickets() {
        return this.tickets;
    }
}

const compania = new Compania(1,'TelefoniaSAC',20108599687);
compania.agregarSucursales();
compania.agregarCelulares();
compania.agregarTickets();

export { compania }