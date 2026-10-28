---
layout: post
title: "Over-engineering: uma confissão"
date: 2025-10-22
lang: pt-BR
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7386747077311102976/"
english_version: "../en/2025-10-22-over-engineering-a-confession.md"
---

Ontem foi divertido. Eu tinha: um conteúdo atrás de login, um vídeo no YouTube de 8 horas sem transcrição e outros materiais. O lado técnico foi falando mais alto.

Comecei com a página que estava por trás de um login. Tem uma div que aparece por cima com os conteúdos que preciso. Inspeciono e vejo que já estava no HTML já. "Já sei, vou pegar o HTML e jogar no OpenIA platform para remover só os textos que preciso". 2500 páginas. A openai estilou é ainda gastei 8 dólares sem resposta.

Peguei só a div que precisava. Mesma coisa. Aí finalmente não pensei tecnicamente e fiz ctrl c + ctrl v na parte maior e mais estruturada. Deu certo. Pqp, sou burro. Agora sim, a outra div complicada consigo jogar até em um chatbot. Gemini foi lá e fez o documento que precisava. Ufa.

Vamos pro vídeo. Comecei com o Google Colab para remover o áudio do vídeo. Pedi pro gemini dentro do Google Colab gera o código. Sucesso. Ia jogar na API da openai, fiz as contas e desisti.

Lado técnico falou. Tive a ideia de instalar o whisper de código aberto. Apanhei muito. Lembrei que existia o stream do Google AI Studio. Por si, uma das ferramentas mais SUBESTIMADAS que conheço. Pareando com a LLM consegui.

Roda. Out of memory. Corta um pedaço do arquivo para ver se funcionava. Blz, funcionou. Roda para uma versão com qualidade reduzida do áudio. Out of memory. Mudo a versão do modelo de large para turbo - as únicas duas que pegam em português. Fico horas nesse loop de tamanho e modelo. Sai super bem. O início. O final tudo cagado (a imagem). Só repetia "E vamos comer". Eu tb tava com fome.

Desisto e jogo assim mesmo no notebooklm. Depois penso, pq não testo jogar o áudio. Funcionou. Pqp, sou burro demais. Era só ter tirado o áudio do vídeo, reduzido e mandado pra lá.

Isso tudo para deixar claro que muitas vezes a gente faz uns over-engineering numas coisas que poderiam entregar valor muito mais rápido. Não cometam meus erros. Usem as ferramentas e só em casos extremos vão para o técnico. :)

*O post original tem uma imagem com o resultado da transcrição.*

---

*Publicado originalmente no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7386747077311102976/) em 22 de outubro de 2025. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*
