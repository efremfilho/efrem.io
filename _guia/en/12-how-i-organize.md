---
title: "How I organize my work with AI"
description: "Folders that mirror my life, one little text box instead of ten tabs, fenced environments, and three vendors on purpose. The tools change; the principles, far less."
lang: en
ref: workspace
order: 12
part: 3
permalink: /ai/how-i-organize/
interactive: "anatomy of a work environment"
piece: "folders by city and keys in order"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 12

The project grew: two more cities asked for help. Within a week, Lia had three look-alike spreadsheets in the same folder and an access key pasted into the team's group chat, "to make things easier." Easier for whom?
</div>

This chapter is the most personal one in the guide. It isn't a recipe: it's how I work. The tools will change, which is why I don't mention any of them by name; what I hope stays are the principles behind it.

A caveat about the kind of user I am: I use AI very little as a chat "assistant" and a lot as a **building tool** — to write code, design interfaces, analyze data, and produce documents. I use tools from all the major vendors. And today it would be impossible for me to work the way I do without them.

## Where does your work live?

Principle number one has nothing to do with technology: **each area of work is a folder, and each project inside it is a repository.**

```
~/work
├── fgv/            classes and research projects
├── plancorp/       the company's products
├── unieuro/        student projects (one repository per product)
├── consulting/     clients
└── personal/       this site, studies, experiments
```

The practical consequence is huge. When I open an agent inside a project, it only sees that project. When I open it one folder up, it sees every project in that area — and I can ask "how are my students' projects doing?" and get an overview of who did what, across all the repositories, without opening any of them.

**The folder level where I open the tool is the size of the context I'm giving it.** It's the context engineering from [chapter 8](/ai/context/), done with the file manager.

It's also why I avoid the "do-it-all" agent that stores things its own way. They find their way around their own mess; later, a human trying to read it suffers.

## Do you need a terminal?

I work most of the time in the **terminal**: that black text screen that looks like DOS. AI coding tools have command-line (CLI) versions, and I prefer those for three reasons:

1. **I get distracted very easily.** A screen with a single little box to type in, full screen, is the best environment I know for not getting lost.
2. **Everything already talks to the terminal.** Git, the cloud services, the databases — professional tools were born there. The agent uses the same ones an engineer would, with no special integration needed.
3. **I see what's happening.** Every command the agent runs shows up on screen. I like knowing how things work under the hood, and that makes me more comfortable delegating.

I'll admit the irony: a while back I [complained that we were going back to the terminal](/blog/en/are-we-going-back-to-the-terminal/) and throwing away decades of interface work. I still think that, for most people, a good interface wins. For me, today, the little box won.

You **don't need** the terminal to apply anything in this guide. The same products have an app and a web version, and the logic is the same.

## On my machine or in the cloud?

The agent can work in two places:

- **On my machine**: it opens the project folder and works there. Fast, and the files stay with me. It's my default.
- **In a cloud environment**: the AI vendor spins up a temporary machine, downloads the repository, does the work, and hands me back a pull request. I use it when I want to keep work moving from my phone, leave something running overnight, or keep a company project isolated from my machine.

An environment like that is set up once and has four parts:

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** open the environment anatomy, just below. In Lia's project, what would go into each of the four parts — and what shouldn't go into any of them?
</div>

<div data-widget="tabs" data-title="Anatomy of a cloud environment" data-sub="Illustrative example. The names change from product to product; the four parts exist in all of them." markdown="1">

#### Repository

Where the code and the context come from. The environment starts by downloading the project's repository — with the `AGENTS.md`, the `docs/` folder, and the whole history from [chapter 11](/ai/repository-as-memory/). That's why it "shows up already knowing."

#### Setup script

The list of steps the machine runs every time it starts up, before the agent begins: install dependencies, configure tools, prepare the test database.

```
# runs every time the environment is created
install the project's dependencies
install the cloud tools the project uses
create the test database with fake data
run the tests once to confirm everything is up
```

In one real project of mine, this script is dozens of lines long. Nobody types them again: it's deterministic, as in [chapter 10](/ai/ask-for-the-script/).

#### Secrets

The access keys the project needs, stored in the environment's vault — never in the code, never in the conversation.

```
TEST_DB_KEY=••••••••
TASK_BOARD_KEY=••••••••
```

The rule is to give it only that project's keys, with the lowest permission that works. The most damage an agent can do is whatever its keys allow.

#### Network

Who this machine can talk to on the internet. The options are usually: nothing, a list of allowed sites, or everything.

```
allowed:
  - the code repository
  - the company's two cloud services
  - the task board API
  (and a few more: a little over a dozen in total)
blocked: everything else
```

For a harmless personal project I allow everything. For a company project, a closed list. If a malicious instruction shows up in the middle of a document, the agent simply has nowhere to send the data.

</div>

## Why not pick just one tool?

I pay for and use tools from three different companies. When I blow through the limit on one, I switch to another. But that's not the main reason: **it was a deliberate decision so I wouldn't depend on anyone.**

It took work. Each tool has its own way of doing things, its own config file name, its own quirks. What made it possible was the rule from the previous chapter — the knowledge lives in the repository, in plain text. Any of them opens the folder and picks up where the other left off.

And the recommendation I give to people who are starting out is the opposite of "pick the best one": test all three with the same real task. The difference between top models today is more a matter of taste than of capability.

## What does it cost — and how do you pay?

There are two ways to pay for AI, and confusing them gets expensive:

| | Monthly subscription | API (pay per use) |
|---|---|---|
| **How it charges** | Fixed price, with a usage limit | Per token processed, no ceiling |
| **Who it's for** | People using the vendor's apps and tools | Your own systems and agents calling the model |
| **Predictability** | Total | None, if you don't set a limit |
| **Where to start** | The most basic plan from one vendor | Only when you have a system that needs it |

For heavy use, the subscription is much cheaper — everything suggests that monthly plans are subsidized by the companies, which are fighting over who gets to be the default tool for people who build software. One public sign of that: a vendor has already [introduced weekly limits](https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/) to rein in subscribers who left the coding tool running nonstop, day and night. I once tried using one of these tools on pay-per-use, with no subscription: in two hours I'd spent what a month of subscription costs.

To give a sense of scale for someone who works with this all day: I keep three professional subscriptions. Each one costs between a third and two-thirds of a Brazilian monthly minimum wage; together, a little more than one minimum wage. It's not small — and it replaces an amount of tools and hours I can't even calculate anymore. For someone just starting out, the most basic plan from one vendor costs a small fraction of that and is enough to practice everything in this guide.

About API keys, which you'll run into when you build your own agent:

- **One key per project or per person.** Never a "general" key.
- **Set a spending limit.** Always. Before you use it.
- **Revoke it when you're done.** I create keys for students during a course and deactivate all of them at the end. A forgotten key is a bill left open.

<div class="g-box g-key" markdown="1">
**Key takeaways**

- Organize by folder and repository: where you open the tool defines the context it gets.
- A well-configured environment has four parts: repository, setup, secrets, and network.
- Don't marry a vendor. Keep the knowledge in plain text and test several.
- Subscription for people, API for systems — and API always with a limit.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** who has a key today that they shouldn't have anymore? If a tool went offline tomorrow, what would the team lose?
- **A way to find the answer:** list where the files and the keys are; separate them by project; give each key a limit and an end date.
- **New project piece:** the folder structure and the keys in order.
</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (20 min) — the map of your life

On paper, each person draws their ideal folder tree: what are your areas of work? Which projects exist in each one? For each project: who else needs access? Is there sensitive data? Then compare it with how each person's files are actually organized.

#### Discussion questions

- If an agent opened your "Documents" folder today, what would it understand? What shouldn't it see?
- What's the risk of using a single AI tool for everything? And the cost of using several?
- Does your organization pay for AI for its employees? If not, what are people using — and with what data?

</details>

<div class="g-fontes" markdown="1">

#### References

- Maranhão Filho, É. (2025, July 17). *Are we going back to the terminal?*. efrem.io. <https://efrem.io/blog/en/are-we-going-back-to-the-terminal/>
- Zeff, M. (2025, July 28). Anthropic unveils new rate limits to curb Claude Code power users. *TechCrunch*. <https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/>

*Notes:* The vendor that introduced weekly limits is Anthropic (Zeff, 2025). The usage numbers in this chapter come from my own routine: in November 2026, the three subscriptions added up to about R$ 2,000 a month, with Brazil's monthly minimum wage at R$ 1,621.

</div>
