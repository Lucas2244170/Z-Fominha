/* =========================================================
   SUPABASE-CONFIG.JS — Conexão com o banco de dados
   ---------------------------------------------------------
   O Supabase é um serviço na internet que guarda os dados
   do nosso site (como os usuários cadastrados).
   Este arquivo faz a "ponte" entre o site e o Supabase.

   ORDEM DOS SCRIPTS NO HTML (muito importante!):
     1º) biblioteca do Supabase (vem da internet, pelo CDN)
     2º) este arquivo (cria a conexão)
     3º) script.js (usa a conexão)
   Se a ordem estiver errada, aparece um erro no Console (F12).
   ========================================================= */


// 1) ENDEREÇO do nosso projeto no Supabase (Project URL)
const SUPABASE_URL = "https://wlmtypyftjdeqnfezomw.supabase.co";

// 2) CHAVE PÚBLICA do projeto (Publishable key)
//    Ela PODE ficar no código do site: foi feita para isso.
//    NUNCA coloque aqui a "secret key" nem a senha do banco!
const SUPABASE_KEY = "sb_publishable_8l6CLEDFJ-QOHR-fGWhPMQ_BmGx1i_w";


// 3) CRIANDO A CONEXÃO
//    "supabase" (com letra minúscula) é a biblioteca que veio do CDN.
//    createClient = "crie um cliente", ou seja, uma conexão com o nosso projeto.
//    Guardamos a conexão na variável "supabaseClient".
//    É ela que vamos usar no script.js para cadastrar, entrar e sair.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// Mensagem de teste: se aparecer no Console (F12), a conexão foi criada.
console.log("Supabase conectado!");
