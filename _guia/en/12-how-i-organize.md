---
title: "Who pays for switching tools?"
subtitle: "Environments, access, and team autonomy."
description: "Folders that mirror my life, one little text box instead of ten tabs, fenced environments, and one tool I'm actually good at. The tools change; the principles, far less."
lang: en
ref: workspace
order: 12
part: 2
permalink: /ai/how-i-organize/
interactive: "anatomy of a work environment"
piece: "folders by city and keys in order"
last_modified: 2026-11-17
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 12

Two more municipalities asked for help. Lia put the materials in the same folder: "we'll separate them later." Soon there were similar spreadsheets and an access key in the group chat for everyone to use. Caio proposed another tool: during a visit, he had managed to work without a connection, something the current tool still could not do. Bia wanted to stop switching; she had barely learned the previous one and was the person helping field teams by phone. Caio asked the agent for a migration plan. Bia reviewed it: the demonstration was simple, but the plan did not account for training or support. Lia saw that organizing by project also meant separating access. How much of the switch was an improvement, and how much work did it push onto whoever would keep answering calls?
</div>

This chapter is the most personal one in the guide. It isn't a recipe: it's how I work. The tools will change, which is why I don't mention any of them by name; what I hope stays are the principles behind it.

A caveat about the kind of user I am: I use AI very little as a chat "assistant" and a lot as a **building tool** — to write code, design interfaces, analyze data, and produce documents. I test tools from several vendors and spend most of my day inside one. Today it would be impossible for me to work the way I do without them.

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

The practical effect is organizing what I ask the agent to consult. I can work on one project or request an overview of projects in an area. But opening a folder **does not by itself create an access boundary**: what the tool can read or change depends on permissions and the environment it runs in.

**The folder organizes the work; permissions delimit access.** And being accessible does not mean every file has already been read into the conversation. That connects context in [chapter 8](/ai/context/) with access in [15](/ai/agents-on-a-leash/).

It's also why I avoid the "do-it-all" agent that stores things its own way. They find their way around their own mess; later, a human trying to read it suffers.

## Do you need a terminal?

I first tried the tools that look like a programming environment. On the first screen, one of them asked me to install a module. I closed it. Could I have stopped and learned? I could have. It was spite.

I went to the **terminal**: that black text screen that looks like DOS. AI coding tools have command-line (CLI) versions, and I stayed with those for three reasons:

1. **I get distracted very easily.** A screen with a single little box to type in, full screen, is the best environment I know for not getting lost.
2. **Everything already talks to the terminal.** Git, the cloud services, the databases — professional tools were born there. The agent uses the same ones an engineer would, with no special integration needed.
3. **I see what's happening.** Every command the agent runs shows up on screen. I like knowing how things work under the hood, and that makes me more comfortable delegating.

I'll admit the irony: a while back I [complained that we were going back to the terminal](/blog/en/are-we-going-back-to-the-terminal/) and throwing away decades of interface work. I still think that, for most people, a good interface wins. For me, today, the little box won.

You **don't need** the terminal to apply anything in this guide. The same products have an app and a web version, and the logic is the same. I've been migrating myself: I use the web version and my phone more, and [I ate my words on voice](/blog/en/coding-agents-are-becoming-a-commodity/) — I started talking to agents a lot more, and found a clear split: I talk when I want to brainstorm and stop to write when I need to review carefully.

## On my machine or in the cloud?

The agent can work in two places:

- **On my machine**: it opens the project folder and works there. Fast, and the files stay with me. It's my default.
- **In a cloud environment**: the AI vendor spins up a temporary machine, downloads the repository, does the work, and hands me back a pull request. I use it when I want to keep work moving from my phone, leave something running overnight, or keep a company project isolated from my machine.

That is also where tools differ far more today than in model quality: the mobile experience and how easy it is to set up that cloud environment vary widely. I still haven't migrated completely to a tool whose terminal I was enjoying precisely because its mobile web app was rough and it lacked a good cloud environment — while another one I used to hate turned out to be great at setting up that remote environment.

An environment like that is set up once and has four parts:

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** open the environment anatomy, just below. In the team's project, what would go into each of the four parts — and what shouldn't go into any of them?
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

The rule is to give it only that project's keys, with the lowest permission that works. Keys are part of the boundary; files, open sessions, and other available access also matter.

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

For a harmless personal project I allow everything. For a company project, a closed list. That list reduces possible destinations; I still need to look at what the permitted services allow. Access to a service may include publishing, sharing, or deleting within it.

</div>

## One tool, or several?

I pay for more than one, test several, and today keep three in my workflow — but my rule hasn't changed: I'd rather be very good at one than mediocre across all three. The worst scenario, for me, is spreading attention so thin that you never learn to use any of them properly. My main one remains the everyday tool, for its ecosystem as a whole; the other two step in for specific moments, leaning on each one's style: a faster and more proactive one for risky tasks, and another that turned out to be the most thorough in reviews — from a vendor I took a while to treat as serious, yet one that has the advantage of an already integrated work ecosystem.

What makes that work is the rule from the previous chapter: the knowledge lives in the repository, in plain text. If I need to switch, I switch. It feels strange for a few hours and I move on. For me, it's not just models — coding agents themselves have become a *commodity*, and what still sets one apart from another is its execution style and the ecosystem around it.

For people who are starting out, the recommendation is the opposite of "pick the best one": test more than one with the same real task, stay with the one that best fits the way you work, and get good at it. The difference between top models, today, is more a matter of taste than of capability.

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


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** The current tool gets in the way in the field; the new one may get in the way of people who must learn and support it. Who has the time to pay for that transition?
- **Paths on the table:**
  - *Caio:* test the offline alternative in an isolated project. That tackles a real difficulty, but splits attention between two tools.
  - *Bia:* stay with the current tool and adapt field routines. That preserves the team's learning, but keeps a limitation she faces herself.
  - *Lia:* postpone any testing until projects and access are separated. That reduces confusion, but delays an answer for people working without a signal.
- **What the team did, for now:** separated the folders and revoked the shared key, creating access per project. It then authorized Caio's limited trial with fictional data. Bia kept supporting the current tool; an improvement she had requested was deferred. The new cities received a demonstration, not a promise of immediate service.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Organization:** folders and repositories help locate context; permissions define access.
- **Environment:** files, setup, secrets, and network access influence what an agent can execute.
- **Portability:** knowledge kept in files helps with changing tools; the move may still require adaptation and support.

What would need to accompany the project for someone else to continue without guessing your decisions?

</div>

<div class="g-project" markdown="1">

## What about your project?

Imagine resuming your project in another tool or with another person. What would need to come along: files, decisions, examples, access, knowledge nobody wrote down? Try one small task through that handover. What worked in the demonstration, and what would still depend on you to keep working?

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
- Maranhão Filho, É. (2026, November 17). *Coding agents are becoming a commodity*. efrem.io. <https://efrem.io/blog/en/coding-agents-are-becoming-a-commodity/>
- Zeff, M. (2025, July 28). Anthropic unveils new rate limits to curb Claude Code power users. *TechCrunch*. <https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/>

*Notes:* The vendor that introduced weekly limits is Anthropic (Zeff, 2025). The usage numbers in this chapter come from my own routine: in November 2026, the three subscriptions added up to about R$ 2,000 a month, with Brazil's monthly minimum wage at R$ 1,621. The account of testing switches across agents and comparing cloud environments, mobile versions, execution styles, and ecosystems refers to the author's use of Claude Code, Codex, and Gemini (Antigravity CLI) and the discussion around the post cited in the references.

</div>
