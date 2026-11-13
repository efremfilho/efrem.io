---
title: "Por dentro de um modelo de linguagem"
description: "Do texto ao número, do número à próxima palavra. O que acontece entre a sua pergunta e a resposta — e por que plausível não é o mesmo que verdadeiro?"
lang: pt-BR
ref: inside-llm
order: 3
part: 1
permalink: /ia/por-dentro-do-modelo/
interactive: "tokens + a próxima palavra"
piece: "as perguntas que nunca vão sem a fonte junto"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 3

Lia perguntou a um assistente por que uma estudante da lista tinha parado de ir à escola. Recebeu três parágrafos fluentes e seguros, com causas prováveis e até uma recomendação. Nenhuma linha dizia "não sei". A estudante não estava em nenhum documento que o assistente pudesse ter lido. De onde veio aquela resposta?
</div>

O [capítulo anterior](/ia/como-a-maquina-aprende/) mostrou o treino com dois pesos e uma reta. Um modelo de linguagem tem bilhões de pesos, mas a pergunta que vale fazer a ele é a mesma que valeria para a reta: *o que entra, o que sai e o que ele ajustou para chegar lá?*

Este capítulo não pede matemática. Pede que você acompanhe uma frase do momento em que é digitada até a resposta aparecer — e pare em cada etapa para perguntar o que pode dar errado ali.

## O que o modelo recebe quando eu escrevo?

Não é a sua frase. O texto é cortado em pedaços chamados **tokens** — às vezes uma palavra inteira, às vezes um pedaço dela — e cada pedaço é trocado por um número.

<div data-widget="tokens"></div>

Vale parar aqui. Se o modelo conta tokens e não palavras, o que isso diz sobre os limites de tamanho de uma conversa? E sobre a conta no fim do mês, quando a cobrança é por uso?

## Como um número carrega significado?

Sozinho, não carrega. O número de cada token é só um endereço. O que carrega alguma coisa é o passo seguinte: cada token é trocado por uma lista longa de números — um vetor, como os do capítulo 2. Esses vetores têm nome: ***embeddings***.

Ninguém escreveu esses números. Eles foram ajustados durante o treino, até que tokens usados em contextos parecidos ficassem próximos uns dos outros. "Escola" acaba perto de "colégio" e longe de "parafuso" sem que ninguém tenha ensinado o que é uma escola.

Uma pergunta para levar: se a proximidade vem dos textos do treino, o que acontece com as associações injustas que estão nesses textos? (O [capítulo 4](/ia/vies/) é sobre isso.)

## Como ele sabe a quem "ela" se refere?

Leia: *"A estudante disse à diretora que ela precisava trabalhar."* Quem precisava trabalhar?

Você resolveu pesando as outras palavras da frase e o que sabe do mundo. O modelo faz algo parecido, só com a primeira parte: para cada token, calcula quanto cada um dos outros importa naquele ponto. Esse mecanismo chama-se **atenção**, e a arquitetura construída em torno dele, [apresentada em um artigo que virou referência](https://arxiv.org/abs/1706.03762), é o *Transformer*. Para ver a engrenagem girando, com calma, recomendo duas visitas: a [série de vídeos do 3Blue1Brown](https://www.3blue1brown.com/topics/neural-networks) e o [Transformer Explainer](https://poloclub.github.io/transformer-explainer/), que mostra cada etapa em uma frase de verdade.

Duas consequências práticas saem daí. A primeira: tudo o que está na conversa pode influenciar tudo — inclusive aquilo que você colou sem querer. A segunda: quanto mais texto, mais essa atenção se divide. É a origem do problema que o [capítulo 8](/ia/contexto/) vai tratar.

## Então ele responde?

Não exatamente. Depois de tudo isso, o que o modelo produz é uma lista: para cada token possível, a chance de ele ser o próximo. Um deles é sorteado, entra na frase, e o processo recomeça — um token por vez, até o fim.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** escolha a frase sobre a estudante. Antes de sortear, tente você: que palavra viria depois? O que você precisaria saber para acertar — e o modelo sabe?
</div>

<div data-widget="proxima"></div>

O controle que você mexeu chama-se **temperatura**. Baixa, o sorteio quase sempre cai na opção mais provável; alta, as improváveis ganham vez. Não existe um valor "certo": existe a pergunta *esta tarefa pede variedade ou repetição?*

Agora volte à cena da Lia. O assistente não consultou nada sobre aquela estudante. Ele continuou o texto com o que costuma vir depois de perguntas parecidas. Na maior parte das vezes, o que costuma vir e o que é verdade coincidem. Quando não coincidem, o nome que se dá é alucinação — mas repare que a máquina fez exatamente a mesma coisa nos dois casos.

## Se é só a próxima palavra, por que parece que entende?

Essa é a pergunta que divide gente muito mais qualificada do que eu, e eu não vou resolvê-la aqui. Posso oferecer três ângulos para você pensar:

- Para prever bem a próxima palavra de um texto sobre física, ajuda muito ter capturado alguma coisa de física. O quanto, ninguém sabe medir direito.
- Fluência não é evidência. Nós, humanos, confundimos falar bem com saber desde sempre.
- A pergunta "ele entende?" talvez seja menos útil, para quem usa, do que "como eu confiro?".

## O que eu faço com isso?

Não com respostas, mas com quatro perguntas que passam a acompanhar qualquer uso:

1. **Isso estava no que eu forneci, ou ele está completando?** Se a resposta depende de um fato da sua organização e você não deu esse fato, ela foi inventada com boa redação.
2. **De quando é o que ele sabe?** O treino terminou em alguma data. O que veio depois, e o que nunca esteve em texto público, não está lá.
3. **Preciso do mesmo resultado toda vez?** Se sim, o sorteio é um problema — e a saída está no [capítulo 10](/ia/pedir-o-script/).
4. **Cabe?** Tudo é contado em tokens: o que você escreve, o que anexa, o que ele responde.

É o que eu repito em todo treinamento: [antes de qualquer técnica sofisticada, o básico](/blog/pt/before-rag-and-mcp-learn-the-basics/). Entender como o modelo funciona, saber escolher e saber o que colocar na entrada resolve a maior parte dos problemas.

<div class="g-box g-key" markdown="1">
**Para guardar**

- Texto vira tokens, tokens viram vetores, a atenção pesa uns contra os outros, e sai uma lista de chances para o próximo token.
- O modelo sempre continua o texto. Ele não tem um modo separado para "não sei".
- Plausível e verdadeiro costumam coincidir. Conferir é o que cobre a diferença.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** quando o assistente fala da minha rede, ele está lendo ou completando? Dá para perceber a diferença só olhando o texto?
- **Um caminho para responder:** fazer a mesma pergunta duas vezes e comparar; perguntar "de onde você tirou isso?" e ir conferir; separar as perguntas que dependem de fatos da rede das que não dependem.
- **Peça nova no projeto:** a lista das perguntas que ela nunca mais faz sem entregar a fonte junto.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — a turma como modelo

Escreva no quadro o começo de uma frase ("O maior problema da nossa cidade é…"). Cada pessoa anota, sem mostrar, a palavra seguinte. Contem as respostas no quadro: essa é a distribuição. Agora sorteiem uma (com um dado ou um aplicativo), acrescentem à frase e repitam por cinco rodadas. Depois, façam de novo escolhendo sempre a mais votada. Comparem os dois textos.

#### Perguntas de discussão

- A frase produzida pela turma é "verdadeira"? De quem é a opinião que ela expressa?
- Se a turma fosse composta só por pessoas de um bairro, o que mudaria na distribuição?
- Em que tarefas do seu trabalho você quer o sorteio? Em quais ele seria inaceitável?
- Como você conferiria uma resposta sobre um assunto que você não domina?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- 3BLUE1BROWN. **Neural networks**. [*S. l.*], [2017-]. Série de vídeos. Disponível em: <https://www.3blue1brown.com/topics/neural-networks>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Antes de RAG e MCP, aprenda o básico**. [*S. l.*]: efrem.io, 30 jun. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/before-rag-and-mcp-learn-the-basics/>. Acesso em: 13 nov. 2026.
- POLO CLUB OF DATA SCIENCE. **Transformer Explainer**: LLM transformer model visually explained. Atlanta: Georgia Institute of Technology, [2024?]. Disponível em: <https://poloclub.github.io/transformer-explainer/>. Acesso em: 13 nov. 2026.
- VASWANI, Ashish *et al.* **Attention is all you need**. [*S. l.*]: arXiv, 2017. DOI: <https://doi.org/10.48550/arXiv.1706.03762>. Acesso em: 13 nov. 2026.

</div>
