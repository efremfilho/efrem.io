---
title: "Are we building the same thing?"
subtitle: "Computational thinking, workflows, and layers."
description: "You don't need to write code. You need to break a problem down, draw the flow, and recognize the pieces all software is made of. That's what gives autonomy to anyone who wants to build."
lang: en
ref: computational-thinking
order: 7
part: 2
permalink: /ai/computational-thinking/
interactive: "assemble the algorithm + layers + loop"
piece: "the outreach flow and a mini-PRD"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 7

The list helped Bia organize contacts. When she left for a visit, however, Caio could not tell whether a marked row meant "contact attempted" or "family reached." Iara needed an update; the team had to reread part of the work. Making the list depend less on Bia seemed an obvious improvement — until they started drawing. Each person asked their agent for the outreach workflow: Bia's began when a school called; Caio's, when the spreadsheet arrived; Lia's, when someone noticed. These were more than different drawings: they were different ways to enter the queue.

Maia, the communications coordinator at the partner organization, joined the meeting worried about renewing the project's grant at the end of the month. She asked for a "more strategic" flow that showed network-wide reach for the funding board. When Bia asked what would change in the schools' routine, Maia said she would send a sample report and had to leave for another commitment before the work was divided.

Caio proposed simulating how many weekly visits they could handle at three or five absences. Bia wanted room for urgent requests from schools. Lia needed to settle the scope to meet the promised deadline: "Five it is; exceptions go through me." Bia looked at the board: "And when you're in a meeting?" In the drawing, the "review" box had no duration. Did it have one in real life?
</div>

I've always been a builder. Even with a degree in Computer Science, I spent a good part of my career building with low-code and no-code tools and writing, at most, a little bit of script. The old repositories on my GitHub say so in their descriptions, in all honesty: "my lazy scripts." The reason is simple: I hated programming. Not the logic: the precision. I'd forget one parenthesis and that one damn parenthesis would wreck my day.

I don't program today — and I do development all day. The difference is subtle and it changes everything: I don't write line by line. I say what I want to solve, I point to the problem I'm seeing, and the team does it. The team, in this case, is agents that code. It looks a lot more like my product work than like the work of someone who programs. The boring part went to someone who doesn't mind being precise. The part that always interested me stayed with me, and that's what this chapter is about.

You can see that shift in my own writing. For years, my biggest decision when choosing a low-code tool was [what I would give up to get something ready-made](/blog/en/what-i-give-up-with-low-code/). With agents that code, that math changed, and those tools lost a good part of their value for me: today I see them making sense where the organization restricts what can be installed and who can program. I started to [work on code without opening the code](/blog/en/the-problem-is-being-a-mere-proxy-for-ai/): I question, I document the decisions, and I ask for explanations. What lost no value at all is what those drag-and-drop boxes taught me: how to draw the flow.

## What changed, and what didn't?

**What changed** is who has to be precise. The computer is dumb: it does literally what it was told. Write "Ola", without the accent, where the program expected "Olá", and it returns "unexpected value." A language model forgives the accent, the swapped letter, the half-finished sentence — and translates what I meant into the precision the machine demands. Being precise was the boring part. It was what kept almost everyone on the outside.

**What didn't change** is that someone has to turn a messy problem into something a machine can execute. That has a name: **computational thinking**. Jeannette Wing, who popularized the term, was already arguing that it's a skill for everyone, not just for people in computing.

In Brazil, the idea made it all the way into the guidelines of a program that has nothing to do with computing. The National Curriculum Guidelines for undergraduate Business Administration programs ask that graduates know how to:

> formulate problems and their solutions in such a way that the solutions can be effectively carried out by an information-processing agent, involving the stages of problem decomposition, pattern identification, abstraction, and the design of a sequence of steps for the resolution. (my translation)

"An information-processing agent." When it was written, that was an abstract expression. Today it's literal: it's the AI agent open on your screen, waiting for you to formulate the problem.

That's the focus of the course I teach at FGV EPPG, a school of public policy in Brasília: understanding that you can automate with code, deterministically, and that AI has to be used in a way that [builds our critical thinking](/blog/en/how-to-teach-critical-use-of-ai/) instead of replacing it.

## What becomes clearer after a first attempt?

In [the outline of one of my workshops](https://efrem.io/jazida/), I propose starting with a spreadsheet: ask for code to analyze the data, build a flow that goes through the records, and turn the result into a screen. Only then come modularization, comments, tests, and execution logs. In the final exercise, each person can choose a problem of their own or adapt the agent that was presented.

Notice what this sequence puts on the table. The chart, the rule that handles each record, and the screen are different parts. If the count is wrong, repainting the dashboard won't fix it. If the rule classifies something as risky, who defined the criterion? The first version gives those questions something to point to. The next round can change one part without asking the agent to invent everything again.

## Where does AI enter this workflow?

Lia's list has two overlapping diagrams, and mixing the two ties beginners in knots:

| Workflow | What happens in it | Where AI enters |
|---|---|---|
| **1. Building and improving the service** | The team debates the problem, asks for code, compares outputs, tests, and reviews | AI works as a building partner (writes the script, suggests the screen, explains an error) |
| **2. The service helping someone** | Receives absences, applies the counting rule, prepares contact, and records the response | May have no AI running at all (if it is just the counting script) or use AI in one specific step (such as summarizing a visit note) |

If a model summarizes each new visit note, it participates in operations. If it wrote the code that filters the list once, it helped build a routine that can run without it. In both cases, someone needs to understand what enters, what changes, and what the next person receives. Draw both paths: which one contains the difficulty you want to address now?

## How do you think through a problem for a machine?

Take Lia's problem as the example: teenagers who stop going to school, and a small team to go after them.

1. **Decompose.** "Reduce school dropout" isn't a problem you can solve; it's an umbrella. Broken into parts: know who is missing school; decide who to reach out to first; make the contact; record what happened; learn from the record. Each part has a different owner, different data, and a different deadline.
2. **Recognize patterns.** Absences on Fridays in night classes. Absences that start after the July school break. Siblings who disappear together. A pattern is what lets you move past case by case.
3. **Abstract.** Decide what matters and what gets left out. For the first screening, what matters is the run of absences; the name, the address, and the math grade don't. Abstracting well also protects data, as a bonus ([chapter 5](/ai/data-and-privacy/)).
4. **Write the step-by-step.** The algorithm: an unambiguous sequence that two different people — or a person and a machine — would carry out the same way.

## Can you draw your process?

One way to test whether you understand a process is to try to draw it as a flow: what **goes in**, what **repeats**, where something gets **decided**, what **comes out**. If you can't, the problem isn't ready to be automated yet, by AI or by anything else.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** put the six steps in order. Then look at the number five, in the fourth step: who should decide that number, and based on what?
</div>

<div data-widget="fluxo"></div>

Two things in this exercise are worth their weight in gold. The first: the number five. It isn't technical, it's a **decision** that someone has to make and justify. Why five absences and not three? The second: the step that belongs to a person. It's in the flow by choice, not because the technology can't do it.

Drawing a flow doesn't depend on a drag-and-drop tool. It's thinking algorithmically, and it's still what I hand to the agents to implement. Two rules of thumb I carry from those days: every flow starts with a **trigger** (someone clicked, a file arrived, the clock struck seven in the morning), and **a flow has to fit on one page**. Didn't fit? That's two flows. When one piece keeps breaking, I swap out just that piece.

## So I don't need to learn to code?

It's the question that always comes up. Writing code, probably not. Reading it, yes — and reading code, today, is in large part reading English with patience. The process I ask of any class is this: **ask in natural language, let the agent generate, and then understand what the code is doing.** Didn't understand a passage? There are plenty I don't understand either. I copy it, paste it into an assistant, and ask.

I [wrote that I was learning code as a side effect](/blog/en/chapter-7-learning-code-as-a-side-effect/). My goal was still to get better at product and be able to ask for implementation. But reading the answer made me want to understand what was happening. I didn't have to decide "I'm becoming a technical person" before I started learning.

Five ideas help you start reading. On the classroom board I draw all of them along the bottom, returning to that same equation `f(x, y) = 3x + 2y` from [chapter 2](/ai/how-machines-learn/) — and if you use spreadsheets, you've already encountered several of them:

1. **Function**: a name, parentheses and, inside them, whatever it needs to do its work. In math it's `f(x, y) = 3x + 2y`. In a spreadsheet, `=SUM(2,3)` is a ready-made function someone wrote; you can also create your own (`=MADE_BY_ME(2,3)`) or use a function that queries an external service right from the cell — like `=GOOGLEFINANCE("CURRENCY:USDBRL")` to fetch an exchange rate from the internet.
2. **Variable**: a name for a value that can change. In the function `f(x, y) = 3x + 2y`, an arrow on my board points to `x` and `y`. In a spreadsheet, it's every cell: `A1` is still `A1` when the number inside it changes. In a contract, it's "the seller": defined once at the top, it holds for the rest of the text — and, if the person changes, the whole contract still stands. In code, a simple visual clue: it's almost always the name that comes before the `=` sign (`num_1 = 2`).
3. **Conditional**: the `IF (comparison) DO`. If you know how to use `=IF(A1>=5,"contact","ok")` in a spreadsheet, you already know what an `if` is in code.
4. **Loop**: repeating an action across a sequence. On the board I write three examples in steps: *do from 1 to 10*; *do for all students*; *do for all Business Administration students* — and I draw an arrow from **conditional** into that last one. That's how almost every filter works: a loop with a conditional inside it. Six rows or six million, the code is the same.
5. **API**: a function that lives on another computer. Think of a restaurant: the dining room doesn't walk into the kitchen. It places the order with whoever is serving, who takes it in, waits, and brings it back — and there's a protocol for that, down to the right door to go through without bumping into someone coming out. When the spreadsheet fetched the exchange rate outside, or when the agent "checks the map" and "creates a card on the board," it went through an API.

<figure class="g-board">
	<div class="g-board-title">Classroom board · Computational thinking summary <span>From school equations to reading scripts</span></div>
	<div class="g-board-cols-4">
		<div class="g-board-box accent">
			<span class="g-board-kicker">1. Functions</span>
			<code class="g-board-math">f(x, y) = 3x + 2y</code>
			<ul class="g-board-list">
				<li><strong>Built-in:</strong> <code>=SUM(2,3)</code></li>
				<li><strong>Custom:</strong> <code>=MADE_BY_ME(2,3)</code></li>
				<li><strong>External:</strong> <code>=GOOGLEFINANCE(...)</code></li>
			</ul>
		</div>
		<div class="g-board-box">
			<span class="g-board-kicker">2. Variables (← x, y)</span>
			<code class="g-board-math">num_1 = 2
num_2 = 3</code>
			<ul class="g-board-list">
				<li><strong>In math:</strong> the <code>x</code> and <code>y</code>.</li>
				<li><strong>In sheets:</strong> every cell (<code>A1</code>, <code>B2</code>).</li>
				<li><strong>In code:</strong> the name before <code>=</code>.</li>
			</ul>
		</div>
		<div class="g-board-box teal">
			<span class="g-board-kicker">3. Conditionals</span>
			<code class="g-board-math">IF (comparison)
  DO</code>
			<ul class="g-board-list">
				<li><strong>Sheet:</strong> <code>=IF(A1>=5,"contact","ok")</code></li>
				<li><strong>Code:</strong> <code>if absences >= 5:</code></li>
			</ul>
		</div>
		<div class="g-board-box ok">
			<span class="g-board-kicker">4. Loop (repeat)</span>
			<code class="g-board-math">FOR EACH item:
  ↳ IF (condition)</code>
			<ul class="g-board-list">
				<li>Do from <code>1 to 10</code>.</li>
				<li>Do for <em>all students</em>.</li>
				<li><strong>← Conditional:</strong> for <em>Business Admin. students</em>.</li>
			</ul>
		</div>
	</div>
	<div class="g-board-note">
		<strong>5. API + Modularization:</strong> when a function lives in another system (like an order going from the dining room to the restaurant kitchen) or when we split a big action (<code>Register</code> → <code>1. Check if exists</code> + <code>2. Create</code>), we use the same logic of independent boxes talking through inputs and outputs.
	</div>
	<figcaption><strong>Board sources:</strong> adapted from the author's FGV EPPG classroom whiteboard (Maranhão Filho, 2026), combined with Jeannette Wing's framing of computational thinking (2006) and Brennan &amp; Resnick's computational concepts (MIT Media Lab, 2012).</figcaption>
</figure>

<div data-widget="loop"></div>

With these five, most of the scripts an agent writes stop looking like hieroglyphics. Two small things help with the reading: a line that starts with `#` is a **comment**, a note for people that the computer ignores; and a **library** is a package of functions other people have already written. The tutorials I use in class are open on [my GitHub](https://github.com/efremfilho/python_scripts/tree/main/tutorials), and a good exercise is to open any of them in an assistant and ask: "explain what's happening here, line by line."

## What is a "little system" made of?

When someone says "I want a little system," they're asking for three things without knowing it:

| Layer | Technical name | What it is | In Lia's dashboard |
|---|---|---|---|
| **Front** | *frontend* | What the person sees and touches | The screen with the week's list and the "contact made" button |
| **Rules** | *backend* | What happens when someone touches it | "Five absences in a row become an alert"; "only the coordinator sees every school" |
| **Data** | database | What still exists tomorrow | The attendance table and the contact history |

Between the layers, and between your system and the rest of the world, sit the **APIs**. On the classroom board I draw the whole stack:

<figure class="g-stack">
<div class="g-stack-apps"><span>phone</span><span>browser</span><span>TV</span></div>
<div class="g-stack-group" data-label="your app">
<div class="g-stack-layer">Front <small>what you see and touch</small></div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer">Rules <small>what happens</small></div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer">Data <small>what gets stored</small></div>
</div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer g-stack-low">Operating system</div>
<div class="g-stack-api">API</div>
<div class="g-stack-layer g-stack-low">Hardware</div>
<figcaption>The top three layers are your app, which can show up on different screens. The bottom two exist, but they will almost never be your concern: someone already takes care of them.</figcaption>
</figure>

<div data-widget="camadas"></div>

Knowing this changes the conversation with an agent or with a tool that generates apps. "It looks ugly" is a front request. "It's counting wrong" is a rules request. "What I entered yesterday disappeared" is a data problem. Whoever points to the right layer solves in one message what would have taken ten.

The other idea I draw at the top of the board — twice, because it operates at two scales — is **modularizing**: making each piece take care of one thing only.

<div class="g-board-grid">
<div class="g-board-card">
<strong>1. Modularize by domain</strong>
<p>Break the product into major, independent business areas. In an academic system of mine, those are three boxes: <em>Discovery</em>, <em>Sync</em>, and <em>Invite</em>. For Lia: <em>Attendance</em>, <em>Visit queue</em>, and <em>Field log</em>.</p>
</div>
<div class="g-board-card">
<strong>2. Modularize inside the action</strong>
<p>When several screens call the <em>Register client</em> API, behind the scenes it isn't one giant block: it calls <code>1. Check if exists</code> and <code>2. Create record</code>. For Lia, <em>Record contact</em> checks the student code before saving the visit.</p>
</div>
<div class="g-board-card">
<strong>3. Slice by domain and layer</strong>
<p>To build with agents without one stepping on another, combine both cuts: pick a <em>domain</em> (e.g., visit queue) and know what will change in the <em>front</em>, <em>rules</em>, <em>data</em>, and <em>external APIs</em>.</p>
</div>
</div>

One rule of thumb I use with my team: **if you had to draw a box or write a comment saying "this part does X," that part should be a separate function or module** — otherwise the code turns into one long sausage that's impossible to maintain. The absence count shouldn't know anything about the color of the button. Small, independent pieces are easier to test, easier to swap out, and easier to hand to an agent without worrying that it will break the rest. It's the tech basics I see operations people [pick up quickly](/blog/en/product-led-ops-the-ops-crowd-flying-with-genai/): modularizing, each step doing one thing only, keys that don't stay exposed, and versioning.

## How do you ask?

In the product world, the document that describes what's going to be built is called a PRD (*product requirements document*). You don't need forty pages. Seven lines give you the skeleton, and in practice they are the context from the [next chapter](/ai/context/):

```
Problem:             teenagers stop attending and the team only finds out weeks later.
Who uses it:         3 people on the field team and 1 coordinator. Almost always on a phone.
What goes in:        each school's weekly attendance list (codes, not names).
What comes out:      the list of who has 5 or more absences in a row, from longest to shortest.
Rules:               nobody is labeled "at risk"; the list shows the situation, not the person.
                     The decision to reach out to the family always belongs to someone on the team.
What it does NOT do: doesn't send messages on its own; doesn't store addresses; doesn't cross-check social benefits.
It worked if:        the list matches 10 cases the team counted by hand.
```

The most important lines are the last two. Saying what the system does **not** do is where ethics and safety live. And saying how you're going to **check** is what separates building from hoping.

Today's models can take requests much bigger than seven lines, and in [chapter 13](/ai/from-request-to-app/) I tell how I turn this skeleton into a document of a few pages. But if the seven aren't clear, the extra pages only spread the confusion. When the idea is still raw, I add two questions: how is this solved today? And why now?

## What do the people who research this say?

I went and checked my list against the list of the people who study the subject. Three findings.

**The list matches on the concepts and comes up short on the practices.** One of the most widely used frameworks for teaching computational thinking ([Brennan & Resnick, 2012](http://scratched.gse.harvard.edu/ct/files/AERA2012.pdf)) separates concepts — sequences, loops, conditionals, data — from practices: being incremental and iterative, **testing and debugging**, reusing and remixing, and **abstracting and modularizing**. Conditionals, loops, and modularizing are on my board. Testing and debugging I hadn't written down, and it's the clearest gap. So here's the addition: knowing how to ask for a test and knowing how to read an error message.

**Reading isn't enough if nobody checks.** The people who research how programming is taught after generative AI land close to my bet: writing weighs less, and reading, testing, and verifying weigh more. The warning comes attached. Without those skills, users risk becoming "mere consumers of the generated content," taking it on faith ([Denny et al., 2023](https://doi.org/10.48550/arXiv.2306.02608)). And there's a result that stings: watching novice students who were programming with AI, one group found that those who struggled the most thought they had done better than they did, and "finished with an illusion of competence" ([Prather et al., 2024](https://doi.org/10.48550/arXiv.2405.17739)). Understanding what came back gives a feeling of mastery that isn't always mastery.

**People from outside the field need exactly this.** A study on what it's like to program with AI notes that people who program without coming from computing often lack the habit of decomposing a problem into subproblems — and that using a code-generating model well requires exactly that ([Sarkar et al., 2022](https://doi.org/10.48550/arXiv.2208.06213)).

What the research doesn't say yet: the studies I found were done with computing students or with professionals, on short tasks. About people who build with agents without ever having programmed — you, maybe — there's almost no measurement. And APIs and layers, which to me are essential, barely show up in the classic frameworks I consulted. It may be that I'm seeing something the schools haven't seen yet. It may just be the occupational bias of someone who works in product.

## What does this have to do with autonomy?

I started writing about building without depending on a development team long before generative AI. Years ago I published a [guide to building MVPs without developers](https://github.com/efremfilho/mvp.without.dev). What low-code tools promised, generative AI delivered on another scale: today a person who understands a problem can get to a working product.

I think that's really cool. As I wrote back when I was still wrestling with the first tools: [speed is not the differentiator, autonomy is](/blog/en/chapter-3-autonomy-not-speed/). More people can build, [because building now happens in natural language](/blog/en/my-bb-digital-week-talk-on-experimentation-with-genai/).

And there's a condition. The tools democratized the *doing*; the *thinking* still belongs to each person. Someone who can't decompose a problem asks for "a school dropout app" and gets a generic, pretty app. Someone who can asks for what they need — and gets it.

Anyone who wants to change something by building with technology needs two legs: generative AI literacy and computational thinking. One without the other limps.


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** The workflow must fit both the deadline and the working day. What decision does a diagram hide when it simply says "review"?
- **Paths on the table:**
  - *Caio:* simulate queues with different thresholds before choosing. That makes workload visible, but takes time and does not measure the urgency of each life.
  - *Bia:* reserve part of the schedule for urgent cases brought by schools. That opens a route for exceptions, but reduces predictability and depends on who can ask.
  - *Lia:* keep five absences and make herself responsible for exceptions. That settles an implementable scope, but creates a queue waiting for one person.
- **What the team did, for now:** recorded the workflow and mini-PRD with Lia's proposal, still contested by Bia. Caio implements counting with his agent; Bia, mobile use; Lia, the rules. Each reviews another's delivery. Operational exceptions, however, stayed with Lia — including when she was unavailable.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Decompose and abstract:** separate the problem into parts and choose what matters for the task.
- **Variable and function:** name a value and a piece of work that can be called again.
- **Conditional and loop:** decide according to a rule and repeat an action. The flow helps reveal both.
- **Layers, API, and modularization:** separate screen (front), rules (back), and data, define how the parts talk through APIs, and slice the project into domains and small functions.

If the screen shows a wrong total, how do these distinctions help formulate a better request than "fix everything"?

</div>

<div class="g-project" markdown="1">

## What about your project?

Draw the path from one input to a delivery in your project. Where is there a condition, a repetition, or an exchange with another service? Ask the agent to explain how that appears in the version you already built. Choose one part to change and check the effect: did the drawing help you predict what would happen?

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity 1 (20 min) — coffee as an algorithm

Each pair writes the step-by-step for making pour-over coffee, for someone who has never seen a kitchen. Swap papers with another pair, who must carry out **literally** what's written (in mime). Wherever the execution gets stuck, a step, a decision, or a definition is missing.

#### Activity 2 (60 min, in the lab) — from the map to the spreadsheet

Scenario: you're advising a city government that wants to know where public services are missing (or a pharmacy chain that wants to know where to open a store). The mission is to map the establishments in a region from an open dataset or a maps service and return a spreadsheet. Before opening any tool, hand in on paper: (1) the decomposed problem; (2) the flow in up to eight steps; (3) the seven-line mini-PRD. Only then ask an assistant for the code, in an online code notebook. Grading criterion: **every person in the group can explain what each block of the script does**.

#### Activity 3 (15 min) — predict before you run

Show a short script, generated by an assistant. Before running it, each person writes down what they think will come out. Run it. Then change a value, rename a variable in just one place, and remove an accent from a text compared in an `if`: what broke, and what does the error message say?

#### Discussion questions

- In Lia's flow, who should decide the number of absences that triggers the contact? Based on what?
- Give an example of a permission that lives only in the "front" of a system you use. What can go wrong?
- What's hardest to write in the mini-PRD for your own work: what goes in, the rules, or what the system does **not** do? Why?

</details>

<div class="g-fontes" markdown="1">

#### References

- Brazil, Ministry of Education, National Council of Education. (2021). *Resolução CNE/CES nº 5, de 14 de outubro de 2021* [National Curriculum Guidelines for undergraduate programs in Administration]. <https://portal.ufrrj.br/wp-content/uploads/2016/10/rces005_21.pdf>
- Brennan, K., & Resnick, M. (2012). *New frameworks for studying and assessing the development of computational thinking* [Paper presentation]. Annual Meeting of the American Educational Research Association, Vancouver, Canada. <http://scratched.gse.harvard.edu/ct/files/AERA2012.pdf>
- Denny, P., Prather, J., Becker, B. A., et al. (2023). *Computing education in the era of generative AI*. arXiv. <https://doi.org/10.48550/arXiv.2306.02608>
- Maranhão Filho, É. (2020). *mvp.without.dev: How-to for MVPs without a need of developers* [GitHub repository]. <https://github.com/efremfilho/mvp.without.dev>
- Maranhão Filho, É. (2025, April 1). *Chapter 3: autonomy is the differentiator, not speed*. efrem.io. <https://efrem.io/blog/en/chapter-3-autonomy-not-speed/>
- Maranhão Filho, É. (2025, May 2). *Chapter 7: learning code as a side effect*. efrem.io. <https://efrem.io/blog/en/chapter-7-learning-code-as-a-side-effect/>
- Maranhão Filho, É. (2026, July 13). *How do you teach people to use AI critically? A call for help*. efrem.io. <https://efrem.io/blog/en/how-to-teach-critical-use-of-ai/>
- Maranhão Filho, É. (2026, July 15). *The problem is being a mere proxy for AI*. efrem.io. <https://efrem.io/blog/en/the-problem-is-being-a-mere-proxy-for-ai/>
- Maranhão Filho, É. (2026, March 13). *Product-Led Ops: the ops crowd that is flying with GenAI*. efrem.io. <https://efrem.io/blog/en/product-led-ops-the-ops-crowd-flying-with-genai/>
- Maranhão Filho, É. (2026, May 13). *What I give up with low-code, and why that's changing*. efrem.io. <https://efrem.io/blog/en/what-i-give-up-with-low-code/>
- Maranhão Filho, É. (2026, October 28). *My BB Digital Week talk on experimentation with GenAI*. efrem.io. <https://efrem.io/blog/en/my-bb-digital-week-talk-on-experimentation-with-genai/>
- Maranhão Filho, É. (n.d.). *Mão na massa com IA: Criando apps e automações* [Presentation slides]. <https://efrem.io/jazida/>
- Prather, J., Reeves, B., Leinonen, J., MacNeil, S., et al. (2024). *The widening gap: The benefits and harms of generative AI for novice programmers*. arXiv. <https://doi.org/10.48550/arXiv.2405.17739>
- Sarkar, A., Gordon, A. D., Negreanu, C., Poelitz, C., et al. (2022). *What is it like to program with artificial intelligence?* arXiv. <https://doi.org/10.48550/arXiv.2208.06213>
- Wing, J. M. (2006). Computational thinking. *Communications of the ACM, 49*(3), 33–35. <https://doi.org/10.1145/1118178.1118215>

*Notes:* The passages used in the research section. Brennan and Resnick (2012): concepts "sequences, loops, parallelism, events, conditionals, operators, and data"; practices "being incremental and iterative, testing and debugging, reusing and remixing, and abstracting and modularizing". Denny et al. (2023, section 4; final version published in *Communications of the ACM*, 2024): "Without the skills to read, test and verify that code does what is intended, users risk becoming mere consumers of the generated content". Prather et al. (2024, abstract): a study with 21 students; those who struggled "thought they performed better than they did, and finished with an illusion of competence". Sarkar et al. (2022): "End-user programmers often lack computational thinking skills [...], such as the ability to decompose problems into subproblems [...]. However, effective use of LLMs such as Codex requires such skills."

The workshop example was checked against pages 27–31 and 38 of *Mão na massa com IA: criando apps e automações*. The text describes the proposed exercises without claiming participant outcomes. Tool names from the slides were omitted from the body: the example emphasizes analysis, flow, screen, and review of the parts.

</div>
