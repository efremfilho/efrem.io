---
title: "Retrieve before answering"
description: "The model hasn't read your organization's documents. How do you get it to look at the right page at the right time — and say so when it didn't find it?"
lang: en
ref: retrieval
order: 9
part: 2
permalink: /ai/retrieve-before-answering/
interactive: "which excerpts would you bring?"
piece: "the ten most repeated questions, with the page that answers each one"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 9

The school system's protocol has three hundred pages, three versions, and an appendix that exists only on paper. Lia has already learned that pasting everything into the conversation doesn't work. But the team asks the same things every week — how many absences, who calls, who visits — and each person answers a different way. If not even the team agrees on what the protocol says, what is an assistant going to say?
</div>

Two earlier chapters left a problem set up. [Chapter 3](/ai/inside-a-language-model/) showed that the model fills in with what is plausible when it doesn't have the fact. [Chapter 8](/ai/context/) showed that dumping every document into the context window makes the answer worse. That leaves the question: how do you hand over only the right piece, at the moment it's needed?

## Where does the model get what it knows?

From two places, and it's worth never confusing one with the other.

| | What was left from training | What's in the context window right now |
|---|---|---|
| **What it is** | Patterns from billions of texts | What you wrote, what you attached, or what the system found in a search |
| **How current it is** | Stopped on some date | As current as what you provide |
| **Your organization** | Almost certainly not in there | Only if someone puts it there |
| **Can you check where it came from?** | No | Yes — it's right in front of you |

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

The search in the experiment is simple on purpose: it counts words in common. Real systems compare meaning, not words. But what you decided there — how many excerpts go in, what to do when none of them fits — are human decisions in any version.

## Where does this break?

Instead of a list of flaws, here are questions to ask any system of this kind — including the one you're going to build:

- **Did the cut land in the wrong place?** A rule and its exception, in different excerpts, become two "truths."
- **Does the question use the document's words?** The person asking says "disappeared from school"; the protocol says "irregular attendance."
- **Which version is in the base?** A revoked document, if it's in there, will be cited with the same confidence.
- **And when there is no answer?** Does the system know how to say "I couldn't find it"?
- **Who can see what?** If the base has restricted documents, the search has to respect the permissions of the person asking.

Notice that only the first question is technical. The others are about the organization: who looks after the documents, who decides which one counts, who can read them.

## And when the answer isn't in any document?

Sometimes what's missing isn't a text, it's a piece of data or an action: how many absences a student has today, what a school's address is, opening a ticket. That's what **tools** are for: the model writes the request ("look up the attendance for code E-027"), the system actually runs it and sends the result back to the context window.

The logic is the same as with search — bringing into the context what the model doesn't have — with one important difference: a tool can *do* things. The questions about that are left for [chapter 15](/ai/agents-on-a-leash/).

## Do I really need this?

Maybe not, and that's an honest question to ask before building anything. If the document is short and fits comfortably in the context window, paste the document. If the question is always the same, write the answer once. I like to say that [the basics come before these techniques](/blog/en/before-rag-and-mcp-learn-the-basics/): choosing the model, asking well, giving context. A lot of people build the bookshelf before knowing what question they want to answer.

## A path, in five questions

1. **What is the source of truth?** A document, a spreadsheet, a person?
2. **Who keeps it up to date** — and how does the base find out when it changes?
3. **How will I know where each answer came from?**
4. **What does the system do when it doesn't find anything?**
5. **Who can't see what?**

If you can answer all five, the technical part is the smallest part. If you can't, no technique will fix it.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- The model has two memories: what was left from training and what's in the context window. Only the second one can be checked.
- Retrieving before answering means handing over the right excerpt at the right time, and demanding the citation.
- The quality of the answer depends more on who looks after the documents than on the model.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** which version of the protocol is the one that counts, and who decides that? Which is worse — the system not finding anything, or finding the wrong page?
- **A way to find the answer:** start with the ten questions the team repeats most; for each one, locate by hand the page that answers it; only then build the base; test with questions whose answers she knows, and with one that has no answer.
- **New project piece:** the ten most repeated questions, each with the page that answers it.
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

- Lewis, P., Perez, E., Piktus, A., Petroni, F., et al. (2020). *Retrieval-augmented generation for knowledge-intensive NLP tasks*. arXiv. <https://doi.org/10.48550/arXiv.2005.11401>
- Maranhão Filho, É. (2025, June 30). *Before RAG and MCP, learn the basics*. efrem.io. <https://efrem.io/blog/en/before-rag-and-mcp-learn-the-basics/>

</div>
