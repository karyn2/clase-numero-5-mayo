function operaciones(){
    let num1, num2, resultado;
    num1= parseInt(document.getElementById('num1').value);
    num2= parseInt(document.getElementById('num2').value);
    if(document.getElementById('num1').value=="" || document.getElementById('num2').value=="" ){
        alert("ingrese los dos numeros");
    }else{
        resultado1 =num1+num2; 
        document.getElementById('suma').innerHTML = resultado1;
        resultado2 =num1-num2; 
        document.getElementById('resta').innerHTML = resultado2;
        resultado2 =num1*num2; 
        document.getElementById('multi').innerHTML = resultado2;
        if(num2==0){
            alert("La división por cero no existe")
        }
        else{
            resultado2 =num1/num2; 
            document.getElementById('divi').innerHTML = resultado2;
        }
   
        //alert(resultado);
    }

   

}


