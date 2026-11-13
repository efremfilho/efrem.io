---
title: "Viés: do nosso recorte para dentro do algoritmo"
description: "O modelo não é preconceituoso nem neutro. Ele repete, com muita eficiência, o recorte de mundo que alguém entregou para ele."
lang: pt-BR
ref: bias
order: 4
part: 1
permalink: /ia/vies/
interactive: "monte o treino e veja o viés aparecer"
piece: "regra nº 1: nenhum rótulo de \"risco\" em estudante"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 4

Pesquisando sistemas parecidos, Lia leu sobre um que classificava estudantes pelo "risco" de não se formar. Uma avaliação mostrou que ele errava muito mais com um grupo do que com outro, sempre para o mesmo lado. Ela pensou nas escolas da periferia da sua rede. Quem carregaria o rótulo de "alto risco" desde o primeiro dia de aula?
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
**Provocação:** monte o treino no experimento até acertar os quatro. Depois responda: no sistema que ofereceram à Lia, o que seria a "cor do pelo" — a característica fácil, que parece explicar tudo e não explica?
</div>

<div data-widget="vies"></div>

Vale brincar com o experimento até perceber três coisas: dado enviesado gera modelo enviesado; característica boa **não** conserta dado ruim; e dado diverso, sozinho, também não resolve se a característica escolhida não faz sentido.

## E quando o cachorro é uma pessoa?

Trocar urso e cachorro por gente é o que transforma um exemplo engraçado em problema sério.

**Saúde.** Sistemas que analisam imagens médicas erram mais em grupos que aparecem pouco nos dados de treino. Quando modelos de dermatologia foram testados em imagens com tons de pele diversos, o desempenho caiu de forma acentuada em relação aos testes originais, e todos foram piores em pele escura ([Daneshjou *et al.*, 2022](https://doi.org/10.1126/sciadv.abq6147)). Quando a equipe de saúde confia sem conferir, quem já era menos atendido recebe diagnóstico atrasado ou errado.

**Segurança pública.** Sistemas de análise facial erram de forma desigual. Em um estudo com produtos comerciais que classificam gênero pelo rosto, o erro para mulheres de pele escura foi dezenas de vezes maior que para homens de pele clara ([Buolamwini; Gebru, 2018](http://gendershades.org/overview.html)). Uma avaliação oficial de algoritmos de reconhecimento encontrou muito mais falsos positivos para rostos asiáticos e negros do que para rostos brancos ([NIST, 2019](https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software)). O erro tem consequência: um homem foi [preso na frente da família](https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest) por um furto que não cometeu, depois que um sistema apontou o rosto dele a partir de uma imagem borrada de câmera de segurança. O sistema errou; a polícia acreditou.

**Educação.** Sistemas de "alerta precoce" tentam prever quem vai abandonar a escola. Em um deles, que classificava estudantes pelo risco de não se formar no prazo usando notas, registros disciplinares, renda e raça, uma análise do próprio governo mostrou que o alarme falso era muito mais frequente para estudantes negras e negros do que para brancas e brancos — e as escolas que usavam o sistema [não tinham sido avisadas](https://themarkup.org/machine-learning/2023/04/27/false-alarm-how-wisconsin-uses-race-and-income-to-label-students-high-risk).

**Linguagem.** Modelos treinados principalmente na variedade "padrão" de um idioma tropeçam em dialetos, gírias e regionalismos. Um operário publicou uma foto ao lado de um trator com a legenda "bom dia" em árabe; a tradução automática de uma rede social devolveu "ataquem-nos". Ele foi preso e [interrogado por horas](https://www.theguardian.com/technology/2017/oct/24/facebook-palestine-israel-translates-good-morning-attack-them-arrest) antes de alguém perceber o erro — ninguém que falasse a língua tinha lido o texto original.

Nos quatro casos o padrão é o mesmo: um erro estatístico, previsível, encontrou uma pessoa que tratou a saída da máquina como verdade.

## O que dá para fazer?

Eliminar viés não existe — todo conjunto de dados é um recorte. O que existe é reduzir, medir e avisar.

- **Se você cria** (treina modelo, monta base, configura um agente): procure quem está faltando nos dados; chame pessoas com vivências diferentes da sua para tentar quebrar o sistema; documente onde ele falha.
- **Se você usa**: em decisão que afeta a vida de alguém — saúde, justiça, crédito, emprego — a saída da IA é um palpite para ser conferido, não um veredito. E quando encontrar erro, reporte.

<div class="g-box g-key" markdown="1">
**Para guardar:** o modelo não tem opinião. Ele tem os dados que recebeu e as características que alguém escolheu. Toda vez que você ouvir "o algoritmo é neutro", troque por "o algoritmo é consistente" — consistente inclusive nos erros.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** um alerta errado custa o quê, e para quem? E um alerta que não veio? Dá para ajudar sem rotular?
- **Um caminho para responder:** listar quem aparece pouco nos dados da rede; comparar, escola por escola, quantos alertas viraram ajuda de verdade; decidir com a equipe se o sistema vai mostrar pessoas ou situações.
- **Peça nova no projeto:** a regra nº 1 do projeto, escrita pela equipe: nenhum rótulo de "risco" em estudante.
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
- HERN, Alex. Facebook translates 'good morning' into 'attack them', leading to arrest. **The Guardian**, Londres, 24 out. 2017. Disponível em: <https://www.theguardian.com/technology/2017/oct/24/facebook-palestine-israel-translates-good-morning-attack-them-arrest>. Acesso em: 13 nov. 2026.
- NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY. **NIST study evaluates effects of race, age, sex on face recognition software**. Gaithersburg, 19 dez. 2019. Disponível em: <https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software>. Acesso em: 13 nov. 2026.

*Notas:* Os detalhes que o texto deixa de fora estão nas fontes. Dermatologia: queda de 27% a 36% no desempenho (Daneshjou *et al.*, 2022). Classificação de gênero: até 34,7% de erro para mulheres de pele escura e no máximo 0,8% para homens de pele clara, calculados a partir das acurácias publicadas (Buolamwini; Gebru, 2018). Reconhecimento facial: falsos positivos de 10 a 100 vezes maiores (NIST, 2019). A prisão é a de Robert Williams, em Detroit (ACLU, 2024). O sistema de alerta precoce é o do estado de Wisconsin, com 42 pontos percentuais de diferença no alarme falso (Feathers, 2023). O erro de tradução ocorreu no Facebook (Hern, 2017).

</div>
