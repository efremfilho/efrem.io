---
title: "Why did the same list produce two numbers?"
subtitle: "Determinism, scripts, and reproducibility."
description: "When the result must follow a rule, ask for code that runs that rule. Repeating the calculation helps; checking what it counts is still your job."
lang: en
ref: deterministic
order: 10
part: 2
permalink: /ai/ask-for-the-script/
interactive: "same question, ten times"
piece: "the counting script, with ten test cases"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 10

Iara took the number Lia sent to the education secretary: thirty-seven students with five consecutive absences. That afternoon, checking the same list, Caio got forty-one from the assistant. Instead of asking for another number, he requested the counting code and set aside cases to check by hand. Bia read the script's explanation: "does this count enrollments or people? There are transfers on this list." The code repeated the calculation; the question was still open. Lia wanted to correct the report before the next meeting. Iara needed to know what she could claim now. Waiting for a better rule also had a cost — but did repeating a number give it any certainty?
</div>

During a live training session, I complained about the agent's work. I asked for a data analysis with the instruction to run code, copied the generated code into another environment, and it redid the whole analysis, identically. Then I asked how the outliers had been found. The answer was in the code: it had just taken the five largest. That didn't justify calling the values outliers. I was already thinking the agent was lazy, just like us. I complained out loud — and someone in the room reminded me that my own request said exactly "list the five largest." It was all there, for anyone who wanted to read it: the bad criterion, and whose it was.

The code put the mistake in plain sight. It just wasn't the mistake I expected to find. That's why asking for the script helps: I can check the procedure, including when it faithfully carries out a bad idea of mine.

Ask an AI assistant the same thing twice and you may get two different answers. Sometimes only the wording changes. Sometimes the number changes. That's not a defect: it's the normal behavior of a system that, as we saw in [chapter 3](/ai/inside-a-language-model/), rolls the dice on the most plausible continuation.

For writing an email, great — variety is welcome. For adding up this month's reimbursement spreadsheet, it's a problem.

## Is all work the same kind of work?

**Probabilistic**: each run can come out different. This is generative AI's natural mode. It shines where there's no single right answer: drafting, summarizing, interpreting a confusing request, proposing alternatives, reading a messy document.

**Deterministic**: with the same input, rule, and execution conditions, the result repeats. That's what we seek in a script for adding, filtering, or applying a defined rule. Not every program works that way: it may consult information that has changed or include randomness. And AI itself is software. The useful distinction is between generating an answer and running a procedure we can inspect.

I [tried reorganizing an exported spreadsheet into several tabs of an existing template](/blog/en/a-bazooka-to-kill-a-fly/). I gave the agent detailed instructions. Sometimes the analysis arrived but the spreadsheet didn't; sometimes it returned only example data. "Improving" the request even made the result worse. When I asked for code to perform the transformation, I got the output and kept a routine I could run again. It still ended up more technical than I wanted. But it no longer depended on another attempt to interpret the same work each time.

That's what I seek when I ask for the script: **turning a defined rule into a procedure I can inspect, run, and reproduce**. A deterministic routine repeats its result given the same inputs and conditions. When next month's spreadsheet arrives, I want to apply the same rule to the new input, rather than ask the agent to invent again how to reorganize it. I also recorded a [video about deterministic and probabilistic processes](/blog/en/deterministic-vs-probabilistic-agentic-processes/).

A bit of math helps explain the problem. In a simplified example, if three independent steps must all succeed and do so 70%, 90%, and 98% of the time, the whole chain succeeds [close to 61%](/blog/en/multi-agent-systems-and-compounding-errors/) of the time. Real processes can have related errors, so multiplying isolated rates isn't enough. Replacing a step with verifiable code helps control a source of variation; it doesn't automatically make that step 100% accurate.

## What if the AI wrote the code instead of the answer?

This is the big shift in using AI "as code" instead of "as chat." Instead of asking:

> Add up the amount column in this spreadsheet.

I ask:

> Write a script that adds up the amount column in this spreadsheet, run it, and show me the result.

In the first case, if the assistant merely generates the number as text, I have no calculation to inspect. It may also decide to use a tool on its own; I need to look at what it did. The second request makes the procedure I want to check and reuse explicit. Code can add up the wrong column perfectly. The advantage is having the rule in view so I can locate the error, correct it, and run it again. **Reproducibility gives me a way to check; checking is what lets me trust that use.**

Reproducing a run requires keeping its input and the version of the procedure too. If it queries a changing database, uses randomness, or asks the model for a fresh interpretation, keeping the code file alone isn't enough to expect the same result. The question is: which part has been made deterministic, and what conditions does it depend on?

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** run the experiment ten times. Which part of the team's work can vary from one day to the next with no problem — and which part never can?
</div>

<div data-widget="dado"></div>

The difference in practice:

| | Generate the result as text | Run a defined script |
|---|---|---|
| **Result** | Can vary every time | Repeatable under the same conditions |
| **Checking** | Check the claim and its basis | Test the rule; revalidate when data or conditions change |
| **Repetitions** | New generation every time | Reuse of the procedure |
| **Audit** | The answer alone doesn't show how it was reached | The code makes the procedure inspectable |
| **Cost and energy** | Includes using the model | Execution still has a cost, but may avoid further model calls |

## Is the chart the delivery or the first question?

In [another exercise I proposed](https://efrem.io/panorama/), the group receives a spreadsheet of contracts, asks for code for an analysis, and uses the data to build a dashboard. A chart of contract statuses already offers a first thing to look at. The exercise outline reaches the screen; using it opens further questions.

What decision does this chart help someone make? If another spreadsheet arrives, can you redo the analysis using the same criterion? Where is the code that produced the numbers? Keeping the routine lets you return to the procedure when a new input brings a surprise. And the decision might call for a notification or a task list instead of the dashboard that looked so interesting at the start.

## Where do I use this?

- **Removing the background from an image.** I could ask an image model to "redraw it without the background" and hope it doesn't touch the rest. I'd rather ask for a script that cuts out the background: whatever isn't background stays untouched, pixel by pixel.
- **Data analysis.** When I ask for the median time things sit idle at each stage of a process, I don't want the model to "guess" the median. I want the Python code that calculates it, the charts that code generates, and the file saved in the project so I can run it again next month.
- **Routines.** Tasks that repeat become scripts kept in a *runbooks* folder in the repository. Next time, the agent doesn't reinvent anything: it runs what already exists.

This is the opposite of needing to know how to program. I don't write these scripts — I describe what I need, read what was done, and check the result. What changed is that expertise now arrives in a format I can read: the agent explains, in plain language, what the script does and why. Knowing this option exists changes what you ask for. I talked about getting over the fear of it in [Product people: don't be afraid of a script](/blog/en/product-people-dont-be-afraid-of-a-script/).

Beyond that classroom analysis, there was a project where asking for the code changed what I was able to show.

In a project for a compliance team, the model read the whole regulation. When it was time to apply it, I didn't accept its reasoning: I had it generate the rule as code — if it goes from this state to that state, the tax is this one — and run it. The answer in text could be wonderful. I needed to show how it was reached.

## What questions was I not asking because they took too much work?

There was a business question that was easy to ask and a lot of work to answer: *at which stage of the process do proposals sit idle the longest?* I asked the question in plain Portuguese and told the agent to write and run the code. I got the mean and the median per stage over the last three months, the problems found in the data, heat maps showing which days of the week were short-staffed or overstaffed, the absence rate — and the Python script that generated it all, saved in the project.

I didn't write a line of that code, and that was the kind of analysis that used to wait for "when there's time." It cost one conversation. The strongest effect isn't the savings: it's that **I stopped putting off questions**. When asking costs little, we ask more — and have more opportunities to check our interpretations.

## How do you decide?

Three questions help separate the work:

1. **Do I have a defined rule for calculating, transforming, or checking?** Ask for a script that executes it and lets you inspect how.
2. **Will I apply the same rule to other inputs?** Keep the routine, an example input, and the expected result. That lets you repeat without rediscovering the process.
3. **Am I missing information or a decision?** A deadline may be in a contract; choosing a problem to tackle may require discussion. Having a correct answer to discover doesn't make every question a programming task.

Many tasks combine both: the model interprets the request or a document; code executes the defined rules. When results differ, that separation helps investigation: did the input, rule, or environment change, or was there a new interpretation?

## And in a real product, how much of it is AI?

Less than it looks. In an insurance product I helped build, credit analysis was one giant spreadsheet passed from hand to hand by email. Today the person sends the documents, the process fetches what's missing, does the math, and returns the spreadsheet filled in. The people who used to analyze from scratch now review.

Only one little piece in there is AI: reading the balance sheet and the income statement, saying which account is an asset and which is a liability — painstaking work that arrives in a different format every time. The rest is code, code, code. It's exactness; I don't want anyone being creative there.

Most people try the opposite: build a bot that chats and solves everything. It's charming. At volume, it's very bad. I'd rather put the AI inside the process, only at the point where it's good.

In the projects I build, that design usually follows four stages:

1. **Fetch and prepare data in code:** query the sources, join the tables, and clean what arrived, deterministically.
2. **Apply the deterministic ruler first:** everything that already has an exact rule (dates, thresholds, required fields) is filtered by a script, without spending tokens.
3. **Call AI only where there is ambiguity:** read a document that arrives in a different format every time, classify open-ended text, or disambiguate two similar records.
4. **Check the output with code and hand it over for a human decision:** the system validates that the AI output respects the format and business limits before showing it on screen to whoever approves.

<figure class="g-board">
	<div class="g-board-title">Architecture board · The hybrid sandwich <span>Code fencing AI where the math must not vary</span></div>
	<div class="g-board-flow">
		<div class="g-board-step"><strong>1. [Code] Ingest</strong>Fetches from APIs, joins tables, and cleans formats</div>
		<div class="g-board-step"><strong>2. [Code] Fixed ruler</strong>Filters and sums everything with an exact rule (zero tokens)</div>
		<div class="g-board-step"><strong>3. [AI] Ambiguity</strong>Reads open text, non-standard statements, or gray-zone cases</div>
		<div class="g-board-step"><strong>4. [Code + Human] Gate</strong>Script audits the AI output and hands it over for human review</div>
	</div>
	<div class="g-board-note">
		<strong>Why it works at scale:</strong> if 80% of cases are settled in stage 2 by a deterministic rule, you only pay tokens, latency, and ambiguity review on the 20% that genuinely require interpretation.
	</div>
	<figcaption><strong>Board source:</strong> the author's production hybrid-process architecture (Maranhão Filho, <em>Product people: don't be afraid of a script</em>, 2025).</figcaption>
</figure>


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** What does counting a person mean in this list? Who decides the rule before debating which calculation is right?
- **Paths on the table:**
  - *Caio:* request the script and test the rule against known cases. That provides a procedure to check and repeat, but the team still needs to decide what it should count.
  - *Bia:* check the list by hand before correcting the report. That may meet today's urgent need, but uses time reserved for visits and does not solve the next list.
  - *Lia:* remove the number from the report until the definition is settled. That avoids maintaining false certainty, but leaves Iara without the indicator she took to the meeting.
- **What the team did, for now:** warned that the number needed correcting and adopted Caio's proposed script. Bia assembled ten cases, including a transfer, to review with him. Lia recorded what the count included. The correction arrived after the meeting, and Iara had to return to the subject.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Generation and procedure:** asking for an answer and asking for an executable routine provide different ways to check the work.
- **Determinism:** the same input, rule, and conditions produce the same result in a deterministic routine.
- **Reproducibility and correctness:** keeping the input and version lets you reproduce and investigate. Repeating a calculation does not prove the chosen criterion was appropriate.

If a script perfectly repeats the sum of the wrong column, what have you gained — and what remains to be done?

</div>

<div class="g-project" markdown="1">

## What about your project?

Choose a transformation your project repeats whose rule you can explain. Ask for the script, keep an input, and check an expected output. Run it again under the same conditions; then change the input. What should remain the same: the result, the rule, or both? Where does a new model interpretation still enter?

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
- Maranhão Filho, É. (n.d.). *Panorama da IA* [Presentation slides]. <https://efrem.io/panorama/>

*Notes:* The contracts spreadsheet exercise appears on page 21 of *Panorama da IA*. The presentation proposes generating code to analyze a file and building a dashboard from the data. Questions about repetition, criteria, and use are the educational extension in this guide, not an account of participant outcomes.

</div>
