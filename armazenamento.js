function obterColaboradores() {
    const dados = localStorage.getItem("colaboradores");
    return dados ? JSON.parse(dados) : [];
}

function salvarCadastro(form) {
    const dados = {
        nome: form.nome.value,
        email: form.email.value,
        nascimento: form.nascimento.value,
        cpf: form.cpf.value,
        telefone: form.telefone.value,
        cep: form.cep.value,
        endereco: form.endereco.value,
        cidade: form.cidade.value,
        estado: form.estado.value,
        interesse: form.interesse.value
    };

    const lista = obterColaboradores();
    lista.push(dados);

    localStorage.setItem("colaboradores", JSON.stringify(lista));
}