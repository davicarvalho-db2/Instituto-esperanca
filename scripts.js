function abrirModal() {
    const modal = document.getElementById("modal");

    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");
}

function fecharModal() {
    const modal = document.getElementById("modal");

    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");
}

function mostrarToast() {
    const toast = document.getElementById("toast");

    toast.classList.add("mostrar");

    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 3000);
}