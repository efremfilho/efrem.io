---
title: "Por que uma explicação tão boa pode estar errada?"
subtitle: "Modelos de linguagem, atenção e geração."
description: "Do texto ao número, do número à próxima palavra. O que acontece entre a sua pergunta e a resposta — e por que plausível não é o mesmo que verdadeiro?"
lang: pt-BR
ref: inside-llm
order: 3
part: 1
permalink: /ia/por-dentro-do-modelo/
interactive: "tokens + significado em contexto + a próxima palavra"
piece: "as perguntas que nunca vão sem a fonte junto"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 3

Lia descreveu a um assistente, sem nome, uma estudante que tinha parado de ir à escola. Recebeu três parágrafos seguros, com causas prováveis e recomendação. Bia reconheceu ali situações que encontrava nas visitas: "é bem isso". Caio pediu para ver de onde vinha cada afirmação. Não havia documento sobre aquela estudante. O texto tinha feito a passagem de "pode acontecer" para "aconteceu com ela" sem avisar. Lia já tinha copiado um trecho para o rascunho do relatório. Bia não queria jogar fora as perguntas que ele sugeria. Se uma explicação combina com o que o time acredita, fica mais fácil ou mais difícil perceber que ela não foi conferida?
</div>

O [capítulo anterior](/ia/como-a-maquina-aprende/) mostrou uma rede como uma combinação de operações ajustadas pelo treino. Um *Transformer* é uma maneira de organizar uma rede dessas para relacionar partes de uma sequência. O nome parece peça de filme. A pergunta continua simples: *o que entra, o que muda pelo caminho e o que sai?*

O [resumo visual de modelos de linguagem](https://www.youtube.com/watch?v=LPZh9BOjkQs) propõe uma imagem útil: um roteiro de conversa cuja resposta ainda precisa ser completada. O modelo vai produzindo a continuação. Vamos abrir essa máquina sem fazer as contas. **Este é o mecanismo de geração de texto; o assistente inteiro pode também buscar documentos, executar código e usar outras ferramentas.**

## O que o modelo recebe quando eu escrevo?

O texto é cortado em pedaços chamados **tokens** — uma palavra, parte dela, pontuação — e cada pedaço recebe um identificador numérico. Pense no número de um item num catálogo: ele identifica, mas não explica o que o item significa.

<div data-widget="tokens"></div>

Se o modelo conta pedaços, contar palavras não basta para saber quanto cabe numa conversa. O experimento ilustra a divisão; o corte exato depende do modelo.

## Como um número carrega significado?

O identificador dá acesso a uma lista de números ajustada no treino: o ***embedding***. A [explicação visual do Transformer](https://www.youtube.com/watch?v=wjZofJX0v4M) ajuda a imaginar essas listas como posições num mapa de relações. Nesse mapa, "escola" e "colégio" podem ter relações próximas. A distância representa semelhanças aprendidas, não quilômetros nem uma definição de dicionário.

Não precisa visualizar milhares de direções. Guarde a ideia: **representar uma palavra é colocá-la em relação com outras coisas**. Mas "banco" ainda pode ser lugar de sentar ou instituição financeira. A representação inicial é só o começo. Falta a frase.

## Como a frase muda o significado de "banco"?

Troque o trecho nas abas e repare nas pistas que vêm antes da palavra:

<div data-widget="tabs" data-title="Qual banco?" data-sub="Uma ilustração de contexto; não é uma leitura de um modelo por dentro." markdown="1">

#### Sentar?

*Lia sentou no banco.*

"Sentou" favorece o sentido de assento. A palavra "banco" continua igual, mas a relação com o verbo ajuda a escolher a interpretação.

#### Pedir um empréstimo?

*Lia pediu um empréstimo no banco.*

"Empréstimo" favorece a instituição financeira. Não foi preciso trocar a palavra "banco"; mudou o contexto com que ela se relaciona.

#### Só esperar?

*Lia esperou no banco.*

Pode ser um assento ou uma agência. Mais cálculo não cria a informação que a frase deixou de fora. Perguntar pode ser melhor do que completar com segurança.

</div>

Na [atenção](https://www.3blue1brown.com/lessons/attention/), as representações dos tokens recebem informação de outros tokens disponíveis, com influências diferentes. É como acrescentar anotações ao significado inicial: *neste trecho, esta pista pesa mais*. Várias relações podem ser calculadas em paralelo. A ordem das palavras também entra: "a estudante chamou a diretora" não é "a diretora chamou a estudante".

O efeito que interessa é este: o pedaço vai deixando de representar apenas uma palavra isolada e passa a carregar informação daquele contexto. "Atenção" é o nome do mecanismo, não uma pessoa escolhendo conscientemente o que ler.

## Atenção faz o trabalho inteiro?

Não. Entre as etapas de atenção, [outras camadas transformam cada representação usando padrões ajustados no treino](https://www.3blue1brown.com/lessons/mlp/). O ciclo se repete: relacionar as partes do texto, transformar o resultado, relacionar de novo. O próximo pedaço sai dessa combinação entre **o contexto disponível e o que o treino deixou nos parâmetros**.

Pense em ler uma mensagem trazendo tanto as pistas daquela mensagem quanto o que você já aprendeu sobre linguagem. A analogia ajuda a separar as duas contribuições. Não significa que a máquina tenha a sua experiência de vida, nem que cada fato esteja guardado numa gaveta com etiqueta.

## Então ele responde?

Ao fim dessas etapas, sai uma distribuição: chances atribuídas às possíveis continuações. Um token é escolhido, entra no texto, e a conta recomeça com ele incluído. A escolha pode usar sorteio ou favorecer sempre a opção mais provável, conforme a configuração. O modelo não sorteia palavras soltas de um saco: as chances dependem do que veio antes.

<figure class="g-board">
	<div class="g-board-title">Quadro de conceito · Do pedido ao próximo token <span>A linha de montagem dentro de um Transformer</span></div>
	<div class="g-board-flow cols-5">
		<div class="g-board-step"><strong>1. Tokens</strong>Quebra o texto em pedaços catalogados (números)</div>
		<div class="g-board-step"><strong>2. Embeddings</strong>Posiciona cada pedaço num mapa de relações aprendido</div>
		<div class="g-board-step"><strong>3. Atenção + Camadas</strong>Cruza pistas da frase inteira e transforma o sentido</div>
		<div class="g-board-step"><strong>4. Distribuição</strong>Calcula a chance de cada próximo token (temperatura)</div>
		<div class="g-board-step"><strong>5. Sorteio ↺</strong>Anexa o token escolhido e repete a conta</div>
	</div>
	<div class="g-board-note">
		<strong>Onde mora o perigo:</strong> o mecanismo combina o <em>contexto disponível na janela</em> com os <em>padrões deixados nos pesos pelo treino</em>. Ele calcula a continuação plausível — não consulta se o fato aconteceu, a menos que você dê a fonte ou uma ferramenta de busca.
	</div>
	<figcaption><strong>Fontes do quadro:</strong> arquitetura Transformer de Vaswani et al. (<em>Attention Is All You Need</em>, 2017) e síntese visual de embeddings, atenção e camadas de Grant Sanderson (3Blue1Brown, 2024).</figcaption>
</figure>

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** escolha a frase sobre a estudante. Antes de sortear, tente você: que palavra viria depois? O que você precisaria saber para acertar — e essa informação está disponível?
</div>

<div data-widget="proxima"></div>

O controle que você mexeu chama-se **temperatura**. No experimento, baixá-la concentra as chances; aumentá-la dá mais espaço a alternativas. É um controle de variedade. Não é um botão de verdade. Repetir a mesma resposta errada com mais consistência continua sendo errar.

Volte à cena da Lia. O assistente recebeu uma descrição curta; não recebeu nem buscou registros que sustentassem as causas que acrescentou. Podia produzir uma explicação que combinasse com o assunto; não tinha evidência para atribuí-la àquela pessoa. Eu costumo dizer que ele não fala a verdade: fala a próxima palavra que você quer ouvir. É uma provocação. O mecanismo não é ler seu desejo, e uma resposta pode estar correta. O problema é que fluência, sozinha, não mostra de onde veio a afirmação.

Um erro que me custou trabalho foi menos espetacular do que inventar uma biografia. [Ao migrar uma aplicação](/blog/pt/migrating-to-gpt-5-has-been-painful/), os agentes não reconheciam o serviço novo que eu queria usar. Tratavam a mudança como erro, desfaziam a implementação e voltavam ao padrão conhecido. Quebraram a aplicação tentando "corrigir" o que não conheciam. Precisei levar a documentação atual para o projeto. Em mudanças seguintes, o problema podia voltar. Uma resposta familiar para o modelo pode estar velha para o meu trabalho.

## Se é a próxima palavra, por que parece que entende?

Porque o nome da tarefa não diz quanto trabalho ela exige. Complete *"Lia guardou o formulário na pasta azul. Bia levou a pasta à secretaria. O formulário agora está…"*. Para continuar de modo coerente, ajuda acompanhar objetos, lugares e ações. Uma tarefa descrita em poucas palavras pode exigir relações complicadas.

O [treino para completar textos também não é toda a formação de um assistente](https://openai.com/index/chatgpt/). Há etapas posteriores voltadas a seguir instruções e melhorar as respostas. O sistema pode aprender a dizer "não sei", pedir esclarecimentos ou usar ferramentas. Nada disso garante que vá escolher bem em todos os casos.

Se isso merece o nome de "entendimento" é uma discussão que eu não vou encerrar aqui. Para quem constrói, há perguntas que já dão trabalho suficiente: *o que ele consegue fazer, em que condições e como eu confiro?* Nem tratar como pessoa, nem diminuir uma capacidade porque ela é feita de contas.

## Por que aquele artigo mudou tanta coisa?

Imagine uma mensagem passando de pessoa em pessoa numa fila. Para uma ponta receber algo da outra, a informação atravessa o caminho inteiro. Agora imagine que cada pessoa possa consultar diretamente as partes relevantes da mensagem. É uma analogia para a diferença entre passar informação em sequência e calcular relações por atenção; não quer dizer que o modelo lê ou pensa como uma turma.

O [artigo original](https://arxiv.org/abs/1706.03762) apresentou o Transformer em tarefas de tradução. Sua contribuição não foi inventar atenção do nada: foi fazer dela a peça central de uma arquitetura que não precisava passar a informação pela sequência inteira, passo a passo, como nas redes recorrentes comparadas. Isso permitia **mais trabalho em paralelo no treino**, com bons resultados e menos tempo de processamento. A [explicação de um dos autores](https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/) mostra esse caminho. Ele escrevia no blog da empresa que fez a pesquisa, uma parte interessada no resultado.

Não confunda esse paralelismo com a resposta inteira saindo de uma vez. No modelo que estamos acompanhando aqui, a geração continua acrescentando um token por vez. Treinar e usar o que foi treinado são operações diferentes.

## E quem escreveu isso foi fazer o quê?

O artigo tem oito assinaturas. As trajetórias documentadas nas notas passam por novos laboratórios, empresas de modelos para organizações, agentes que operam software, pesquisa com moléculas e infraestrutura distribuída. Houve também volta à empresa de origem e nova saída. Deixei os nomes, os destinos e as fontes juntos nas notas, porque essa parte muda.

O que interessa para quem quer construir é perceber a abertura de caminhos. Uma descoberta sobre relações entre partes de uma sequência não precisa terminar no mesmo produto para todo mundo. A pergunta que fica é bem de produto: *com essa capacidade na mão, que problema você escolheria resolver?*

## E quando fui eu que aceitei a resposta?

Para sentir na pele, eu me obriguei a escrever um texto inteiro com IA. [Quinze minutos pedindo, cinco horas revisando](/blog/pt/15-minutes-of-prompting-5-hours-of-editing/). Várias fontes citadas não existiam; eu procurava, não achava e cortava o trecho. O trabalho não diminuiu. Destravou uma coisa em que eu sempre fui ruim, que é escrever. E, no fim, não foi a IA que gerou: fui eu que entreguei.

## O que eu faço com isso?

Quatro perguntas passam a acompanhar qualquer uso:

1. **De onde veio essa afirmação?** Se depende de um fato da sua organização, ele foi fornecido, encontrado numa fonte ou apenas inferido? Uma hipótese não vira fato porque ficou bem escrita.
2. **A informação está atualizada?** O treino não se atualiza sozinho a cada acontecimento. O assistente pode buscar dados recentes, mas preciso conferir se buscou e em qual fonte.
3. **Preciso aplicar uma regra exata?** Então vale separar geração de texto de cálculo verificável, como no [capítulo 10](/ia/pedir-o-script/).
4. **Cabe?** Tudo é contado em tokens: o que você escreve, o que anexa, o que ele responde.

É o que eu repito em todo treinamento: [antes de qualquer técnica sofisticada, o básico](/blog/pt/before-rag-and-mcp-learn-the-basics/). Entender como o modelo funciona, saber escolher e saber o que colocar na entrada resolve a maior parte dos problemas.


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Uma hipótese útil pode virar um fato inventado na próxima cópia. Como manter a pergunta sem transformar uma pessoa em personagem da resposta?
- **Caminhos na mesa:**
  - *Lia:* tirar a IA da redação do relatório por enquanto. Reduz esse caminho para o erro, mas devolve toda a escrita ao time.
  - *Bia:* aproveitar as hipóteses como perguntas para as visitas. Pode ajudar a ouvir, mas também induzir o time a procurar só o que confirma a resposta.
  - *Caio:* exigir a origem de cada afirmação sobre um caso. Mantém parte do apoio à escrita, mas cria trabalho de conferência e não garante que a fonte esteja certa.
- **O que o time fez, por enquanto:** retirou o parágrafo do relatório. Bia guardou as perguntas em uma seção de hipóteses, incluindo "o que mais poderia explicar?"; Caio revisou a separação entre relato e suposição. Lia teria de reescrever o trecho antes da reunião.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Tokens e representações:** o texto vira unidades e números que o modelo transforma conforme o contexto.
- **Atenção:** ajuda a relacionar partes da entrada; outras operações da rede também transformam essas representações.
- **Geração:** as probabilidades da continuação não são uma medida de verdade. O assistente pode usar ferramentas e fontes, mas é preciso conferir o que fez.

Por que uma explicação coerente pode continuar sem fundamento?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Escolha uma afirmação que entrou no seu projeto porque parecia convincente. Como você a conferiria fora da conversa com o modelo? Se não conseguir, o que pode continuar como hipótese e o que precisa sair da entrega? Faça essa mudança e observe o que ela obriga a repensar.

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
- ALNYLAM PHARMACEUTICALS; INCEPTIVE. **Alnylam and Inceptive form strategic AI collaboration to accelerate the discovery of RNAi therapeutics**. [*S. l.*]: Inceptive, 3 jun. 2026. Comunicado conjunto. Disponível em: <https://inceptive.com/blog/alnylam-ai-rnai-therapeutics-partnership>. Acesso em: 15 nov. 2026.
- ANTHROPIC. **Effective context engineering for AI agents**. [*S. l.*], 29 set. 2025. Disponível em: <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>. Acesso em: 13 nov. 2026.
- CAI, Kenrick. **Google hires top talent from startup Character.AI, signs licensing deal**. [*S. l.*]: Reuters, 2 ago. 2024. Republicado por Investing.com. Disponível em: <https://www.investing.com/news/economy-news/google-inks-licensing-deal-with-characterai-hires-its-cofounders-3552866>. Acesso em: 15 nov. 2026.
- COHERE. **About Cohere**. [*S. l.*], [s. d.]. Disponível em: <https://cohere.com/about>. Acesso em: 15 nov. 2026.
- ESSENTIAL AI. **We are excited to announce Essential AI**. [*S. l.*]: LinkedIn, [2023]. Disponível em: <https://www.linkedin.com/posts/essentialai_essential-ai-linkedin-activity-7140477733100281856-m5Mc>. Acesso em: 15 nov. 2026.
- GOLDMAN, Sharon. **Nvidia quietly acquihires Essential AI team, including Transformer coauthor Ashish Vaswani**. [*S. l.*]: Ground Level AI, 20 jun. 2026. Disponível em: <https://www.groundlevel-ai.com/p/nvidia-quietly-acquihires-essential>. Acesso em: 15 nov. 2026.
- LUAN, David. **Introducing Adept**. [*S. l.*]: Adept, 26 abr. 2022. Disponível em: <https://www.adept.ai/blog/introducing-adept/>. Acesso em: 15 nov. 2026.
- MARANHÃO FILHO, Éfrem. **15 minutos de prompt, 5 horas editando**. [*S. l.*]: efrem.io, 23 set. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/15-minutes-of-prompting-5-hours-of-editing/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Antes de RAG e MCP, aprenda o básico**. [*S. l.*]: efrem.io, 30 jun. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/before-rag-and-mcp-learn-the-basics/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Migrar para o GPT-5 está sendo um parto**. [*S. l.*]: efrem.io, 8 ago. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/migrating-to-gpt-5-has-been-painful/>. Acesso em: 13 nov. 2026.
- NEAR AI. **Company**. [*S. l.*], [s. d.]. Disponível em: <https://near.ai/company>. Acesso em: 15 nov. 2026.
- OPENAI FORUM. **Learning powerful models: from Transformers to reasoners and beyond**. [*S. l.*], 8 out. 2025. Página de evento e biografia de Łukasz Kaiser. Disponível em: <https://forum.openai.com/public/events/virtual-event-learning-powerful-models-from-transformers-to-reasoners-and-beyond-dxm2qrm1au>. Acesso em: 15 nov. 2026.
- OPENAI. **Introducing ChatGPT**. [*S. l.*], 30 nov. 2022. Disponível em: <https://openai.com/index/chatgpt/>. Acesso em: 15 nov. 2026.
- PARMAR, Niki. **Niki Parmar**. [*S. l.*]: LinkedIn, [s. d.]. Perfil profissional público. Disponível em: <https://www.linkedin.com/in/nikiparmar>. Acesso em: 15 nov. 2026.
- POLO CLUB OF DATA SCIENCE. **Transformer Explainer**: LLM transformer model visually explained. Atlanta: Georgia Institute of Technology, [2024?]. Disponível em: <https://poloclub.github.io/transformer-explainer/>. Acesso em: 13 nov. 2026.
- PRIMACK, Dan. **Top AI researcher leaves Google for OpenAI**. [*S. l.*]: Axios, 18 jun. 2026. Disponível em: <https://www.axios.com/2026/06/18/noam-shazeer-google-openai-characterai>. Acesso em: 15 nov. 2026.
- SAKANA AI. **Company information**. [*S. l.*], [s. d.]. Disponível em: <https://sakana.ai/company-info/>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **Attention in transformers, step-by-step**. Adaptação textual de Justin Sun. [*S. l.*]: 3Blue1Brown, 7 abr. 2024. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/attention/>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **How might LLMs store facts**. Adaptação textual de Justin Sun. [*S. l.*]: 3Blue1Brown, 31 ago. 2024. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/mlp/>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **Large language models explained briefly**. Adaptação textual de Justin Sun. [*S. l.*]: 3Blue1Brown, 20 nov. 2024. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/mini-llm/>. Vídeo correspondente: <https://www.youtube.com/watch?v=LPZh9BOjkQs>. Acesso em: 15 nov. 2026.
- SANDERSON, Grant. **Transformers, the tech behind LLMs**. Adaptação textual de Justin Sun. [*S. l.*]: 3Blue1Brown, 1 abr. 2024. Lição ilustrada. Disponível em: <https://www.3blue1brown.com/lessons/gpt/>. Vídeo correspondente: <https://www.youtube.com/watch?v=wjZofJX0v4M>. Acesso em: 15 nov. 2026.
- USZKOREIT, Jakob. **Transformer: a novel neural network architecture for language understanding**. [*S. l.*]: Google Research, 31 ago. 2017. Disponível em: <https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/>. Acesso em: 15 nov. 2026.
- VASWANI, Ashish *et al.* **Attention is all you need**. [*S. l.*]: arXiv, 2017. DOI: <https://doi.org/10.48550/arXiv.1706.03762>. Acesso em: 13 nov. 2026.

*Notas:* As explicações de Sanderson sobre LLMs, Transformer, atenção e MLPs são referências para a intuição do mecanismo. O roteiro por completar vem do vídeo curto; o mapa de relações adapta a explicação de embeddings; os exemplos com "banco" e a pasta da Lia são adaptações didáticas do guia. As abas não executam um modelo nem exibem pesos medidos. Na versão em inglês, o sentido de assento dá lugar à margem de rio, preservando a ambiguidade de *bank*. Atenção troca informação entre posições permitidas; no modelo de geração causal, cada posição não pode consultar tokens futuros. Esse limite não impede cálculos em paralelo durante o treino. As camadas intermediárias também transformam as representações; atenção não é a rede inteira. O anúncio original do ChatGPT documenta etapas posteriores ao pré-treino; Anthropic (2025), parte interessada, descreve o uso de ferramentas e informações recuperadas no contexto de agentes.

Para ver o mecanismo, a ordem sugerida é: [visão breve](https://www.youtube.com/watch?v=LPZh9BOjkQs), [Transformer e embeddings](https://www.youtube.com/watch?v=wjZofJX0v4M), [atenção](https://www.3blue1brown.com/lessons/attention/) e [camadas intermediárias](https://www.3blue1brown.com/lessons/mlp/). O [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) permite explorar um modelo pequeno por dentro. São aprofundamentos opcionais: nenhuma fórmula é pré-requisito para continuar o guia.

O artigo de Vaswani *et al.* foi apresentado no arXiv em 12 de junho de 2017. A explicação de Uszkoreit (2017) complementa o artigo; a analogia da fila é uma simplificação didática.

#### Para onde foram as oito pessoas do artigo?

Recorte das trajetórias documentadas nas fontes consultadas em 15 de novembro de 2026. As datas dos comunicados e das notícias importam: uma biografia antiga não garante um vínculo atual. Páginas institucionais e perfis pessoais são fontes de partes interessadas; aqui sustentam vínculos e propostas declaradas, não atestados de qualidade das empresas.

| Pessoa | Trajetória depois do trabalho no Google |
|---|---|
| Ashish Vaswani | Cofundou a [Adept](https://www.adept.ai/blog/introducing-adept/) e a [Essential AI](https://www.linkedin.com/posts/essentialai_essential-ai-linkedin-activity-7140477733100281856-m5Mc). Sua contratação pela [Nvidia foi noticiada em junho de 2026](https://www.groundlevel-ai.com/p/nvidia-quietly-acquihires-essential) por Sharon Goldman. |
| Noam Shazeer | Cofundou a Character.AI e [voltou ao Google DeepMind em 2024](https://www.investing.com/news/economy-news/google-inks-licensing-deal-with-characterai-hires-its-cofounders-3552866). Depois: [OpenAI, em junho de 2026](https://www.axios.com/2026/06/18/noam-shazeer-google-openai-characterai). |
| Niki Parmar | Cofundou a [Adept](https://www.adept.ai/blog/introducing-adept/) e a [Essential AI](https://www.linkedin.com/posts/essentialai_essential-ai-linkedin-activity-7140477733100281856-m5Mc). Seu [perfil profissional público](https://www.linkedin.com/in/nikiparmar) registra a Anthropic. |
| Jakob Uszkoreit | Cofundou a [Inceptive](https://inceptive.com/blog/alnylam-ai-rnai-therapeutics-partnership), que aplica modelos à pesquisa de moléculas e medicamentos; o comunicado de 2026 o apresenta como CEO. |
| Llion Jones | Cofundou a [Sakana AI](https://sakana.ai/company-info/), laboratório de pesquisa em IA sediado em Tóquio. |
| Aidan N. Gomez | Cofundou a [Cohere](https://cohere.com/about), voltada a IA para organizações; a página institucional o apresenta como CEO. |
| Łukasz Kaiser | Foi para a [OpenAI](https://forum.openai.com/public/events/virtual-event-learning-powerful-models-from-transformers-to-reasoners-and-beyond-dxm2qrm1au), onde a biografia do evento de 2025 o apresenta como pesquisador de aprendizado profundo. |
| Illia Polosukhin | Cofundou o projeto de blockchain NEAR e a [NEAR AI](https://near.ai/company), cuja proposta é uma IA controlada por quem usa. |

</div>
