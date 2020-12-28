
function prueba()
{



var binario=document.getElementById('ingresado').value;
var digitos= binario.length;




var selectIngresado=document.getElementById('selectIngresado').value;
var selectResultado=document.getElementById('selectResultado').value;

if(selectIngresado=="Binario" && selectResultado=="Decimal")
	resultado.value=validarBinario(binario);
else if(selectIngresado=="Hexadecimal" && selectResultado=="Decimal")
	resultado.value=hexadecimalDecimal(binario);



//






}








function hexadecimalDecimal(numero)
{
	 acu=0;
	 j=0;
	 numero=reverse(numero);

	 var hexa = {"A":"10","B":"11","C":"12","D":"13","E":"14","F":"15"};
	 var letras= ["a","b","c","d","e","f"];

	 //console.log(coche["A"]);

	 console.log();
	
	for(i=0; i<numero.length; i++)
	{
	valor=numero[i];		
		if(letras.includes(numero[i]))
			valor=numero[i].toUpperCase();
		
		if(hexa[valor]==undefined)
			posicion=valor;
		else
			posicion=hexa[valor];
		
		acu+=posicion*16**j;
		j++;
	}

	return acu;
}



















function validarBinario(numero)
{
	let flag=true;
	let rta;

	for(i=0; i<numero.length; i++)
	{		
		if(numero[i]!=1 && numero[i]!=0)
				flag=false;
	}

	if(flag==true)
		rta=binarioDecimal(numero);
	else{
		alert("invalido");
		rta=null;
	}
	return rta;
}




function binarioDecimal(numero){

	 acu=0;
	 j=0;
	 numero=reverse(numero);

	
	for(i=0; i<numero.length; i++)
	{		
		

		if(numero[i]==1)
			acu+=2**j;
		j++;
	}

	return acu;

}




function reverse(string) {
    var strRev = "";
    for (var i = string.length - 1; i >= 0; i--) {
        strRev += string[i];
    }
    return strRev; 
}