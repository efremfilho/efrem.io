---
title: "How machines learn"
description: "Studying for an exam, turning the world into numbers, and getting a little less wrong on every pass. That's all it is, repeated billions of times."
lang: en
ref: how-machines-learn
order: 2
part: 1
permalink: /ai/how-machines-learn/
interactive: "draw pixels and train a model"
piece: "what the spreadsheet has × what the team knows"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 2

The company sent the list of "model variables": absences, grades, age, distance to school. Lia read it twice. What she hears every week on her visits was missing: who got a job, who stayed home taking care of siblings, who got pregnant. None of that was in the spreadsheet. So, for the model, did it exist?
</div>

I teach people from business, law, public policy, and health care. Nobody in that room needs to know how to take a derivative. But everybody needs to leave knowing **what happens** when someone says they "trained a model," because that's where the human decisions live.

## Is learning, for a machine, like studying for an exam?

Think about how you prepare for an exam:

| You, studying | Machine learning |
|---|---|
| Your brain, before studying | The **model**, still untrained |
| Notes, books, solved exercises | The training **data** |
| Studying: reviewing, testing, correcting | The **training** |
| You, after studying, facing questions you've never seen | The **trained model** |

The analogy works for the structure and breaks at one essential point. You learn by connecting the material to your life: experiences, emotions, cause and effect. The machine has no life to connect anything to. It finds **statistical correlations** between numbers and returns probabilities. There's no understanding in there. There's a very well-tuned calculation.

## How does the world turn into numbers?

To a model, there is no "photo of a dog." There is a list of numbers. The measurable properties we use to describe something (color, size, texture, shape) are called **features**.

In a black-and-white image, the translation is direct: a white pixel becomes `0`, a black pixel becomes `1`. An 8×8 image becomes a list of 64 numbers. That list is the **feature vector**.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** draw on the grid and watch the drawing turn into numbers. Then answer: what part of a person's life doesn't fit in a column? And what happens to what doesn't fit?
</div>

<div data-widget="pixels"></div>

With a vector, each thing becomes a **point** in a mathematical space. And here comes the most beautiful idea in this whole subject: in that space, **closeness means similarity**. Two similar images become neighboring points. That's why a system can tell that "cat" is close to "feline" and far from "refrigerator" without knowing what any of the three is.

Who decides which features go in? People, directly or indirectly. Hold on to that for [chapter 4](/ai/bias/).

## What happens on each pass of training?

With the data in numbers, training is a cycle of four steps:

1. **Compute a guess.** The model multiplies each feature by a **weight** (how much it matters) and adds a fixed adjustment, the mathematical **bias**: `guess = weights × features + adjustment`. At the start, the weights are shots in the dark.
2. **Measure the error.** It compares the guess with the right answer. The distance between the two is the **error** (or *loss*).
3. **Adjust the equation.** It nudges each weight a tiny bit, in the direction that shrinks the error.
4. **Repeat.** Millions, billions of times, with different examples.

There is no step 5. There is no "and then the model understands." In the experiment below, the model has only two numbers to adjust, and you can watch the learning happen.

<div data-widget="treino"></div>

<div class="g-box g-warn" markdown="1">
**One word, two meanings.** The "bias" in the equation above is just an adjustment number, with nothing moral about it. The **algorithmic bias** in chapter 4 is something else: it's when the model is systematically wrong against someone. Same word, different subjects. This confuses even people in the field.
</div>

## And in a language model, what changes?

Almost nothing in the idea, almost everything in the scale. A model like the ones behind conversation assistants has billions of weights instead of two, and its "exam" is always the same: *given this stretch of text, what is the next piece?* It guesses, measures the error, adjusts, repeats, using a huge share of what humanity has ever written.

The result is a system that is extraordinarily good at continuing text in a plausible way. "Plausible" and "true" line up most of the time. When they don't, we call it a hallucination, which isn't some strange defect. It's the same machine doing the same thing.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- Machines don't process concepts; they process vectors of numbers.
- Training is adjusting weights to shrink a measured error. That's it.
- The model minimizes its distance to the answers in the training data. If the data is skewed, it learns the skew very competently.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** who chose these columns, and what were they for when they were created? Is there a way to record the reason for an absence without exposing the family?
- **A way to find the answer:** put what the spreadsheet has and what the team knows side by side; for each missing item, ask whether it should become data, who would collect it, and with what care.
- **New project piece:** two lists side by side: what the spreadsheet has and what the team knows.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — the human model

Hand out 10 cards with drawings of fruit (or project photos). Ask the class to choose **only two numeric features** (e.g., size from 1 to 5, how red from 1 to 5) and place each fruit on a coordinate plane on the board. Then introduce a new fruit and ask them to classify it using only its neighbors. Discuss which fruits came out "wrong" and which feature was missing.

#### Discussion questions

- In the exam analogy, what would "memorizing the answer key" be? (It's *overfitting*: doing well in training and badly in the real world.)
- Who chose the features for your fruit model? What did that choice leave out?
- If the model only reduces error relative to the examples, what happens when the examples are wrong?

</details>
