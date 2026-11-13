---
title: "O que é (e o que não é) IA"
description: "Duas palavras resolvem quase toda a confusão: autonomia e adaptatividade. E uma calculadora ajuda a entender o que fica de fora."
lang: pt-BR
ref: what-is-ai
order: 1
part: 1
permalink: /ia/o-que-e-ia/
interactive: "quiz: é IA ou não é?"
piece: "lista de ferramentas da equipe: regra ou aprende?"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 1

Lia coordena, em uma organização da sociedade civil, um projeto de busca ativa: ir atrás de adolescentes que pararam de aparecer na escola, antes que o abandono vire definitivo. São quatro pessoas para doze escolas. Na reunião com a secretaria de educação, uma empresa fornecedora apresentou "uma IA que prevê quem vai evadir". A sala inteira balançou a cabeça. Lia anotou uma pergunta no canto do caderno e não teve coragem de fazer: *isso aprende alguma coisa, ou é a planilha de faltas com outro nome?*
</div>

Toda aula minha de introdução começa do mesmo jeito: alguém diz que "a IA decidiu", "a IA quis" ou "a IA entendeu". Antes de falar de ferramenta, eu preciso desmontar essa frase. Não por preciosismo — é que quem acha que a máquina *quis* alguma coisa para de procurar o humano que escolheu.

## Dá para definir IA em duas palavras?

"Inteligência artificial" é um termo guarda-chuva e ninguém concorda 100% com uma definição. Para trabalhar, eu uso a do curso aberto [Elements of AI](https://course.elementsofai.com/1/1), da Universidade de Helsinque, que resolve bem na prática. Um sistema merece ser chamado de IA quando tem duas características:

- **Autonomia**: consegue executar tarefas em ambientes complexos sem que alguém guie cada micro-passo.
- **Adaptatividade**: melhora o desempenho conforme processa mais dados. Ele aprende com a experiência.

Repare no que **não** está na definição: consciência, intenção, entendimento, vontade. Nada disso é necessário — e nada disso existe nos sistemas que usamos hoje.

## Uma calculadora é inteligente?

A calculadora de bolso é uma máquina impressionante. Faz em um instante contas que eu levaria minutos para fazer. E mesmo assim não é IA, por dois motivos:

1. **Não é autônoma.** Ela só faz o que cada tecla manda, na ordem em que você aperta. Não avalia contexto, não decide o próximo passo.
2. **Não é adaptativa.** Depois de dez contas ou de dez milhões, ela é exatamente a mesma. Não percebe que você sempre calcula 15% de gorjeta, não fica melhor em nada.

Uma planilha cheia de fórmulas é a mesma coisa em escala maior: regras fixas, escritas por alguém, executadas sempre do mesmo jeito.

| | Sistemas com IA | Sistemas sem IA |
|---|---|---|
| **Exemplos** | Filtro de spam, recomendação de filmes, assistentes de texto | Calculadora, planilha com fórmulas, chatbot de menu |
| **Autonomia** | Avalia o contexto e conduz tarefas de vários passos | Executa um comando humano por vez |
| **Adaptatividade** | Ajusta o comportamento a partir dos dados | Faz sempre igual; não muda com o uso |
| **Como nasce o comportamento** | É *aprendido* a partir de exemplos | É *escrito* regra por regra |

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** no quiz, faça a cada item a pergunta que Lia não fez: isso segue uma regra que alguém escreveu, ou aprendeu com dados? Como você descobriria, se ninguém contasse?
</div>

<div data-widget="quiz-ia"></div>

## Por que essa distinção importa?

Porque ela muda a pergunta que você faz quando algo dá errado.

Em um sistema sem IA, o erro está em uma regra: alguém escreveu a fórmula errada, você acha a célula e corrige. Em um sistema com IA, o comportamento veio dos **dados** e das **escolhas de quem montou o treino** — e ninguém consegue apontar "a linha" onde o erro mora. Isso explica boa parte dos próximos capítulos: [como o aprendizado funciona](/ia/como-a-maquina-aprende/), [de onde vem o viés](/ia/vies/) e por que [a responsabilidade nunca é da máquina](/ia/generalista-responsavel/).

Também muda a expectativa. Um sistema que aprende com exemplos é ótimo em situações parecidas com as que já viu e imprevisível nas que nunca viu. Ele não "sabe" que não sabe.

<div class="g-box g-key" markdown="1">
**Para guardar:** IA não é mágica, é matemática aplicada guiada por escolhas humanas. Autonomia e adaptatividade descrevem *o que o sistema faz*; nenhuma das duas implica consciência ou intenção.
</div>

## E os assistentes de conversa?

Eles passam nos dois critérios, com um detalhe que confunde muita gente. A adaptatividade deles aconteceu **no treino**: bilhões de textos ajustaram o modelo antes de ele chegar até você. Durante a sua conversa, o modelo não está reaprendendo nada — ele só usa o que está escrito na janela da conversa. Quando parece que ele "lembrou" de você, é porque alguém (você ou o produto) colocou essa informação de volta no contexto. Esse detalhe é tão importante que ganhou um capítulo inteiro: [Contexto é tudo](/ia/contexto/).

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** se aprendeu com dados, dados de quem? Se é uma regra, quem escreveu — e eu posso ler?
- **Um caminho para responder:** pedir uma demonstração com um caso que ela conhece bem; perguntar o que acontece quando o sistema erra e quem corrige; olhar para as ferramentas que a equipe já usa e separar as que seguem regra das que aprendem.
- **Peça nova no projeto:** a lista das ferramentas que a equipe já usa, separadas em "segue regra" e "aprende".
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (15 min)

Peça para cada pessoa listar cinco tecnologias que usou hoje antes do almoço. Em duplas, classifiquem cada uma com os dois critérios. O objetivo não é acertar: é discutir os casos de fronteira (o termostato, o corretor ortográfico, o semáforo inteligente).

#### Perguntas de discussão

- Se um sistema é autônomo mas não adaptativo, quem responde pelos erros dele? E se for adaptativo?
- Por que dizemos "a IA decidiu" e nunca "a planilha decidiu"? O que essa escolha de palavras esconde?
- Um sistema que aprendeu com dados de cinco anos atrás e nunca mais foi atualizado ainda é adaptativo?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- UNIVERSITY OF HELSINKI; MINNALEARN. **Elements of AI**: how should we define AI? [*S. l.*], [2018?]. Curso on-line. Disponível em: <https://course.elementsofai.com/1/1>. Acesso em: 13 nov. 2026.

*Notas:* As definições originais do curso: autonomia é "a capacidade de executar tarefas em ambientes complexos sem orientação constante de quem usa"; adaptatividade é "a capacidade de melhorar o desempenho aprendendo com a experiência" (tradução minha).

</div>
