---
title: "Contexto é tudo"
description: "O modelo só sabe o que está na janela. Cuidar do que entra ali — e do que fica de fora — é a habilidade mais importante de quem usa IA hoje."
lang: pt-BR
ref: context
order: 8
part: 2
permalink: /ia/contexto/
interactive: "monte uma janela de contexto + três prompts"
piece: "o arquivo de instruções do projeto"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 8

Primeira tentativa de Lia com um assistente: "me ajude a reduzir a evasão escolar". Voltaram dez tópicos corretos e inúteis, os mesmos de qualquer cartilha. Na segunda, ela exagerou para o outro lado: anexou o manual de 300 páginas da rede, três atas de reunião e a planilha inteira. A resposta citou, com toda a segurança, um procedimento que a rede tinha abandonado anos antes. Pouco demais não serve; demais também não. Como se acha o meio?
</div>

Se eu tivesse que escolher uma única ideia para alguém levar deste guia, seria esta: **o modelo não te conhece, não lembra de ontem e não sabe nada do seu projeto. Ele só sabe o que está escrito na janela, agora.**

Tudo o que parece memória, personalidade ou "ele já me entende" é alguém — você ou o produto — colocando texto de volta nessa janela.

## O que o modelo enxerga quando você pergunta?

A melhor imagem que conheço para isso é do Andrej Karpathy, que descreve os modelos de linguagem como um novo tipo de computador: **o modelo faz o papel da CPU, e a janela de contexto é a memória** — a RAM. ([Vale ver a palestra inteira](https://www.youtube.com/watch?v=LCEmiRjPEtQ).)

A CPU de um computador só processa o que foi carregado na RAM. O modelo só raciocina sobre o que foi carregado no contexto: suas instruções, os documentos anexados, o histórico da conversa, a descrição das ferramentas que ele pode usar, os resultados dessas ferramentas. Tudo isso é medido em *tokens* (pedaços de palavra) e compete pelo mesmo espaço.

**Engenharia de contexto** é o nome que pegou para o trabalho de decidir o que entra nessa RAM. É a evolução natural da engenharia de prompt: antes a gente caprichava em uma instrução; agora a gente administra tudo o que o modelo vê ao longo de uma tarefa longa. Quando o termo apareceu eu [fiquei em dúvida se precisávamos de mais um conceito](/blog/pt/context-engineering-do-we-need-another-concept/) — mas a ideia por trás eu defendo desde sempre: a habilidade humana mais importante agora é saber comunicar e entregar a informação e as ferramentas certas.

## Mais contexto é melhor contexto?

A intuição diz: "na dúvida, joga tudo lá dentro". É o erro mais comum que eu vejo.

Modelos de linguagem funcionam relacionando cada token com todos os outros. Quanto mais coisa na janela, mais essa atenção se espalha. Há quem chame isso de **orçamento de atenção**: é finito, e cada token novo gasta um pouco dele. Quando o orçamento estoura, aparece o que se convencionou chamar de ***context rot***, a queda de desempenho que [já foi medida](https://research.trychroma.com/context-rot) conforme a entrada cresce. O modelo esquece uma instrução do começo, confunde documentos, repete o que já fez. Não é que ele "trava" — ele vai ficando gradualmente pior.

Daí sai o princípio prático: procurar **o menor conjunto de tokens de alto sinal** que resolve a tarefa.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** monte uma janela de contexto para a pergunta da Lia. O que você tiraria primeiro — e como sabe que não vai fazer falta?
</div>

<div data-widget="contexto"></div>

## Qual é a altitude certa de uma instrução?

Um [texto sobre engenharia de contexto para agentes](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) tem uma ideia que mudou meu jeito de escrever instruções: existe uma **altitude certa**, uma zona "Cachinhos Dourados" entre dois erros.

<div data-widget="tabs" data-title="Três jeitos de pedir a mesma coisa" data-sub="A tarefa: um assistente que responde dúvidas da equipe sobre reembolso de despesas." markdown="1">

#### Rígido demais

```
SE a pergunta contiver "táxi" E valor < 80 ENTÃO responda "Aprovado".
SE a pergunta contiver "táxi" E valor >= 80 ENTÃO responda "Precisa de aprovação".
SE a pergunta contiver "carro com motorista" ENTÃO trate como "táxi".
SE a pergunta contiver "almoço" E for dia útil ENTÃO ...
(mais 36 regras)
```

Parece seguro e é frágil. Basta alguém escrever "corrida de aplicativo" ou "fui de carona paga" e nenhuma regra dispara. Você está tentando programar em português — para isso existe código de verdade.

#### Vago demais

```
Você é um assistente prestativo. Ajude as pessoas da equipe com reembolsos.
Seja educado e preciso.
```

Assume um monte de contexto que o modelo não tem: qual é a política? Quais são os limites? O que fazer na dúvida? Ele vai preencher os buracos com o que é *plausível* — ou seja, vai inventar.

#### Na medida

```
<contexto>
Você atende pessoas da empresa com dúvidas sobre reembolso de
despesas. A política vigente está em <politica>. Quem pergunta em geral
está com pressa e quer saber: posso ou não posso, e qual o próximo passo.
</contexto>

<instrucoes>
1. Responda com base apenas na política. Cite o item que usou.
2. Se a política não cobrir o caso, diga isso claramente e indique
   quem aprova exceções. Não estime valores nem prazos.
3. Comece pela resposta; explique depois, em até três frases.
</instrucoes>

<politica>
(somente os trechos relevantes da política)
</politica>
```

Explica o cenário e o objetivo, dá critérios em vez de casos, diz o que fazer quando não souber e separa as partes com marcações claras. Curto — e cada linha trabalha.

</div>

## E no dia a dia?

- **Explico o porquê, não só o quê.** "Responda curto porque a pessoa lê no celular entre duas reuniões" funciona melhor que "responda curto".
- **Separo as partes.** Títulos em Markdown ou marcações como `<contexto>` ajudam o modelo a não misturar instrução com documento.
- **Trago só o trecho.** Em vez do manual de 300 páginas, as três páginas que importam. Se eu não sei quais são, esse é o primeiro pedido: "ache os trechos sobre X".
- **Começo conversa nova quando muda o assunto.** Histórico velho é ruído. Se preciso levar algo adiante, peço um resumo e colo no começo da nova.
- **Ligo poucas ferramentas.** Cada conector ocupa espaço na janela só por existir. E eu fico de olho no medidor que a ferramenta mostra: quando uma sessão passa de dois terços da janela ocupada, já estou pensando em fechar e começar outra.
- **Guardo o contexto fora da conversa.** Tudo o que eu não quero explicar de novo vira arquivo no repositório do projeto — assunto do [capítulo 11](/ia/repositorio-e-memoria/).

<div class="g-box g-key" markdown="1">
**Para guardar**

- A janela de contexto é a RAM do modelo: finita e disputada.
- Excesso de contexto degrada a resposta (*context rot*). Sinal alto, pouco ruído.
- Instrução boa fica na altitude certa: nem lista de `se-então`, nem "seja útil".
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** o que é óbvio para a equipe e não está escrito em lugar nenhum? Como eu percebo que coloquei contexto demais?
- **Um caminho para responder:** escrever como se fosse para alguém inteligente que chegou hoje; fazer a mesma pergunta com e sem cada pedaço; cortar o que não muda a resposta.
- **Peça nova no projeto:** o arquivo de instruções do projeto, escrito uma vez e reaproveitado em toda conversa.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (30 min) — quem chegou hoje

Cada dupla escolhe uma tarefa real do seu trabalho. Primeiro escrevem o pedido como mandariam hoje para uma IA. Depois reescrevem imaginando que vão entregar o bilhete a uma pessoa muito inteligente que **começou hoje** e não conhece a empresa, o projeto nem o público. Comparem as duas versões e rodem as duas na mesma ferramenta.

#### Perguntas de discussão

- O que estava "óbvio" na sua cabeça e não estava no papel?
- No widget, por que o manual inteiro piora a resposta se a informação certa está lá dentro?
- Qual é a diferença entre dar uma regra e dar um critério?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- ANTHROPIC. **Effective context engineering for AI agents**. [*S. l.*], 29 set. 2025. Disponível em: <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>. Acesso em: 13 nov. 2026.
- CHROMA. **Context rot**: how increasing input tokens impacts LLM performance. [*S. l.*], 14 jul. 2025. Relatório técnico. Disponível em: <https://research.trychroma.com/context-rot>. Acesso em: 13 nov. 2026.
- KARPATHY, Andrej. **Software is changing (again)**. [*S. l.*]: Y Combinator, 18 jun. 2025. 1 vídeo. Disponível em: <https://www.youtube.com/watch?v=LCEmiRjPEtQ>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Engenharia de contexto: precisamos de mais um conceito?**. [*S. l.*]: efrem.io, 3 jul. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/context-engineering-do-we-need-another-concept/>. Acesso em: 13 nov. 2026.

*Notas:* A frase sobre CPU e memória é uma paráfrase do trecho em que Karpathy compara LLMs a um sistema operacional. De Anthropic (2025) vêm "orçamento de atenção", a "altitude certa" e o princípio do menor conjunto de tokens de alto sinal. A medição do *context rot* é de Chroma (2025).

</div>
