# Guia de Publicação no Blog (efrem.io)

Este documento explica como funciona a arquitetura do blog no [efrem.io](https://efrem.io) e o passo a passo para transformar futuras publicações do LinkedIn em posts no blog, mantendo as versões em Português e Inglês sincronizadas.

---

## 1. Como Funciona a Arquitetura

O site utiliza **Jekyll 3.10** servido pelo **GitHub Pages**. A estrutura foi desenhada para ser simples, rápida e 100% nativa (sem necessidade de plugins externos ou configurações complexas de build):

```
efrem.io/
├── _posts/
│   ├── pt/                    # Posts em Português (45 posts)
│   │   └── YYYY-MM-DD-slug.md
│   └── en/                    # Posts em Inglês (45 posts)
│       └── YYYY-MM-DD-slug.md
├── _layouts/
│   ├── default.html           # Layout base (SEO, fontes, tema dark/light, RSS)
│   └── post.html              # Layout de leitura com alternador de idioma e navegação
├── _includes/
│   └── format_date.html       # Formatador de datas em PT ("27 de outubro de 2026") e EN ("October 27, 2026")
├── assets/
│   └── css/
│       └── style.css          # Estilo visual moderno, responsivo e com suporte a dark/light mode
├── blog/
│   └── index.html             # Listagem com busca instantânea e filtro por idioma
├── redirects/                 # Seus atalhos e encurtador de links (inclui /posts -> /blog)
├── index.html                 # Página inicial com chip do Blog e seção de Posts recentes
└── _config.yml                # Configurações do Jekyll e permalinks (/blog/:categories/:title/)
```

### URLs e Permalinks
- **Blog central:** [`https://efrem.io/blog/`](https://efrem.io/blog/) (com redirecionamento de `/posts/` para `/blog/`)
- **Post em Português:** `https://efrem.io/blog/pt/<slug>/`
- **Post em Inglês:** `https://efrem.io/blog/en/<slug>/`
- **Feed RSS:** `https://efrem.io/feed.xml`

### Como funciona a alternância de idioma (Switcher 🇧🇷 / 🇺🇸)
A conexão entre a versão em português e em inglês é **automática**:
O Jekyll identifica que dois posts são irmãos quando possuem o **mesmo slug no nome do arquivo** (ex: `2026-10-27-product-and-ux-have-never-mattered-more.md`).
- Se você estiver lendo o post em português, o template exibe um banner no topo convidando a ler em inglês.
- Se estiver lendo em inglês, convida a ler em português.
- Se o post tiver sido escrito em apenas um idioma, o template identifica e não exibe link quebrado.

---

## 2. Passo a Passo: Publicando um Novo Post

### Passo 1: Nomeie os arquivos com o mesmo slug
Escolha a data do post e um slug em inglês curto e descritivo:
- **Exemplo:** `2026-11-05-my-new-ai-post.md`

Salve as duas versões com **exatamente o mesmo nome de arquivo** nas duas pastas:
1. `_posts/pt/2026-11-05-my-new-ai-post.md`
2. `_posts/en/2026-11-05-my-new-ai-post.md`

---

### Passo 2: Estrutura do Frontmatter

#### Arquivo em Português (`_posts/pt/YYYY-MM-DD-slug.md`):
```yaml
---
layout: post
title: "Seu título em português aqui"
date: 2026-11-05
lang: pt-BR
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:..."
english_version: "../en/YYYY-MM-DD-slug.md"
---

Texto do post em português...

---

*Publicado originalmente no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:...) em 5 de novembro de 2026. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*
```

#### Arquivo em Inglês (`_posts/en/YYYY-MM-DD-slug.md`):
```yaml
---
layout: post
title: "Your post title in English here"
date: 2026-11-05
lang: en
translated_from: pt-BR
translated_with_ai: true
original_url: "https://www.linkedin.com/feed/update/urn:li:activity:..."
portuguese_version: "../pt/YYYY-MM-DD-slug.md"
---

English translation of the post...

---

*Originally written in Portuguese and published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:...) on November 5, 2026. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*
```

---

### Passo 3: Publicando no site (Git Commit & Push)

No seu terminal:
```bash
git add _posts/
git commit -m "feat(blog): add post sobre <tema do post>"
git push origin main
```

Pronto! Em cerca de 30 a 60 segundos, o GitHub Pages compila o Jekyll e o post estará disponível em `https://efrem.io/blog/` e na página inicial.

---

## 3. Prompt Pronto para Gerar Novos Posts com o Claude

Quando você fizer um novo post no LinkedIn, copie o prompt abaixo e cole no Claude junto com o texto e o link do seu post:

````markdown
Tenho um post novo que publiquei no LinkedIn e preciso que você gere os dois arquivos Markdown para o meu blog (um em português e outro traduzido para inglês).

Siga rigorosamente as regras abaixo:

1. Gere um slug limpo em inglês no formato: YYYY-MM-DD-slug-em-ingles.md (use a data da publicação).
2. O nome do arquivo DEVE ser rigorosamente idêntico para a versão PT e EN.
3. Arquivo em Português:
   - Caminho: _posts/pt/YYYY-MM-DD-slug.md
   - Frontmatter:
     ---
     layout: post
     title: "Título em português"
     date: YYYY-MM-DD
     lang: pt-BR
     original_url: "[LINK_DO_LINKEDIN]"
     english_version: "../en/YYYY-MM-DD-slug.md"
     ---
   - Preserve o texto original em markdown com subtítulos e listas onde fizer sentido.
   - Adicione no rodapé:
     ---
     *Publicado originalmente no [LinkedIn]([LINK_DO_LINKEDIN]) em [Data por extenso]. A versão em inglês foi traduzida com ajuda de IA (Claude) e revisada por mim.*

4. Arquivo em Inglês:
   - Caminho: _posts/en/YYYY-MM-DD-slug.md
   - Frontmatter:
     ---
     layout: post
     title: "Title in English"
     date: YYYY-MM-DD
     lang: en
     translated_from: pt-BR
     translated_with_ai: true
     original_url: "[LINK_DO_LINKEDIN]"
     portuguese_version: "../pt/YYYY-MM-DD-slug.md"
     ---
   - Tradução natural em tom conversacional na primeira pessoa, fiel ao estilo do autor.
   - Adicione no rodapé:
     ---
     *Originally written in Portuguese and published on [LinkedIn]([LINK_DO_LINKEDIN]) on [Date in English]. I translated it into English with the help of AI (Claude): it let me bring my LinkedIn posts to people who don't read Portuguese without rewriting each one from scratch. I reviewed the translation to keep my original meaning and tone.*

Aqui estão os dados do post:
- URL do post no LinkedIn: [COLE O LINK AQUI]
- Data: [COLE A DATA AQUI - ex: 2026-11-05]
- Texto do post:
[COLE O TEXTO DO POST AQUI]
````

---

## 4. Recursos Especiais do Blog

1. **Filtro e Busca Instantânea:** A página `/blog/` possui abas `Todos`, `🇧🇷 Português` e `🇺🇸 English`, além de um campo de busca que filtra por palavras no título ou corpo sem recarregar a página.
2. **Links Diretos por Idioma:** Se você enviar o link `efrem.io/blog/#pt`, o filtro abre diretamente os posts em português; com `efrem.io/blog/#en`, abre em inglês.
3. **Feed RSS/Atom:** Disponível em `https://efrem.io/feed.xml`, permitindo que leitores assinem seus textos em leitores de RSS ou agregadores.
4. **Navegação Inteligente:** Em cada post, a paginação "Anterior / Próximo" no rodapé navega automaticamente apenas entre posts do mesmo idioma.
5. **Redirecionamento Rápido:** Se você quiser divulgar um atalho curto para um post específico (ex: `efrem.io/ux`), basta criar `redirects/ux.md` apontando para `/blog/pt/product-and-ux-have-never-mattered-more/`.
