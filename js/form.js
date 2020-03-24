var botaoadicionar = document.querySelector('#adicionar-paciente');
    
botaoadicionar.addEventListener('click', function(event){

    event.preventDefault();

    var form = document.querySelector('#form-adiciona');


    var objetoPaciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(objetoPaciente);

    var erros = validaPaciente(objetoPaciente);

    
   if (erros.length > 0){

        exibeMensagensDeErro(erros);

        return;

   }

    var tabela = document.querySelector('#tabela-pacientes');    

    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector('#mensagens-erro');

    mensagensErro.innerHTML = "";

})

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }

    return paciente;
}

function montaTr(objetoPaciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(objetoPaciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(objetoPaciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(objetoPaciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(objetoPaciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(objetoPaciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(objetoPaciente){

    var erros = [];

    if(objetoPaciente.nome.length == 0) erros.push("Nome do paciente obrigatório");

    if(objetoPaciente.gordura.length == 0) erros.push("Gordura do paciente obrigatório");

    if(objetoPaciente.peso.length == 0) erros.push("O peso do paciente obrigatório");    

    if(objetoPaciente.altura.length == 0) erros.push("A altura do paciente obrigatório");

    if(!validaPeso(objetoPaciente.peso)) erros.push("O peso é invalido");

    if(!validaAltura(objetoPaciente.altura)) erros.push("A altura é invalido");


    return erros;

}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector('#mensagens-erro');

    ul.innerHTML = "";
    erros.forEach(function(erro){

        var li = document.createElement('li');

        li.textContent = erro;
        
        ul.appendChild(li);


    });
}