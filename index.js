"use strict";
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

const pergunta = document.querySelector("#inpPergunta");
const resposta = document.querySelector("#txtResposta");
const botaoPergunta = document.querySelector("#btnPergunta");
botaoPergunta.addEventListener("click", function () {
  resposta.style.opacity = 1;
  resposta.style.color = "white";
  if (pergunta.value == "") {
    resposta.innerHTML = "Indique um valor";
    resposta.style.color = "red";
    return;
  }

  botaoPergunta.style.color = "blueviolet";
  botaoPergunta.setAttribute("disabled", true);
  //console.log(resposta.innerHTML);
  // gerar numero aletorio
  const totalResp = respostas.length;
  const numAleat = Math.floor(Math.random() * totalResp);

  resposta.innerHTML = "<div>" + pergunta.value + "<div>" + respostas[numAleat];

  pergunta.value = "";

  // Esconder a resposta depois de 3 segundos
  setTimeout(function () {
    resposta.style.opacity = 0;
    botaoPergunta.removeAttribute("disabled");
    botaoPergunta.style.color = "white";
  }, 3000);
});
