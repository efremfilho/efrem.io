---
layout: post
categories: en
title: "Multi-agent systems and the math of compounding errors"
date: 2025-01-02
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7280655746743103489/"
portuguese_version: "../pt/2025-01-02-multi-agent-systems-and-compounding-errors.md"
---

Talking with Adrianno Esnarriaga — and how good it is to talk with someone who's actually implementing agents — about what I find craziest in the multi-agent discussion... People are trying to replicate processes inside multi-agent architectures, and not the other way around.

I say this because we have decades of experience building — deterministic — process systems, and we're not taking advantage of it. It's much simpler to have a more deterministic architecture defined inside a process tool than to try to recreate it in the #genAI world.

Imagine... if the first agent is right 70% of the time and hands off to another agent that's right 90%, and then to another that's right 98%, this multi-agent system will be right about 61% of the time! (if I still remember anything about probability lol)

How about keeping whatever doesn't need anything that sophisticated as "recipe-like" as possible? Otherwise, build one single "big agent" and use that — its success rate may well be higher. :)

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7280655746743103489/) on January 2, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
