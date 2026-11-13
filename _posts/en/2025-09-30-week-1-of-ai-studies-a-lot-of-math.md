---
layout: post
categories: en
title: "Week 1 of AI studies: a lot of math, little for product people"
date: 2025-09-30
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7378805080998834176/"
portuguese_version: "../pt/2025-09-30-week-1-of-ai-studies-a-lot-of-math.md"
---

Summary of week 1 of my studies. A lot of math and little that's useful for a product person. For someone in product, the classes I watched don't make much difference. Unless you want to go deeper as an AI researcher.

Here's the summary of what I can extract for a product person who wants to understand it (I hope lol):

On the areas of machine learning:

Supervised learning - You have a lot of data and want to create a "formula" to predict/classify new data.

Unsupervised - it tries to discover hidden patterns in the data. It's an attempt to find clusters in the data.

Reinforcement learning - you punish or reward based on the attempt. This is the one I know least about and remember least from my undergrad days.

On the algorithms:

Linear regression - it's the simplest algorithm, and the attempt is to simplify to z = ax + by + e. The idea is to have parameters associated in a linear way (no multiplication). The idea is that it stays simple, with a single global minimum. To get there, you put it into a function "that squares it" and turn it into a parabola. So you end up with just one minimum point. If in doubt, look up images of quadratic functions.

Locally weighted regression - if the data doesn't follow a linear function, you try to break the neighboring observations into linear pieces. The idea is to look at how nearby observations behave and try to approximate them with a straight line. It's computationally heavy to do this. You know when we try to put many sides on a polygon to approximate a circle? That's more or less the idea here.

Logistic regression - the idea is to fit the data to an S-shaped curve. The advantage of turning it into a logistic curve (if in doubt, look up the logistic function) is that it will also have only one global maximum, and it helps with classification because you get a value between 0 and 1. That way we can set a threshold, and an answer on one side will be true and on the other false, for example.

This comes largely from the world of statistics and probability. Now, how we find these global maxima and minima — or the closest to global we can get (more on that later) — is via optimization algorithms (which draw heavily on linear algebra and calculus).

The idea is to have a way to iteratively find this minimum/maximum point by testing values and following some algorithm to move down or up. Anyone who has used Solver in a spreadsheet with a genetic algorithm does something similar.

For anyone interested, I'll be gathering the journey in this document - https://lnkd.in/dUns-m9d

It's open for comments! If I said something really dumb, just let me know :)

**Links**

- [Estudo IA -> GenAI](https://docs.google.com/document/d/12LPtKVMljsu7rh2Jclz2OfSh7OzOpbWHCZAQ6DLzM7M/edit)

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7378805080998834176/) on September 30, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
