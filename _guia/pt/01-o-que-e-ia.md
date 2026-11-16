---
title: "O que estamos chamando de IA?"
subtitle: "Regras, aprendizado e escolhas humanas."
description: "Regras escritas, comportamentos aprendidos e escolhas humanas. Como investigar o que um sistema faz antes de aceitar o rótulo de IA?"
lang: pt-BR
ref: what-is-ai
order: 1
part: 1
permalink: /ia/o-que-e-ia/
interactive: "quiz: regra escrita ou aprendida?"
piece: "lista de ferramentas da equipe: regra ou aprende?"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 1

Lia, Bia e Caio trabalham numa organização que faz busca ativa: ir atrás de adolescentes que pararam de aparecer na escola, antes que o abandono vire definitivo. São doze escolas e pouca gente. Na reunião com a secretaria de educação, uma fornecedora apresentou "uma IA que prevê quem vai evadir". Iara queria contratar antes da volta às aulas: a proposta incluía treinamento e suporte. Caio achava que o time conseguia construir e mudar as regras sem depender de fora. Bia queria saber quem faria as visitas enquanto construíssem. Lia pediu prazo até a volta às aulas para mostrar uma versão. "E quem atende quando parar?", perguntou Iara. Lia ainda não tinha essa resposta. Na saída, pediu ao agente um rascunho de lista de acompanhamento, com dados inventados. Bia trocou "risco" por "próximo contato" e tentou organizar a manhã seguinte. A hipótese dela era outra: talvez o time precisasse primeiro deixar de perder o fio de quem já estava acompanhando. Prever quem vai sair e organizar quem precisa de contato eram o mesmo problema?
</div>

Uma convenção antes de começar: neste guia, quando eu escrevo "IA" sem adjetivo, estou falando de IA generativa — os modelos que produzem texto, imagem, código. Quando for outra coisa, como o aprendizado de máquina do próximo capítulo, eu aviso.

E um aviso sobre a palavra. Eu já vi, por dentro, uma automação que existia havia tempos virar "área de agentes" de um dia para o outro. Valor a mais entregue: zero. Efeito no mercado: enorme. Então, antes de falar de ferramenta, vale desconfiar do rótulo — e de frases como "a IA decidiu", "a IA quis", "a IA entendeu". Quem acha que a máquina *quis* alguma coisa para de procurar a pessoa que escolheu. O erro contrário também me incomoda: ninguém sai de uma aula minha dizendo que a IA é burra. É uma ferramenta, e a gente tem que saber usar.

## Dá para definir IA em duas palavras?

O curso aberto [Elements of AI](https://course.elementsofai.com/1/1) propõe olhar para **autonomia**, agir sem alguém guiar cada passo, e **adaptatividade**, ajustar o comportamento com a experiência. São duas boas perguntas para fazer a um sistema. Não são um teste universal de "tem as duas, então é IA".

A [definição da OCDE](https://doi.org/10.1787/623da898-en) admite graus diferentes de autonomia e adaptação depois que o sistema entra em uso. Há IA baseada em conhecimento e regras; há modelos treinados que ficam fixos enquanto respondem. Aprender durante o treino não é o mesmo que aprender com cada conversa.

E nenhuma dessas capacidades prova consciência, intenção ou vontade. Para quem constrói, a pergunta continua: de onde vem o comportamento que estou vendo, e o que autorizei o sistema a fazer?

## Uma calculadora é inteligente?

Uma calculadora de bolso executa operações definidas. Uma planilha pode aplicar fórmulas a milhares de linhas sem que alguém aperte uma tecla para cada conta. Fazer muitos passos automaticamente, portanto, não basta para distinguir IA.

Para começar a investigar, compare duas maneiras de construir uma solução:

| | Regras escritas diretamente | Comportamento aprendido com exemplos |
|---|---|---|
| **Exemplo** | Avisar quando alguém acumula cinco faltas | Estimar abandono a partir de registros históricos |
| **De onde vem a regra** | Alguém escolheu o limite e escreveu a condição | O treino ajustou relações nos dados segundo um objetivo |
| **O que perguntar** | Por que esse limite? A conta implementa o combinado? | Que exemplos entraram? Em que situações a estimativa falha? |
| **Em uso** | Pode executar sem intervenção a cada passo | Pode usar um modelo fixo, sem novo aprendizado naquele momento |

As duas maneiras podem aparecer no mesmo produto. Este quadro compara maneiras de construir, não separa toda a história da computação em "com IA" e "sem IA".

<figure class="g-board">
	<div class="g-board-title">Quadro de conceito · Onde mora cada peça <span>Do guarda-chuva da IA à escolha de engenharia</span></div>
	<div class="g-board-cols">
		<div class="g-board-box">
			<span class="g-board-kicker">1. As bonecas russas da área</span>
			<div class="g-board-ring">
				<strong>Inteligência Artificial (IA)</strong> — sistemas com graus de autonomia ou adaptação (inclui regras escritas e busca)
				<div class="g-board-ring r2">
					<strong>Aprendizado de Máquina (ML)</strong> — sistemas que ajustam parâmetros a partir de exemplos
					<div class="g-board-ring r3">
						<strong>Aprendizado Profundo (Deep Learning)</strong> — redes neurais em várias camadas
						<div class="g-board-ring r4">
							<strong>IA Generativa</strong> — modelos (como os baseados em Transformer) que geram texto, código, áudio ou imagem
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="g-board-box accent">
			<span class="g-board-kicker">2. O que entra e o que sai na bancada</span>
			<code class="g-board-math">Regra escrita:
Dados + Regra explícita  ──►  Saída</code>
			<p>Alguém escolheu o critério (ex.: <code>faltas >= 5</code>). Se errar, inspecione a regra escrita.</p>
			<code class="g-board-math">Aprendizado (treino):
Dados + Saída esperada   ──►  Pesos (modelo)
Uso (inferência):
Dados novos + Pesos      ──►  Estimativa / Geração</code>
			<p>Se errar, investigue os exemplos do treino, o que ficou de fora das colunas e o contexto da pergunta.</p>
		</div>
	</div>
	<figcaption><strong>Fontes do quadro:</strong> adaptado do diagrama de camadas das aulas de <em>Intro IA</em> do autor (Maranhão Filho, 2025), da distinção entre autonomia e adaptatividade do curso <em>Elements of AI</em> (University of Helsinki; MinnaLearn, 2018) e do marco conceitual de sistemas de IA da OCDE (OECD, 2024).</figcaption>
</figure>

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** no quiz, faça a cada item a pergunta que a Bia fez em voz alta: isso segue uma regra que alguém escreveu, ou aprendeu com dados? Como você descobriria, se ninguém contasse?
</div>

<div data-widget="quiz-ia"></div>

## Por que essa distinção importa?

Porque ela muda a pergunta que você faz quando algo dá errado.

Numa fórmula, posso inspecionar a regra escrita. Num modelo aprendido, preciso investigar também os exemplos e o treino: nem sempre o comportamento que quero mudar corresponde a uma instrução localizada. E os dois podem falhar por entrada errada ou por um problema na integração. É a ponte para [como o aprendizado funciona](/ia/como-a-maquina-aprende/), [de onde vem o viés](/ia/vies/) e [quem responde pelo resultado](/ia/generalista-responsavel/).

Também muda a expectativa: acertar exemplos conhecidos não prova que a solução funcionará na próxima situação. O que seria uma diferença pequena para você pode mudar muito a entrada da máquina. É isso que vale experimentar no capítulo seguinte.


## E os assistentes de conversa?

O comportamento deles depende de aprendizado com dados, mas isso não significa aprender de novo a cada mensagem. Boa parte dessa adaptação aconteceu **no treino**. Na conversa, o modelo usa o que aprendeu junto com o contexto disponível; responder de outro jeito não significa que seus pesos foram alterados naquele instante. O produto pode guardar informações e trazê-las de volta depois. Separar essas coisas importa tanto que ganhou um capítulo inteiro: [Contexto é tudo](/ia/contexto/).

## A IA nasceu numa caixinha de conversa?

Nas minhas [introduções de IA](https://efrem.io/intro-ia/), passo pela evolução antes de abrir a ferramenta. Vale fazer o mesmo aqui. O [vídeo que motivou esta retomada](https://www.youtube.com/watch?v=YovHdlRN7VM) conta a história com gente, apostas e frustrações. É um bom fio narrativo; os marcos abaixo vêm também dos trabalhos originais. Não precisa decorar o elenco. Precisa perceber que uma demonstração impressionante, uma descoberta e um produto são coisas diferentes.

Alan Turing começou com uma pergunta incômoda: [uma máquina pode pensar?](https://www2.cs.sfu.ca/~vaughan/teaching/415/papers/turing1950.html) Em vez de esperar um acordo sobre o significado de "pensar", propôs um jogo de imitação envolvendo perguntas e respostas por escrito. O deslocamento foi ótimo: sair da palavra e olhar para o comportamento — mesmo que conversar bem continue longe de provar consciência.

Depois, John McCarthy organizou [um encontro de pesquisa em Dartmouth](https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth), cuja proposta tratava a inteligência como algo que uma máquina poderia simular. A ambição era enorme. Pelo caminho vieram promessas que não se cumpriram e períodos de retração, os chamados *invernos da IA*, retomados no vídeo: a pesquisa continuou avançando, mas a expectativa tinha corrido muito na frente da entrega.

Uma das apostas era escrever o conhecimento como regras: se acontecer isto, faça aquilo. Os sistemas especialistas pertencem a essa história. Outra era fazer a máquina aprender com exemplos. Na prática, uma solução hoje combina regras, aprendizado e busca — e você vai fazer escolhas assim neste guia.

## O que mudou entre ganhar um jogo e aprender com exemplos?

Uma máquina [venceu Garry Kasparov num confronto de xadrez](https://www.ibm.com/history/deep-blue) combinando busca de jogadas, avaliação de posições e muita capacidade de cálculo. Foi um marco. Não era um assistente que você podia levar para qualquer problema. A fonte aqui é a própria empresa que construiu a máquina, contando sua realização.

Mais tarde, Alex Krizhevsky, Ilya Sutskever e Geoffrey Hinton mostraram [uma rede neural profunda classificando imagens](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html) com um avanço importante de desempenho. Dados, redes e placas capazes de fazer muitos cálculos em paralelo se encontraram. Em vez de alguém escrever cada regra para reconhecer uma imagem, o treino ajustava o modelo. O [próximo capítulo](/ia/como-a-maquina-aprende/) abre essa ideia por dentro.

Outro sistema [venceu Lee Sedol no jogo de Go](https://deepmind.google/research/alphago/), combinando redes neurais, busca e aprendizado por partidas. Algumas jogadas surpreenderam quem conhecia o jogo. O relato é do laboratório responsável, também parte interessada. O ponto para levar daqui: uma máquina pode encontrar uma solução que ninguém escreveu como regra, dentro de uma tarefa bem delimitada. Daí até "resolve qualquer coisa" tem um salto que a manchete costuma pular.

## Como isso virou algo que eu posso usar?

O passo que nos interessa agora é o [Transformer](https://arxiv.org/abs/1706.03762): uma arquitetura que mudou como se calculam relações entre partes de um texto e facilitou o treino em paralelo. É a engrenagem do [capítulo 3](/ia/por-dentro-do-modelo/). O artigo nasceu no Google; outras equipes puderam construir sobre ele.

E aqui vale cuidado com a história de que o Google inventou e largou porque era caro demais. O artigo destacava **menos custo de treino** em comparação com os melhores modelos usados como referência. A empresa continuou pesquisando e [levou essa família de técnicas à busca](https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/). Criar a tecnologia, pagar para operá-la em escala e decidir abrir um chatbot ao público são decisões diferentes.

Ao explicar a demora para lançar um chatbot amplo, [Jeff Dean fala de respostas falsas, conteúdo ofensivo e uma utilidade fora da busca que a empresa subestimou](https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer). É a versão de quem participou e continua ligado à empresa, não uma explicação sem interesse. Reduzir tudo a "achou caro e desistiu" apaga justamente a decisão de produto que vale discutir.

A OpenAI [lançou o ChatGPT como uma prévia de pesquisa aberta ao uso público](https://openai.com/index/chatgpt/). O formato era conversa: pedir, ler, perguntar de novo. O lançamento não criou a IA. Tornou uma capacidade acumulada em pesquisa acessível por uma interface que muita gente conseguia usar. Para quem quer construir, essa passagem importa tanto quanto o artigo: **como fazer uma capacidade técnica chegar a alguém que tem um problema?**

Paro a linha do tempo aí. O resto é o presente — e o trabalho deste guia é ajudar você a participar dele.

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Comprar ou construir resolve o mesmo problema? Quem sustenta o serviço enquanto o time aprende? E o que exatamente foi chamado de IA?
- **Caminhos na mesa:**
  - *Iara:* contratar a fornecedora, com treinamento e suporte. Compra capacidade de atendimento, mas aceita dependência e regras que ainda não conseguiu examinar.
  - *Caio:* construir com agentes. O time ganha espaço para mudar a solução, mas assume manutenção e tira horas de outras tarefas.
  - *Bia:* continuar com a planilha e pedir uma demonstração com um caso conhecido. Preserva as visitas agora, mas adia uma possível melhora.
- **O que o time fez, por enquanto:** conseguiu prazo até a volta às aulas e começou a investigar quais partes das ferramentas seguem regras escritas, quais usam aprendizado e o que ainda não sabe distinguir. Lia assumiu a demonstração. Iara manteve a proposta da fornecedora na mesa; ninguém tinha resolvido quem daria suporte.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Regra escrita e aprendizado:** o comportamento pode vir de instruções definidas, de relações aprendidas com dados ou de uma combinação.
- **Autonomia:** executar sem alguém guiar cada passo não significa aprender a cada execução.
- **Treino e uso:** um modelo pode usar o que aprendeu sem alterar seus pesos naquela conversa.

Como uma ferramenta pode agir sozinha e continuar seguindo a mesma regra?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Escolha algo que seu projeto precisa fazer e peça uma primeira versão, mesmo pequena. O que veio pronto? O que dependeu de uma decisão sua? Marque onde há uma regra explícita, onde há uma resposta gerada e onde você ainda não sabe distinguir. Que pergunta ao agente ajudaria a investigar essa diferença?

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (15 min)

Peça para cada pessoa listar cinco tecnologias que usou hoje antes do almoço. Em duplas, investiguem: o que executa sem intervenção a cada passo? O comportamento veio de regras escritas, de aprendizado com dados ou dos dois? O que vocês sabem e o que estão supondo? Escolham uma dúvida e procurem uma explicação de como aquela ferramenta funciona. "Ainda não sei" também cabe no quadro.

#### Perguntas de discussão

- Se um sistema é autônomo mas não adaptativo, quem responde pelos erros dele? E se for adaptativo?
- Por que dizemos "a IA decidiu" e nunca "a planilha decidiu"? O que essa escolha de palavras esconde?
- Um sistema que aprendeu com dados de cinco anos atrás e nunca mais foi atualizado ainda é adaptativo?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- BUILT FROM NOTHING. **The ENTIRE history of AI: the 8 researchers who built modern AI (and why they left)**. [*S. l.*]: YouTube, 9 nov. 2026. 1 vídeo (16 min). Disponível em: <https://www.youtube.com/watch?v=YovHdlRN7VM>. Acesso em: 15 nov. 2026.
- DARTMOUTH. **Artificial intelligence (AI) coined at Dartmouth**. [*S. l.*], [s. d.]. Disponível em: <https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth>. Acesso em: 15 nov. 2026.
- DEAN, Jeff; SHAZEER, Noam. **Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI**. [*S. l.*]: Dwarkesh Podcast, 12 fev. 2025. Entrevista a Dwarkesh Patel. Transcrição. Disponível em: <https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer>. Acesso em: 15 nov. 2026.
- GOOGLE DEEPMIND. **AlphaGo**. [*S. l.*], [s. d.]. Disponível em: <https://deepmind.google/research/alphago/>. Acesso em: 15 nov. 2026.
- IBM. **Deep Blue**. [*S. l.*], [s. d.]. Disponível em: <https://www.ibm.com/history/deep-blue>. Acesso em: 15 nov. 2026.
- KRIZHEVSKY, Alex; SUTSKEVER, Ilya; HINTON, Geoffrey E. ImageNet classification with deep convolutional neural networks. **Advances in Neural Information Processing Systems**, [*s. l.*], v. 25, 2012. Disponível em: <https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html>. Acesso em: 15 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Intro IA**. [*S. l.*], [s. d.]. Apresentação de slides. Disponível em: <https://efrem.io/intro-ia/>. Acesso em: 15 nov. 2026.
- NAYAK, Pandu. **Understanding searches better than ever before**. [*S. l.*]: Google, 25 out. 2019. Disponível em: <https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/>. Acesso em: 15 nov. 2026.
- OECD. **Explanatory memorandum on the updated OECD definition of an AI system**. Paris: OECD Publishing, 2024. (OECD Artificial Intelligence Papers, n. 8). Disponível em: <https://doi.org/10.1787/623da898-en>. Acesso em: 15 nov. 2026.
- OPENAI. **Introducing ChatGPT**. [*S. l.*], 30 nov. 2022. Disponível em: <https://openai.com/index/chatgpt/>. Acesso em: 15 nov. 2026.
- TURING, A. M. Computing machinery and intelligence. **Mind**, [*s. l.*], v. 59, n. 236, p. 433–460, 1950. Disponível em: <https://www2.cs.sfu.ca/~vaughan/teaching/415/papers/turing1950.html>. Acesso em: 15 nov. 2026.
- UNIVERSITY OF HELSINKI; MINNALEARN. **Elements of AI**: how should we define AI? [*S. l.*], [2018?]. Curso on-line. Disponível em: <https://course.elementsofai.com/1/1>. Acesso em: 13 nov. 2026.
- VASWANI, Ashish *et al.* **Attention is all you need**. [*S. l.*]: arXiv, 2017. DOI: <https://doi.org/10.48550/arXiv.1706.03762>. Acesso em: 13 nov. 2026.

*Notas:* As definições originais do curso: autonomia é "a capacidade de executar tarefas em ambientes complexos sem orientação constante de quem usa"; adaptatividade é "a capacidade de melhorar o desempenho aprendendo com a experiência" (tradução minha).

A linha do tempo retoma a apresentação *Intro IA* do autor e usa o vídeo de Built From Nothing (2026) como fio narrativo, conferido com as fontes históricas: Turing (1950); encontro de Dartmouth (1956); Deep Blue contra Kasparov (1997); AlexNet (2012); AlphaGo contra Lee Sedol (2016); *Attention is all you need* (2017); ChatGPT, lançado em 30 de novembro de 2022. O recorte termina nesse lançamento, antes dos conflitos de direção posteriores. BERT entrou na busca do Google em 2019 (Nayak, 2019). Na entrevista de Dean e Shazeer (2025), o trecho sobre a demora para lançar um chatbot está em 2h06min–2h09min; é um relato de participantes, não prova de uma causa única. As fontes consultadas não sustentam que o Google tenha abandonado o investimento em IA por considerá-lo caro demais. Autonomia e adaptatividade são tratadas como dimensões, não como condições obrigatórias simultâneas. A OCDE (2024) distingue adaptação durante o desenvolvimento e após a entrada em uso. O quiz compara regras escritas e comportamentos aprendidos em exemplos simplificados.

</div>
