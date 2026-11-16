---
title: "Why did each agent understand something different?"
subtitle: "Context and shared instructions."
description: "What came from training meets what you put in the window. Managing that context is central to asking well — and understanding what comes back."
lang: en
ref: context
order: 8
part: 2
permalink: /ai/context/
interactive: "build a context window + three prompts"
piece: "the project's instructions file"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 8

Three people, three agents, three behaviors. Caio's agent wrote "at-risk student" on every screen it generated: nobody had told it about rule no. 1. Bia's first request was "help me reduce school dropout," and back came ten bullet points, correct and useless, the same ones you'd find in any pamphlet. Lia overdid it the other way: she attached the school system's three-hundred-page manual, three sets of meeting minutes, and the whole spreadsheet, and got back, with total confidence, a procedure the school system had abandoned years earlier. Caio defended his result: "but my agent said this is better." Bia opened the screen and pointed to the label they had agreed to remove. Counting pages would not solve it: they needed purpose, current rules, and shared decisions. Where should those be written — and who would check that each agent was working from the same agreement?
</div>

If I had to pick a single idea for someone to take from this guide, it would be this: **don't count on the model guessing your project's decisions. Give it the context it needs, now.**

It brings patterns and knowledge from training, as we saw in [chapter 3](/ai/inside-a-language-model/). Knowing what the team decided yesterday is another matter. Product memory, files, and searches can bring that into the conversation. Using this information doesn't require changing the model's weights. When I say it 'only knows what's in the window,' I mean this specific context — not erasing what came from training.

## What does the model see when you ask?

The best image I know for this comes from Andrej Karpathy, who describes language models as a new kind of computer: **the model plays the role of the CPU, and the context window is the memory** — the RAM. ([The whole talk is worth watching](https://www.youtube.com/watch?v=LCEmiRjPEtQ).)

Think of the window as the task's workspace: instructions, documents, history, available tools, and what they returned. The RAM analogy helps us remember that material must be accessible. It has a limit: the model also brings what it learned during training. Context guides how that capability will be used here.

**Context engineering** is the name that stuck for the work of deciding what goes into that RAM. It's the natural evolution of prompt engineering: we used to polish a single instruction; now we manage everything the model sees over the course of a long task. When the term showed up, I [wasn't sure we needed yet another concept](/blog/en/context-engineering-do-we-need-another-concept/), but I've always argued for the idea behind it: the most important human skill right now is knowing how to communicate and hand over the right information and the right tools.

<figure class="g-board">
	<div class="g-board-title">Concept board · The window as RAM <span>What goes on the workbench and why chats get heavy</span></div>
	<div class="g-board-cols">
		<div class="g-board-box accent">
			<span class="g-board-kicker">1. The language computer (CPU × RAM)</span>
			<code class="g-board-math">CPU = Model (training weights, fixed during chat)
RAM = Context window (working desk)</code>
			<ul class="g-board-list">
				<li><strong>Instructions:</strong> goal, rules, and expected format.</li>
				<li><strong>Documents:</strong> current excerpts brought in for the task.</li>
				<li><strong>Tools:</strong> each connector's schema + what it returned.</li>
				<li><strong>History:</strong> everything said so far in that session.</li>
			</ul>
		</div>
		<div class="g-board-box warn">
			<span class="g-board-kicker">2. The turn snowball (full resend every time)</span>
			<code class="g-board-math">Turn 1: [Instruction + Msg 1] ──► Reply 1
Turn 2: [Instruction + Msg 1 + Reply 1 + Msg 2] ──► Reply 2
Turn N: [Everything since line 1 + old errors + Msg N]</code>
			<p>The model doesn't "remember" an open chat: on every send, the entire stack travels again. When you switch topics, old drafts and mistakes keep competing for attention and raising the cost of every reply.</p>
		</div>
	</div>
	<figcaption><strong>Board sources:</strong> LLM-as-OS (CPU vs. RAM) analogy by Andrej Karpathy (<em>Software Is Changing (Again)</em>, 2025), attention budget and instruction altitude by Anthropic (<em>Effective Context Engineering for AI Agents</em>, 2025), and long-window degradation measurements by Chroma (<em>Context Rot</em>, 2025).</figcaption>
</figure>

## Is more context better context?

Intuition says: "when in doubt, throw everything in." It's the most common mistake I see.

A dossier can contain the right contract and three old versions. Fitting everything on the desk doesn't settle which one applies. In models, **fitting in the window doesn't guarantee good use of every piece of information either**. An 'attention budget' is a [useful image for this concern](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), not a tank that loses a fixed amount per word.

Performance drops with larger contexts have been [measured on specific tasks and models](https://research.trychroma.com/context-rot), with variation between them. Both sources come from companies in this market, interested parties. That doesn't become a law that every large request performs worse. The job is organizing information: what applies, what is outdated, what is an instruction, and what is merely a document.

I've done the opposite: [I brought a long design document and got better results after organizing the request as a list of actions](/blog/en/chapter-8-building-with-an-ai-team/). Connect, retrieve information, use that variable, deliver the output. The problem wasn't the page count by itself. The list made it clearer what needed to happen and how one part depended on another.

That's what I mean when I [argue for knowing how to write](/blog/en/knowing-how-to-write-is-an-underrated-skill/): expressing the request and organizing ideas. It isn't about elegant prose. A request can be large; it needs an organization that helps the work.

An example from home. The assistant's memory was left on in an account that more people in my family use. It started thinking I was studying a field that isn't mine, stored planning that wasn't mine — and began answering me worse, because of context I never asked for. Agents are learning to cope with excess. Even so, too much context costs more than it needs to and can still get in the way. I'd rather give the whole context, every time, than let it try to guess.

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

They call it prompt engineering, context engineering. I have a bone to pick with the name. **To me, asking is closer to art:** choosing how to explain, experimenting, reading what came back, and changing the request. I don't have a formula that replaces that judgment.

(A warning: art and design are not my field, and I can't define either one very well. I'm only talking about the way I build. Not everything I make needs to have a function. It needs to exist in the world.)

That doesn't make engineering any less creative. Nor does it put art on the side of beauty and engineering on the side of usefulness. When you build, these things mix: imagining a solution, organizing how it works, and discovering what needs to change take creativity and judgment.

And when I talk about innovation here, I include bringing something to market, getting it to the people who will use it. Inventing is part of the conversation; making something exist in someone's life is too. A request has form and intent. That's why the way you explain matters so much — and why I insist on reading what came back.

If I had to rank what goes into a request:

1. **What I want.** The goal, spelled out. It's what weighs the most, by far.
2. **Context.** The story behind it, the documents, what a person on the other side would already know.
3. **Examples.** A few good ones, of the kind of answer I expect.
4. **How to think about the problem.** The steps, when the order matters.
5. **Output format.** When what comes back goes to another program, and not to my eyes.

That order changes as the models change. Giving the model a role ("you are an expert in...") used to weigh a lot and today weighs little. And instructions written for an older model, full of caution and step-by-step, now get in the way: it's tying a better model to what the previous one needed. I've been using fewer and fewer ready-made instructions.

A case of missing context. One semester I told the class that the assignments would be graded with AI. The class quickly figured out you could hand in the previous week's assignment and get full marks: the AI only checked whether it was correct. Nobody had told it what week we were in.

And asking is half of it. The other half is reading what came back to decide the next request.

## Can you rehearse a conversation with someone who isn't in the room?

Listening to the people who use what you build is the most important part of building anything, and the hardest to get: people have no room in their schedule and, when they do, they often answer what they think you want to hear. A designer I worked with had the idea before I did: she took the transcripts of real interviews and asked an assistant to continue the conversation in the role of that person. Today I use the same technique to rehearse before a difficult conversation.

It works better than I expected. Sometimes it yields more than the interview, because the persona isn't embarrassed to answer. But it has limits I don't forget: it is far nicer than any client; it's a plausible continuation, not a person ([chapter 3](/ai/inside-a-language-model/)); and it doesn't replace talking to real people — it complements it. A question I ask myself more and more: does the person who gave the interview know that what they said is still being used?

User-experience researchers reran real studies with synthetic participants and found the answers shallow and overly favorable ([Rosala & Moran, 2024](https://www.nngroup.com/articles/synthetic-users/)): good for raising hypotheses, not for deciding. Meanwhile, the co-founder of a company that sells exactly this kind of research — an interested party, of course — replies that research exists to reduce risk and decide better, not to follow a method, and that many people criticize it without having tried it. Even he doesn't recommend betting the company on a synthetic answer: he talks about finding the point where it speeds things up, and what should stay with people only ([Alves, 2026](https://www.youtube.com/watch?v=W87q8M9Gl-0)). Both land close to what I lived: it complements, it doesn't replace.

## Who is reading the request?

And teachers aren't immune. In a training session for colleagues, I set an exercise. The group pasted the instruction the tool generated, without reading it, and was surprised by the format of the answer. Someone summed it up better than I could: we did exactly what we criticize students for.

## What about day to day?

- **I explain the why, not just the what.** "Keep it short because the person is reading on their phone between two meetings" works better than "keep it short."
- **I separate the parts.** Markdown headings or tags like `<context>` help the model not mix up instructions and documents.
- **I bring only the excerpt.** Instead of the 300-page manual, the three pages that matter. If I don't know which ones those are, that's my first request: "find the passages about X."
- **I start a new conversation when the subject changes.** The model doesn't hold an open conversation in its head: every time you send a new message, the entire history of that session is resent from the very first line. By the 99th message, the conversation has become expensive, slow, and stuck on its own earlier mistakes. If I need to carry something forward, I ask for a summary and paste it at the start of a clean conversation.
- **I turn on few tools.** Every connector takes up space in the window just by existing. And I keep an eye on the meter the tool shows: when a session goes past two-thirds of the window, I'm already thinking about closing it and starting another.
- **I keep the context outside the conversation.** Everything I don't want to explain again becomes a file in the project's repository, which is the subject of [chapter 11](/ai/repository-as-memory/).


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** what is obvious to the team and isn't written down anywhere? How do you notice there's too much context? Do long instructions protect or get in the way?
- **Paths on the table:**
  - *Caio:* minimal instructions, with a goal and limits. That leaves room to solve the problem, but more choices for the agent to infer.
  - *Bia:* keep rules and examples in the request. That exposes exceptions, but increases the work of updating and finding what matters.
  - *Lia:* summarize what someone needs to know on arrival. That makes reading easier, but puts the choice of what can disappear in the hands of whoever summarizes.
- **What the team did, for now:** a shared instructions file. Lia prepared the short version and Caio tested it with the agent; Bia asked them to preserve the origin of the rules. The short version went into use before that review was complete.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Context:** the material available for that response; it differs from what the model learned during training.
- **Project memory:** stored decisions only help if they are found and brought into the current work.
- **Instruction:** goals, examples, and limits guide the task. Fitting in the window does not guarantee everything will be used well.

How can two agents using the same model produce different responses for the same project?

</div>

<div class="g-project" markdown="1">

## What about your project?

What decision have you already needed to explain twice to the agent? Write it in the project instructions, with the reason and an example. Open a new conversation and request a change that depends on it. Did the result respect the decision? If not, was the issue finding the instruction, understanding the rule, or resolving a contradiction?

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

- Alves, H. (2026, February 21). *Let's get real about synthetic users* [Video]. Interview by J. Knight. One Knight in Product. <https://www.youtube.com/watch?v=W87q8M9Gl-0>
- Anthropic. (2025, September 29). *Effective context engineering for AI agents*. <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>
- Chroma. (2025, July 14). *Context rot: How increasing input tokens impacts LLM performance* [Technical report]. <https://research.trychroma.com/context-rot>
- Karpathy, A. (2025, June 18). *Software is changing (again)* [Video]. Y Combinator. <https://www.youtube.com/watch?v=LCEmiRjPEtQ>
- Maranhão Filho, É. (2025, July 3). *Context engineering: do we need another concept?*. efrem.io. <https://efrem.io/blog/en/context-engineering-do-we-need-another-concept/>
- Maranhão Filho, É. (2025, May 5). *Chapter 8: building with my AI team*. efrem.io. <https://efrem.io/blog/en/chapter-8-building-with-an-ai-team/>
- Maranhão Filho, É. (2026, February 12). *Knowing how to write is an underrated skill*. efrem.io. <https://efrem.io/blog/en/knowing-how-to-write-is-an-underrated-skill/>
- Rosala, M., & Moran, K. (2024, June 21). *Synthetic users: If, when, and how to use AI-generated "research"*. Nielsen Norman Group. <https://www.nngroup.com/articles/synthetic-users/>
- Sanderson, G. (2024, August 31). *How might LLMs store facts* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/mlp/>

*Notes:* The CPU-and-memory line paraphrases the passage where Karpathy compares LLMs to an operating system. Anthropic (2025) is the source for "attention budget", the "right altitude", and the principle of the smallest set of high-signal tokens. The context rot measurement is from Chroma (2025). The distinction between contextualized representations and patterns learned in parameters also draws on Sanderson (2024), in the MLP lesson. The "attention budget" is treated here as practical guidance; the Chroma study does not establish a fixed loss per token for every model or task.

The persona rehearsal case is the author’s account; the original idea came from a designer he worked with. Rosala and Moran (2024) discuss limits of synthetic research. In the interview, Alves (2026) discusses risk reduction (minute 4), limits for critical decisions (17), and complementing real people (52). He co-founded a company selling this research.

</div>
