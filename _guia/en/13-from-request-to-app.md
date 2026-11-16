---
title: "Who is this screen working for?"
subtitle: "Product, interface, and operations."
description: "A description becomes working software in minutes. If building is no longer the hard part, how do I know I'm building the right thing?"
lang: en
ref: app-builders
order: 13
part: 3
permalink: /ai/from-request-to-app/
interactive: "what happens when you don't say it?"
piece: "daily list and aggregate dashboard, reviewed by the people using them"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 13

The script counted absences. But the list lived on a computer, while visitors spent the day out in the field. Bia asked an app builder for a mobile app and got an attractive screen, with full names, addresses, and a red badge on every student. Of all people. Rule #1 was in the repository; the builder had not read it. Caio reviewed the screen with Bia, asked about the badge, and they removed it on the spot.

In the next conversation, Iara requested an aggregate dashboard to argue for continuing the partnership at the department. Bia preferred just the daily list, without another screen to fill in after returning from the field. Both had people to serve.

Maia reappeared asking for "more visual impact": the report to renew the partner organization's grant was due that week, and leadership wanted screens that showed scale. She still had not sent the promised example or opened the version Bia had shared. Caio set aside an afternoon to try to translate the request. Did the app need to solve the work of those making visits, those sustaining the partnership and its funding, or both?
</div>

There's a family of tools that takes a description in natural language and hands back a working app: screen, rules, database, and an address to open on your phone. I call them app builders; the commercial names change every semester and don't matter here.

I held a grudge against them. Years ago I used a generation of tools that promised to write the code for me and handed back a tangled mess nobody could reuse. When the new ones showed up, I looked down on the people who used them. I ate my words.

## What if I can build it, but steamroll someone?

I've been the bulldozer. At a previous job, my product team started doing with AI what another area was slow to deliver: we agreed on a deadline and, once it passed, we generated the material and put it live. The intention was to show, in practice, that specializing had become easier — and it had been agreed with leadership. It got things started. It wasn't the best way. I lacked the empathy a leader should have with other areas, and I damaged the relationship for a good while. In the end, we handed the finished processes over for that area to use and edit, and it turned out great. The road there was turbulent.

Being able to deliver didn't fix the relationship. The app can work while the way you bring it into the world still causes trouble. Keep that in mind while we talk about generating screens: the work doesn't end when they appear.

## What does an app builder do for me?

It makes, in my place, hundreds of engineering decisions: which language to use, how to organize the files, where to store the data, how to publish. And it makes them better than I would. I can say what I need to solve; I don't want to choose frameworks, infrastructure, or security settings without understanding the consequences. So I let it decide. When it proposes reorganizing the code it has just written, I let it do that too. The proposal alone doesn't prove quality: what improved, and what still worked after the change? I've [fixed one thing and broken another](/blog/en/chapter-2-the-frustration-phase/). It's the cheap expertise that [chapter 17](/ai/responsible-generalist/) talks about, with work on my side to check what came back.

That let me do development without being the person writing the code. I spent months [taking my lumps and learning](/blog/en/chapter-5-a-product-person-can-build-with-lovable/) with one of these tools, and the conclusion was a different one: **I became a product person who knows how to ask an engineering team really well. The team, in this case, is an agent.**

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
- **A big request is no longer a problem.** Models can handle multi-page documents. What's still my job is organizing the solution and **slicing the project** using the cuts from [chapter 7](/ai/computational-thinking/):
  1. *Slice by domain:* instead of asking for ten half-built screens, I ask for one complete domain at a time — first just the morning visit list; then the visit follow-up log; finally the aggregate dashboard.
  2. *Slice by layer (data → rules → front):* I start by making sure where the data is stored and that the counting rule adds up; only then do I polish the screen.
  3. *Separate code, external services, and AI:* repeated math becomes a deterministic function, outside lookups go through an API, and AI enters only where there is open-ended text or ambiguity.
- **After that, short requests with an address.** "It looks ugly," "it's counting wrong," and "what I entered disappeared" go to different layers.
- **Show.** A drawing of the screen, even done by hand, is worth more than three paragraphs.
- **Read what it says it did.** When something breaks, the explanation is usually there.
- **Not there after a few rounds? Is it worth starting over?** Use what you learned to compare the options: fix the current version, return to one that worked, or make a new request. What do you lose with each?

This takes practice; there's no other way. If the system at your job can't fail, practice on a side project: an internal tool, something that's only yours.

A fellow teacher was tracking almost eighty students, one spreadsheet per student. I showed him one way, and he built his own system, on his own. He spent about five times more credits than I had — and that is the price of learning, not a flaw. The credit is all his. What made the difference there wasn't the perfect request: it was persisting until it worked. The will to build weighs more than getting it right the first time.

I've [nearly given up after fixing one thing and breaking another](/blog/en/chapter-2-the-frustration-phase/). One way out was asking for more detailed records of what happened: *logs*. In [another difficult round](/blog/en/chapter-4-getting-beaten-up-by-lovable-and-edge-functions/), neither a long document nor a flow diagram got things unstuck. I took the code and errors to another model. I made progress. It wasn't all finished: at least the errors were new.

That's a step missing from simply saying "keep building." When you get stuck, one possible request is: "I did this, expected that, and got this message. Find the stage where it happened; explain before changing anything. Then check this case and one that already worked." The agent's explanation must also match what you observe. Giving the problem another description isn't the same as solving it.

## What changed, in the end: speed?

What changed most for me was being able to build without getting stuck. A quick first version can help uncover the problem; it can also be work to maintain. That's why I still stand by what I wrote back when I was still taking my lumps: [speed isn't the differentiator, autonomy is](/blog/en/chapter-3-autonomy-not-speed/).

## If building got easy, what got hard?

In a product I work on, the tracking board took up a little more than half the screen; the rest was menu and frame. To open a detail, the person switched screens and lost the thread. I described what bothered me to the agent and asked for alternatives. I tried out three ideas, actually working, in the development environment: drag and drop between columns, a side drawer with the item's summary, and a breadcrumb trail at the top for going back without getting lost. I sent the link to the team to try.

The hard part there wasn't building. It was realizing that each column of that board is used by a different team, so what shows up when you hover the mouse has to change from column to column. That's product knowledge, and no model guesses it. One of the three experiments I didn't like — and I rolled it back with one command, because everything was layered and versioned ([chapter 11](/ai/repository-as-memory/)).

Code got cheap. Knowing what to build didn't. I wrote more about this in [Product and UX have never mattered more](/blog/en/product-and-ux-have-never-mattered-more/).

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

For Lia's team, the answers change the plan. The data belongs to teenagers, and an address that has leaked doesn't come back. The first version can go into the hands of the people who do the visits in the very first week — that's how you learn — using fictional examples for that first investigation. Removing names from real records does not by itself make them anonymous. It doesn't have to be a textbook process. It has to fit the context.

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

## Where would I start?

1. Debate the problem with an assistant until a document a few pages long comes out of it. The seven lines of the mini-PRD ([chapter 7](/ai/computational-thinking/)) are the skeleton.
2. Generate, look, and ask the app builder what it assumed.
3. Put it in someone's hands and watch, without explaining. Decide, from the context, with what data.
4. Answer: do people use it? Are they satisfied? Do they come back?
5. Keep the project in a repository ([chapter 11](/ai/repository-as-memory/)).
6. It worked and it's ugly? Now redo it properly — and call in someone who knows what they're doing.


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** A screen can serve a legitimate decision and still not help people in the field. Who uses it, who supplies the data, and who goes without help if the scope grows?
- **Paths on the table:**
  - *Iara:* an aggregate dashboard to monitor the partnership and justify resources. That supports the operation, but does not by itself help visitors through their day.
  - *Bia:* the morning list and a simple way to update status. That helps in the field, but leaves reporting dependent on manual work.
  - *Caio:* both outputs from the same data. That avoids entering information twice, but adds things the team must check and maintain.
- **What the team did, for now:** regenerated with explicit rules and adopted Caio's proposal: the daily list and a minimal aggregate dashboard. Bia tested the list with two people, using fictional data; Iara reviewed the dashboard. The afternoon spent on presentation changes came out of the same time budget. Offline work stayed out of this first release. That fieldwork difficulty remained unresolved.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Request:** the problem, context, and limits guide decisions the builder would otherwise fill in on its own.
- **Building and use:** a working screen lets you test a hypothesis; observing its use can change the hypothesis itself.
- **Operation:** maintaining data, access, availability, and support is part of the delivery. Delegating implementation does not finish that work.

How would you distinguish an implementation problem from an app that correctly does the wrong thing?

</div>

<div class="g-project" markdown="1">

## What about your project?

Put a delivery in the hands of someone who would do that task, under the test conditions the context allows. It can be a screen, a file, or a service with a manual component. Where did the person stop, improvise, or ignore what you thought was essential? Is your next request to the agent still the one you would have made before observing?

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
- Maranhão Filho, É. (2025, April 14). *Chapter 4: getting beaten up by Lovable and Edge Functions*. efrem.io. <https://efrem.io/blog/en/chapter-4-getting-beaten-up-by-lovable-and-edge-functions/>
- Maranhão Filho, É. (2025, April 22). *Chapter 5: a product person can build with Lovable*. efrem.io. <https://efrem.io/blog/en/chapter-5-a-product-person-can-build-with-lovable/>
- Maranhão Filho, É. (2025, April 25). *Non-technical people are better off in Lovable than in dev tools*. efrem.io. <https://efrem.io/blog/en/non-technical-people-are-better-off-in-lovable/>
- Maranhão Filho, É. (2025, March 26). *Chapter 2: the frustration phase*. efrem.io. <https://efrem.io/blog/en/chapter-2-the-frustration-phase/>
- Maranhão Filho, É. (2025, November 27). *The webmaster era of vibe coding*. efrem.io. <https://efrem.io/blog/en/the-webmaster-era-of-vibe-coding/>
- Maranhão Filho, É. (2026, March 26). *Code is not the hard part*. efrem.io. <https://efrem.io/blog/en/code-is-not-the-hard-part/>
- Maranhão Filho, É. (2026, October 27). *Product and UX have never mattered more*. efrem.io. <https://efrem.io/blog/en/product-and-ux-have-never-mattered-more/>

*Notes:* The cases are the author's accounts; names of people, clients, and companies were omitted. The building-series posts document learning phases, dated in the references. The diagnostic request suggested in the chapter is a teaching example, not a literal transcript of those episodes.

</div>
