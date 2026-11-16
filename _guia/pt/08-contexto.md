---
title: "Por que cada agente entendeu uma coisa?"
subtitle: "Contexto e instruções compartilhadas."
description: "O que veio do treino encontra o que você põe na janela. Cuidar desse contexto é parte central de saber pedir — e de entender o que voltou."
lang: pt-BR
ref: context
order: 8
part: 2
permalink: /ia/contexto/
interactive: "monte uma janela de contexto + três prompts"
piece: "o arquivo de instruções do projeto"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 8

Três pessoas, três agentes, três comportamentos. O agente do Caio escrevia "aluno de risco" em toda tela que gerava: ninguém tinha contado a ele a regra nº 1. O primeiro pedido da Bia foi "me ajude a reduzir a evasão escolar", e voltaram dez tópicos corretos e inúteis, os mesmos de qualquer cartilha. Lia exagerou para o outro lado: anexou o manual de trezentas páginas da rede, três atas e a planilha inteira, e recebeu, com toda a segurança, um procedimento que a rede tinha abandonado anos antes. Caio defendeu a própria saída: "mas o meu agente disse que é melhor assim". Bia abriu a tela e mostrou o rótulo que tinham combinado retirar. O problema não se resolvia contando páginas: faltavam objetivo, vigência e decisões compartilhadas. Onde isso deveria estar escrito — e quem conferiria que cada agente estava trabalhando com o mesmo acordo?
</div>

Se eu tivesse que escolher uma única ideia para alguém levar deste guia, seria esta: **não conte com o modelo adivinhando as decisões do seu projeto. Dê a ele o contexto de que precisa, agora.**

Ele traz padrões e conhecimentos do treino, como vimos no [capítulo 3](/ia/por-dentro-do-modelo/). Outra coisa é saber o que o time decidiu ontem. A memória do produto, os arquivos e as buscas podem trazer isso para a conversa. Usar essa informação não exige mudar os pesos do modelo. Quando digo "ele só sabe o que está na janela", é desse contexto específico que estou falando — não de apagar o que veio do treino.

## O que o modelo enxerga quando você pergunta?

A melhor imagem que conheço para isso é do Andrej Karpathy, que descreve os modelos de linguagem como um novo tipo de computador: **o modelo faz o papel da CPU, e a janela de contexto é a memória** — a RAM. ([Vale ver a palestra inteira](https://www.youtube.com/watch?v=LCEmiRjPEtQ).)

Pense na janela como o espaço de trabalho da tarefa: instruções, documentos, histórico, ferramentas disponíveis e o que elas devolveram. A analogia da RAM ajuda a lembrar que o material precisa estar acessível. Tem um limite: o modelo também traz o que aprendeu no treino. O contexto orienta como essa capacidade será usada aqui.

**Engenharia de contexto** é o nome que pegou para o trabalho de decidir o que entra nessa RAM. É a evolução natural da engenharia de prompt: antes a gente caprichava em uma instrução; agora a gente administra tudo o que o modelo vê ao longo de uma tarefa longa. Quando o termo apareceu eu [fiquei em dúvida se precisávamos de mais um conceito](/blog/pt/context-engineering-do-we-need-another-concept/) — mas a ideia por trás eu defendo desde sempre: a habilidade humana mais importante agora é saber comunicar e entregar a informação e as ferramentas certas.

<figure class="g-board">
	<div class="g-board-title">Quadro de conceito · A janela como memória RAM <span>O que entra na bancada e por que a conversa pesa</span></div>
	<div class="g-board-cols">
		<div class="g-board-box accent">
			<span class="g-board-kicker">1. O computador de linguagem (CPU × RAM)</span>
			<code class="g-board-math">CPU = Modelo (pesos do treino, fixos na conversa)
RAM = Janela de contexto (mesa de trabalho)</code>
			<ul class="g-board-list">
				<li><strong>Instruções:</strong> objetivo, regras e formato esperado.</li>
				<li><strong>Documentos:</strong> trechos vigentes trazidos para a tarefa.</li>
				<li><strong>Ferramentas:</strong> descrição de cada conector + o que devolveu.</li>
				<li><strong>Histórico:</strong> tudo o que já foi dito naquela sessão.</li>
			</ul>
		</div>
		<div class="g-board-box warn">
			<span class="g-board-kicker">2. A bola de neve dos turnos (reenvio inteiro)</span>
			<code class="g-board-math">Turno 1: [Instrução + Msg 1] ──► Resp 1
Turno 2: [Instrução + Msg 1 + Resp 1 + Msg 2] ──► Resp 2
Turno N: [Tudo desde a linha 1 + erros + Msg N]</code>
			<p>O modelo não "lembra" da conversa aberta: a cada envio, a pilha inteira viaja de novo. Quando muda o assunto, os erros e rascunhos antigos continuam disputando atenção e encarecendo cada resposta.</p>
		</div>
	</div>
	<figcaption><strong>Fontes do quadro:</strong> analogia entre LLM, CPU e RAM de Andrej Karpathy (<em>Software Is Changing (Again)</em>, 2025), orçamento de atenção e altitude de instruções da Anthropic (<em>Effective Context Engineering for AI Agents</em>, 2025) e experimentos de degradação em janelas longas da Chroma (<em>Context Rot</em>, 2025).</figcaption>
</figure>

## Mais contexto é melhor contexto?

A intuição diz: "na dúvida, joga tudo lá dentro". É o erro mais comum que eu vejo.

Um dossiê pode conter o contrato certo e três versões antigas. Caber tudo na mesa não resolve qual vale. Nos modelos, **caber na janela também não garante usar bem cada informação**. "Orçamento de atenção" é uma [imagem útil para esse cuidado](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), não um tanque que perde uma quantidade fixa por palavra.

A queda de desempenho com contextos maiores foi [medida em tarefas e modelos específicos](https://research.trychroma.com/context-rot), com variações entre eles. As duas fontes são de empresas que atuam nesse mercado, partes interessadas. Isso não vira uma lei de que todo pedido grande funciona pior. O trabalho é organizar a informação: o que vale, o que ficou velho, o que é instrução e o que é apenas documento.

Eu já fiz o contrário: [levei um documento longo de projeto e tive mais resultado quando organizei o pedido em uma lista de ações](/blog/pt/chapter-8-building-with-an-ai-team/). Conectar, buscar uma informação, usar aquela variável, entregar a saída. O problema não era o número de páginas por si só. A lista deixou mais claro o que precisava acontecer e como uma parte dependia da outra.

É o que eu quero dizer quando [defendo saber escrever](/blog/pt/knowing-how-to-write-is-an-underrated-skill/): conseguir expressar o pedido e organizar as ideias. Não é escrever bonito. Pode ser um pedido grande; precisa ter uma organização que ajude a trabalhar.

Um exemplo de casa. A memória do assistente ficou ligada numa conta que mais gente da família usa. Ele passou a achar que eu estudava uma área que não é a minha, guardou um planejamento que não era meu — e começou a me responder pior, por causa de um contexto que eu nunca pedi. Os agentes estão aprendendo a lidar com excesso. Mesmo assim, contexto demais custa mais do que precisa e ainda pode atrapalhar. Prefiro dar o contexto todo, toda vez, a deixar ele tentar adivinhar.

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

## Pedir é engenharia ou é arte?

Chamam de engenharia de prompt, engenharia de contexto. Eu implico com o nome. **Para mim, pedir está mais perto de arte:** escolher o jeito de explicar, experimentar, ler o que voltou e mudar o pedido. Não tenho uma fórmula que dispense esse julgamento.

(Um alerta: arte e design não são a minha área, e eu não sei definir bem nem uma coisa nem outra. Falo só do jeito como eu construo. Nem tudo o que eu faço precisa ter função. Precisa existir no mundo.)

Isso não torna engenharia menos criativa. Nem põe arte do lado do bonito e engenharia do lado do útil. Na construção, essas coisas se misturam: imaginar uma solução, organizar como ela funciona e descobrir o que precisa mudar pedem criação e critério.

E quando falo de inovação aqui, incluo levar ao mercado, fazer chegar a quem vai usar. Inventar é parte da conversa; fazer aquilo existir na vida de alguém também. O pedido tem forma e tem intenção. É por isso que o jeito de explicar importa tanto — e por que eu insisto em ler o que voltou.

Se eu tivesse de pôr em ordem o que entra num pedido:

1. **O que eu quero.** O objetivo, com todas as letras. É o que mais pesa, disparado.
2. **Contexto.** A história por trás, os documentos, o que a pessoa do outro lado já saberia.
3. **Exemplos.** Poucos e bons, do tipo de resposta que eu espero.
4. **Como pensar no problema.** Os passos, quando a ordem importa.
5. **Formato de saída.** Quando o que volta vai para outro programa, e não para os meus olhos.

Essa ordem muda conforme os modelos mudam. Dar um papel ao modelo ("você é especialista em...") já pesou muito e hoje pesa pouco. E instrução escrita para modelo antigo, cheia de cuidado e passo a passo, passou a atrapalhar: é amarrar um modelo melhor ao que o anterior precisava. Tenho usado cada vez menos instrução pronta.

Um caso de contexto faltando. Num semestre avisei à turma que as atividades seriam corrigidas com IA. A turma descobriu rápido que dava para entregar a atividade da semana anterior e tirar dez: a IA só conferia se estava certa. Ninguém tinha contado a ela em que semana estávamos.

E pedir é metade. A outra metade é ler o que voltou para decidir o próximo pedido.

## Dá para ensaiar uma conversa com quem não está na sala?

Ouvir quem usa é a parte mais importante de construir qualquer coisa, e a mais difícil de conseguir: as pessoas não têm agenda e, quando têm, muitas vezes respondem o que acham que você quer ouvir. Uma designer com quem trabalhei teve a ideia antes de mim: pegou as transcrições de entrevistas de verdade e pediu a um assistente que continuasse a conversa no papel daquela pessoa. Hoje eu uso o mesmo recurso para ensaiar antes de uma conversa difícil.

Funciona melhor do que eu esperava. Às vezes rende mais do que a entrevista, porque a persona não tem vergonha de responder. Mas tem limites que eu não esqueço: ela é muito mais simpática do que qualquer cliente; é uma continuação plausível, não uma pessoa ([capítulo 3](/ia/por-dentro-do-modelo/)); e não substitui conversar com gente de verdade — complementa. Uma pergunta que eu me faço cada vez mais: quem deu a entrevista sabe que a fala dela continua sendo usada?

Quem pesquisa experiência de uso refez estudos reais com participantes sintéticos e achou as respostas rasas e favoráveis demais ([Rosala; Moran, 2024](https://www.nngroup.com/articles/synthetic-users/)): serve para levantar hipóteses, não para decidir. Já quem fundou uma empresa que vende justamente esse tipo de pesquisa — parte interessada, claro — responde que pesquisa existe para reduzir risco e decidir melhor, não para cumprir um método, e que muita gente critica sem ter testado. Mesmo ele não recomenda apostar a empresa numa resposta sintética: fala em achar o ponto em que isso acelera e o que continua sendo só de gente ([Alves, 2026](https://www.youtube.com/watch?v=W87q8M9Gl-0)). Os dois chegam perto do que eu vivi: complementa, não substitui.

## Quem está lendo o pedido?

E docente não está imune. Numa formação para colegas, pedi um exercício. A turma colou a instrução que a ferramenta gerou, sem ler, e se espantou com o formato da resposta. Alguém resumiu melhor do que eu: fizemos exatamente o que criticamos em estudantes.

## E no dia a dia?

- **Explico o porquê, não só o quê.** "Responda curto porque a pessoa lê no celular entre duas reuniões" funciona melhor que "responda curto".
- **Separo as partes.** Títulos em Markdown ou marcações como `<contexto>` ajudam o modelo a não misturar instrução com documento.
- **Trago só o trecho.** Em vez do manual de 300 páginas, as três páginas que importam. Se eu não sei quais são, esse é o primeiro pedido: "ache os trechos sobre X".
- **Começo conversa nova quando muda o assunto.** O modelo não guarda uma conversa aberta na cabeça: a cada nova mensagem que você envia, o histórico inteiro daquela sessão é reenviado desde a primeira linha. Na 99ª mensagem, a conversa ficou cara, lenta e viciada nos próprios erros anteriores. Se preciso levar algo adiante, peço um resumo e colo no começo de uma conversa limpa.
- **Ligo poucas ferramentas.** Cada conector ocupa espaço na janela só por existir. E eu fico de olho no medidor que a ferramenta mostra: quando uma sessão passa de dois terços da janela ocupada, já estou pensando em fechar e começar outra.
- **Guardo o contexto fora da conversa.** Tudo o que eu não quero explicar de novo vira arquivo no repositório do projeto — assunto do [capítulo 11](/ia/repositorio-e-memoria/).


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** o que é óbvio para o time e não está escrito em lugar nenhum? Como perceber que há contexto demais? Instrução longa protege ou atrapalha?
- **Caminhos na mesa:**
  - *Caio:* instrução mínima, com objetivo e limites. Dá espaço para resolver, mas deixa mais escolhas para o agente inferir.
  - *Bia:* manter regras e exemplos no pedido. Expõe as exceções, mas aumenta o trabalho de atualizar e localizar o que importa.
  - *Lia:* resumir o que alguém precisa saber ao chegar. Facilita a leitura, mas coloca nas mãos de quem resume a decisão sobre o que pode sumir.
- **O que o time fez, por enquanto:** um arquivo de instruções compartilhado. Lia preparou a versão curta e Caio testou no agente; Bia pediu que preservassem a origem das regras. A versão curta seguiu para o uso antes de essa revisão terminar.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Contexto:** o material disponível para aquela resposta; é diferente do que o modelo aprendeu no treino.
- **Memória do projeto:** decisões guardadas só ajudam se forem encontradas e trazidas para o trabalho atual.
- **Instrução:** objetivo, exemplos e limites orientam a tarefa. Caber na janela não garante que tudo será bem usado.

Como dois agentes com o mesmo modelo podem produzir respostas diferentes para o mesmo projeto?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Que decisão você já precisou explicar duas vezes ao agente? Escreva-a nas instruções do projeto, com o motivo e um exemplo. Abra uma conversa nova e peça uma mudança que dependa dela. O que voltou respeitou a decisão? Se não, faltou encontrar a instrução, entender a regra ou resolver uma contradição?

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

- ALVES, Hugo. **Let's get real about synthetic users**. Entrevista a Jason Knight. [*S. l.*]: One Knight in Product, 21 fev. 2026. 1 vídeo (64 min). Disponível em: <https://www.youtube.com/watch?v=W87q8M9Gl-0>. Acesso em: 15 nov. 2026.
- ANTHROPIC. **Effective context engineering for AI agents**. [*S. l.*], 29 set. 2025. Disponível em: <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>. Acesso em: 13 nov. 2026.
- CHROMA. **Context rot**: how increasing input tokens impacts LLM performance. [*S. l.*], 14 jul. 2025. Relatório técnico. Disponível em: <https://research.trychroma.com/context-rot>. Acesso em: 13 nov. 2026.
- KARPATHY, Andrej. **Software is changing (again)**. [*S. l.*]: Y Combinator, 18 jun. 2025. 1 vídeo. Disponível em: <https://www.youtube.com/watch?v=LCEmiRjPEtQ>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 8: construindo com meu time de IA**. [*S. l.*]: efrem.io, 5 maio 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-8-building-with-an-ai-team/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Engenharia de contexto: precisamos de mais um conceito?**. [*S. l.*]: efrem.io, 3 jul. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/context-engineering-do-we-need-another-concept/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Saber escrever é uma habilidade subestimada**. [*S. l.*]: efrem.io, 12 fev. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/knowing-how-to-write-is-an-underrated-skill/>. Acesso em: 13 nov. 2026.
- ROSALA, Maria; MORAN, Kate. **Synthetic users**: if, when, and how to use AI-generated "research". [*S. l.*]: Nielsen Norman Group, 21 jun. 2024. Disponível em: <https://www.nngroup.com/articles/synthetic-users/>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **How might LLMs store facts**. Adaptação textual de Justin Sun. [*S. l.*]: 3Blue1Brown, 31 ago. 2024. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/mlp/>. Acesso em: 15 nov. 2026.

*Notas:* A frase sobre CPU e memória é uma paráfrase do trecho em que Karpathy compara LLMs a um sistema operacional. De Anthropic (2025) vêm "orçamento de atenção", a "altitude certa" e o princípio do menor conjunto de tokens de alto sinal. A medição do *context rot* é de Chroma (2025). A distinção entre representações contextualizadas e padrões aprendidos nos parâmetros também se apoia em Sanderson (2024), na lição sobre MLPs. "Orçamento de atenção" é tratado aqui como orientação prática; o estudo de Chroma não estabelece uma perda fixa por token para qualquer modelo ou tarefa.

O caso de ensaio com personas é um relato do autor; a ideia inicial foi de uma designer com quem trabalhou. Rosala e Moran (2024) discutem limites da pesquisa sintética. Na entrevista, Alves (2026) discute redução de risco (minuto 4), limites para decisões críticas (17) e complementaridade com pessoas reais (52). Ele é cofundador de uma empresa que vende essa pesquisa.

</div>
