---
layout: post
categories: pt
title: "Capítulo 4: tomando uma surra do Lovable com Edge Functions"
date: 2025-04-14
lang: pt-BR
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7317493509672820736/"
english_version: "../en/2025-04-14-chapter-4-getting-beaten-up-by-lovable-and-edge-functions.md"
---

Capítulo 4 - tomando uma surra...e da grande do Lovable + Edge functions. ~15 horas depois finalmente avançando. Fazer back no Lovable é beeeem mais difícil que front.

Primeira tentativa, fazer um longo design docs (10 páginas) -> Não serviu de ~merda nenhuma~ muita coisa;

Desenhar e mandar o fluxo (já funcionou antes para os hooks), também não deu certo;

Desisti e abri o código, mexi uma coisas e depois pensei que deveria persistir no projeto;

Aprendi sobre os logs do edge funtion (demorei para entender), lidei com os erros de CORS e agora travou em loops com os erros que apresento dos logs do Supabase.

Tive um estalo, copiar os códigos e erros e jogar no chatgpt o3-mini. Funcionou! Destravei.

Agora pelo menos são novos erros. Parece que está andando de novo.

Nova lição: Deve ser mais rápido com uma pessoa dev + cursor, mas o foco aqui é na autonomia de uma pessoa de produto com uma IDE (no-code friendly).

Até agora o meu guia:

- PDR + imagens de referências ajudam muito (ênfase nas imagens)
- Refatore quando o time de devs (aka Lovable) pedir, ajuda bastante a deixar o código organizado ~e quebra um bocado de coisas tb~
- Dificuldade de explicar o fluxo em texto, desenhe. Funciona...em partes
- Peça para "logar" tudo tanto no front quanto no back
- Use algum modelo de "reasoning" quando travar para sair do loop que entra a sua "IDE para PMs/Designers".
- Peça para IDE explicar o que o o código do arquivo X faz, isso ajuda a entender como navegar nos arquivos.
- Peça para limpar o código desnecessário sempre que tiver uma grande mudança

É isso, perdendo essa até agora... Mas vai sair. Não achei que ia ser fácil, como há 10 anos não era o no-code. :)

---

*Publicado originalmente no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7317493509672820736/) em 14 de abril de 2025. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*
