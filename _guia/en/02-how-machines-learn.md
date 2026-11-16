---
title: "How did it learn this — and what was left out?"
subtitle: "Data, neural networks, training, and generalization."
description: "How examples become adjustments, adjustments combine in networks, and a machine learns patterns. Without having to solve the equation."
lang: en
ref: how-machines-learn
order: 2
part: 1
permalink: /ai/how-machines-learn/
interactive: "draw pixels and train a model"
piece: "what the spreadsheet has × what the team knows"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 2

Caio asked an agent for a model using the historical data Iara made available inside the department's environment. An attractive accuracy figure came back. Bia asked about the canceled bus route, work, people caring for younger children. None of those were columns. "Then let's record them during visits," she proposed. Caio asked the agent for something else: "show where data is missing and compare shifts, without predicting individuals." The concentration in evening classes deserved a look, even without explaining its cause. Bia insisted on hearing from families; Lia set aside part of the visits for that. In the first round, filling in the new record took the time of an already scheduled contact. What information is worth that time — and what can they learn from the incomplete data they already have?
</div>

Almost nobody reading this guide is going to train a model: what we touch, day to day, is the input and the settings. But anyone who builds with AI needs to know **what happens** when someone says they "trained a model." That's where the human decisions live — and it's what explains half the oddities in the chapters ahead.

## Is learning, for a machine, like studying for an exam?

Think about how you prepare for an exam:

| You, studying | Machine learning |
|---|---|
| You, before studying | The **model**, still untrained |
| Notes, books, solved exercises | The training **data** |
| Studying: reviewing, testing, correcting | The **training** |
| You facing questions you've never seen | The **trained model**, being tested |

The analogy separates studying from using what was studied. It doesn't explain how a mind works. Here, saying the machine learned means that training changed its behavior on the examples. The next question is the good one: does it work with different handwriting, a different person, a different school? Memorizing the exercise isn't enough.

## How does the world turn into numbers?

Think of Caio's spreadsheet. A row tries to represent a life using absences, grades, and distance. It lets us calculate things; it also leaves plenty out. These properties used to describe something are called **features**.

An image can become a list too. In the experiment below, a white pixel becomes `0`, a black pixel becomes `1`. An 8×8 grid gives us 64 numbers. That list is a **vector**. Fancy name, an idea that fits in a spreadsheet row.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** draw on the grid and watch the drawing turn into numbers. Then answer: what part of a person's life doesn't fit in a column? And what happens to what doesn't fit?
</div>

<div data-widget="pixels"></div>

Now mentally shift the drawing one square to the side. You still see the same drawing, but several numbers have changed. **Turning something into numbers isn't enough to recognize similarity.** How the information is represented matters, as does what the model learned to compare. This will be our link to the maps of meaning in the [next chapter](/ai/inside-a-language-model/).

## Where do neural networks come in?

Grant Sanderson's [visual explanation of neural networks](https://www.youtube.com/watch?v=aircAruvnKk) starts with a great challenge: recognizing a handwritten digit. You recognize it instantly. Now try writing a rule that works for everyone's crooked handwriting.

In a neural network, many small operations connect in **layers**. Each receives signals, combines and transforms them, and passes the result along. The name "neuron" doesn't require imagining a tiny person thinking inside it.

One way to picture the idea is to combine clues: bits of an image, curves, combinations that help distinguish one digit from another. This explains why combining stages can help. It isn't a literal map where each neuron was labeled "curve detector." The network learns representations we can't always translate that way.

Think of a panel of adjustments: each dial changes how much one signal influences the next. Many of these adjustments are the **weights**. Turning a dial can change the result; training looks for combinations that work better. The panel is an image for the numbers, not a device someone turns by hand.

## What happens on each pass of training?

The [explanation of learning](https://www.3blue1brown.com/lessons/gradient-descent/) helps us see the cycle without doing the math:

1. **Calculate a prediction.** The current settings produce an output.
2. **Measure the error.** Compare the output with what was wanted, using a chosen criterion. This measure is the *loss*.
3. **Adjust.** The algorithm calculates changes that tend to reduce this error.
4. **Repeat.** More examples come in, the settings change, and the cycle continues.

How do you work out which dials to turn across an entire network? [Backpropagation](https://www.3blue1brown.com/lessons/backpropagation/) follows the calculations backward to work out how each adjustment influences the error. It isn't trying one dial at a time. The correction considers how they contribute to the result together.

No secret step called "now understand the world" appears. But that doesn't make what was learned trivial either. The result depends on the data, the operations we can combine, and what we choose to call an error.

In the experiment, the panel has just two adjustments: one tilts the line; the other moves it up or down. The formula on screen records these movements. You can follow the idea without solving the equation.

<div data-widget="treino"></div>

<div class="g-box g-warn" markdown="1">
**One word, two meanings.** The adjustment that moves the line up or down is called mathematical **bias**. The **algorithmic bias** in chapter 4 is a different discussion: patterns of results that can harm groups unequally. A shared name doesn't make them the same problem.
</div>

Reducing the error on this set is one part of the job. The other is [checking against examples left out of training](https://www.3blue1brown.com/lessons/gradient-descent/). In Caio's case: getting the spreadsheet's past right doesn't prove the model will help a family tomorrow. And who chose to measure accuracy instead of how many families received help? That choice didn't come out of the equation.

## And in a language model, what changes?

Back when I was doing undergraduate research, a network with four layers and sixteen neurons tied up the lab for an entire day to run. The idea of adjusting numbers remains. The size and organization of networks have changed a lot — stretching that line isn't enough.

In the [language training that interests us here](https://www.3blue1brown.com/lessons/mini-llm/), the examples are passages of text, and a central task is predicting the next piece. The text itself supplies the continuation to compare the prediction against. It's a way of learning patterns without someone having to write a rule for every sentence.

Here's the bridge: **a network receiving pixels can learn image patterns; one receiving text can learn language patterns.** In the next chapter, we'll follow how context changes what each piece represents. Then, how that becomes an answer. Being able to continue a sentence and having evidence about the student's life are different jobs.


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** Recording more brings the team closer to families' lives, but also takes time and stores more information about them. Which missing data would change a decision?
- **Paths on the table:**
  - *Caio:* compare the existing records first. That may reveal something useful today, but carries the spreadsheet's blind spots.
  - *Bia:* listen and record reasons during visits. That adds context, but reduces the number of contacts and requires more care with records.
  - *Lia:* pause the model and map the gaps with the team. That avoids a premature prediction, but may postpone a signal that could already help.
- **What the team did, for now:** shelved the predictive model and tried Bia's proposed record during some visits. Caio kept the shift comparison for review. The contact they could not fit in had to be rescheduled; listening better had not come free.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Representation:** turning a situation into data requires choosing what goes in and what stays out.
- **Training:** adjusting parameters using examples and an error criterion. A network combines many simple operations.
- **Generalization:** getting familiar examples right is not enough; behavior in situations outside training matters.

If training goes well and actual use goes badly, what would you investigate first — and why?

</div>

<div class="g-project" markdown="1">

## What about your project?

Return to an output that looked good and try a different input: an incomplete case, an exception, a situation you know better than the tool. What changed? What important information existed only in your head? Keep the example for comparison when you change the request or procedure.

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

<div class="g-fontes" markdown="1">

#### References

- 3Blue1Brown. (n.d.). *Neural networks* [Video series]. <https://www.3blue1brown.com/topics/neural-networks>
- Sanderson, G. (2017, November 3). *What is backpropagation really doing?* [Illustrated lesson; text adaptation by Josh Pullen]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/backpropagation/>
- Sanderson, G. (2017, October 16). *Gradient descent, how neural networks learn* [Illustrated lesson; text adaptation by Josh Pullen]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/gradient-descent/>
- Sanderson, G. (2017, October 5). *But what is a neural network?* [Illustrated lesson; text adaptation by Josh Pullen]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/neural-networks/> Companion video: <https://www.youtube.com/watch?v=aircAruvnKk>
- Sanderson, G. (2024, November 20). *Large language models explained briefly* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/mini-llm/> Companion video: <https://www.youtube.com/watch?v=LPZh9BOjkQs>

*Notes:* Grant Sanderson's 3Blue1Brown lessons provide the visual foundation: handwritten digits and layered networks (*But what is a neural network?*); error-based adjustment and testing on held-out examples (*Gradient descent*); each parameter's contribution to error (*Backpropagation*). Combining strokes and curves motivates the architecture; it is not a guaranteed description of what each neuron learned. The adjustment panel is a teaching analogy for parameters. The line experiment illustrates simple regression, not a complete neural network. The undergraduate research account is the author's.

To continue through the [full series](https://www.3blue1brown.com/topics/neural-networks), follow the images and questions first; the calculations can wait for another reading. Here the path runs from representation to training and, in the next chapter, to context and language generation. Reference dates are those of the written lessons, which also link to their companion videos.

</div>
