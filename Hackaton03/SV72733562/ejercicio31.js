
let n = 0 
let numpares=0
let numimpares=0
let sumpares= 0
let sumimpares=0
	
	do
    {

		let num = parseInt(prompt("Ingrese el numero: "));
		
        if(num%2==0)
        {
        sumpares=sumpares+num;
        numpares=numpares+1;
        }
        else
        {
        sumimpares=sumimpares+num;
		numimpares=numimpares+1
        }

		n=n+1

    }while(n<=10)
	
	mediapares=sumpares/numpares
	mediaimpares=sumimpares/numimpares
	console.log("Media numeros pares: "+ mediapares)
	console.log("Media numeros impares: "+ mediaimpares)
	
	console.log("Suma de ambas medias:" + mediapares+mediaimpares)
	