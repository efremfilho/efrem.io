---
layout: post
title: "Over-engineering: a confession"
date: 2025-10-22
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7386747077311102976/"
portuguese_version: "../pt/2025-10-22-over-engineering-a-confession.md"
---

Yesterday was fun. I had: some content behind a login, an 8-hour YouTube video with no transcript, and other materials. My technical side took over.

I started with the page behind the login. There's a div that pops up on top with the content I need. I inspect it and see the content was already in the HTML. "I know, I'll grab the HTML and throw it into the OpenAI platform to pull out only the text I need." 2,500 pages. OpenAI choked, and I still spent 8 dollars with no answer.

I grabbed only the div I needed. Same thing. Then I finally stopped thinking technically and did Ctrl+C + Ctrl+V on the biggest, most structured part. It worked. Damn, I'm dumb. Now the other, messier div I could even throw into a chatbot. Gemini went and produced the document I needed. Phew.

On to the video. I started with Google Colab to extract the audio from the video. I asked Gemini inside Google Colab to generate the code. Success. I was going to send it to the OpenAI API, did the math and gave up.

My technical side spoke up again. I had the idea of installing the open-source Whisper. I struggled a lot. Then I remembered Google AI Studio's Stream mode — on its own, one of the most UNDERRATED tools I know. Pairing with the LLM, I got it working.

Run. Out of memory. Cut a piece of the file to see if it worked. OK, it worked. Run it on a reduced-quality version of the audio. Out of memory. Switch the model from large to turbo — the only two that handle Portuguese. I spent hours in this loop of file size and model. It came out great. The beginning, that is. The end was a total mess (see the image). It just kept repeating "E vamos comer" ("and let's eat"). I was hungry too.

I gave up and threw it into NotebookLM as it was. Then I thought: why don't I try uploading just the audio? It worked. Damn, I'm so dumb. All I had to do was extract the audio from the video, shrink it and send it there.

All this to make it clear that we often over-engineer things that could deliver value much faster. Don't make my mistakes. Use the tools, and only go technical in extreme cases. :)

*The original post includes an image of the transcription result.*

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7386747077311102976/) on October 22, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
