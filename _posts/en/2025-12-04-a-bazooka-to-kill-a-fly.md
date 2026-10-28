---
layout: post
categories: en
title: "When I brought a bazooka to kill a fly"
date: 2025-12-04
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7402326129568571394/"
portuguese_version: "../pt/2025-12-04-a-bazooka-to-kill-a-fly.md"
---

I tried to get MS Copilot to analyze some spreadsheets and it failed miserably. I don't blame the tool — I think it's already at a good level — the spreadsheet was really too complicated for that kind of agent.

The case: take a very raw export spreadsheet and lay it out across several tabs in a specific template.

What I gave it:

- About 3 pages of instructions detailing the process the person followed.
- The ability to generate spreadsheets and run code.

After I "improved" the prompt, it got much worse. With the more natural language the person had written, it worked much better. I was confused. I took it home. I ran several tests and there was no way. Sometimes it did the analysis right and got "lazy" about generating the resulting spreadsheet. Sometimes it just sent sample data.

I slept on the problem, and I think I found a reason and a way out. The reason is that the tool VERY LIKELY has an execution time limit... and very likely because of cost. Makes sense. On to another approach.

Instead of creating an agent, I realized this is really a more deterministic case. Man, I was being dumb. I asked one of the models (I won't say which because I don't remember, but it must have been Gemini) to generate the code to output the spreadsheet... bingo!

Now I have the code to run whenever I need it. The downside? It ended up much more "technical" than I wanted.

Every now and then we want a bazooka to kill a (fictional) fly... and everyone falls for it. :)

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7402326129568571394/) on December 4, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
