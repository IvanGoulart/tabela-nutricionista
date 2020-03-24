
    var titulo = document.querySelector(".titulo");

    titulo.textContent = "Aparecida Nutrição";

    var pacientes = document.querySelectorAll(".paciente");


    for (i = 0; i < pacientes.length; i++) {

        var paciente = pacientes;

        var pesoTd = paciente[i].querySelector(".info-peso");
        var peso = pesoTd.textContent;
    
        var alturaTd = paciente[i].querySelector(".info-altura");
        var altura = alturaTd.textContent;
    
        var imc = calculaImc(altura, peso);
    
        var imcTd = paciente[i].querySelector(".info-imc");
        
        imcTd.textContent = imc;
    
        //valida o peso

        pesoEhValido = validaPeso(peso);
        alturaEhValido = validaAltura(altura);
    
        if(!pesoEhValido){
            imcTd.textContent = "Verifique o peso.";

            paciente[i].classList.add('paciente-invalido');
        }
    
        if(!alturaEhValido){
            imcTd.textContent = "Verifique a altura.";
            paciente[i].classList.add('paciente-invalido');
        }
    }

 function calculaImc(altura,peso){
    imc = peso/(altura*altura);

    return imc.toFixed(2);
 }

function validaPeso(peso){
    if(peso < 200 && peso > 0){
        return true;
    }
    else{
        return false;
    }
}    
function validaAltura(altura){
    if(altura < 3.0 && altura > 0){
        return true;
    }
    else{
        return false;
    }
}



    


    

