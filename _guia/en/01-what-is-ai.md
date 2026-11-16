---
title: "What are we calling AI?"
subtitle: "Rules, learning, and human choices."
description: "Written rules, learned behavior, and human choices. How can you investigate what a system does before accepting the AI label?"
lang: en
ref: what-is-ai
order: 1
part: 1
permalink: /ai/what-is-ai/
interactive: "quiz: written or learned rule?"
piece: "the team's tool list: follows a rule or learns?"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 1

Lia, Bia, and Caio work at an organization that seeks out teenagers who have stopped coming to school, before they leave for good. Twelve schools, not many people. At a meeting with the education department, a vendor presented "AI that predicts who will drop out." Iara wanted to buy it before classes resumed: the offer included training and support. Caio thought the team could build it and change the rules without depending on an outside company. Bia wanted to know who would make the visits while they built. Lia asked for time until classes resumed to demonstrate a version. "And who answers when it stops working?" asked Iara. Lia had no answer yet. Afterwards, she asked her agent for a draft tracking list with fictional data. Bia replaced "risk" with "next contact" and tried organizing the following morning. Her hypothesis was different: perhaps the team first needed to stop losing track of the people it was already following up with. Were predicting who would leave and organizing who needed contact the same problem?
</div>

One convention before we start: in this guide, when I write "AI" with no adjective, I mean generative AI — the models that produce text, images, code. When it's something else, like the machine learning in the next chapter, I'll say so.

And a warning about the word. I've watched, from the inside, an automation that had been around for ages turn into an "agents team" overnight. Extra value delivered: zero. Effect on the market: huge. So, before we talk about tools, it pays to distrust the label — and sentences like "the AI decided," "the AI wanted," "the AI understood." Anyone who thinks the machine *wanted* something stops looking for the person who made the choice. The opposite mistake bothers me too: nobody leaves a class of mine saying AI is dumb. It's a tool, and we have to know how to use it.

## Can you define AI in two words?

The open course [Elements of AI](https://course.elementsofai.com/1/1) suggests looking at **autonomy**, acting without someone guiding each step, and **adaptivity**, adjusting behavior with experience. Those are two useful questions to ask about a system. They aren't a universal "has both, therefore it's AI" test.

The [OECD definition](https://doi.org/10.1787/623da898-en) allows different degrees of autonomy and adaptation after deployment. Some AI uses knowledge and rules; some trained models remain fixed while answering. Learning during training isn't the same as learning from every conversation.

And none of those capabilities proves consciousness, intention, or will. For someone building, the question remains: where does the behavior I'm seeing come from, and what have I authorized the system to do?

## Is a calculator intelligent?

A pocket calculator executes defined operations. A spreadsheet can apply formulas to thousands of rows without someone pressing a key for each calculation. Automating many steps is therefore not enough to distinguish AI.

To begin investigating, compare two ways of building a solution:

| | Directly written rules | Behavior learned from examples |
|---|---|---|
| **Example** | Alert when someone reaches five absences | Estimate dropout from historical records |
| **Where the rule comes from** | Someone chose the threshold and wrote the condition | Training adjusted relationships in data according to an objective |
| **What to ask** | Why this threshold? Does the calculation implement the agreement? | Which examples were used? Where does the estimate fail? |
| **In use** | Can run without intervention at each step | Can use a fixed model, without new learning at that moment |

Both ways can appear in the same product. This table compares ways of building; it doesn't divide the whole history of computing into "with AI" and "without AI."

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** in the quiz, ask of each item the question Bia asked out loud: does this follow a rule someone wrote, or did it learn from data? How would you find out, if nobody told you?
</div>

<div data-widget="quiz-ia"></div>

## Why does this distinction matter?

Because it changes the question you ask when something goes wrong.

With a formula, I can inspect the written rule. With a learned model, I also need to investigate the examples and training: the behavior I want to change may not correspond to one local instruction. Both can also fail because of incorrect input or an integration problem. That leads to [how learning works](/ai/how-machines-learn/), [where bias comes from](/ai/bias/), and [who answers for the result](/ai/responsible-generalist/).

It also changes expectations: getting familiar examples right does not prove the solution will work in the next situation. What seems like a small difference to you may greatly change the machine's input. That is worth experimenting with in the next chapter.


## What about conversation assistants?

Their behavior depends on learning from data, but that does not mean learning again with every message. Much of that adaptation happened **during training**. In conversation, the model uses what it learned together with the available context; responding differently doesn't mean its weights changed at that moment. The product can store information and bring it back later. Separating these things matters enough to have its own chapter: [Context is everything](/ai/context/).

## Was AI born in a chat box?

In my [introductions to AI](https://efrem.io/intro-ia/), I go through its evolution before opening the tool. Let's do the same here. The [video that prompted this return to the story](https://www.youtube.com/watch?v=YovHdlRN7VM) tells it through people, bets, and disappointments. It's a useful narrative thread; the milestones below also draw on the original work. You don't need to memorize the cast. You need to notice that an impressive demo, a discovery, and a product are different things.

Alan Turing began with an uncomfortable question: [can a machine think?](https://www2.cs.sfu.ca/~vaughan/teaching/415/papers/turing1950.html) Instead of waiting for agreement on what "thinking" meant, he proposed an imitation game involving written questions and answers. Notice the shift: move away from the word and look at behavior. That doesn't turn convincing conversation into a certificate of consciousness.

Later, John McCarthy organized [a research meeting at Dartmouth](https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth), whose proposal treated intelligence as something a machine could simulate. The ambition was huge. Along the way came unfulfilled promises and periods of retrenchment, the *AI winters* revisited in the video. That doesn't mean research died and came back to life. It means expectations and the ability to deliver didn't move together.

One approach was to write knowledge as rules: if this happens, do that. Expert systems belong to that history. Another was to have machines learn from examples. These aren't steps where the new erases the old. A solution can combine rules, learning, and search — and you'll make choices like that in this guide.

## What changed between winning a game and learning from examples?

A machine [beat Garry Kasparov in a chess match](https://www.ibm.com/history/deep-blue) by combining a search through moves, position evaluation, and plenty of computing power. A milestone. It wasn't an assistant you could take to any problem. The source here is the company that built the machine, describing its achievement.

Later, Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton demonstrated [a deep neural network classifying images](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html) with a significant improvement in performance. Data, networks, and chips capable of many parallel calculations came together. Instead of someone writing every rule for recognizing an image, training adjusted the model. The [next chapter](/ai/how-machines-learn/) opens up that idea.

Another system [beat Lee Sedol at Go](https://deepmind.google/research/alphago/), combining neural networks, search, and learning through games. Some moves surprised people who knew the game. The account comes from the lab responsible, also an interested party. The point to take away: a machine can find a solution nobody wrote as a rule, within a well-defined task. From there to "solves anything" is a leap that headlines tend to skip.

## How did this become something I can use?

The step that matters to us now is the [Transformer](https://arxiv.org/abs/1706.03762): an architecture that changed how relationships between parts of a text are calculated and made parallel training easier. It's the machinery in [chapter 3](/ai/inside-a-language-model/). The paper came out of Google; other teams could build on it.

And here's where we need care with the story that Google invented it and dropped it because it was too expensive. The paper highlighted **lower training costs** compared with the best models used as benchmarks. The company kept researching and [brought this family of techniques to search](https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/). Creating the technology, paying to run it at scale, and deciding to open a chatbot to the public are different decisions.

Explaining the delay in launching a broad chatbot, [Jeff Dean points to false answers, offensive content, and usefulness beyond search that the company underestimated](https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer). It's the account of someone involved who remains tied to the company, not a disinterested explanation. Reducing it all to "too expensive, gave up" erases precisely the product decision worth discussing.

OpenAI [launched ChatGPT as a research preview available to the public](https://openai.com/index/chatgpt/). The format was conversation: ask, read, ask again. The launch didn't create AI. It made a capability accumulated through research accessible through an interface many people could use. For builders, that transition matters as much as the paper: **how do you get a technical capability to someone with a problem?**

I'll stop the timeline there. The rest is the present — and this guide's job is to help you take part in it.

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** Do buying and building solve the same problem? Who keeps the service going while the team learns? And what exactly was being called AI?
- **Paths on the table:**
  - *Iara:* hire the vendor, with training and support. That buys service capacity, but accepts dependence and rules she has not been able to examine.
  - *Caio:* build with agents. The team gains room to change the solution, but takes on maintenance and diverts hours from other work.
  - *Bia:* keep the spreadsheet and request a demonstration using a familiar case. That protects visits now, but postpones a possible improvement.
- **What the team did, for now:** got time until classes resumed and began investigating which parts of its tools follow written rules, which use learning, and what it still cannot distinguish. Lia took responsibility for the demonstration. Iara kept the vendor proposal on the table; nobody had settled who would provide support.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Written rules and learning:** behavior can come from defined instructions, relationships learned from data, or a combination.
- **Autonomy:** running without someone guiding each step does not mean learning with every run.
- **Training and use:** a model can use what it learned without changing its weights during that conversation.

How can a tool act on its own while still following the same rule?

</div>

<div class="g-project" markdown="1">

## What about your project?

Choose something your project needs to do and ask for a first version, however small. What came ready to use? What depended on your decision? Mark where there is an explicit rule, a generated response, or something you still cannot distinguish. What question to the agent would help investigate that difference?

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (15 min)

Ask each person to list five technologies they used today before lunch. In pairs, investigate: what runs without intervention at every step? Did its behavior come from written rules, learning from data, or both? What do you know and what are you assuming? Choose one uncertainty and look for an explanation of how that tool works. "I don't know yet" belongs in the table too.

#### Discussion questions

- If a system is autonomous but not adaptive, who answers for its mistakes? What if it's adaptive?
- Why do we say "the AI decided" and never "the spreadsheet decided"? What does that choice of words hide?
- Is a system that learned from data from five years ago and was never updated again still adaptive?

</details>

<div class="g-fontes" markdown="1">

#### References

- Built From Nothing. (2026, November 9). *The ENTIRE history of AI: the 8 researchers who built modern AI (and why they left)* [Video]. YouTube. <https://www.youtube.com/watch?v=YovHdlRN7VM>
- Dartmouth. (n.d.). *Artificial intelligence (AI) coined at Dartmouth*. <https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth>
- Dean, J., & Shazeer, N.. (2025, February 12). *Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI* [Interview transcript, interview by D. Patel]. Dwarkesh Podcast. <https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer>
- Google DeepMind. (n.d.). *AlphaGo*. <https://deepmind.google/research/alphago/>
- IBM. (n.d.). *Deep Blue*. <https://www.ibm.com/history/deep-blue>
- Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems, 25*. <https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html>
- Maranhão Filho, É.. (n.d.). *Intro IA* [Slides, in Portuguese]. <https://efrem.io/intro-ia/>
- Nayak, P.. (2019, October 25). *Understanding searches better than ever before*. Google. <https://blog.google/products-and-platforms/products/search/search-language-understanding-bert/>
- OECD. (2024). *Explanatory memorandum on the updated OECD definition of an AI system* (OECD Artificial Intelligence Papers No. 8). OECD Publishing. <https://doi.org/10.1787/623da898-en>
- OpenAI. (2022, November 30). *Introducing ChatGPT*. <https://openai.com/index/chatgpt/>
- Turing, A. M. (1950). Computing machinery and intelligence. *Mind, 59*(236), 433–460. <https://www2.cs.sfu.ca/~vaughan/teaching/415/papers/turing1950.html>
- University of Helsinki & MinnaLearn. (n.d.). *How should we define AI?* Elements of AI. <https://course.elementsofai.com/1/1>
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). *Attention is all you need*. arXiv. <https://doi.org/10.48550/arXiv.1706.03762>

*Notes:* The course's original definitions: autonomy is "the ability to perform tasks in complex environments without constant guidance by a user"; adaptivity is "the ability to improve performance by learning from experience."

The timeline revisits the author's *Intro IA* slides and uses the Built From Nothing video (2026) as a narrative thread, checked against historical sources: Turing (1950); the Dartmouth meeting (1956); Deep Blue against Kasparov (1997); AlexNet (2012); AlphaGo against Lee Sedol (2016); *Attention is all you need* (2017); ChatGPT, launched on November 30, 2022. The account stops at that launch, before the later leadership conflicts. BERT entered Google Search in 2019 (Nayak, 2019). In the Dean and Shazeer interview (2025), the discussion of the delay in launching a chatbot is at 2:06–2:09; it is a participant account, not proof of a single cause. The consulted sources do not support the claim that Google abandoned investment in AI because it considered it too expensive. Autonomy and adaptivity are treated as dimensions, not as two simultaneously mandatory conditions. OECD (2024) distinguishes adaptation during development and after deployment. The quiz compares written rules and learned behavior in simplified examples.

</div>
