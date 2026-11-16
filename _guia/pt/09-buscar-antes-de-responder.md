---
title: "Qual dessas regras vale agora?"
subtitle: "Busca em fontes, recuperação e autoridade."
description: "O modelo não leu os documentos da sua organização. Como fazer com que ele consulte a página certa na hora certa — e diga quando não achou?"
lang: pt-BR
ref: retrieval
order: 9
part: 2
permalink: /ia/buscar-antes-de-responder/
interactive: "que trechos você levaria?"
piece: "as dez perguntas mais repetidas, com a página que responde cada uma"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 9

Iara ligou: uma família tinha recebido duas visitas na mesma semana, cada pessoa seguindo "o protocolo". Lia tinha encurtado as instruções do projeto e cortado a indicação de qual documento valia em cada situação. Bia usava o formulário que conhecia de campo; Caio achou uma versão mais recente, que não mencionava o anexo em papel. Pediu ao agente: "compare as orientações e mostre onde divergem, com a página". Bia revisou e encontrou uma exceção que a comparação tinha perdido. A busca ajudou a enxergar a briga. Não decidiu quem podia encerrá-la. Enquanto Iara consultava a secretaria, quem responderia à próxima escola?
</div>

Os dois capítulos anteriores deixaram um problema montado. O [capítulo 3](/ia/por-dentro-do-modelo/) mostrou que o modelo completa com o que é plausível quando não tem o fato. O [capítulo 8](/ia/contexto/) mostrou por que organizar os documentos importa mesmo quando todos cabem na janela. Sobra a pergunta: como entregar só o pedaço certo, na hora em que ele é necessário?

## De onde o modelo tira o que sabe?

De dois lugares, e vale nunca confundir um com o outro.

| | O que ficou do treino | O que está na janela agora |
|---|---|---|
| **O que é** | Padrões de bilhões de textos | O que você escreveu, anexou ou o sistema buscou |
| **Atualização** | Parou em alguma data | Tão atual quanto o que você fornecer |
| **Sua organização** | Pode conter informação pública e desatualizada; não conhece por isso o projeto atual | Pode receber os registros escolhidos para esta tarefa |
| **Dá para conferir a origem?** | A resposta, sozinha, não mostra de qual material do treino veio | Dá para abrir o documento e conferir se sustenta a afirmação |

Qual das duas colunas você gostaria que respondesse a uma pergunta sobre o protocolo da sua rede?

## E se ele pudesse consultar antes de responder?

É essa a ideia que ficou conhecida pela sigla RAG (*retrieval-augmented generation*, geração aumentada por recuperação), nome que vem de um [artigo acadêmico](https://arxiv.org/abs/2005.11401). Tirando o nome, são quatro passos:

1. **Cortar** os documentos em trechos.
2. **Representar** cada trecho como um vetor — o *embedding* do capítulo 3 —, de modo que trechos de assunto parecido fiquem próximos.
3. **Buscar**, a cada pergunta, os trechos mais próximos dela.
4. **Responder** com esses trechos dentro da janela, pedindo que o modelo diga de qual deles tirou cada afirmação.

O modelo continua sendo o mesmo. O que muda é que, antes de ele completar o texto, alguém foi à estante.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** escolha a pergunta sobre a bolsa. A resposta não está na base. O que você prefere que o sistema faça: arrisque uma resposta bem escrita ou admita que não achou? E como você o obrigaria a isso?
</div>

<div data-widget="busca"></div>

A busca do experimento conta palavras em comum. A recuperação pode usar palavras, relações aprendidas ou combinações; o [artigo de referência também compara formas de busca](https://arxiv.org/html/2005.11401v4). O exercício deixa visível uma decisão: se o trecho encontrado fala do mesmo assunto, mas não responde à pergunta, ele deveria entrar como evidência?

## Onde isso quebra?

Em vez de uma lista de defeitos, perguntas para fazer a qualquer sistema desse tipo — inclusive ao que você vai montar:

- **O corte passou no lugar errado?** Uma regra e a sua exceção, em trechos diferentes, viram duas "verdades".
- **Tem tabela no meio?** A busca por trechos foi pensada para texto corrido. Tabela com dois cabeçalhos e célula mesclada chega ao modelo como uma sopa de números.
- **A pergunta usa as palavras do documento?** Quem pergunta diz "sumiu da escola"; o protocolo diz "infrequência".
- **Qual versão está na base?** Um documento revogado, se estiver lá, será citado com a mesma confiança.
- **E quando não há resposta?** O sistema sabe dizer "não encontrei"?
- **Quem pode ver o quê?** Se a base tem documentos restritos, a busca precisa respeitar a permissão de quem pergunta.

As perguntas misturam tecnologia e organização. Uma busca bem implementada pode trazer uma regra revogada; uma base atualizada pode ser mal consultada. Quem cuida dos documentos e quem constrói a consulta precisam se encontrar.

## E quando a resposta não está em documento nenhum?

Às vezes o que falta não é um texto, é um dado ou uma ação: quantas faltas uma estudante tem hoje, qual é o endereço de uma escola, abrir um chamado. Para isso existem as **ferramentas**: o modelo escreve o pedido ("consulte a frequência do código E-027"), o sistema executa de verdade e devolve o resultado para a janela.

A lógica é a mesma da busca — trazer para o contexto o que o modelo não tem —, com uma diferença importante: uma ferramenta pode *fazer* coisas. As perguntas sobre isso ficam para o [capítulo 15](/ia/agentes-com-redea/).

## Funciona com a minha própria estante?

Minha primeira tentativa de criar uma tutora para estudar IA [não deu tão certo](/blog/pt/my-public-commitment-to-study-ai/). Depois de futucar, fui atrás de aulas abertas e de materiais organizados por assunto. O episódio deixa uma pergunta: de que fontes viria o que essa tutora ensinasse? Dar à ferramenta esse papel também responde à escolha do material?

Quando preparei um curso para pessoas de produto, juntei os links de todas as minhas apresentações e das listas que mantenho — umas duzentas fontes — num caderno configurado para responder a partir delas e indicar o arquivo e o trecho usado. Funciona melhor do que eu esperava.

E quebra exatamente onde este capítulo diz que quebra. Algumas fontes estavam vazias, porque a página tinha mudado. E, quando alguém da turma perguntou sobre um assunto que não estava na base, ele respondeu assim mesmo, citando um trecho que não tinha nada a ver.

## A pergunta sobre a fonte nasceu com a IA?

Antes desses assistentes, eu já propunha [um trabalho que tinha de ser feito com plágio](https://docs.google.com/document/d/1MFKLA7-5aMS9MI32p3sNLCqLCmIFeQ_NFAfvylH2nzY/edit?usp=sharing), inspirado na escrita não criativa. A turma montava um texto com trechos de fontes diferentes, identificados por cores. Junto de cada referência, precisava explicar por que a tinha usado e por que era confiável. O exercício não autorizava esconder autoria: fazia a origem aparecer.

A pergunta reaparece com a resposta do modelo: que parte veio de uma fonte que você consegue conferir? O que foi inferido? O que continua sem apoio? Uma explicação que não mostra essa diferença pode soar muito melhor do que o trabalho que a sustenta.

## Preciso mesmo disso?

Talvez não, e essa é uma pergunta honesta para fazer antes de montar qualquer coisa. Se o documento é curto e cabe folgado na janela, cole o documento. Se a dúvida é sempre a mesma, escreva a resposta uma vez. Eu costumo dizer que [antes dessas técnicas vem o básico](/blog/pt/before-rag-and-mcp-learn-the-basics/): escolher o modelo, pedir bem, dar contexto. Muita gente monta a estante antes de saber que pergunta quer responder.

## Que perguntas ajudam a escolher o caminho?

1. **Qual é a fonte da verdade?** Um documento, uma planilha, uma pessoa?
2. **Quem a mantém em dia** — e como a base fica sabendo quando ela muda?
3. **Como eu vou saber de onde veio cada resposta?**
4. **O que o sistema faz quando não acha?**
5. **Quem não pode ver o quê?**

Se você consegue responder às cinco, a parte técnica é a menor. Se não consegue, nenhuma técnica resolve.


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Encontrar um documento resolve a dúvida ou só revela versões em conflito? Quem tem autoridade para dizer qual vale?
- **Caminhos na mesa:**
  - *Caio:* indexar todas as versões, identificadas, para localizar divergências. Ajuda a investigar, mas uma resposta ainda pode misturar regras incompatíveis.
  - *Bia:* manter provisoriamente o formulário que as equipes usam. Preserva a continuidade, mas pode prolongar uma orientação superada.
  - *Lia:* suspender as orientações em conflito até a secretaria decidir. Evita escolher sem autoridade, mas deixa perguntas sem resposta imediata.
- **O que o time fez, por enquanto:** montou uma consulta às perguntas frequentes com página e versão. Nos conflitos, adotou a suspensão proposta por Lia e pediu decisão a Iara. Uma escola ficou esperando retorno; o custo da cautela apareceu na agenda, não na qualidade da busca.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Recuperação:** procurar material relevante antes de gerar uma resposta; o modelo não precisa ter aprendido aquele documento no treino.
- **Etapas distintas:** a fonte pode estar errada, a busca pode perder o trecho e a geração pode distorcê-lo.
- **Citação:** oferece um caminho para conferir. A conclusão ainda precisa ser sustentada pelo trecho.

Se a resposta cita um documento verdadeiro e mesmo assim erra, onde você procuraria o problema?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Escolha uma pergunta recorrente do seu projeto e indique o material que deveria ajudar a respondê-la. Peça a resposta com os trechos usados e abra esses trechos. Eles sustentam a conclusão? Se duas fontes discordarem, quem pode resolver a diferença — e o que você consegue entregar enquanto isso?

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (30 min) — a biblioteca humana

Distribua um regulamento de quatro ou cinco páginas (o da própria instituição serve), recortado em parágrafos, um por pessoa. Uma dupla faz perguntas em voz alta. Quem acha que o seu parágrafo responde levanta a mão; a turma escolhe no máximo dois; uma terceira pessoa responde usando só o que foi lido. Incluam de propósito uma pergunta que o regulamento não responde.

#### Perguntas de discussão

- Em qual pergunta levantaram a mão pessoas demais? O que isso diz sobre como o texto foi cortado?
- Quando a resposta não existia, alguém tentou responder mesmo assim? Por quê?
- Na sua organização, qual documento todo mundo cita e ninguém sabe qual é a versão vigente?
- Quem deveria poder perguntar, mas não deveria poder ler tudo?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- GOLDSMITH, Kenneth. **Uncreative writing**: managing language in the digital age. New York: Columbia University Press, 2011.
- LEWIS, Patrick *et al.* **Retrieval-augmented generation for knowledge-intensive NLP tasks**. [*S. l.*]: arXiv, 2020. Aceito na NeurIPS 2020. DOI: <https://doi.org/10.48550/arXiv.2005.11401>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Antes de RAG e MCP, aprenda o básico**. [*S. l.*]: efrem.io, 30 jun. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/before-rag-and-mcp-learn-the-basics/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Meu compromisso público de estudar IA até o fim do ano**. [*S. l.*]: efrem.io, 24 set. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/my-public-commitment-to-study-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Trabalhos com plágio**. [*S. l.*], 2014. Instrução de atividade para estudantes. Disponível em: <https://docs.google.com/document/d/1MFKLA7-5aMS9MI32p3sNLCqLCmIFeQ_NFAfvylH2nzY/edit?usp=sharing>. Acesso em: 15 nov. 2026.

*Notas:* O exercício de escrita com fontes foi proposto pelo autor em 2014, inspirado em Goldsmith (2011). O documento original descreve identificação por cores, fontes múltiplas e discussão da confiabilidade.

</div>
