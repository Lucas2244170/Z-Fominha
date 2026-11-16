/* =========================================================
   SCRIPT.JS — Interatividade da página
   ---------------------------------------------------------
   O JavaScript reage às ações do usuário (como cliques)
   e altera o HTML/CSS da página em tempo real.

   DICA DE DEPURAÇÃO: se algo não funcionar, aperte F12
   no navegador e abra a aba "Console". Os erros de
   JavaScript aparecem lá em vermelho, com o número da linha.
   ========================================================= */

// Mensagem de teste: se ela aparecer no Console (F12),
// significa que o arquivo script.js foi carregado corretamente.
console.log("script.js carregado com sucesso!");


/* ---------------------------------------------------------
   1) MENU HAMBÚRGUER (celular)
   --------------------------------------------------------- */

// getElementById procura o elemento pelo id.
// querySelector procura pelo seletor CSS (aqui, a classe .main-nav).
const btnMenu = document.getElementById("btn-menu");  // o botão ☰
const menu = document.querySelector(".main-nav");     // o <nav>

// "if (btnMenu && menu)" = só executa se os DOIS elementos existirem.
// Sem essa verificação, um elemento faltando gera um erro que
// TRAVA todo o resto do script (inclusive o carrossel!).
if (btnMenu && menu) {

    // addEventListener: "fique escutando um evento".
    btnMenu.addEventListener("click", function () {

        // classList.toggle liga/desliga a classe "ativo"
        menu.classList.toggle("ativo");

        // Troca o símbolo do botão: ☰ (fechado) ou ✕ (aberto)
        if (menu.classList.contains("ativo")) {
            btnMenu.textContent = "✕";
        } else {
            btnMenu.textContent = "☰";
        }
    });
}


/* ---------------------------------------------------------
   2) CARROSSEL DE CURSOS
   --------------------------------------------------------- */

const courseList = document.getElementById("course-list"); // lista de cards
const btnNext = document.getElementById("btn-next");       // seta da direita
const btnPrev = document.getElementById("btn-prev");       // seta da esquerda

if (courseList && btnNext && btnPrev) {

    // Função que calcula quanto rolar: a largura de UM card + o espaço entre eles.
    // Assim, cada clique anda exatamente um card.
    function tamanhoDoPasso() {
        const card = courseList.querySelector(".course-card"); // pega o 1º card
        return card.offsetWidth + 16; // 16 = o "gap" definido no CSS
    }

    // Seta da DIREITA
    btnNext.addEventListener("click", function () {

        // scrollLeft  = quanto a lista já rolou (em pixels)
        // clientWidth = largura visível da lista
        // scrollWidth = largura TOTAL da lista (inclusive o que está escondido)
        const chegouNoFim =
            courseList.scrollLeft + courseList.clientWidth >= courseList.scrollWidth - 10;

        if (chegouNoFim) {
            // Já está no fim? Volta para o começo.
            courseList.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            // Senão, anda um card para a direita (número positivo).
            courseList.scrollBy({ left: tamanhoDoPasso(), behavior: "smooth" });
        }
    });

    // Seta da ESQUERDA
    btnPrev.addEventListener("click", function () {
        // Número NEGATIVO = rola para a esquerda.
        courseList.scrollBy({ left: -tamanhoDoPasso(), behavior: "smooth" });
    });

} else {
    // Se algum elemento não foi encontrado, avisa no Console qual é o problema.
    console.error("Carrossel: verifique os ids course-list, btn-next e btn-prev no HTML.");
}


/* ---------------------------------------------------------
   3) ANO AUTOMÁTICO NO RODAPÉ
   --------------------------------------------------------- */

const ano = document.getElementById("ano");

if (ano) {
    // new Date() pega a data de hoje; getFullYear() devolve só o ano.
    ano.textContent = new Date().getFullYear();
}