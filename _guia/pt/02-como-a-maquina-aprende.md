---
title: "Como a máquina aprende"
description: "Estudar para a prova, transformar o mundo em números e errar um pouco menos a cada volta. É só isso — repetido bilhões de vezes."
lang: pt-BR
ref: how-machines-learn
order: 2
part: 1
permalink: /ia/como-a-maquina-aprende/
interactive: "desenhe pixels e treine um modelo"
piece: "o que a planilha tem × o que a equipe sabe"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 2

A empresa mandou a lista de "variáveis do modelo": faltas, notas, idade, distância até a escola. Lia leu duas vezes. Faltava o que ela escuta toda semana nas visitas: quem arrumou trabalho, quem ficou em casa cuidando dos irmãos, quem engravidou. Nada disso estava na planilha. Para o modelo, então, existia?
</div>

Eu dou aula para gente de administração, direito, políticas públicas, saúde. Ninguém ali precisa saber derivar uma função. Mas todo mundo precisa sair sabendo **o que acontece** quando alguém diz que "treinou um modelo", porque é aí que moram as decisões humanas.

## Aprender, para uma máquina, é como estudar para uma prova?

Pense em como você se prepara para uma prova:

| Você estudando | Aprendizado de máquina |
|---|---|
| Seu cérebro, antes de estudar | O **modelo**, ainda sem treino |
| Anotações, livros, exercícios resolvidos | Os **dados** de treino |
| Estudar: revisar, testar, corrigir | O **treinamento** |
| Você, depois de estudar, diante de questões inéditas | O **modelo treinado** |

A analogia funciona para a estrutura e quebra em um ponto essencial. Você aprende conectando o conteúdo com a sua vida: experiências, emoções, causa e efeito. A máquina não tem vida para conectar. Ela encontra **correlações estatísticas** entre números e devolve probabilidades. Não há compreensão ali — há uma conta muito bem ajustada.

## Como o mundo vira número?

Para um modelo, não existe "foto de cachorro". Existe uma lista de números. As propriedades mensuráveis que usamos para descrever algo — cor, tamanho, textura, formato — chamam-se **características** (*features*, em inglês).

Em uma imagem preto e branco, a tradução é direta: pixel branco vira `0`, pixel preto vira `1`. Uma imagem de 8×8 vira uma lista de 64 números. Essa lista é o **vetor de características**.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** desenhe na grade e veja o desenho virar número. Depois responda: o que da vida de uma pessoa não cabe em uma coluna? E o que acontece com o que não cabe?
</div>

<div data-widget="pixels"></div>

Com um vetor, cada coisa vira um **ponto** em um espaço matemático. E aí aparece a ideia mais bonita desse assunto: nesse espaço, **proximidade significa semelhança**. Duas imagens parecidas viram pontos vizinhos. É por isso que um sistema consegue dizer que "gato" está perto de "felino" e longe de "geladeira" sem saber o que é nenhum dos três.

Quem decide quais características entram? Pessoas — direta ou indiretamente. Guarde isso para o [capítulo 4](/ia/vies/).

## O que acontece em cada volta do treino?

Com os dados em números, o treino é um ciclo de quatro passos:

1. **Calcular um palpite.** O modelo multiplica cada característica por um **peso** (o quanto ela importa) e soma um ajuste fixo, o **viés** matemático (*bias*): `palpite = pesos × características + ajuste`. No começo os pesos são chutes.
2. **Medir o erro.** Compara o palpite com a resposta certa. A distância entre os dois é o **erro** (ou *loss*).
3. **Ajustar a equação.** Mexe um pouquinho em cada peso, na direção que diminui o erro.
4. **Repetir.** Milhões, bilhões de vezes, com exemplos diferentes.

Não tem passo 5. Não tem "e então o modelo entende". No experimento abaixo o modelo tem só dois números para ajustar, e dá para ver o aprendizado acontecendo.

<div data-widget="treino"></div>

<div class="g-box g-warn" markdown="1">
**Duas palavras, dois sentidos.** O "viés" da equação acima é só um número de ajuste, sem nada de moral. O **viés algorítmico** do capítulo 4 é outra coisa: é quando o modelo erra sistematicamente contra alguém. Mesma palavra, assuntos diferentes — isso confunde até quem é da área.
</div>

## E em um modelo de linguagem, o que muda?

Quase nada na ideia, quase tudo na escala. Um modelo como os que estão por trás dos assistentes de conversa tem bilhões de pesos em vez de dois, e a "prova" dele é sempre a mesma: *dado este trecho de texto, qual é o próximo pedaço?* Ele chuta, mede o erro, ajusta, repete — com uma parte enorme do que a humanidade já escreveu.

O resultado é um sistema extraordinariamente bom em continuar textos de forma plausível. "Plausível" e "verdadeiro" coincidem na maior parte das vezes. Quando não coincidem, chamamos de alucinação — que não é um defeito esquisito, é a mesma máquina fazendo a mesma coisa.

<div class="g-box g-key" markdown="1">
**Para guardar**

- Máquinas não processam conceitos; processam vetores de números.
- Treinar é ajustar pesos para diminuir um erro medido. Só isso.
- O modelo minimiza distância até as respostas dos dados de treino. Se os dados forem tortos, ele aprende o torto com muita competência.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** quem escolheu essas colunas, e para que elas serviam quando foram criadas? Dá para registrar o motivo de uma ausência sem expor a família?
- **Um caminho para responder:** pôr lado a lado o que a planilha tem e o que a equipe sabe; para cada item que falta, perguntar se deveria virar dado, quem o coletaria e com que cuidado.
- **Peça nova no projeto:** duas listas lado a lado: o que a planilha tem e o que a equipe sabe.
</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — o modelo humano

Distribua 10 cartões com frutas desenhadas (ou projete fotos). Peça que a turma escolha **apenas duas características numéricas** (ex.: tamanho de 1 a 5, quão vermelha de 1 a 5) e posicione cada fruta em um plano cartesiano no quadro. Depois apresente uma fruta nova e peça para classificarem só pela vizinhança. Discuta quais frutas ficaram "erradas" e que característica faltou.

#### Perguntas de discussão

- Na analogia da prova, o que seria "decorar o gabarito"? (É o *overfitting*: ir bem no treino e mal no mundo.)
- Quem escolheu as características do seu modelo de frutas? O que essa escolha deixou de fora?
- Se o modelo só reduz erro em relação aos exemplos, o que acontece quando os exemplos estão errados?

</details>
