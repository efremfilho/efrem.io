---
title: "The service worked — for whom?"
subtitle: "Outcomes, hypotheses, and service-as-software."
description: "The list works, but use changes the question. What work does the service deliver, who handles exceptions, and what is worth building or buying?"
lang: en
ref: cases
order: 16
part: 3
permalink: /ai/real-cases/
piece: "the service promise revised through use"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 16

Classes resumed. After the trial with the existing routine, the version with access for schools was live: a daily list for visitors, an aggregate dashboard for Iara. Bia barely opened the dashboard; Iara used it to argue for continuing the partnership. Was not using the same screen a sign of failure?

With the historical data assembled, Lia asked the agent for a map of absences by day and shift. Caio reviewed the count. The darkest patch was Friday evening, part of the pattern he had spotted earlier. He thought it was work. Bia remembered the bus and wanted to investigate one school first; Lia wanted to hear from all of them before choosing one. In a conversation at the school, Ian, an evening student, raised another question: "if I'm back and still on the list, who do I talk to?" The count Caio had checked did not resolve that by itself. While they debated the cause, the school needed to organize the next week. What could they do without turning the first hypothesis into the official explanation?
</div>

An issued list, a completed visit, and a student returning to school are different events. The system can record the first perfectly without producing the others. It can help with the second without resolving the reason for the absence. Ian's request reveals another limit: updating a count does not ensure someone can correct their own situation.

I learned that difference the hard way, long before generative AI. More than ten years ago, I helped build a public-safety app with an emergency button for when someone was being mugged. In the presentation, it looked great. On the street, almost nobody used it — because nobody pulls a phone out of their pocket during a mugging, except to hand over the phone. To this day I still catch myself falling into the illusion that I know what someone will do in the real world just because the button works on my screen.

## What work did we promise to deliver?

For me, a product exists to solve a problem and let humans solve others. The list frees Bia from reconstructing contacts; that time can go towards talking with a family. But if Bia spends the afternoon correcting the list, the work has merely moved. What does she no longer need to do? What has appeared in its place?

That is the **service-as-software** mindset: thinking about the work delivered, who depends on it, and how to keep delivering. An interface can be part of that. It is not the whole promise. "Organizing next contacts and recording responses" is different from "predicting dropout." The former can fail too, but it gives the team something concrete to observe and discuss.

[An article from the consultancy Thoughtworks](https://www.thoughtworks.com/en-br/insights/blog/generative-ai/service-as-software-a-new-economic-model-for-age-of-ai-agents) presents *service-as-software* as a shift from selling tools to delivering outcomes. [An investment thesis from Sequoia](https://sequoiacap.com/article/services-the-new-software/) distinguishes selling the tool from selling the work. Both are interested parties in this market. These are proposals for thinking about businesses, not demonstrations that every activity should be automated or that one pricing model will replace all others.

Applying that lens to the case: Iara may want to buy support while keeping what the team built. Bia may want assistance preparing a conversation and autonomy to lead it. Caio may want to automate a list update without giving the model the decision about who deserves attention. These are choices about service, technology, and responsibility at once.

## Who does what when a new case arrives?

Imagine three offers for the same school:

| Offer | What does the school receive? | What work remains? |
|---|---|---|
| Assist the person handling cases | An analysis and a draft to inform their decision | Check the case, decide, and make contact |
| Automate a defined part | An updated list and notices under agreed conditions | Maintain data and rules; detect and handle exceptions |
| Take on a supported service | Organized contacts, recorded responses, and someone to turn to | Coordinate software, people, support, and corrections |

The third offer can use the other two. This is not a ladder where the last is always best. For one school, a list is enough; another lacks someone able to use it. For the team, taking on more work may be worthwhile — or exceed its capacity.

In the current workflow, counting is code; reading reports can use AI; talking with families stays with people. AI also helps the team investigate and improve these parts. **Computational thinking helps separate and connect; AI literacy helps choose what to delegate and read what comes back.** If the model changed, what would need to keep working?

## What does that number prove?

I dread numbers that climb on a dashboard while real life stays the same. At a company where I worked, our target was growing the number of registered accounts. We turned on an automation that invited the entire directory of every client company: ten thousand new people joined a month. We hit every target — and actual usage stayed exactly the same. It didn't help the company at all. Pure vanity metric.

In Lia's case, Caio can reproduce the absence map. That answers how the calculation was performed. It does not determine whether the Friday patch reflects work, transport, delayed records, or a combination. Bia knows about the bus; that knowledge is a lead, not a sample of the whole school system. Lia wants to hear from every school; that breadth costs time for those waiting.

The team can compare expectations with what happened: who was contacted, who kept waiting, which records needed correcting. It can observe whether the route for challenging the list works. These signals help revise the delivery. On their own, they do not establish that the software caused a change in school retention.

A request to the agent might be: "propose alternative explanations for this pattern and say what we would observe under each." Another team member would review the suggestions and choose what to check with schools. The answer opens an investigation; a good-looking chart does not turn it into a diagnosis.

## Subscribe or build?

I said in a conversation that I no longer subscribed to software services. A friend [showed me that wasn't true](/blog/en/i-only-pay-for-saas-i-see-value-in/). I was still paying for several services. The statement that survived the conversation was less spectacular: I pay for what I value; what doesn't provide that value and I can replace, I build with agents.

Before that, I had already [been replacing the search for an app with a request to build one](/blog/en/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/): a converter, a spreadsheet, a form. The autonomy remains. The correction is that enjoying building doesn't make building the best decision in every situation.

I also [wrote that code isn't the hard part](/blog/en/code-is-not-the-hard-part/). Making something for myself differs from maintaining something other people depend on. The comparison should include who handles failures, what the tool already provides, and the time I want to spend on it. The app working today doesn't by itself answer whether I want to maintain it tomorrow.

## What continues while we experiment?

Tomorrow's list needs to go out while the team investigates yesterday's. A school without connectivity may need a temporary procedure; that also needs appropriate access, updates, and someone responsible. Support is not a task that waits until the product is finished. It is part of the promise.

The next round may change the hypothesis, interface, division of work, or what is worth buying. It may preserve a routine that works. Learning by doing also means discovering which change can wait. What problem can people now tackle — and what work has our product just created?

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** one school asks for a list; another asks for someone to handle contacts. How do the work, cost, and responsibility change between those offers?
</div>


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** Investigating one school may help quickly and leave others waiting. Hearing from the whole system broadens the view, but also postpones local action. Which cost will the team accept?
- **Paths on the table:**
  - *Caio:* take the map, labeled as a hypothesis, to the department and ask about work schedules. That opens a broader conversation, but the chart may circulate without the caveat.
  - *Bia:* start with the school that reported the bus cut and check schedules with families. That follows a concrete lead, but may give too much weight to a case she knows.
  - *Lia:* hear from the schools before choosing where to act. That reduces dependence on an initial interpretation, but takes time and prolongs the wait.
- **What the team did, for now:** started with Bia's proposed investigation, without declaring a cause. Caio kept the work hypothesis and prepared the comparison; Lia scheduled a follow-up with the school. The others were still waiting. The dashboard helped Iara maintain the partnership, but did not answer for that choice of priority.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Delivery and outcome:** issuing a list, making contact, and resolving a difficulty are different events; one does not prove the other.
- **Service-as-software:** thinking about work delivered requires combining software, people, and exception handling. Assistance and automation can coexist.
- **Build or buy:** autonomy belongs in the calculation alongside maintenance, support, and the ability to check what you do not know.

If the count is correct and Ian still cannot correct his record, which part of its promise has the service not fulfilled?

</div>

<div class="g-project" markdown="1">

## What about your project?

Return to the hypothesis or intention you wrote down at the start. What observed use strengthened or challenged it? Choose a question that only emerged after operating and compare options: adjust the delivery, change the bet, or investigate further before making changes. Who gains and who waits with each option?

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (30 min) — what is the promise?

Choose a problem from your project. Describe one delivery that helps someone do the work and another that takes on part of it. For each proposal, specify what the person receives, what they still do, how they notice a failure, and whom they turn to. In groups of three, defend different proposals, including the cost of each choice. Then switch positions.

#### Discussion questions

- What improvement would justify keeping the list, even without a new app?
- If the target were the number of contacts, what might the team overlook?
- What change in your circumstances would make buying more appealing than building — or the reverse?

</details>

<div class="g-fontes" markdown="1">

#### References

- Bek, J. (2026, March 5). *Services: The new software*. Sequoia Capital. <https://sequoiacap.com/article/services-the-new-software/>
- Kamelman, M. (2025, December 3). *Service-as-software: A new economic model for the age of AI agents*. Thoughtworks. <https://www.thoughtworks.com/en-br/insights/blog/generative-ai/service-as-software-a-new-economic-model-for-age-of-ai-agents>
- Maranhão Filho, É. (2025, July 21). *Instead of looking for a SaaS, I open ChatGPT, Gemini or Colab*. efrem.io. <https://efrem.io/blog/en/instead-of-a-saas-i-open-chatgpt-gemini-or-colab/>
- Maranhão Filho, É. (2026, March 26). *Code is not the hard part*. efrem.io. <https://efrem.io/blog/en/code-is-not-the-hard-part/>
- Maranhão Filho, É. (2026, November 11). *I only pay for the SaaS I see value in, the rest I build*. efrem.io. <https://efrem.io/blog/en/i-only-pay-for-saas-i-see-value-in/>

*Notes:* Both references present commercial theses; their application to school outreach is a teaching scenario developed for this guide. Thoughtworks is a technology consultancy and Sequoia is an investor. The text does not adopt market forecasts, rigid divisions between intelligence and judgment, or the idea that every agent learns or is continuously trained in operation as facts. The accounts of the public-safety app, the bulk directory invite, and the build-or-buy decision are the author's.

</div>
