---
layout: post
categories: en
title: "Implementing gpt-5-mini with Lovable, Codex and Cursor Agents"
date: 2025-08-11
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7360629818171830272/"
portuguese_version: "../pt/2025-08-11-implementing-gpt-5-mini-with-lovable-codex-and-cursor-agents.md"
---

The last few days implementing gpt-5-mini in my projects were fun. Why that choice? Cost. BUT I suffered doing it with Lovable. I took the chance to test Codex and Cursor Agents.

First shock: dealing with "branches". Wow, my first attempt with Codex — which, ironically, doesn't use GPT-5, as far as I know — was a.... soap opera. It took me a good while to understand that the parallel tasks would work on different versions. My solution? Archive everything and do them one by one. It was actually better for understanding and being less "vibe coding".

I saw that no sh... nothing at all was coming out of it. I went to Cursor Agents. I went for the agents and not the IDE, partly because I used it on my phone while walking. The shell they built around the model really is incredible. I finally saw the power of the Lovable + Cursor combination. I found it incredible. Have you seen the meme where the model refactored everything, organized code, best practices implemented... but nothing worked? I felt that.

I went back to Lovable. After Cursor Agents cleaned up the whole mess Lovable and Codex had made, Lovable found its way again and then everything worked.

The fun fact is that the models were trained before gpt-5-mini and still don't know the Responses API. So they always go back to what they find online — chat completions + 4o. That's infuriating, but after insisting with Lovable, the tool got it.

Wow, it was a big fight, but I'm happy I won... for now. I asked Lovable to generate a document on how to implement it, then ran it through Gemini, and now I'll try using it to migrate another project. Good luck to me.

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7360629818171830272/) on August 11, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
