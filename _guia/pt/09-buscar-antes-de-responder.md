---
title: "Buscar antes de responder"
description: "O modelo não leu os documentos da sua organização. Como fazer com que ele consulte a página certa na hora certa — e diga quando não achou?"
lang: pt-BR
ref: retrieval
order: 9
part: 2
permalink: /ia/buscar-antes-de-responder/
interactive: "que trechos você levaria?"
piece: "as dez perguntas mais repetidas, com a página que responde cada uma"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 9

O protocolo da rede tem trezentas páginas, três versões e um anexo que só existe em papel. Lia já aprendeu que não adianta colar tudo na conversa. Mas a equipe pergunta as mesmas coisas toda semana — quantas faltas, quem liga, quem visita — e cada pessoa responde de um jeito. Se nem a equipe concorda sobre o que o protocolo diz, o que um assistente vai dizer?
</div>

Os dois capítulos anteriores deixaram um problema montado. O [capítulo 3](/ia/por-dentro-do-modelo/) mostrou que o modelo completa com o que é plausível quando não tem o fato. O [capítulo 8](/ia/contexto/) mostrou que despejar todos os documentos na janela piora a resposta. Sobra a pergunta: como entregar só o pedaço certo, na hora em que ele é necessário?

## De onde o modelo tira o que sabe?

De dois lugares, e vale nunca confundir um com o outro.

| | O que ficou do treino | O que está na janela agora |
|---|---|---|
| **O que é** | Padrões de bilhões de textos | O que você escreveu, anexou ou o sistema buscou |
| **Atualização** | Parou em alguma data | Tão atual quanto o que você fornecer |
| **Sua organização** | Quase certamente não está lá | Só se alguém colocar |
| **Dá para conferir a origem?** | Não | Sim — está na sua frente |

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

A busca do experimento é propositalmente simples: conta palavras em comum. Os sistemas de verdade comparam significado, não palavras. Mas o que você decidiu ali — quantos trechos entram, o que fazer quando nenhum serve — são decisões humanas em qualquer versão.

## Onde isso quebra?

Em vez de uma lista de defeitos, perguntas para fazer a qualquer sistema desse tipo — inclusive ao que você vai montar:

- **O corte passou no lugar errado?** Uma regra e a sua exceção, em trechos diferentes, viram duas "verdades".
- **A pergunta usa as palavras do documento?** Quem pergunta diz "sumiu da escola"; o protocolo diz "infrequência".
- **Qual versão está na base?** Um documento revogado, se estiver lá, será citado com a mesma confiança.
- **E quando não há resposta?** O sistema sabe dizer "não encontrei"?
- **Quem pode ver o quê?** Se a base tem documentos restritos, a busca precisa respeitar a permissão de quem pergunta.

Repare que só a primeira pergunta é técnica. As outras são sobre a organização: quem cuida dos documentos, quem decide qual vale, quem pode ler.

## E quando a resposta não está em documento nenhum?

Às vezes o que falta não é um texto, é um dado ou uma ação: quantas faltas uma estudante tem hoje, qual é o endereço de uma escola, abrir um chamado. Para isso existem as **ferramentas**: o modelo escreve o pedido ("consulte a frequência do código E-027"), o sistema executa de verdade e devolve o resultado para a janela.

A lógica é a mesma da busca — trazer para o contexto o que o modelo não tem —, com uma diferença importante: uma ferramenta pode *fazer* coisas. As perguntas sobre isso ficam para o [capítulo 15](/ia/agentes-com-redea/).

## Preciso mesmo disso?

Talvez não, e essa é uma pergunta honesta para fazer antes de montar qualquer coisa. Se o documento é curto e cabe folgado na janela, cole o documento. Se a dúvida é sempre a mesma, escreva a resposta uma vez. Eu costumo dizer que [antes dessas técnicas vem o básico](/blog/pt/before-rag-and-mcp-learn-the-basics/): escolher o modelo, pedir bem, dar contexto. Muita gente monta a estante antes de saber que pergunta quer responder.

## Um caminho, em cinco perguntas

1. **Qual é a fonte da verdade?** Um documento, uma planilha, uma pessoa?
2. **Quem a mantém em dia** — e como a base fica sabendo quando ela muda?
3. **Como eu vou saber de onde veio cada resposta?**
4. **O que o sistema faz quando não acha?**
5. **Quem não pode ver o quê?**

Se você consegue responder às cinco, a parte técnica é a menor. Se não consegue, nenhuma técnica resolve.

<div class="g-box g-key" markdown="1">
**Para guardar**

- O modelo tem duas memórias: o que ficou do treino e o que está na janela. Só a segunda dá para conferir.
- Buscar antes de responder é entregar o trecho certo na hora certa, e exigir a citação.
- A qualidade da resposta depende mais de quem cuida dos documentos do que do modelo.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** qual versão do protocolo é a que vale, e quem decide isso? O que é pior — o sistema não achar, ou achar a página errada?
- **Um caminho para responder:** começar pelas dez perguntas que a equipe mais repete; para cada uma, localizar à mão a página que responde; só então montar a base; testar com perguntas cuja resposta ela conhece, e com uma que não tem resposta.
- **Peça nova no projeto:** as dez perguntas mais repetidas, cada uma com a página que a responde.
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

- LEWIS, Patrick *et al.* **Retrieval-augmented generation for knowledge-intensive NLP tasks**. [*S. l.*]: arXiv, 2020. Aceito na NeurIPS 2020. DOI: <https://doi.org/10.48550/arXiv.2005.11401>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Antes de RAG e MCP, aprenda o básico**. [*S. l.*]: efrem.io, 30 jun. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/before-rag-and-mcp-learn-the-basics/>. Acesso em: 13 nov. 2026.

</div>
