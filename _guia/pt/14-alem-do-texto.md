---
title: "Além do texto: voz, imagem e vídeo"
description: "Áudio vira texto, foto vira tabela, texto vira imagem. O que se ganha, o que pode sair errado sem ninguém perceber — e de quem é a voz?"
lang: pt-BR
ref: multimodal
order: 14
part: 3
permalink: /ia/alem-do-texto/
interactive: "quatro conversões e o que perguntar a cada uma"
piece: "a regra do que pode ser gravado e por quanto tempo fica guardado"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 14

Depois de cada visita, a equipe grava um áudio contando como foi. São dezenas por semana, e ninguém ouve de novo. As listas de frequência de duas escolas ainda chegam em papel, fotografadas com o celular. Lia percebeu que metade do que a equipe sabe está em formatos que a planilha não lê. E se desse para ler?
</div>

Por muito tempo eu só consegui usar IA generativa profissionalmente com texto — cheguei a [perguntar em público se estava perdendo alguma coisa](/blog/pt/am-i-missing-out-on-multimodal-ai/). Hoje falo mais do que digito: dito o que quero e [gravo conversas para pensar depois](/blog/pt/recording-calls-to-think-with-claude/). A máquina passou a aceitar o mundo no formato em que ele acontece.

Isso tem nome — modelos **multimodais** — e levanta uma pergunta antes de qualquer outra.

## O que muda quando a entrada não é texto?

Por dentro, menos do que parece. Uma imagem é uma grade de números ([capítulo 2](/ia/como-a-maquina-aprende/)). Um áudio é uma sequência de medidas da onda sonora. Tudo vira pedaços, os pedaços viram vetores, e a mesma engrenagem do [capítulo 3](/ia/por-dentro-do-modelo/) calcula o que vem depois.

Se a engrenagem é a mesma, o que você esperaria dos defeitos? Que fossem os mesmos também: quando falta informação, ela completa com o que é plausível.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** antes de abrir cada aba, responda: se a transcrição de uma visita trouxer uma frase que ninguém disse, quem vai perceber — e quando?
</div>

<div data-widget="tabs" data-title="Quatro conversões e o que perguntar a cada uma" data-sub="Clique em cada aba. Em todas, a última linha é uma pergunta, não uma resposta." markdown="1">

#### Voz → texto

**O que se ganha.** O relato de uma visita, a reunião, a aula: tudo vira texto pesquisável, que pode ser resumido e comparado.

**Onde costuma errar.** Nomes próprios, números, sotaques, falas sobrepostas. E um erro mais estranho: trechos de silêncio ou ruído podem virar frases inteiras que ninguém disse. [Um estudo](https://arxiv.org/abs/2402.08021) com um sistema de transcrição muito usado encontrou frases inventadas em cerca de 1% das gravações, mais vezes em falas com pausas longas. Eu mesmo já recebi uma transcrição que terminava com um [crédito de legendagem que eu nunca ditei](/blog/pt/a-speech-to-text-slip/).

**A pergunta.** Quem ouve o áudio original antes de a transcrição virar registro oficial?

#### Imagem → dados

**O que se ganha.** A foto da lista de chamada em papel vira tabela. O documento escaneado vira campos preenchidos.

**Onde costuma errar.** Letra de mão, um 1 que vira 7, uma linha pulada, uma coluna deslocada. O resultado vem sempre limpo e alinhado — inclusive quando está errado.

**A pergunta.** Como conferir sem refazer tudo à mão? (Pista: totais que precisam bater e uma amostra sorteada.)

#### Texto → imagem

**O que se ganha.** Ilustração para um material, esboço de uma tela, variações de uma ideia em segundos.

**Onde costuma errar.** Repete os estereótipos do treino ([capítulo 4](/ia/vies/)): peça "uma pessoa cientista" algumas vezes e observe quem aparece. Pode produzir algo que parece fotografia de uma pessoa real.

**A pergunta.** Quem vê essa imagem vai saber que ela foi gerada? Deveria saber?

#### Texto → voz e vídeo

**O que se ganha.** Narração de um material, vídeo curto explicativo, acessibilidade para quem não lê.

**Onde costuma errar.** É o uso que mais consome energia ([capítulo 6](/ia/custo-fisico/)). E é o que mais se aproxima de colocar palavras na boca de alguém.

**A pergunta.** De quem é a voz e o rosto — e essa pessoa concordou?

</div>

## Então o que é diferente do texto?

Três coisas, e as três pedem mais cuidado, não menos:

1. **Conferir dá mais trabalho.** Reler um parágrafo leva segundos; ouvir de novo dez minutos de áudio leva dez minutos. O que é trabalhoso de conferir tende a não ser conferido.
2. **O dado é mais sensível.** Voz e rosto identificam uma pessoa de um jeito que o nome não identifica ([capítulo 5](/ia/dados-e-privacidade/)). Um áudio de visita traz, de quebra, a casa, as crianças ao fundo, o que a família contou em confiança.
3. **Custa mais**, em dinheiro e em energia.

Uma pergunta que eu deixo sem resposta de propósito: transcrever tudo é registrar melhor o trabalho, ou é passar a guardar o que antes, por bons motivos, se perdia?

## Um caminho, antes de gravar ou fotografar

1. **De quem é** a voz, o rosto, a letra? Essa pessoa sabe?
2. **Onde o arquivo original fica**, e por quanto tempo?
3. **Quem confere a saída**, e como: tudo, uma amostra, os totais?
4. **O que acontece se estiver errado?** Um resumo de reunião com um erro é diferente de um registro de visita com um erro.
5. **Precisa mesmo?** Às vezes três linhas escritas por quem esteve lá valem mais que quarenta minutos transcritos.

<div class="g-box g-key" markdown="1">
**Para guardar**

- Voz, imagem e vídeo passam pela mesma engrenagem do texto e herdam o mesmo defeito: completar com o plausível.
- A saída vem sempre bem formatada. Boa aparência não é sinal de acerto.
- Quanto mais difícil de conferir e mais sensível o dado, mais a decisão de usar precisa ser tomada antes, não depois.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** a família sabe que a conversa vira áudio, e o áudio vira texto? O que eu ganho ao transcrever tudo — e o que eu passo a guardar que antes não guardava?
- **Um caminho para responder:** transcrever dez áudios e ouvir os dez, conferindo; anotar onde errou (nomes, números, silêncios); decidir com a equipe o que vira registro e o que é apagado; perguntar antes de gravar.
- **Peça nova no projeto:** a regra do que pode ser gravado, quem confere e por quanto tempo fica guardado.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (30 min) — caça ao erro bem formatado

Em grupos: (1) gravem um minuto de conversa com pelo menos três nomes próprios, dois números e uma pausa longa, e transcrevam com uma ferramenta; (2) fotografem uma tabela escrita à mão com dez linhas e peçam a conversão para planilha. Marquem todos os erros. Depois troquem os resultados **sem os originais** com outro grupo: quantos erros o outro grupo consegue achar só olhando a saída?

#### Perguntas de discussão

- Quais erros só apareceram comparando com o original? O que isso diz sobre guardar ou apagar o original?
- Em que situação do seu trabalho um áudio transcrito viraria documento oficial? Quem deveria assinar embaixo?
- Você gostaria de receber um aviso quando a voz de um atendimento é sintética? Por quê?
- Que conteúdo você decidiria nunca gravar, mesmo que a tecnologia permitisse?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- KOENECKE, Allison *et al.* **Careless Whisper**: speech-to-text hallucination harms. [*S. l.*]: arXiv, 2024. DOI: <https://doi.org/10.48550/arXiv.2402.08021>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Estou perdendo algo com IA multimodal?**. [*S. l.*]: efrem.io, 27 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/am-i-missing-out-on-multimodal-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Gravar a call para pensar junto com o Claude**. [*S. l.*]: efrem.io, 18 ago. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/recording-calls-to-think-with-claude/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Um vacilo do speech-to-text que mostra de onde veio o treinamento**. [*S. l.*]: efrem.io, 17 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/a-speech-to-text-slip/>. Acesso em: 13 nov. 2026.

</div>
