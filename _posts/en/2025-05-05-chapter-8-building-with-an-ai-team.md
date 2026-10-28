---
layout: post
categories: en
title: "Chapter 8: building with my AI team"
date: 2025-05-05
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7325132542460723201/"
portuguese_version: "../pt/2025-05-05-chapter-8-building-with-an-ai-team.md"
---

Chapter 8... It's much, muuuch harder to build now, with more complex services. Nothing unexpected, but now I need to start coming up with "tricks" to talk to my AI team.

Something that clicked while listening to Lenny's podcast with the founder of Cursor is where I'm getting stuck. The iterative nature of autocomplete, and of locating things in the code, helps a lot in giving the AI context. There's still no good alternative for that in chat-based programming.

Something has started to appear for pointing at the front-end elements you want to edit, but nothing yet that's visual, or that lets you pick something wired to the back end. That's where the tricks to unblock this should come in. I'll test a few this week.

One I can already share... my design docs — generated with ChatGPT's o3 — work worse than just writing things as a list. Oh, I got this idea from how o3 was generating instructions to fix the code.

Something like:

> - connect to the DB
> - call OpenAI to upload a file, taking it from variable such-and-such
> - create a vector store
> - attach the file
> - call the Responses API.

This was much better than a 10-page design doc.

Another adventure I had was migrating the services from the Assistants API to the Responses API using only the chat. Fun... let's say. I'll tell you more about the process later — there are still some things to migrate or delete.

To be continued...

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7325132542460723201/) on May 5, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
