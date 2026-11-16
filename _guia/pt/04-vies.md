---
title: "Quem fica esperando na nossa fila?"
subtitle: "Viés, critérios e consequências."
description: "O modelo não é preconceituoso nem neutro. Ele repete, com muita eficiência, o recorte de mundo que alguém entregou para ele."
lang: pt-BR
ref: bias
order: 4
part: 1
permalink: /ia/vies/
interactive: "monte o treino e veja o viés aparecer"
piece: "regra nº 1: nenhum rótulo de \"risco\" em estudante"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 4

O time já usava o rascunho de lista para discutir os contatos. Agora, a escolha da fila teria consequência fora da reunião. Caio tirou o modelo da gaveta para comparar a pontuação com a lista de visitas. Quase todo o noturno das escolas da periferia ficou vermelho, mesmo sem falta recente. "Isso pode estar mostrando onde falta apoio", disse. "Ou dizendo de novo quem a rede já espera que fracasse", respondeu Bia. Ela queria apagar a pontuação. Caio concordou em não mostrá-la como rótulo, mas perguntou quem entraria primeiro na lista: a ordem da planilha também escolhia gente. Lia propôs usar cinco faltas seguidas, uma regra que o time já tinha. Bia lembrou uma estudante com quatro. O rótulo saía da tela; a fila continuava. Quem ficaria esperando em cada uma dessas escolhas?
</div>

Todo mundo enxerga a realidade por uma fresta: a cultura em que cresceu, onde mora, o que viveu. Isso não é defeito de caráter, é condição humana — e tem nome: **viés humano**. O problema começa quando essa fresta vira dado de treino.

## Como um classificador aprende a errar?

O exemplo que eu mais uso em aula é bobo de propósito. Imagine que eu queira um classificador que diferencie ursos de cachorros. Monto meu conjunto de fotos com o que tenho à mão: ursos-negros e samoiedas (aqueles cachorros brancos e peludos).

O loop de treino do [capítulo 2](/ia/como-a-maquina-aprende/) faz o trabalho dele direitinho: procura a correlação mais fácil que separa os dois grupos. E a mais fácil é a cor. O modelo aprende, na prática, que **escuro = urso** e **claro = cachorro**.

Aí chega um labrador preto. O modelo responde, com toda a confiança: urso.

Ninguém programou esse erro. Ele saiu de uma sequência de escolhas inocentes:

1. **Viés humano** — eu não pensei em variação de cor.
2. **Curadoria dos dados** — o conjunto ficou só com ursos escuros e cachorros claros.
3. **Viés algorítmico** — o modelo associou cor à categoria e erra sistematicamente com quem ficou de fora.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** monte o treino no experimento até acertar os quatro. Depois responda: no modelo do Caio, o que seria a "cor do pelo" — a característica fácil, que parece explicar tudo e não explica?
</div>

<div data-widget="vies"></div>

Vale brincar com o experimento até perceber três coisas: dado enviesado gera modelo enviesado; característica boa **não** conserta dado ruim; e dado diverso, sozinho, também não resolve se a característica escolhida não faz sentido.

## Precisa de modelo para isso acontecer?

Não. O samoieda aparece em qualquer coleta. Um grupo de estudantes de uma turma minha queria validar um aplicativo de nutrição. Gente disciplinada, de academia. Mandaram o formulário para as amizades — do mesmo perfil — e para a família. Umas cem pessoas disseram que tinham interesse. Usaram três ou quatro, e só quando alguém lembrava.

Tem problema fazer pesquisa enviesada? Não, desde que você saiba que está enviesada. O problema é esquecer disso na hora de concluir — ou de treinar alguma coisa em cima.

## E quando o cachorro é uma pessoa?

Trocar urso e cachorro por gente é o que transforma um exemplo engraçado em problema sério.

**Saúde.** Sistemas que analisam imagens médicas erram mais em grupos que aparecem pouco nos dados de treino. Quando modelos de dermatologia foram testados em imagens com tons de pele diversos, o desempenho caiu de forma acentuada em relação aos testes originais, e todos foram piores em pele escura ([Daneshjou *et al.*, 2022](https://doi.org/10.1126/sciadv.abq6147)). Quando a equipe de saúde confia sem conferir, quem já era menos atendido recebe diagnóstico atrasado ou errado.

**Segurança pública.** Sistemas de análise facial erram de forma desigual. Em um estudo com produtos comerciais que classificam gênero pelo rosto, o erro para mulheres de pele escura foi dezenas de vezes maior que para homens de pele clara ([Buolamwini; Gebru, 2018](http://gendershades.org/overview.html)). Uma avaliação oficial de algoritmos de reconhecimento encontrou muito mais falsos positivos para rostos asiáticos e negros do que para rostos brancos ([NIST, 2019](https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software)). O erro tem consequência: um homem foi [preso na frente da família](https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest) por um furto que não cometeu, depois que um sistema apontou o rosto dele a partir de uma imagem borrada de câmera de segurança. O sistema errou; a polícia acreditou.

**Educação.** Sistemas de "alerta precoce" tentam prever quem vai abandonar a escola. Em um deles, que classificava estudantes pelo risco de não se formar no prazo usando notas, registros disciplinares, renda e raça, uma análise do próprio governo mostrou que o alarme falso era muito mais frequente para estudantes negras e negros do que para brancas e brancos — e as escolas que usavam o sistema [não tinham sido avisadas](https://themarkup.org/machine-learning/2023/04/27/false-alarm-how-wisconsin-uses-race-and-income-to-label-students-high-risk).

**Linguagem.** Modelos treinados principalmente na variedade "padrão" de um idioma tropeçam em dialetos, gírias e regionalismos. Um operário publicou uma foto ao lado de um trator com a legenda "bom dia" em árabe; a tradução automática de uma rede social devolveu "ataquem-nos". Ele foi preso e [interrogado por horas](https://www.theguardian.com/technology/2017/oct/24/facebook-palestine-israel-translates-good-morning-attack-them-arrest) antes de alguém perceber o erro — ninguém que falasse a língua tinha lido o texto original.

Nos quatro casos o padrão é o mesmo: um erro estatístico, previsível, encontrou uma pessoa que tratou a saída da máquina como verdade.

## Quem escolhe o que vai para a primeira página?

Na [conversa que inspirou esta discussão](https://www.youtube.com/watch?v=kziBrxxE0U0&t=1920s), Harari compara a recomendação de uma rede social à escolha da primeira página de um jornal. A pessoa que edita pode não ter escrito a história, mas escolheu dar destaque a ela. Um algoritmo que recomenda também interfere no que chega a quem lê. Aqui estamos falando de **sistemas de recomendação**, que não precisam ser IA generativa.

Essa analogia me interessa mais do que tratar Harari como autoridade em tudo o que diz sobre IA. Ela ajuda a enxergar uma escolha que desaparece atrás da palavra "algoritmo". Não precisa inventar uma mentira para ampliar seu alcance; selecionar, ordenar e repetir também têm consequência.

(Um alerta: direito e jornalismo não são a minha área. Uso a comparação para discutir responsabilidade ética e desenho de produto. Ela não prova que as regras jurídicas de uma plataforma e de um jornal sejam iguais.)

Volte ao painel do Caio. Mesmo sem escrever "alto risco", uma lista ordenada já põe alguém na primeira página. Se o objetivo for fazer mais visitas com menos deslocamento, quem mora longe pode ficar sempre para depois. Se for atender primeiro a situação mais grave, talvez o número de visitas caia. Qual objetivo o time escolheu? Quem ficou sem aparecer? E quem pode contestar a ordem?

## O que dá para fazer?

Eliminar viés não existe — todo conjunto de dados é um recorte. O que existe é reduzir, medir e avisar.

- **Se você cria** (treina modelo, monta base, configura um agente): procure quem está faltando nos dados; chame pessoas com vivências diferentes da sua para tentar quebrar o sistema; documente onde ele falha.
- **Se você usa**: em decisão que afeta a vida de alguém — saúde, justiça, crédito, emprego — a saída da IA é um palpite para ser conferido, não um veredito. E quando encontrar erro, reporte.


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** A pontuação pode reproduzir uma desigualdade; uma regra simples também deixa gente de fora. Quem percebe o erro quando ele aparece como ausência de atendimento?
- **Caminhos na mesa:**
  - *Caio:* usar a pontuação para sugerir visitas, com revisão do time. Pode antecipar apoio, mas também repetir as distorções dos registros.
  - *Bia:* priorizar os pedidos das escolas, sem pontuação por pessoa. Escuta quem conhece o caso, mas favorece as escolas que conseguem pedir ajuda.
  - *Lia:* começar pelas cinco faltas seguidas. É uma regra que o time consegue explicar, mas chegar ao limite pode ser tarde demais.
- **O que o time fez, por enquanto:** escreveu a regra nº 1: nenhum rótulo de "risco" em estudante. Deixou a pontuação fora da fila operacional e manteve, provisoriamente, o gatilho das cinco faltas. A estudante com quatro ainda dependia de alguém pedir uma exceção.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Recorte:** os dados representam algumas situações e deixam outras de fora.
- **Objetivo:** aquilo que o sistema foi ajustado para acertar influencia o que ele privilegia e o que ignora.
- **Decisão:** uma regra escrita também distribui espera e oportunidade. Tirar o modelo não elimina a escolha.

O que você precisaria saber para distinguir uma diferença relevante de um tratamento injusto?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Quem aparece nos seus exemplos e quem ficou de fora? Experimente um caso fictício que contrarie o perfil mais comum. A ordem, o texto ou a recomendação mudaram? Uma comparação dessas pode levantar uma suspeita; não certifica ausência de viés. Com quem você precisaria conversar antes de decidir o que mudar?

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (25 min) — auditoria relâmpago

Em grupos, escolham um sistema automatizado que afeta a vida da turma (seleção de currículos, análise de crédito, moderação de rede social, catraca com reconhecimento facial). Respondam em um cartaz: (1) com que dados isso provavelmente foi treinado? (2) quem aparece pouco nesses dados? (3) o que acontece com essa pessoa quando o sistema erra? (4) existe uma pessoa que pode reverter?

#### Perguntas de discussão

- No caso da prisão por reconhecimento facial, onde estava o erro: no algoritmo, nos dados ou na decisão de prender? Dá para separar?
- Um sistema com 99% de acerto é bom? Depende de quem está no 1%?
- Você já foi o "labrador preto" de algum sistema?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- AMERICAN CIVIL LIBERTIES UNION. **Williams v. City of Detroit**. [*S. l.*], atualizado em 28 jun. 2024. Disponível em: <https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest>. Acesso em: 13 nov. 2026.
- BUOLAMWINI, Joy; GEBRU, Timnit. Gender shades: intersectional accuracy disparities in commercial gender classification. **Proceedings of Machine Learning Research**, [*s. l.*], v. 81, p. 77-91, 2018. Disponível em: <https://proceedings.mlr.press/v81/buolamwini18a.html>. Acesso em: 13 nov. 2026.
- DANESHJOU, Roxana *et al.* Disparities in dermatology AI performance on a diverse, curated clinical image set. **Science Advances**, Washington, DC, v. 8, n. 32, eabq6147, 12 ago. 2022. DOI: <https://doi.org/10.1126/sciadv.abq6147>. Acesso em: 13 nov. 2026.
- FEATHERS, Todd. False alarm: how Wisconsin uses race and income to label students "high risk". **The Markup**, [*s. l.*], 27 abr. 2023. Disponível em: <https://themarkup.org/machine-learning/2023/04/27/false-alarm-how-wisconsin-uses-race-and-income-to-label-students-high-risk>. Acesso em: 13 nov. 2026.
- HARARI, Yuval Noah. **AI will create digital vassal states**. [*S. l.*]: YouTube, 8 nov. 2026. Conversa com Robert Guest no Forum 2000, em outubro de 2026. 1 vídeo (62 min). Disponível em: <https://www.youtube.com/watch?v=kziBrxxE0U0>. Acesso em: 15 nov. 2026.
- HERN, Alex. Facebook translates 'good morning' into 'attack them', leading to arrest. **The Guardian**, Londres, 24 out. 2017. Disponível em: <https://www.theguardian.com/technology/2017/oct/24/facebook-palestine-israel-translates-good-morning-attack-them-arrest>. Acesso em: 13 nov. 2026.
- NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY. **NIST study evaluates effects of race, age, sex on face recognition software**. Gaithersburg, 19 dez. 2019. Disponível em: <https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software>. Acesso em: 13 nov. 2026.

*Notas:* Os detalhes que o texto deixa de fora estão nas fontes. Dermatologia: queda de 27% a 36% no desempenho (Daneshjou *et al.*, 2022). Classificação de gênero: até 34,7% de erro para mulheres de pele escura e no máximo 0,8% para homens de pele clara, calculados a partir das acurácias publicadas (Buolamwini; Gebru, 2018). Reconhecimento facial: falsos positivos de 10 a 100 vezes maiores (NIST, 2019). A prisão é a de Robert Williams, em Detroit (ACLU, 2024). O sistema de alerta precoce é o do estado de Wisconsin, com 42 pontos percentuais de diferença no alarme falso (Feathers, 2023). O erro de tradução ocorreu no Facebook (Hern, 2017).

A analogia da primeira página aparece na conversa de Harari com Robert Guest (2026), aproximadamente nos minutos 32–33. O texto aproveita a comparação editorial para discutir responsabilidade ética. Não reproduz como conclusão jurídica a descrição que o entrevistado faz da legislação de plataformas.

</div>
