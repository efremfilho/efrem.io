---
title: "Is that really what the person said?"
subtitle: "Voice, images, video, and faithful records."
description: "Audio becomes text, a photo becomes a table, text becomes an image. What do you gain, what can go wrong without anyone noticing — and whose voice is it?"
lang: en
ref: multimodal
order: 14
part: 3
permalink: /ai/beyond-text/
interactive: "four conversions and what to ask each one"
piece: "the rule for what can be recorded and how long it's kept"
last_modified: 2026-11-17
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 14

The communication trial reserved earlier did not produce one winning format: one family asked for audio to listen to later; another preferred a short message they could forward. Bia wanted to keep both; Caio pointed out that each version would need to follow changes in guidance. To save time after visits — since filling in the new form had already cost a contact — Bia also began recording her own voice notes.

Lia asked an agent for transcripts and summaries by family. Caio reviewed one with Bia: where she said "perhaps she changed shifts," the summary stated that the student had changed; another sentence appeared as the mother's words, but was Bia's interpretation. Going back to the audio settled those questions. Would it settle the ones in records nobody could review that day? Bia wanted to keep the voice notes to preserve context; Caio wanted a short record so service could continue. What needed to reach the next person: what was said, what was understood, or what remained to be checked?
</div>

For a long time I could only use generative AI professionally with text — I even [asked in public whether I was missing something](/blog/en/am-i-missing-out-on-multimodal-ai/). Today I [record conversations to think about later](/blog/en/recording-calls-to-think-with-claude/). Talking to the machine, for me, depends on the stage of the work. [I started talking a lot more with agents](/blog/en/coding-agents-are-becoming-a-commodity/) and have been finding my multimodal process: I talk to brainstorm, and I stop to write when I need to think before I send — especially in reviews. The machine now accepts the world in the format it happens in. The use that serves me best is one of the simplest: I share my screen with a voice assistant and ask it to guide me through a setup I haven't mastered. "Click the menu on the left. See the button on the right?" It's tech support that sees what I'm seeing.

This has a name — **multimodal** models — and it raises one question before any other.

## What changes when the input isn't text?

An image can be represented as a grid of numbers ([chapter 2](/ai/how-machines-learn/)); audio, as measurements of a sound wave. That makes the materials available to computation. It doesn't mean every tool uses the same machinery for everything.

Some transcription systems learn to [predict text from audio](https://arxiv.org/abs/2212.04356). Some image generators [learn to remove noise in stages](https://arxiv.org/abs/2006.11239): imagine an image emerging from static, an analogy for the process, not a photograph hidden inside. You don't need to master those calculations to use them; you need to recognize that requesting a transcript, reading an image, and generating another image are different tasks.

The practical question remains: what was captured from the original, and what was added or interpreted? [Chapter 3](/ai/inside-a-language-model/) helps you question fluency; it does not prove fidelity when the input is voice or image either.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** before opening each tab, answer this: if the transcript of a visit comes with a sentence nobody said, who is going to notice — and when?
</div>

<div data-widget="tabs" data-title="Four conversions and what to ask each one" data-sub="Click each tab. In every one, the last line is a question, not an answer." markdown="1">

#### Voice → text

**What you gain.** The account of a visit, the meeting, the class: it all becomes searchable text that can be summarized and compared.

**Where it tends to go wrong.** Proper names, numbers, accents, people talking over each other. And a stranger kind of error: stretches of silence or noise can turn into whole sentences nobody said. [A study](https://arxiv.org/abs/2402.08021) of a widely used transcription system found made-up sentences in about 1% of the recordings, more often in speech with long pauses. I myself once got a transcript that ended with a [subtitling credit I never dictated](/blog/en/a-speech-to-text-slip/). And [while trying to transcribe a long class with an open model](/blog/en/over-engineering-a-confession/), I watched the transcript get stuck after about two hours and repeat the same sentence over and over. I lost two days trying to fix it by hand. The way out took a minute: pull the audio out of the video, lower the quality, and upload it to a ready-made tool. Overcomplicating is also a way of getting it wrong.

**The question.** Who listens to the original audio before the transcript becomes the official record?

#### Image → data

**What you gain.** The photo of the paper attendance list becomes a table. The scanned document becomes filled-in fields.

**Where it tends to go wrong.** Handwriting, a 1 that becomes a 7, a skipped row, a shifted column. The result always comes out clean and aligned — including when it's wrong.

**The question.** How do you check without redoing everything by hand? (Hint: totals that have to match and a randomly drawn sample.)

#### Text → image

**What you gain.** An illustration for your materials, a sketch of a screen, variations on an idea in seconds.

**Where it tends to go wrong.** It repeats the stereotypes from training ([chapter 4](/ai/bias/)): ask for "a scientist" a few times and watch who shows up. It can produce something that looks like a photograph of a real person.

**The question.** Will the people who see this image know it was generated? Should they know?

#### Text → voice and video

**What you gain.** Narration for your materials, a short explainer video, accessibility for people who don't read.

**Where it tends to go wrong.** It's the use that consumes the most energy ([chapter 6](/ai/physical-cost/)). And it's the one that comes closest to putting words in someone's mouth.

**The question.** Whose voice and face are these — and did that person agree?

</div>

## Is handwriting still the weak spot?

Less than I wrote up there. A friend who is a professor and works with notary records more than a century old told me he wasn't worried: the files he reads, no AI would read. We made a bet. His verdict, looking at the result: it reads better than doctoral students.

What interests me is something else. On the burned or torn pages, the tool *deduces* what would have been written there. It reads very well — and fills in with the plausible, on the same page. How do you tell one from the other?

## What about when the summary is the only thing anyone reads?

In a planning process I took part in, the supporting research ran to thirty pages. Who read all thirty? I did. Out of them came a one-page summary and a seven-minute audio — and it was interesting to see which format worked, and for whom: each kind of person preferred one.

The lesson isn't about the tool. It's the one every product person learns the hard way: my job is not to make something sophisticated and send it. It's to have empathy for how the message lands on the other side — and to make the other side want to consume it.

That leaves a question I can't answer well: who checked the numbers on the page everyone read?

## Does "using AI" mean using just one model?

In a process I worked on that receives photos of ID documents, reading the text from the image (good old OCR) was the easy part. To actually work, the system today combines three different things:

- **Generative AI** to read and interpret: is the whole document in the frame? Is there glare covering any field? Is it legible?
- **Classic vision algorithms**, which aren't generative, to look for tampering: odd edges, a photo pasted on top, signs of editing.
- **A deterministic lookup** in a registry service, to see whether the document number matches the name.

None of these steps, by itself, proves a document is authentic. That made it clear to me that "using AI" does not mean using *one* model: it means choosing the right technique for each piece — and, where a reliable source exists, checking the source instead of asking for an opinion ([chapter 10](/ai/ask-for-the-script/)). Because the workflow involves personal data and may involve sensitive data, the care discussed in [chapter 5](/ai/data-and-privacy/) applies: purpose and an applicable legal basis, minimum access, and tests with fictional data when real data is unnecessary.

## So what's different from text?

Three things, and all three call for more care, not less:

1. **Checking takes more work.** Rereading a paragraph takes seconds; listening again to ten minutes of audio takes ten minutes. What's laborious to check tends not to get checked.
2. **The data is more sensitive.** A voice and a face identify a person in a way a name doesn't ([chapter 5](/ai/data-and-privacy/)). A recording of a visit brings along with it the home, the children in the background, what the family shared in confidence.
3. **It costs more**, in money and in energy.

A question I'm leaving unanswered on purpose: is transcribing everything a better record of the work, or is it starting to keep what used to get lost, for good reasons?

## What should you decide before recording or photographing?

1. **Whose** voice, face, handwriting is it? Does that person know?
2. **Where does the original file stay**, and for how long?
3. **Who checks the output**, and how: all of it, a sample, the totals?
4. **What happens if it's wrong?** A meeting summary with an error is different from a visit record with an error.
5. **Is it really needed?** Sometimes three lines written by someone who was there are worth more than forty transcribed minutes.


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** Talking saves recording time, but listening again and checking also occupies someone. When does an interpretation start to look like a statement from the family?
- **Paths on the table:**
  - *Bia:* keep the voice notes and consult them when questions arise. That preserves details, but accumulates information about families and requires later listening.
  - *Caio:* record only status, next step, and unresolved questions. That makes records easier to use, but may erase context needed to interpret a case.
  - *Lia:* transcribe and link each summary to its source passage. That helps checking, but multiplies records and does not by itself fix a mistaken interpretation.
- **What the team did, for now:** tested Lia's proposal on ten notes, reviewed by the person who made the visit. Bia corrected the attribution; Caio marked the shift change as a hypothesis. The team defined access and retention periods. Transcription went quickly; checking consumed part of the afternoon, and the rest did not enter the record as confirmed facts.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Representation and transformation:** audio, images, and text can pass through different models and processes.
- **Fidelity:** transcription, summarization, and content generation are distinct tasks. A polished output can omit, add, or change information.
- **Checking:** the choice of medium also depends on being able to compare it with the original and on who would be affected by an error.

What changes between checking a transcript and checking a summary made from it?

</div>

<div class="g-project" markdown="1">

## What about your project?

Choose material of your own that you can use in the experiment: a spoken note, a drawing, or an image. Transform it into another medium and compare it with the original. What became easier to understand? What uncertainty became a certainty, and what detail disappeared or was added? How would the next person know what still needs checking?

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (30 min) — hunting the well-formatted error

In groups: (1) record one minute of conversation with at least three proper names, two numbers, and one long pause, and transcribe it with a tool; (2) photograph a handwritten table with ten rows and ask for it to be converted into a spreadsheet. Mark every error. Then swap the results **without the originals** with another group: how many errors can the other group find just by looking at the output?

#### Discussion questions

- Which errors only showed up when you compared with the original? What does that say about keeping or deleting the original?
- In what situation in your work would a transcribed recording become an official document? Who should sign off on it?
- Would you want to be told when the voice on a service call is synthetic? Why?
- What content would you decide never to record, even if the technology allowed it?

</details>

<div class="g-fontes" markdown="1">

#### References

- Ho, J., Jain, A., & Abbeel, P. (2020). *Denoising diffusion probabilistic models*. arXiv. <https://arxiv.org/abs/2006.11239>
- Koenecke, A., Choi, A. S. G., Mei, K. X., Schellmann, H., & Sloane, M. (2024). *Careless Whisper: Speech-to-text hallucination harms*. arXiv. <https://doi.org/10.48550/arXiv.2402.08021>
- Maranhão Filho, É. (2025, January 17). *A speech-to-text slip that shows where the training came from*. efrem.io. <https://efrem.io/blog/en/a-speech-to-text-slip/>
- Maranhão Filho, É. (2025, January 27). *Am I missing out on multimodal AI?*. efrem.io. <https://efrem.io/blog/en/am-i-missing-out-on-multimodal-ai/>
- Maranhão Filho, É. (2025, October 22). *Over-engineering: a confession*. efrem.io. <https://efrem.io/blog/en/over-engineering-a-confession/>
- Maranhão Filho, É. (2026, August 18). *Recording calls to think things through with Claude*. efrem.io. <https://efrem.io/blog/en/recording-calls-to-think-with-claude/>
- Maranhão Filho, É. (2026, November 17). *Coding agents are becoming a commodity*. efrem.io. <https://efrem.io/blog/en/coding-agents-are-becoming-a-commodity/>
- Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., & Sutskever, I. (2022). *Robust speech recognition via large-scale weak supervision*. arXiv. <https://arxiv.org/abs/2212.04356>

*Notes:* Radford et al. (2022) and Ho, Jain, and Abbeel (2020) illustrate different mechanisms for transcription and image generation. Static is a teaching analogy for denoising. The overengineering account is documented in the author's post, cited in the references.

</div>
