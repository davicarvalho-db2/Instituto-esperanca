document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        let valido = true;

        form.querySelectorAll("input[required]").forEach(function (campo) {
            limparErro(campo);

            if (!campo.checkValidity()) {
                exibirErro(campo);
                valido = false;
            }
        });

        if (valido) {
            salvarCadastro(form);
            form.reset();
        }
    });

    form.querySelectorAll("input").forEach(function (campo) {
        campo.addEventListener("input", function () {
            if (campo.checkValidity()) limparErro(campo);
        });
    });
});

function exibirErro(campo) {
    campo.classList.add("campo-erro");
    const mensagem = document.createElement("small");
    mensagem.className = "mensagem-erro";
    mensagem.textContent = obterMensagem(campo);
    campo.insertAdjacentElement("afterend", mensagem);
}

function limparErro(campo) {
    campo.classList.remove("campo-erro");
    const proximo = campo.nextElementSibling;
    if (proximo && proximo.classList.contains("mensagem-erro")) {
        proximo.remove();
    }
}

function obterMensagem(campo) {
    if (campo.validity.valueMissing) return "Este campo é obrigatório.";
    if (campo.validity.typeMismatch) return "Formato inválido.";
    if (campo.validity.patternMismatch) return "Formato incorreto. Verifique o padrão exigido.";
    return "Valor inválido.";
}