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
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 10

Iara took the team's number to the education secretary: thirty-seven students with five absences in a row. In the afternoon, Caio asked the assistant the same question, just to check. Forty-one. Same list, same question, the same confidence in the answer. Bia wanted to know which of the two numbers the secretary was repeating at that very hour. Caio swore the problem was the model, and that a more capable one would fix it. Would it?
</div>

Ask an AI assistant the same thing twice and you get two different answers. Sometimes only the wording changes. Sometimes the number changes. That's not a defect: it's the normal behavior of a system that, as we saw in [chapter 3](/ai/inside-a-language-model/), rolls the dice on the most plausible continuation.

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
**Provocation:** run the experiment ten times. Which part of the team's work can vary from one day to the next with no problem — and which part never can?
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

Two cases where asking for the code changed what I was able to show.

In a project for a compliance team, the model read the whole regulation. When it was time to apply it, I didn't accept its reasoning: I had it generate the rule as code — if it goes from this state to that state, the tax is this one — and run it. The answer in text could be wonderful. I needed to show how it was reached.

The other one was live, in a training session. I asked for a data analysis with the instruction to run code, copied the generated code into another environment, and it redid the whole analysis, identically. Then I asked how the outliers had been found. The answer was in the code: it had just taken the five largest. No standard deviation, no criterion at all. Lazy, just like us. I complained out loud — and someone in the room reminded me that my own request said exactly "list the five largest." It was all there, for anyone who wanted to read it: the bad criterion, and whose it was.

## How do you decide?

Three quick questions before asking for anything:

1. **Is there a single right answer?** If so, ask for code.
2. **Will I do this again?** If so, ask for code and keep it.
3. **Will someone hold me accountable for the result later?** If so, ask for code — you'll want to show how you got there.

If all three answers are "no," go ahead and just chat. And many good tasks mix the two: the AI *interprets* the messy request (probabilistic) and calls a script to *execute* it (deterministic). A good agent is, at heart, that combination.

## And in a real product, how much of it is AI?

Less than it looks. In an insurance product I helped build, credit analysis was one giant spreadsheet passed from hand to hand by email. Today the person sends the documents, the process fetches what's missing, does the math, and returns the spreadsheet filled in. The people who used to analyze from scratch now review.

Only one little piece in there is AI: reading the balance sheet and the income statement, saying which account is an asset and which is a liability — painstaking work that arrives in a different format every time. The rest is code, code, code. It's exactness; I don't want anyone being creative there.

Most people try the opposite: build a bot that chats and solves everything. It's charming. At volume, it's very bad. I'd rather put the AI inside the process, only at the point where it's good.

<div class="g-box g-key" markdown="1">
**Keep this:** use AI to decide and to write; use code to calculate and to repeat. If the result has to be exactly the same every time, the answer isn't a better prompt — it's a script.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** if the number changes tomorrow, can anyone explain why? Who checks the script when the absence rule changes?
- **Paths on the table:**
  - *Caio:* switch to a more capable model and ask twice.
  - *Bia:* count by hand, the way it has always been done.
  - *Lia:* separate what is counting from what is drafting: ask the agent for the code that counts, and check it against ten cases counted by hand.
- **What the team did, for now:** the counting script, kept together with the ten test cases. And a difficult phone call to Iara.
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
