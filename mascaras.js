document.addEventListener("DOMContentLoaded", function () {
    IMask(document.getElementById("cpf"), { mask: "000.000.000-00" });
    IMask(document.getElementById("telefone"), { mask: "(00) 00000-0000" });
    IMask(document.getElementById("cep"), { mask: "00000-000" });
});