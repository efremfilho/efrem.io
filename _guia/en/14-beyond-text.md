---
title: "Beyond text: voice, image, and video"
description: "Audio becomes text, a photo becomes a table, text becomes an image. What do you gain, what can go wrong without anyone noticing — and whose voice is it?"
lang: en
ref: multimodal
order: 14
part: 3
permalink: /ai/beyond-text/
interactive: "four conversions and what to ask each one"
piece: "the rule for what can be recorded and how long it's kept"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 14

After each visit, the team records an audio message telling how it went. There are dozens a week, and nobody listens to them again. The attendance lists from two schools still arrive on paper, photographed with a phone. Lia realized that half of what the team knows is in formats the spreadsheet can't read. What if it could be read?
</div>

For a long time I could only use generative AI professionally with text — I even [asked in public whether I was missing something](/blog/en/am-i-missing-out-on-multimodal-ai/). Today I talk more than I type: I dictate what I want and [record conversations to think about later](/blog/en/recording-calls-to-think-with-claude/). The machine now accepts the world in the format it happens in.

This has a name — **multimodal** models — and it raises one question before any other.

## What changes when the input isn't text?

On the inside, less than it seems. An image is a grid of numbers ([chapter 2](/ai/how-machines-learn/)). Audio is a sequence of measurements of the sound wave. Everything becomes pieces, the pieces become vectors, and the same machinery from [chapter 3](/ai/inside-a-language-model/) calculates what comes next.

If the machinery is the same, what would you expect of the flaws? That they'd be the same too: when information is missing, it fills in with what is plausible.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** before opening each tab, answer this: if the transcript of a visit comes with a sentence nobody said, who is going to notice — and when?
</div>

<div data-widget="tabs" data-title="Four conversions and what to ask each one" data-sub="Click each tab. In every one, the last line is a question, not an answer." markdown="1">

#### Voice → text

**What you gain.** The account of a visit, the meeting, the class: it all becomes searchable text that can be summarized and compared.

**Where it tends to go wrong.** Proper names, numbers, accents, people talking over each other. And a stranger kind of error: stretches of silence or noise can turn into whole sentences nobody said. [A study](https://arxiv.org/abs/2402.08021) of a widely used transcription system found made-up sentences in about 1% of the recordings, more often in speech with long pauses. I myself once got a transcript that ended with a [subtitling credit I never dictated](/blog/en/a-speech-to-text-slip/).

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

## So what's different from text?

Three things, and all three call for more care, not less:

1. **Checking takes more work.** Rereading a paragraph takes seconds; listening again to ten minutes of audio takes ten minutes. What's laborious to check tends not to get checked.
2. **The data is more sensitive.** A voice and a face identify a person in a way a name doesn't ([chapter 5](/ai/data-and-privacy/)). A recording of a visit brings along with it the home, the children in the background, what the family shared in confidence.
3. **It costs more**, in money and in energy.

A question I'm leaving unanswered on purpose: is transcribing everything a better record of the work, or is it starting to keep what used to get lost, for good reasons?

## A path, before you record or photograph

1. **Whose** voice, face, handwriting is it? Does that person know?
2. **Where does the original file stay**, and for how long?
3. **Who checks the output**, and how: all of it, a sample, the totals?
4. **What happens if it's wrong?** A meeting summary with an error is different from a visit record with an error.
5. **Is it really needed?** Sometimes three lines written by someone who was there are worth more than forty transcribed minutes.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- Voice, image, and video go through the same machinery as text and inherit the same flaw: filling in with what's plausible.
- The output always comes well formatted. Looking good isn't a sign of being right.
- The harder the data is to check and the more sensitive it is, the more the decision to use it has to be made before, not after.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** does the family know the conversation becomes audio, and the audio becomes text? What do I gain by transcribing everything — and what do I start keeping that I didn't keep before?
- **A way to find the answer:** transcribe ten recordings and listen to all ten, checking; note where it got things wrong (names, numbers, silences); decide with the team what becomes a record and what gets deleted; ask before recording.
- **New project piece:** the rule for what can be recorded, who checks it, and how long it's kept.
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

- Koenecke, A., Choi, A. S. G., Mei, K. X., Schellmann, H., & Sloane, M. (2024). *Careless Whisper: Speech-to-text hallucination harms*. arXiv. <https://doi.org/10.48550/arXiv.2402.08021>
- Maranhão Filho, É. (2025, January 17). *A speech-to-text slip that shows where the training came from*. efrem.io. <https://efrem.io/blog/en/a-speech-to-text-slip/>
- Maranhão Filho, É. (2025, January 27). *Am I missing out on multimodal AI?*. efrem.io. <https://efrem.io/blog/en/am-i-missing-out-on-multimodal-ai/>
- Maranhão Filho, É. (2026, August 18). *Recording calls to think things through with Claude*. efrem.io. <https://efrem.io/blog/en/recording-calls-to-think-with-claude/>

</div>
