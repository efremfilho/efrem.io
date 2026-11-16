---
title: "How did a correction disappear?"
subtitle: "Repositories, versions, and integration."
description: "Git and GitHub for non-devs: the time machine that lets you make mistakes without fear, and the place where your project's context lives — whichever AI you use."
lang: en
ref: repo-memory
order: 11
part: 2
permalink: /ai/repository-as-memory/
interactive: "branch timeline + repository anatomy"
piece: "the repository with the decisions on record"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 11

On Monday, transfers were being counted twice again. Lia had sent the department a copy of the script from before Bia's review. Caio had corrected another part over the weekend; both changes were right separately, but they weren't together. "Then only one person edits," Lia suggested. Bia disagreed: if everything waited for one person, they would keep losing visits. She asked the agent to compare the copies; Caio reviewed the differences and found the missing fix. In the middle of it, Iara asked where the five-absence threshold came from. Lia had documented how to count, not why that threshold existed. How could they keep both what changed and what nobody could yet explain?
</div>

The first thing I recommend to anyone starting to build anything with AI — a product, an automation, a book, even a personal agent — isn't an AI tool. It's creating a repository.

It sounds like advice from one programmer to another. It isn't. If [chapter 8](/ai/context/) said project decisions need to reach the window, this one answers the next question: **where do you keep everything that needs to go back into the window tomorrow?**

## Does a project need code?

I prefer turning the work into a GitHub project, even when the deliverable isn't software. This book is one example. Scripts that coding agents execute almost always end up appearing, but the presence of code isn't what makes the project worthwhile.

What I want to keep is the path: decisions, alternatives we've tried, meeting notes, what remains open. I create `docs/` folders for that and use `AGENTS.md` to guide whoever will work there. If I switch agents tomorrow, I don't want to start by telling the whole story again.

Think of a book whose structure changed. The current version shows where each chapter ended up. The decision record explains why it moved, what was rejected, and what's still being discussed. These are different kinds of memory, and I need both. Keeping only the latest version is like keeping the answer and losing the question.

## What happens when the team builds separately and tries to combine things later?

I've [made that workaround myself](/blog/en/processes-and-guardrails-for-product-builders-and-devs/): a test environment for people building products, separate from development work. Then came the pain of modularizing and integrating what had been built. My conclusion in that account: we should have brought smaller changes into review in the development environment from the start.

I was also trying automated code review. Sometimes it helped a lot; sometimes it didn't even answer. I hadn't reached a conclusion. Having a review tool hadn't solved the review process. That's why the repository appears here: to agree on how the work comes together, as well as where the files live.

## What is a repository, anyway?

**Git** is a system that [records versions of the files you choose to track and save in its history](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository). It came out of the Linux community, led by Linus Torvalds — [the story is short and good](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git). You know the version history of an online document? It's that, for an entire project and with a lot more control.

**GitHub** is a website that hosts those versioned folders — the **repositories** — and adds what's missing for working in a group: permissions, review, discussion.

The minimum vocabulary:

- **Commit**: a saved version, with a description of what changed. One small project of mine has more than a hundred; each one is a point I can go back to.
- **Branch**: an offshoot, like a branch on a tree. A parallel timeline where you experiment without touching what's working. It's the image of timelines branching off, common in time-travel stories.
- **Pull request (PR)**: the request to join your branch back into the main line. "Look what I did. Can it go in?"
- **Review**: someone looks at the PR before approving it. On my team, I review what a teammate does and they review what I do — and an AI reviews us both.
- **Merge**: the approved branch joins the main line.
- **Rollback**: something went wrong, so you recover an earlier version of the saved files. It doesn't automatically undo what happened outside them.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** play with the timeline. Then, in the repository anatomy, go looking: which file would hold the answer to "why five absences"?
</div>

<div data-widget="git"></div>

## Why does this matter so much with AI?

**Because you can make mistakes without fear.** An agent is going to touch your files. Sometimes it will do it badly. With the work saved in history, I can compare and recover versions. That helps fix files; it isn't a button for undoing every consequence in the world. Without history, often all that remains is "I hope I have a copy."

**Because the agent handles the paperwork.** I don't create branches by hand. One of the projects I work on has more than a thousand, all created and managed by agents. My role is to say what I want and review what shows up in the pull request.

**Because it works for teams.** Working alone, almost everything works. Software's usual problems show up when the second person joins: who changed what, which version counts, what to do when two changes clash. Humans and agents working on the same project need a place where nobody steps on anybody else's work and every change goes through someone before it takes effect.

At my job, today, it goes like this: we discuss the strategy and split it up. One feature stays with me, another with a colleague. Each of us implements with our own agents. I review theirs; they review mine.

**Because it's your memory.** This is the least obvious point and the most valuable.

## Where does a project's memory live?

In my `docs/` folders, I document decisions, paths already taken, and meeting notes. It's what I don't want to explain twice — to an AI or to a person. The structure below shows ways to separate this material; you can start with a few files and expand as needed.

<div data-widget="tabs" data-layout="tree" data-title="Anatomy of a repository that remembers things" data-sub="Explore the instructions, decisions, and records that help you resume the work." markdown="1">

#### README.md

The front door. What the project is, who it's for, how to run it. Written for a person who has never seen it before — which, conveniently, also describes any AI at the start of a conversation.

#### AGENTS.md

The standing instructions for agents: how the project is organized, which commands to use, what to **never** do, how to test before saying it's done. [AGENTS.md](https://agents.md/) is an open format — a "README for agents" — that compatible tools can read when they open the project. Some use a name of their own for this file; I keep both, so I'm not tied to one tool.

```
# Rules for this project
- Never commit directly to the main branch; open a PR.
- Real client data doesn't go into tests. Use /fake-data.
- Before saying you're done, run the tests and show the result.
- Decisions already made are in docs/decisions. Read them before proposing anything.
```

#### docs/decisions/

One decision per file: what was proposed, what was chosen, and **why**. It keeps the agent from reopening, every week, a discussion the team already closed — and helps a new person understand how we got here.

#### docs/meetings/

What was discussed, what was decided, and what remains open. A conversation may contain ten suggestions and one decision; the notes need to make the difference visible.

#### docs/rules/

The business rules, in writing. My favorite way to produce them: I record the meeting, take the transcript, and ask "create a document with the rules we defined in this conversation." Then someone who was in the meeting reviews it.

#### docs/handoffs/

Handoff notes: where I stopped, what's left, what was half-done. Written at the end of a work session. The next day — or three weeks later — the agent starts by reading the latest handoff and picks up where it left off.

#### docs/runbooks/

The step-by-step guides and scripts for tasks that repeat: publishing a release, generating the monthly report, registering a new client. It's the deterministic part from [chapter 10](/ai/ask-for-the-script/), kept where everyone can find it.

#### docs/mistakes/

What has already gone wrong and shouldn't happen again. "We tried it this way, it broke because of that, the right path is this other one." It's recorded experience to guide the next session, without retraining the model.

</div>

Who writes these documents? Most of the time, the AI itself, at my request: *"generate the documentation for what we learned in this session."* I read it, fix it, and commit.

## What if the meeting became raw material?

The simplest case and maybe the most useful: I record meetings (with everyone's knowledge), take the transcript, and use it as raw material. "Create a document with the rules we defined." "List the decisions and who got what." "What was left open?" I described the method in [this post](/blog/en/recording-calls-to-think-with-claude/).

This guide, by the way, was born that way: from recordings of my classes and from an hour-and-a-half conversation in which I showed a friend how I work.

## Does this book work that way too?

Yes. The [project for this site and guide](https://github.com/efremfilho/efrem.io) keeps text, working rules, sources, and tools in one place. You don't need to be building an app for that to make sense.

| Where | What it does in this project |
|---|---|
| `AGENTS.md` | Records the audience, voice, editorial rules, and what to check before considering a change finished. |
| `_guia/` | Keeps the Portuguese and English chapters; these generate the pages and the book version. |
| `_tools/guia/` | Keeps scripts that assemble references, check the guide, test experiments, and help generate the site and PDF. |
| `temp/` | Holds local, private preparation material such as transcripts and drafts; it stays out of the published repository and site. |

The `docs/` structure above is an example of organization, not a recipe of required folders. Here, some working material lives in `temp/`. **Being in the project folder doesn't mean being published.** This project's rules make the distinction explicit; the folder name alone doesn't do that.

One concrete editorial decision: Portuguese first, English as its mirror. That's in the instructions instead of depending on me remembering to repeat it with each request. Another: references are generated from a shared source list. The agent can work on the text and run the checking scripts in the same project. It's development in service of a book.

And there's an important limit: a stored document isn't necessarily a read document. The agent needs to locate the relevant record and bring it into the task. The repository preserves the path; context puts the necessary part of that path on the desk.

## What if the trendy tool changes tomorrow?

Because the knowledge lives in plain text files, in a repository that's mine, **I can switch AIs whenever I want**. I test several, and switching costs me a few hours of awkwardness: any of them opens the project, reads the same files, and carries on with the work. That doesn't mean switching all the time — I'd rather be very good at one than mediocre at all of them. The freedom is in being able to leave, not in leaving every week.

For me, models have become a *commodity* — [I was already saying so a while back](/blog/en/agentkit-wont-kill-the-ipaas/), comparing it with what happened to the cloud: the difference between the best ones is more a matter of taste than of capability. What isn't a commodity is your project's context — and that shouldn't live inside a vendor's account, or inside a specific agent framework. If the trendy tool changes tomorrow, you plug the next one into the same repository.

The same goes for people. Someone new joined the team? Give them access to the repository. The decisions, the rules, and the history are already there.

<div class="g-box g-mine" markdown="1">
**Where to start:** create a GitHub account, then an **organization** for your company or project (separate from your personal profile), and inside it a **private** repository. Ask your AI assistant to create the structure above. Start today — it's much easier to document from the beginning than to reconstruct later.
</div>


<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **In dispute:** Centralizing avoids some collisions and creates waiting. Dividing work lets people advance, but requires agreement on how the pieces meet. Where do the reasons live?
- **Paths on the table:**
  - *Lia:* one person maintains the version that goes live. That simplifies coordination, but concentrates work and dependence on that person.
  - *Caio:* separate components and schedule integration. That preserves autonomy, but shared rules can still conflict.
  - *Bia:* use a repository with proposed changes and review by someone else. That lets them compare and recover saved versions, but requires learning a routine and setting aside review time.
- **What the team did, for now:** adopted Bia's proposal. It put the script, tests, agent instructions, and decisions in the repository. Caio combined the fixes; Bia reviewed them; Lia replaced the copy she had sent. For five absences, they recorded "we don't know; we inherited it." The history began there, with that gap.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## What is worth keeping from this round?

- **Repository:** brings together a project's files, even when the delivery is not code.
- **Version and review:** record changes and help compare and combine work. Recovering a file does not undo an external action.
- **Memory:** decisions, reasons, and uncertainties need to be recorded and read; history alone does not explain every why.

What is the difference between being able to recover a version and being able to explain why it was chosen?

</div>

<div class="g-project" markdown="1">

## What about your project?

Keep a decision, a version of the delivery, and the remaining open question in the repository. It can be a project without code. Ask the agent to resume work from those files and explain why the decision was made. What did it have to guess? Add what was missing without erasing the uncertainty.

</div>

<details class="g-aula" markdown="1">
<summary>Take it to class</summary>

#### Activity (40 min) — the first repository

Each person creates a GitHub account and a private repository for a project of their own (it can be a capstone project, a tracking spreadsheet, a process from work). With help from an assistant, they write the `README.md` and a ten-line `AGENTS.md`. They make a change, a commit and — for the faster ones — a branch and a pull request.

#### Discussion questions

- What, in your work, exists today only in someone's head or in a chat history?
- If the AI tool you use shut down tomorrow, what would you lose?
- Why ask for a review from another person (or another AI) before merging a change?

</details>

<div class="g-fontes" markdown="1">

#### References

- *AGENTS.md*. (n.d.). <https://agents.md/>
- Chacon, S., & Straub, B. (2014). A short history of Git. In *Pro Git* (2nd ed.). Apress. <https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git>
- Chacon, S., & Straub, B. (2014). Recording changes to the repository. In *Pro Git* (2nd ed., Section 2.2). Apress. <https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository>
- Maranhão Filho, É. (2025, October 7). *AgentKit won't kill the iPaaS*. efrem.io. <https://efrem.io/blog/en/agentkit-wont-kill-the-ipaas/>
- Maranhão Filho, É. (2026, August 18). *Recording calls to think things through with Claude*. efrem.io. <https://efrem.io/blog/en/recording-calls-to-think-with-claude/>
- Maranhão Filho, É. (2026, July 28). *Processes and guardrails for product builders and devs working together*. efrem.io. <https://efrem.io/blog/en/processes-and-guardrails-for-product-builders-and-devs/>
- Maranhão Filho, É. (n.d.). *efrem.io* [Repository for the website and AI Without the Magic guide]. GitHub. <https://github.com/efremfilho/efrem.io>

*Notes:* The preference for creating GitHub projects even when the deliverable is not code, using AGENTS.md and docs/ folders for decisions, paths taken, and meeting notes, is the author's account. The website and book case describes the repository structure: README.md, AGENTS.md, chapters, tools, and exclusion rules in .gitignore and _config.yml. The temp/ folder is local and private; its contents are not reproduced in this example. Git preserves recorded history for tracked files, not an automatic copy of everything in the working folder (Chacon & Straub, 2014, Section 2.2).

</div>
