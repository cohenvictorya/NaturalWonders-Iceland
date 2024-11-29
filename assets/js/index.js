document.addEventListener("DOMContentLoaded", function() {
    var mapaIslandia = document.getElementById("mapaIslandia");
    var mapaContainer = document.getElementById("mapa-container");

    if (mapaIslandia) {
        mapaIslandia.addEventListener("click", function() {
            console.log("Clique detectado na frase 'Terra de Fogo e Gelo'");

            mapaContainer.style.display = "block";

            var iframe = document.createElement('iframe');
            iframe.src = "https://www.google.com/maps?q=64.9631,-19.0208&z=6&output=embed";
            iframe.width = "100%";
            iframe.height = "400";
            iframe.style.border = "0";
            iframe.allowfullscreen = true;

            mapaContainer.innerHTML = '';
            mapaContainer.appendChild(iframe);

            console.log("Mapa carregado com sucesso");
        });
    }
});
