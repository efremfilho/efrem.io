---
title: "Real cases: what changed in my routine"
description: "Invoices, a screen redesign, document validation, a course built overnight, data analysis, and the bare minimum of programming worth learning."
lang: en
ref: cases
order: 16
part: 3
permalink: /ai/real-cases/
piece: "the live dashboard and the first analysis"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 16

With the dashboard working, Lia asked the question she had been putting off for a year: *on which day and in which shift (morning, afternoon, or night classes) do the absences pile up?* The heat map was ready in one conversation. The darkest patch was on Friday night. The map said where. Did it say why?
</div>

A principle without an example convinces no one. These are cases from my recent routine, chosen because each one illustrates an earlier chapter — and because in each one I learned something I didn't expect.

## 1. Can I trust what the AI learned about a subject I don't know well?

**Before:** every month I issue invoices in the city hall's system, which is how service invoices work in Brazil. Tedious, repetitive, and full of fields.

**After:** I open the site, allow that tab for the browser assistant, and ask for the month's invoices. It fills them in, I check and confirm.

**What I learned:** when a change in the law brought new fields into the system, I didn't know how to fill them in. I asked the AI to study the new rules and apply them. Before issuing anything, **I sent the result to my accountant**. It was right — and only then did it become routine.

AI got me ahead on a subject that isn't mine. What made me confident enough to use it was a human expert. Both things are true at the same time. ([Chapter 15](/ai/agents-on-a-leash/): access to a single tab.)

## 2. If building got easy, what got hard?

**Before:** in a product I work on, the tracking board took up a little more than half the screen; the rest was menu and frame. To open a detail, the person switched screens and lost the thread.

**After:** I described what bothered me and asked for alternatives. I tried out three ideas, actually working, in the development environment: drag and drop between columns, a side drawer with the item's summary, and a breadcrumb trail at the top for going back without getting lost. I sent the link to the team to try.

**What I learned:** the hard part wasn't building. It was realizing that each column of that board is used by a different team, so what shows up when you hover the mouse has to change from column to column. That's product knowledge, and no model guesses it. One of the three experiments I didn't like — and I rolled it back with one command, because everything was layered and versioned ([chapter 11](/ai/repository-as-memory/)).

Code got cheap. Knowing what to build didn't. I wrote more about this in [Product and UX have never mattered more](/blog/en/product-and-ux-have-never-mattered-more/).

## 3. Does "using AI" mean using just one model?

**Before:** a process that receives photos of ID documents. Reading the text from the image (good old OCR) is the easy part.

**After:** the system today combines three different things:

- **Generative AI** to read and interpret: is the whole document in the frame? Is there glare covering any field? Is it legible?
- **Classic vision algorithms**, which aren't generative, to look for tampering: odd edges, a photo pasted on top, signs of editing.
- **A deterministic lookup** in an official database to see whether the document number matches the name.

**What I learned:** "using AI" almost never means using *one* model. It means choosing the right technique for each piece — and, where an official source exists, checking the source instead of asking for an opinion ([chapter 10](/ai/ask-for-the-script/)). And since this is sensitive personal data, everything in [chapter 5](/ai/data-and-privacy/) applies: consent, minimum access, none of this goes into a test environment.

## 4. What needs to happen before you leave an agent working all night?

**Before:** I was asked for a gamified learning track for a course, inside the institution's learning platform. I knew what I wanted and didn't know how the platform did it.

**After:** I explained by voice what I wanted. The AI came back with a plan: what would be in lesson 1, in 2, in 3, how the scoring would work. I read it, adjusted it, and approved it. I left it working overnight. In the morning the lessons, the slides, and even the videos were there.

**What I learned:** two things. Order matters — **plan, approve, only then execute**. I wouldn't let anything run all night without having read the plan first. And constraints need to be said out loud: partway through, the agent warned me that the platform's version didn't support a feature and proposed an adaptation. A good agent doesn't hide a limitation; it tells you and offers an alternative.

## 5. What questions was I not asking because they took too much work?

**Before:** a business question that's easy to ask and a lot of work to answer — *at which stage of the process do proposals sit idle the longest?*

**After:** I asked the question in plain Portuguese. I got the mean and the median per stage over the last three months, the problems found in the data, heat maps showing which days of the week were short-staffed or overstaffed, the absence rate — and the Python code that generated it all, saved in the project.

**What I learned:** I didn't write a line of that code, and this is the kind of analysis that used to wait for "when there's time." It cost one conversation. The strongest effect isn't the savings: it's that **I stopped putting off questions**. When asking costs little, we ask more — and decide better.

## 6. Subscribe or build?

A habit I changed for good: before looking for an app to solve something, I ask the AI to build it. An expense-report spreadsheet that took three hours of someone's time becomes a request of a few minutes. A file converter, a form, a simple dashboard — all of that stopped being "which tool do I subscribe to?" and became "describe what you need."

I started talking about this in [Instead of looking for a SaaS…](/blog/en/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/). Today the rule is more honest: [I only pay for the SaaS I see value in, the rest I build](/blog/en/i-only-pay-for-saas-i-see-value-in/). Is it a service I need, one that speeds up my life? I pay, happily. Not worth it, and quick to replace with a little program? I build it with coding agents.

## 7. What if the meeting became raw material?

The simplest case and maybe the most useful: I record meetings (with everyone's knowledge), take the transcript, and use it as raw material. "Create a document with the rules we defined." "List the decisions and who got what." "What was left open?" I described the method in [this post](/blog/en/recording-calls-to-think-with-claude/).

This guide, by the way, was born that way: from recordings of my classes and from an hour-and-a-half conversation in which I showed a friend how I work.

## What about programming?

The question that always comes after these cases: *"so do I need to learn to program?"* Writing code, no. Understanding five concepts and the three layers of any piece of software, yes — that's the subject of [chapter 7](/ai/computational-thinking/).

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** fill in the four lines of "case 8," in the activity at the end of the chapter, with a task from your routine. Which of the four is the hardest to write?
</div>

<div class="g-box g-key" markdown="1">
**The pattern that repeats across the seven cases**

- I knew **what** I wanted and **why**. The "how" was delegated.
- There was always a human checkpoint before anything took effect: the accountant, the team, the approved plan.
- Where it could be deterministic, it was.
- The knowledge that made the difference wasn't technical: it was understanding the problem.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** is the Friday night patch about work, transportation, or something else? What does the data show, and what does it only suggest?
- **A way to find the answer:** take the map to the people who live that routine before drawing any conclusion; ask what else would explain the same pattern; agree on what to watch over the next few weeks.
- **New project piece:** the live dashboard and the first analysis.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (30 min) — your case 8

Each person picks a tedious, repetitive task from their own routine and fills in four lines: (1) what it is today; (2) what it could become; (3) who or what checks it before it takes effect; (4) which part should be deterministic. In groups of three, one presents and the other two look for the hole.

#### Discussion questions

- In the invoice case, what would have happened without the accountant? How would you know it went wrong?
- "I stopped putting off questions." What question about your work have you never asked because answering it was too much work?
- Of the five programming concepts, which one do you already use without knowing its name?

</details>

<div class="g-fontes" markdown="1">

#### References

- Maranhão Filho, É. (2025, July 21). *Instead of looking for a SaaS, I open ChatGPT, Gemini or Colab*. efrem.io. <https://efrem.io/blog/en/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/>
- Maranhão Filho, É. (2026, August 18). *Recording calls to think things through with Claude*. efrem.io. <https://efrem.io/blog/en/recording-calls-to-think-with-claude/>
- Maranhão Filho, É. (2026, November 11). *I only pay for the SaaS I see value in, the rest I build*. efrem.io. <https://efrem.io/blog/en/i-only-pay-for-saas-i-see-value-in/>
- Maranhão Filho, É. (2026, October 27). *Product and UX have never mattered more*. efrem.io. <https://efrem.io/blog/en/product-and-ux-have-never-mattered-more/>

*Notes:* The seven cases come from my work and teaching routine; names of people, clients and companies were left out. The change in legislation in case 1 is Brazil's tax reform.

</div>
