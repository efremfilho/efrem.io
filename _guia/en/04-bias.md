---
title: "Bias: from our slice of the world into the algorithm"
description: "The model is neither prejudiced nor neutral. It repeats, very efficiently, the slice of the world someone handed it."
lang: en
ref: bias
order: 4
part: 1
permalink: /ai/bias/
interactive: "build the training set and watch bias appear"
piece: "rule no. 1: no \"risk\" label on any student"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 4

While researching similar systems, Lia read about one that classified students by their "risk" of not graduating. An evaluation showed it was wrong far more often with one group than with another, always in the same direction. She thought about the schools on the poor outskirts of her own school system. Who would carry the "high risk" label from the first day of class?
</div>

Everyone sees reality through a keyhole: the culture they grew up in, where they live, what they've lived through. That isn't a character flaw, it's the human condition, and it has a name: **human bias**. The trouble starts when that keyhole view becomes training data.

## How does a classifier learn to get it wrong?

The example I use most in class is silly on purpose. Imagine I want a classifier that tells bears from dogs. I put together my photo set with what I have on hand: black bears and Samoyeds (those fluffy white dogs).

The training loop from [chapter 2](/ai/how-machines-learn/) does its job just right: it looks for the easiest correlation that separates the two groups. And the easiest one is color. In practice, the model learns that **dark = bear** and **light = dog**.

Then a black Labrador shows up. The model answers, with total confidence: bear.

Nobody programmed that mistake. It came out of a chain of innocent choices:

1. **Human bias** — I didn't think about variation in color.
2. **Data curation** — the set ended up with only dark bears and light dogs.
3. **Algorithmic bias** — the model tied color to category and is systematically wrong about whoever got left out.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** build the training set in the experiment until it gets all four right. Then answer: in the system Lia was offered, what would the "fur color" be — the easy feature that seems to explain everything and doesn't?
</div>

<div data-widget="vies"></div>

It's worth playing with the experiment until you notice three things: biased data produces a biased model; a good feature does **not** fix bad data; and diverse data alone doesn't solve it either if the chosen feature makes no sense.

## And when the dog is a person?

Swapping bears and dogs for people is what turns a funny example into a serious problem.

**Health care.** Systems that analyze medical images make more mistakes with groups that barely show up in the training data. When dermatology models were tested on images with diverse skin tones, performance dropped sharply compared with the original tests, and all of them did worse on dark skin ([Daneshjou et al., 2022](https://doi.org/10.1126/sciadv.abq6147)). When the professional trusts without checking, the people who were already underserved get a late or wrong diagnosis.

**Public safety.** Face analysis systems fail unevenly. In a study of commercial products that classify gender from a face, the error rate for darker-skinned women was dozens of times higher than for lighter-skinned men ([Buolamwini & Gebru, 2018](http://gendershades.org/overview.html)). An official evaluation of recognition algorithms found far more false positives for Asian and Black faces than for white faces ([NIST, 2019](https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software)). The error has consequences: a man was [arrested in front of his family](https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest) for a theft he didn't commit, after a system flagged his face from a blurry security-camera image. The system got it wrong; the officers believed it.

**Education.** "Early warning" systems try to predict who will drop out of school. In one of them, which classified students by their risk of not graduating on time using grades, disciplinary records, income, and race, an analysis by the government itself showed that false alarms were far more frequent for Black students than for white students — and the schools using the system [had not been told](https://themarkup.org/machine-learning/2023/04/27/false-alarm-how-wisconsin-uses-race-and-income-to-label-students-high-risk).

**Language.** Models trained mostly on the "standard" variety of a language stumble over dialects, slang, and regional expressions. A construction worker posted a photo of himself next to a bulldozer with the caption "good morning" in Arabic; a social network's automatic translation rendered it as "attack them." He was arrested and [questioned for hours](https://www.theguardian.com/technology/2017/oct/24/facebook-palestine-israel-translates-good-morning-attack-them-arrest) before anyone realized the mistake — nobody who spoke the language had read the original post.

The pattern is the same in all four cases: a predictable statistical error met a human who treated the machine's output as truth.

## What can you do?

There's no such thing as eliminating bias. Every dataset is a slice of the world. What you can do is reduce it, measure it, and warn people.

- **If you build** (train a model, assemble a dataset, configure an agent): look for who is missing from the data; bring in people whose life experience is different from yours to try to break the system; document where it fails.
- **If you use**: in a decision that affects someone's life (health, justice, credit, employment), the AI's output is a guess to be checked, not a verdict. And when you find an error, report it.

<div class="g-box g-key" markdown="1">
**Keep this:** the model has no opinion. It has the data it was given and the features someone chose. Every time you hear "the algorithm is neutral," swap it for "the algorithm is consistent" — consistent in its mistakes too.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** what does a wrong alert cost, and to whom? And an alert that never came? Is there a way to help without labeling?
- **A way to find the answer:** list who barely shows up in the school system's data; compare, school by school, how many alerts turned into real help; decide with the team whether the system will show people or situations.
- **New project piece:** the project's rule no. 1, written by the team: no "risk" label on any student.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (25 min) — lightning audit

In groups, pick an automated system that affects the lives of people in the class (résumé screening, credit scoring, social media moderation, a turnstile with facial recognition). Answer on a poster: (1) what data was this probably trained on? (2) who barely shows up in that data? (3) what happens to that person when the system gets it wrong? (4) is there a human who can reverse it?

#### Discussion questions

- In the face-recognition arrest case, where was the error: in the algorithm, in the data, or in the decision to arrest him? Can you separate them?
- Is a system that's right 99% of the time good? Does it depend on who is in the 1%?
- Have you ever been some system's "black Labrador"?

</details>

<div class="g-fontes" markdown="1">

#### References

- American Civil Liberties Union. (2024, June 28). *Williams v. City of Detroit*. <https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest>
- Buolamwini, J., & Gebru, T. (2018). Gender shades: Intersectional accuracy disparities in commercial gender classification. *Proceedings of Machine Learning Research, 81*, 77–91. <https://proceedings.mlr.press/v81/buolamwini18a.html>
- Daneshjou, R., Vodrahalli, K., Novoa, R. A., Jenkins, M., et al. (2022). Disparities in dermatology AI performance on a diverse, curated clinical image set. *Science Advances, 8*(32), Article eabq6147. <https://doi.org/10.1126/sciadv.abq6147>
- Feathers, T. (2023, April 27). False alarm: How Wisconsin uses race and income to label students "high risk". *The Markup*. <https://themarkup.org/machine-learning/2023/04/27/false-alarm-how-wisconsin-uses-race-and-income-to-label-students-high-risk>
- Hern, A. (2017, October 24). Facebook translates 'good morning' into 'attack them', leading to arrest. *The Guardian*. <https://www.theguardian.com/technology/2017/oct/24/facebook-palestine-israel-translates-good-morning-attack-them-arrest>
- National Institute of Standards and Technology. (2019, December 19). *NIST study evaluates effects of race, age, sex on face recognition software*. <https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software>

*Notes:* The details the text leaves out are in the sources. Dermatology: a 27% to 36% drop in performance (Daneshjou et al., 2022). Gender classification: up to 34.7% error for darker-skinned women and at most 0.8% for lighter-skinned men, computed from the accuracies published (Buolamwini & Gebru, 2018). Face recognition: false positives 10 to 100 times higher (NIST, 2019). The arrest is that of Robert Williams, in Detroit (ACLU, 2024). The early-warning system is the state of Wisconsin's, with a 42-percentage-point gap in false alarms (Feathers, 2023). The translation error happened on Facebook (Hern, 2017).

</div>
