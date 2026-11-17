---
layout: guia-index
guia: true
title: "IA sem mágica"
description: "Um guia vivo para aprender construindo: tentar, analisar e refazer um projeto, aprofundando IA e pensamento computacional a cada volta."
lang: pt-BR
permalink: /ia/
---

<div class="g-box g-key g-tldr" markdown="1">

## TL;DR — o que preciso para começar?

**Uma vontade, uma tentativa e disposição para ler o que aconteceu.** Eu não gosto de aprender um monte antes de aplicar. Estes conceitos são um mapa para começar; vão ganhar profundidade quando fizerem falta no projeto.

- **IA generativa:** gera texto, imagem e outras saídas a partir de padrões aprendidos e do contexto disponível. Uma resposta convincente pode estar errada. Saber pedir inclui saber ler e conferir o que voltou.
- **IA ajudando:** você conversa, explora hipóteses, pede uma análise ou constrói com agentes. Ela amplia o que você consegue fazer; você conduz o trabalho.
- **IA participando da operação:** uma parte da entrega passa a executar com IA — por exemplo, interpretar um relato e preparar o próximo atendimento. É preciso combinar quando pode agir, quando para e quem responde. Assistência e automação podem coexistir na mesma tarefa.
- **Pensamento computacional:** tornar o problema tratável: entradas, regras, etapas, saídas e conexões. Pedir um script pode deixar uma regra explícita e replicável. Repetir o resultado não prova que a regra é boa; é preciso conferir também se a entrega é usável.
- **Produto ou serviço:** resolver um problema para que pessoas possam resolver outros. A entrega pode começar com uma lista e trabalho manual. A cabeça de [*serviço como software*](/ia/casos-reais/) pergunta qual trabalho estamos entregando, além da ferramenta que o permite.

Peça, construa, use, analise. O que aconteceu muda a pergunta seguinte. **Não precisa decorar isso antes de tentar.** E uma automação construída com IA pode rodar depois sem consultar modelo nenhum.

</div>

Eu faço uma piada que dói um pouco: antes eu culpava o time por atraso, implementação ruim, experiência ruim. Agora, construindo com agentes, ficou mais difícil escapar da minha parte: [eu também sou ruim de definir o produto](/blog/pt/the-cost-of-expertise-and-the-will-to-build/). Não parei de construir por causa disso. Ganhei autonomia para fazer — e para encontrar os meus erros no que fiz.

Eu aprendo fazendo. Nunca gostei de aprender um monte de coisa antes de tentar aplicar; é o que defendo também nas minhas disciplinas. Já saí de um pedido curto para um texto grande e passei [muito mais tempo editando do que pedindo](/blog/pt/15-minutes-of-prompting-5-hours-of-editing/). Fazer revelou o que eu ainda precisava entender. É por aí que quero começar este guia.

IA não é mágica: é matemática aplicada, guiada por escolhas humanas. Entender um pouco disso ajuda a perder o medo e a enxergar a responsabilidade.

**Para que serve este guia.** Para dar autonomia a quem quer mudar alguma coisa construindo com tecnologia. Você não precisa ser da área; precisa ter alguma coisa que queira tentar. Isso pede duas coisas: **letramento em IA generativa** — saber o que a máquina faz, onde ela erra e como pedir — e **pensamento computacional** — saber transformar um problema em fluxo, em passo a passo, em camadas. A IA generativa democratizou a construção de produtos, e saber usá-la [deixou de ser opcional](/blog/pt/being-ai-savvy-is-no-longer-optional/), como um dia aconteceu com Word, Excel e PowerPoint. Ela executa muito bem o que você pedir. O que continua sendo seu é saber pedir, saber ler o que voltou e responder pelo resultado.

<div class="g-box g-key" markdown="1">

## Que vontade dá para pôr à prova agora?

Pode ser um produto, um serviço, uma rotina ou uma coisa que você quer ver existir. Comece com uma vontade: "quero tentar isto". A hipótese pode ganhar forma na tentativa. Se ajudar, escreva: "acho que isto vai mudar aquilo". O que faria você rever essa aposta?

Se ainda não tem um projeto, pegue uma lista de pendências. A primeira entrega pode ser **um quadro de próximos passos que você consiga usar e modificar**. Um pedido possível a um agente que constrói aplicativos:

> Quero acompanhar os próximos passos de um projeto. Crie uma página simples com tarefa, situação e próximo passo. Preciso filtrar as pendências e mudar a situação de uma tarefa. Use exemplos inventados de contatos com escolas. Quero abrir e experimentar, sem criar contas. Me explique como abrir e onde as mudanças ficam guardadas. Por enquanto, só eu vou usar.

Quando voltar, use: marque uma tarefa como concluída, filtre o que falta, recarregue a página. A mudança ficou? Se desapareceu, você encontrou uma diferença entre mostrar algo na tela e guardar o que aconteceu. Peça ao agente que explique e ajuste. Depois mude uma coisa que faria diferença para você. Confira de novo.

Se a ferramenta só devolver texto, peça o arquivo e as instruções para abrir. Se emperrar, leve a mensagem de erro de volta ao agente. Se a sua planilha já resolve, compare: o que a nova versão melhora, piora ou só muda de lugar?

Guarde a tentativa e uma nota curta: **o que eu esperava, o que aconteceu e qual pergunta ficou**. Pode ser num arquivo ou num caderno. Isso já dá assunto para a próxima volta.

</div>

## O que você acabou de pôr em movimento?

O mínimo para começar cabe na própria tentativa. **Usar IA** foi explicar o que queria, ler o que voltou e conferir no uso. Uma explicação convincente ainda precisa bater com o que aconteceu; o [capítulo 3](/ia/por-dentro-do-modelo/) ajuda a investigar por quê.

**Pensar computacionalmente** começa quando você separa o que entra, o que deve acontecer e o que sai. No quadro: entram tarefas e situações; uma regra escolhe as pendentes; a tela mostra o resultado. Onde a mudança fica guardada? Quem precisa receber essa saída? Funções, condições, repetições, camadas e conexões com outros serviços ganham nome no [capítulo 7](/ia/pensamento-computacional/), a partir de perguntas assim.

**Replicar** é conseguir executar de novo um procedimento e conferir o resultado nas mesmas condições. No [capítulo 10](/ia/pedir-o-script/), a regra vira script que se pode guardar e revisar. **Operar** começa quando você usa a entrega e observa o que acontece — mesmo que parte do serviço seja manual. O [capítulo 13](/ia/do-pedido-ao-aplicativo/) volta a isso. Você pode ir lá agora.

## Como voltar com uma pergunta melhor?

<!-- guia-ciclo -->

**Como está organizado.** Os três atos acompanham tentativas que passam a ter outras exigências: descobrir se algo ajuda; construir junto sem perder o que aprendemos; lidar com outras pessoas dependendo da entrega. Em todos há pergunta, construção, uso e análise. Os princípios de IA e de pensamento computacional voltam com mais profundidade conforme fazem falta.

Operar também produz novas perguntas. Manter o que funciona e experimentar uma mudança podem acontecer juntos. A próxima volta pode levar a melhorar a solução, mudar a hipótese, manter uma rotina ou encerrar o projeto. Continuar mexendo, sozinho, não prova que você aprendeu.

Você pode acompanhar a história da Lia em sequência ou puxar o fio do seu próprio projeto:

| O que apareceu na sua tentativa? | Por onde investigar? |
|---|---|
| A resposta convenceu, mas não sei de onde veio | [Modelo de linguagem](/ia/por-dentro-do-modelo/) e [busca nas fontes](/ia/buscar-antes-de-responder/) |
| Funciona uma vez; quero repetir e conferir | [Procedimento e script](/ia/pedir-o-script/) |
| Cada mudança perde uma decisão anterior | [Contexto](/ia/contexto/) e [memória do projeto](/ia/repositorio-e-memoria/) |
| Já quero pôr na mão de outra pessoa | [Dados](/ia/dados-e-privacidade/) e [acesso dos agentes](/ia/agentes-com-redea/) |

**Quem é a Lia.** Uma personagem inventada com um problema real. Lia, Bia e Caio trabalham em uma organização da sociedade civil que faz busca ativa: ir atrás de adolescentes que pararam de ir à escola. No Brasil, milhões de jovens não concluíram o ensino médio, e o motivo mais citado por quem saiu é precisar trabalhar (IBGE, 2026). Do outro lado existe gente indo atrás, e funciona: a busca ativa já ajudou centenas de milhares de crianças e adolescentes a voltar para a sala de aula (UNICEF, 2025). Ninguém ali é de tecnologia. Ouviram que "a IA resolve" e decidiram construir: discutem a estratégia, dividem o trabalho, cada pessoa implementa com os seus agentes, e uma revisa o que a outra fez. Em volta estão Iara, que coordena a parceria pela secretaria de educação, e Aída, da área de tecnologia. Maia, coordenadora de comunicação de uma organização parceira, participa de algumas reuniões. Os pedidos dela também entram na fila — nem sempre acompanhados de uma entrega.

**O guia não responde por ela.** A jornada é contada como um caso, daqueles em que as coisas dão errado: há prazo, há briga e há mais de um caminho defensável. Em cada capítulo há uma **cena**, que termina em uma pergunta; uma **provocação**, ligada ao experimento do capítulo; e um **diário de bordo**, com o que ficou em disputa, os caminhos que estavam na mesa — cada um defendido por alguém — e o que o time fez, por enquanto. Não há gabarito. Gosto da construção de [histórias de trabalho com prazo e conflitos entre áreas](https://reader.itrevolution.com/library/phoenix-project): uma decisão muda as condições da próxima. Aqui, a rotina continua depois da última página; nenhuma apresentação encerra o projeto. Às vezes o time escolhe mal, e paga por isso alguns capítulos depois. As respostas dependem da rede em que essas pessoas trabalham — e as suas, da sua realidade. O que o guia oferece é o jeito de perguntar e o caminho para conferir.

**Como usar.** Quase todo capítulo tem um experimento para mexer (procure o 🧪), termina com uma caixa **Para levar para a aula** — atividade e perguntas de discussão, para usar à vontade — e fecha com as referências. Quem prefere papel tem a [versão livro](/ia/livro/), pronta para imprimir.

Cada capítulo retoma os conceitos em **O que vale guardar desta volta?**, com uma pergunta para relacioná-los. Depois vem **E no seu projeto?**: uma pergunta e uma tentativa para levar ao que você está construindo. Volte às suas notas: o que mudou, o que você decidiu e o que ainda quer investigar? A história da Lia é uma companhia para essa investigação; o seu projeto pode pedir outro caminho.

Este material nasceu das gravações das minhas aulas na FGV EPPG, em Brasília, de workshops para pessoas de produto, de conversas em que explico meu processo e do que venho escrevendo desde 2025. O texto foi gerado com IA a partir desse material e editado por mim. É um guia vivo: eu volto, corrijo e aumento.

**Um alerta.** Em vários pontos eu saio da minha área: direito, estatística, design, educação. Onde isso acontece, eu aviso e cito quem estuda o assunto. Achou um erro? Me avise, que eu corrijo.

## Quer trazer seu projeto para a conversa?

[Me conte o que está construindo](/cv/): o que queria tentar, o que aconteceu e qual pergunta ficou. Projeto emperrado também dá conversa. Se uma passagem deste guia ajudou, confundiu ou deixou de fora alguma coisa importante, quero saber.

<div class="g-fontes" markdown="1">

#### Referências

- IBGE. **Pesquisa Nacional por Amostra de Domicílios Contínua**: educação 2025. Rio de Janeiro: IBGE, 2026. ISBN 978-85-240-4713-8. Disponível em: <https://biblioteca.ibge.gov.br/visualizacao/livros/liv102286_informativo.pdf>. Acesso em: 13 nov. 2026.
- KIM, Gene; BEHR, Kevin; SPAFFORD, George. **The Phoenix Project**: a novel about IT, DevOps, and helping your business win. 4. ed. Portland: IT Revolution, 2024. Disponível em: <https://reader.itrevolution.com/library/phoenix-project>. Acesso em: 16 nov. 2026.
- MARANHÃO FILHO, Éfrem. **15 minutos de prompt, 5 horas editando**. [*S. l.*]: efrem.io, 23 set. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/15-minutes-of-prompting-5-hours-of-editing/>. Acesso em: 17 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Com o custo da expertise caindo, o que conta é a vontade de fazer**. [*S. l.*]: efrem.io, 13 nov. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/the-cost-of-expertise-and-the-will-to-build/>. Acesso em: 17 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Ser AI savvy não é mais opção, é obrigatório**. [*S. l.*]: efrem.io, 19 jun. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/being-ai-savvy-is-no-longer-optional/>. Acesso em: 17 nov. 2026.
- UNICEF. **Com ajuda da Busca Ativa Escolar, 300 mil crianças e adolescentes voltaram à escola no Brasil**. Brasília, DF, 28 jul. 2025. Disponível em: <https://www.unicef.org/brazil/comunicados-de-imprensa/com-ajuda-da-busca-ativa-escolar-300-mil-criancas-e-adolescentes-voltaram-a-escola-no-brasil>. Acesso em: 13 nov. 2026.

*Notas:* Lia é uma personagem inventada. Os dados do problema que ela enfrenta são reais: em 2025, 7,7 milhões de jovens de 14 a 29 anos não tinham concluído o ensino médio, e 43% apontaram a necessidade de trabalhar (IBGE, 2026); a Busca Ativa Escolar ajudou mais de 300 mil crianças e adolescentes a voltar à escola entre 2017 e 2025 (UNICEF, 2025).

A referência narrativa escolhida pelo autor é The Phoenix Project (Kim; Behr; Spafford, 2024): pressão de prazo, trabalho entre áreas e consequências de decisões. Lia e o time são personagens próprios deste guia; não representam um caso real nem reproduzem o enredo do romance. A jornada permanece aberta depois do último capítulo.

</div>
