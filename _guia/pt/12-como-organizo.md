---
title: "Como eu organizo meu trabalho com IA"
description: "Pastas que espelham a vida, uma caixinha de texto no lugar de dez abas, ambientes com cerca e três fornecedores de propósito. As ferramentas mudam; os princípios, bem menos."
lang: pt-BR
ref: workspace
order: 12
part: 3
permalink: /ia/como-organizo/
interactive: "anatomia de um ambiente de trabalho"
piece: "pastas por município e chaves em ordem"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 12

O projeto cresceu: mais dois municípios pediram ajuda. Em uma semana, Lia tinha três planilhas parecidas na mesma pasta e uma chave de acesso colada no grupo de mensagens da equipe, "para facilitar". Facilitar para quem?
</div>

Este capítulo é o mais pessoal do guia. Não é uma receita: é como eu trabalho. As ferramentas vão mudar, e por isso não cito nenhuma pelo nome; o que eu espero que fique são os princípios por trás.

Um aviso sobre o meu perfil: eu uso IA muito pouco como "assistente" de bate-papo e muito como **ferramenta de construção** — para escrever código, desenhar interfaces, analisar dados e produzir documentos. Uso ferramentas de todos os grandes fornecedores. E hoje seria impossível eu trabalhar do jeito que trabalho sem elas.

## Onde mora o seu trabalho?

O princípio número um não tem nada de tecnológico: **cada frente de trabalho é uma pasta, e cada projeto dentro dela é um repositório.**

```
~/trabalho
├── fgv/            aulas e projetos de pesquisa
├── plancorp/       produtos da empresa
├── unieuro/        projetos de estudantes (um repositório por produto)
├── consultoria/    clientes
└── pessoal/        este site, estudos, experimentos
```

A consequência prática é enorme. Quando abro um agente dentro de um projeto, ele só enxerga aquele projeto. Quando abro uma pasta acima, ele enxerga todos os projetos daquela frente — e eu posso perguntar "como estão os projetos das minhas turmas?" e receber um panorama de quem fez o quê, em todos os repositórios, sem abrir nenhum.

**O nível da pasta em que eu abro a ferramenta é o tamanho do contexto que eu estou dando.** É a engenharia de contexto do [capítulo 8](/ia/contexto/) feita com o gerenciador de arquivos.

Também é por isso que eu evito o agente "faz-tudo" que guarda as coisas do jeito dele. Eles se acham na própria bagunça; depois, uma pessoa tentando ler aquilo sofre.

## Precisa de terminal?

Eu trabalho a maior parte do tempo no **terminal**: aquela tela preta de texto que lembra o DOS. As ferramentas de IA para programação têm versões de linha de comando (CLI), e eu prefiro essas por três motivos:

1. **Sou muito desatento.** Uma tela com uma única caixinha para digitar, em tela cheia, é o melhor ambiente que eu conheço para não me perder.
2. **Tudo já fala com o terminal.** Git, os serviços de nuvem, os bancos de dados — as ferramentas profissionais nasceram ali. O agente usa as mesmas que uma pessoa de engenharia usaria, sem precisar de integração especial.
3. **Eu vejo o que está acontecendo.** Cada comando que o agente roda aparece na tela. Eu gosto de saber como as coisas funcionam por baixo, e isso me deixa mais tranquilo para delegar.

Confesso a ironia: tempos atrás eu [reclamei que estávamos voltando para o terminal](/blog/pt/are-we-going-back-to-the-terminal/) e jogando fora décadas de trabalho em interface. Continuo achando que, para a maioria das pessoas, uma boa interface vence. Para mim, hoje, a caixinha venceu.

Você **não precisa** do terminal para aplicar nada deste guia. Os mesmos produtos têm aplicativo e versão web, e a lógica é igual.

## Na minha máquina ou na nuvem?

O agente pode trabalhar em dois lugares:

- **Na minha máquina**: abre a pasta do projeto e trabalha ali. Rápido, e os arquivos ficam comigo. É o meu padrão.
- **Em um ambiente na nuvem**: o fornecedor da IA liga uma máquina temporária, baixa o repositório, trabalha e me devolve um pull request. Uso quando quero tocar o trabalho pelo celular, deixar algo rodando durante a noite ou manter um projeto de empresa isolado da minha máquina.

Um ambiente desses é configurado uma vez e tem quatro partes:

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** abra a anatomia do ambiente, mais abaixo. No projeto da Lia, o que entraria em cada uma das quatro partes — e o que não deveria entrar em nenhuma?
</div>

<div data-widget="tabs" data-title="Anatomia de um ambiente na nuvem" data-sub="Exemplo ilustrativo. Os nomes mudam de produto para produto; as quatro partes existem em todos." markdown="1">

#### Repositório

De onde vem o código e o contexto. O ambiente começa baixando o repositório do projeto — com o `AGENTS.md`, a pasta `docs/` e todo o histórico do [capítulo 11](/ia/repositorio-e-memoria/). É por isso que ele já "chega sabendo".

#### Script de preparação

A lista de passos que a máquina executa toda vez que liga, antes de o agente começar: instalar dependências, configurar ferramentas, preparar o banco de testes.

```
# roda sempre que o ambiente é criado
instalar dependências do projeto
instalar as ferramentas de nuvem que o projeto usa
criar o banco de dados de teste com dados fictícios
rodar os testes uma vez para confirmar que está tudo de pé
```

Em um projeto real meu, esse script tem dezenas de linhas. Ninguém as digita de novo: é determinístico, como no [capítulo 10](/ia/pedir-o-script/).

#### Segredos

As chaves de acesso de que o projeto precisa, guardadas no cofre do ambiente — nunca no código, nunca na conversa.

```
CHAVE_BANCO_TESTE=••••••••
CHAVE_QUADRO_TAREFAS=••••••••
```

A regra é dar só as chaves daquele projeto, com a menor permissão que funciona. O estrago máximo de um agente é o que as chaves dele permitem.

#### Rede

Com quem essa máquina pode falar na internet. As opções costumam ser: nada, uma lista de sites permitidos ou tudo.

```
permitido:
  - o repositório de código
  - os dois serviços de nuvem da empresa
  - a API do quadro de tarefas
  (e mais alguns: pouco mais de uma dúzia no total)
bloqueado: todo o resto
```

Para projeto pessoal e inofensivo eu libero tudo. Para projeto de empresa, lista fechada. Se alguma instrução maliciosa aparecer no meio de um documento, o agente simplesmente não tem para onde mandar os dados.

</div>

## Por que não escolher uma ferramenta só?

Eu pago e uso as ferramentas de três empresas diferentes. Quando estouro o limite de uma, passo para a outra. Mas o motivo principal não é esse: **foi uma decisão deliberada para não depender de ninguém.**

Deu trabalho. Cada ferramenta tem um jeito, um nome de arquivo de configuração, uma mania. O que tornou possível foi a regra do capítulo anterior — o conhecimento mora no repositório, em texto simples. Qualquer uma delas abre a pasta e continua de onde a outra parou.

E a recomendação que eu dou para quem está começando é o contrário de "escolha a melhor": teste as três com a mesma tarefa real. A diferença entre os modelos de ponta hoje é mais de gosto do que de capacidade.

## Quanto custa — e como se paga?

Existem duas formas de pagar por IA, e confundir as duas sai caro:

| | Assinatura mensal | API (por uso) |
|---|---|---|
| **Como cobra** | Valor fixo, com limite de uso | Por token processado, sem teto |
| **Para quem** | Pessoas usando os aplicativos e ferramentas do fornecedor | Sistemas e agentes próprios chamando o modelo |
| **Previsibilidade** | Total | Nenhuma, se você não colocar limite |
| **Onde começar** | O plano mais básico de um fornecedor | Só quando tiver um sistema que precise |

Para uso intenso, a assinatura sai muito mais barata — tudo indica que os planos mensais são subsidiados pelas empresas, que disputam quem vai ser a ferramenta padrão de quem constrói software. Um sinal público disso: já houve fornecedor [criando limites semanais](https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/) para conter assinantes que deixavam a ferramenta de programação rodando sem parar, dia e noite. Uma vez eu tentei usar uma ferramenta dessas pagando por uso, sem assinatura: em duas horas gastei o valor de um mês.

Para dar uma ideia de escala de quem trabalha com isso o dia inteiro: eu mantenho três assinaturas profissionais. Cada uma custa entre um terço e dois terços de um salário mínimo por mês; somadas, pouco mais de um salário mínimo. Não é pouco — e substitui uma quantidade de ferramentas e de horas que eu nem consigo mais calcular. Para quem está começando, o plano mais básico de um fornecedor custa uma pequena fração disso e é suficiente para praticar tudo o que está neste guia.

Sobre chaves de API, que você vai encontrar quando montar um agente próprio:

- **Uma chave por projeto ou por pessoa.** Nunca uma chave "geral".
- **Coloque limite de gasto.** Sempre. Antes de usar.
- **Revogue quando terminar.** Eu crio chaves para estudantes durante um curso e desativo todas no fim. Chave esquecida é conta aberta.

<div class="g-box g-key" markdown="1">
**Para guardar**

- Organize por pasta e repositório: o lugar onde você abre a ferramenta define o contexto que ela recebe.
- Ambiente bem configurado tem quatro partes: repositório, preparação, segredos e rede.
- Não case com um fornecedor. Deixe o conhecimento em texto simples e teste vários.
- Assinatura para pessoas, API para sistemas — e API sempre com limite.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** quem tem hoje uma chave que não deveria mais ter? Se uma ferramenta saísse do ar amanhã, o que a equipe perderia?
- **Um caminho para responder:** listar onde estão os arquivos e as chaves; separar por projeto; dar a cada chave um limite e uma data para acabar.
- **Peça nova no projeto:** a estrutura de pastas e as chaves em ordem.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — o mapa da sua vida

No papel, cada pessoa desenha sua árvore de pastas ideal: quais são as frentes de trabalho? Quais projetos existem em cada uma? Para cada projeto: quem mais precisa de acesso? Tem dado sensível? Depois comparem com a organização real dos arquivos de cada pessoa.

#### Perguntas de discussão

- Se um agente abrisse hoje a sua pasta "Documentos", o que ele entenderia? O que ele não deveria ver?
- Qual é o risco de usar uma única ferramenta de IA para tudo? E o custo de usar várias?
- Sua organização paga por IA para a equipe? Se não, o que as pessoas estão usando — e com que dados?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- MARANHÃO FILHO, Éfrem. **Estamos voltando para o terminal?**. [*S. l.*]: efrem.io, 17 jul. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/are-we-going-back-to-the-terminal/>. Acesso em: 13 nov. 2026.
- ZEFF, Maxwell. Anthropic unveils new rate limits to curb Claude Code power users. **TechCrunch**, [*s. l.*], 28 jul. 2025. Disponível em: <https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/>. Acesso em: 13 nov. 2026.

*Notas:* O fornecedor que criou limites semanais é a Anthropic (Zeff, 2025). Os números de uso deste capítulo são da minha própria rotina: em novembro de 2026, as três assinaturas somavam cerca de R$ 2.000 por mês, com o salário mínimo em R$ 1.621.

</div>
