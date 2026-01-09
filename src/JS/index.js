const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();

    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-language');
    const elements = document.querySelectorAll('[data-pt][data-en]');

    let currentLanguage = 'pt';

    function applyLanguage(lang) {
        elements.forEach(el => {
            if (el.tagName === "A" && el.querySelector("i")){
                el.setAttribute("title", el.dataset[lang]);
            } else {
                el.textContent = el.dataset[lang]
            }
        });

        if (lang === "pt") {
            toggleButton.textContent = "Mudar para Inglês";
            document.documentElement.lang = "pt-BR";
        } else {
            toggleButton.textContent = "Switch to Portuguese";
            document.documentElement.lang = "en-US";
        }

        currentLanguage = lang;
    }

    applyLanguage("pt");

    toggleButton.addEventListener('click', () => {
        const newLang = currentLanguage === "pt" ? "en" : "pt";
        applyLanguage(newLang);
    });
});