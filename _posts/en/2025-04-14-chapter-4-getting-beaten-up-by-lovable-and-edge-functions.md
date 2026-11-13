---
layout: post
categories: en
title: "Chapter 4: getting beaten up by Lovable and Edge Functions"
date: 2025-04-14
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7317493509672820736/"
portuguese_version: "../pt/2025-04-14-chapter-4-getting-beaten-up-by-lovable-and-edge-functions.md"
---

Chapter 4 - taking a beating... a big one, from Lovable + Edge Functions. ~15 hours later, finally making progress. Doing back end in Lovable is waaay harder than front end.

First attempt: writing a long design doc (10 pages) -> It was good for ~absolutely nothing~ not much;

Drawing and sending the flow (it had worked before for the hooks) didn't work either;

I gave up and opened the code, changed a few things, and then thought I should persist with the project;

I learned about the edge function logs (it took me a while to understand), dealt with CORS errors, and now it got stuck in loops with the errors I present from the Supabase logs.

Then it clicked: copy the code and the errors and throw them into ChatGPT o3-mini. It worked! I got unstuck.

Now at least they're new errors. It seems to be moving again.

New lesson: it would probably be faster with a dev + Cursor, but the focus here is on the autonomy of a product person with a (no-code-friendly) IDE.

My guide so far:

- PRD + reference images help a lot (emphasis on the images)
- Refactor when the dev team (aka Lovable) asks; it helps a lot to keep the code organized ~and breaks a bunch of things too~
- Having trouble explaining the flow in text? Draw it. It works... partly
- Ask it to "log" everything on both the front end and the back end
- Use some "reasoning" model when you get stuck, to get out of the loop your "IDE for PMs/Designers" falls into.
- Ask the IDE to explain what the code in file X does; it helps you understand how to navigate the files.
- Ask it to clean up unnecessary code whenever there's a big change

That's it, losing this one so far... But it'll get done. I didn't think it would be easy, just as no-code wasn't 10 years ago. :)

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7317493509672820736/) on April 14, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
