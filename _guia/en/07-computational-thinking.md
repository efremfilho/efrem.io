---
title: "Computational thinking: from the problem to the step-by-step"
description: "You don't need to code. You need to know how to break a problem down, draw the flow, and understand the layers of what you're asking for. That's what gives you autonomy."
lang: en
ref: computational-thinking
order: 7
part: 2
permalink: /ai/computational-thinking/
interactive: "assemble the algorithm + layers + loop"
piece: "the outreach flow and a mini-PRD"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 7

Lia got the team together to explain what she wanted to build. She asked each person to describe, out loud, how outreach works today. Four different versions came out. For one person, the process starts when the school calls. For another, when the spreadsheet arrives. Nobody could say how many absences trigger the first contact — "depends on who's looking." If the team itself doesn't describe the work the same way, what was she going to ask a machine for?
</div>

I've always been a builder. Even with a degree in Computer Science, I spent a good part of my career building with low-code and no-code tools and writing, at most, a little bit of script. The old repositories on my GitHub say so in their descriptions, in all honesty: "my lazy scripts." The reason is simple: I've always found programming a drag. Hunting bugs, memorizing frameworks, putting up with each language's quirks. I wanted the product working, not the ceremony.

Today I don't program, and I interact with code all day long. I think that's great. The boring part went to the agent. The part that always interested me stayed with me, and that's what this chapter is about.

You can see that shift in my own writing. For years, my biggest decision when choosing a low-code tool was [what I would give up to get something ready-made](/blog/en/what-i-give-up-with-low-code/). With agents that code, that math changed. Today I [work on code without opening the code](/blog/en/the-problem-is-being-a-mere-proxy-for-ai/): I question, I document the decisions, and I ask for explanations.

## What changed, and what didn't?

**What changed** is who deals with the syntax. A comma in the wrong place, a library version, an unreadable error message: none of that is a barrier to entry anymore.

**What didn't change** is that someone has to turn a messy problem into something a machine can execute. That has a name: **computational thinking**. Jeannette Wing, who popularized the term, was already arguing that it's a skill for everyone, not just for people in computing.

In Brazil this became a guideline. The National Curriculum Guidelines for undergraduate Business Administration programs ask that graduates know how to:

> formulate problems and their solutions in such a way that the solutions can be effectively carried out by an information-processing agent, involving the stages of problem decomposition, pattern identification, abstraction, and the design of a sequence of steps for the resolution. (my translation)

"An information-processing agent." When it was written, that was an abstract expression. Today it's literal: it's the AI agent open on your screen, waiting for you to formulate the problem.

That's the focus of the course I teach at FGV EPPG, a school of public policy in Brasília: understanding that you can automate with code, deterministically, and that AI has to be used in a way that [builds our critical thinking](/blog/en/how-to-teach-critical-use-of-ai/) instead of replacing it.

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

## So I don't need to learn to code?

It's the question that always comes up. Writing code, probably not. **Understanding five concepts, yes**, because they're what let you read what the agent did and ask better. I explain them in an hour:

1. **Variable**: a little box with a name that holds a value. `absences = 7`.
2. **List**: several little boxes in a row. A spreadsheet column is a list. It's the vector from [chapter 2](/ai/how-machines-learn/).
3. **Conditional**: the spreadsheet's `IF`. If you know how to use `=IF(A1>=5,"contact","ok")`, you already program.
4. **Loop**: "do this for each row." It's what a spreadsheet doesn't make very clear, and what gives you a superpower: six rows or six million, the code is the same.
5. **API**: the door one program uses to talk to another. When the agent "queries the official database" or "creates a card on the board," it went through an API.

<div data-widget="loop"></div>

With these five, most of the scripts an agent writes stop looking like hieroglyphics. The tutorials I use in class are open on [my GitHub](https://github.com/efremfilho/python_scripts/tree/main/tutorials), and a good exercise is to open any of them in an assistant and ask: "explain what's happening here, line by line."

## What is a "little system" made of?

When someone says "I want a little system," they're asking for three things without knowing it:

| Layer | Technical name | What it is | In Lia's dashboard |
|---|---|---|---|
| **Front** | *frontend* | What the person sees and touches | The screen with the week's list and the "contact made" button |
| **Rules** | *backend* | What happens when someone touches it | "Five absences in a row become an alert"; "only the coordinator sees every school" |
| **Data** | database | What still exists tomorrow | The attendance table and the contact history |

Between the layers, and between your system and the rest of the world, sit the **APIs**.

<div data-widget="camadas"></div>

Knowing this changes the conversation with an agent or with a tool that generates apps. "It looks ugly" is a front request. "It's counting wrong" is a rules request. "What I entered yesterday disappeared" is a data problem. Whoever points to the right layer solves in one message what would have taken ten.

The other idea that comes along with it is **modularizing**: each piece does one thing only. The absence count shouldn't know anything about the color of the button. Small, independent pieces are easier to test, easier to swap out, and easier to hand to an agent without worrying that it will break the rest. It's the tech basics I see operations people [pick up quickly](/blog/en/product-led-ops-the-ops-crowd-flying-with-genai/): modularizing, each step doing one thing only, keys that don't stay exposed, and versioning.

## How do you ask?

In the product world, the document that describes what's going to be built is called a PRD (*product requirements document*). You don't need forty pages. You need seven lines, and in practice they are the context from the [next chapter](/ai/context/):

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

## What does this have to do with autonomy?

I started writing about building without depending on a development team long before generative AI. Years ago I published a [guide to building MVPs without developers](https://github.com/efremfilho/mvp.without.dev). What low-code tools promised, generative AI delivered on another scale: today a person who understands a problem can get to a working product.

I think that's really cool. As I wrote back when I was still wrestling with the first tools: [speed is not the differentiator, autonomy is](/blog/en/chapter-3-autonomy-not-speed/). More people can build, [because building now happens in natural language](/blog/en/my-bb-digital-week-talk-on-experimentation-with-genai/).

And I think there's a condition. The tools democratized the *doing*; the *thinking* still belongs to each person. Someone who can't decompose a problem asks for "a school dropout app" and gets a generic, pretty app. Someone who can asks in seven lines, and gets what they need.

Generative AI literacy and computational thinking are the two legs of the same autonomy. One without the other limps.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- The syntax went to the agent. Formulating the problem is still yours.
- Decompose, recognize patterns, abstract, and write the step-by-step: four moves that work with or without a computer.
- Every piece of software has a front, rules, and data. Pointing to the right layer is half the request.
- A good request says what the system doesn't do and how you're going to check.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** why five absences, and not three? Does it work the same for students in day classes and students in night classes? Which step in this flow do I not want a machine to take?
- **A way to find the answer:** draw the flow with the team until everyone describes it the same way; mark every decision that is hidden inside a number; write the seven lines of the mini-PRD.
- **New project piece:** the outreach flow and the dashboard's mini-PRD.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity 1 (20 min) — coffee as an algorithm

Each pair writes the step-by-step for making pour-over coffee, for someone who has never seen a kitchen. Swap papers with another pair, who must carry out **literally** what's written (in mime). Wherever the execution gets stuck, a step, a decision, or a definition is missing.

#### Activity 2 (60 min, in the lab) — from the map to the spreadsheet

Scenario: you're advising a city government that wants to know where public services are missing (or a pharmacy chain that wants to know where to open a store). The mission is to map the establishments in a region from an open dataset or a maps service and return a spreadsheet. Before opening any tool, hand in on paper: (1) the decomposed problem; (2) the flow in up to eight steps; (3) the seven-line mini-PRD. Only then ask an assistant for the code, in an online code notebook. Grading criterion: **every person in the group can explain what each block of the script does**.

#### Discussion questions

- In Lia's flow, who should decide the number of absences that triggers the contact? Based on what?
- Give an example of a permission that lives only in the "front" of a system you use. What can go wrong?
- What's hardest to write in the mini-PRD for your own work: what goes in, the rules, or what the system does **not** do? Why?

</details>

<div class="g-fontes" markdown="1">

#### References

- Brazil, Ministry of Education, National Council of Education. (2021). *Resolução CNE/CES nº 5, de 14 de outubro de 2021* [National Curriculum Guidelines for undergraduate programs in Administration]. <https://portal.ufrrj.br/wp-content/uploads/2016/10/rces005_21.pdf>
- Maranhão Filho, É. (2020). *mvp.without.dev: How-to for MVPs without a need of developers* [GitHub repository]. <https://github.com/efremfilho/mvp.without.dev>
- Maranhão Filho, É. (2025, April 1). *Chapter 3: autonomy is the differentiator, not speed*. efrem.io. <https://efrem.io/blog/en/chapter-3-autonomy-not-speed/>
- Maranhão Filho, É. (2026, July 13). *How do you teach people to use AI critically? A call for help*. efrem.io. <https://efrem.io/blog/en/how-to-teach-critical-use-of-ai/>
- Maranhão Filho, É. (2026, July 15). *The problem is being a mere proxy for AI*. efrem.io. <https://efrem.io/blog/en/the-problem-is-being-a-mere-proxy-for-ai/>
- Maranhão Filho, É. (2026, March 13). *Product-Led Ops: the ops crowd that is flying with GenAI*. efrem.io. <https://efrem.io/blog/en/product-led-ops-the-ops-crowd-flying-with-genai/>
- Maranhão Filho, É. (2026, May 13). *What I give up with low-code, and why that's changing*. efrem.io. <https://efrem.io/blog/en/what-i-give-up-with-low-code/>
- Maranhão Filho, É. (2026, October 28). *My BB Digital Week talk on experimentation with GenAI*. efrem.io. <https://efrem.io/blog/en/my-bb-digital-week-talk-on-experimentation-with-genai/>
- Wing, J. M. (2006). Computational thinking. *Communications of the ACM, 49*(3), 33–35. <https://doi.org/10.1145/1118178.1118215>

</div>
