---
title: "Como uma correção desapareceu?"
subtitle: "Repositório, versões e integração."
description: "Git e GitHub para quem não é dev: a máquina do tempo que deixa você errar sem medo e o lugar onde o contexto do projeto mora — independente de qual IA você usa."
lang: pt-BR
ref: repo-memory
order: 11
part: 2
permalink: /ia/repositorio-e-memoria/
interactive: "linha do tempo de branches + anatomia do repositório"
piece: "o repositório com as decisões registradas"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 11

Na segunda-feira, as transferências voltaram a ser contadas em dobro. Lia tinha enviado à secretaria uma cópia do script anterior à revisão de Bia. Caio corrigira outra parte no fim de semana; as duas mudanças estavam certas separadamente, mas não estavam juntas. "Então só uma pessoa mexe", sugeriu Lia. Bia discordou: se tudo esperasse uma pessoa, continuariam perdendo visitas. Pediu ao agente que comparasse as cópias; Caio revisou as diferenças e encontrou a correção perdida. No meio disso, Iara perguntou de onde vinha o limite de cinco faltas. Lia tinha documentado como contar, não por que aquele limite existia. Como guardar tanto o que mudou quanto o que ninguém ainda sabe explicar?
</div>

A primeira coisa que eu recomendo para quem começa a construir qualquer coisa com IA — produto, automação, um livro, até um agente pessoal — não é uma ferramenta de IA. É criar um repositório.

Parece conselho de programador para programador. Não é. Se o [capítulo 8](/ia/contexto/) disse que as decisões do projeto precisam chegar à janela, este responde à pergunta seguinte: **onde fica guardado tudo o que precisa voltar para a janela amanhã?**

## Precisa ter código para ser um projeto?

Eu prefiro transformar o trabalho num projeto no GitHub, mesmo quando a entrega não é software. Este livro é um exemplo. Acaba que quase sempre aparecem scripts que agentes codadores executam, mas não é a presença de código que faz o projeto valer a pena.

O que eu quero guardar é o caminho: decisões, alternativas que já tentamos, atas, o que ficou pendente. Crio pastas `docs/` para isso e uso o `AGENTS.md` para orientar quem vai trabalhar ali. Se amanhã eu trocar de agente, não quero começar contando a história inteira de novo.

Pense num livro que mudou de estrutura. A versão atual mostra onde cada capítulo ficou. O registro da decisão explica por que ele mudou, o que foi descartado e o que ainda está em discussão. São memórias diferentes, e preciso das duas. Guardar só a última versão é como guardar a resposta e perder a pergunta.

## E quando o time constrói separado e tenta juntar depois?

Eu [já fiz essa gambiarra](/blog/pt/processes-and-guardrails-for-product-builders-and-devs/): um ambiente de testes para quem construía produto, separado do trabalho de desenvolvimento. Depois veio a dor de modularizar e integrar o que tinha sido feito. Minha conclusão naquele relato: deveríamos ter levado mudanças menores para revisão no ambiente de desenvolvimento desde o começo.

Também estava experimentando revisão automática de código. Teve vez em que ajudou muito e vez em que nem respondeu. Eu ainda não tinha uma conclusão. Ter uma ferramenta de revisão não tinha resolvido o processo de revisão. É por isso que o repositório entra aqui: para combinar como o trabalho se encontra, e não só onde o arquivo fica.

## O que é um repositório, afinal?

**Git** é um sistema que [registra versões dos arquivos que você escolhe acompanhar e salvar no histórico](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository). Nasceu na comunidade do Linux, puxada por Linus Torvalds — [a história é curta e boa (em inglês)](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git). Sabe o histórico de versões de um documento on-line? É isso, para um projeto inteiro e com muito mais controle.

**GitHub** é um site que hospeda essas pastas versionadas — os **repositórios** — e acrescenta o que falta para trabalhar em grupo: permissões, revisão, discussão.

O vocabulário mínimo:

- **Commit**: uma versão salva, com uma descrição do que mudou. Um projeto meu, pequeno, tem mais de cem; cada um é um ponto para onde eu posso voltar.
- **Branch**: uma ramificação, um "galho". Uma linha do tempo paralela onde você experimenta sem tocar no que está funcionando. É a imagem das linhas do tempo que se ramificam, comum nas histórias de viagem no tempo.
- **Pull request (PR)**: o pedido para juntar o seu galho de volta na linha principal. "Olha o que eu fiz. Pode entrar?"
- **Review**: alguém olha o PR antes de aprovar. No meu time, eu reviso o que outra pessoa do time faz e ela revisa o que eu faço — e uma IA revisa os dois.
- **Merge**: o galho aprovado se junta à linha principal.
- **Rollback**: deu errado, recupera uma versão anterior dos arquivos que foram salvos. Não desfaz automaticamente o que aconteceu fora deles.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** brinque com a linha do tempo. Depois, na anatomia do repositório, procure: em qual arquivo estaria a resposta para "por que cinco faltas"?
</div>

<div data-widget="git"></div>

## Por que isso importa tanto com IA?

**Porque dá para errar sem medo.** Um agente vai mexer nos seus arquivos. Às vezes vai mexer mal. Com o trabalho salvo no histórico, posso comparar e recuperar versões. Isso ajuda a consertar arquivos; não é um botão para desfazer qualquer consequência no mundo. Sem histórico, muitas vezes sobra "espero que eu tenha uma cópia".

**Porque o agente cuida da burocracia.** Eu não crio branches à mão. Em um dos projetos em que trabalho há mais de mil, todas criadas e gerenciadas por agentes. Meu papel é dizer o que eu quero e revisar o que chega no pull request.

**Porque funciona em time.** Sozinho, quase tudo funciona. Os problemas de sempre do software aparecem quando entra a segunda pessoa: quem mudou o quê, qual versão vale, o que fazer quando duas mudanças brigam. Pessoas e agentes trabalhando no mesmo projeto precisam de um lugar em que ninguém pisa no trabalho de ninguém e toda mudança passa por alguém antes de valer.

No meu trabalho, hoje, é assim: a gente discute a estratégia e divide usando os cortes do [capítulo 7](/ia/pensamento-computacional/). Uma pessoa fica com um domínio ou uma camada (por exemplo, a regra de sincronização no banco), outra fica com outro (a tela de revisão). Cada pessoa trabalha na sua branch com os seus agentes, em arquivos separados, para ninguém atropelar o código de ninguém. Eu reviso o pull request do meu colega; ele revisa o meu.

**Porque é a sua memória.** Este é o ponto menos óbvio e mais valioso.

## Onde mora a memória de um projeto?

Nas minhas pastas `docs/`, documento decisões, caminhos já tomados e atas. É o que eu não quero explicar duas vezes — para uma IA ou para uma pessoa. A estrutura abaixo mostra jeitos de separar esse material; pode começar com poucos arquivos e crescer conforme fizer falta.

<div data-widget="tabs" data-layout="tree" data-title="Anatomia de um repositório que lembra das coisas" data-sub="Explore as instruções, as decisões e os registros que ajudam a retomar o trabalho." markdown="1">

#### README.md

A porta de entrada. O que é o projeto, para quem serve, como rodar. Escrito para uma pessoa que nunca viu aquilo — o que, convenientemente, também descreve qualquer IA no começo de uma conversa.

#### AGENTS.md

As instruções permanentes para agentes: como o projeto está organizado, que comandos usar, o que **nunca** fazer, como testar antes de dizer que terminou. [AGENTS.md](https://agents.md/) é um formato aberto — um "README para agentes" — que ferramentas compatíveis podem ler ao abrir o projeto. Algumas usam um nome próprio para esse arquivo; eu mantenho os dois, para não ficar preso a uma ferramenta.

```
# Regras deste projeto
- Nunca faça commit direto na branch principal; abra um PR.
- Dados reais de clientes não entram em testes. Use /dados-ficticios.
- Antes de dizer que terminou, rode os testes e mostre o resultado.
- Decisões já tomadas estão em docs/decisoes. Leia antes de propor.
```

#### docs/decisoes/

Uma decisão por arquivo: o que foi proposto, o que foi escolhido e **por quê**. Serve para o agente não reabrir, toda semana, uma discussão que o time já encerrou — e para a pessoa nova entender o caminho até aqui.

#### docs/atas/

O que foi discutido, o que ficou decidido e o que continua aberto. Uma conversa pode ter dez sugestões e uma decisão; a ata precisa deixar a diferença visível.

#### docs/regras/

As regras do negócio, em texto. Meu jeito favorito de produzir isso: gravo a reunião, pego a transcrição e peço "crie um documento com as regras que definimos nessa conversa". Depois alguém que estava na reunião revisa.

#### docs/handoffs/

Passagens de bastão: onde eu parei, o que falta, o que estava no meio. Escritas ao fim de uma sessão de trabalho. No dia seguinte — ou três semanas depois — o agente começa lendo o último handoff e continua de onde parou.

#### docs/runbooks/

Os roteiros e scripts de tarefas que se repetem: publicar uma versão, gerar o relatório mensal, cadastrar um cliente novo. É a parte determinística do [capítulo 10](/ia/pedir-o-script/), guardada onde todo mundo acha.

#### docs/erros/

O que já deu errado e não deve se repetir. "Tentamos fazer assim, quebrou por causa disso, o caminho certo é aquele." É experiência registrada para orientar a próxima sessão, sem precisar retreinar o modelo.

</div>

Quem escreve esses documentos? Na maior parte das vezes, a própria IA, a meu pedido: *"gere a documentação do que aprendemos nesta sessão"*. Eu leio, corrijo e faço o commit.

Nos meus projetos mais longos, duas coisas dentro dessa estrutura valem ouro:

- **Invariantes que não se desfazem (as cicatrizes do projeto):** no topo do `AGENTS.md`, eu listo as regras que nasceram de incidentes reais — aqueles bugs silenciosos em que o sistema continuava respondendo, só que com o número errado. Um agente novo olha uma trava dessas, acha que é código redundante e tenta "limpar", trazendo o bug de volta. Por isso o aviso lá no alto é explícito: *se uma regra desta seção parecer redundante ou exagerada, pare e pergunte antes de mexer*.
- **O script de auditoria que só cresce:** toda vez que a gente descobre um erro conferindo à mão, aquela checagem vira uma regra nova num script de auditoria do projeto. Nenhuma seção antiga sai; cada incidente acrescenta uma verificação nova. Este próprio guia tem o seu (`conferir.py`, na pasta `_tools/guia/`), que confere paridade entre português e inglês, formato dos diários da Lia e links quebrados antes de qualquer publicação.

## E se a reunião virasse matéria-prima?

O caso mais simples e talvez o mais útil: eu gravo reuniões (com o conhecimento de quem participa), pego a transcrição e uso como matéria-prima. "Crie um documento com as regras que definimos." "Liste as decisões e quem ficou com o quê." "O que ficou em aberto?" Contei o método [neste texto](/blog/pt/recording-calls-to-think-with-claude/).

Este guia, aliás, nasceu assim: da gravação das minhas aulas e de uma conversa de uma hora e meia em que eu mostrava meu jeito de trabalhar a um amigo.

## Este livro também trabalha assim?

Sim. O [projeto deste site e deste guia](https://github.com/efremfilho/efrem.io) tem texto, regras de trabalho, fontes e ferramentas no mesmo lugar. Não é preciso estar construindo um aplicativo para isso fazer sentido.

| Onde | O que resolve neste projeto |
|---|---|
| `AGENTS.md` | Registra o público, o tom, as regras editoriais e o que conferir antes de considerar uma mudança pronta. |
| `_guia/` | Guarda os capítulos em português e inglês; deles saem as páginas e a versão livro. |
| `_tools/guia/` | Guarda scripts que montam referências, conferem o guia, testam experimentos e ajudam a gerar o site e o PDF. |
| `temp/` | Reúne material de preparação local e privado, como transcrições e rascunhos; fica fora do repositório publicado e do site. |

A estrutura de `docs/` acima é um exemplo de organização, não uma receita de pastas obrigatórias. Aqui, parte do material de trabalho está em `temp/`. **Estar na pasta do projeto não significa estar publicado.** As regras deste projeto deixam essa diferença explícita; o nome da pasta sozinho não faz isso.

Uma decisão editorial concreta: português primeiro, inglês como espelho. Isso está nas instruções, em vez de depender de eu lembrar de repetir a cada pedido. Outra: referências são geradas a partir de uma base comum. O agente pode trabalhar no texto e executar os scripts de conferência no mesmo projeto. É desenvolvimento a serviço de um livro.

E tem um limite importante: documento guardado não é documento lido. O agente precisa localizar o registro pertinente e trazê-lo para a tarefa. O repositório conserva o caminho; o contexto põe a parte necessária desse caminho na mesa.

## E se a ferramenta da moda mudar amanhã?

Como o conhecimento mora em arquivos de texto simples, em um repositório que é meu, **eu posso trocar de IA quando quiser**. Eu testo várias, e mudar me custa algumas horas de estranhamento: qualquer uma abre o projeto, lê os mesmos arquivos e continua o trabalho. Isso não quer dizer viver trocando — prefiro ser muito bom em uma a ser mediano em todas. A liberdade está em poder sair, não em sair toda semana.

Para mim, os modelos viraram *commodity* — [eu já dizia isso há um tempo](/blog/pt/agentkit-wont-kill-the-ipaas/), comparando com o que aconteceu com a nuvem: a diferença entre os melhores é mais de gosto do que de capacidade. O que não é commodity é o contexto do seu projeto — e esse não deveria morar dentro da conta de um fornecedor, nem dentro de um framework de agente específico. Se a ferramenta da moda mudar amanhã, você conecta a próxima no mesmo repositório.

Vale para gente também. Entrou uma pessoa nova no time? Libera o acesso ao repositório. As decisões, as regras e o histórico já estão lá.

<div class="g-box g-mine" markdown="1">
**Por onde começar:** crie uma conta no GitHub, depois uma **organização** para a sua empresa ou projeto (separada do seu perfil pessoal), e dentro dela um repositório **privado**. Peça ao seu assistente de IA para criar a estrutura acima. Comece hoje — é muito mais fácil documentar desde o início do que reconstruir depois.
</div>


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** Centralizar evita algumas colisões e cria espera. Dividir permite avançar, mas exige combinar como as partes se encontram. Onde ficam os porquês?
- **Caminhos na mesa:**
  - *Lia:* uma pessoa mantém a versão que vai ao ar. Simplifica a coordenação, mas concentra trabalho e dependência nela.
  - *Caio:* separar as partes e combinar horários de integração. Preserva autonomia, mas as regras compartilhadas ainda podem entrar em conflito.
  - *Bia:* usar um repositório com propostas de mudança e revisão de outra pessoa. Permite comparar e recuperar versões salvas, mas exige aprender uma rotina e reservar tempo para revisar.
- **O que o time fez, por enquanto:** adotou a proposta de Bia. Guardou o script, os testes, as instruções dos agentes e as decisões no repositório. Caio reuniu as correções; Bia revisou; Lia substituiu a cópia enviada. Sobre as cinco faltas, registraram "não sabemos; herdamos". O histórico começava ali, com essa lacuna.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Repositório:** reúne os arquivos de um projeto, mesmo que a entrega não seja código.
- **Versão e revisão:** registram mudanças e ajudam a comparar e combinar trabalhos. Recuperar um arquivo não desfaz uma ação externa.
- **Memória:** decisões, motivos e dúvidas precisam ficar registradas e ser lidas; o histórico não explica sozinho todos os porquês.

Qual é a diferença entre conseguir recuperar uma versão e conseguir explicar por que ela foi escolhida?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Guarde no repositório uma decisão, uma versão da entrega e a pergunta que ainda ficou aberta. Pode ser um projeto sem código. Peça ao agente que retome o trabalho a partir desses arquivos e explique por que a decisão foi tomada. O que ele precisou adivinhar? Acrescente o que faltou, sem apagar a dúvida.

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
- CHACON, Scott; STRAUB, Ben. Recording changes to the repository. In: CHACON, Scott; STRAUB, Ben. **Pro Git**. 2. ed. [*S. l.*]: Apress, 2014. Seção 2.2. Disponível em: <https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository>. Acesso em: 15 nov. 2026.
- MARANHÃO FILHO, Éfrem. **efrem.io**. [*S. l.*]: GitHub, [s. d.]. Repositório do site e do guia IA sem mágica. Disponível em: <https://github.com/efremfilho/efrem.io>. Acesso em: 15 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Gravar a call para pensar junto com o Claude**. [*S. l.*]: efrem.io, 18 ago. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/recording-calls-to-think-with-claude/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **O AgentKit não vai acabar com os iPaaS**. [*S. l.*]: efrem.io, 7 out. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/agentkit-wont-kill-the-ipaas/>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Processos e guardrails para product builders e devs trabalharem juntos**. [*S. l.*]: efrem.io, 28 jul. 2026. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/processes-and-guardrails-for-product-builders-and-devs/>. Acesso em: 13 nov. 2026.

*Notas:* A preferência por criar projetos no GitHub mesmo quando a entrega não é código, usando AGENTS.md e pastas docs/ para decisões, caminhos percorridos e atas, é um relato do autor. O caso do próprio site e livro descreve a estrutura do repositório: README.md, AGENTS.md, capítulos, ferramentas e regras de exclusão em .gitignore e _config.yml. A pasta temp/ é material local e privado; seus conteúdos não são reproduzidos neste exemplo. Git mantém o histórico registrado dos arquivos acompanhados, não uma cópia automática de tudo que existe na pasta de trabalho (Chacon; Straub, 2014, seção 2.2).

</div>
