
let respuesta = "si";
let x=0;
		
while(respuesta = "si")
{

    let num = parseInt(prompt("Diga el numero que quiere usarlo en la tabla de multiplicar"))
    
    do
    {

        let tabla = x * num;
        console.log(num+ " x "+ x + " = "+ tabla)
        x=x+1

    }while (x<=10)

   respuesta = prompt("Desea seguir?  si | no  ")
  
}   
