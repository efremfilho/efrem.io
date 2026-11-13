---
title: "A nuvem tem chão: o custo físico da IA"
description: "Energia, água e chips por trás de cada resposta — e por que escolher o tamanho certo de ferramenta também é uma decisão ética."
lang: pt-BR
ref: footprint
order: 6
part: 1
permalink: /ia/custo-fisico/
interactive: "calculadora de energia"
piece: "regra: o menor modelo que resolve"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 6

Alguém da equipe teve uma ideia animada: gerar com IA um vídeo personalizado para cada família, com o nome de cada estudante. Seiscentas famílias. Lia gostou da ideia e ficou com uma dúvida que não sabia nem formular direito: isso tem um custo que ninguém ali estava vendo?
</div>

"Nuvem" é uma das melhores jogadas de marketing da história da tecnologia. Parece leve, limpa e sem endereço. Na prática, é um galpão do tamanho de vários campos de futebol, cheio de máquinas que esquentam, ligado na rede elétrica e, muitas vezes, em um rio.

## Onde a conta é feita?

Existem dois lugares onde um modelo pode rodar:

| | No seu aparelho (local) | No data center |
|---|---|---|
| **Onde** | Celular, notebook | Galpões com milhares de servidores |
| **Tamanho do modelo** | Pequeno: milhões a poucos bilhões de parâmetros | Enorme: centenas de bilhões de parâmetros |
| **Energia** | A bateria do seu aparelho | Rede elétrica, 24 horas por dia |
| **Resfriamento** | O calor se dissipa no próprio aparelho | Sistemas dedicados, muitos com consumo de água |
| **Seus dados** | Ficam com você | Viajam até o servidor |

Corretor do teclado, desbloqueio por rosto e transcrição offline rodam no aparelho. Os grandes assistentes de texto, imagem e vídeo rodam em data centers com dezenas de milhares de GPUs — chips especializados em fazer, em paralelo, as multiplicações do [loop de treino](/ia/como-a-maquina-aprende/).

## Quanto gasta uma pergunta?

Aqui é fácil cair em manchete exagerada para qualquer um dos lados, então vale separar o que sabemos:

- **Por pergunta, é pouco.** As próprias empresas publicam estimativas na casa de décimos de watt-hora e de frações de mililitro de água para uma pergunta de texto típica — [alguns segundos de TV ligada e algumas gotas](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference); [outra estimativa](https://blog.samaltman.com/the-gentle-singularity) fica na mesma ordem de grandeza. São números de quem vende o serviço, medidos do jeito de quem vende.
- **Depende muito da tarefa.** Resposta longa, modelos que "raciocinam" por mais tempo e geração de imagem custam mais. Vídeo custa muito mais: em um [levantamento jornalístico](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/), poucos segundos de vídeo gerado gastaram centenas de vezes a energia de uma imagem.
- **No agregado, é muito.** Data centers já respondem por algo entre 1% e 2% da eletricidade do mundo, e a Agência Internacional de Energia projeta que esse consumo [mais que dobre em poucos anos](https://www.iea.org/reports/energy-and-ai), com a IA como principal motor.
- **O impacto é local.** Um data center não pesa "no planeta" de forma abstrata: pesa na rede elétrica e na água de uma cidade específica. Por isso a pergunta sobre onde instalar, com que energia e com que água é sempre uma pergunta local.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** use a calculadora para comparar seiscentos vídeos com seiscentas mensagens de texto. Depois responda: o que a família precisa receber — e qual é o menor recurso que entrega isso?
</div>

<div data-widget="energia"></div>

## Precisa treinar de novo, ou basta orientar?

Tem uma decisão técnica que muda muito essa conta, e ela aparece cedo em qualquer projeto: *como eu faço o modelo se comportar do jeito que eu preciso?*

**Fine-tuning** é retreinar: rodar de novo o loop de treino para mexer nos pesos do modelo. Gasta computação pesada, exige dados bem preparados e pode piorar o que já funcionava — mexer em bilhões de pesos para ensinar uma coisa nova é um pouco como reformar a casa inteira para trocar um quadro de lugar.

**Engenharia de contexto** é orientar: você não toca nos pesos. Só organiza o que o modelo vai ler na hora — instruções, exemplos, documentos. Custa uma fração, é reversível e pode ser refeito em minutos.

Eu já treinei modelo assim, anos atrás. Hoje, para a esmagadora maioria dos casos que vejo em empresa e em sala de aula, contexto bem feito resolve. Gosto da frase que citei em [Ainda vale fazer fine-tuning?](/blog/pt/is-fine-tuning-still-worth-it/): *fine-tuning não é injetar conhecimento, é sobrescrever*. O [capítulo 8](/ia/contexto/) inteiro é sobre a alternativa.

## O que eu me pergunto antes de usar?

- **Qual é o menor modelo que resolve?** Resumir um e-mail não precisa do mais caro do catálogo.
- **Eu sei pedir de uma vez?** Dez tentativas vagas gastam mais que um pedido com contexto.
- **Isso vai se repetir?** Se a mesma tarefa vai rodar mil vezes, vale pedir um script e rodar o script ([capítulo 10](/ia/pedir-o-script/)). O script consome quase nada.
- **Precisa ser imagem ou vídeo?** É onde o consumo por pedido é mais alto.

<div class="g-box g-key" markdown="1">
**Para guardar:** não é sobre culpa por cada pergunta — é sobre proporção. A mesma lógica de não ir de carro até a padaria da esquina: a ferramenta certa, do tamanho certo, para o problema certo.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** quanto consome o que a organização já usa todo dia, sem ninguém ter feito a conta? Quem paga — em dinheiro, em energia, em água?
- **Um caminho para responder:** estimar a ordem de grandeza antes de decidir; começar pelo recurso mais simples e só subir de degrau se ele não resolver.
- **Peça nova no projeto:** mais uma regra para o projeto: o menor modelo que resolve.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — a conta da turma

Com a calculadora do capítulo, cada pessoa estima o próprio uso diário. Somem a turma, multipliquem pelo número de estudantes da instituição. Depois procurem: de onde vem a energia da sua cidade? Tem data center anunciado ou em construção no seu estado? Quem vai fornecer a água?

#### Perguntas de discussão

- Os números por prompt vêm das próprias empresas. O que você gostaria de ver auditado por alguém de fora?
- Se cada resposta fica mais eficiente, mas o uso total cresce mais rápido, o consumo cai ou sobe? (Procure por "paradoxo de Jevons".)
- Quem deveria decidir se um data center pode se instalar em uma região com pouca água?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- ALTMAN, Sam. **The gentle singularity**. [*S. l.*], 2025. Disponível em: <https://blog.samaltman.com/the-gentle-singularity>. Acesso em: 13 nov. 2026.
- INTERNATIONAL ENERGY AGENCY. **Energy and AI**. Paris: IEA, 2025. Disponível em: <https://www.iea.org/reports/energy-and-ai>. Acesso em: 13 nov. 2026.
- MARANHÃO FILHO, Éfrem. **Ainda vale fazer fine-tuning?**. [*S. l.*]: efrem.io, 21 ago. 2025. Publicado originalmente no LinkedIn. Disponível em: <https://efrem.io/blog/pt/is-fine-tuning-still-worth-it/>. Acesso em: 13 nov. 2026.
- O'DONNELL, James; CROWNHART, Casey. We did the math on AI's energy footprint. Here's the story you haven't heard. **MIT Technology Review**, Cambridge, MA, 20 maio 2025. Disponível em: <https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/>. Acesso em: 13 nov. 2026.
- VAHDAT, Amin; DEAN, Jeff. Measuring the environmental impact of AI inference. **Google Cloud Blog**, [*s. l.*], 21 ago. 2025. Disponível em: <https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference>. Acesso em: 13 nov. 2026.

*Notas:* Os valores por trás das ordens de grandeza do texto: 0,24 Wh e 0,26 ml por prompt de texto mediano (Vahdat; Dean, 2025); 0,34 Wh por consulta média (Altman, 2025); cerca de 3,4 milhões de joules para cinco segundos de vídeo, mais de 700 vezes uma imagem (O'Donnell; Crownhart, 2025); 415 TWh consumidos por data centers em 2024, perto de 1,5% da eletricidade mundial, com projeção de cerca de 945 TWh em 2030 (International Energy Agency, 2025).

</div>
