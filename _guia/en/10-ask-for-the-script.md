---
title: "Don't ask for the answer, ask for the script"
description: "AI is probabilistic; code is deterministic. Knowing when to use each is what separates playing around from a process you can trust."
lang: en
ref: deterministic
order: 10
part: 2
permalink: /ai/ask-for-the-script/
interactive: "same question, ten times"
piece: "the counting script, with ten test cases"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 10

Lia pasted in the week's list, with codes already in place of names, and asked how many students had five absences in a row. Thirty-seven. She asked again, just to check. Forty-one. Both answers came with the same confidence. Which of the two would she take to the meeting?
</div>

Ask an AI assistant the same thing twice and you get two different answers. Sometimes only the wording changes. Sometimes the number changes. That's not a defect: it's the normal behavior of a system that, as we saw in [chapter 2](/ai/how-machines-learn/), rolls the dice on the most plausible continuation.

For writing an email, great — variety is welcome. For adding up this month's reimbursement spreadsheet, it's a problem.

## Is all work the same kind of work?

**Probabilistic**: each run can come out different. This is generative AI's natural mode. It shines where there's no single right answer: drafting, summarizing, interpreting a confusing request, proposing alternatives, reading a messy document.

**Deterministic**: same input, same output, every time. This is code's natural mode. It shines where there's only one right answer: adding, filtering, converting, moving a file, applying a tax rule.

The classic mistake is using the first to do the second's job. I've fallen for it myself: I spent days trying to get an agent to reorganize a complicated spreadsheet before I realized the case was deterministic and asked for the code — I told the story in [When I brought a bazooka to kill a fly](/blog/en/a-bazooka-to-kill-a-fly/). I recorded a pretty rough video about this a while back — [deterministic vs. probabilistic agentic processes](/blog/en/deterministic-vs-probabilistic-agentic-processes/) — and the idea has only become more important since.

There's a bit of math that helps you remember why. If you chain three probabilistic steps that get it right 70%, 90%, and 98% of the time, the chain as a whole gets it right [close to 61%](/blog/en/multi-agent-systems-and-compounding-errors/) of the time. Every step that becomes deterministic code drops out of that multiplication.

## What if the AI wrote the code instead of the answer?

This is the big shift in using AI "as code" instead of "as chat." Instead of asking:

> Add up the amount column in this spreadsheet.

I ask:

> Write a script that adds up the amount column in this spreadsheet, run it, and show me the result.

In the first case, the model *estimates* a total. In the second, it uses the part it's really good at — writing a short program — and the one doing the math is the computer, which doesn't get sums wrong.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** run the experiment ten times. Which part of Lia's work can vary from one day to the next with no problem — and which part never can?
</div>

<div data-widget="dado"></div>

The difference in practice:

| | Ask for the answer | Ask for the script |
|---|---|---|
| **Result** | Can vary every time | Identical every time |
| **Checking** | Every run | Once: you check the script |
| **A thousand repetitions** | A thousand calls to the model | One script running a thousand times, almost for free |
| **Audit** | "That's what it said" | The code is there for anyone who wants to read it |
| **Cost and energy** | Proportional to use | Practically zero once it's built |

## Where do I use this?

- **Removing the background from an image.** I could ask an image model to "redraw it without the background" and hope it doesn't touch the rest. I'd rather ask for a script that cuts out the background: whatever isn't background stays untouched, pixel by pixel.
- **Data analysis.** When I ask for the median time things sit idle at each stage of a process, I don't want the model to "guess" the median. I want the Python code that calculates it, the charts that code generates, and the file saved in the project so I can run it again next month.
- **Routines.** Tasks that repeat become scripts kept in a *runbooks* folder in the repository. Next time, the agent doesn't reinvent anything: it runs what already exists.

This is the opposite of needing to know how to program. I don't write these scripts — I describe what I need, read what was done, and check the result. What changed is that expertise now arrives in a format I can read: the agent explains, in plain language, what the script does and why. Knowing this option exists changes what you ask for. I talked about getting over the fear of it in [Product people: don't be afraid of a script](/blog/en/product-people-dont-be-afraid-of-a-script/).

## How do you decide?

Three quick questions before asking for anything:

1. **Is there a single right answer?** If so, ask for code.
2. **Will I do this again?** If so, ask for code and keep it.
3. **Will someone hold me accountable for the result later?** If so, ask for code — you'll want to show how you got there.

If all three answers are "no," go ahead and just chat. And many good tasks mix the two: the AI *interprets* the messy request (probabilistic) and calls a script to *execute* it (deterministic). A good agent is, at heart, that combination.

<div class="g-box g-key" markdown="1">
**Keep this:** use AI to decide and to write; use code to calculate and to repeat. If the result has to be exactly the same every time, the answer isn't a better prompt — it's a script.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** if the number changes tomorrow, can I explain why? Who checks the script when the absence rule changes?
- **A way to find the answer:** separate what is counting from what is drafting; ask for code to do the counting; check it against ten cases counted by hand; keep the ten cases to check again.
- **New project piece:** the counting script, kept together with the ten test cases.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — the same question

Everyone in the class pastes the same small table (20 rows) into an assistant and asks for the average of one column, without mentioning code. Write the answers on the board. Then do it again, asking "write and run code that calculates it." Compare the spread.

#### Discussion questions

- List five tasks from your job. Which ones have a single right answer?
- Is a legal opinion deterministic or probabilistic? What about the deadline calculation inside it?
- If you can't read the script, how do you check that it's right? (Hint: test cases with a known answer.)

</details>

<div class="g-fontes" markdown="1">

#### References

- Maranhão Filho, É. (2025, December 4). *When I brought a bazooka to kill a fly*. efrem.io. <https://efrem.io/blog/en/a-bazooka-to-kill-a-fly/>
- Maranhão Filho, É. (2025, January 15). *Product people: don't be afraid of a script*. efrem.io. <https://efrem.io/blog/en/product-people-dont-be-afraid-of-a-script/>
- Maranhão Filho, É. (2025, January 2). *Multi-agent systems and the math of compounding errors*. efrem.io. <https://efrem.io/blog/en/multi-agent-systems-and-compounding-errors/>
- Maranhão Filho, É. (2025, October 28). *Testing a new format: deterministic vs. probabilistic agentic processes*. efrem.io. <https://efrem.io/blog/en/deterministic-vs-probabilistic-agentic-processes/>

</div>
