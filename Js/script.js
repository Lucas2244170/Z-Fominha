// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".main-nav");
const botaoTema = document.querySelector("#btn-tema");

// 2. Escuta o evento de clique no botão do menu
botaoMenu.addEventListener("click", () => {

    // 3. Alterna a classe "active" no menu
    menu.classList.toggle("active");

    // 4. Verifica se o menu está aberto
    if (menu.classList.contains("active")) {
        botaoMenu.textContent = "✕ Fechar";
    } else {
        botaoMenu.textContent = "☰ Menu";
    }
});

// 5. Alterna o modo escuro
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
});

// 6. Fecha o menu ao clicar em qualquer link
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        botaoMenu.textContent = "☰ Menu";
    });
});

// 7. Variáveis para a soma
let a = 20;
let b = 30;

// 8. Função que soma dois números
function somar(a, b) {
    const resultado = a + b;
    return resultado;
}

// 9. Altera o valor de "a"
a = 40;

// 10. Exibe o resultado no console
console.log(somar(a, b)); // 70
