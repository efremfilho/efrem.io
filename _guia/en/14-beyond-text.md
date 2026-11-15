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
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 14

Bia records an audio message after each visit. There are dozens a week, and nobody listens to them again. Caio asked an agent to transcribe everything and summarize it by family. It looked great — until Bia read the summary of a visit she had made herself. In it was a sentence from the mother that the mother never said. "Did you check?" "That's forty recordings, Bia." Half of what the team knows is in voice and in photos of paper. All of that can be read. And who vouches for what was read?
</div>

For a long time I could only use generative AI professionally with text — I even [asked in public whether I was missing something](/blog/en/am-i-missing-out-on-multimodal-ai/). Today I [record conversations to think about later](/blog/en/recording-calls-to-think-with-claude/). Talking to the machine, for me, depends on the context: sometimes I talk, almost always to think out loud. But I still prefer to write. When I write, I think before I send. The machine now accepts the world in the format it happens in. The use that serves me best is one of the simplest: I share my screen with a voice assistant and ask it to guide me through a setup I haven't mastered. "Click the menu on the left. See the button on the right?" It's tech support that sees what I'm seeing.

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

**Where it tends to go wrong.** Proper names, numbers, accents, people talking over each other. And a stranger kind of error: stretches of silence or noise can turn into whole sentences nobody said. [A study](https://arxiv.org/abs/2402.08021) of a widely used transcription system found made-up sentences in about 1% of the recordings, more often in speech with long pauses. I myself once got a transcript that ended with a [subtitling credit I never dictated](/blog/en/a-speech-to-text-slip/). And, transcribing eight hours of classes with an open model, I watched the transcript get stuck after about two hours and repeat the same sentence over and over. I lost two days trying to fix it by hand. The way out took a minute: pull the audio out of the video, lower the quality, and upload it to a ready-made tool. Overcomplicating is also a way of getting it wrong.

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

- **In dispute:** does the family know the conversation becomes audio, and the audio becomes text? What does the team gain by transcribing everything — and what does it start keeping that it didn't keep before?
- **Paths on the table:**
  - *Caio:* transcribe everything and check a sample.
  - *Bia:* transcribe only what someone is going to read again; delete the rest.
  - *Lia:* show side by side what was said and what was summarized — and ask before recording.
- **What the team did, for now:** ten recordings transcribed and checked one by one; and the rule for what can be recorded, who checks it, and how long it's kept.
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
