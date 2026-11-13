---
title: "Data and privacy: public doesn't mean fair game"
description: "The difference between public data, personal data, and sensitive data, and the habit of cropping, blurring, and minimizing before you hit send."
lang: en
ref: data-privacy
order: 5
part: 1
permalink: /ai/data-and-privacy/
interactive: "what to blur in the photo + checklist"
piece: "test spreadsheet with fictional data"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 5

Eleven at night, the day before a meeting. Lia had the spreadsheet open: name, date of birth, address, the mother's phone number, whether the family receives social benefits. All that was left was to "ask the AI to summarize it." The cursor was already in the chat box when she stopped. That data wasn't hers. It belonged to teenagers, and to families who never knew they were in a spreadsheet. Who had authorized that?
</div>

If the model learns from data, the next question is obvious and almost never asked: **whose data?** This chapter is about the line I ask every student to draw before uploading anything to any tool.

## Does all data deserve the same care?

**Public information** is whatever is openly available: census statistics, open-access scientific papers, software documentation. Watch out for the trap: *being accessible doesn't make it fair game*. Public data is still subject to copyright, terms of use, and ethical limits on collection.

**Personal data** is any information that identifies or can identify a person: name, CPF (the Brazilian taxpayer ID), phone number, email, address, license plate, location.

**Sensitive personal data** is the category that Brazil's data protection law ([LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)) protects most strongly, because a leak can lead to discrimination: racial or ethnic origin, religious belief, political opinion, union membership, health data, sex life, genetic data, and **biometric** data.

| Type of data | Examples | What can happen if it's used without permission |
|---|---|---|
| Face and biometrics | Photos, fingerprint, iris, voice | Surveillance, tracking, misidentification, deepfakes |
| Health | Diagnoses, test results, prescriptions | Discrimination in employment and insurance, exposure |
| Address and location | Street and house number, GPS history | Physical risk, stalking, harassment |
| License plate | Traffic camera image | Mapping of routines and movements |
| Financial | Card, bank statement, credit score, income tax return | Fraud, scams, predatory lending |
| Name, signature, documents | ID card, CPF, signature | Forgery, accounts opened in your name, identity theft |
| Contact details | Phone, email, IP address | Spam, targeted *phishing*, harassment |

The golden rule applies to every row: **collecting and using personal data requires a legal basis — in practice, almost always informed, specific, and revocable consent.**

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** in the scene below, find everything that would identify someone. Then think about Lia's spreadsheet: what in it is necessary for the task, and what is only there because it always has been?
</div>

<div data-widget="privacidade"></div>

## What happens to a model trained on badly collected data?

A photo album app used its own users' images to train facial recognition without making that clear. The country's consumer protection authority [reached a settlement](https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo) that forced the company to delete not only the improperly collected photos but also **the models and algorithms trained on them**.

That second part is the one that matters. Badly collected data contaminates everything built on top of it. There's no such thing as "I already trained it, too late now."

## What should you do before you hit send?

Three moves solve most everyday problems:

- **Crop**: frame only what matters. The background of a photo usually holds more personal data than the main subject.
- **Blur**: faces, license plates, house numbers, documents. Irreversibly — a semi-transparent bar doesn't count.
- **Minimize**: if the task doesn't need the field, the field doesn't go. To ask for help with a customer spreadsheet, replace names with "Customer 1, Customer 2" and send five rows, not five thousand.

<div data-widget="checklist" data-key="privacidade" data-title="Privacy checklist" markdown="1">

#### When I build (collect data, train, set up an agent)

- [ ] I have documented consent from everyone who appears in the data
- [ ] I cropped the images to remove what doesn't matter from the background
- [ ] I irreversibly blurred faces, license plates, addresses, and documents
- [ ] I dropped every personal field that isn't essential to the goal
- [ ] I know where this data is stored and who has access

#### When I use (any AI tool)

- [ ] I read what the privacy policy says about how my conversations are used
- [ ] I turned off the use of my data for training, when the tool allows it
- [ ] I removed names, CPF numbers, addresses, and health data before pasting the text
- [ ] The data I'm pasting is mine — or I have permission from whoever owns it
- [ ] When in doubt, I used a made-up example in place of the real data

</div>

<div class="g-box g-mine" markdown="1">
**How I do it:** when I show a project in class, I use the demo repository, not the production one. And to test an idea, fictional data in the same format as the real thing works almost every time: it takes thirty seconds to ask the AI to generate it.
</div>

<div class="g-box g-key" markdown="1">
**Key takeaways**

- Publicly available is not the same as consented to.
- Wrongly collected data can bring down the entire model — it has already happened.
- Privacy is protected before the upload: crop, blur, minimize.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** who authorized each column in this spreadsheet? If a mother asked to see what's in there about her child, would I be able to show it — and explain it?
- **A way to find the answer:** run this chapter's checklist column by column; replace names with codes; test ideas only with made-up data; find out who in the school system is responsible for data protection.
- **New project piece:** a test spreadsheet in the same format as the real one, with no real data.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — data hunt

Ask each person to open their phone's photo gallery, pick a photo taken on the street or at work (without showing it to anyone), and count how many pieces of **other people's** personal data appear in it. Share only the counts and the types. Then do the same with the last conversation they had with an AI assistant.

#### Discussion questions

- A social media profile photo is public. Does that authorize using it to train facial recognition?
- Your coworker pasted the team's salary spreadsheet into a chatbot to "format it faster." What went wrong, and at what moment?
- Why did the authority order the models deleted, and not just the photos?

</details>

<div class="g-fontes" markdown="1">

#### References

- Brazil. (2018). *Lei nº 13.709, de 14 de agosto de 2018: Lei Geral de Proteção de Dados Pessoais (LGPD)* [General Data Protection Law]. <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm>
- Federal Trade Commission. (2021a, January). *California company settles FTC allegations it deceived consumers about use of facial recognition in photo storage app*. <https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo>
- Federal Trade Commission. (2021b, May). *FTC finalizes settlement with photo app developer related to misuse of facial recognition technology*. <https://www.ftc.gov/news-events/news/press-releases/2021/05/ftc-finalizes-settlement-photo-app-developer-related-misuse-facial-recognition-technology>

*Notes:* The app mentioned is Ever; the authority is the U.S. Federal Trade Commission.

</div>
