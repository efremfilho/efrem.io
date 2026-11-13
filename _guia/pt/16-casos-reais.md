---
title: "Casos reais: o que mudou na minha rotina"
description: "Nota fiscal, redesenho de tela, validação de documentos, um curso montado durante a noite, análise de dados e o mínimo de programação que vale aprender."
lang: pt-BR
ref: cases
order: 16
part: 3
permalink: /ia/casos-reais/
piece: "o painel no ar e a primeira análise"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 16

Com o painel funcionando, Lia fez a pergunta que vinha adiando havia um ano: *em que dia e em que turno as faltas se concentram?* O mapa de calor ficou pronto em uma conversa. A mancha mais escura estava na sexta-feira à noite. O mapa dizia onde. Dizia por quê?
</div>

Princípio sem exemplo não convence ninguém. Estes são casos da minha rotina recente, escolhidos porque cada um ilustra um capítulo anterior — e porque em cada um eu aprendi alguma coisa que não esperava.

## 1. Dá para confiar no que a IA aprendeu sobre um assunto que eu não domino?

**O que era:** todo mês eu emito notas fiscais no sistema da prefeitura. Chato, repetitivo e cheio de campos.

**Como ficou:** abro o site, libero aquela aba para o assistente do navegador e peço as notas do mês. Ele preenche, eu confiro e confirmo.

**O que aprendi:** quando uma mudança na legislação trouxe campos novos para o sistema, eu não sabia preencher. Pedi para a IA estudar as regras novas e aplicar. Antes de emitir qualquer coisa, **mandei o resultado para o meu contador**. Estava certo — e só então virou rotina.

A IA me deixou adiantado em um assunto que não é o meu. Quem me deu segurança para usar foi uma pessoa especialista. As duas coisas são verdade ao mesmo tempo. ([Capítulo 15](/ia/agentes-com-redea/): acesso a uma aba só.)

## 2. Se construir ficou fácil, o que ficou difícil?

**O que era:** em um produto em que trabalho, o quadro de acompanhamento ocupava pouco mais da metade da tela; o resto era menu e moldura. Para abrir um detalhe, a pessoa trocava de tela e perdia o fio.

**Como ficou:** descrevi o incômodo e pedi alternativas. Testei três ideias funcionando de verdade, no ambiente de desenvolvimento: arrastar e soltar entre colunas, uma gaveta lateral com o resumo do item e um caminho de navegação no topo para voltar sem se perder. Mandei o link para o time experimentar.

**O que aprendi:** a parte difícil não foi construir. Foi perceber que cada coluna daquele quadro é usada por um time diferente, e que portanto o que aparece ao passar o mouse precisa mudar de coluna para coluna. Isso é conhecimento de produto, e nenhum modelo adivinha. Um dos três experimentos eu não gostei — e voltei atrás com um comando, porque estava tudo em camadas e versionado ([capítulo 11](/ia/repositorio-e-memoria/)).

Código ficou barato. Saber o que construir, não. Escrevi mais sobre isso em [Produto e UX nunca foram tão importantes](/blog/pt/product-and-ux-have-never-mattered-more/).

## 3. "Usar IA" é usar um modelo só?

**O que era:** um processo que recebe fotos de documentos de identidade. Ler o texto da imagem (o velho OCR) é a parte fácil.

**Como ficou:** o sistema hoje combina três coisas diferentes:

- **IA generativa** para ler e interpretar: o documento está inteiro no enquadramento? Tem reflexo cobrindo algum campo? Está legível?
- **Algoritmos clássicos de visão**, que não são generativos, para procurar adulteração: bordas estranhas, uma foto colada por cima, sinais de edição.
- **Consulta determinística** a uma base oficial para ver se o número do documento confere com o nome.

**O que aprendi:** "usar IA" quase nunca significa usar *um* modelo. Significa escolher a técnica certa para cada pedaço — e, onde existe uma fonte oficial, consultar a fonte em vez de pedir opinião ([capítulo 10](/ia/pedir-o-script/)). E como aqui são dados pessoais sensíveis, vale tudo o que está no [capítulo 5](/ia/dados-e-privacidade/): consentimento, acesso mínimo, nada disso entra em ambiente de teste.

## 4. O que precisa acontecer antes de deixar um agente trabalhando a noite toda?

**O que era:** me pediram uma trilha gamificada para um curso, dentro da plataforma de ensino da instituição. Eu sabia o que queria e não sabia como a plataforma fazia aquilo.

**Como ficou:** expliquei por voz o que eu queria. A IA devolveu um plano: o que haveria na lição 1, na 2, na 3, como seria a pontuação. Eu li, ajustei e aprovei. Deixei trabalhando durante a noite. De manhã estavam lá as lições, os slides e até os vídeos.

**O que aprendi:** duas coisas. A ordem importa — **planejar, aprovar, só então executar**. Eu não deixaria nada rodar a noite toda sem ter lido o plano antes. E restrição precisa ser dita: no meio do caminho o agente avisou que a versão da plataforma não suportava um recurso e propôs uma adaptação. Agente bom não esconde a limitação; ele avisa e oferece alternativa.

## 5. Que perguntas eu deixava de fazer porque dava trabalho?

**O que era:** uma pergunta de negócio simples de fazer e trabalhosa de responder — *em que etapa do processo as propostas ficam mais tempo paradas?*

**Como ficou:** fiz a pergunta em português. Recebi a média e a mediana por etapa nos últimos três meses, os problemas encontrados nos dados, mapas de calor mostrando em que dias da semana faltava e sobrava gente para atender, a taxa de faltas — e o código em Python que gerou tudo, salvo no projeto.

**O que aprendi:** eu não escrevi uma linha daquele código, e essa é o tipo de análise que antes ficaria para "quando sobrar tempo". Custou uma conversa. O efeito mais forte não é a economia: é que **eu parei de adiar perguntas**. Quando perguntar custa pouco, a gente pergunta mais — e decide melhor.

## 6. Assinar ou construir?

Um hábito que mudei de vez: antes de procurar um aplicativo para resolver alguma coisa, eu peço para a IA construir. Uma planilha de prestação de contas que tomava três horas de alguém vira um pedido de alguns minutos. Um conversor de arquivo, um formulário, um painel simples — tudo isso deixou de ser "qual ferramenta eu assino?" e virou "descreve o que você precisa".

Comecei a falar disso em [No lugar de procurar um SaaS…](/blog/pt/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/). Hoje a regra é mais honesta: [só pago os SaaS em que vejo valor, o resto eu construo](/blog/pt/i-only-pay-for-saas-i-see-value-in/). É um serviço de que preciso e que acelera minha vida? Eu pago, feliz. Não vale e dá para substituir rápido com um programinha? Faço com agentes que programam.

## 7. E se a reunião virasse matéria-prima?

O caso mais simples e talvez o mais útil: eu gravo reuniões (com o conhecimento de quem participa), pego a transcrição e uso como matéria-prima. "Crie um documento com as regras que definimos." "Liste as decisões e quem ficou com o quê." "O que ficou em aberto?" Contei o método [neste texto](/blog/pt/recording-calls-to-think-with-claude/).

Este guia, aliás, nasceu assim: da gravação das minhas aulas e de uma conversa de uma hora e meia em que eu mostrava meu jeito de trabalhar a um amigo.

## E a programação?

A pergunta que sempre vem depois desses casos: *"então eu preciso aprender a programar?"*. Escrever código, não. Entender cinco conceitos e as três camadas de qualquer software, sim — é o assunto do [capítulo 7](/ia/pensamento-computacional/).

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** preencha as quatro linhas do "caso 8", na atividade do fim do capítulo, com uma tarefa da sua rotina. Qual das quatro é a mais difícil de escrever?
</div>

<div class="g-box g-key" markdown="1">
**O padrão que se repete nos sete casos**

- Eu sabia **o que** queria e **por quê**. O "como" foi delegado.
- Sempre houve um ponto de conferência humana antes de valer: o contador, o time, o plano aprovado.
- Onde dava para ser determinístico, foi.
- O conhecimento que fez diferença não era técnico: era entender o problema.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** a mancha de sexta à noite é trabalho, transporte ou outra coisa? O que o dado mostra, e o que ele só sugere?
- **Um caminho para responder:** levar o mapa a quem vive aquela rotina antes de concluir; perguntar o que mais explicaria o mesmo desenho; combinar o que observar nas próximas semanas.
- **Peça nova no projeto:** o painel no ar e a primeira análise.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (30 min) — o seu caso 8

Cada pessoa escolhe uma tarefa chata e repetitiva da própria rotina e preenche quatro linhas: (1) o que é hoje; (2) como poderia ficar; (3) quem ou o que confere antes de valer; (4) qual parte deve ser determinística. Em trios, uma pessoa apresenta e as outras duas procuram o furo.

#### Perguntas de discussão

- No caso da nota fiscal, o que teria acontecido sem o contador? Como você saberia que deu errado?
- "Parei de adiar perguntas." Que pergunta sobre o seu trabalho você nunca fez porque dava trabalho demais responder?
- Dos cinco conceitos de programação, qual você já usa sem saber o nome?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- MARANHÃO FILHO, Éfrem. **Gravar a call para pensar junto com o Claude**. [*S. l.*]: efrem.io, 18 ago. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/recording-calls-to-think-with-claude/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **No lugar de procurar um SaaS, abro o ChatGPT, o Gemini ou o Colab**. [*S. l.*]: efrem.io, 21 jul. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Produto e UX nunca foram tão importantes**. [*S. l.*]: efrem.io, 27 out. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/product-and-ux-have-never-mattered-more/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Só pago os SaaS em que vejo valor, o resto eu construo**. [*S. l.*]: efrem.io, 11 nov. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/i-only-pay-for-saas-i-see-value-in/>. Acesso em: 13 nov. 2026.

*Notas:* Os sete casos são da minha rotina de trabalho e de aula; nomes de pessoas, clientes e empresas foram omitidos. A mudança de legislação do caso 1 é a reforma tributária brasileira.

</div>
