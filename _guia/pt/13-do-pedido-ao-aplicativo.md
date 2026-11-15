---
title: "Do pedido ao aplicativo"
description: "Uma descrição vira software funcionando em minutos. Se construir deixou de ser a parte difícil, como eu sei que estou construindo a coisa certa?"
lang: pt-BR
ref: app-builders
order: 13
part: 3
permalink: /ia/do-pedido-ao-aplicativo/
interactive: "o que acontece quando você não diz?"
piece: "a primeira versão na mão da equipe, sem o nome de ninguém"
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 13

O script contava as faltas. Mas a lista ficava num computador, e quem faz as visitas passa o dia na rua, com o celular na mão. Essa era a parte da Bia. Ela descreveu em uma linha o que queria e, dois minutos depois, havia na tela um aplicativo bonito — com nome completo, endereço e um selo vermelho ao lado de cada estudante. Logo ela. A regra nº 1 estava escrita no repositório; o gerador nunca tinha passado por lá. De onde veio o selo?
</div>

Existe uma família de ferramentas que recebe uma descrição em linguagem natural e devolve um aplicativo funcionando: tela, regras, banco de dados e um endereço para abrir no celular. Eu chamo de geradores de aplicativos; os nomes comerciais mudam todo semestre e não importam aqui.

Eu tinha ranço delas. Anos atrás usei uma geração de ferramentas que prometia escrever o código por mim e devolvia uma maçaroca que ninguém conseguia reaproveitar. Quando as novas apareceram, fiz pouco de quem usava. Paguei a língua.

## O que um gerador de aplicativos faz por mim?

Ele toma, no meu lugar, centenas de decisões de engenharia: que linguagem usar, como organizar os arquivos, onde guardar os dados, como publicar. E toma melhor do que eu tomaria. Eu sei escrever script; nunca fui bom de framework, de infraestrutura, de configuração de segurança. Então deixo decidir. Quando ele propõe reorganizar o código que acabou de escrever, deixo também: é sinal de que está preocupado com a qualidade. Nem sempre dá certo. Quase sempre dá. É a expertise barata de que fala o [capítulo 17](/ia/generalista-responsavel/), trabalhando a meu favor.

Isso não me transformou em pessoa desenvolvedora. Passei meses [apanhando e aprendendo](/blog/pt/chapter-5-a-product-person-can-build-with-lovable/) com uma dessas ferramentas e a conclusão foi outra: **eu virei uma pessoa de produto que sabe pedir muito bem para um time de engenharia. O time, no caso, é um agente.**

Dá para qualquer pessoa? Ficou mais democrático construir. Não ficou simples. [A limitação dessas ferramentas é uma vantagem](/blog/pt/non-technical-people-are-better-off-in-lovable/) para quem não é da área: eu não quero decidir arquitetura, quero que isso esteja decidido, e bem. Mas quem entende o mínimo do [capítulo 7](/ia/pensamento-computacional/) — o que é uma função, onde mora o dado, o que uma camada pede à outra — pede melhor e percebe mais cedo quando algo saiu torto.

E repare no verbo: ele *decide*. O que acontece com as decisões que não são de engenharia?

## O que acontece quando eu não digo?

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** no experimento, desmarque "Regras" e "O que NÃO faz". Quem colocou aquele selo e aquele botão no aplicativo — o gerador, ou quem deixou de dizer?
</div>

<div data-widget="pedido"></div>

O gerador nunca deixa um espaço em branco. O que eu não especifico, ele preenche com o que é mais comum em aplicativos parecidos. Às vezes o mais comum serve. Às vezes o mais comum é um selo de "alto risco" ao lado do nome de uma adolescente.

Daí a pergunta que vale fazer antes de cada pedido: *o que aqui eu acho tão óbvio que nem escrevi?*

## Como eu peço?

Do jeito que eu pediria a um time de engenharia. "Muda o botão" é um pedido. "Muda o botão, porque quem usa leitor de tela não consegue encontrá-lo" é outro: com o porquê, o time acerta também o que eu não pensei em pedir. (Às vezes eu mando só um "muda a cor". Tudo bem.)

O que aprendi apanhando:

- **O primeiro pedido é o que mais pesa.** Eu não começo no gerador. Começo debatendo com um assistente: o problema, quem usa, o que entra, o que sai. Saio de lá com um documento de algumas páginas, reviso e só então entrego. Já aconteceu de acertar de primeira.
- **Pedido grande deixou de ser problema.** Os modelos aguentam. O que continua sendo trabalho meu é organizar a solução: como eu fatio isso em partes em que eu e os agentes consigamos trabalhar?
- **Depois, pedidos curtos e com endereço.** "Ficou feio", "está contando errado" e "sumiu o que cadastrei" vão para camadas diferentes.
- **Mostre.** Um desenho da tela, mesmo feito à mão, vale mais que três parágrafos.
- **Leia o que ele diz que fez.** Quando algo quebra, a explicação costuma estar ali.
- **Não chegou depois de algumas voltas? Recomece.** Leve o que aprendeu para um pedido novo. Ainda sai mais barato do que consertar.

Isso é treino, não tem outro jeito. Se o sistema do seu trabalho não pode falhar, treine em projeto paralelo: uma ferramenta interna, algo só seu.

Um colega professor acompanhava quase oitenta estudantes, uma planilha por estudante. Mostrei um caminho, e ele construiu o sistema dele, sozinho. Gastou umas cinco vezes mais crédito do que eu tinha gastado — e isso é o preço de aprender, não um defeito. O mérito é todo dele. O que fez diferença ali não foi o pedido perfeito: foi insistir até funcionar. Vontade de fazer pesa mais do que acertar de primeira.

Quem fundou uma dessas ferramentas [conta](https://www.youtube.com/watch?v=-QsTmu2CqhA) que uma pessoa usuária a descreveu como "um supergênio de cinco anos, com doutorado e TDAH". É a melhor definição que eu conheço, e vale mais ainda quando troco de agente: ora ele mergulha fundo demais numa coisa, ora empaca, ora só está distraído. Já pedi para mexer no menu, e a única coisa que ele fez foi não mexer no menu. A ressalva é que isso é cada vez menos verdade: os modelos inventam menos e estão mais especialistas. Mas ajuda a pedir com paciência.

## O que mudou, afinal: a velocidade?

Não. Velocidade sempre deu para ter — numa maratona de fim de semana, numa ferramenta sem código — e o preço era a qualidade. A velocidade que me interessa é outra: fazer e não travar. Por isso continuo assinando o que escrevi quando ainda apanhava: [o diferencial não é a velocidade, é a autonomia](/blog/pt/chapter-3-autonomy-not-speed/).

## Estou construindo a coisa certa?

Quase todo mundo que pede um sistema pede um painel. Numa empresa em que trabalhei, pediam tanto que eu bati o pé: não ia fazer, porque ninguém ia usar. O que as pessoas queriam, olhando de perto, era saber na hora quando entrava uma venda — o painel era para ficar atualizando a página e ver o número mudar. Montei um robô que mandava uma mensagem a cada venda. Levou menos de meia hora, com ferramenta pronta, e rodou uns dois anos e meio sem ninguém mexer.

De tanto insistirem, acabei fazendo o painel. Quase ninguém abria. Quem abria ia atrás de um botão que tínhamos colocado lá dentro: o de sacar o dinheiro.

Guardo duas coisas dessa história. A primeira: **o que a pessoa pede é uma solução; o que ela tem é um problema** — e os dois raramente coincidem. A segunda: eu só descobri porque a coisa estava em uso.

Por isso a ordem que eu sigo é **primeiro a coisa certa, depois da forma certa**. A primeira versão pode ser feia, ter passo feito à mão, custar mais do que deveria. Quem sabe programar olha e diz que ficou uma porcaria. Às vezes ficou — e serviu para descobrir o que eu precisava descobrir. Quando a coisa se prova, aquela porcaria vira dívida, e dívida é um ótimo motivo para refazer direito.

**Se eu não operei, eu não fiz nada.** E operar não é publicar: é pôr na mão de alguém e olhar. Num produto antigo meu, a tela de resgatar um prêmio tinha um único botão colorido. Para nós era óbvio. As pessoas chegavam ali e não sabiam o que fazer; teve gente dizendo que era golpe. É muito diferente o que está na nossa cabeça e o produto que funciona.

O que eu quero conseguir responder sobre qualquer primeira versão: estão usando? Estão satisfeitas? Voltariam — ou pagariam — por isso? Se eu não consigo responder, não aprendi nada.

## Testo com dado inventado ou com gente de verdade?

Depende, e a resposta começa pelo contexto. Eu gosto de testar em produção: ponho no ar, vejo o que acontece e, se quebrar, volto atrás. Só que trabalhei quase sempre com sistemas usados por empresas, com pouca gente por vez, em que quebrar e desfazer era barato. Raras vezes com milhões de pessoas do outro lado.

Então, em vez de regra, perguntas. Se der errado, quem sente? Dá para desfazer? De quem são os dados? Quanta gente depende disso hoje?

Para o time da Lia, as respostas mudam o plano. Os dados são de adolescentes, e um endereço que vazou não volta. Dá para pôr a primeira versão na mão de quem visita já na primeira semana — é assim que se aprende —, mas com códigos no lugar dos nomes e sem endereço na tela. Não precisa ser um processo de manual. Precisa caber no contexto.

## Se o código não é a parte difícil, qual é?

Tudo o que vem depois de "funcionou na minha tela". Onde os dados ficam guardados? Quem consegue acessá-los? O que acontece quando o serviço sai do ar? Quem percebe se a contagem começar a errar? Como escrevi uma vez, [o código não é a parte difícil](/blog/pt/code-is-not-the-hard-part/): difícil é manter o software de pé e seguro.

Muita coisa que eu construo é só para mim. Gosto de construir como quem faz arte: não precisa ter função, precisa existir no mundo. Para isso, estamos numa fase parecida com a dos primeiros sites feitos em casa — [e isso é bom](/blog/pt/the-webmaster-era-of-vibe-coding/).

O limite aparece quando entra a segunda pessoa. Aí voltam, de uma vez, os problemas de sempre do software: quem mudou o quê, qual é a versão que vale, o que fazer quando duas mudanças brigam. É o assunto do [capítulo 11](/ia/repositorio-e-memoria/).

## Quando eu chamo alguém?

Cada vez menos eu aprovo, passo a passo, o que o agente faz. Cada vez mais eu planejo e corrijo a rota. Uma coisa não mudou: posso não ser mais quem escreve, mas continuo sendo quem revisa — e, se sair algo ruim, a responsabilidade é minha. Não é do agente nem do gerador.

É por isso que eu chamo gente. As perguntas que me fazem chamar:

1. Tem dado pessoal de outras pessoas?
2. Mais alguém vai depender disso para trabalhar?
3. Se sair do ar por um dia, alguém é prejudicado?
4. Mexe com dinheiro, ou decide algo sobre a vida de alguém?

E chamo cedo. Numa empresa em que trabalhei, levamos anos para enxergar um padrão: quando a área de tecnologia da organização cliente participava da escolha, o produto durava. Quando ficava de fora, tratava aquilo como sistema clandestino — e a primeira providência era tirar do ar. Esconder da área de tecnologia o que você construiu é o caminho mais curto para perder o que você construiu.

E eu já fui o trator dessa história. Num emprego anterior, o meu time de produto passou a fazer com IA o que outra área demorava a entregar: a gente combinava um prazo e, vencido o prazo, gerava o material e punha no ar. A intenção era mostrar, na prática, que se especializar tinha ficado mais fácil — e estava combinado com a liderança. Serviu para dar a partida. Não foi a melhor maneira. Faltou a empatia que quem lidera deveria ter com as outras áreas, e eu prejudiquei o relacionamento por um bom tempo. No fim, entregamos os processos prontos para a própria área usar e editar, e ficou ótimo. O caminho até lá foi turbulento.

## Um caminho

1. Debata o problema com um assistente até sair um documento de algumas páginas. As sete linhas do mini-PRD ([capítulo 7](/ia/pensamento-computacional/)) são o esqueleto.
2. Gere, olhe e pergunte ao gerador o que ele presumiu.
3. Ponha na mão de alguém e observe, sem explicar. Decida, pelo contexto, com que dados.
4. Responda: usam? Estão satisfeitas? Voltam?
5. Guarde o projeto em um repositório ([capítulo 11](/ia/repositorio-e-memoria/)).
6. Deu certo e ficou feio? Agora refaça direito — e chame quem entende.

<div class="g-box g-key" markdown="1">
**Para guardar**

- O gerador decide a engenharia, e decide bem. As decisões de produto continuam minhas — e, se eu não tomar, ele toma.
- O que eu não digo é preenchido com o mais comum.
- Primeiro a coisa certa; depois, da forma certa. E só operando eu descubro qual é a coisa certa.
- Posso não ser quem escreve. Continuo sendo quem responde pelo resultado.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** o que no pedido parecia óbvio e ninguém escreveu? Quem visita quer mesmo um painel, ou só quer saber, de manhã, quem procurar hoje?
- **Caminhos na mesa:**
  - *Iara:* o painel, com gráfico, para mostrar na secretaria.
  - *Bia:* nada de painel: uma mensagem de manhã, com a lista do dia.
  - *Caio:* os dois. "É rápido."
- **O que o time fez, por enquanto:** gerou de novo, agora com as regras no pedido; pôs a primeira versão na mão de duas pessoas que visitam, com códigos no lugar dos nomes; e sentou ao lado para olhar, sem explicar.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (50 min, em laboratório) — o pedido de outra pessoa

Cada dupla escreve o pedido de uma solução pequena para um problema real. As duplas **trocam** os pedidos e geram o aplicativo a partir do texto recebido, sem conversar com quem escreveu. Ao fim, quem escreveu avalia o resultado e lista tudo o que o gerador teve de adivinhar.

#### Atividade (15 min) — olhar sem explicar

Uma pessoa de outra dupla recebe o aplicativo e uma tarefa ("cadastre uma visita"). Quem construiu só observa: não explica, não aponta, não corrige. Anota onde a pessoa travou.

#### Perguntas de discussão

- O que o gerador adivinhou certo? Por que você acha que acertou?
- O que estava escrito no pedido era um problema, ou já era uma solução?
- Onde a pessoa que testou travou? Você teria previsto?
- O aplicativo poderia ser usado amanhã por uma organização de verdade? Com que dados? O que mudaria a sua resposta?
- Onde termina "eu consigo fazer" e começa "eu preciso de alguém"?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- MARANHÃO FILHO, Éfrem. **A era dos webmasters do vibe coding**. [*S. l.*]: efrem.io, 27 nov. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/the-webmaster-era-of-vibe-coding/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 3: a autonomia é o diferencial, não a velocidade**. [*S. l.*]: efrem.io, 1 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-3-autonomy-not-speed/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Capítulo 5: uma pessoa de produto consegue buildar com o Lovable**. [*S. l.*]: efrem.io, 22 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/chapter-5-a-product-person-can-build-with-lovable/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O código não é a parte difícil**. [*S. l.*]: efrem.io, 26 mar. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/code-is-not-the-hard-part/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Pessoas não técnicas estão melhor no Lovable do que em ferramenta de dev**. [*S. l.*]: efrem.io, 25 abr. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/non-technical-people-are-better-off-in-lovable/>. Acesso em: 13 nov. 2026.
- RAUCH, Guillermo. **Everyone's an engineer now**: inside v0's mission to create 100 million builders. Entrevista a Lenny Rachitsky. [*S. l.*]: Lenny's Podcast, 2025. 1 vídeo (88 min). Disponível em: <https://www.youtube.com/watch?v=-QsTmu2CqhA>. Acesso em: 15 nov. 2026.

*Notas:* A frase citada é contada por Guillermo Rauch, que a atribui a uma pessoa usuária da ferramenta dele (minutos 0 e 43 da entrevista): "v0 is a super genius five-year-old PhD with ADHD". Ela descreve aquela ferramenta, não a IA em geral; a generalização é minha. Os casos do capítulo são da minha rotina de trabalho; nomes de pessoas, clientes e empresas foram omitidos.

</div>
