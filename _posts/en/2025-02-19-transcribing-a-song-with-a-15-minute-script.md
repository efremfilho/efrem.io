---
layout: post
categories: en
title: "Transcribing a song with a 15-minute script"
date: 2025-02-19
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:7297940551289462785/"
portuguese_version: "../pt/2025-02-19-transcribing-a-song-with-a-15-minute-script.md"
---

AIs being AIs. I wanted to read the lyrics (I have a hard time understanding songs just by listening). Look at how much YouTube's transcript helped me (image). lol

NotebookLM didn't help either: "The lyrics you asked me to transcribe include: [excerpt omitted]. You have previously identified the song as "Homem da Meia-Noite" by Banda Eddie."

So I went to Google Colab and asked "how do I extract the audio from a YouTube video" + "now I want to call OpenAI's Whisper API with this mp3 file". Lots of errors — which Gemini itself fixed — and 15 minutes later I had a muuuuch better version!

*[The full lyrics transcript is omitted in this version.]*

I'm really impressed by how much easier it is to write a script today (REMEMBER, it's not a full app, it's a script!)

For anyone who wants to see (the size of) the script:

**Links**

- [youtube_2_audio_2_transcribe.ipynb (GitHub)](https://github.com/efremfilho/python_scripts/blob/master/youtube_2_audio_2_transcribe.ipynb)

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7297940551289462785/) on February 19, 2025. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
