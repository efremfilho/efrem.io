# efrem.io

Site pessoal + encurtador de links, publicado com [Jekyll](https://jekyllrb.com/) no GitHub Pages.
Migrado do Carrd em junho/2026.

## Estrutura

- `index.html` — página principal (HTML/CSS puro, sem build).
- `404.html` — página para atalhos inexistentes.
- `redirects/` — um arquivo por atalho, usando o plugin [`jekyll-redirect-from`](https://github.com/jekyll/jekyll-redirect-from) (suportado nativamente pelo GitHub Pages).
- `assets/` — imagens (favicon, foto, imagem de compartilhamento).
- `CNAME` — domínio customizado (`efrem.io`).

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
