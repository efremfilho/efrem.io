---
title: "Foi isso mesmo que a pessoa disse?"
subtitle: "Voz, imagem, vídeo e fidelidade ao registro."
description: "Áudio vira texto, foto vira tabela, texto vira imagem. O que se ganha, o que pode sair errado sem ninguém perceber — e de quem é a voz?"
lang: pt-BR
ref: multimodal
order: 14
part: 3
permalink: /ia/alem-do-texto/
interactive: "quatro conversões e o que perguntar a cada uma"
piece: "a regra do que pode ser gravado e por quanto tempo fica guardado"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 14

O teste de comunicação reservado lá atrás não escolheu um formato vencedor: uma família pediu áudio para ouvir depois; outra preferiu uma mensagem curta que pudesse encaminhar. Bia queria manter as duas saídas; Caio lembrou que cada versão precisava acompanhar as mudanças de orientação. Bia passou a gravar também as próprias notas depois das visitas: preencher o novo formulário já tinha custado um contato, e falar parecia mais rápido. Lia pediu a um agente transcrições e resumos por família. Caio revisou um deles com Bia. Onde ela dizia "talvez tenha mudado de turno", o resumo afirmava que a estudante tinha mudado. Outra frase aparecia como fala da mãe, mas era uma interpretação de Bia. Voltar ao áudio resolveu aquelas dúvidas. Resolveria as dos registros que ninguém conseguisse revisar naquele dia? Bia queria manter a voz para não perder contexto; Caio queria um registro curto para o atendimento seguir. O que precisava chegar à próxima pessoa: o que foi dito, o que foi entendido ou o que ficou por conferir?
</div>

Por muito tempo eu só consegui usar IA generativa profissionalmente com texto — cheguei a [perguntar em público se estava perdendo alguma coisa](/blog/pt/am-i-missing-out-on-multimodal-ai/). Hoje [gravo conversas para pensar depois](/blog/pt/recording-calls-to-think-with-claude/). Falar com a máquina, para mim, depende do contexto: às vezes falo, quase sempre para pensar alto. Mas ainda prefiro escrever. Escrevendo, eu penso antes de enviar. A máquina passou a aceitar o mundo no formato em que ele acontece. O uso que mais me serve é dos mais simples: compartilho a tela com um assistente de voz e peço que me guie numa configuração que eu não domino. "Clique no menu da esquerda. Está vendo o botão à direita?" É um suporte técnico que enxerga o que eu estou enxergando.

Isso tem nome — modelos **multimodais** — e levanta uma pergunta antes de qualquer outra.

## O que muda quando a entrada não é texto?

Uma imagem pode ser representada como uma grade de números ([capítulo 2](/ia/como-a-maquina-aprende/)); um áudio, como medidas da onda sonora. Isso permite levar os materiais à computação. Não quer dizer que toda ferramenta use a mesma engrenagem para tudo.

Há sistemas de transcrição treinados para [prever texto a partir de áudio](https://arxiv.org/abs/2212.04356). Há geradores de imagem que [aprendem a remover ruído em etapas](https://arxiv.org/abs/2006.11239): pense numa imagem surgindo de um chuvisco, uma analogia para o processo, não uma fotografia escondida lá dentro. Não precisa dominar essas contas para usar; precisa perceber que pedir uma transcrição, ler uma imagem e gerar outra imagem são tarefas diferentes.

A pergunta prática continua: o que foi capturado do original e o que foi acrescentado ou interpretado? O [capítulo 3](/ia/por-dentro-do-modelo/) ajuda a desconfiar da fluência; ela também não prova fidelidade quando a entrada é voz ou imagem.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** antes de abrir cada aba, responda: se a transcrição de uma visita trouxer uma frase que ninguém disse, quem vai perceber — e quando?
</div>

<div data-widget="tabs" data-title="Quatro conversões e o que perguntar a cada uma" data-sub="Clique em cada aba. Em todas, a última linha é uma pergunta, não uma resposta." markdown="1">

#### Voz → texto

**O que se ganha.** O relato de uma visita, a reunião, a aula: tudo vira texto pesquisável, que pode ser resumido e comparado.

**Onde costuma errar.** Nomes próprios, números, sotaques, falas sobrepostas. E um erro mais estranho: trechos de silêncio ou ruído podem virar frases inteiras que ninguém disse. [Um estudo](https://arxiv.org/abs/2402.08021) com um sistema de transcrição muito usado encontrou frases inventadas em cerca de 1% das gravações, mais vezes em falas com pausas longas. Eu mesmo já recebi uma transcrição que terminava com um [crédito de legendagem que eu nunca ditei](/blog/pt/a-speech-to-text-slip/). E, [numa tentativa de transcrever uma aula longa com um modelo aberto](/blog/pt/over-engineering-a-confession/), vi a transcrição empacar depois de umas duas horas e repetir a mesma frase sem parar. Perdi dois dias tentando consertar na unha. A saída levou um minuto: tirar o áudio do vídeo, baixar a qualidade e subir numa ferramenta pronta. Complicar demais também é um jeito de errar.

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

## Letra de mão ainda é o ponto fraco?

Menos do que eu escrevi ali em cima. Um amigo professor, que trabalha com registros de cartório de mais de um século, me disse que estava tranquilo: os arquivos que ele lê, nenhuma IA leria. Apostamos. O veredito dele, olhando o resultado: está lendo melhor do que estudantes de doutorado.

O detalhe que me interessa é outro. Nas páginas queimadas ou rasgadas, a ferramenta *deduz* o que estaria escrito ali. Ela lê muito bem — e completa com o plausível, na mesma página. Como separar uma coisa da outra?

## E quando o resumo é a única coisa que alguém lê?

Num planejamento de que participei, a pesquisa de apoio tinha trinta páginas. Quem leu as trinta? Eu. A partir delas saíram uma página de resumo e um áudio de sete minutos — e foi interessante ver qual formato funcionou, e para quem: cada perfil de pessoa preferiu um.

A lição não é sobre a ferramenta. É a que toda pessoa de produto aprende apanhando: meu trabalho não é fazer uma coisa sofisticada e mandar. É ter empatia com o jeito como a mensagem chega do outro lado — e fazer o outro lado querer consumir.

Fica uma pergunta que eu não sei responder bem: quem conferiu os números da página que todo mundo leu?

## "Usar IA" é usar um modelo só?

**O que era:** um processo que recebe fotos de documentos de identidade. Ler o texto da imagem (o velho OCR) é a parte fácil.

**Como ficou:** o sistema hoje combina três coisas diferentes:

- **IA generativa** para ler e interpretar: o documento está inteiro no enquadramento? Tem reflexo cobrindo algum campo? Está legível?
- **Algoritmos clássicos de visão**, que não são generativos, para procurar adulteração: bordas estranhas, uma foto colada por cima, sinais de edição.
- **Consulta determinística** a um serviço de cadastro, para ver se o número do documento confere com o nome.

Nenhuma dessas etapas, sozinha, prova que um documento é autêntico.

**O que aprendi:** neste caso, "usar IA" não significa usar *um* modelo. Significa escolher a técnica certa para cada pedaço — e, onde existe uma fonte confiável, consultar a fonte em vez de pedir opinião ([capítulo 10](/ia/pedir-o-script/)). O fluxo envolve dados pessoais e pode envolver dados sensíveis; vale o cuidado discutido no [capítulo 5](/ia/dados-e-privacidade/): finalidade e base legal aplicável, acesso mínimo e testes com dados fictícios quando não há necessidade de usar os reais.

## Então o que é diferente do texto?

Três coisas, e as três pedem mais cuidado, não menos:

1. **Conferir dá mais trabalho.** Reler um parágrafo leva segundos; ouvir de novo dez minutos de áudio leva dez minutos. O que é trabalhoso de conferir tende a não ser conferido.
2. **O dado é mais sensível.** Voz e rosto identificam uma pessoa de um jeito que o nome não identifica ([capítulo 5](/ia/dados-e-privacidade/)). Um áudio de visita traz, de quebra, a casa, as crianças ao fundo, o que a família contou em confiança.
3. **Custa mais**, em dinheiro e em energia.

Uma pergunta que eu deixo sem resposta de propósito: transcrever tudo é registrar melhor o trabalho, ou é passar a guardar o que antes, por bons motivos, se perdia?

## O que decidir antes de gravar ou fotografar?

1. **De quem é** a voz, o rosto, a letra? Essa pessoa sabe?
2. **Onde o arquivo original fica**, e por quanto tempo?
3. **Quem confere a saída**, e como: tudo, uma amostra, os totais?
4. **O que acontece se estiver errado?** Um resumo de reunião com um erro é diferente de um registro de visita com um erro.
5. **Precisa mesmo?** Às vezes três linhas escritas por quem esteve lá valem mais que quarenta minutos transcritos.


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Falar poupa tempo de registro, mas ouvir de novo e conferir também ocupa alguém. Quando uma interpretação passa a parecer uma declaração da família?
- **Caminhos na mesa:**
  - *Bia:* guardar as notas de voz e consultar quando houver dúvida. Preserva detalhes, mas acumula informações sobre famílias e exige escuta posterior.
  - *Caio:* registrar só situação, próximo passo e dúvida pendente. Facilita o uso, mas pode apagar contexto necessário para interpretar o caso.
  - *Lia:* transcrever e manter cada resumo ligado ao trecho de origem. Ajuda a conferir, mas multiplica os registros e não corrige por si só uma interpretação equivocada.
- **O que o time fez, por enquanto:** testou a proposta de Lia em dez notas, com revisão de quem fez a visita. Bia corrigiu a atribuição da fala; Caio marcou a mudança de turno como hipótese. O time definiu acesso e prazo de guarda. A transcrição andou rápido; a conferência consumiu parte da tarde, e o restante não entrou como fato confirmado.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Representação e transformação:** áudio, imagem e texto podem passar por modelos e processos diferentes.
- **Fidelidade:** transcrever, resumir e gerar conteúdo são tarefas distintas. Uma saída bem apresentada pode omitir, acrescentar ou mudar informação.
- **Conferência:** a escolha da mídia também depende de conseguir comparar com o original e de quem sofrerá com um erro.

O que muda entre conferir uma transcrição e conferir o resumo feito a partir dela?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Escolha um material seu que possa usar no experimento: uma nota falada, um desenho ou uma imagem. Transforme-o em outra mídia e compare com o original. O que ficou mais fácil de entender? Que dúvida virou certeza, que detalhe sumiu ou foi acrescentado? Como a próxima pessoa saberia o que ainda precisa conferir?

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

- HO, Jonathan; JAIN, Ajay; ABBEEL, Pieter. **Denoising diffusion probabilistic models**. arXiv, 2020. Disponível em: <https://arxiv.org/abs/2006.11239>. Acesso em: 15 nov. 2026.
- KOENECKE, Allison *et al.* **Careless Whisper**: speech-to-text hallucination harms. [*S. l.*]: arXiv, 2024. DOI: <https://doi.org/10.48550/arXiv.2402.08021>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Estou perdendo algo com IA multimodal?**. [*S. l.*]: efrem.io, 27 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/am-i-missing-out-on-multimodal-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Gravar a call para pensar junto com o Claude**. [*S. l.*]: efrem.io, 18 ago. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/recording-calls-to-think-with-claude/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Over-engineering: uma confissão**. [*S. l.*]: efrem.io, 22 out. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/over-engineering-a-confession/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Um vacilo do speech-to-text que mostra de onde veio o treinamento**. [*S. l.*]: efrem.io, 17 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/a-speech-to-text-slip/>. Acesso em: 13 nov. 2026.
- RADFORD, Alec et al. **Robust speech recognition via large-scale weak supervision**. arXiv, 2022. Disponível em: <https://arxiv.org/abs/2212.04356>. Acesso em: 15 nov. 2026.

*Notas:* Radford et al. (2022) e Ho, Jain e Abbeel (2020) exemplificam mecanismos diferentes para transcrição e geração de imagens. O chuvisco é uma analogia didática para a remoção de ruído. O relato de excesso de complexidade está documentado no post do autor, citado nas referências.

</div>
