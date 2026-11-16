---
title: "Why can such a good explanation be wrong?"
subtitle: "Language models, attention, and generation."
description: "From text to number, from number to the next word. What happens between your question and the answer — and why is plausible not the same as true?"
lang: en
ref: inside-llm
order: 3
part: 1
permalink: /ai/inside-a-language-model/
interactive: "tokens + meaning in context + the next word"
piece: "the questions that never go out without the source attached"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 3

Lia described a student who had stopped attending school to an assistant, without giving a name. Three confident paragraphs came back, with likely causes and a recommendation. Bia recognized situations she encountered on visits: "that's exactly it." Caio asked to see where each claim came from. There was no document about this student. The text had moved from "this can happen" to "this happened to her" without warning. Lia had already copied a passage into the draft report. Bia didn't want to throw away the questions it suggested. If an explanation fits what the team believes, does that make it easier or harder to notice that nobody has checked it?
</div>

The [previous chapter](/ai/how-machines-learn/) showed a network as a combination of operations adjusted through training. A *Transformer* is one way to organize such a network to relate parts of a sequence. The name sounds like something out of a movie. The question stays simple: *what goes in, what changes along the way, and what comes out?*

The [brief visual introduction to language models](https://www.youtube.com/watch?v=LPZh9BOjkQs) offers a useful image: a conversation script whose answer still needs completing. The model produces the continuation. Let's open up this machine without doing the calculations. **This is the text generation mechanism; the whole assistant may also search documents, execute code, and use other tools.**

## What does the model receive when I write?

Text is cut into pieces called **tokens** — a word, part of one, punctuation — and each piece gets a numeric identifier. Think of an item's number in a catalog: it identifies the item but doesn't explain what it means.

<div data-widget="tokens"></div>

If the model counts pieces, counting words isn't enough to know how much fits in a conversation. The experiment illustrates the splitting; the exact cuts depend on the model.

## How does a number carry meaning?

The identifier gives access to a list of numbers adjusted during training: the ***embedding***. The [visual explanation of the Transformer](https://www.youtube.com/watch?v=wjZofJX0v4M) helps us imagine these lists as positions on a map of relationships. On that map, "school" and "college" might have close relationships. Distance represents learned similarities, not miles or a dictionary definition.

You don't need to visualize thousands of directions. Keep the idea: **representing a word means placing it in relation to other things**. But "bank" could still mean the side of a river or a financial institution. The initial representation is only the beginning. The sentence is missing.

## How does the sentence change the meaning of "bank"?

Switch between the passages in the tabs and notice the clues that come before the word:

<div data-widget="tabs" data-title="Which bank?" data-sub="An illustration of context, not a view inside an actual model." markdown="1">

#### Resting by a river?

*Lia rested on the river bank.*

"River" favors the sense of land beside the water. The word "bank" stays the same, but its relationship with another word helps select the interpretation.

#### Asking for a loan?

*Lia asked for a loan at the bank.*

"Loan" favors the financial institution. There was no need to change the word "bank"; the context it relates to changed.

#### Just waiting?

*Lia waited by the bank.*

It could be a riverside or a financial institution. More calculation doesn't create the information the sentence left out. Asking may be better than confidently completing it.

</div>

In [attention](https://www.3blue1brown.com/lessons/attention/), token representations receive information from other available tokens, with different levels of influence. It's like adding notes to the initial meaning: *in this passage, this clue carries more weight*. Several relationships can be calculated in parallel. Word order matters too: "the student called the principal" isn't "the principal called the student."

Here's the effect that matters: the piece gradually stops representing just an isolated word and starts carrying information from that context. "Attention" is the mechanism's name, not a person consciously choosing what to read.

## Does attention do the whole job?

No. Between attention steps, [other layers transform each representation using patterns adjusted during training](https://www.3blue1brown.com/lessons/mlp/). The cycle repeats: relate the parts of the text, transform the result, relate them again. The next piece emerges from this combination of **the available context and what training left in the parameters**.

Think of reading a message using both the clues in that message and what you've already learned about language. The analogy helps distinguish the two contributions. It doesn't mean the machine has your life experience, or that each fact sits in its own labeled drawer.

## So does it answer?

At the end of those steps comes a distribution: probabilities assigned to possible continuations. A token is selected, added to the text, and the calculation starts again with it included. Selection can use sampling or always favor the most likely option, depending on the configuration. The model doesn't draw disconnected words from a bag: the probabilities depend on what came before.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** pick the sentence about the student. Before drawing, try it yourself: what word would come next? What would you need to know to get it right — and is that information available?
</div>

<div data-widget="proxima"></div>

The control you adjusted is called **temperature**. In the experiment, lowering it concentrates the probabilities; raising it gives alternatives more room. It's a variety control. It isn't a truth button. Repeating the same wrong answer more consistently is still getting it wrong.

Go back to Lia's scene. The assistant received a short description; it neither received nor searched for records supporting the causes it added. It could produce an explanation that fit the subject; it had no evidence for attributing it to that person. I often say it doesn't speak the truth: it speaks the next word you want to hear. That's a provocation. The mechanism isn't reading your wishes, and an answer can be correct. The problem is that fluency alone doesn't show where the claim came from.

One mistake that cost me work was less spectacular than inventing a biography. [While migrating an application](/blog/en/migrating-to-gpt-5-has-been-painful/), the agents did not recognize the new service I wanted to use. They treated the change as an error, undid the implementation, and reverted to the familiar default. They broke the application while trying to "fix" what they did not know. I had to bring current documentation into the project. The problem could return in later changes. An answer familiar to the model may be outdated for my work.

## If it's the next word, why does it seem to understand?

Because the task's name doesn't tell you how much work it requires. Complete *"Lia put the form in the blue folder. Bia took the folder to the education department. The form is now…"*. To continue coherently, it helps to track objects, places, and actions. A task described in a few words can require complicated relationships.

[Training to complete text isn't an assistant's whole education either](https://openai.com/index/chatgpt/). Later stages aim to improve instruction following and responses. The system can learn to say "I don't know," ask for clarification, or use tools. None of that guarantees it will choose well in every case.

Whether this deserves the name "understanding" is a discussion I won't settle here. For builders, other questions already give us enough work: *what can it do, under what conditions, and how do I check?* Neither treat it as a person nor dismiss a capability because it's made of calculations.

## Why did that paper change so much?

Imagine a message passing from person to person in a line. For one end to receive something from the other, the information travels the whole distance. Now imagine each person can directly consult the relevant parts of the message. It's an analogy for the difference between passing information sequentially and calculating relationships through attention; it doesn't mean the model reads or thinks like a classroom.

The [original paper](https://arxiv.org/abs/1706.03762) presented the Transformer on translation tasks. Its contribution wasn't inventing attention from scratch: it was making attention central to an architecture that did not have to pass information through the whole sequence, step by step, as the recurrent networks it compared against did. That allowed **more parallel work during training**, with good results and less processing time. An [explanation by one of the authors](https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/) shows how. He was writing on the blog of the company behind the research, an interested party.

Don't confuse that parallelism with the whole answer coming out at once. In the model we're following here, generation still adds one token at a time. Training and using what was trained are different operations.

## And what did the people who wrote it go on to do?

The paper has eight names on it. The paths documented in the notes include new labs, enterprise model companies, agents that operate software, molecular research, and distributed infrastructure. There was also a return to the original company and another departure. I've kept names, destinations, and sources together in the notes, because this part changes.

What matters for builders is seeing the range of possible directions. A discovery about relationships between parts of a sequence doesn't have to end in the same product for everyone. The question it leaves is very much a product question: *with this capability in your hands, what problem would you choose to solve?*

## What if I was the one who accepted the answer?

To feel it firsthand, I forced myself to write an entire text with AI. [Fifteen minutes of prompting, five hours of editing](/blog/en/15-minutes-of-prompting-5-hours-of-editing/). Several of the cited sources did not exist; I looked, couldn't find them, and cut the passage. The work didn't shrink. It unlocked something I've always been bad at, which is writing. And in the end, it wasn't the AI that generated it: I was the one who delivered it.

## What do I do with this?

Four questions start following every use:

1. **Where did this claim come from?** If it depends on a fact about your organization, was it supplied, found in a source, or merely inferred? A hypothesis doesn't become a fact because it is well written.
2. **Is the information up to date?** Training doesn't update itself with every event. The assistant may search for recent data, but I need to check whether it did, and which source it used.
3. **Do I need to apply an exact rule?** Then it is worth separating text generation from verifiable calculation, as in [chapter 10](/ai/ask-for-the-script/).
4. **Does it fit?** Everything is counted in tokens: what you write, what you attach, what it answers.

It's what I repeat in every training session: [before any sophisticated technique, the basics](/blog/en/before-rag-and-mcp-learn-the-basics/). Understanding how the model works, knowing how to choose one, and knowing what to put in the input solves most of the problems.


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** A useful hypothesis can become an invented fact the next time it is copied. How can they keep the question without turning a person into a character in the answer?
- **Paths on the table:**
  - *Lia:* stop using AI to draft the report for now. That reduces this route to error, but returns all the writing to the team.
  - *Bia:* use the hypotheses as questions for visits. That may help them listen, but can also lead them to seek only what confirms the answer.
  - *Caio:* require an origin for every claim about a case. That preserves some writing help, but adds checking work and does not guarantee the source is right.
- **What the team did, for now:** removed the paragraph from the report. Bia kept the questions in a hypotheses section, including "what else could explain this?"; Caio reviewed the separation between accounts and assumptions. Lia would have to rewrite the passage before the meeting.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Tokens and representations:** text becomes units and numbers that the model transforms according to context.
- **Attention:** helps relate parts of the input; other network operations also transform those representations.
- **Generation:** continuation probabilities are not a measure of truth. The assistant can use tools and sources, but what it did needs checking.

Why can a coherent explanation still be unfounded?

</div>

<div class="g-project" markdown="1">

## What about your project?

Choose a claim that entered your project because it sounded convincing. How would you check it outside the conversation with the model? If you cannot, what can remain a hypothesis and what needs to leave the delivery? Make that change and observe what it forces you to reconsider.

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — the class as a model

Write the beginning of a sentence on the board ("The biggest problem in our city is…"). Each person writes down, without showing anyone, the next word. Tally the answers on the board: that's the distribution. Now draw one at random (with a die or an app), add it to the sentence, and repeat for five rounds. Then do it again, always choosing the one with the most votes. Compare the two texts.

#### Discussion questions

- Is the sentence the class produced "true"? Whose opinion does it express?
- If the class were made up only of people from one neighborhood, what would change in the distribution?
- In which tasks in your work do you want the draw? In which would it be unacceptable?
- How would you check an answer on a subject you don't know well?

</details>

<div class="g-fontes" markdown="1">

#### References

- 3Blue1Brown. (n.d.). *Neural networks* [Video series]. <https://www.3blue1brown.com/topics/neural-networks>
- Alnylam Pharmaceuticals & Inceptive. (2026, June 3). *Alnylam and Inceptive form strategic AI collaboration to accelerate the discovery of RNAi therapeutics* [Press release]. Inceptive. <https://inceptive.com/blog/alnylam-ai-rnai-therapeutics-partnership>
- Anthropic. (2025, September 29). *Effective context engineering for AI agents*. <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>
- Cai, K.. (2024, August 2). *Google hires top talent from startup Character.AI, signs licensing deal*. Reuters. <https://www.investing.com/news/economy-news/google-inks-licensing-deal-with-characterai-hires-its-cofounders-3552866>
- Cohere. (n.d.). *About Cohere*. <https://cohere.com/about>
- Essential AI. (2023). *We are excited to announce Essential AI* [Post]. LinkedIn. <https://www.linkedin.com/posts/essentialai_essential-ai-linkedin-activity-7140477733100281856-m5Mc>
- Goldman, S.. (2026, June 20). *Nvidia quietly acquihires Essential AI team, including Transformer coauthor Ashish Vaswani*. Ground Level AI. <https://www.groundlevel-ai.com/p/nvidia-quietly-acquihires-essential>
- Luan, D.. (2022, April 26). *Introducing Adept*. Adept. <https://www.adept.ai/blog/introducing-adept/>
- Maranhão Filho, É. (2025, August 8). *Migrating to GPT-5 has been painful*. efrem.io. <https://efrem.io/blog/en/migrating-to-gpt-5-has-been-painful/>
- Maranhão Filho, É. (2025, June 30). *Before RAG and MCP, learn the basics*. efrem.io. <https://efrem.io/blog/en/before-rag-and-mcp-learn-the-basics/>
- Maranhão Filho, É. (2025, September 23). *15 minutes of prompting, 5 hours of editing*. efrem.io. <https://efrem.io/blog/en/15-minutes-of-prompting-5-hours-of-editing/>
- NEAR AI. (n.d.). *Company*. <https://near.ai/company>
- OpenAI Forum. (2025, October 8). *Learning powerful models: from Transformers to reasoners and beyond* [Event page and speaker biography]. <https://forum.openai.com/public/events/virtual-event-learning-powerful-models-from-transformers-to-reasoners-and-beyond-dxm2qrm1au>
- OpenAI. (2022, November 30). *Introducing ChatGPT*. <https://openai.com/index/chatgpt/>
- Parmar, N.. (n.d.). *Niki Parmar* [Professional profile]. LinkedIn. <https://www.linkedin.com/in/nikiparmar>
- Polo Club of Data Science. (n.d.). *Transformer Explainer: LLM transformer model visually explained*. Georgia Institute of Technology. <https://poloclub.github.io/transformer-explainer/>
- Primack, D.. (2026, June 18). *Top AI researcher leaves Google for OpenAI*. Axios. <https://www.axios.com/2026/06/18/noam-shazeer-google-openai-characterai>
- Sakana AI. (n.d.). *Company information*. <https://sakana.ai/company-info/>
- Sanderson, G. (2024, April 1). *Transformers, the tech behind LLMs* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/gpt/> Companion video: <https://www.youtube.com/watch?v=wjZofJX0v4M>
- Sanderson, G. (2024, April 7). *Attention in transformers, step-by-step* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/attention/>
- Sanderson, G. (2024, August 31). *How might LLMs store facts* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/mlp/>
- Sanderson, G. (2024, November 20). *Large language models explained briefly* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/mini-llm/> Companion video: <https://www.youtube.com/watch?v=LPZh9BOjkQs>
- Uszkoreit, J.. (2017, August 31). *Transformer: a novel neural network architecture for language understanding*. Google Research. <https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/>
- Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). *Attention is all you need*. arXiv. <https://doi.org/10.48550/arXiv.1706.03762>

*Notes:* Sanderson's lessons on LLMs, Transformers, attention, and MLPs support the intuition for the mechanism. The script awaiting completion comes from the brief video; the relationship map adapts the embedding explanation; the bank examples and Lia's folder are teaching adaptations created for this guide. The tabs do not run a model or display measured weights. In English, a riverbank replaces the Portuguese bench meaning, preserving the ambiguity of the word. Attention exchanges information between permitted positions; in a causal generation model, each position cannot consult future tokens. This limit does not prevent parallel calculation during training. Intermediate layers also transform representations; attention is not the whole network. The original ChatGPT announcement documents stages after pre-training; Anthropic (2025), an interested party, describes tools and retrieved information in agent contexts.

To see the mechanism, the suggested order is: [brief overview](https://www.youtube.com/watch?v=LPZh9BOjkQs), [Transformers and embeddings](https://www.youtube.com/watch?v=wjZofJX0v4M), [attention](https://www.3blue1brown.com/lessons/attention/), and [intermediate layers](https://www.3blue1brown.com/lessons/mlp/). The [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) lets you explore a small model from inside. These are optional deeper readings: no formula is a prerequisite for continuing the guide.

The paper by Vaswani et al. was submitted to arXiv on June 12, 2017. Uszkoreit's explanation (2017) complements the paper; the line-of-people analogy is a teaching simplification.

#### Where did the eight people behind the paper go?

A selection of career paths documented in sources consulted on November 15, 2026. The dates of announcements and reports matter: an old biography does not guarantee a current affiliation. Company pages and personal profiles come from interested parties; here they support affiliations and stated aims, not endorsements of company quality.

| Person | Path after their work at Google |
|---|---|
| Ashish Vaswani | Co-founded [Adept](https://www.adept.ai/blog/introducing-adept/) and [Essential AI](https://www.linkedin.com/posts/essentialai_essential-ai-linkedin-activity-7140477733100281856-m5Mc). Sharon Goldman [reported his hiring by Nvidia in June 2026](https://www.groundlevel-ai.com/p/nvidia-quietly-acquihires-essential). |
| Noam Shazeer | Co-founded Character.AI and [returned to Google DeepMind in 2024](https://www.investing.com/news/economy-news/google-inks-licensing-deal-with-characterai-hires-its-cofounders-3552866). Then: [OpenAI, June 2026](https://www.axios.com/2026/06/18/noam-shazeer-google-openai-characterai). |
| Niki Parmar | Co-founded [Adept](https://www.adept.ai/blog/introducing-adept/) and [Essential AI](https://www.linkedin.com/posts/essentialai_essential-ai-linkedin-activity-7140477733100281856-m5Mc). Her [public professional profile](https://www.linkedin.com/in/nikiparmar) lists Anthropic. |
| Jakob Uszkoreit | Co-founded [Inceptive](https://inceptive.com/blog/alnylam-ai-rnai-therapeutics-partnership), which applies models to molecular and drug research; the 2026 announcement identifies him as CEO. |
| Llion Jones | Co-founded [Sakana AI](https://sakana.ai/company-info/), an AI research lab based in Tokyo. |
| Aidan N. Gomez | Co-founded [Cohere](https://cohere.com/about), focused on AI for organizations; its company page identifies him as CEO. |
| Łukasz Kaiser | Moved to [OpenAI](https://forum.openai.com/public/events/virtual-event-learning-powerful-models-from-transformers-to-reasoners-and-beyond-dxm2qrm1au), where the 2025 event biography identifies him as a deep learning researcher. |
| Illia Polosukhin | Co-founded the NEAR blockchain project and [NEAR AI](https://near.ai/company), whose stated aim is user-owned AI. |

</div>
