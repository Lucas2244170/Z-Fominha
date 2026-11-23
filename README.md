# Escola Digital Livre

> Plataforma online **gratuita** para o ensino de programação e informática básica.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)

## Sobre o projeto

A **Escola Digital Livre** é um site desenvolvido na disciplina de **Desenvolvimento Web** com a turma do **3º ano do Ensino Médio Técnico em Informática** do **IFTO (Instituto Federal do Tocantins)**.

O projeto foi construído em sala de aula, passo a passo, para ensinar os fundamentos do desenvolvimento web a quem está começando a programar. Por isso, todo o código é **comentado**, com explicações simples sobre o que cada parte faz.

## Funcionalidades

- **Página inicial** com apresentação da plataforma, carrossel de cursos em destaque e a seção "Por que estudar aqui?"
- **Catálogo de cursos** com 9 cursos e filtro por categoria (Programação, Desenvolvimento Web, Informática e Dados)
- **Página de cada curso**, com título, descrição e aviso de que o conteúdo será adicionado em breve
- **Página Sobre**, com história, números, missão, visão, valores e o passo a passo para começar
- **Página de Contato**, com formulário e perguntas frequentes
- **Cadastro e login de verdade**, com usuários guardados no banco de dados do Supabase
- **Páginas protegidas**: só quem está logado acessa o conteúdo de um curso
- **Retorno ao curso escolhido**: quem clica em um curso sem estar logado faz login e volta direto para ele
- **Header personalizado** com "Olá, Nome!" e botão **Sair** para o usuário logado
- **Layout responsivo** para computador, tablet e celular, com menu hambúrguer no celular

## Tecnologias utilizadas

| Tecnologia | Para que foi usada |
| --- | --- |
| **HTML5** | Estrutura das páginas, com tags semânticas e formulários |
| **CSS3** | Visual do site: variáveis, Flexbox, Grid, transições e media queries |
| **JavaScript** | Interatividade: menu, carrossel, filtro, validação de formulários e autenticação |
| **[Supabase](https://supabase.com)** | Banco de dados e sistema de autenticação (cadastro, login e sessão) |
| **[Material Symbols](https://fonts.google.com/icons)** | Ícones do site |
| **[Font Awesome](https://fontawesome.com)** | Ícones das redes sociais |
| **[Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)** | Fonte do site |

O projeto não usa frameworks nem ferramentas de build: é **HTML, CSS e JavaScript puro**, para que os alunos entendam cada linha.

## Estrutura de pastas

```
Escola-Digital-Livre/
├── index.html            → página inicial
├── cursos.html           → lista de cursos com filtro
├── curso.html            → página de um curso (uma única página para todos)
├── sobre.html            → sobre a escola
├── contato.html          → formulário de contato e perguntas frequentes
├── entrar.html           → login
├── cadastro.html         → criar conta
├── style.css             → todo o visual do site
├── js/
│   ├── supabase-config.js → conexão com o Supabase
│   └── script.js          → toda a interatividade do site
└── assets/
    ├── logo.png
    ├── banner-ilustracao.svg
    └── icons8-search.svg
```

## Como executar

1. Baixe ou clone este repositório:
   ```bash
   git clone <endereço-do-repositório>
   ```
2. Abra o arquivo **`index.html`** no navegador.
   - Dica: no VS Code, a extensão **Live Server** abre o site e atualiza a página sozinha a cada alteração.
3. É preciso estar **conectado à internet**, porque o Supabase, os ícones e a fonte são carregados online.

## Usando o seu próprio projeto no Supabase

O site já vem conectado a um projeto do Supabase. Para criar o seu, por exemplo para praticar em casa:

1. Crie uma conta em [supabase.com](https://supabase.com) e clique em **New project** (região sugerida: *South America (São Paulo)*).
2. Em **Authentication → Sign In / Providers → Email**, desligue a opção **Confirm email**. Assim, quem se cadastra já entra na hora, sem precisar confirmar o e-mail.
3. Copie a **Project URL** e a **Publishable key** (botão **Connect** ou **Project Settings → API Keys**).
4. Cole os dois valores no arquivo **`js/supabase-config.js`**:
   ```js
   const SUPABASE_URL = "https://seu-projeto.supabase.co";
   const SUPABASE_KEY = "sb_publishable_...";
   ```

> **Segurança:** a *Publishable key* foi feita para ficar no código do site, por isso ela aparece aqui. **Nunca** coloque no código a *Secret key* (`sb_secret_...`) nem a senha do banco de dados.

Os usuários cadastrados aparecem no painel do Supabase em **Authentication → Users**.

## Conceitos trabalhados em aula

**HTML:** estrutura da página, tags semânticas, links e caminhos de arquivos, listas, `class` e `id`, atributos `data-`, formulários, `<details>`/`<summary>` e acessibilidade (`alt`, `aria-label`, `aria-hidden`).

**CSS:** seletores, pseudo-classes, variáveis, box model, Flexbox, Grid, posicionamento, transições, media queries (responsividade) e especificidade.

**JavaScript:** variáveis, selecionar elementos (DOM), eventos, `classList`, `if/else`, `forEach`, funções, validação de formulários, `setTimeout`, parâmetros na URL (`URLSearchParams`), objetos e `async/await`.

**Autenticação com Supabase:** `signUp` (cadastrar), `signInWithPassword` (entrar), `getSession` (verificar quem está logado) e `signOut` (sair).

## Próximos passos

- [ ] Adicionar o conteúdo (aulas) de cada curso
- [ ] Guardar os dados dos cursos em uma tabela do Supabase
- [ ] Fazer o campo "Buscar cursos..." funcionar
- [ ] Salvar o progresso de cada aluno nos cursos
- [ ] Recuperação de senha ("Esqueci minha senha")

## Créditos

Projeto desenvolvido pela com o **3º ano do Ensino Médio Técnico em Informática** do **IFTO**, na disciplina de **Desenvolvimento Web**, com fins **educacionais**.
