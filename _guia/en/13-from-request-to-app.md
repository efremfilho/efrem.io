---
title: "From request to app"
description: "Today a description becomes working software in minutes. If code is no longer the hard part, what is the hard part?"
lang: en
ref: app-builders
order: 13
part: 3
permalink: /ai/from-request-to-app/
interactive: "what happens when you don't say it?"
piece: "the dashboard working, with made-up data"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 13

The script counted the absences. But the list stayed on Lia's computer, and the people who make the visits spend the day out in the field, phone in hand. Someone suggested: "just describe what you want and the app builder makes the app." She described it in one line. Two minutes later there was a good-looking app on the screen — showing full name, address, and a red badge next to each student. Nobody had asked for the badge. Where did it come from?
</div>

There's a family of tools that takes a description in natural language and hands back a working app: screen, rules, database, and an address to open on your phone. I call them app builders; the commercial names change every semester and don't matter here.

What matters is that they changed the question. For decades the question was "who can build this?" Now it's a different one.

## What does an app builder do for me?

It makes, in your place, hundreds of engineering decisions: which language to use, how to organize the files, where to store the data, how to publish. For anyone who isn't in tech, that's a liberation — I spent months [taking my lumps and learning](/blog/en/chapter-5-a-product-person-can-build-with-lovable/) with one of them and came away convinced that a product person really can build the three layers from [chapter 7](/ai/computational-thinking/).

I also came away convinced of something else: the limitation of these tools [is an advantage for most people](/blog/en/non-technical-people-are-better-off-in-lovable/). I don't want to decide architecture. I want that to be decided, and decided well.

But notice the verb: it *decides*. And the question of this chapter is what happens to the decisions that aren't engineering decisions.

## What happens when I don't say it?

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** in the experiment, uncheck "Rules" and "What it does NOT do." Who put that badge and that button in the app — the app builder, or the person who didn't say?
</div>

<div data-widget="pedido"></div>

The app builder never leaves a blank space. Whatever you don't specify, it fills in with what's most common in similar apps. Sometimes the most common thing works. Sometimes the most common thing is a "high risk" badge next to a teenage girl's name.

Hence the question worth asking before every request: *what here do I find so obvious that I didn't even write it down?*

## How do I talk to it?

What worked for me, after many hours, fits in a few lines — and none of them is technical:

- **Ask like someone defining a product**, not like someone giving an order: the problem, who it's for, what goes in, what comes out.
- **Show.** A drawing of the screen or the flow, even done by hand, is worth more than three paragraphs.
- **One step at a time.** A big request produces a big error, hard to find.
- **Point to the layer.** "It looks ugly," "it's counting wrong," and "what I entered disappeared" are different requests.
- **Read what it says it did.** When something breaks, the explanation is usually there.

I wrote this in the heat of the moment: [speed isn't the differentiator, autonomy is](/blog/en/chapter-3-autonomy-not-speed/) — and knowing how to ask is, by far, what weighs the most.

## If code isn't the hard part, what is?

Everything that comes after "it worked on my screen." Where is the data stored? Who can get to it? What happens when the service goes down? Who notices if the count starts going wrong? As I once wrote, [code is not the hard part](/blog/en/code-is-not-the-hard-part/): the hard part is keeping the software standing and secure.

That helps separate two very different uses:

| | An app for me | An app other people depend on |
|---|---|---|
| **If it breaks** | I notice and redo it | Someone goes without service |
| **Data** | Mine, or made up | Other people's |
| **Who reviews it** | Me | Someone who understands technology |
| **Can you improvise?** | Yes, and it's great | No |

For the first case, we're in a phase much like that of the first homemade websites — [and that's a good thing](/blog/en/the-webmaster-era-of-vibe-coding/). For the second, my rule is simple: nothing goes into real use without a review by someone in tech.

## When do I stop and call someone?

Four questions. A "yes" to any one of them is reason enough:

1. Does it have other people's personal data?
2. Is anyone else going to depend on it to do their work?
3. If it goes down for a day, is someone harmed?
4. Does it deal with money, or make any decision about someone's life?

Calling someone isn't a failure of autonomy. It's knowing where yours ends.

## A path

1. Write the seven lines of the mini-PRD (chapter 7).
2. Generate, look, and ask the app builder what it assumed.
3. Use it for a week **with made-up data only**.
4. Check it against cases whose answer you know.
5. Keep the project in a repository ([chapter 11](/ai/repository-as-memory/)).
6. Go through the four questions above before putting in real data.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- The app builder decides the engineering for you. The product, ethics, and security decisions are still yours — and if you don't make them, it will.
- What you don't say gets filled in with what's most common.
- Building got easy. Keeping it standing, secure, and correct still takes people.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** what in my request did I find obvious and not write down? If the app goes down on a Monday, what does the team do?
- **A way to find the answer:** generate it again from the seven lines; use it for a week with made-up data only; check it against the ten cases counted by hand; ask someone in tech to take a look before any real data goes in.
- **New project piece:** the dashboard working on the team's phones, with made-up data.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (50 min, in the lab) — someone else's request

Each pair writes the mini-PRD for a small solution to a real problem. The pairs **swap** mini-PRDs and generate the app from the text they received, without talking to whoever wrote it. At the end, the writers evaluate the result and list everything the app builder had to guess.

#### Discussion questions

- What did the app builder guess right? Why do you think it got it right?
- Which line of your mini-PRD was vaguer than you imagined?
- Could the app you received be used tomorrow by a real organization? What's missing, and who would do that part?
- Where does "I can do it" end and "I need someone" begin?

</details>

<div class="g-fontes" markdown="1">

#### References

- Maranhão Filho, É. (2025, April 1). *Chapter 3: autonomy is the differentiator, not speed*. efrem.io. <https://efrem.io/blog/en/chapter-3-autonomy-not-speed/>
- Maranhão Filho, É. (2025, April 22). *Chapter 5: a product person can build with Lovable*. efrem.io. <https://efrem.io/blog/en/chapter-5-a-product-person-can-build-with-lovable/>
- Maranhão Filho, É. (2025, April 25). *Non-technical people are better off in Lovable than in dev tools*. efrem.io. <https://efrem.io/blog/en/non-technical-people-are-better-off-in-lovable/>
- Maranhão Filho, É. (2025, November 27). *The webmaster era of vibe coding*. efrem.io. <https://efrem.io/blog/en/the-webmaster-era-of-vibe-coding/>
- Maranhão Filho, É. (2026, March 26). *Code is not the hard part*. efrem.io. <https://efrem.io/blog/en/code-is-not-the-hard-part/>

</div>
