---
title: "Pensamento computacional: do problema ao passo a passo"
description: "Você não precisa programar. Precisa saber quebrar um problema, desenhar o fluxo e entender as camadas do que está pedindo. É isso que dá autonomia."
lang: pt-BR
ref: computational-thinking
order: 7
part: 2
permalink: /ia/pensamento-computacional/
interactive: "monte o algoritmo + camadas + loop"
piece: "o fluxo da busca ativa e um mini-PRD"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 7

Lia juntou a equipe para explicar o que queria construir. Pediu que cada pessoa descrevesse, em voz alta, como a busca ativa funciona hoje. Saíram quatro versões diferentes. Para uma, o processo começa quando a escola liga. Para outra, quando a planilha chega. Ninguém sabia dizer quantas faltas disparam o primeiro contato — "depende de quem está olhando". Se a própria equipe não descreve o trabalho do mesmo jeito, o que ela ia pedir a uma máquina?
</div>

Eu sempre fui *builder*. Mesmo formado em Ciência da Computação, passei boa parte da carreira construindo com ferramentas de pouco ou nenhum código e escrevendo, no máximo, um bocadinho de script — os repositórios antigos do meu GitHub trazem na descrição, com toda a honestidade, "meus scripts preguiçosos". O motivo é simples: eu sempre achei programar um saco. Caçar bug, decorar *framework*, lidar com a mania de cada linguagem. Eu queria o produto funcionando, não a cerimônia.

Hoje eu não programo — e interajo com código o dia inteiro. Acho ótimo. A parte chata passou para o agente. A parte que sempre me interessou ficou comigo, e é dela que este capítulo trata.

Dá para ver essa virada nos meus próprios textos. Durante anos, minha maior decisão ao escolher uma ferramenta de pouco código foi [do que eu abriria mão para ganhar pronto](/blog/pt/what-i-give-up-with-low-code/). Com agentes que programam, essa conta mudou. Hoje eu [mexo em código sem abrir o código](/blog/pt/the-problem-is-being-a-mere-proxy-for-ai/): questiono, documento as decisões e peço explicações.

## O que mudou, e o que não mudou?

**Mudou** quem lida com a sintaxe. Vírgula no lugar errado, versão de biblioteca, mensagem de erro indecifrável: isso deixou de ser barreira de entrada.

**Não mudou** que alguém precisa transformar um problema bagunçado em algo que uma máquina consiga executar. Isso tem nome: **pensamento computacional**. Jeannette Wing, que popularizou o termo, já defendia que é uma habilidade para todo mundo, não só para quem é da computação.

No Brasil isso virou diretriz. As Diretrizes Curriculares Nacionais de Administração pedem que a pessoa formada saiba:

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

## Então eu não preciso aprender a programar?

É a pergunta que sempre aparece. Escrever código, provavelmente não. **Entender cinco conceitos, sim** — porque são eles que permitem ler o que o agente fez e pedir melhor. Eu explico isso em uma hora:

1. **Variável**: uma caixinha com nome que guarda um valor. `faltas = 7`.
2. **Lista**: várias caixinhas em fila. Uma coluna de planilha é uma lista. É o vetor do [capítulo 2](/ia/como-a-maquina-aprende/).
3. **Condicional**: o `SE` das planilhas. Se você sabe usar `=SE(A1>=5;"contatar";"ok")`, você já programa.
4. **Loop**: "faça isto para cada linha". É o que a planilha não deixa muito claro e o que dá superpoder: seis linhas ou seis milhões, o código é o mesmo.
5. **API**: a porta pela qual um programa conversa com outro. Quando o agente "consulta a base oficial" ou "cria um cartão no quadro", foi por uma API.

<div data-widget="loop"></div>

Com esses cinco, a maior parte dos scripts que um agente escreve deixa de ser hieróglifo. Os tutoriais que eu uso em aula estão abertos no [meu GitHub](https://github.com/efremfilho/python_scripts/tree/main/tutorials) — e um bom exercício é abrir qualquer um deles em um assistente e pedir: "me explica o que está acontecendo aqui, linha por linha".

## Do que é feito um "sisteminha"?

Quando alguém diz "quero um sisteminha", está pedindo três coisas sem saber:

| Camada | Nome técnico | O que é | No painel da Lia |
|---|---|---|---|
| **Frente** | *frontend* | O que a pessoa vê e toca | A tela com a lista da semana e o botão "contato feito" |
| **Regras** | *backend* | O que acontece quando alguém toca | "Cinco faltas seguidas viram alerta"; "só a coordenação vê todas as escolas" |
| **Dados** | banco de dados | O que continua existindo amanhã | A tabela de frequência e o histórico de contatos |

Entre as camadas, e entre o seu sistema e o resto do mundo, ficam as **APIs**.

<div data-widget="camadas"></div>

Saber disso muda a conversa com um agente ou com uma ferramenta que gera aplicativos. "Ficou feio" é pedido de frente. "Está contando errado" é pedido de regra. "Sumiu o que eu cadastrei ontem" é problema de dados. Quem aponta a camada certa resolve em uma mensagem o que levaria dez.

A outra ideia que vem junto é **modularizar**: cada pedaço faz uma coisa só. A contagem de faltas não deveria saber nada sobre a cor do botão. Pedaços pequenos e independentes são mais fáceis de testar, de trocar — e de entregar a um agente sem medo de ele quebrar o resto. É o básico técnico que eu vejo gente de operações [pegar rápido](/blog/pt/product-led-ops-the-ops-crowd-flying-with-genai/): modularizar, cada passo fazendo uma coisa só, chave que não fica exposta e versionamento.

## Como pedir?

No mundo de produto, o documento que descreve o que vai ser construído chama-se PRD (*product requirements document*). Você não precisa de quarenta páginas. Precisa de sete linhas — e elas são, na prática, o contexto do [próximo capítulo](/ia/contexto/):

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

## O que isso tem a ver com autonomia?

Eu comecei a escrever sobre construir sem depender de time de desenvolvimento muito antes da IA generativa — anos atrás publiquei um [guia de como montar MVPs sem dev](https://github.com/efremfilho/mvp.without.dev). O que as ferramentas de pouco código prometiam, a IA generativa entregou em outra escala: hoje uma pessoa que entende de um problema consegue chegar a um produto funcionando.

Acho isso muito massa. Como escrevi quando ainda apanhava das primeiras ferramentas: [velocidade não é o diferencial, a autonomia é](/blog/pt/chapter-3-autonomy-not-speed/). Mais gente pode construir, [porque construir passou a ser em linguagem natural](/blog/pt/my-bb-digital-week-talk-on-experimentation-with-genai/).

E acho que tem uma condição. As ferramentas democratizaram o *fazer*; o *pensar* continua sendo de cada pessoa. Quem não sabe decompor um problema pede "um app de evasão escolar" e recebe um app genérico e bonito. Quem sabe, pede sete linhas — e recebe o que precisa.

Letramento em IA generativa e pensamento computacional são as duas pernas da mesma autonomia. Uma sem a outra manca.

<div class="g-box g-key" markdown="1">
**Para guardar**

- A sintaxe passou para o agente. Formular o problema continua com você.
- Decompor, reconhecer padrões, abstrair e escrever o passo a passo: quatro movimentos que servem com ou sem computador.
- Todo software tem frente, regras e dados. Apontar a camada certa é metade do pedido.
- Um bom pedido diz o que o sistema não faz e como você vai conferir.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** por que cinco faltas, e não três? Serve igual para quem estuda de dia e para quem estuda à noite? Qual passo desse fluxo eu não quero que uma máquina dê?
- **Um caminho para responder:** desenhar o fluxo com a equipe até todo mundo descrever igual; marcar cada decisão que está escondida dentro de um número; escrever as sete linhas do mini-PRD.
- **Peça nova no projeto:** o fluxo da busca ativa e o mini-PRD do painel.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade 1 (20 min) — o café em algoritmo

Cada dupla escreve o passo a passo para preparar um café coado, para alguém que nunca viu uma cozinha. Troquem as folhas com outra dupla, que deve executar **literalmente** o que está escrito (em mímica). Onde a execução trava, falta um passo, uma decisão ou uma definição.

#### Atividade 2 (60 min, em laboratório) — do mapa à planilha

Cenário: vocês assessoram uma prefeitura que quer saber onde faltam serviços públicos (ou uma rede de farmácias que quer saber onde abrir uma loja). A missão é mapear os estabelecimentos de uma região a partir de uma base aberta ou de um serviço de mapas e devolver uma planilha. Antes de abrir qualquer ferramenta, entreguem no papel: (1) o problema decomposto; (2) o fluxo em até oito passos; (3) o mini-PRD de sete linhas. Só então peçam o código a um assistente, em um caderno de código on-line. Critério de avaliação: **cada pessoa do grupo consegue explicar o que cada bloco do script faz**.

#### Perguntas de discussão

- No fluxo da Lia, quem deveria decidir o número de faltas que dispara o contato? Com base em quê?
- Dê um exemplo de permissão que mora só na "frente" de um sistema que você usa. O que pode dar errado?
- O que é mais difícil de escrever no mini-PRD do seu trabalho: o que entra, as regras ou o que o sistema **não** faz? Por quê?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- BRASIL. Ministério da Educação. Conselho Nacional de Educação. Câmara de Educação Superior. **Resolução nº 5, de 14 de outubro de 2021**. Institui as Diretrizes Curriculares Nacionais do Curso de Graduação em Administração. Brasília, DF: MEC, 2021. Disponível em: <https://portal.ufrrj.br/wp-content/uploads/2016/10/rces005_21.pdf>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 3: a autonomia é o diferencial, não a velocidade**. [*S. l.*]: efrem.io, 1 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-3-autonomy-not-speed/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Como ensinar a usar IA criticamente? Um pedido de ajuda**. [*S. l.*]: efrem.io, 13 jul. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/how-to-teach-critical-use-of-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Do que eu abro mão no low-code, e por que isso está mudando**. [*S. l.*]: efrem.io, 13 maio 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/what-i-give-up-with-low-code/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Minha apresentação na BB Digital Week sobre experimentação com GenAI**. [*S. l.*]: efrem.io, 28 out. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/my-bb-digital-week-talk-on-experimentation-with-genai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **mvp.without.dev**: how-to for MVPs without a need of developers. [*S. l.*], 2020. Repositório no GitHub. Disponível em: <https://github.com/efremfilho/mvp.without.dev>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O problema é ser uma mera proxy para a IA**. [*S. l.*]: efrem.io, 15 jul. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/the-problem-is-being-a-mere-proxy-for-ai/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Product-Led Ops: a turma de ops que está voando com GenAI**. [*S. l.*]: efrem.io, 13 mar. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/product-led-ops-the-ops-crowd-flying-with-genai/>. Acesso em: 13 nov. 2026.
- WING, Jeannette M. Computational thinking. **Communications of the ACM**, New York, v. 49, n. 3, p. 33-35, mar. 2006. DOI: <https://doi.org/10.1145/1118178.1118215>. Acesso em: 13 nov. 2026.

</div>
