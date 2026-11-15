---
title: "Context is everything"
description: "The model only knows what's in the window. Managing what goes in there, and what stays out, is the most important skill for anyone using AI today."
lang: en
ref: context
order: 8
part: 2
permalink: /ai/context/
interactive: "build a context window + three prompts"
piece: "the project's instructions file"
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 8

Three people, three agents, three behaviors. Caio's agent wrote "at-risk student" on every screen it generated: nobody had told it about rule no. 1. Bia's first request was "help me reduce school dropout," and back came ten bullet points, correct and useless, the same ones you'd find in any pamphlet. Lia overdid it the other way: she attached the school system's three-hundred-page manual, three sets of meeting minutes, and the whole spreadsheet, and got back, with total confidence, a procedure the school system had abandoned years earlier. Too little doesn't work; too much doesn't either. And what the team decided last week, none of the three agents knew. Where should that be written down?
</div>

If I had to pick a single idea for someone to take from this guide, it would be this: **the model doesn't know you, doesn't remember yesterday, and knows nothing about your project. It only knows what is written in the window, right now.**

Everything that looks like memory, personality, or "it already gets me" is someone — you or the product — putting text back into that window.

## What does the model see when you ask?

The best image I know for this comes from Andrej Karpathy, who describes language models as a new kind of computer: **the model plays the role of the CPU, and the context window is the memory** — the RAM. ([The whole talk is worth watching](https://www.youtube.com/watch?v=LCEmiRjPEtQ).)

A computer's CPU only processes what has been loaded into RAM. The model only reasons about what has been loaded into the context: your instructions, the attached documents, the conversation history, the descriptions of the tools it can use, the results from those tools. All of it is measured in *tokens* (pieces of words) and competes for the same space.

**Context engineering** is the name that stuck for the work of deciding what goes into that RAM. It's the natural evolution of prompt engineering: we used to polish a single instruction; now we manage everything the model sees over the course of a long task. When the term showed up, I [wasn't sure we needed yet another concept](/blog/en/context-engineering-do-we-need-another-concept/), but I've always argued for the idea behind it: the most important human skill right now is knowing how to communicate and hand over the right information and the right tools.

## Is more context better context?

Intuition says: "when in doubt, throw everything in." It's the most common mistake I see.

Language models work by relating each token to all the others. The more stuff in the window, the thinner that attention gets spread. Some people call this the **attention budget**: it's finite, and every new token spends a little of it. When the budget runs out, you get what has come to be called ***context rot***, the drop in performance that [has already been measured](https://research.trychroma.com/context-rot) as the input grows. The model forgets an instruction from the beginning, mixes up documents, repeats what it already did. It doesn't "freeze" — it just gets gradually worse.

That's where the practical principle comes from: look for **the smallest set of high-signal tokens** that gets the task done.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** build a context window for Lia's question. What would you take out first — and how do you know it won't be missed?
</div>

<div data-widget="contexto"></div>

## What is the right altitude for an instruction?

A [piece on context engineering for agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) has an idea that changed the way I write instructions: there is a **right altitude**, a "Goldilocks" zone between two mistakes.

<div data-widget="tabs" data-title="Three ways to ask for the same thing" data-sub="The task: an assistant that answers employees' questions about expense reimbursement." markdown="1">

#### Too rigid

```
IF the question contains "taxi" AND amount < 80 THEN answer "Approved".
IF the question contains "taxi" AND amount >= 80 THEN answer "Needs approval".
IF the question contains "car service" THEN treat it as "taxi".
IF the question contains "lunch" AND it is a business day THEN ...
(36 more rules)
```

It looks safe and it's fragile. All it takes is someone writing "rideshare" or "I paid for a ride" and no rule fires. You're trying to program in plain English — real code exists for that.

#### Too vague

```
You are a helpful assistant. Help employees with reimbursements.
Be polite and accurate.
```

It assumes a ton of context the model doesn't have: what is the policy? What are the limits? What should it do when in doubt? It will fill the gaps with whatever is *plausible*. In other words, it will make things up.

#### Just right

```
<context>
You help company employees with questions about expense reimbursement.
The current policy is in <policy>. The people asking are usually in a
hurry and want to know: can I or can't I, and what is the next step.
</context>

<instructions>
1. Answer based only on the policy. Cite the item you used.
2. If the policy doesn't cover the case, say so clearly and point to
   who approves exceptions. Do not estimate amounts or deadlines.
3. Start with the answer; explain afterward, in up to three sentences.
</instructions>

<policy>
(only the relevant excerpts from the policy)
</policy>
```

It explains the situation and the goal, gives criteria instead of cases, says what to do when it doesn't know, and separates the parts with clear markers. Short — and every line does work.

</div>

## Is asking engineering or art?

They call it prompt engineering, context engineering. I have a bone to pick with the name — and saying the opposite, that "it's art," doesn't settle it either. That split was a way we invented to interpret the world; creativity exists on both sides. I prefer a cut I learned from design people: there are things that exist to be beautiful, or simply to exist, and things that exist to be useful. It's close to the difference between invention and innovation: one thing is coming into existence, another is someone using it. When form and function meet, even better.

(A warning: art and design are not my field, and I can't define either one very well. I'm only talking about the way I build. Not everything I make needs to have a function. It needs to exist in the world.)

Asking an AI lives where those two meet. It has function — I want a result — and it has form: the way you explain changes what comes back. That's why knowing psychology, philosophy, and pedagogy helps more than knowing computing. In the end, it's explaining something well to someone who just arrived.

If I had to rank what goes into a request:

1. **What I want.** The goal, spelled out. It's what weighs the most, by far.
2. **Context.** The story behind it, the documents, what a person on the other side would already know.
3. **Examples.** A few good ones, of the kind of answer I expect.
4. **How to think about the problem.** The steps, when the order matters.
5. **Output format.** When what comes back goes to another program, and not to my eyes.

That order changes as the models change. Giving the model a role ("you are an expert in...") used to weigh a lot and today weighs little. And instructions written for an older model, full of caution and step-by-step, now get in the way: it's tying a better model to what the previous one needed. I've been using fewer and fewer ready-made instructions.

A case of missing context. One semester I told the class that the assignments would be graded with AI. The class quickly figured out you could hand in the previous week's assignment and get full marks: the AI only checked whether it was correct. Nobody had told it what week we were in.

And asking is half of it. The other half is reading what came back to decide the next request.

## What about day to day?

- **I explain the why, not just the what.** "Keep it short because the person is reading on their phone between two meetings" works better than "keep it short."
- **I separate the parts.** Markdown headings or tags like `<context>` help the model not mix up instructions and documents.
- **I bring only the excerpt.** Instead of the 300-page manual, the three pages that matter. If I don't know which ones those are, that's my first request: "find the passages about X."
- **I start a new conversation when the subject changes.** Old history is noise. If I need to carry something forward, I ask for a summary and paste it at the start of the new one.
- **I turn on few tools.** Every connector takes up space in the window just by existing. And I keep an eye on the meter the tool shows: when a session goes past two-thirds of the window, I'm already thinking about closing it and starting another.
- **I keep the context outside the conversation.** Everything I don't want to explain again becomes a file in the project's repository, which is the subject of [chapter 11](/ai/repository-as-memory/).

<div class="g-box g-key" markdown="1">
**Key takeaways**

- The context window is the model's RAM: finite and fought over.
- Too much context degrades the answer (*context rot*). High signal, little noise.
- A good instruction sits at the right altitude: not a list of `if-then` rules, and not "be helpful."
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** what is obvious to the team and isn't written down anywhere? How do you notice there's too much context? Do long instructions protect or get in the way?
- **Paths on the table:**
  - *Caio:* minimal instructions: state the goal and let the agent work.
  - *Bia:* write down every rule, with an example of each.
  - *Lia:* write as if for someone smart who started today, and cut whatever doesn't change the answer.
- **What the team did, for now:** a project instructions file, just one, that all three agents read. Short. For now.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (30 min) — the intern who started today

Each pair picks a real task from their work. First they write the request the way they would send it to an AI today. Then they rewrite it imagining they're handing the note to a very smart person who **started today** and doesn't know the company, the project, or the audience. Compare the two versions and run both in the same tool.

#### Discussion questions

- What was "obvious" in your head and wasn't on paper?
- In the widget, why does the whole manual make the answer worse if the right information is in there?
- What is the difference between giving a rule and giving a criterion?

</details>

<div class="g-fontes" markdown="1">

#### References

- Anthropic. (2025, September 29). *Effective context engineering for AI agents*. <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>
- Chroma. (2025, July 14). *Context rot: How increasing input tokens impacts LLM performance* [Technical report]. <https://research.trychroma.com/context-rot>
- Karpathy, A. (2025, June 18). *Software is changing (again)* [Video]. Y Combinator. <https://www.youtube.com/watch?v=LCEmiRjPEtQ>
- Maranhão Filho, É. (2025, July 3). *Context engineering: do we need another concept?*. efrem.io. <https://efrem.io/blog/en/context-engineering-do-we-need-another-concept/>

*Notes:* The CPU-and-memory line paraphrases the passage where Karpathy compares LLMs to an operating system. Anthropic (2025) is the source for "attention budget", the "right altitude", and the principle of the smallest set of high-signal tokens. The context rot measurement is from Chroma (2025).

</div>
