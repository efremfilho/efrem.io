---
title: "Pensamento computacional: do problema ao passo a passo"
description: "Você não precisa escrever código. Precisa quebrar um problema, desenhar o fluxo e reconhecer as peças de que todo software é feito. É isso que dá autonomia a quem quer construir."
lang: pt-BR
ref: computational-thinking
order: 7
part: 2
permalink: /ia/pensamento-computacional/
interactive: "monte o algoritmo + camadas + loop"
piece: "o fluxo da busca ativa e um mini-PRD"
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 7

Antes de dividir o trabalho, Lia propôs um teste: cada pessoa pede ao seu agente que desenhe o fluxo da busca ativa, do jeito que ela mesma explicaria. Voltaram três fluxos. No da Bia, tudo começa quando a escola liga. No do Caio, quando a planilha chega. No da Lia, quando alguém percebe. E quantas faltas disparam o primeiro contato? Cada agente tinha um número — o que a sua pessoa deu. Caio queria juntar os três "e pronto". Bia queria que valesse o dela, que é o que acontece na rua. Se o próprio time não descreve o trabalho do mesmo jeito, o que três agentes vão construir?
</div>

Eu sempre fui *builder*. Mesmo formado em Ciência da Computação, passei boa parte da carreira construindo com ferramentas de pouco ou nenhum código e escrevendo, no máximo, um bocadinho de script — os repositórios antigos do meu GitHub trazem na descrição, com toda a honestidade, "meus scripts preguiçosos". O motivo é simples: eu odiava programar. Não a lógica: a precisão. Eu esquecia um parêntese e me lascava por causa da porcaria de um parêntese.

Hoje eu não programo — e faço desenvolvimento o dia inteiro. A diferença é sutil e muda tudo: eu não escrevo linha a linha. Digo o que quero resolver, aponto o problema que estou vendo, e o time faz. O time, no caso, são agentes que programam. Parece muito mais com o meu trabalho de produto do que com o de quem programa. A parte chata passou para quem não se importa de ser preciso. A parte que sempre me interessou ficou comigo, e é dela que este capítulo trata.

Dá para ver essa virada nos meus próprios textos. Durante anos, minha maior decisão ao escolher uma ferramenta de pouco código foi [do que eu abriria mão para ganhar pronto](/blog/pt/what-i-give-up-with-low-code/). Com agentes que programam, essa conta mudou, e essas ferramentas perderam boa parte do valor para mim: hoje as vejo fazer sentido onde a organização restringe o que se pode instalar e quem pode programar. Eu passei a [mexer em código sem abrir o código](/blog/pt/the-problem-is-being-a-mere-proxy-for-ai/): questiono, documento as decisões e peço explicações. O que não perdeu valor nenhum foi o que as caixinhas me ensinaram, que é desenhar o fluxo.

## O que mudou, e o que não mudou?

**Mudou** quem precisa ser preciso. O computador é burro: faz literalmente o que foi mandado. Escreva "Ola", sem o acento, onde o programa esperava "Olá", e ele devolve "valor não esperado". Um modelo de linguagem perdoa o acento, a letra trocada, a frase pela metade — e traduz o que eu quis dizer para a precisão que a máquina exige. Ser preciso é que era chato. Era o que deixava quase todo mundo do lado de fora.

**Não mudou** que alguém precisa transformar um problema bagunçado em algo que uma máquina consiga executar. Isso tem nome: **pensamento computacional**. Jeannette Wing, que popularizou o termo, já defendia que é uma habilidade para todo mundo, não só para quem é da computação.

No Brasil, a ideia chegou até às diretrizes de um curso que não é de computação. As Diretrizes Curriculares Nacionais de Administração pedem que a pessoa formada saiba:

> formular problemas e suas soluções, de forma que as soluções possam ser efetivamente realizadas por um agente de processamento de informações, envolvendo as etapas de decomposição dos problemas, identificação de padrões, abstração e elaboração de sequência de passos para a resolução.

"Um agente de processamento de informações." Quando foi escrita, era uma expressão abstrata. Hoje é literal: é o agente de IA aberto na sua tela, esperando você formular o problema.

É o foco da disciplina que eu dou na FGV EPPG: entender que dá para automatizar com código, de forma determinística, e que a IA precisa ser usada de um jeito que [forme o nosso pensamento crítico](/blog/pt/how-to-teach-critical-use-of-ai/), não que o substitua.

## Como se pensa um problema para uma máquina?

Use o problema da Lia como exemplo — adolescentes que param de ir à escola e uma equipe pequena para ir atrás.

1. **Decompor.** "Reduzir a evasão" não é um problema que se resolva; é um guarda-chuva. Quebrado em partes: saber quem está faltando; decidir quem procurar primeiro; fazer o contato; registrar o que aconteceu; aprender com o registro. Cada parte tem dono, dado e prazo diferentes.
2. **Reconhecer padrões.** Faltas às sextas no turno da noite. Ausência que começa depois das férias de julho. Irmãos que somem juntos. Padrão é o que permite sair do caso a caso.
3. **Abstrair.** Decidir o que importa e o que fica de fora. Para a primeira triagem, importa a sequência de faltas; não importa o nome, o endereço nem a nota de matemática. Abstrair bem é, de quebra, proteger dado ([capítulo 5](/ia/dados-e-privacidade/)).
4. **Escrever o passo a passo.** O algoritmo: uma sequência sem ambiguidade, que duas pessoas diferentes — ou uma pessoa e uma máquina — executariam do mesmo jeito.

## Você consegue desenhar o seu processo?

Um jeito de testar se você entende um processo é tentar desenhá-lo como fluxo: o que **entra**, o que se **repete**, onde se **decide**, o que **sai**. Se você não consegue, o problema ainda não está pronto para ser automatizado — por IA ou por qualquer outra coisa.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** coloque os seis passos em ordem. Depois olhe para o número cinco, no quarto passo: quem deveria decidir esse número, e com base em quê?
</div>

<div data-widget="fluxo"></div>

Duas coisas valem ouro nesse exercício. A primeira: o número cinco. Ele não é técnico, é uma **decisão** que alguém precisa tomar e justificar — por que cinco faltas e não três? A segunda: o passo que é de gente. Ele está no fluxo por escolha, não por limitação da tecnologia.

Desenhar fluxo não depende de ferramenta de arrastar caixinha. É pensar algoritmicamente, e continua sendo o que eu entrego aos agentes para implementarem. Duas regras de bolso que trago daquele tempo: todo fluxo começa com um **gatilho** (alguém clicou, chegou um arquivo, deram sete da manhã), e **um fluxo tem que caber numa página**. Não coube? São dois fluxos. Quando um pedaço vive quebrando, eu troco só aquele pedaço.

## Então eu não preciso aprender a programar?

É a pergunta que sempre aparece. Escrever código, provavelmente não. Ler, sim — e ler código, hoje, é em boa parte ler inglês com paciência. O processo que eu peço a qualquer turma é este: **peça em linguagem natural, deixe o agente gerar e depois entenda o que o código está fazendo.** Não entendeu um trecho? Eu também não entendo vários. Copio, colo num assistente e pergunto.

Para ler, cinco ideias bastam. Quem usa planilha já conhece todas:

1. **Função**: um nome, parênteses e, dentro deles, aquilo de que ela precisa para trabalhar. `=SOMA(2;3)` é uma função que alguém escreveu e você usa. Em código é igual — e dá para criar as suas.
2. **Variável**: um nome para um valor que pode mudar. Na planilha, é a célula: `A1` continua sendo `A1` quando o número lá dentro muda. Num contrato, é "o vendedor": definido uma vez no alto, vale para o resto do texto — e, se a pessoa mudar, o contrato inteiro continua de pé.
3. **Condicional**: o `SE` das planilhas. Se você sabe usar `=SE(A1>=5;"contatar";"ok")`, já sabe o que é.
4. **Loop**: "faça isto para cada linha". Faça de 1 a 10. Faça para toda a lista de estudantes. Faça só para quem estuda à noite — e o loop acaba de ganhar uma condicional dentro, que é como quase todo filtro funciona. Seis linhas ou seis milhões, o código é o mesmo.
5. **API**: uma função que mora em outro computador. Pense num restaurante: o salão não entra na cozinha. Faz o pedido a quem serve, que leva, espera e traz de volta — e existe um protocolo para isso, até a porta certa para entrar. Quando o agente "consulta o mapa" ou "cria um cartão no quadro", foi por uma API.

<div data-widget="loop"></div>

Com essas cinco, a maior parte dos scripts que um agente escreve deixa de ser hieróglifo. Duas miudezas ajudam na leitura: linha que começa com `#` é **comentário**, um recado para gente que o computador ignora; e **biblioteca** é um pacote de funções que outras pessoas já escreveram. Os tutoriais que eu uso em aula estão abertos no [meu GitHub](https://github.com/efremfilho/python_scripts/tree/main/tutorials) — e um bom exercício é abrir qualquer um deles em um assistente e pedir: "me explica o que está acontecendo aqui, linha por linha".

## Do que é feito um "sisteminha"?

Quando alguém diz "quero um sisteminha", está pedindo três coisas sem saber:

| Camada | Nome técnico | O que é | No painel da Lia |
|---|---|---|---|
| **Frente** | *frontend* | O que a pessoa vê e toca | A tela com a lista da semana e o botão "contato feito" |
| **Regras** | *backend* | O que acontece quando alguém toca | "Cinco faltas seguidas viram alerta"; "só a coordenação vê todas as escolas" |
| **Dados** | banco de dados | O que continua existindo amanhã | A tabela de frequência e o histórico de contatos |

Entre as camadas, e entre o seu sistema e o resto do mundo, ficam as **APIs**. No quadro da sala eu desenho a pilha inteira:

<figure class="g-stack">
<div class="g-stack-apps"><span>celular</span><span>navegador</span><span>TV</span></div>
<div class="g-stack-group" data-label="o seu aplicativo">
<div class="g-stack-layer">Frente <small>o que se vê e toca</small></div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer">Regras <small>o que acontece</small></div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer">Dados <small>o que fica guardado</small></div>
</div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer g-stack-low">Sistema operacional</div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer g-stack-low">Hardware</div>
<figcaption>As três camadas de cima são o seu aplicativo, que pode aparecer em telas diferentes. As duas de baixo existem, mas quase nunca serão preocupação sua: alguém já cuida delas.</figcaption>
</figure>

<div data-widget="camadas"></div>

Saber disso muda a conversa com um agente ou com uma ferramenta que gera aplicativos. "Ficou feio" é pedido de frente. "Está contando errado" é pedido de regra. "Sumiu o que eu cadastrei ontem" é problema de dados. Quem aponta a camada certa resolve em uma mensagem o que levaria dez.

A outra ideia que vem junto é **modularizar**: cada pedaço faz uma coisa só. A contagem de faltas não deveria saber nada sobre a cor do botão. Por trás de um "registrar contato" há pedaços menores: conferir se a estudante existe, gravar o contato. Pedaços pequenos e independentes são mais fáceis de testar, de trocar — e de entregar a um agente sem medo de ele quebrar o resto. É o básico técnico que eu vejo gente de operações [pegar rápido](/blog/pt/product-led-ops-the-ops-crowd-flying-with-genai/): modularizar, cada passo fazendo uma coisa só, chave que não fica exposta e versionamento.

## Como pedir?

No mundo de produto, o documento que descreve o que vai ser construído chama-se PRD (*product requirements document*). Você não precisa de quarenta páginas. Sete linhas dão o esqueleto — e elas são, na prática, o contexto do [próximo capítulo](/ia/contexto/):

```
Problema:      adolescentes param de frequentar e a equipe só descobre semanas depois.
Quem usa:      3 pessoas da equipe de campo e 1 coordenadora. Quase sempre no celular.
O que entra:   a lista semanal de frequência de cada escola (códigos, não nomes).
O que sai:     a lista de quem tem 5 ou mais faltas seguidas, da mais longa para a mais curta.
Regras:        ninguém é rotulado como "de risco"; a lista mostra a situação, não a pessoa.
               A decisão de procurar a família é sempre de alguém da equipe.
O que NÃO faz: não envia mensagem sozinho; não guarda endereço; não cruza com benefício social.
Deu certo se:  a lista bate com 10 casos que a equipe contou à mão.
```

As linhas mais importantes são as duas últimas. Dizer o que o sistema **não** faz é onde moram a ética e a segurança. E dizer como você vai **conferir** é o que separa construir de torcer.

Os modelos de hoje aguentam pedidos bem maiores do que sete linhas, e no [capítulo 13](/ia/do-pedido-ao-aplicativo/) eu conto como transformo esse esqueleto num documento de algumas páginas. Mas, se as sete não estiverem claras, as páginas a mais só espalham a confusão. Quando a ideia ainda está verde, acrescento duas perguntas: como isso é resolvido hoje? E por que agora?

## O que diz quem pesquisa isso?

Fui conferir a minha lista com a de quem estuda o assunto. Três achados.

**A lista bate nos conceitos e fica devendo nas práticas.** Um dos referenciais mais usados para ensinar pensamento computacional ([Brennan; Resnick, 2012](http://scratched.gse.harvard.edu/ct/files/AERA2012.pdf)) separa conceitos — sequência, repetição, condicional, dados — de práticas: ir aos poucos, **testar e depurar**, reaproveitar, **abstrair e modularizar**. Condicional, loop e modularização estão no meu quadro. Testar e depurar eu não tinha escrito, e é a lacuna mais clara. Fica o acréscimo: saber pedir um teste e saber ler uma mensagem de erro.

**Ler não basta se ninguém conferir.** Quem pesquisa o ensino de programação depois da IA generativa chega perto da minha aposta: pesa menos escrever e mais ler, testar e verificar. O aviso vem junto. Sem isso, a pessoa vira "mera consumidora" do que foi gerado, na base da fé ([Denny *et al.*, 2023](https://doi.org/10.48550/arXiv.2306.02608)). E há um resultado que incomoda: observando estudantes iniciantes que programavam com IA, um grupo viu que quem teve mais dificuldade achou que tinha ido melhor do que foi, e saiu com uma ilusão de competência ([Prather *et al.*, 2024](https://doi.org/10.48550/arXiv.2405.17739)). Entender o que voltou dá uma sensação de domínio que nem sempre é domínio.

**Quem não é da área precisa justamente disto aqui.** Um estudo sobre como é programar com IA nota que quem programa sem ser da computação muitas vezes não tem o hábito de decompor um problema em subproblemas — e que usar bem um modelo que gera código exige exatamente isso ([Sarkar *et al.*, 2022](https://doi.org/10.48550/arXiv.2208.06213)).

O que a pesquisa ainda não diz: os estudos que encontrei foram feitos com estudantes de computação ou com profissionais, em tarefas curtas. Sobre quem constrói com agentes sem nunca ter programado — você, talvez — quase não há medida. E API e camadas, que para mim são essenciais, mal aparecem nos referenciais clássicos que consultei. Pode ser que eu esteja vendo uma coisa que a escola ainda não viu. Pode ser só deformação de quem trabalha com produto.

## O que isso tem a ver com autonomia?

Eu comecei a escrever sobre construir sem depender de time de desenvolvimento muito antes da IA generativa — anos atrás publiquei um [guia de como montar MVPs sem dev](https://github.com/efremfilho/mvp.without.dev). O que as ferramentas de pouco código prometiam, a IA generativa entregou em outra escala: hoje uma pessoa que entende de um problema consegue chegar a um produto funcionando.

Acho isso muito massa. Como escrevi quando ainda apanhava das primeiras ferramentas: [velocidade não é o diferencial, a autonomia é](/blog/pt/chapter-3-autonomy-not-speed/). Mais gente pode construir, [porque construir passou a ser em linguagem natural](/blog/pt/my-bb-digital-week-talk-on-experimentation-with-genai/).

E tem uma condição. As ferramentas democratizaram o *fazer*; o *pensar* continua sendo de cada pessoa. Quem não sabe decompor um problema pede "um app de evasão escolar" e recebe um app genérico e bonito. Quem sabe, pede o que precisa — e recebe.

Quem quer mudar alguma coisa construindo com tecnologia precisa de duas pernas: letramento em IA generativa e pensamento computacional. Uma sem a outra manca.

<div class="g-box g-key" markdown="1">
**Para guardar**

- Quem precisa ser preciso agora é o agente. Formular o problema continua com você.
- Decompor, reconhecer padrões, abstrair e escrever o passo a passo: quatro movimentos que servem com ou sem computador.
- Função, variável, condicional, loop e API: cinco ideias bastam para ler o que o agente escreveu. Ler não dispensa testar.
- Todo software tem frente, regras e dados, com APIs no meio. Apontar a camada certa é metade do pedido.
- Um bom pedido diz o que o sistema não faz e como você vai conferir.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** por que cinco faltas, e não três? Serve igual para quem estuda de dia e para quem estuda à noite? Qual passo desse fluxo ninguém quer que uma máquina dê?
- **Caminhos na mesa:**
  - *Caio:* pedir a um agente que funda os três fluxos. Rápido — e as decisões escondidas continuam escondidas.
  - *Bia:* uma semana em campo, anotando o que acontece de fato.
  - *Lia:* discutir só as decisões (o número, o gatilho, o passo que é de gente) e deixar o desenho para o agente.
- **O que o time fez, por enquanto:** um fluxo só, com cada decisão marcada e assinada; o mini-PRD; e a divisão: Caio fica com a contagem, Bia com o que aparece no celular de quem visita, Lia com as regras. Cada pessoa revisa o trabalho de outra.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade 1 (20 min) — o café em algoritmo

Cada dupla escreve o passo a passo para preparar um café coado, para alguém que nunca viu uma cozinha. Troquem as folhas com outra dupla, que deve executar **literalmente** o que está escrito (em mímica). Onde a execução trava, falta um passo, uma decisão ou uma definição.

#### Atividade 2 (60 min, em laboratório) — do mapa à planilha

Cenário: vocês assessoram uma prefeitura que quer saber onde faltam serviços públicos (ou uma rede de farmácias que quer saber onde abrir uma loja). A missão é mapear os estabelecimentos de uma região a partir de uma base aberta ou de um serviço de mapas e devolver uma planilha. Antes de abrir qualquer ferramenta, entreguem no papel: (1) o problema decomposto; (2) o fluxo em até oito passos; (3) o mini-PRD de sete linhas. Só então peçam o código a um assistente, em um caderno de código on-line. Critério de avaliação: **cada pessoa do grupo consegue explicar o que cada bloco do script faz**.

#### Atividade 3 (15 min) — prever antes de rodar

Mostre um script curto, gerado por um assistente. Antes de executar, cada pessoa escreve o que acha que vai sair. Rodem. Depois mudem um valor, troquem o nome de uma variável em um lugar só e tirem um acento de um texto comparado em um `if`: o que quebrou, e o que a mensagem de erro diz?

#### Perguntas de discussão

- No fluxo da Lia, quem deveria decidir o número de faltas que dispara o contato? Com base em quê?
- Dê um exemplo de permissão que mora só na "frente" de um sistema que você usa. O que pode dar errado?
- O que é mais difícil de escrever no mini-PRD do seu trabalho: o que entra, as regras ou o que o sistema **não** faz? Por quê?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- BRASIL. Ministério da Educação. Conselho Nacional de Educação. Câmara de Educação Superior. **Resolução nº 5, de 14 de outubro de 2021**. Institui as Diretrizes Curriculares Nacionais do Curso de Graduação em Administração. Brasília, DF: MEC, 2021. Disponível em: <https://portal.ufrrj.br/wp-content/uploads/2016/10/rces005_21.pdf>. Acesso em: 13 nov. 2026.
- BRENNAN, Karen; RESNICK, Mitchel. **New frameworks for studying and assessing the development of computational thinking**. Trabalho apresentado na reunião anual da American Educational Research Association, Vancouver, 2012. Disponível em: <http://scratched.gse.harvard.edu/ct/files/AERA2012.pdf>. Acesso em: 15 nov. 2026.
- DENNY, Paul *et al.* **Computing education in the era of generative AI**. [*S. l.*]: arXiv, 2023. DOI: <https://doi.org/10.48550/arXiv.2306.02608>. Acesso em: 15 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 3: a autonomia é o diferencial, não a velocidade**. [*S. l.*]: efrem.io, 1 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-3-autonomy-not-speed/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Como ensinar a usar IA criticamente? Um pedido de ajuda**. [*S. l.*]: efrem.io, 13 jul. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/how-to-teach-critical-use-of-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Do que eu abro mão no low-code, e por que isso está mudando**. [*S. l.*]: efrem.io, 13 maio 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/what-i-give-up-with-low-code/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Minha apresentação na BB Digital Week sobre experimentação com GenAI**. [*S. l.*]: efrem.io, 28 out. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/my-bb-digital-week-talk-on-experimentation-with-genai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **mvp.without.dev**: how-to for MVPs without a need of developers. [*S. l.*], 2020. Repositório no GitHub. Disponível em: <https://github.com/efremfilho/mvp.without.dev>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O problema é ser uma mera proxy para a IA**. [*S. l.*]: efrem.io, 15 jul. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/the-problem-is-being-a-mere-proxy-for-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Product-Led Ops: a turma de ops que está voando com GenAI**. [*S. l.*]: efrem.io, 13 mar. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/product-led-ops-the-ops-crowd-flying-with-genai/>. Acesso em: 13 nov. 2026.
- PRATHER, James *et al.* **The widening gap**: the benefits and harms of generative AI for novice programmers. [*S. l.*]: arXiv, 2024. DOI: <https://doi.org/10.48550/arXiv.2405.17739>. Acesso em: 15 nov. 2026.
- SARKAR, Advait *et al.* **What is it like to program with artificial intelligence?** [*S. l.*]: arXiv, 2022. DOI: <https://doi.org/10.48550/arXiv.2208.06213>. Acesso em: 15 nov. 2026.
- WING, Jeannette M. Computational thinking. **Communications of the ACM**, New York, v. 49, n. 3, p. 33-35, mar. 2006. DOI: <https://doi.org/10.1145/1118178.1118215>. Acesso em: 13 nov. 2026.

*Notas:* Os trechos usados na seção de pesquisa, no original. Brennan e Resnick (2012): conceitos "sequences, loops, parallelism, events, conditionals, operators, and data"; práticas "being incremental and iterative, testing and debugging, reusing and remixing, and abstracting and modularizing". Denny *et al.* (2023, seção 4; versão final publicada em *Communications of the ACM*, 2024): "Without the skills to read, test and verify that code does what is intended, users risk becoming mere consumers of the generated content". Prather *et al.* (2024, resumo): estudo com 21 estudantes; quem teve dificuldade "thought they performed better than they did, and finished with an illusion of competence". Sarkar *et al.* (2022): "End-user programmers often lack computational thinking skills [...], such as the ability to decompose problems into subproblems [...]. However, effective use of LLMs such as Codex requires such skills."

</div>
