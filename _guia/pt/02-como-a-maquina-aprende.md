---
title: "Como aprendeu isso — e o que ficou de fora?"
subtitle: "Dados, redes neurais, treino e generalização."
description: "Como exemplos viram ajustes, ajustes se combinam em redes e uma máquina aprende padrões. Sem precisar resolver a equação."
lang: pt-BR
ref: how-machines-learn
order: 2
part: 1
permalink: /ia/como-a-maquina-aprende/
interactive: "desenhe pixels e treine um modelo"
piece: "o que a planilha tem × o que a equipe sabe"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 2

Caio pediu a um agente um modelo com os dados históricos que Iara disponibilizou no ambiente da secretaria. Voltou uma taxa de acerto bonita. Bia perguntou pela linha de ônibus que cortaram, pelo trabalho, por quem cuidava das crianças menores. Nada disso era coluna. "Então vamos registrar nas visitas", propôs. Caio pediu ao agente outra coisa: "mostre onde faltam dados e compare os turnos, sem prever pessoas". A concentração no noturno merecia uma olhada, mesmo sem explicar o motivo. Bia insistiu em ouvir as famílias; Lia reservou parte das visitas para isso. Na primeira rodada, preencher o novo registro tomou o tempo de um contato que já estava marcado. Que informação vale esse tempo — e o que dá para aprender com o dado incompleto que já existe?
</div>

Quase ninguém que lê este guia vai treinar um modelo: o que a gente mexe, no dia a dia, é na entrada e nas configurações. Mas quem constrói com IA precisa saber **o que acontece** quando alguém diz que "treinou um modelo". É aí que moram as decisões humanas — e é o que explica metade das esquisitices dos próximos capítulos.

## Aprender, para uma máquina, é como estudar para uma prova?

Pense em como você se prepara para uma prova:

| Você estudando | Aprendizado de máquina |
|---|---|
| Você, antes de estudar | O **modelo**, ainda sem treino |
| Anotações, livros, exercícios resolvidos | Os **dados** de treino |
| Estudar: revisar, testar, corrigir | O **treinamento** |
| Você diante de questões inéditas | O **modelo treinado**, sendo testado |

A analogia separa estudar de usar o que foi estudado. Não explica como uma mente funciona. Aqui, dizer que a máquina aprendeu significa que o treino mudou seu comportamento diante dos exemplos. A pergunta seguinte é a boa: funciona também quando muda a letra, a pessoa, a escola? Decorar o exercício não basta.

## Como o mundo vira número?

Pense na planilha do Caio. Uma linha tenta representar uma vida usando faltas, notas e distância. Ela permite fazer contas; também deixa muita coisa de fora. Essas propriedades usadas para descrever algo são as **características** (*features*, em inglês).

Uma imagem também pode virar uma lista. No experimento abaixo, pixel branco vira `0`, pixel preto vira `1`. Uma grade de 8×8 dá 64 números. Essa lista é um **vetor**. Nome sofisticado, ideia que cabe numa linha de planilha.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** desenhe na grade e veja o desenho virar número. Depois responda: o que da vida de uma pessoa não cabe em uma coluna? E o que acontece com o que não cabe?
</div>

<div data-widget="pixels"></div>

Agora desloque mentalmente o desenho uma casa para o lado. Você continua vendo o mesmo desenho, mas vários números mudaram. **Virar número não basta para reconhecer semelhança.** Importa como a informação foi representada e o que o modelo aprendeu a comparar. Esse será o elo com os mapas de significado do [próximo capítulo](/ia/por-dentro-do-modelo/).

## Onde entram as redes neurais?

A [explicação visual de redes neurais](https://www.youtube.com/watch?v=aircAruvnKk), de Grant Sanderson, começa por um desafio ótimo: reconhecer um algarismo escrito à mão. Você reconhece de cara. Agora tente escrever uma regra que sirva para todas as letras tortas de todas as pessoas.

Numa rede neural, várias operações pequenas se encadeiam em **camadas**. Cada uma recebe sinais, combina e transforma esses sinais, e passa o resultado adiante. Uma maneira de visualizar a ideia é juntar pistas: trechos de imagem, curvas e combinações que ajudam a distinguir um algarismo de outro — mesmo que a rede aprenda representações internas que nem sempre têm uma etiqueta óbvia para nós.

No quadro da sala eu explico isso como uma equação invertida. Na escola, alguém te dava os números fixos na função `f(x, y) = 3x + 2y`, você colocava o `x` e o `y` e calculava o resultado. No treino de máquina a gente inverte quem era o desconhecido: você já tem vários exemplos do `x`, do `y` e do resultado que aconteceu, e quer descobrir quais eram os números fixos — o `3` e o `2`. Esses números que multiplicam cada sinal são os **pesos** (ou parâmetros de treino). Na essência, o modelo é uma equação gigantônica ajustada para que a conta feche melhor nos exemplos. Essa mesma função `f(x, y) = 3x + 2y` vai voltar no [capítulo 7](/ia/pensamento-computacional/) para ligar planilha e código.

## O que acontece em cada volta do treino?

A [explicação do aprendizado](https://www.3blue1brown.com/lessons/gradient-descent/) ajuda a enxergar o ciclo sem fazer a conta:

1. **Calcular um palpite.** Os ajustes atuais produzem uma saída.
2. **Medir o erro.** Compara-se a saída com o que se queria obter, segundo um critério escolhido. Essa medida é a *loss*.
3. **Ajustar.** O algoritmo calcula mudanças que tendem a reduzir esse erro.
4. **Repetir.** Outros exemplos entram, os ajustes mudam, e o ciclo continua.

<figure class="g-board">
	<div class="g-board-title">Quadro de sala · A equação invertida do treino <span>De calcular a saída a descobrir os pesos</span></div>
	<div class="g-board-cols">
		<div class="g-board-box">
			<span class="g-board-kicker">Na escola / na regra pronta</span>
			<code class="g-board-math">f(x, y) = 3x + 2y   ──►   f(4, 1) = ?</code>
			<ul class="g-board-list">
				<li><strong>Conhecido:</strong> os pesos fixos (<code>3</code> e <code>2</code>) e as entradas (<code>x = 4</code>, <code>y = 1</code>).</li>
				<li><strong>Desconhecido:</strong> o resultado da conta (<code>14</code>).</li>
			</ul>
		</div>
		<div class="g-board-box teal">
			<span class="g-board-kicker">No treino de máquina (equação invertida)</span>
			<code class="g-board-math">f(x, y) = w₁·x + w₂·y + b   ──►   achar w₁, w₂, b</code>
			<ul class="g-board-list">
				<li><strong>Conhecido:</strong> milhares de exemplos históricos de <code>x</code>, <code>y</code> e do resultado observado.</li>
				<li><strong>Desconhecido:</strong> os pesos (<code>w₁</code>, <code>w₂</code>) e o viés matemático (<code>b</code>) que fazem a conta fechar.</li>
			</ul>
		</div>
	</div>
	<div class="g-board-flow">
		<div class="g-board-step"><strong>1. Palpite</strong>Roda a equação com os pesos atuais</div>
		<div class="g-board-step"><strong>2. Erro (loss)</strong>Mede a distância até o resultado esperado</div>
		<div class="g-board-step"><strong>3. Ajuste</strong>Retropropagação calcula quanto mexer em cada peso</div>
		<div class="g-board-step"><strong>4. Prova real</strong>Testa em casos que ficaram fora do treino</div>
	</div>
	<figcaption><strong>Fontes do quadro:</strong> reprodução da lousa de aula do autor na FGV EPPG (Maranhão Filho, 2026) combinada com a formulação visual de descida do gradiente e retropropagação de Grant Sanderson (3Blue1Brown, <em>Neural Networks</em>, 2017).</figcaption>
</figure>

Como descobrir que botões mexer numa rede inteira? A [retropropagação](https://www.3blue1brown.com/lessons/backpropagation/) faz o caminho das contas de trás para a frente para calcular como cada ajuste influencia o erro. Não é sair tentando um botão por vez. A correção considera como eles participam juntos do resultado.

Não aparece um passo secreto chamado "agora entenda o mundo". Mas isso também não torna o que foi aprendido trivial. O resultado depende dos dados, das operações que conseguimos combinar e do que escolhemos chamar de erro.

No experimento, o painel tem só dois ajustes: um inclina a reta; o outro a sobe ou desce. A fórmula na tela registra esses movimentos. Dá para acompanhar a ideia sem resolver a equação.

<div data-widget="treino"></div>

<div class="g-box g-warn" markdown="1">
**Duas palavras, dois sentidos.** O ajuste que sobe ou desce a reta é chamado de **viés** matemático (*bias*). O **viés algorítmico** do capítulo 4 é outra conversa: padrões de resultado que podem prejudicar grupos de forma desigual. Um nome parecido não transforma os dois no mesmo problema.
</div>

Diminuir o erro nesse conjunto é uma parte do trabalho. A outra é [conferir com exemplos que ficaram fora do treino](https://www.3blue1brown.com/lessons/gradient-descent/). No caso do Caio: acertar o passado da planilha não prova que o modelo vai ajudar uma família amanhã. E quem escolheu medir acerto, em vez de medir quantas famílias receberam ajuda? Essa escolha não saiu da equação.

## E em um modelo de linguagem, o que muda?

Quando eu fazia iniciação científica, uma rede com quatro camadas e dezesseis neurônios parava o laboratório por um dia inteiro para rodar. A ideia de ajustar números continua. O tamanho e a organização das redes mudaram muito — não basta esticar aquela reta.

No [treino de linguagem que nos interessa aqui](https://www.3blue1brown.com/lessons/mini-llm/), os exemplos são trechos de texto, e uma tarefa central é prever o próximo pedaço. O próprio texto fornece a continuação com que comparar o palpite. É uma maneira de aprender padrões sem alguém precisar escrever uma regra para cada frase.

Daí vem a ponte: **a rede que recebe pixels pode aprender padrões de imagem; a que recebe texto pode aprender padrões de linguagem.** No próximo capítulo, vamos acompanhar como o contexto altera o que cada pedaço representa. Depois, como isso vira resposta. Conseguir continuar uma frase e ter evidência sobre a vida da estudante são trabalhos diferentes.


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Registrar mais aproxima o time da vida das famílias, mas também ocupa tempo e guarda mais informação sobre elas. Qual ausência de dado muda uma decisão?
- **Caminhos na mesa:**
  - *Caio:* comparar primeiro os registros que já existem. Pode encontrar algo útil hoje, mas carrega os pontos cegos da planilha.
  - *Bia:* ouvir e registrar motivos nas visitas. Ganha contexto, mas reduz a quantidade de contatos e aumenta o cuidado necessário com os registros.
  - *Lia:* suspender o modelo e mapear as lacunas com o time. Evita uma previsão prematura, mas pode adiar um sinal que já ajudaria.
- **O que o time fez, por enquanto:** deixou o modelo de previsão na gaveta e experimentou o registro proposto por Bia em algumas visitas. Caio guardou a comparação dos turnos para revisão. O contato que não coube precisou ser remarcado; ouvir melhor não tinha saído de graça.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Representação:** transformar uma situação em dados exige escolher o que entra e o que fica de fora.
- **Treino:** ajustar parâmetros com exemplos e um critério de erro. Uma rede combina muitas operações simples.
- **Generalização:** acertar exemplos conhecidos não basta; importa o comportamento em situações que não estavam no treino.

Se o treino vai bem e o uso vai mal, que parte você investigaria primeiro — e por quê?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Retome uma saída que pareceu boa e experimente uma entrada diferente: um caso incompleto, uma exceção, uma situação que você conhece melhor que a ferramenta. O que mudou? Que informação importante só existia na sua cabeça? Guarde o exemplo para comparar quando mudar o pedido ou o procedimento.

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — o modelo humano

Distribua 10 cartões com frutas desenhadas (ou projete fotos). Peça que a turma escolha **apenas duas características numéricas** (ex.: tamanho de 1 a 5, quão vermelha de 1 a 5) e posicione cada fruta em um plano cartesiano no quadro. Depois apresente uma fruta nova e peça para classificarem só pela vizinhança. Discuta quais frutas ficaram "erradas" e que característica faltou.

#### Perguntas de discussão

- Na analogia da prova, o que seria "decorar o gabarito"? (É o *overfitting*: ir bem no treino e mal no mundo.)
- Quem escolheu as características do seu modelo de frutas? O que essa escolha deixou de fora?
- Se o modelo só reduz erro em relação aos exemplos, o que acontece quando os exemplos estão errados?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- 3BLUE1BROWN. **Neural networks**. [*S. l.*], [2017-]. Série de vídeos. Disponível em: <https://www.3blue1brown.com/topics/neural-networks>. Acesso em: 13 nov. 2026.
- SANDERSON, Grant. **But what is a neural network?**. Adaptação textual de Josh Pullen. [*S. l.*]: 3Blue1Brown, 5 out. 2017. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/neural-networks/>. Vídeo correspondente: <https://www.youtube.com/watch?v=aircAruvnKk>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **Gradient descent, how neural networks learn**. Adaptação textual de Josh Pullen. [*S. l.*]: 3Blue1Brown, 16 out. 2017. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/gradient-descent/>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **Large language models explained briefly**. Adaptação textual de Justin Sun. [*S. l.*]: 3Blue1Brown, 20 nov. 2024. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/mini-llm/>. Vídeo correspondente: <https://www.youtube.com/watch?v=LPZh9BOjkQs>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **What is backpropagation really doing?**. Adaptação textual de Josh Pullen. [*S. l.*]: 3Blue1Brown, 3 nov. 2017. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/backpropagation/>. Acesso em: 15 nov. 2026.

*Notas:* As lições de Grant Sanderson, do 3Blue1Brown, dão a base visual: algarismos manuscritos e redes em camadas (*But what is a neural network?*); ajuste pelo erro e teste com exemplos separados (*Gradient descent*); contribuição de cada parâmetro para o erro (*Backpropagation*). A combinação de traços e curvas é uma motivação para a arquitetura, não uma descrição garantida do que cada neurônio aprendeu. O painel de ajustes é uma analogia didática para parâmetros. O experimento da reta ilustra uma regressão simples, não uma rede neural completa. O relato da iniciação científica é do autor.

Para continuar pela [série completa](https://www.3blue1brown.com/topics/neural-networks), vale acompanhar primeiro as imagens e as perguntas; as contas podem ficar para outra leitura. Aqui o percurso vai da representação ao treino e, no capítulo seguinte, ao contexto e à geração de linguagem. As datas das referências são as das lições escritas, que também apontam para os vídeos correspondentes.

</div>
