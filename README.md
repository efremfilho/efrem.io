# efrem.io

Site pessoal, blog bilíngue (PT/EN) e encurtador de links, publicado com [Jekyll](https://jekyllrb.com/) no GitHub Pages.
Migrado do Carrd em junho/2026.

## Estrutura

- `index.html` — página principal (perfil, links, cartão do guia e posts recentes do blog).
- `blog/index.html` — central do blog (`/blog/`) com busca instantânea e filtros por idioma.
- `_guia/`, `ia/`, `ai/` — guia "IA sem mágica" (ver seção abaixo).
- `_posts/pt/` — posts em português (`/blog/pt/<slug>/`).
- `_posts/en/` — posts em inglês (`/blog/en/<slug>/`).
- `_layouts/` — layouts do site (`default.html` e `post.html` com alternador de idioma).
- `_includes/` — templates reutilizáveis (formatação de datas PT/EN).
- `assets/` — imagens e CSS (`assets/css/style.css`).
- `redirects/` — um arquivo por atalho, usando o plugin [`jekyll-redirect-from`](https://github.com/jekyll/jekyll-redirect-from) (suportado nativamente pelo GitHub Pages). Inclui `/posts` -> `/blog/`.
- `404.html` — página para atalhos inexistentes.
- `CNAME` — domínio customizado (`efrem.io`).
- `COMO-PUBLICAR.md` — guia passo a passo para criar e publicar novos posts com prompt pronto para o Claude.

## Guia "IA sem mágica" (`/ia/` e `/ai/`)

Guia em capítulos, bilíngue e interativo, separado do blog. Cada capítulo é um arquivo Markdown — o que facilita revisar, ampliar e, no futuro, exportar como livro.

- `_guia/pt/NN-slug.md` e `_guia/en/NN-slug.md` — os capítulos. O par PT/EN é ligado pelo campo `ref` (igual nos dois arquivos); a ordem vem de `order` e a parte de `part` (1 = Entender, 2 = Pensar, 3 = Construir).
- `_docs/` — rascunhos que não vão para o site (o Jekyll ignora pastas com sublinhado), como a proposta de revisão da ementa.
- `ia/index.md` e `ai/index.md` — texto de abertura do índice em cada idioma.
- `ia/livro.md` e `ai/book.md` — **versão livro** (`/ia/livro/` e `/ai/book/`): uma página só com capa, sumário e todos os capítulos, pronta para imprimir ou salvar em PDF. É montada automaticamente por `_layouts/guia-livro.html` a partir dos capítulos — capítulo novo entra sozinho. Fica fora do sitemap e com `noindex`, para não competir com os capítulos nos buscadores.
- `_layouts/guia.html` e `_layouts/guia-index.html` — layout de capítulo e de índice.
- `_data/guia.yml` — textos de interface e nomes das partes (PT e EN).
- `_includes/guia/credit.html` — crédito de autoria do rodapé (o mesmo texto vai para o JSON-LD em `_includes/seo.html`).
- `assets/js/guia.js` e `assets/css/guia.css` — widgets interativos e estilos. Sem dependências externas.

### Front matter de um capítulo

```yaml
---
title: "Título do capítulo"
description: "Uma ou duas frases: vira subtítulo, card do índice e meta description."
lang: pt-BR            # ou en
ref: meu-capitulo      # igual nas duas línguas
order: 13
part: 2
permalink: /ia/meu-capitulo/     # em inglês: /ai/my-chapter/
interactive: "rótulo curto do experimento"   # opcional, aparece no índice
piece: "peça que a Lia ganha neste capítulo" # opcional, aparece no índice
last_modified: 2026-11-13
# Mídia (tudo opcional — só aparece se preenchido):
video: "ID_DO_YOUTUBE"           # só o ID, não a URL
audio: "/assets/audio/cap-13.mp3" # ex.: resumo em áudio do NotebookLM
slides: "https://..."
---
```

### Blocos disponíveis no Markdown

| O que | Como escrever |
|---|---|
| Widget interativo | `<div data-widget="nome"></div>` — nomes: `quiz-ia`, `pixels`, `treino`, `tokens`, `proxima`, `vies`, `privacidade`, `energia`, `fluxo`, `camadas`, `loop`, `contexto`, `busca`, `dado`, `git`, `pedido`, `acesso` |
| Jornada da Lia | `<div class="g-lia" markdown="1">` (cena, no topo, termina em pergunta), `<div class="g-lia g-lia-missao" markdown="1">` (provocação, antes do experimento) e `<div class="g-lia g-lia-diario" markdown="1">` (diário de bordo: perguntas que ela levou, um caminho para responder, peça nova no projeto) |
| Abas a partir do texto | `<div data-widget="tabs" data-title="..." markdown="1">` com um `#### Título` por aba (`data-layout="tree"` para o formato de árvore de arquivos) |
| Checklist com memória | `<div data-widget="checklist" data-key="chave-unica" data-title="..." markdown="1">` com itens `- [ ] ...` |
| Caixa de destaque | `<div class="g-box g-key" markdown="1">` (`g-key` = para guardar, `g-warn` = atenção, `g-mine` = como eu faço) |
| Notas para aula | `<details class="g-aula" markdown="1"><summary>Para levar para a aula</summary> ... </details>` |
| Referências do capítulo | `<div class="g-fontes" markdown="1">` com `#### Referências` e uma lista em ABNT (em inglês, `#### References` em APA); fica no fim do arquivo |

**Impressão:** qualquer capítulo (e a versão livro) pode ser impresso direto do navegador. Os widgets feitos em JavaScript viram uma nota com o endereço do capítulo; abas e checklists imprimem o conteúdo inteiro; as notas de aula abrem sozinhas.

**Citações:** todo número ou fato externo tem link no texto e entrada formal em "Referências" (ABNT em português, APA em inglês), incluindo os posts do próprio blog citados no capítulo. Antes de publicar um dado novo, abra a fonte e confira o valor.

**Tom:** socrático e atemporal. Títulos de seção em forma de pergunta, provocações no meio do texto e um caminho para responder no lugar de respostas prontas. No texto não entram nomes de produtos, datas nem números muito específicos: o corpo fala em ordens de grandeza e cita por autor e ano; o valor exato e o nome do caso ficam nas "Notas" do bloco de referências.

**Linguagem:** o texto evita o masculino genérico. Prefira "estudante", "a pessoa", "a equipe", "quem usa". A personagem Lia é mulher e é narrada em terceira pessoa.

Os textos dos widgets ficam em `assets/js/guia.js`, em PT e EN lado a lado; o idioma é escolhido pelo `lang` da página. Para criar um widget novo, adicione uma função em `W` nesse arquivo.

## Como publicar novos posts no Blog

Consulte o documento completo: [**COMO-PUBLICAR.md**](file:///home/efremfilho/personal/efrem.io/COMO-PUBLICAR.md).

Em resumo:
1. Salve o post em `_posts/pt/YYYY-MM-DD-slug.md` e a versão traduzida em `_posts/en/YYYY-MM-DD-slug.md` com o **mesmo slug**.
2. Faça `git add _posts/ && git commit -m "..." && git push origin main`.
3. O GitHub Pages publica automaticamente.

## Como adicionar um redirect

Crie `redirects/<nome>.md` com:

```yaml
---
permalink: "/meu-atalho/"
redirect_to: "https://destino.com/"
---
```

Commit + push: o GitHub Pages publica `efrem.io/meu-atalho` redirecionando para o destino.

## Rodando localmente

```sh
bundle install
bundle exec jekyll serve
# http://localhost:4000
```
