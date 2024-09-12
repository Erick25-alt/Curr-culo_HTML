// Função para alternar entre modo claro e modo noturno
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Função para exibir/ocultar o nível de idioma ao clicar
function toggleLevel(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "inline";
    } else {
        element.style.display = "none";
    }
}
