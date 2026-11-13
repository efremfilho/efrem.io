---
layout: post
categories: pt
title: "Semana 1 de estudos de IA: muita matemática, pouco para produto"
date: 2025-09-30
lang: pt-BR
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7378805080998834176/"
english_version: "../en/2025-09-30-week-1-of-ai-studies-a-lot-of-math.md"
---

Resumo da semana 1 de estudos. Muita matemática e pouca coisa útil para alguém de produto. Para uma pessoa de produto não faz muita diferença as aulas que assisti. A não ser que queria se aprofundar como AI Researcher.

Aqui vai o resumo do que consigo tirar para alguém de produto que queria entender (espero rsrs):

Sobre as áreas de aprendizagem de máquina:

Aprendizagem supervisionada - Você tem bastante dados e quer criar uma "fórmula" para prever/classificar novos dados.

Não supervisionada - tenta descobrir padrões ocultos nos dados. É uma tentativa de achar agrupamento de dados.

Aprendizagem por reforço - você pune ou recompensa Com base na tentativa. Esse é o que menos sei e menos lembro dos tempos da graduação.

Sobre os algoritmos:

Regressão linear - é o algoritmo mais simples e a tentativa é de simplificar para z = ax + by + e. A ideia é ter parâmetros associados de maneira linear (sem multiplicação). A ideia é que fica simples para ter um único mínimo global. Para isso, se coloca em uma função “que eleva ao quadrado” e transforma em uma parábola. Logo, fica só com um ponto mínimo. Qualquer coisa, procura imagens de funções quadráticas.

Regressão ponderada localmente - se não segue uma função linear, tenta-se quebrar em pedaços lineares as observações vizinhas. A ideia é olhar como se comportam as observações próximas e tentar aproximar de uma reta. É computacionalmente pesado fazer isso. Sabe quando a gente tenta colocar muitos lados em um polígono para se aproximar de um círculo? É mais ou menos a ideia aqui.

Regressão logística - a ideia é aproximar os dados de uma curva em S. A vantagem de transformar em uma curva logística (qualquer coisa procurar função logística) é que também só terá um máximo global e ajuda na classificação porque ficará um valor entre 0 e 1. Assim, podemos definir um limite e uma resposta de um lado será verdadeira e de outro falsa, por exemplo.

Isso vem muito do mundo da estatística e probabilidade. Agora como achamos esses máximos e mínimos globais - ou o mais perto de global que chegamos (mais para frente) é via algoritmos de otimização (que bebe muito da álgebra linear e cálculo).

A ideia é ter uma forma de interativamente conseguir achar esse ponto mínimo/máximo testando valores e seguindo algum algoritmo para mover para descer ou para subir. Quem já usou o solver em uma planilha e usa um algoritmo genético, faz algo parecido.

Quem quiser, vou juntar nesse documento a jornada - https://lnkd.in/dUns-m9d

Ela está aberta para comentários! Se falei alguma merda grande, só mandar :)

**Links**

- [Estudo IA -> GenAI](https://docs.google.com/document/d/12LPtKVMljsu7rh2Jclz2OfSh7OzOpbWHCZAQ6DLzM7M/edit)

---

*Publicado originalmente no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7378805080998834176/) em 30 de setembro de 2025. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*
