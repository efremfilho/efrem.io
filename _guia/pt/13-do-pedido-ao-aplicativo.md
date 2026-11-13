---
title: "Do pedido ao aplicativo"
description: "Hoje uma descrição vira software funcionando em minutos. Se o código deixou de ser a parte difícil, qual é a parte difícil?"
lang: pt-BR
ref: app-builders
order: 13
part: 3
permalink: /ia/do-pedido-ao-aplicativo/
interactive: "o que acontece quando você não diz?"
piece: "o painel funcionando, com dados fictícios"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 13

O script contava as faltas. Mas a lista ficava no computador de Lia, e quem faz as visitas passa o dia na rua, com o celular na mão. Alguém sugeriu: "descreve o que você quer, que o gerador faz o aplicativo". Ela descreveu em uma linha. Em dois minutos havia na tela um aplicativo bonito — que mostrava nome completo, endereço e um selo vermelho ao lado de cada estudante. Ninguém tinha pedido o selo. De onde ele veio?
</div>

Existe uma família de ferramentas que recebe uma descrição em linguagem natural e devolve um aplicativo funcionando: tela, regras, banco de dados e um endereço para abrir no celular. Eu chamo de geradores de aplicativos; os nomes comerciais mudam todo semestre e não importam aqui.

O que importa é que elas mudaram a pergunta. Durante décadas a pergunta foi "quem consegue construir isso?". Agora é outra.

## O que um gerador de aplicativos faz por mim?

Ele toma, no seu lugar, centenas de decisões de engenharia: que linguagem usar, como organizar os arquivos, onde guardar os dados, como publicar. Para quem não é da área, isso é uma libertação — eu passei meses [apanhando e aprendendo](/blog/pt/chapter-5-a-product-person-can-build-with-lovable/) com uma delas e saí convencido de que uma pessoa de produto consegue, sim, construir as três camadas do [capítulo 7](/ia/pensamento-computacional/).

Também saí convencido de outra coisa: a limitação dessas ferramentas [é uma vantagem para a maioria das pessoas](/blog/pt/non-technical-people-are-better-off-in-lovable/). Eu não quero decidir arquitetura. Quero que isso esteja decidido, e bem.

Mas repare no verbo: ele *decide*. E a pergunta deste capítulo é o que acontece com as decisões que não são de engenharia.

## O que acontece quando eu não digo?

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** no experimento, desmarque "Regras" e "O que NÃO faz". Quem colocou aquele selo e aquele botão no aplicativo — o gerador, ou quem deixou de dizer?
</div>

<div data-widget="pedido"></div>

O gerador nunca deixa um espaço em branco. O que você não especifica, ele preenche com o que é mais comum em aplicativos parecidos. Às vezes o mais comum serve. Às vezes o mais comum é um selo de "alto risco" ao lado do nome de uma adolescente.

Daí a pergunta que vale fazer antes de cada pedido: *o que aqui eu acho tão óbvio que nem escrevi?*

## Como conversar com ele?

O que funcionou para mim, depois de muitas horas, cabe em poucas linhas — e nenhuma delas é técnica:

- **Peça como quem define produto**, não como quem dá ordem: problema, para quem, o que entra, o que sai.
- **Mostre.** Um desenho da tela ou do fluxo, mesmo feito à mão, vale mais que três parágrafos.
- **Um passo de cada vez.** Pedido grande gera erro grande, difícil de achar.
- **Aponte a camada.** "Ficou feio", "está contando errado" e "sumiu o que cadastrei" são pedidos diferentes.
- **Leia o que ele diz que fez.** Quando algo quebra, a explicação costuma estar ali.

Escrevi isso no calor da hora: [o diferencial não é a velocidade, é a autonomia](/blog/pt/chapter-3-autonomy-not-speed/) — e saber pedir é, de longe, o que mais pesa.

## Se o código não é a parte difícil, qual é?

Tudo o que vem depois de "funcionou na minha tela". Onde os dados ficam guardados? Quem consegue acessá-los? O que acontece quando o serviço sai do ar? Quem percebe se a contagem começar a errar? Como eu escrevi uma vez, [o código não é a parte difícil](/blog/pt/code-is-not-the-hard-part/): difícil é manter o software de pé e seguro.

Isso ajuda a separar dois usos muito diferentes:

| | Um aplicativo para mim | Um aplicativo de que outras pessoas dependem |
|---|---|---|
| **Se quebrar** | Eu percebo e refaço | Alguém fica sem atendimento |
| **Dados** | Meus, ou inventados | De terceiros |
| **Quem revisa** | Eu | Alguém que entenda de tecnologia |
| **Dá para improvisar?** | Dá, e é ótimo | Não |

Para o primeiro caso, estamos numa fase parecida com a dos primeiros sites feitos em casa — [e isso é bom](/blog/pt/the-webmaster-era-of-vibe-coding/). Para o segundo, a minha regra é simples: nada vai para uso real sem a revisão de alguém da área.

## Quando eu paro e chamo alguém?

Quatro perguntas. Um "sim" em qualquer uma já é motivo:

1. Tem dado pessoal de outras pessoas?
2. Mais alguém vai depender disso para trabalhar?
3. Se sair do ar por um dia, alguém é prejudicado?
4. Mexe com dinheiro, ou toma alguma decisão sobre a vida de alguém?

Chamar alguém não é fracasso de autonomia. É saber onde a sua termina.

## Um caminho

1. Escreva as sete linhas do mini-PRD (capítulo 7).
2. Gere, olhe e pergunte ao gerador o que ele presumiu.
3. Use por uma semana **só com dados inventados**.
4. Confira com casos cuja resposta você conhece.
5. Guarde o projeto em um repositório ([capítulo 11](/ia/repositorio-e-memoria/)).
6. Passe pelas quatro perguntas acima antes de colocar dado real.

<div class="g-box g-key" markdown="1">
**Para guardar**

- O gerador decide a engenharia por você. As decisões de produto, de ética e de segurança continuam suas — e, se você não tomar, ele toma.
- O que você não diz é preenchido com o mais comum.
- Construir ficou fácil. Manter de pé, seguro e correto continua exigindo gente.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** o que no meu pedido eu achei óbvio e não escrevi? Se o aplicativo sair do ar numa segunda-feira, o que a equipe faz?
- **Um caminho para responder:** gerar de novo a partir das sete linhas; usar uma semana só com dados inventados; conferir com os dez casos contados à mão; pedir que alguém de tecnologia olhe antes de entrar qualquer dado real.
- **Peça nova no projeto:** o painel funcionando no celular da equipe, com dados fictícios.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (50 min, em laboratório) — o pedido de outra pessoa

Cada dupla escreve o mini-PRD de uma solução pequena para um problema real. As duplas **trocam** os mini-PRDs e geram o aplicativo a partir do texto recebido, sem conversar com quem escreveu. Ao fim, quem escreveu avalia o resultado e lista tudo o que o gerador teve de adivinhar.

#### Perguntas de discussão

- O que o gerador adivinhou certo? Por que você acha que acertou?
- Qual linha do seu mini-PRD estava mais vaga do que você imaginava?
- O aplicativo que você recebeu poderia ser usado amanhã por uma organização de verdade? O que falta, e quem faria essa parte?
- Onde termina "eu consigo fazer" e começa "eu preciso de alguém"?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- MARANHÃO FILHO, Éfrem. **A era dos webmasters do vibe coding**. [*S. l.*]: efrem.io, 27 nov. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/the-webmaster-era-of-vibe-coding/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 3: a autonomia é o diferencial, não a velocidade**. [*S. l.*]: efrem.io, 1 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-3-autonomy-not-speed/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 5: uma pessoa de produto consegue buildar com o Lovable**. [*S. l.*]: efrem.io, 22 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-5-a-product-person-can-build-with-lovable/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O código não é a parte difícil**. [*S. l.*]: efrem.io, 26 mar. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/code-is-not-the-hard-part/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Pessoas não técnicas estão melhor no Lovable do que em ferramenta de dev**. [*S. l.*]: efrem.io, 25 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/non-technical-people-are-better-off-in-lovable/>. Acesso em: 13 nov. 2026.

</div>
