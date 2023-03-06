var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Chamando a funcao do form que tem um objeto dentro com todas as informacoes do paciente
    var paciente = obtempacientedoForm(form);


    //Criando uma linha para cada paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagens-erro");
        mensagemErro.textContent = erros;
        return;
    }

    //Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")


    tabela.appendChild(pacienteTr);
    form.reset();


    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

 
});


   //Criando um objeto para simplificar o codigo.
function obtempacientedoForm(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    //Aqui ele esta adicionando uma classe ao paciente.
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

//Dado: É o dado do paciente... o nome, peso,altura e gordura.
//Classe: É a classe que o DADO se encontra no HTML... ou seja info-nome,info-peso,info-altura...

function montaTd(dado,classe){ 
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}
function exibeArrayDeErros(erros){
    var ul = document.querySelector("mensagens-erro");
    ul.innerHTML = "";


    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        

    });
    }

    adicionaPacienteNaTabela(paciente);

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);
}


