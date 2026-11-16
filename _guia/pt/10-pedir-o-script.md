---
title: "Por que a mesma lista deu dois números?"
subtitle: "Determinismo, scripts e replicabilidade."
description: "Quando o resultado precisa seguir uma regra, vale pedir código que execute essa regra. Repetir a conta ajuda; conferir o que ela conta continua sendo seu trabalho."
lang: pt-BR
ref: deterministic
order: 10
part: 2
permalink: /ia/pedir-o-script/
interactive: "mesma pergunta, dez vezes"
piece: "o script de contagem, com dez casos de teste"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 10

Iara levou ao secretário o número enviado por Lia: trinta e sete estudantes com cinco faltas seguidas. À tarde, ao conferir a mesma lista, Caio recebeu quarenta e um do assistente. Em vez de pedir outro número, pediu o código da contagem e separou casos para conferir à mão. Bia leu a explicação do script: "isso conta matrículas ou pessoas? Tem transferência nessa lista". O código repetia a conta; a pergunta ainda estava aberta. Lia queria corrigir o relatório antes da próxima reunião. Iara precisava saber o que podia afirmar agora. Aguardar uma regra melhor também tinha custo — mas repetir um número dava a ele alguma certeza?
</div>

Numa formação, ao vivo, eu reclamei do trabalho que o agente tinha feito. Pedi uma análise de dados com a instrução de rodar código, copiei o código gerado para outro ambiente e ele refez a análise inteira, igual. Aí perguntei como os valores fora da curva tinham sido encontrados. A resposta estava no código: ele só tinha pegado os cinco maiores. Aquilo não justificava chamar os valores de fora da curva. Eu já estava achando o agente preguiçoso igual a gente. Reclamei em voz alta — e alguém da sala lembrou que o meu pedido dizia exatamente "liste os cinco maiores". Estava tudo lá, para quem quisesse ler: o critério ruim, e de quem ele era.

O código deixou o erro à vista. Só não era o erro que eu esperava encontrar. É por isso que pedir o script ajuda: posso conferir o procedimento, inclusive quando ele executa direitinho uma ideia ruim minha.

Pergunte duas vezes a mesma coisa para um assistente de IA e você pode receber duas respostas diferentes. Às vezes só muda a redação. Às vezes muda o número. Isso não é defeito: é o funcionamento normal de um sistema que, como vimos no [capítulo 3](/ia/por-dentro-do-modelo/), sorteia a continuação mais plausível.

Para escrever um e-mail, ótimo — variedade é bem-vinda. Para somar a planilha de reembolsos do mês, é um problema.

## Todo trabalho é do mesmo tipo?

**Probabilístico**: cada execução pode sair diferente. É o modo natural da IA generativa. Brilha onde não existe uma única resposta certa: redigir, resumir, interpretar um pedido confuso, propor alternativas, ler um documento bagunçado.

**Determinístico**: mantendo entrada, regra e condições de execução, o resultado se repete. É o que buscamos num script para somar, filtrar ou aplicar uma regra definida. Nem todo programa é assim: ele pode consultar informação que mudou ou incluir sorteio. E a própria IA é software. A distinção útil é entre gerar uma resposta e executar um procedimento que podemos inspecionar.

Eu [tentei reorganizar uma planilha de exportação em várias abas de um modelo pronto](/blog/pt/a-bazooka-to-kill-a-fly/). Dei instruções detalhadas ao agente. Às vezes a análise vinha, mas a planilha não; às vezes ele entregava só dados de exemplo. "Melhorar" o pedido chegou a piorar o resultado. Quando pedi o código para fazer a transformação, consegui a saída e fiquei com uma rotina que podia executar de novo. Ainda ficou mais técnico do que eu queria. Mas deixou de depender de uma nova tentativa de interpretar o mesmo trabalho toda vez.

É isso que procuro quando peço o script: **transformar uma regra definida num procedimento que eu consiga inspecionar, executar e reproduzir**. Uma rotina determinística, com as mesmas entradas e condições, repete o resultado. Quando a planilha do mês seguinte chegar, quero aplicar a mesma regra à entrada nova, não pedir ao agente que invente de novo como reorganizá-la. Gravei também um [vídeo sobre processos determinísticos e probabilísticos](/blog/pt/deterministic-vs-probabilistic-agentic-processes/).

Tem uma conta que ajuda a lembrar o problema. Num exemplo simplificado, se três etapas independentes precisam acertar e acertam 70%, 90% e 98% das vezes, o conjunto acerta [perto de 61%](/blog/pt/multi-agent-systems-and-compounding-errors/). Processos reais podem ter erros relacionados, então não basta multiplicar taxas soltas. Trocar uma etapa por código verificável ajuda a controlar uma fonte de variação; não transforma automaticamente aquela etapa em 100% de acerto.

## E se a IA escrevesse o código em vez da resposta?

A grande virada de usar IA "como código" em vez de "como chat" é esta. Em vez de pedir:

> Some a coluna de valores dessa planilha.

eu peço:

> Escreva um script que some a coluna de valores dessa planilha, rode e me mostre o resultado.

No primeiro caso, se o assistente apenas gerar o número como texto, não tenho uma conta para inspecionar. Ele também pode decidir usar uma ferramenta por conta própria; preciso olhar o que fez. No segundo pedido, deixo explícito o procedimento que quero conferir e reutilizar. O código pode somar perfeitamente a coluna errada. A vantagem é ter a regra à vista para localizar o erro, corrigi-lo e rodar de novo. **Replicabilidade me dá uma forma de conferir; a conferência é que permite confiar naquele uso.**

Para reproduzir uma execução, é preciso guardar também o que entrou e a versão do procedimento. Se ele consulta uma base que muda, usa sorteio ou pede nova interpretação ao modelo, não basta conservar o arquivo de código para esperar o mesmo resultado. A pergunta é: que parte foi tornada determinística e de que condições ela depende?

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** rode o experimento dez vezes. Qual parte do trabalho do time pode variar de um dia para o outro sem problema — e qual nunca pode?
</div>

<div data-widget="dado"></div>

A diferença na prática:

| | Gerar o resultado como texto | Executar um script definido |
|---|---|---|
| **Resultado** | Pode variar a cada vez | Repetível nas mesmas condições |
| **Conferência** | Conferir a afirmação e sua base | Testar a regra; revalidar quando dados ou condições mudarem |
| **Repetições** | Nova geração a cada vez | Reutilização do procedimento |
| **Auditoria** | A resposta não mostra, sozinha, como chegou ali | O código permite inspecionar o procedimento |
| **Custo e energia** | Inclui o uso do modelo | Continua havendo execução, mas pode dispensar novas chamadas ao modelo |

## O gráfico é a entrega ou a primeira pergunta?

Em [outro exercício que propus](https://efrem.io/panorama/), a turma recebe uma planilha de contratos, pede código para uma análise e usa a base para construir um painel. Um gráfico da situação dos contratos já oferece uma primeira coisa para olhar. O roteiro do exercício chega até a tela; o uso abre outras perguntas.

Que decisão esse gráfico ajuda a tomar? Se chegar outra planilha, você consegue refazer a análise com o mesmo critério? Onde ficou o código que produziu os números? Guardar a rotina permite voltar ao procedimento quando a nova entrada trouxer uma surpresa. E talvez a decisão peça um aviso ou uma lista de tarefas, em vez do painel que parecia tão interessante no começo.

## Onde eu uso isso?

- **Remover o fundo de uma imagem.** Eu poderia pedir para um modelo de imagem "redesenhar sem o fundo" e torcer para ele não mexer no resto. Prefiro pedir um script que recorta o fundo: o que não é fundo fica intocado, pixel por pixel.
- **Análise de dados.** Quando peço mediana de tempo parado por etapa de um processo, não quero que o modelo "ache" a mediana. Quero o código em Python que calcula, os gráficos que esse código gera e o arquivo salvo no projeto para rodar de novo mês que vem.
- **Rotinas.** Tarefas que se repetem viram scripts guardados em uma pasta de *runbooks* no repositório. Na próxima vez, o agente não reinventa: ele roda o que já existe.

Isso é o oposto de precisar saber programar. Eu não escrevo esses scripts — eu descrevo o que preciso, leio o que foi feito e confiro o resultado. O que mudou é que a expertise agora chega em um formato que eu consigo ler: o agente explica, em português, o que o script faz e por quê. Saber que essa opção existe muda o que você pede. Falei sobre perder o medo disso em [Pessoas de produto, não tenham medo de um script](/blog/pt/product-people-dont-be-afraid-of-a-script/).

Além daquela análise em aula, houve um projeto em que pedir o código mudou o que eu conseguia mostrar.

Num projeto para uma área de conformidade, o modelo lia a norma inteira. Na hora de aplicar, eu não aceitava o raciocínio dele: mandava gerar a regra em código — se sai de tal estado para tal estado, o tributo é este — e executar. A resposta em texto podia ser maravilhosa. Eu precisava mostrar como se chegou a ela.

## Que perguntas eu deixava de fazer porque dava trabalho?

**O que era:** uma pergunta de negócio simples de fazer e trabalhosa de responder — *em que etapa do processo as propostas ficam mais tempo paradas?*

**Como ficou:** fiz a pergunta em português. Recebi a média e a mediana por etapa nos últimos três meses, os problemas encontrados nos dados, mapas de calor mostrando em que dias da semana faltava e sobrava gente para atender, a taxa de faltas — e o código em Python que gerou tudo, salvo no projeto.

**O que aprendi:** eu não escrevi uma linha daquele código, e essa é o tipo de análise que antes ficaria para "quando sobrar tempo". Custou uma conversa. O efeito mais forte não é a economia: é que **eu parei de adiar perguntas**. Quando perguntar custa pouco, a gente pergunta mais — e ganha mais oportunidades de conferir as próprias interpretações.

## Como decidir?

Três perguntas ajudam a separar os trabalhos:

1. **Tenho uma regra definida para calcular, transformar ou conferir?** Vale pedir um script que a execute e permita conferir como executou.
2. **Vou aplicar a mesma regra a outras entradas?** Guarde a rotina, um exemplo de entrada e o resultado esperado. É o que permite repetir sem redescobrir o processo.
3. **O que falta é uma informação ou uma decisão?** Um prazo pode estar num contrato; escolher que problema atacar pode pedir conversa. Ter uma resposta correta para descobrir não transforma toda pergunta em tarefa de programação.

Muitas tarefas misturam as duas coisas: o modelo interpreta o pedido ou um documento; o código executa as regras definidas. Quando o resultado divergir, essa separação ajuda a investigar: mudou a entrada, mudou a regra, mudou o ambiente ou entrou uma nova interpretação?

## E num produto de verdade, quanto é IA?

Menos do que parece. Num produto de seguros que ajudei a construir, a análise de crédito era um planilhão que passava de mão em mão por e-mail. Hoje a pessoa manda os documentos, o processo busca o que falta, faz as contas e devolve a planilha preenchida. Quem analisava do zero agora revisa.

Ali só tem uma pecinha que é IA: ler o balanço e o demonstrativo de resultados, dizendo que conta é ativo e que conta é passivo — trabalho de formiga, que chega cada vez num formato. O resto é código, código, código. É exatidão; eu não quero ninguém sendo criativo ali.

A maioria tenta o contrário: criar um robô que conversa e resolve tudo. É encantador. No volume, é muito ruim. Eu prefiro pôr a IA dentro do processo, só no ponto em que ela é boa.


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** O que significa contar uma pessoa nessa lista? Quem decide a regra antes de discutir qual conta está certa?
- **Caminhos na mesa:**
  - *Caio:* pedir o script e testar a regra com casos conhecidos. Dá um procedimento para conferir e repetir, mas o time ainda precisa decidir o que ele deve contar.
  - *Bia:* conferir a lista à mão antes de corrigir o informe. Pode atender à urgência de hoje, mas consome o tempo reservado às visitas e não resolve a próxima lista.
  - *Lia:* retirar o número do relatório até fechar a definição. Evita sustentar uma certeza falsa, mas deixa Iara sem o indicador que levou à reunião.
- **O que o time fez, por enquanto:** avisou que o número precisava de correção e adotou o script proposto por Caio. Bia montou dez casos, incluindo transferência, para revisar com ele. Lia registrou o que a contagem incluía. A correção chegou depois da reunião, e Iara teve de voltar ao assunto.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Geração e procedimento:** pedir uma resposta e pedir uma rotina executável dão formas diferentes de conferir o trabalho.
- **Determinismo:** a mesma entrada, regra e condições produzem o mesmo resultado numa rotina determinística.
- **Replicabilidade e correção:** guardar entrada e versão permite reproduzir e investigar. Repetir uma conta não prova que o critério escolhido era adequado.

Se o script repete perfeitamente a soma da coluna errada, o que você ganhou — e o que ainda falta fazer?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Escolha uma transformação que seu projeto repete e cuja regra você consegue explicar. Peça o script, guarde uma entrada e confira uma saída esperada. Rode de novo nas mesmas condições; depois troque a entrada. O que deve permanecer igual: o resultado, a regra ou ambos? Onde ainda entra uma nova interpretação do modelo?

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — a mesma pergunta

Toda a turma cola a mesma tabela pequena (20 linhas) em um assistente e pedem a média de uma coluna, sem falar em código. Anotem as respostas no quadro. Depois repitam pedindo "escreva e rode um código que calcule". Comparem a dispersão.

#### Perguntas de discussão

- Liste cinco tarefas do seu trabalho. Quais têm uma única resposta certa?
- Um parecer jurídico é determinístico ou probabilístico? E o cálculo do prazo dentro dele?
- Se você não sabe ler o script, como confere que ele está certo? (Dica: casos de teste com resposta conhecida.)

</details>

<div class="g-fontes" markdown="1">

#### Referências

- MARANHÃO FILHO, Éfrem. **Multiagentes e a conta dos erros que se acumulam**. [*S. l.*]: efrem.io, 2 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/multi-agent-systems-and-compounding-errors/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Panorama da IA**. [*S. l.*], [s. d.]. Apresentação de slides. Disponível em: <https://efrem.io/panorama/>. Acesso em: 15 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Pessoas de produto: não tenham medo de um script**. [*S. l.*]: efrem.io, 15 jan. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/product-people-dont-be-afraid-of-a-script/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Quando usei uma bazuca para matar uma mosca**. [*S. l.*]: efrem.io, 4 dez. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/a-bazooka-to-kill-a-fly/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Testando um formato novo: processos agênticos determinísticos e probabilísticos**. [*S. l.*]: efrem.io, 28 out. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/deterministic-vs-probabilistic-agentic-processes/>. Acesso em: 13 nov. 2026.

*Notas:* O exercício da planilha de contratos está na página 21 de *Panorama da IA*. A apresentação propõe gerar código para analisar um arquivo e construir um painel a partir da base. As perguntas sobre repetição, critério e uso são o desdobramento didático neste guia, não um relato de resultados obtidos pela turma.

</div>
