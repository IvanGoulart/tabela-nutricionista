var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;

    var paiDoEvento = alvoEvento.parentNode;

    paiDoEvento.remove();


})

/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Duplo click");

        this.remove();
    })
});*/

console.log(pacientes);