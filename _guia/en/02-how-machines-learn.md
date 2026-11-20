---
title: "How did it learn this — and what was left out?"
subtitle: "Data, neural networks, training, generalization, and who provides the answer."
description: "How examples become adjustments, adjustments combine in networks, and a machine learns patterns. Without having to solve the equation."
lang: en
ref: how-machines-learn
order: 2
part: 1
permalink: /ai/how-machines-learn/
interactive: "draw pixels, train a model, group points, and reward an agent"
piece: "what the spreadsheet has × what the team knows"
last_modified: 2026-11-20
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

In a neural network, many small operations connect in **layers**. Each receives signals, combines and transforms them, and passes the result along. One way to picture the idea is to combine clues: bits of an image, curves, and combinations that help distinguish one digit from another — even though the network learns internal representations that don't always come with a neat human label.

On the classroom whiteboard, I explain this as an inverted equation. In school, someone gave you the fixed numbers in the function `f(x, y) = 3x + 2y`, you plugged in `x` and `y`, and you calculated the result. In machine training we flip what the unknown is: you already have many examples of `x`, `y`, and the result that happened, and you want to discover what those fixed numbers — the `3` and the `2` — were. Those numbers multiplying each signal are the **weights** (or training parameters). At bottom, a model is a gigantic equation tuned so the math fits the examples better. That same function `f(x, y) = 3x + 2y` will return in [chapter 7](/ai/computational-thinking/) to connect spreadsheets and code.

## What happens on each pass of training?

The [explanation of learning](https://www.3blue1brown.com/lessons/gradient-descent/) helps us see the cycle without doing the math:

1. **Calculate a prediction.** The current settings produce an output.
2. **Measure the error.** Compare the output with what was wanted, using a chosen criterion. This measure is the *loss*.
3. **Adjust.** The algorithm calculates changes that tend to reduce this error.
4. **Repeat.** More examples come in, the settings change, and the cycle continues.

<figure class="g-board">
	<div class="g-board-title">Classroom board · The inverted equation of training <span>From computing the output to discovering the weights</span></div>
	<div class="g-board-cols">
		<div class="g-board-box">
			<span class="g-board-kicker">In school / with a ready-made rule</span>
			<code class="g-board-math">f(x, y) = 3x + 2y   ──►   f(4, 1) = ?</code>
			<ul class="g-board-list">
				<li><strong>Known:</strong> the fixed weights (<code>3</code> and <code>2</code>) and the inputs (<code>x = 4</code>, <code>y = 1</code>).</li>
				<li><strong>Unknown:</strong> the output of the calculation (<code>14</code>).</li>
			</ul>
		</div>
		<div class="g-board-box teal">
			<span class="g-board-kicker">In machine training (inverted equation)</span>
			<code class="g-board-math">f(x, y) = w₁·x + w₂·y + b   ──►   find w₁, w₂, b</code>
			<ul class="g-board-list">
				<li><strong>Known:</strong> thousands of historical examples of <code>x</code>, <code>y</code>, and the observed outcome.</li>
				<li><strong>Unknown:</strong> the weights (<code>w₁</code>, <code>w₂</code>) and mathematical bias (<code>b</code>) that make the math fit.</li>
			</ul>
		</div>
	</div>
	<div class="g-board-flow">
		<div class="g-board-step"><strong>1. Prediction</strong>Run the equation with current weights</div>
		<div class="g-board-step"><strong>2. Error (loss)</strong>Measure distance from expected output</div>
		<div class="g-board-step"><strong>3. Adjustment</strong>Backpropagation computes how to nudge each weight</div>
		<div class="g-board-step"><strong>4. Real test</strong>Check on examples held out of training</div>
	</div>
	<figcaption><strong>Board sources:</strong> adapted from the author's FGV EPPG classroom whiteboard (Maranhão Filho, 2026) and Grant Sanderson's visual exposition of gradient descent and backpropagation (3Blue1Brown, <em>Neural Networks</em>, 2017).</figcaption>
</figure>

How do you work out which dials to turn across an entire network? [Backpropagation](https://www.3blue1brown.com/lessons/backpropagation/) follows the calculations backward to work out how each adjustment influences the error. It isn't trying one dial at a time. The correction considers how they contribute to the result together.

No secret step called "now understand the world" appears. But that doesn't make what was learned trivial either. The result depends on the data, the operations we can combine, and what we choose to call an error.

In the experiment, the panel has just two adjustments: one tilts the line; the other moves it up or down. The formula on screen records these movements. You can follow the idea without solving the equation.

<div data-widget="treino"></div>

<div class="g-box g-warn" markdown="1">
**One word, two meanings.** The adjustment that moves the line up or down is called mathematical **bias**. The **algorithmic bias** in chapter 4 is a different discussion: patterns of results that can harm groups unequally. A shared name doesn't make them the same problem.
</div>

Reducing the error on this set is one part of the job. The other is [checking against examples left out of training](https://www.3blue1brown.com/lessons/gradient-descent/). In Caio's case: getting the spreadsheet's past right doesn't prove the model will help a family tomorrow. And who chose to measure accuracy instead of how many families received help? That choice didn't come out of the equation.

## Who provides the answer?

In the line experiment, every example came with its answer: the study hours and the grade that actually happened. It isn't always like that. When I summarized [my first week of AI studies](/blog/en/week-1-of-ai-studies-a-lot-of-math/), I split machine learning into three families. You can read all three through the same question: who provides the answer?

- **Supervised:** the examples come with the answer, the answer key. The model looks for a "formula" to predict or classify new cases. The line above is this kind.
- **Unsupervised:** there is no answer key. The algorithm looks for hidden patterns in the data, such as groups.
- **Reinforcement:** there is no ready answer, only reward or punishment after each attempt. In that summary, I admitted it was the one I knew least about and remembered least from my undergrad days.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** in the three experiments below, look for the moment when the algorithm is wrong with total confidence. Who noticed the mistake: it or you? And what did you know that it didn't?
</div>

## What if the examples already carry the answer?

Classifying is predicting a category instead of a number. One of the simplest ways is **k nearest neighbors**: to answer at a new spot, the model finds the k closest training examples and [goes with the majority answer](https://scikit-learn.org/stable/modules/neighbors.html#nearest-neighbors-classification). There is no equation to adjust. The model stores the examples and asks the neighbors.

The experiment holds back part of the points for the test, as the previous section asked. Start with k = 1: each training point is its own nearest neighbor, so training accuracy comes out perfect, even on the wrong labels. A model that just [repeats the answers it has just seen gets a perfect score and predicts nothing useful on new data](https://scikit-learn.org/stable/modules/cross_validation.html). That is **overfitting**, the "memorizing the answer key" of the exam analogy. Raise k: [more neighbors damp the noise but make the border less distinct](https://scikit-learn.org/stable/modules/neighbors.html#nearest-neighbors-classification). Then, on the moons, switch to the lines model.

<div data-widget="vizinhos"></div>

## What if nobody has the answer key?

Take the colors off the points. Positions remain, and the question changes: are there groups here? **K-means** is a classic algorithm for that. You say how many groups you want, and now k is something else: not the number of neighbors, but the number of groups. The algorithm [picks k starting points, sends each point to the nearest center, moves each center to the mean of its points, and repeats until the centers stop moving](https://scikit-learn.org/stable/modules/clustering.html#k-means).

It always delivers k groups. It doesn't say whether k makes sense: [in a real setting there is no single true number of groups; it has to be decided from data-based criteria and knowledge of the goal](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_assumptions.html). Because it measures distance to a center, k-means assumes the groups are compact and roughly round, and it [responds poorly to elongated or irregularly shaped groups](https://scikit-learn.org/stable/modules/clustering.html#k-means). The random start matters too: it [always converges, but it may stop at a worse solution](https://scikit-learn.org/stable/modules/clustering.html#k-means), which is why it is usually run several times.

<div data-widget="kmeans"></div>

In Caio's case, grouping the students into four groups would produce borders as crisp as the ones in the experiment. Who would name each group? And what would that name start deciding?

## What if there is only a reward?

In the third way, nobody shows the answer or the groups. An agent acts, receives points, and learns [by trial and error: rewarding or punishing a behavior makes it more likely to be repeated or dropped](https://spinningup.openai.com/en/latest/spinningup/rl_intro.html). The agent's goal is [to collect as much reward as possible](https://spinningup.openai.com/en/latest/spinningup/rl_intro.html), and [the reward function is critically important](https://spinningup.openai.com/en/latest/spinningup/rl_intro.html): someone writes down how much each thing is worth.

In the experiment, the agent starts knowing nothing about the grid. Train it and watch the arrows appear. Then open the coin map and change the numbers: make the coin worth more, or remove the cost of each step, and train again.

<div data-widget="reforco"></div>

The agent didn't cheat. It did exactly what the arithmetic told it to. It's the same question as the line's training, in different clothes: who chose what counts as getting it right?

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
- **Who provides the answer:** examples with an answer key (supervised), data without one (unsupervised), or a reward after each attempt (reinforcement). In all three, someone chooses what counts as getting it right.

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
- What number in your daily work behaves like the coin in the reinforcement experiment: easy to collect and far from the goal?

</details>

<div class="g-fontes" markdown="1">

#### References

- 3Blue1Brown. (n.d.). *Neural networks* [Video series]. <https://www.3blue1brown.com/topics/neural-networks>
- Achiam, J. (2018). Part 1: Key concepts in RL. In *Spinning Up in deep reinforcement learning*. OpenAI. <https://spinningup.openai.com/en/latest/spinningup/rl_intro.html>
- Maranhão Filho, É. (2025, September 30). *Week 1 of AI studies: a lot of math, little for product people*. efrem.io. <https://efrem.io/blog/en/week-1-of-ai-studies-a-lot-of-math/>
- Sanderson, G. (2017, November 3). *What is backpropagation really doing?* [Illustrated lesson; text adaptation by Josh Pullen]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/backpropagation/>
- Sanderson, G. (2017, October 16). *Gradient descent, how neural networks learn* [Illustrated lesson; text adaptation by Josh Pullen]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/gradient-descent/>
- Sanderson, G. (2017, October 5). *But what is a neural network?* [Illustrated lesson; text adaptation by Josh Pullen]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/neural-networks/> Companion video: <https://www.youtube.com/watch?v=aircAruvnKk>
- Sanderson, G. (2024, November 20). *Large language models explained briefly* [Illustrated lesson; text adaptation by Justin Sun]. 3Blue1Brown. <https://www.3blue1brown.com/lessons/mini-llm/> Companion video: <https://www.youtube.com/watch?v=LPZh9BOjkQs>
- scikit-learn developers. (n.d.). Cross-validation: Evaluating estimator performance. In *scikit-learn user guide*. <https://scikit-learn.org/stable/modules/cross_validation.html>
- scikit-learn developers. (n.d.). *Demonstration of k-means assumptions* [Documentation example]. <https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_assumptions.html>
- scikit-learn developers. (n.d.). K-means. In *scikit-learn user guide: Clustering*. <https://scikit-learn.org/stable/modules/clustering.html#k-means>
- scikit-learn developers. (n.d.). Nearest neighbors classification. In *scikit-learn user guide*. <https://scikit-learn.org/stable/modules/neighbors.html#nearest-neighbors-classification>

*Notes:* Grant Sanderson's 3Blue1Brown lessons provide the visual foundation: handwritten digits and layered networks (*But what is a neural network?*); error-based adjustment and testing on held-out examples (*Gradient descent*); each parameter's contribution to error (*Backpropagation*). Combining strokes and curves motivates the architecture; it is not a guaranteed description of what each neuron learned. The adjustment panel is a teaching analogy for parameters. The line experiment illustrates simple regression, not a complete neural network. The undergraduate research account is the author's.

To continue through the [full series](https://www.3blue1brown.com/topics/neural-networks), follow the images and questions first; the calculations can wait for another reading. Here the path runs from representation to training and, in the next chapter, to context and language generation. Reference dates are those of the written lessons, which also link to their companion videos.

The split into supervised, unsupervised and reinforcement learning comes from the author's study summary, cited in the text. The neighbor vote, overfitting, k-means and its assumptions follow the scikit-learn documentation; the definition of reinforcement learning follows Achiam (2018). The passages from these documentation pages were checked against the pages' source files in the projects' public repositories. The three experiments on kinds of learning are teaching illustrations with randomly generated data. In the neighbors experiment, the test uses 30% of the points and swapped labels affect training only; the lines model is a logistic regression fitted by gradient descent. The k-means answer key exists only because the experiment itself generated the groups. The grid uses tabular *Q-learning*, with a learning rate of 0.5 and a discount of 0.95, and the coin pays every time the agent enters its square.

</div>
