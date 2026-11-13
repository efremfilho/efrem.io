---
layout: post
categories: pt
title: "Implementando o gpt-5-mini com Lovable, Codex e Cursor Agents"
date: 2025-08-11
lang: pt-BR
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7360629818171830272/"
english_version: "../en/2025-08-11-implementing-gpt-5-mini-with-lovable-codex-and-cursor-agents.md"
---

Foi divertido os últimos dias implementando o gpt-5-mini nos projetos. O porquê da escolha? Custo. MAS sofri fazendo com o lovable. Aproveitei para testar o codex e o cursor agents.

Primeiro impacto, lidar com "branches". Nossa, na primeira tentativa com o codex - que ironicamente não usa ogpt-5, pelo que ue saiba - foi uma....novela. Passei um bom tempo para entender que as tasks em paralelo iam trabalhar em versões diferentes. Minha solução? Arquiva tudo e faz uma a uma. Foi até melhor para entender e ser menos "vibe coding".

Vi que não tava saindo mer... coisa nenhuma. Fui pro cursor agents. Fui para o agents e não IDE, até pq usei pelo telefone enquanto caminhava. Realmente a casca que fizeram em torno do modelo é incrível. Finalmente vi o poder da combinação lovable + cursor. Achei incrível. Já viram o meme de que o modelo refatorou tudo, código organizado, melhores práticas implementadas...mas num funcionou nada? Senti isso.

Voltei pro Lovable. Depois do cursor agents limpar toda a zona que o Lovable e Codex fizeram, o Lovable se achou novamente e aí ficou tudo funcionando.

O fun fact é que os modelos foram treinados até antes do gpt-5-mini e desconhecem ainda a response API. Logo, sempre volta pro que encontra online - chat completation + 4o. Isso dá uma raiva, mas depois de insistir com a Lovable, a ferramenta entendeu.

Nossa, foi uma briga grande, mas tô feliz que ganhei...por enquanto. Pedi pro lovable gerar um documento de como implementar, joguei depois do Gemini e agora vou testar jogar para migrar outro projeto. Boa sorte para mim.

---

*Publicado originalmente no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7360629818171830272/) em 11 de agosto de 2025. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*
