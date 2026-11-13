---
title: "Não peça a resposta, peça o script"
description: "IA é probabilística; código é determinístico. Saber quando usar cada um é o que separa a brincadeira do processo confiável."
lang: pt-BR
ref: deterministic
order: 10
part: 2
permalink: /ia/pedir-o-script/
interactive: "mesma pergunta, dez vezes"
piece: "o script de contagem, com dez casos de teste"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 10

Lia colou a lista da semana, já com códigos no lugar dos nomes, e perguntou quantos estudantes tinham cinco faltas seguidas. Trinta e sete. Perguntou de novo, só para conferir. Quarenta e um. As duas respostas vieram com a mesma segurança. Qual das duas ela levaria para a reunião?
</div>

Pergunte duas vezes a mesma coisa para um assistente de IA e você recebe duas respostas diferentes. Às vezes só muda a redação. Às vezes muda o número. Isso não é defeito: é o funcionamento normal de um sistema que, como vimos no [capítulo 2](/ia/como-a-maquina-aprende/), sorteia a continuação mais plausível.

Para escrever um e-mail, ótimo — variedade é bem-vinda. Para somar a planilha de reembolsos do mês, é um problema.

## Todo trabalho é do mesmo tipo?

**Probabilístico**: cada execução pode sair diferente. É o modo natural da IA generativa. Brilha onde não existe uma única resposta certa: redigir, resumir, interpretar um pedido confuso, propor alternativas, ler um documento bagunçado.

**Determinístico**: mesma entrada, mesma saída, sempre. É o modo natural do código. Brilha onde só existe uma resposta certa: somar, filtrar, converter, mover arquivo, aplicar uma regra fiscal.

O erro clássico é usar o primeiro para fazer o trabalho do segundo. Eu mesmo já caí nessa: passei dias tentando fazer um agente reorganizar uma planilha complicada, até perceber que o caso era determinístico e pedir o código — contei em [Quando usei uma bazuca para matar uma mosca](/blog/pt/a-bazooka-to-kill-a-fly/). Eu gravei um vídeo meio torto sobre isso há um tempo — [processos agênticos determinísticos e probabilísticos](/blog/pt/deterministic-vs-probabilistic-agentic-processes/) — e a ideia só ficou mais importante desde então.

Tem uma conta que ajuda a lembrar por quê. Se você encadeia três etapas probabilísticas que acertam 70%, 90% e 98% das vezes, o conjunto acerta [perto de 61%](/blog/pt/multi-agent-systems-and-compounding-errors/). Cada etapa que vira código determinístico sai dessa multiplicação.

## E se a IA escrevesse o código em vez da resposta?

A grande virada de usar IA "como código" em vez de "como chat" é esta. Em vez de pedir:

> Some a coluna de valores dessa planilha.

eu peço:

> Escreva um script que some a coluna de valores dessa planilha, rode e me mostre o resultado.

No primeiro caso, o modelo *estima* um total. No segundo, ele usa a parte em que é realmente bom — escrever um programa curto — e quem faz a conta é o computador, que não erra soma.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** rode o experimento dez vezes. Qual parte do trabalho da Lia pode variar de um dia para o outro sem problema — e qual nunca pode?
</div>

<div data-widget="dado"></div>

A diferença na prática:

| | Pedir a resposta | Pedir o script |
|---|---|---|
| **Resultado** | Pode variar a cada vez | Idêntico toda vez |
| **Conferência** | Toda execução | Uma vez: você confere o script |
| **Mil repetições** | Mil chamadas ao modelo | Um script rodando mil vezes, quase de graça |
| **Auditoria** | "Foi o que ele disse" | O código está lá para quem quiser ler |
| **Custo e energia** | Proporcional ao uso | Praticamente zero depois de pronto |

## Onde eu uso isso?

- **Remover o fundo de uma imagem.** Eu poderia pedir para um modelo de imagem "redesenhar sem o fundo" e torcer para ele não mexer no resto. Prefiro pedir um script que recorta o fundo: o que não é fundo fica intocado, pixel por pixel.
- **Análise de dados.** Quando peço mediana de tempo parado por etapa de um processo, não quero que o modelo "ache" a mediana. Quero o código em Python que calcula, os gráficos que esse código gera e o arquivo salvo no projeto para rodar de novo mês que vem.
- **Rotinas.** Tarefas que se repetem viram scripts guardados em uma pasta de *runbooks* no repositório. Na próxima vez, o agente não reinventa: ele roda o que já existe.

Isso é o oposto de precisar saber programar. Eu não escrevo esses scripts — eu descrevo o que preciso, leio o que foi feito e confiro o resultado. O que mudou é que a expertise agora chega em um formato que eu consigo ler: o agente explica, em português, o que o script faz e por quê. Saber que essa opção existe muda o que você pede. Falei sobre perder o medo disso em [Pessoas de produto, não tenham medo de um script](/blog/pt/product-people-dont-be-afraid-of-a-script/).

## Como decidir?

Três perguntas rápidas antes de pedir qualquer coisa:

1. **Existe uma única resposta certa?** Se sim, peça código.
2. **Vou repetir isso?** Se sim, peça código e guarde.
3. **Alguém vai me cobrar o resultado depois?** Se sim, peça código — você vai querer mostrar como chegou lá.

Se as três respostas forem "não", vá de conversa mesmo. E muitas tarefas boas misturam os dois: a IA *interpreta* o pedido bagunçado (probabilístico) e chama um script para *executar* (determinístico). Um bom agente é, no fundo, essa combinação.

<div class="g-box g-key" markdown="1">
**Para guardar:** use a IA para decidir e escrever; use código para calcular e repetir. Se o resultado precisa ser exatamente igual toda vez, a resposta não é um prompt melhor — é um script.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** se o número mudar amanhã, eu consigo explicar por quê? Quem confere o script quando a regra das faltas mudar?
- **Um caminho para responder:** separar o que é contar do que é redigir; pedir código para contar; conferir com dez casos contados à mão; guardar os dez casos para conferir de novo.
- **Peça nova no projeto:** o script de contagem, guardado junto com os dez casos de teste.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — a mesma pergunta

Toda a turma cola a mesma tabela pequena (20 linhas) em um assistente e pedem a média de uma coluna, sem falar em código. Anotem as respostas no quadro. Depois repitam pedindo "escreva e rode um código que calcule". Comparem a dispersão.

#### Perguntas de discussão

- Liste cinco tarefas do seu trabalho. Quais têm uma única resposta certa?
- Um parecer jurídico é determinístico ou probabilístico? E o cálculo do prazo dentro dele?
- Se você não sabe ler o script, como confere que ele está certo? (Dica: casos de teste com resposta conhecida.)

</details>

<div class="g-fontes" markdown="1">

#### Referências

- MARANHÃO FILHO, Éfrem. **Multiagentes e a conta dos erros que se acumulam**. [*S. l.*]: efrem.io, 2 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/multi-agent-systems-and-compounding-errors/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Pessoas de produto: não tenham medo de um script**. [*S. l.*]: efrem.io, 15 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/product-people-dont-be-afraid-of-a-script/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Quando usei uma bazuca para matar uma mosca**. [*S. l.*]: efrem.io, 4 dez. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/a-bazooka-to-kill-a-fly/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Testando um formato novo: processos agênticos determinísticos e probabilísticos**. [*S. l.*]: efrem.io, 28 out. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/deterministic-vs-probabilistic-agentic-processes/>. Acesso em: 13 nov. 2026.

</div>
