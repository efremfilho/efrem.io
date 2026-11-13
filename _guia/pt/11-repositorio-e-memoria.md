---
title: "Seu repositório é a sua memória"
description: "Git e GitHub para quem não é dev: a máquina do tempo que deixa você errar sem medo e o lugar onde o contexto do projeto mora — independente de qual IA você usa."
lang: pt-BR
ref: repo-memory
order: 11
part: 3
permalink: /ia/repositorio-e-memoria/
interactive: "linha do tempo de branches + anatomia do repositório"
piece: "o repositório com as decisões registradas"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 11

A colega que montou a primeira planilha saiu da organização em março. Com ela foi embora a resposta para a pergunta que a secretaria fez em abril: por que cinco faltas? Lia procurou em e-mail, em grupo de mensagens, em ata. Não achou. A decisão existia; a memória, não. Onde uma organização guarda os seus porquês?
</div>

A primeira coisa que eu recomendo para quem começa a construir qualquer coisa com IA — produto, automação, até um agente pessoal — não é uma ferramenta de IA. É criar um repositório.

Parece conselho de programador para programador. Não é. Se o [capítulo 8](/ia/contexto/) disse que o modelo só sabe o que está na janela, este responde à pergunta seguinte: **onde fica guardado tudo o que precisa voltar para a janela amanhã?**

## O que é um repositório, afinal?

**Git** é um sistema que guarda todas as versões de uma pasta de arquivos. Nasceu na comunidade do Linux, puxada por Linus Torvalds — [a história é curta e boa (em inglês)](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git). Sabe o histórico de versões de um documento on-line? É isso, para um projeto inteiro e com muito mais controle.

**GitHub** é um site que hospeda essas pastas versionadas — os **repositórios** — e acrescenta o que falta para trabalhar em grupo: permissões, revisão, discussão.

O vocabulário mínimo:

- **Commit**: uma versão salva, com uma descrição do que mudou. Um projeto meu, pequeno, tem mais de cem; cada um é um ponto para onde eu posso voltar.
- **Branch**: uma ramificação, um "galho". Uma linha do tempo paralela onde você experimenta sem tocar no que está funcionando. É a imagem das linhas do tempo que se ramificam, comum nas histórias de viagem no tempo.
- **Pull request (PR)**: o pedido para juntar o seu galho de volta na linha principal. "Olha o que eu fiz. Pode entrar?"
- **Review**: alguém olha o PR antes de aprovar. No meu time, eu reviso o que outra pessoa do time faz e ela revisa o que eu faço — e uma IA revisa os dois.
- **Merge**: o galho aprovado se junta à linha principal.
- **Rollback**: deu errado, volta para a versão anterior. Nada se perde.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** brinque com a linha do tempo. Depois, na anatomia do repositório, procure: em qual arquivo estaria a resposta para "por que cinco faltas"?
</div>

<div data-widget="git"></div>

## Por que isso importa tanto com IA?

**Porque dá para errar sem medo.** Um agente vai mexer nos seus arquivos. Às vezes vai mexer mal. Com Git, a pior consequência é "volta uma versão". Sem Git, é "espero que eu tenha uma cópia".

**Porque o agente cuida da burocracia.** Eu não crio branches à mão. Em um dos projetos em que trabalho há mais de mil, todas criadas e gerenciadas por agentes. Meu papel é dizer o que eu quero e revisar o que chega no pull request.

**Porque funciona em time.** Pessoas e agentes trabalhando no mesmo projeto precisam de um lugar em que ninguém pisa no trabalho de ninguém e toda mudança passa por alguém antes de valer.

**Porque é a sua memória.** Este é o ponto menos óbvio e mais valioso.

## Onde mora a memória de um projeto?

Código é só uma parte do que eu guardo. A outra é tudo aquilo que eu não quero explicar duas vezes — para uma IA ou para uma pessoa.

<div data-widget="tabs" data-layout="tree" data-title="Anatomia de um repositório que lembra das coisas" data-sub="Clique em cada arquivo ou pasta. Nenhum deles é código." markdown="1">

#### README.md

A porta de entrada. O que é o projeto, para quem serve, como rodar. Escrito para uma pessoa que nunca viu aquilo — o que, convenientemente, também descreve qualquer IA no começo de uma conversa.

#### AGENTS.md

As instruções permanentes para agentes: como o projeto está organizado, que comandos usar, o que **nunca** fazer, como testar antes de dizer que terminou. [AGENTS.md](https://agents.md/) é um formato aberto — um "README para agentes" — que a maioria das ferramentas lê sozinha ao abrir o projeto. Algumas usam um nome próprio para esse arquivo; eu mantenho os dois, para não ficar preso a uma ferramenta.

```
# Regras deste projeto
- Nunca faça commit direto na branch principal; abra um PR.
- Dados reais de clientes não entram em testes. Use /dados-ficticios.
- Antes de dizer que terminou, rode os testes e mostre o resultado.
- Decisões já tomadas estão em docs/decisoes. Leia antes de propor.
```

#### docs/decisoes/

Uma decisão por arquivo: o que foi proposto, o que foi escolhido e **por quê**. Serve para o agente não reabrir, toda semana, uma discussão que o time já encerrou — e para a pessoa nova entender o caminho até aqui.

#### docs/regras/

As regras do negócio, em texto. Meu jeito favorito de produzir isso: gravo a reunião, pego a transcrição e peço "crie um documento com as regras que definimos nessa conversa". Depois alguém que estava na reunião revisa.

#### docs/handoffs/

Passagens de bastão: onde eu parei, o que falta, o que estava no meio. Escritas ao fim de uma sessão de trabalho. No dia seguinte — ou três semanas depois — o agente começa lendo o último handoff e continua de onde parou.

#### docs/runbooks/

Os roteiros e scripts de tarefas que se repetem: publicar uma versão, gerar o relatório mensal, cadastrar um cliente novo. É a parte determinística do [capítulo 10](/ia/pedir-o-script/), guardada onde todo mundo acha.

#### docs/erros/

O que já deu errado e não deve se repetir. "Tentamos fazer assim, quebrou por causa disso, o caminho certo é aquele." É o mais próximo que um agente chega de aprender com a experiência.

</div>

Quem escreve esses documentos? Na maior parte das vezes, a própria IA, a meu pedido: *"gere a documentação do que aprendemos nesta sessão"*. Eu leio, corrijo e faço o commit.

## E se a ferramenta da moda mudar amanhã?

Como o conhecimento mora em arquivos de texto simples, em um repositório que é meu, **eu posso trocar de IA quando quiser**. Uso três fornecedores diferentes de propósito. Foi dolorido no começo, mas hoje qualquer um deles abre o projeto, lê os mesmos arquivos e continua o trabalho.

Para mim, os modelos viraram *commodity* — [eu já dizia isso há um tempo](/blog/pt/agentkit-wont-kill-the-ipaas/), comparando com o que aconteceu com a nuvem: a diferença entre os melhores é mais de gosto do que de capacidade. O que não é commodity é o contexto do seu projeto — e esse não deveria morar dentro da conta de um fornecedor, nem dentro de um framework de agente específico. Se a ferramenta da moda mudar amanhã, você conecta a próxima no mesmo repositório.

Vale para gente também. Entrou uma pessoa nova no time? Libera o acesso ao repositório. As decisões, as regras e o histórico já estão lá.

<div class="g-box g-mine" markdown="1">
**Por onde começar:** crie uma conta no GitHub, depois uma **organização** para a sua empresa ou projeto (separada do seu perfil pessoal), e dentro dela um repositório **privado**. Peça ao seu assistente de IA para criar a estrutura acima. Comece hoje — é muito mais fácil documentar desde o início do que reconstruir depois.
</div>

<div class="g-box g-key" markdown="1">
**Para guardar**

- Git é a rede de proteção: tudo tem histórico, nada é definitivo.
- Branch + pull request + revisão é o que deixa um agente trabalhar sem colocar produção em risco.
- O que está no repositório é seu e funciona com qualquer IA. O que está só na conversa se perde.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** o que na organização só existe na cabeça de uma pessoa? Se eu sair amanhã, o que quem chegar precisa encontrar escrito?
- **Um caminho para responder:** escolher uma decisão antiga e tentar reconstruir o porquê; registrar a próxima decisão na hora, com data e motivo; combinar com a equipe onde isso mora.
- **Peça nova no projeto:** o repositório, com README, AGENTS.md e a pasta de decisões.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (40 min) — o primeiro repositório

Cada pessoa cria uma conta no GitHub e um repositório privado para um projeto próprio (pode ser o TCC, uma planilha de controle, um processo do trabalho). Com ajuda de um assistente, escrevem o `README.md` e um `AGENTS.md` de dez linhas. Fazem uma alteração, um commit e — para quem for mais rápido — uma branch e um pull request.

#### Perguntas de discussão

- O que, no seu trabalho, hoje só existe na cabeça de alguém ou no histórico de um chat?
- Se a ferramenta de IA que você usa fechasse amanhã, o que você perderia?
- Por que pedir revisão de outra pessoa (ou de outra IA) antes de juntar uma mudança?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- AGENTS.MD. [*S. l.*], [2025?]. Disponível em: <https://agents.md/>. Acesso em: 13 nov. 2026.
- CHACON, Scott; STRAUB, Ben. **Pro Git**. 2. ed. [*S. l.*]: Apress, 2014. Seção 1.2: A short history of Git. Disponível em: <https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O AgentKit não vai acabar com os iPaaS**. [*S. l.*]: efrem.io, 7 out. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/agentkit-wont-kill-the-ipaas/>. Acesso em: 13 nov. 2026.

</div>
