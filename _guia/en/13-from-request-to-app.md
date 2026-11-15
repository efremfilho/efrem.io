---
title: "From request to app"
description: "A description becomes working software in minutes. If building is no longer the hard part, how do I know I'm building the right thing?"
lang: en
ref: app-builders
order: 13
part: 3
permalink: /ai/from-request-to-app/
interactive: "what happens when you don't say it?"
piece: "the first version in the team's hands, without anyone's name"
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 13

The script counted the absences. But the list stayed on one computer, and the people who do the visits spend the day out in the field, phone in hand. That part was Bia's. She described what she wanted in one line and, two minutes later, there was a good-looking app on the screen — with full name, address, and a red badge next to each student. Bia, of all people. Rule no. 1 was written in the repository; the app builder had never been there. Where did the badge come from?
</div>

There's a family of tools that takes a description in natural language and hands back a working app: screen, rules, database, and an address to open on your phone. I call them app builders; the commercial names change every semester and don't matter here.

I held a grudge against them. Years ago I used a generation of tools that promised to write the code for me and handed back a tangled mess nobody could reuse. When the new ones showed up, I looked down on the people who used them. I ate my words.

## What does an app builder do for me?

It makes, in my place, hundreds of engineering decisions: which language to use, how to organize the files, where to store the data, how to publish. And it makes them better than I would. I can write a script; I was never good at frameworks, infrastructure, security configuration. So I let it decide. When it proposes reorganizing the code it has just written, I let it do that too: it's a sign that it cares about quality. It doesn't always work out. It almost always does. It's the cheap expertise that [chapter 17](/ai/responsible-generalist/) talks about, working in my favor.

That didn't turn me into a developer. I spent months [taking my lumps and learning](/blog/en/chapter-5-a-product-person-can-build-with-lovable/) with one of these tools, and the conclusion was a different one: **I became a product person who knows how to ask an engineering team really well. The team, in this case, is an agent.**

Can anyone do it? Building got more democratic. It didn't get simple. [The limitation of these tools is an advantage](/blog/en/non-technical-people-are-better-off-in-lovable/) for anyone who isn't in tech: I don't want to decide architecture, I want that to be decided, and decided well. But someone who understands the bare minimum of [chapter 7](/ai/computational-thinking/) — what a function is, where the data lives, what one layer asks of another — asks better and notices sooner when something has come out crooked.

And notice the verb: it *decides*. What happens to the decisions that aren't engineering decisions?

## What happens when I don't say it?

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** in the experiment, uncheck "Rules" and "What it does NOT do." Who put that badge and that button in the app — the app builder, or the person who didn't say?
</div>

<div data-widget="pedido"></div>

The app builder never leaves a blank space. Whatever I don't specify, it fills in with what's most common in similar apps. Sometimes the most common thing works. Sometimes the most common thing is a "high risk" badge next to a teenage girl's name.

Hence the question worth asking before every request: *what here do I find so obvious that I didn't even write it down?*

## How do I ask?

The way I'd ask an engineering team. "Change the button" is one request. "Change the button, because people who use a screen reader can't find it" is another: with the why, the team also gets right what I didn't think to ask for. (Sometimes I just send "change the color." That's fine.)

What I learned the hard way:

- **The first request is the one that weighs the most.** I don't start in the app builder. I start by debating it with an assistant: the problem, who uses it, what goes in, what comes out. I walk away with a document a few pages long, revise it, and only then hand it over. It has even come out right on the first try.
- **A big request is no longer a problem.** The models can take it. What's still my job is organizing the solution: how do I slice this into parts that the agents and I can work on?
- **After that, short requests with an address.** "It looks ugly," "it's counting wrong," and "what I entered disappeared" go to different layers.
- **Show.** A drawing of the screen, even done by hand, is worth more than three paragraphs.
- **Read what it says it did.** When something breaks, the explanation is usually there.
- **Not there after a few rounds? Start over.** Take what you learned into a new request. It's still cheaper than fixing.

This takes practice; there's no other way. If the system at your job can't fail, practice on a side project: an internal tool, something that's only yours.

The founder of one of these tools [recounts](https://www.youtube.com/watch?v=-QsTmu2CqhA) that a user described it as "a super genius five-year-old PhD with ADHD." It's the best definition I know, and it holds even more when I switch agents: sometimes it dives too deep into one thing, sometimes it gets stuck, sometimes it's just distracted. I once asked it to change the menu, and the only thing it did was not change the menu. The caveat is that this is less and less true: the models make things up less and are more like specialists. But it helps you ask with patience.

## What changed, in the end: speed?

No. You could always have speed — in a weekend hackathon, in a no-code tool — and the price was quality. The speed I care about is a different kind: building without getting stuck. That's why I still stand by what I wrote back when I was still taking my lumps: [speed isn't the differentiator, autonomy is](/blog/en/chapter-3-autonomy-not-speed/).

## Am I building the right thing?

Almost everyone who asks for a system asks for a dashboard. At a company where I worked, people asked so often that I dug in my heels: I wasn't going to build it, because nobody was going to use it. What people wanted, looked at up close, was to know right away when a sale came in — the dashboard was for refreshing the page over and over and watching the number change. I set up a bot that sent a message for every sale. It took less than half an hour, with an off-the-shelf tool, and ran for about two and a half years without anyone touching it.

They insisted so much that I ended up building the dashboard. Almost nobody opened it. Those who did were after a button we had put in there: the one for withdrawing the money.

I keep two things from that story. The first: **what a person asks for is a solution; what they have is a problem** — and the two rarely match. The second: I only found out because the thing was in use.

That's why the order I follow is **first the right thing, then the right way**. The first version can be ugly, have steps done by hand, cost more than it should. People who know how to code look at it and say it's junk. Sometimes it is — and it was enough to find out what I needed to find out. Once the thing proves itself, that junk becomes debt, and debt is a great reason to redo it properly.

**If I haven't operated it, I haven't done anything.** And operating isn't publishing: it's putting it in someone's hands and watching. In an old product of mine, the screen for redeeming a prize had a single colored button. To us it was obvious. People got there and didn't know what to do; some said it was a scam. What's in our heads and a product that works are very different things.

What I want to be able to answer about any first version: are people using it? Are they satisfied? Would they come back — or pay — for it? If I can't answer, I haven't learned anything.

## Do I test with made-up data or with real people?

It depends, and the answer starts with the context. I like testing in production: I put it live, see what happens and, if it breaks, roll it back. But I've almost always worked with systems used by companies, with few people at a time, where breaking and undoing was cheap. Rarely with millions of people on the other side.

So, instead of a rule, questions. If it goes wrong, who feels it? Can it be undone? Whose data is it? How many people depend on this today?

For Lia's team, the answers change the plan. The data belongs to teenagers, and an address that has leaked doesn't come back. The first version can go into the hands of the people who do the visits in the very first week — that's how you learn — but with codes in place of names and no address on the screen. It doesn't have to be a textbook process. It has to fit the context.

## If code isn't the hard part, what is?

Everything that comes after "it worked on my screen." Where is the data stored? Who can get to it? What happens when the service goes down? Who notices if the count starts going wrong? As I once wrote, [code is not the hard part](/blog/en/code-is-not-the-hard-part/): the hard part is keeping the software standing and secure.

A lot of what I build is just for me. I like building the way people make art: it doesn't need to have a function, it needs to exist in the world. For that, we're in a phase much like that of the first homemade websites — [and that's a good thing](/blog/en/the-webmaster-era-of-vibe-coding/).

The limit shows up when the second person comes in. Then software's usual problems come back all at once: who changed what, which version is the one that counts, what to do when two changes collide. That's the subject of [chapter 11](/ai/repository-as-memory/).

## When do I call someone?

Less and less do I approve, step by step, what the agent does. More and more I plan and correct course. One thing hasn't changed: I may no longer be the one who writes, but I'm still the one who reviews — and if something bad comes out, the responsibility is mine. Not the agent's, not the app builder's.

That's why I call people in. The questions that make me call:

1. Does it have other people's personal data?
2. Is anyone else going to depend on it to do their work?
3. If it goes down for a day, is someone harmed?
4. Does it deal with money, or decide something about someone's life?

And I call early. At a company where I worked, it took us years to see a pattern: when the client organization's technology team took part in the choice, the product lasted. When it was left out, it treated the thing as a rogue system — and its first move was to take it down. Hiding what you built from the technology team is the shortest path to losing what you built.

## A path

1. Debate the problem with an assistant until a document a few pages long comes out of it. The seven lines of the mini-PRD ([chapter 7](/ai/computational-thinking/)) are the skeleton.
2. Generate, look, and ask the app builder what it assumed.
3. Put it in someone's hands and watch, without explaining. Decide, from the context, with what data.
4. Answer: do people use it? Are they satisfied? Do they come back?
5. Keep the project in a repository ([chapter 11](/ai/repository-as-memory/)).
6. It worked and it's ugly? Now redo it properly — and call in someone who knows what they're doing.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- The app builder decides the engineering, and decides it well. The product decisions are still mine — and if I don't make them, it will.
- What I don't say gets filled in with what's most common.
- First the right thing; then, the right way. And only by operating it do I find out what the right thing is.
- I may not be the one who writes. I'm still the one who answers for the result.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** what in the request seemed obvious and nobody wrote down? Do the people who do the visits really want a dashboard, or do they just want to know, in the morning, who to look for today?
- **Paths on the table:**
  - *Iara:* the dashboard, with a chart, to show at the education department.
  - *Bia:* no dashboard: a message in the morning, with the day's list.
  - *Caio:* both. "It's quick."
- **What the team did, for now:** generated it again, this time with the rules in the request; put the first version in the hands of two people who do the visits, with codes in place of names; and sat beside them to watch, without explaining.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (50 min, in the lab) — someone else's request

Each pair writes the request for a small solution to a real problem. The pairs **swap** requests and generate the app from the text they received, without talking to whoever wrote it. At the end, the writers evaluate the result and list everything the app builder had to guess.

#### Activity (15 min) — watching without explaining

A person from another pair gets the app and a task ("log a visit"). The people who built it only watch: no explaining, no pointing, no correcting. They note where the person got stuck.

#### Discussion questions

- What did the app builder guess right? Why do you think it got it right?
- Was what was written in the request a problem, or was it already a solution?
- Where did the person testing it get stuck? Would you have predicted that?
- Could the app be used tomorrow by a real organization? With what data? What would change your answer?
- Where does "I can do it" end and "I need someone" begin?

</details>

<div class="g-fontes" markdown="1">

#### References

- Maranhão Filho, É. (2025, April 1). *Chapter 3: autonomy is the differentiator, not speed*. efrem.io. <https://efrem.io/blog/en/chapter-3-autonomy-not-speed/>
- Maranhão Filho, É. (2025, April 22). *Chapter 5: a product person can build with Lovable*. efrem.io. <https://efrem.io/blog/en/chapter-5-a-product-person-can-build-with-lovable/>
- Maranhão Filho, É. (2025, April 25). *Non-technical people are better off in Lovable than in dev tools*. efrem.io. <https://efrem.io/blog/en/non-technical-people-are-better-off-in-lovable/>
- Maranhão Filho, É. (2025, November 27). *The webmaster era of vibe coding*. efrem.io. <https://efrem.io/blog/en/the-webmaster-era-of-vibe-coding/>
- Maranhão Filho, É. (2026, March 26). *Code is not the hard part*. efrem.io. <https://efrem.io/blog/en/code-is-not-the-hard-part/>
- Rauch, G. (2025). *Everyone's an engineer now: Inside v0's mission to create 100 million builders* [Video]. Interview by L. Rachitsky. Lenny's Podcast. <https://www.youtube.com/watch?v=-QsTmu2CqhA>

*Notes:* The quoted line is told by Guillermo Rauch, who attributes it to a user of his tool (minutes 0 and 43 of the interview): "v0 is a super genius five-year-old PhD with ADHD". It describes that tool, not AI in general; the generalization is mine. The cases in the chapter come from my own work; names of people, clients and companies were left out.

</div>
