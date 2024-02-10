
let horastrabajadas = prompt("Ingrese sus horas trabajadas")
horastrabajadas = parseInt(horastrabajadas)

let pago=0


let pagoporhora=20


let pagoextra = 0


let nuevopago=0


if (horastrabajadas<=40)
{
    pago = horastrabajadas*pagoporhora

    console.log("su pago es de:" + pago)
}
else if (horastrabajadas>40)
{
    pago = 40*pagoporhora

    pagoporhora = 25
    pagoextra = pagoporhora * (horastrabajadas-40); 
    
    nuevopago= pago + pagoextra;

    console.log("su pago es de: "+nuevopago)
}

