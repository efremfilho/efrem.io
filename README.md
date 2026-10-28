# efrem.io

Site pessoal, blog bilíngue (PT/EN) e encurtador de links, publicado com [Jekyll](https://jekyllrb.com/) no GitHub Pages.
Migrado do Carrd em junho/2026.

## Estrutura

- `index.html` — página principal (perfil, links, seção "Now" e posts recentes do blog).
- `blog/index.html` — central do blog (`/blog/`) com busca instantânea e filtros por idioma.
- `_posts/pt/` — posts em português (`/blog/pt/<slug>/`).
- `_posts/en/` — posts em inglês (`/blog/en/<slug>/`).
- `_layouts/` — layouts do site (`default.html` e `post.html` com alternador de idioma).
- `_includes/` — templates reutilizáveis (formatação de datas PT/EN).
- `assets/` — imagens e CSS (`assets/css/style.css`).
- `redirects/` — um arquivo por atalho, usando o plugin [`jekyll-redirect-from`](https://github.com/jekyll/jekyll-redirect-from) (suportado nativamente pelo GitHub Pages). Inclui `/posts` -> `/blog/`.
- `404.html` — página para atalhos inexistentes.
- `CNAME` — domínio customizado (`efrem.io`).
- `COMO-PUBLICAR.md` — guia passo a passo para criar e publicar novos posts com prompt pronto para o Claude.

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
