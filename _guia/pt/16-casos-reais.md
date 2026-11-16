---
title: "O serviço funcionou — para quem?"
subtitle: "Resultados, hipóteses e serviço como software."
description: "A lista funciona, mas o uso muda a pergunta. Que trabalho o serviço entrega, quem fica com as exceções e o que vale construir ou contratar?"
lang: pt-BR
ref: cases
order: 16
part: 3
permalink: /ia/casos-reais/
piece: "a promessa do serviço revista à luz do uso"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 16

Volta às aulas. Depois do teste com a rotina existente, a versão com acesso pelas escolas está no ar: lista do dia para quem visita, painel agregado para Iara. Bia quase não abre o painel; Iara o usa para defender a continuidade da parceria. Não usar a mesma tela era sinal de fracasso?

Com os dados históricos reunidos, Lia pediu ao agente um mapa das faltas por dia e turno. Caio revisou a contagem. A mancha mais escura era sexta-feira à noite, parte do padrão que ele tinha visto lá atrás. Achava que era trabalho. Bia lembrou o ônibus e queria investigar primeiro numa escola; Lia queria ouvir todas antes de escolher uma. Numa conversa na escola, Ian, estudante do noturno, trouxe outra pergunta: "se eu já voltei e continuo na lista, com quem falo?". A contagem conferida por Caio não resolvia isso sozinha. Enquanto discutiam a causa, a escola precisava organizar a próxima semana. O que dava para fazer sem transformar a primeira hipótese em explicação oficial?
</div>

Uma lista emitida, uma visita feita e uma estudante de volta à escola são acontecimentos diferentes. O sistema pode registrar perfeitamente o primeiro sem produzir os outros. E pode ajudar no segundo sem conseguir resolver o motivo da ausência. O pedido de Ian mostra outro limite: atualizar a conta não garante que alguém consiga corrigir a própria situação.

Eu aprendi essa diferença apanhando, muito antes da IA generativa. Mais de dez anos atrás, ajudei a construir um aplicativo de segurança pública que tinha um botão de emergência para quando a pessoa estivesse sendo assaltada. Na apresentação, parecia ótimo. Na rua, quase ninguém usou — porque ninguém tira o celular do bolso durante um assalto, a não ser para entregar o celular. Até hoje eu caio às vezes na ilusão de achar que sei o que a outra pessoa vai fazer no mundo real só porque o botão funciona na minha tela.

## Que trabalho prometemos entregar?

Para mim, produto existe para resolver um problema e permitir que humanos resolvam outros. A lista libera Bia de remontar contatos; o tempo que aparece pode ir para conversar com uma família. Mas, se Bia passa a tarde corrigindo a lista, o trabalho só mudou de lugar. O que ela deixou de precisar fazer? O que apareceu no lugar?

Essa é a cabeça de **serviço como software**: pensar no trabalho entregue, em quem depende dele e em como manter a entrega. Uma interface pode ser parte disso. Não é a promessa inteira. "Organizar os próximos contatos e registrar o retorno" é uma promessa diferente de "prever abandono". A primeira também pode falhar, mas dá ao time algo concreto para observar e discutir.

[Um artigo da consultoria Thoughtworks](https://www.thoughtworks.com/en-br/insights/blog/generative-ai/service-as-software-a-new-economic-model-for-age-of-ai-agents) apresenta *service-as-software* como uma mudança de vender ferramentas para entregar resultados. [Uma tese de investimento da Sequoia](https://sequoiacap.com/article/services-the-new-software/) distingue vender a ferramenta de vender o trabalho. Ambas são partes interessadas nesse mercado. São propostas para pensar negócios, não demonstrações de que toda atividade deva ser automatizada ou de que um modelo de cobrança vá substituir todos os outros.

Aplicando essa lente ao caso: Iara pode querer contratar suporte, mesmo usando o que o time construiu. Bia pode querer assistência para preparar uma conversa e autonomia para conduzi-la. Caio pode querer automatizar a atualização de uma lista, sem entregar ao modelo a decisão sobre quem merece atendimento. São escolhas de serviço, de tecnologia e de responsabilidade ao mesmo tempo.

## Quem faz o quê quando chega um caso novo?

Imagine três propostas para a mesma escola:

| Proposta | O que a escola recebe? | Que trabalho continua existindo? |
|---|---|---|
| Assistir quem atende | Uma análise e um rascunho para a pessoa decidir | Conferir o caso, escolher e realizar o contato |
| Automatizar uma parte definida | Uma lista atualizada e avisos sob condições combinadas | Manter dados e regras; perceber e tratar exceções |
| Assumir um serviço acompanhado | Contatos organizados, retorno registrado e alguém a quem recorrer | Coordenar software, pessoas, suporte e correções |

A terceira proposta pode usar as outras duas. Não é uma escada em que a última é sempre melhor. Para uma escola, receber a lista basta; para outra, falta alguém que consiga usá-la. Para o time, assumir mais trabalho pode valer a pena — ou exceder a capacidade que tem.

No fluxo atual, a contagem é código; a leitura de relatos pode usar IA; a conversa com a família continua com gente. A IA também ajuda o time a investigar e melhorar essas partes. **Pensamento computacional permite separar e conectar; letramento em IA ajuda a escolher o que delegar e a ler o que voltou.** Se trocar o modelo, o que precisaria continuar funcionando?

## O que esse número prova?

Eu tenho pavor de número que sobe no painel enquanto a vida continua igual. Numa empresa em que trabalhei, nossa meta era crescer o número de contas cadastradas. Ligamos uma automação que convidava todo o diretório de cada empresa cliente: entravam dez mil pessoas novas por mês. A gente bateu todas as metas — e o uso real continuou exatamente o mesmo. Não ajudou em nada a empresa. Era métrica de vaidade pura.

No caso da Lia, Caio consegue reproduzir o mapa de faltas. Isso responde como a conta foi feita. Não decide se a mancha de sexta-feira é trabalho, transporte, registro atrasado ou uma combinação. Bia conhece o ônibus; esse conhecimento é uma pista, não uma amostra de toda a rede. Lia quer ouvir todas as escolas; a abrangência custa tempo de quem espera.

O time pode comparar o que esperava com o que aconteceu: quem recebeu contato, quem ficou esperando, quais registros precisaram de correção. Pode observar se o caminho para contestar a lista funciona. Esses sinais ajudam a rever a entrega. Não bastam, sozinhos, para atribuir ao software uma mudança na permanência escolar.

Uma pergunta para o agente poderia ser: "proponha explicações alternativas para esse padrão e diga o que observaríamos em cada uma". Outra pessoa do time revisaria as sugestões e escolheria o que conferir com as escolas. A resposta abre investigação; não vira diagnóstico porque veio acompanhada de um gráfico bonito.

## Assinar ou construir?

Eu disse numa conversa que não assinava mais software como serviço. Um amigo [me mostrou que era mentira](/blog/pt/i-only-pay-for-saas-i-see-value-in/). Eu continuava pagando por vários serviços. A frase que resistiu à conversa foi menos espetacular: pago pelo que vejo valor; o que não entrega esse valor e consigo substituir, construo com agentes.

Antes disso, eu já [vinha trocando a procura por um aplicativo por um pedido de construção](/blog/pt/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/): um conversor, uma planilha, um formulário. A autonomia continua. A correção é que gostar de construir não torna construir a melhor decisão em toda situação.

Também [escrevi que código não é a parte difícil](/blog/pt/code-is-not-the-hard-part/). Fazer algo para mim é diferente de manter algo de que outras pessoas dependem. Na comparação, vale colocar quem cuida quando quebra, o que a ferramenta já entrega pronto e o tempo que eu quero dedicar a isso. O aplicativo funcionar hoje não responde sozinho se eu quero mantê-lo amanhã.

## O que continua enquanto experimentamos?

A lista de amanhã precisa sair enquanto o time investiga a de ontem. Na escola sem conexão, pode haver um procedimento temporário; ele também precisa de acesso adequado, atualização e alguém responsável. Suporte não é uma tarefa que fica para quando o produto estiver pronto. Faz parte do que foi prometido.

A próxima volta pode mudar a hipótese, a interface, a divisão do trabalho ou o que vale contratar. Pode preservar uma rotina que está funcionando. Aprender fazendo também é descobrir qual mudança pode esperar. Que problema as pessoas agora conseguem enfrentar — e qual trabalho o nosso produto acabou de criar?

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** uma escola pede uma lista; outra pede que alguém resolva os contatos. O que muda no trabalho, no custo e na responsabilidade de cada proposta?
</div>


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Investigar em uma escola pode ajudar logo e deixar outras esperando. Ouvir toda a rede amplia a visão, mas também adia uma ação local. Qual custo o time aceita?
- **Caminhos na mesa:**
  - *Caio:* levar o mapa, identificado como hipótese, à secretaria e perguntar sobre os horários de trabalho. Abre uma conversa maior, mas o gráfico pode circular sem a ressalva.
  - *Bia:* começar pela escola que relatou o corte do ônibus e conferir os horários com as famílias. Tem uma pista concreta, mas pode dar peso demais ao caso que ela conhece.
  - *Lia:* ouvir as escolas antes de escolher onde agir. Reduz a dependência de uma primeira interpretação, mas consome tempo e prolonga a espera.
- **O que o time fez, por enquanto:** começou pela investigação proposta por Bia, sem declarar uma causa. Caio guardou a hipótese do trabalho e preparou a comparação; Lia marcou a devolutiva com a escola. As demais ainda esperavam. O painel ajudava Iara a manter a parceria, mas não respondia por essa escolha de prioridade.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Entrega e resultado:** emitir uma lista, realizar contato e resolver uma dificuldade são acontecimentos diferentes; um não comprova o outro.
- **Serviço como software:** pensar no trabalho entregue exige combinar software, pessoas e tratamento de exceções. Assistência e automação podem coexistir.
- **Construir ou contratar:** autonomia entra na conta junto com manutenção, suporte e capacidade de conferir o que você não domina.

Se a contagem está certa e Ian continua sem conseguir corrigir seu registro, que parte da promessa o serviço ainda não cumpriu?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Volte à hipótese ou vontade que anotou no começo. Que uso observado a reforçou ou contrariou? Escolha uma pergunta que só apareceu depois de operar e compare caminhos: ajustar a entrega, mudar a aposta ou investigar mais antes de mexer. Quem ganha e quem espera em cada caminho?

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (30 min) — qual é a promessa?

Escolha um problema do seu projeto. Descreva uma entrega que ajude alguém a executar o trabalho e outra que assuma parte desse trabalho. Para cada proposta, indique o que a pessoa recebe, o que ainda faz, como percebe que deu errado e a quem recorre. Em trios, defendam propostas diferentes, incluindo o custo de cada escolha. Depois troquem de posição.

#### Perguntas de discussão

- Que melhora justificaria manter a lista, mesmo sem um aplicativo novo?
- Se a meta fosse quantidade de contatos, o que o time poderia deixar de enxergar?
- Que mudança na sua realidade faria contratar ser mais interessante do que construir — ou o contrário?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- BEK, Julien. **Services**: the new software. [*S. l.*]: Sequoia Capital, 5 mar. 2026. Disponível em: <https://sequoiacap.com/article/services-the-new-software/>. Acesso em: 16 nov. 2026.
- KAMELMAN, Matt. **Service-as-software**: a new economic model for the age of AI agents. [*S. l.*]: Thoughtworks, 3 dez. 2025. Disponível em: <https://www.thoughtworks.com/en-br/insights/blog/generative-ai/service-as-software-a-new-economic-model-for-age-of-ai-agents>. Acesso em: 16 nov. 2026.
- MARANHÃO FILHO, Éfrem. **No lugar de procurar um SaaS, abro o ChatGPT, o Gemini ou o Colab**. [*S. l.*]: efrem.io, 21 jul. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O código não é a parte difícil**. [*S. l.*]: efrem.io, 26 mar. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/code-is-not-the-hard-part/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Só pago os SaaS em que vejo valor, o resto eu construo**. [*S. l.*]: efrem.io, 11 nov. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/i-only-pay-for-saas-i-see-value-in/>. Acesso em: 13 nov. 2026.

*Notas:* As duas referências apresentam teses comerciais; a aplicação à busca ativa é uma elaboração didática deste guia. Thoughtworks é uma consultoria de tecnologia e Sequoia é uma investidora. O texto não adota como fatos as previsões de mercado, as divisões rígidas entre inteligência e julgamento nem a ideia de que todo agente aprende ou é treinado continuamente em operação. Os relatos sobre o aplicativo de segurança pública, o convite em massa no diretório e a decisão entre assinar ou construir são do autor.

</div>
