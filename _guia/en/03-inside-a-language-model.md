---
title: "Inside a language model"
description: "From text to number, from number to the next word. What happens between your question and the answer — and why is plausible not the same as true?"
lang: en
ref: inside-llm
order: 3
part: 1
permalink: /ai/inside-a-language-model/
interactive: "tokens + the next word"
piece: "the questions that never go out without the source attached"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 3

Lia asked an assistant why a student on the list had stopped going to school. She got three fluent, confident paragraphs, with likely causes and even a recommendation. Not one line said "I don't know." The student wasn't in any document the assistant could have read. Where did that answer come from?
</div>

The [previous chapter](/ai/how-machines-learn/) showed training with two weights and a straight line. A language model has billions of weights, but the question worth asking it is the same one you'd ask the line: *what goes in, what comes out, and what did it adjust to get there?*

This chapter doesn't ask for math. It asks you to follow a sentence from the moment it's typed until the answer shows up — and to stop at each step and ask what can go wrong there.

## What does the model receive when I write?

Not your sentence. The text is cut into pieces called **tokens** — sometimes a whole word, sometimes a piece of one — and each piece is swapped for a number.

<div data-widget="tokens"></div>

It's worth pausing here. If the model counts tokens and not words, what does that say about the limits on how long a conversation can be? And about the bill at the end of the month, when you're charged by usage?

## How does a number carry meaning?

On its own, it doesn't. Each token's number is just an address. What carries something is the next step: each token is swapped for a long list of numbers — a vector, like the ones in chapter 2. These vectors have a name: ***embeddings***.

Nobody wrote those numbers. They were adjusted during training, until tokens used in similar contexts ended up close to each other. "School" ends up near "college" and far from "screw" without anyone having taught it what a school is.

A question to take with you: if closeness comes from the training texts, what happens to the unfair associations that are in those texts? ([Chapter 4](/ai/bias/) is about that.)

## How does it know who "she" refers to?

Read: *"The student told the principal that she needed to work."* Who needed to work?

You worked it out by weighing the other words in the sentence and what you know about the world. The model does something similar, but only the first part: for each token, it calculates how much each of the others matters at that point. This mechanism is called **attention**, and the architecture built around it, [introduced in a paper that became a landmark](https://arxiv.org/abs/1706.03762), is the *Transformer*. To watch the machinery turn, at your own pace, I recommend two visits: the [3Blue1Brown video series](https://www.3blue1brown.com/topics/neural-networks) and the [Transformer Explainer](https://poloclub.github.io/transformer-explainer/), which shows each step on a real sentence.

Two practical consequences follow. The first: everything in the conversation can influence everything — including what you pasted in by accident. The second: the more text there is, the more that attention gets divided. That's the origin of the problem [chapter 8](/ai/context/) will deal with.

## So then it answers?

Not exactly. After all that, what the model produces is a list: for each possible token, the chance that it's the next one. One of them is drawn at random, goes into the sentence, and the process starts over — one token at a time, until the end.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** pick the sentence about the student. Before you draw, try it yourself: what word would come next? What would you need to know to get it right — and does the model know it?
</div>

<div data-widget="proxima"></div>

The control you just moved is called **temperature**. Low, the draw almost always lands on the most likely option; high, the unlikely ones get a turn. There is no "right" value: there is the question *does this task call for variety or repetition?*

Now go back to Lia's scene. The assistant didn't look up anything about that student. It continued the text with what usually comes after similar questions. Most of the time, what usually comes next and what is true coincide. When they don't, the name people give it is hallucination — but notice that the machine did exactly the same thing in both cases.

## If it's just the next word, why does it seem to understand?

That's the question that divides people far more qualified than I am, and I'm not going to settle it here. I can offer three angles for you to think about:

- To predict the next word well in a text about physics, it helps a lot to have captured something of physics. How much, nobody really knows how to measure.
- Fluency isn't evidence. We humans have always confused speaking well with knowing.
- The question "does it understand?" may be less useful, for the person using it, than "how do I check?"

## What do I do with this?

Not answers, but four questions that from now on go with you into every use:

1. **Was this in what I provided, or is it filling in?** If the answer depends on a fact about your organization and you didn't give it that fact, the answer was made up, and nicely written.
2. **How old is what it knows?** Training ended on some date. What came after, and what was never in public text, isn't in there.
3. **Do I need the same result every time?** If so, the draw is a problem — and the way out is in [chapter 10](/ai/ask-for-the-script/).
4. **Does it fit?** Everything is counted in tokens: what you write, what you attach, what it answers.

It's what I repeat in every training session: [before any sophisticated technique, the basics](/blog/en/before-rag-and-mcp-learn-the-basics/). Understanding how the model works, knowing how to choose one, and knowing what to put in the input solves most of the problems.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- Text becomes tokens, tokens become vectors, attention weighs them against each other, and out comes a list of chances for the next token.
- The model always continues the text. It has no separate mode for "I don't know."
- Plausible and true usually coincide. Checking is what covers the difference.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** when the assistant talks about my school system, is it reading or filling in? Can you tell the difference just by looking at the text?
- **A way to find the answer:** ask the same question twice and compare; ask "where did you get that?" and go check; separate the questions that depend on facts about the school system from the ones that don't.
- **New project piece:** the list of questions she never asks again without handing over the source along with them.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — the class as a model

Write the beginning of a sentence on the board ("The biggest problem in our city is…"). Each person writes down, without showing anyone, the next word. Tally the answers on the board: that's the distribution. Now draw one at random (with a die or an app), add it to the sentence, and repeat for five rounds. Then do it again, always choosing the one with the most votes. Compare the two texts.

#### Discussion questions

- Is the sentence the class produced "true"? Whose opinion does it express?
- If the class were made up only of people from one neighborhood, what would change in the distribution?
- In which tasks in your work do you want the draw? In which would it be unacceptable?
- How would you check an answer on a subject you don't know well?

</details>

<div class="g-fontes" markdown="1">

#### References

- 3Blue1Brown. (n.d.). *Neural networks* [Video series]. <https://www.3blue1brown.com/topics/neural-networks>
- Maranhão Filho, É. (2025, June 30). *Before RAG and MCP, learn the basics*. efrem.io. <https://efrem.io/blog/en/before-rag-and-mcp-learn-the-basics/>
- Polo Club of Data Science. (n.d.). *Transformer Explainer: LLM transformer model visually explained*. Georgia Institute of Technology. <https://poloclub.github.io/transformer-explainer/>
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). *Attention is all you need*. arXiv. <https://doi.org/10.48550/arXiv.1706.03762>

</div>
