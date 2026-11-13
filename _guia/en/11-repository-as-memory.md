---
title: "Your repository is your memory"
description: "Git and GitHub for non-devs: the time machine that lets you make mistakes without fear, and the place where your project's context lives — whichever AI you use."
lang: en
ref: repo-memory
order: 11
part: 3
permalink: /ai/repository-as-memory/
interactive: "branch timeline + repository anatomy"
piece: "the repository with the decisions on record"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**Lia's journey** · scene 11

The colleague who built the first spreadsheet left the organization in March. With her went the answer to the question the city's education department asked in April: why five absences? Lia searched email, group chats, meeting minutes. Nothing. The decision existed; the memory didn't. Where does an organization keep its whys?
</div>

The first thing I recommend to anyone starting to build anything with AI — a product, an automation, even a personal agent — isn't an AI tool. It's creating a repository.

It sounds like advice from one programmer to another. It isn't. If [chapter 8](/ai/context/) said the model only knows what's in the window, this one answers the next question: **where do you keep everything that needs to go back into the window tomorrow?**

## What is a repository, anyway?

**Git** is a system that keeps every version of a folder of files. It came out of the Linux community, led by Linus Torvalds — [the story is short and good](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git). You know the version history of an online document? It's that, for an entire project and with a lot more control.

**GitHub** is a website that hosts those versioned folders — the **repositories** — and adds what's missing for working in a group: permissions, review, discussion.

The minimum vocabulary:

- **Commit**: a saved version, with a description of what changed. One small project of mine has more than a hundred; each one is a point I can go back to.
- **Branch**: an offshoot, like a branch on a tree. A parallel timeline where you experiment without touching what's working. It's the image of timelines branching off, common in time-travel stories.
- **Pull request (PR)**: the request to join your branch back into the main line. "Look what I did. Can it go in?"
- **Review**: someone looks at the PR before approving it. On my team, I review what a teammate does and they review what I do — and an AI reviews us both.
- **Merge**: the approved branch joins the main line.
- **Rollback**: it went wrong, so you go back to the previous version. Nothing is lost.

<div class="g-lia g-lia-missao" markdown="1">
**Provocation:** play with the timeline. Then, in the repository anatomy, go looking: which file would hold the answer to "why five absences"?
</div>

<div data-widget="git"></div>

## Why does this matter so much with AI?

**Because you can make mistakes without fear.** An agent is going to touch your files. Sometimes it will do it badly. With Git, the worst consequence is "go back one version." Without Git, it's "I hope I have a copy."

**Because the agent handles the paperwork.** I don't create branches by hand. One of the projects I work on has more than a thousand, all created and managed by agents. My role is to say what I want and review what shows up in the pull request.

**Because it works for teams.** Humans and agents working on the same project need a place where nobody steps on anybody else's work and every change goes through someone before it takes effect.

**Because it's your memory.** This is the least obvious point and the most valuable.

## Where does a project's memory live?

Code is only part of what I keep. The other part is everything I don't want to explain twice — to an AI or to a person.

<div data-widget="tabs" data-layout="tree" data-title="Anatomy of a repository that remembers things" data-sub="Click each file or folder. None of them is code." markdown="1">

#### README.md

The front door. What the project is, who it's for, how to run it. Written for a person who has never seen it before — which, conveniently, also describes any AI at the start of a conversation.

#### AGENTS.md

The standing instructions for agents: how the project is organized, which commands to use, what to **never** do, how to test before saying it's done. [AGENTS.md](https://agents.md/) is an open format — a "README for agents" — that most tools read on their own when they open the project. Some use a name of their own for this file; I keep both, so I'm not tied to one tool.

```
# Rules for this project
- Never commit directly to the main branch; open a PR.
- Real client data doesn't go into tests. Use /fake-data.
- Before saying you're done, run the tests and show the result.
- Decisions already made are in docs/decisions. Read them before proposing anything.
```

#### docs/decisions/

One decision per file: what was proposed, what was chosen, and **why**. It keeps the agent from reopening, every week, a discussion the team already closed — and helps a new person understand how we got here.

#### docs/rules/

The business rules, in writing. My favorite way to produce them: I record the meeting, take the transcript, and ask "create a document with the rules we defined in this conversation." Then someone who was in the meeting reviews it.

#### docs/handoffs/

Handoff notes: where I stopped, what's left, what was half-done. Written at the end of a work session. The next day — or three weeks later — the agent starts by reading the latest handoff and picks up where it left off.

#### docs/runbooks/

The step-by-step guides and scripts for tasks that repeat: publishing a release, generating the monthly report, registering a new client. It's the deterministic part from [chapter 10](/ai/ask-for-the-script/), kept where everyone can find it.

#### docs/mistakes/

What has already gone wrong and shouldn't happen again. "We tried it this way, it broke because of that, the right path is this other one." It's the closest an agent gets to learning from experience.

</div>

Who writes these documents? Most of the time, the AI itself, at my request: *"generate the documentation for what we learned in this session."* I read it, fix it, and commit.

## What if the trendy tool changes tomorrow?

Because the knowledge lives in plain text files, in a repository that's mine, **I can switch AIs whenever I want**. I use three different vendors on purpose. It was painful at first, but today any of them opens the project, reads the same files, and carries on with the work.

For me, models have become a *commodity* — [I was already saying so a while back](/blog/en/agentkit-wont-kill-the-ipaas/), comparing it with what happened to the cloud: the difference between the best ones is more a matter of taste than of capability. What isn't a commodity is your project's context — and that shouldn't live inside a vendor's account, or inside a specific agent framework. If the trendy tool changes tomorrow, you plug the next one into the same repository.

The same goes for people. Someone new joined the team? Give them access to the repository. The decisions, the rules, and the history are already there.

<div class="g-box g-mine" markdown="1">
**Where to start:** create a GitHub account, then an **organization** for your company or project (separate from your personal profile), and inside it a **private** repository. Ask your AI assistant to create the structure above. Start today — it's much easier to document from the beginning than to reconstruct later.
</div>

<div class="g-box g-key" markdown="1">
**Key takeaways**

- Git is the safety net: everything has a history, nothing is final.
- Branch + pull request + review is what lets an agent work without putting production at risk.
- What's in the repository is yours and works with any AI. What's only in the conversation gets lost.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Lia's logbook**

- **Questions she took with her:** what in the organization exists only in one person's head? If I leave tomorrow, what does whoever comes next need to find written down?
- **A way to find the answer:** pick an old decision and try to reconstruct the why; record the next decision on the spot, with a date and a reason; agree with the team on where this lives.
- **New project piece:** the repository, with a README, an AGENTS.md, and the decisions folder.
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
- Maranhão Filho, É. (2025, October 7). *AgentKit won't kill the iPaaS*. efrem.io. <https://efrem.io/blog/en/agentkit-wont-kill-the-ipaas/>

</div>
