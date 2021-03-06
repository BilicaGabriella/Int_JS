//criar referencias ao elementos do html
//query escolhe o elemento html
const frm = document.querySelector("form");
const resNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //declara o vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()//formulario nao enviar dados
    const nome = frm.inPaciente.value;//obtem o nome do paciente
    pacientes.push(nome)//asdiciona elemento no final do vetor
    console.log(pacientes) 
    let lista = "" //string para contatenar pacientes
    
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}.  ${pacientes[i]}\n`;
    }
    respLista.innerText = lista //exibe a lista de paciente
    frm.inPaciente.value = ""; //limpa o conteudo do campo
    frm.inPaciente.focus();
})

frm.btnurgencia.addEventListener("click", () => {
    //veriica validações
    if (!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em carater de urgencia")
        frm.inPaciente.focus()
        return //retorna ao form
    }
    const nome = frm.inPaciente.value;//obtem o nome do paciente
    pacientes.unshift(nome); //adiciona paciente no inicio do vetor 

    let lista = "" //string para contatenar pacientes

    //forEach aplicado no vetor pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.  ${pacientes[i]}\n`));

    respLista.innerText = lista //exibe a lista de paciente
    frm.inPaciente.value = ""; //limpa o conteudo do campo
    frm.inPaciente.focus();
})
