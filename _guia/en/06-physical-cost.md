---
title: "The cloud sits on the ground: the physical cost of AI"
description: "The energy, water, and chips behind every answer, and why picking the right-sized tool is also an ethical decision."
lang: en
ref: footprint
order: 6
part: 1
permalink: /ai/physical-cost/
interactive: "energy calculator"
piece: "the monthly bill, with an owner: step up to discover, step down to run"
last_modified: 2026-11-15
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 6

The month's credits ran out on the ninth. Caio had left his agents on the most expensive model, with the effort at maximum, "to be safe." That same week, Bia showed up with an exciting idea: a personalized video for each family, with each student's name. Six hundred families. Lia asked how much it cost. Nobody knew — not in money, not in anything else. Caio figured a mistake costs more than credits. Bia, that any model will do for counting absences. Is there a cost here that nobody on the team is seeing? And who decides when it's worth it?
</div>

"Cloud" is one of the best marketing moves in the history of technology. It sounds light, clean, and free of any address. In practice, it's a warehouse the size of several soccer fields, full of machines that run hot, plugged into the power grid and, often, into a river.

## Where does the math get done?

There are two places a model can run:

| | On your device (local) | In the data center |
|---|---|---|
| **Where** | Phone, laptop | Warehouses with thousands of servers |
| **Model size** | Small: millions to a few billion parameters | Huge: hundreds of billions of parameters |
| **Energy** | Your device's battery | The power grid, 24 hours a day |
| **Cooling** | The heat dissipates in the device itself | Dedicated systems, many of which consume water |
| **Your data** | Stays with you | Travels to the server |

Keyboard autocorrect, face unlock, and offline transcription run on the device. The big text, image, and video assistants run in data centers with tens of thousands of GPUs, chips specialized in doing, in parallel, the multiplications from the [training loop](/ai/how-machines-learn/).

## How much does one question use?

It's easy to fall for an exaggerated headline in either direction here, so it's worth sorting out what we know:

- **Per question, it's small.** The companies themselves publish estimates in the range of tenths of a watt-hour and fractions of a milliliter of water for a typical text question — [a few seconds of TV and a few drops](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference); [another estimate](https://blog.samaltman.com/the-gentle-singularity) is in the same order of magnitude. These are numbers from whoever sells the service, measured the seller's way.
- **It depends a lot on the task.** Long answers, models that "reason" for longer, and image generation cost more. Video costs far more: in a [journalistic analysis](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/), a few seconds of generated video used hundreds of times the energy of one image.
- **In aggregate, it's a lot.** Data centers already account for somewhere between 1% and 2% of the world's electricity, and the International Energy Agency projects that this consumption will [more than double within a few years](https://www.iea.org/reports/energy-and-ai), with AI as the main driver.
- **The impact is local.** A data center doesn't weigh on "the planet" in the abstract: it weighs on the power grid and the water of one specific city. That's why where to build, with what energy and with what water, is always a local question.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** use the calculator to compare six hundred videos with six hundred text messages. Then answer: what does the family need to receive — and what is the smallest resource that delivers it?
</div>

<div data-widget="energia"></div>

## Do you need to retrain, or is guiding enough?

There's one technical decision that changes this math a lot, and it comes up early in any project: *how do I get the model to behave the way I need?*

**Fine-tuning** is retraining: running the training loop again to change the model's weights. It burns heavy computation, demands well-prepared data, and can make worse what was already working. Changing billions of weights to teach one new thing is a bit like renovating the whole house to move a picture to a different wall.

**Context engineering** is guiding: you don't touch the weights. You just organize what the model will read in the moment: instructions, examples, documents. It costs a fraction, it's reversible, and it can be redone in minutes.

I did this once, years ago, when models were much weaker. A team was hand-classifying tens of thousands of satisfaction-survey answers a month, into forty categories. I took the twenty thousand I had, retrained a model — and it came out worse than the original. I tested, tested, tested. Only then did I go ask the team: the classification had changed six months earlier, and I had dumped in more than two years of history. I took out the old data and accuracy went up to around 80%, 90%. Garbage in, garbage out.

Today I wouldn't even train. For the overwhelming majority of cases I see in companies and classrooms, well-built context does the job. I like the line I quoted in [Is fine-tuning still worth it?](/blog/en/is-fine-tuning-still-worth-it/): *fine-tuning isn't injecting knowledge, it's overwriting*. All of [chapter 8](/ai/context/) is about the alternative.

## Do I start with the smallest model or the biggest?

The rule you hear most is "use the smallest model that does the job." I go the other way — and, ecologically speaking, that wasn't easy for me to make peace with. I start with the most capable one. Between the smartest person I know and someone on the first day of an internship, I know who gets the work that matters. Once the task is proven, I test a cheaper model. Did it do the job? I switch.

Two reasons. Smaller doesn't mean cheaper: a small model that gets it wrong, redoes it, and needs more rounds can use more than a big one that gets it right the first time. That math has to be done case by case. And there is a dial that moves consumption a lot and that few people look at: how much I let the model reason. I've been turning that effort down, because models need to think less and less to get to the same place.

I've shown this in class, with the same question asked three times. The simplest way, a few hundred tokens. Letting it search the web, a few thousand. With reasoning and detail at the maximum, more than eighty thousand, and a nine-minute wait. I didn't change the question: I only turned dials. And the first answer was already good enough for me.

It's not the only defensible answer. Someone who runs the same task thousands of times a day does different math, and whoever pays for the data center's water, different math again.

## What do I ask myself before using it?

- **Is the task already proven?** Discovering calls for the most capable model. Repeating calls for the cheapest one that can handle it.
- **Do I know how to ask in one go?** Ten vague attempts cost more than one request with context.
- **Is this going to repeat?** If the same task is going to run a thousand times, it's worth asking for a script and running the script ([chapter 10](/ai/ask-for-the-script/)). The script uses almost nothing.
- **Does it need to be an image or a video?** That's where consumption per request is highest.

<div class="g-box g-key" markdown="1">
**Keep this:** it's not about guilt over every question — it's about proportion. And you find the proportion by testing: step up to discover, step down to run. What you can't do is skip the math.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** how much is consumed by what the organization already uses every day, without anyone ever having done the math? Who pays — in money, in energy, in water?
- **Paths on the table:**
  - *Caio:* always the most capable model, at maximum. A mistake costs more than credits.
  - *Bia:* the cheapest one for everything. "It's for counting absences."
  - *Lia:* the most capable one while figuring out what works; one step down as soon as the task is proven.
- **What the team did, for now:** the monthly bill now has an owner, with the agreement "step up to discover, step down to run." The six hundred videos became six hundred text messages — and Bia still thinks the video would have worked better.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — the class's bill

Using the calculator in this chapter, each person estimates their own daily use. Add up the class, then multiply by the number of students at your institution. Then look up: where does your city's power come from? Is there a data center announced or under construction in your state? Who is going to supply the water?

#### Discussion questions

- The per-prompt numbers come from the companies themselves. What would you like to see audited by someone on the outside?
- If each answer gets more efficient but total use grows faster, does consumption go down or up? (Look up the "Jevons paradox.")
- Who should decide whether a data center can be built in a region with little water?

</details>

<div class="g-fontes" markdown="1">

#### References

- Altman, S. (2025). *The gentle singularity*. <https://blog.samaltman.com/the-gentle-singularity>
- International Energy Agency. (2025). *Energy and AI*. <https://www.iea.org/reports/energy-and-ai>
- Maranhão Filho, É. (2025, August 21). *Is fine-tuning still worth it?*. efrem.io. <https://efrem.io/blog/en/is-fine-tuning-still-worth-it/>
- O'Donnell, J., & Crownhart, C. (2025, May 20). We did the math on AI's energy footprint. Here's the story you haven't heard. *MIT Technology Review*. <https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/>
- Vahdat, A., & Dean, J. (2025, August 21). *Measuring the environmental impact of AI inference*. Google Cloud Blog. <https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference>

*Notes:* The values behind the orders of magnitude in the text: 0.24 Wh and 0.26 ml per median text prompt (Vahdat & Dean, 2025); 0.34 Wh per average query (Altman, 2025); about 3.4 million joules for five seconds of video, more than 700 times one image (O'Donnell & Crownhart, 2025); 415 TWh consumed by data centers in 2024, close to 1.5% of the world's electricity, with a projection of about 945 TWh in 2030 (International Energy Agency, 2025).

</div>
