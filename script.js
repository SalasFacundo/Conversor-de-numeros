
function prueba()
{



var binario=document.getElementById('ingresado').value;
var digitos= binario.length;




var selectIngresado=document.getElementById('selectIngresado').value;
var selectResultado=document.getElementById('selectResultado').value;

if(selectIngresado=="Binario" && selectResultado=="Decimal")
	resultado.value=binarioDecimal(binario);
else if(selectIngresado=="Hexadecimal" && selectResultado=="Decimal")
	resultado.value=hexadecimalDecimal(binario);
else if(selectIngresado=="Octal" && selectResultado=="Decimal")
	resultado.value=octalDecimal(binario);
else if(selectIngresado=="Decimal" && selectResultado=="Binario")
	resultado.value=decimalBinario(binario);
else if(selectIngresado=="Decimal" && selectResultado=="Hexadecimal")
	resultado.value=decimalHexadecimal(binario);
else if(selectIngresado=="Decimal" && selectResultado=="Octal")
	resultado.value=decimalOctal(binario);
else if(selectIngresado=="Octal" && selectResultado=="Hexadecimal")
	resultado.value=octalHexadecimal(binario);
else if(selectIngresado=="Hexadecimal" && selectResultado=="Octal")
	resultado.value=hexadecimalOctal(binario);



}


function octalHexadecimal(numero)
{
	return decimalHexadecimal(octalDecimal(numero));
}

function hexadecimalOctal(numero)
{
	return decimalOctal(hexadecimalDecimal(numero));
}

function decimalOctal(numero)
{
	let restos=[];
	do{

		resto=numero%8;		
		numero=parseInt(numero/8);
		
		restos.push(resto);
	}
	while(numero>=8);
	restos.push(numero);
	

		return reverse(restos);
}











function decimalHexadecimal(numero)
{
	let restos=[];
	var hexa = {"10":"A","11":"B","12":"C","13":"D","14":"E","15":"F"};

	do{

		resto=numero%16;		
		numero=parseInt(numero/16);
		
		restos.push(resto);
	}
	while(numero>=16);
	restos.push(numero);
	

	for(i=0 ; i<restos.length; i++)
	{
		if(restos[i]>=10)
		{	
			restos[i]=hexa[restos[i]];
		}
	}


		return reverse(restos);
	
}




function decimalBinario(numero)
{

	let restos=[];

	do{

		resto=numero%2;		
		numero=parseInt(numero/2);
		
		restos.push(resto);
	}
	while(numero>=2);
	restos.push(numero);
	

		return reverse(restos);
	
	
}




function hexadecimalDecimal(numero)
{
	 acu=0;
	 j=0;
	 numero=reverse(numero);

	 var hexa = {"A":"10","B":"11","C":"12","D":"13","E":"14","F":"15"};
	 var letras= ["a","b","c","d","e","f"];

	 	
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





function binarioDecimal(numero){

	 acu=0;
	 j=0;
	 flag=true;
	 numero=reverse(numero);

	
	for(i=0; i<numero.length; i++)
	{		
		if(numero[i]!=1 && numero[i]!=0)
			flag=false;

		if(numero[i]==1)
			acu+=2**j;
		j++;
	}

	if(flag==false)
		acu=-1;
	return acu;

}



function octalDecimal(numero)
{

		acu=0;
	 j=0;
	 flag=true;
	 numero=reverse(numero);

	
	 	
	for(i=0; i<numero.length; i++)
	{
		
		if(numero[i]<=7)
			acu+=numero[i]*8**j;
		else
		{
			flag=false;
		}		
			
		

		j++;
	}

	if(flag==false)
	{
		alert("Numero invalido");
		acu=-1;
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