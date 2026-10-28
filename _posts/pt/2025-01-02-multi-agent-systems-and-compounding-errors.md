---
layout: post
title: "Multiagentes e a conta dos erros que se acumulam"
date: 2025-01-02
lang: pt-BR
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7280655746743103489/"
english_version: "../en/2025-01-02-multi-agent-systems-and-compounding-errors.md"
---

Conversando com o Adrianno Esnarriaga - e como é bom conversar com quem tá implementando agentes - sobre a coisa mais doida que eu acho da discusão de multiagentes... O pessoal tá tentando replicar processos dentro de arquitetura de múltiplos agentes e não o contrário.

Falo isso pq temos decadas de desenvolvimento de sistemas - determinísticos - de processos e não apoveitamos disso. É muito mais simples ter uma arquitetura mais determinística definida dentro de uma ferramenta de processos do que tentar recriar isso no mundo #genAI.

Imagina... se o primeiro agente acerta 70%, que passa para um outro agente que acerta 90% e outro que acerta 98% esse sistema multiagentes vai acertar ~61% das vezes! (se eu ainda lembro de algo de probabilidade rsrs)

Bora deixar o mais "recetinha" o que não precisa de algo tão sofisticado? Se não, cria um "agentão" único e usa esse que vai ter uma taxa de acerto talvez maior. :)

---

*Publicado originalmente no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7280655746743103489/) em 2 de janeiro de 2025. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*
