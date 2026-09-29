let ultimoElementoFocado = null;

function abrirModal() {
    const modal = document.getElementById("modal");

    ultimoElementoFocado = document.activeElement;

    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");

    const botaoFechar = modal.querySelector(".modal-fechar");
    botaoFechar.focus();
}

function fecharModal() {
    const modal = document.getElementById("modal");

    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");

    if (ultimoElementoFocado) {
        ultimoElementoFocado.focus();
    }
}

function mostrarToast() {
    const toast = document.getElementById("toast");

    toast.classList.add("mostrar");

    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 3000);
}
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharModal();
    }
});