---
title: "Which of these rules applies now?"
subtitle: "Source lookup, retrieval, and authority."
description: "The model hasn't read your organization's documents. How do you get it to look at the right page at the right time — and say so when it didn't find it?"
lang: en
ref: retrieval
order: 9
part: 2
permalink: /ai/retrieve-before-answering/
interactive: "which excerpts would you bring?"
piece: "the ten most repeated questions, with the page that answers each one"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 9

Iara called: a family had received two visits in the same week, each visitor following "the protocol." Lia had shortened the project instructions and cut the indication of which document applied in each situation. Bia used the form she knew from fieldwork; Caio found a newer version that did not mention the paper appendix. He asked the agent: "compare the instructions and show where they differ, with page numbers." Bia reviewed it and found an exception the comparison had missed. Retrieval helped expose the dispute. It did not decide who could settle it. While Iara checked with the department, who would answer the next school?
</div>

Two earlier chapters left a problem set up. [Chapter 3](/ai/inside-a-language-model/) showed that the model fills in with what is plausible when it doesn't have the fact. [Chapter 8](/ai/context/) showed why organizing documents matters even when they all fit in the window. That leaves the question: how do you hand over only the right piece, at the moment it's needed?

## Where does the model get what it knows?

From two places, and it's worth never confusing one with the other.

| | What was left from training | What's in the context window right now |
|---|---|---|
| **What it is** | Patterns from billions of texts | What you wrote, what you attached, or what the system found in a search |
| **How current it is** | Stopped on some date | As current as what you provide |
| **Your organization** | May include outdated public information; that does not mean it knows the current project | Can receive records selected for this task |
| **Can you check the source?** | The answer alone does not show which training material it came from | You can open the document and check whether it supports the claim |

Which of the two columns would you want answering a question about your school system's protocol?

## What if it could look things up before answering?

That's the idea that became known by the acronym RAG (*retrieval-augmented generation*), a name that comes from an [academic paper](https://arxiv.org/abs/2005.11401). Setting the name aside, it's four steps:

1. **Cut** the documents into excerpts.
2. **Represent** each excerpt as a vector — the *embedding* from chapter 3 — so that excerpts on similar subjects end up close together.
3. **Search**, for each question, for the excerpts closest to it.
4. **Answer** with those excerpts inside the context window, asking the model to say which one each claim came from.

The model is still the same. What changes is that, before it completes the text, someone went to the bookshelf.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** pick the question about the stipend. The answer isn't in the base. What would you rather the system do: risk a well-written answer, or admit it didn't find one? And how would you force it to?
</div>

<div data-widget="busca"></div>

The experiment retrieves by counting shared words. Retrieval can use words, learned relationships, or combinations; the [reference paper also compares retrieval methods](https://arxiv.org/html/2005.11401v4). The exercise exposes a decision: if a retrieved passage concerns the same subject but doesn't answer the question, should it count as evidence?

## Where does this break?

Instead of a list of flaws, here are questions to ask any system of this kind — including the one you're going to build:

- **Did the cut land in the wrong place?** A rule and its exception, in different excerpts, become two "truths."
- **Is there a table in the middle?** Retrieval by excerpts was designed for running text. A table with two header rows and merged cells reaches the model as a soup of numbers.
- **Does the question use the document's words?** The person asking says "disappeared from school"; the protocol says "irregular attendance."
- **Which version is in the base?** A revoked document, if it's in there, will be cited with the same confidence.
- **And when there is no answer?** Does the system know how to say "I couldn't find it"?
- **Who can see what?** If the base has restricted documents, the search has to respect the permissions of the person asking.

These questions mix technology and organization. Well-implemented retrieval can return a revoked rule; an updated collection can be searched poorly. Whoever maintains the documents and whoever builds retrieval need to work together.

## And when the answer isn't in any document?

Sometimes what's missing isn't a text, it's a piece of data or an action: how many absences a student has today, what a school's address is, opening a ticket. That's what **tools** are for: the model writes the request ("look up the attendance for code E-027"), the system actually runs it and sends the result back to the context window.

The logic is the same as with search — bringing into the context what the model doesn't have — with one important difference: a tool can *do* things. The questions about that are left for [chapter 15](/ai/agents-on-a-leash/).

## Does it work with my own bookshelf?

My first attempt to create a tutor for studying AI [didn't go so well](/blog/en/my-public-commitment-to-study-ai/). After experimenting, I went looking for open courses and materials organized by topic. The episode leaves a question: which sources would support what the tutor taught? Does assigning that role also settle the choice of material?

When I prepared a course for product people, I gathered the links to all my presentations and to the lists I maintain — some two hundred sources — into a notebook configured to answer from them and identify the file and passage used. It works better than I expected.

And it breaks exactly where this chapter says it breaks. Some sources were empty, because the page had changed. And when someone in the class asked about a subject that wasn't in the base, it answered anyway, citing an excerpt that had nothing to do with it.

## Did questions about sources begin with AI?

Before these assistants, I already assigned [work that had to be done with plagiarism](https://docs.google.com/document/d/1MFKLA7-5aMS9MI32p3sNLCqLCmIFeQ_NFAfvylH2nzY/edit?usp=sharing), inspired by uncreative writing. Students assembled a text from different sources, identified by colors. Next to each reference, they had to explain why they used it and why it was reliable. The exercise did not authorize hiding authorship: it made origins visible.

The question returns with the model's answer: what came from a source you can check? What was inferred? What remains unsupported? An explanation that hides those differences can sound much better than the work supporting it.

## Do I really need this?

Maybe not, and that's an honest question to ask before building anything. If the document is short and fits comfortably in the context window, paste the document. If the question is always the same, write the answer once. I like to say that [the basics come before these techniques](/blog/en/before-rag-and-mcp-learn-the-basics/): choosing the model, asking well, giving context. A lot of people build the bookshelf before knowing what question they want to answer.

## What questions help you choose a path?

1. **What is the source of truth?** A document, a spreadsheet, a person?
2. **Who keeps it up to date** — and how does the base find out when it changes?
3. **How will I know where each answer came from?**
4. **What does the system do when it doesn't find anything?**
5. **Who can't see what?**

If you can answer all five, the technical part is the smallest part. If you can't, no technique will fix it.


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** Does finding a document settle the question or reveal conflicting versions? Who has the authority to say which one applies?
- **Paths on the table:**
  - *Caio:* index all versions, clearly identified, to locate disagreements. That helps investigation, but an answer may still mix incompatible rules.
  - *Bia:* provisionally retain the form field teams use. That preserves continuity, but may prolong an outdated instruction.
  - *Lia:* pause disputed instructions until the department decides. That avoids choosing without authority, but leaves questions without an immediate answer.
- **What the team did, for now:** built a reference for frequent questions, with page and version. For conflicts, it adopted Lia's proposed pause and requested a decision from Iara. One school had to wait for a reply; the cost of caution appeared in the schedule, not in retrieval quality.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Retrieval:** finding relevant material before generating an answer; the model need not have learned that document during training.
- **Distinct stages:** the source can be wrong, retrieval can miss the passage, and generation can distort it.
- **Citation:** offers a route to checking. The conclusion still needs support from the passage.

If an answer cites a real document and is still wrong, where would you look for the problem?

</div>

<div class="g-project" markdown="1">

## What about your project?

Choose a recurring question in your project and identify the material that should help answer it. Request the answer with the passages used, and open those passages. Do they support the conclusion? If two sources disagree, who can resolve the difference — and what can you deliver in the meantime?

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (30 min) — the human library

Hand out a four- or five-page set of regulations (your own institution's will do), cut up into paragraphs, one per person. One pair asks questions out loud. Anyone who thinks their paragraph answers the question raises a hand; the class picks two at most; a third person answers using only what was read. Include, on purpose, a question the regulations don't answer.

#### Discussion questions

- On which question did too many people raise their hands? What does that say about how the text was cut?
- When the answer didn't exist, did anyone try to answer anyway? Why?
- In your organization, which document does everyone cite while nobody knows which version is in force?
- Who should be able to ask, but shouldn't be able to read everything?

</details>

<div class="g-fontes" markdown="1">

#### References

- Goldsmith, K. (2011). *Uncreative writing: Managing language in the digital age*. Columbia University Press.
- Lewis, P., Perez, E., Piktus, A., Petroni, F., et al. (2020). *Retrieval-augmented generation for knowledge-intensive NLP tasks*. arXiv. <https://doi.org/10.48550/arXiv.2005.11401>
- Maranhão Filho, É. (2014). *Trabalhos com plágio* [Assignment instructions, in Portuguese]. <https://docs.google.com/document/d/1MFKLA7-5aMS9MI32p3sNLCqLCmIFeQ_NFAfvylH2nzY/edit?usp=sharing>
- Maranhão Filho, É. (2025, June 30). *Before RAG and MCP, learn the basics*. efrem.io. <https://efrem.io/blog/en/before-rag-and-mcp-learn-the-basics/>
- Maranhão Filho, É. (2025, September 24). *My public commitment to study AI by the end of the year*. efrem.io. <https://efrem.io/blog/en/my-public-commitment-to-study-ai/>

*Notes:* The source-based writing exercise was assigned by the author in 2014, inspired by Goldsmith (2011). The original document describes color identification, multiple sources, and discussion of reliability.

</div>
