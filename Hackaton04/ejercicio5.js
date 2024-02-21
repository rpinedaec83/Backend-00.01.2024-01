
let num1=0;
let num2=0;
let operacion=0;

function calculator(num1,num2,operacion)

{

    if (operacion == "+")
    {
        return num1+num2;
    }

    else if (operacion == "-")
    {
        return num1-num2;
    }

    else if (operacion == "/")
    {
        return num1/num2;
    }

    else if (operacion == "*")
    {
        return num1*num2;
    }

    else if (operacion == "%")
    {
        return num1%num2;
    }


    else
    {
        console.log("El parametro no es reconocido");
    }
}



let resultado = calculator(10,2,"*")

console.log(resultado)