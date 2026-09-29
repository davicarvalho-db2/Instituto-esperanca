(function () {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
})();

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("alternar-tema");

    function atualizarBotao() {
        const escuro = document.documentElement.getAttribute("data-theme") === "dark";
        botao.textContent = escuro ? "☀️ Modo claro" : "🌙 Modo escuro";
        botao.setAttribute("aria-pressed", escuro);
    }

    botao.addEventListener("click", function () {
        const escuro = document.documentElement.getAttribute("data-theme") === "dark";

        if (escuro) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("tema", "claro");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("tema", "escuro");
        }

        atualizarBotao();
    });

    atualizarBotao();
});