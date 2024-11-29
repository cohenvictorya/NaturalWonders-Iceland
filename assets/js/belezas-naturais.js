document.addEventListener("DOMContentLoaded", function () {
    const botoesLerMais = document.querySelectorAll(".lerMaisBtn");

    botoesLerMais.forEach((botao) => {
        botao.addEventListener("click", function () {
            const topico = botao.closest(".topico");

            const paragrafosExtras = topico.querySelectorAll(".paragrafo2");

            paragrafosExtras.forEach((paragrafo) => {
                if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
                    paragrafo.style.display = "block";
                    botao.textContent = "Ler menos...";
                } else {
                    paragrafo.style.display = "none";
                    botao.textContent = "Ler mais...";
                }
            });
        });
    });
});
