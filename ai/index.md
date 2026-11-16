---
layout: guia-index
guia: true
title: "AI Without the Magic"
description: "A living guide to learning by building: try, analyze, and revise a project, deepening AI literacy and computational thinking with each round."
lang: en
permalink: /ai/
---

<div class="g-box g-key g-tldr" markdown="1">

## TL;DR — what do I need to start?

**An intention, an attempt, and a willingness to read what happened.** I do not like learning a lot before applying it. These concepts are a map to get started; they will deepen when the project calls for them.

- **Generative AI:** generates text, images, and other outputs from learned patterns and the available context. A convincing answer can be wrong. Knowing how to ask includes reading and checking what comes back.
- **AI helping:** you discuss ideas, explore hypotheses, request an analysis, or build with agents. It expands what you can do; you direct the work.
- **AI participating in operations:** part of the delivery runs with AI — for instance, interpreting a visit report and preparing the next contact. Define when it can act, when it stops, and who answers for it. Assistance and automation can coexist within one task.
- **Computational thinking:** making a problem tractable: inputs, rules, steps, outputs, and connections. Asking for a script can make a rule explicit and reproducible. Repeating a result does not prove the rule is good; the delivery also needs to be usable.
- **Product or service:** solving a problem so that people can solve others. Delivery can begin with a list and manual work. A [*service-as-software*](/ai/real-cases/) mindset asks what work we are delivering, beyond the tool that enables it.

Ask, build, use, analyze. What happened changes the next question. **You do not need to memorize this before trying.** And an automation built with AI can later run without consulting any model.

</div>

I make a joke that hurts a bit: I used to blame the team for delays, bad implementation, bad user experience. Now that I build with agents, it's harder to dodge my part: [I'm also bad at defining the product](/blog/en/the-cost-of-expertise-and-the-will-to-build/). That hasn't stopped me from building. I've gained the autonomy to make things — and to find my mistakes in what I've made.

I learn by doing. I've never liked learning a lot before trying to apply it; that's what I advocate in my classes too. I've gone from a short request to a long document and spent [much more time editing than asking](/blog/en/15-minutes-of-prompting-5-hours-of-editing/). Making something revealed what I still needed to understand. That's where I want this guide to start.

AI is not magic: it is applied math, guided by human choices. Understanding a little of that helps you lose the fear and see the responsibility.

**What this guide is for.** To give autonomy to anyone who wants to change something by building with technology. You don't need to be a tech person; you need something you want to try. That takes two things: **generative AI literacy** — knowing what the machine does, where it fails, and how to ask — and **computational thinking** — knowing how to turn a problem into a flow, a step-by-step, layers. Generative AI democratized product building, and knowing how to use it [is no longer optional](/blog/en/being-ai-savvy-is-no-longer-optional/), as once happened with Word, Excel, and PowerPoint. It executes what you ask very well. What stays yours is knowing how to ask, knowing how to read what came back, and answering for the result.

<div class="g-box g-key" markdown="1">

## What do you want to put to the test now?

It can be a product, a service, a routine, or something you want to see exist. Start with an intention: "I want to try this." The hypothesis can take shape through the attempt. If it helps, write: "I think this will change that." What would make you reconsider that bet?

If you don't have a project yet, take a to-do list. The first delivery can be **a next-steps board you can use and modify**. One possible request to an agent that builds apps:

> I want to track a project's next steps. Create a simple page with a task, status, and next step. I need to filter pending tasks and change a task's status. Use made-up examples of contacts with schools. I want to open it and try it without creating accounts. Explain how to open it and where changes are stored. For now, only I will use it.

When it comes back, use it: mark a task as done, filter what's left, reload the page. Did the change survive? If it disappeared, you've found a difference between showing something on screen and storing what happened. Ask the agent to explain and adjust it. Then change something that would matter to you. Check again.

If the tool only returns text, ask for the file and instructions to open it. If you get stuck, take the error message back to the agent. If your spreadsheet already does the job, compare: what does the new version improve, worsen, or merely move elsewhere?

Keep the attempt and a short note: **what I expected, what happened, and which question remains**. A file or a notebook will do. That's already material for the next round.

</div>

## What have you just set in motion?

The essentials for getting started fit inside the attempt itself. **Using AI** meant explaining what you wanted, reading what came back, and checking it in use. A convincing explanation still needs to match what happened; [chapter 3](/ai/inside-a-language-model/) helps investigate why.

**Computational thinking** starts when you separate what goes in, what should happen, and what comes out. In the board: tasks and statuses go in; a rule selects pending tasks; the screen shows the result. Where is the change stored? Who needs to receive that output? Functions, conditions, repetitions, layers, and connections to other services get names in [chapter 7](/ai/computational-thinking/), starting from questions like these.

**Reproducing** means being able to run a procedure again and check the result under the same conditions. In [chapter 10](/ai/ask-for-the-script/), the rule becomes a script you can keep and review. **Operating** starts when you use the delivery and observe what happens — even if part of the service is manual. [Chapter 13](/ai/from-request-to-app/) returns to this. You can go there now.

## How do you return with a better question?

<!-- guia-ciclo -->

**How it's organized.** The three acts follow attempts that face changing demands: discovering whether something helps; being able to repeat and change it without losing what you learned; dealing with other people depending on the delivery. Every act involves questions, building, use, and analysis. AI principles and computational thinking return in greater depth as they become necessary.

Operating also produces new questions. Keeping what works and trying a change can happen together. The next round may lead to improving the solution, changing the hypothesis, keeping a routine, or ending the project. Continuing to make changes does not by itself prove that you learned.

You can follow Lia's story in order or follow the thread of your own project:

| What came up in your attempt? | Where can you investigate? |
|---|---|
| The answer convinced me, but I don't know where it came from | [Language models](/ai/inside-a-language-model/) and [retrieving sources](/ai/retrieve-before-answering/) |
| It works once; I want to repeat and check it | [Procedures and scripts](/ai/ask-for-the-script/) |
| Each change loses an earlier decision | [Context](/ai/context/) and [project memory](/ai/repository-as-memory/) |
| I already want someone else to use it | [Data](/ai/data-and-privacy/) and [agent access](/ai/agents-on-a-leash/) |

**Who Lia is.** An invented character with a real problem. Lia, Bia, and Caio work at a civil society organization that does outreach: going after teenagers who have stopped going to school. In Brazil, millions of young people have not finished high school, and the reason most often given by those who left is needing to work (IBGE, 2026). On the other side, there are people going after them, and it works: outreach has already helped hundreds of thousands of children and adolescents get back to the classroom (UNICEF, 2025). Nobody there is a tech person. They heard that "AI will solve it" and decided to build: they debate the strategy, split up the work, each person implements with their own agents, and one reviews what the other did. Around them are Iara, who coordinates the partnership on the side of the city's education department, and Aída, from its technology team. Maia, the communications coordinator at a partner organization, joins some meetings. Her requests enter the queue too — not always accompanied by a contribution.

**The guide doesn't answer for her.** The journey is told as a case study, the kind where things go wrong: there's a deadline, there's a fight, and there's more than one defensible path. In each chapter there is a **scene**, which ends in a question; a **provocation**, tied to the chapter's experiment; and a **logbook**, with what was left in dispute, the paths that were on the table — each one defended by someone — and what the team did, for now. There is no answer key. I like [workplace stories with deadlines and conflicts across departments](https://reader.itrevolution.com/library/phoenix-project): one decision changes the conditions of the next. Here, the routine continues beyond the last page; no presentation brings the project to an end. Sometimes the team chooses badly, and pays for it a few chapters later. The answers depend on the school system these people work in — and yours, on your reality. What the guide offers is the way to ask and the way to check.

**How to use it.** Almost every chapter has an experiment for you to play with (look for the 🧪), ends with a **Take it to class** box — an activity and discussion questions, to use freely — and closes with the references. If you prefer paper, there's the [book version](/ai/book/), ready to print.

Every chapter revisits concepts in **What is worth keeping from this round?**, with a question to connect them. Then comes **What about your project?**: a question and an attempt to bring to what you are building. Return to your notes: what changed, what did you decide, and what do you still want to investigate? Lia's story accompanies that investigation; your project may call for a different path.

This material grew out of recordings of my classes at FGV EPPG, a school of public policy in Brasília, of workshops for product people, of conversations where I walk people through my process, and of what I've been writing since 2025. The text was generated with AI from that material and edited by me. It was written in Portuguese first; this is the English edition. It is a living guide: I come back, fix and expand it.

**A warning.** At several points I step outside my field: law, statistics, design, education. Where that happens, I say so and cite the people who study the subject. Found a mistake? Tell me, and I will fix it.

## Want to bring your project into the conversation?

[Tell me what you're building](/cv/): what you wanted to try, what happened, and which question remains. A stuck project is worth talking about too. If a passage in this guide helped, confused you, or left out something important, I want to know.

<div class="g-fontes" markdown="1">

#### References

- Instituto Brasileiro de Geografia e Estatística. (2026). *Pesquisa Nacional por Amostra de Domicílios Contínua: Educação 2025* [Continuous National Household Sample Survey: Education 2025]. IBGE. <https://biblioteca.ibge.gov.br/visualizacao/livros/liv102286_informativo.pdf>
- Kim, G., Behr, K., & Spafford, G. (2024). *The Phoenix Project: A novel about IT, DevOps, and helping your business win* (4th ed.). IT Revolution. <https://reader.itrevolution.com/library/phoenix-project>
- Maranhão Filho, É. (2025, September 23). *15 minutes of prompting, 5 hours of editing*. efrem.io. <https://efrem.io/blog/en/15-minutes-of-prompting-5-hours-of-editing/>
- Maranhão Filho, É. (2026, June 19). *Being AI savvy is no longer optional, it's mandatory*. efrem.io. <https://efrem.io/blog/en/being-ai-savvy-is-no-longer-optional/>
- Maranhão Filho, É. (2026, November 13). *As the cost of expertise drops, what counts is the will to build*. efrem.io. <https://efrem.io/blog/en/the-cost-of-expertise-and-the-will-to-build/>
- UNICEF Brasil. (2025, July 28). *Com ajuda da Busca Ativa Escolar, 300 mil crianças e adolescentes voltaram à escola no Brasil* [With the help of Busca Ativa Escolar, 300 thousand children and adolescents returned to school in Brazil]. <https://www.unicef.org/brazil/comunicados-de-imprensa/com-ajuda-da-busca-ativa-escolar-300-mil-criancas-e-adolescentes-voltaram-a-escola-no-brasil>

*Notes:* Lia is an invented character. The data about the problem she faces are real: in 2025, 7.7 million people aged 14 to 29 in Brazil had not finished high school, and 43% pointed to the need to work (IBGE, 2026); Busca Ativa Escolar helped more than 300 thousand children and adolescents return to school between 2017 and 2025 (UNICEF, 2025).

The author’s chosen narrative reference is The Phoenix Project (Kim et al., 2024): deadline pressure, work across departments, and the consequences of decisions. Lia and the team are this guide’s own characters; they do not represent a real case or reproduce the novel’s plot. Their journey remains open after the last chapter.

</div>
