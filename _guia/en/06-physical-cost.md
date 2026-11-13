---
title: "The cloud sits on the ground: the physical cost of AI"
description: "The energy, water, and chips behind every answer, and why picking the right-sized tool is also an ethical decision."
lang: en
ref: footprint
order: 6
part: 1
permalink: /ai/physical-cost/
interactive: "energy calculator"
piece: "rule: the smallest model that does the job"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 6

Someone on the team had an exciting idea: use AI to generate a personalized video for each family, with each student's name. Six hundred families. Lia liked the idea and was left with a doubt she couldn't even put into words properly: does this have a cost that nobody there was seeing?
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

I've trained models that way, years ago. Today, for the overwhelming majority of cases I see in companies and classrooms, well-built context does the job. I like the line I quoted in [Is fine-tuning still worth it?](/blog/en/is-fine-tuning-still-worth-it/): *fine-tuning isn't injecting knowledge, it's overwriting*. All of [chapter 8](/ai/context/) is about the alternative.

## What do I ask myself before using it?

- **What is the smallest model that does the job?** Summarizing an email doesn't need the most expensive one in the catalog.
- **Do I know how to ask in one go?** Ten vague attempts cost more than one request with context.
- **Is this going to repeat?** If the same task is going to run a thousand times, it's worth asking for a script and running the script ([chapter 10](/ai/ask-for-the-script/)). The script uses almost nothing.
- **Does it need to be an image or a video?** That's where consumption per request is highest.

<div class="g-box g-key" markdown="1">
**Keep this:** it's not about guilt over every question — it's about proportion. Same logic as not driving to the bakery on the corner: the right tool, at the right size, for the right problem.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** how much is consumed by what the organization already uses every day, without anyone ever having done the math? Who pays — in money, in energy, in water?
- **A way to find the answer:** estimate the order of magnitude before deciding; start with the simplest resource and only move up a step if it doesn't do the job.
- **New project piece:** one more rule for the project: the smallest model that does the job.
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
