---
title: "What AI is (and what it isn't)"
description: "Two words clear up almost all the confusion: autonomy and adaptivity. And a calculator helps show what gets left out."
lang: en
ref: what-is-ai
order: 1
part: 1
permalink: /ai/what-is-ai/
interactive: "quiz: is it AI or not?"
piece: "the team's tool list: follows a rule or learns?"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 1

Lia coordinates an outreach project at a civil society organization: going after teenagers who have stopped showing up at school, before dropping out becomes permanent. Four people for twelve schools. At a meeting with the city's education department, a vendor presented "an AI that predicts who will drop out." The whole room nodded. Lia wrote a question in the corner of her notebook and didn't have the courage to ask it: *does this learn anything, or is it the absence spreadsheet under another name?*
</div>

Every intro class I teach starts the same way: someone says "the AI decided," "the AI wanted," or "the AI understood." Before we talk about tools, I have to take that sentence apart. I'm not being picky. Anyone who thinks the machine *wanted* something stops looking for the human who made the choice.

## Can you define AI in two words?

"Artificial intelligence" is an umbrella term, and nobody agrees 100% on a definition. To get work done, I use the one from the open course [Elements of AI](https://course.elementsofai.com/1/1), from the University of Helsinki, which holds up well in practice. A system deserves to be called AI when it has two characteristics:

- **Autonomy**: it can carry out tasks in complex environments without someone guiding every tiny step.
- **Adaptivity**: its performance improves as it processes more data. It learns from experience.

Notice what is **not** in the definition: consciousness, intention, understanding, will. None of that is required, and none of it exists in the systems we use today.

## Is a calculator intelligent?

A pocket calculator is an impressive machine. In an instant it does math that would take me minutes. And still it isn't AI, for two reasons:

1. **It isn't autonomous.** It only does what each key tells it to, in the order you press them. It doesn't weigh context, and it doesn't decide the next step.
2. **It isn't adaptive.** After ten calculations or ten million, it is exactly the same. It doesn't notice that you always calculate a 15% tip, and it doesn't get better at anything.

A spreadsheet full of formulas is the same thing at a larger scale: fixed rules, written by someone, run the same way every time.

| | Systems with AI | Systems without AI |
|---|---|---|
| **Examples** | Spam filter, movie recommendations, text assistants | Calculator, spreadsheet with formulas, menu-based chatbot |
| **Autonomy** | Weighs the context and carries out multi-step tasks | Executes one human command at a time |
| **Adaptivity** | Adjusts its behavior based on data | Always does the same thing; doesn't change with use |
| **Where the behavior comes from** | It is *learned* from examples | It is *written* rule by rule |

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** in the quiz, ask of each item the question Lia didn't ask: does this follow a rule someone wrote, or did it learn from data? How would you find out, if nobody told you?
</div>

<div data-widget="quiz-ia"></div>

## Why does this distinction matter?

Because it changes the question you ask when something goes wrong.

In a system without AI, the error is in a rule: someone wrote the wrong formula, you find the cell and fix it. In a system with AI, the behavior came from the **data** and from the **choices of whoever set up the training**, and nobody can point to "the line" where the error lives. That explains a good part of the next chapters: [how the learning works](/ai/how-machines-learn/), [where bias comes from](/ai/bias/), and why [the responsibility never belongs to the machine](/ai/responsible-generalist/).

It also changes what you should expect. A system that learns from examples is great in situations similar to the ones it has seen and unpredictable in the ones it has never seen. It doesn't "know" that it doesn't know.

<div class="g-box g-key" markdown="1">
**Keep this:** AI isn't magic, it's applied math guided by human choices. Autonomy and adaptivity describe *what the system does*; neither one implies consciousness or intention.
</div>

## What about conversation assistants?

They pass both tests, with one detail that confuses a lot of people. Their adaptivity happened **during training**: billions of texts adjusted the model before it ever reached you. During your conversation, the model isn't relearning anything. It only uses what is written in the conversation window. When it seems to have "remembered" you, it's because someone (you or the product) put that information back into the context. This detail matters so much that it got a whole chapter: [Context is everything](/ai/context/).

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** if it learned from data, whose data? If it's a rule, who wrote it — and can I read it?
- **A way to find the answer:** ask for a demo with a case she knows well; ask what happens when the system gets it wrong and who fixes it; look at the tools the team already uses and separate the ones that follow a rule from the ones that learn.
- **New project piece:** the list of tools the team already uses, sorted into "follows a rule" and "learns."
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (15 min)

Ask each person to list five technologies they used today before lunch. In pairs, classify each one using the two criteria. The goal isn't to get it right. It's to discuss the borderline cases (the thermostat, the spell checker, the smart traffic light).

#### Discussion questions

- If a system is autonomous but not adaptive, who answers for its mistakes? What if it's adaptive?
- Why do we say "the AI decided" and never "the spreadsheet decided"? What does that choice of words hide?
- Is a system that learned from data from five years ago and was never updated again still adaptive?

</details>

<div class="g-fontes" markdown="1">

#### References

- University of Helsinki & MinnaLearn. (n.d.). *How should we define AI?* Elements of AI. <https://course.elementsofai.com/1/1>

*Notes:* The course's original definitions: autonomy is "the ability to perform tasks in complex environments without constant guidance by a user"; adaptivity is "the ability to improve performance by learning from experience."

</div>
