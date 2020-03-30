var buscarPaciente = document.querySelector("#buscar-pacientes");

buscarPaciente.addEventListener("click", function(){
    console.log("Buscar");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            }); 
    
        }else{
            console.log(xhr.status);

            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }


    })

    xhr.send();
})