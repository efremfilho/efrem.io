# Instruções para agentes

Este arquivo orienta qualquer agente de IA que trabalhe neste repositório. Para a estrutura detalhada, leia o [README](README.md); para publicar posts do blog, o [COMO-PUBLICAR](COMO-PUBLICAR.md).

## O que é este repositório

O site pessoal de Éfrem Maranhão Filho, em [efrem.io](https://efrem.io): página principal, blog bilíngue (PT/EN), encurtador de links e o guia "IA sem mágica" (`/ia/` e `/ai/`). É Jekyll 3.10 publicado pelo GitHub Pages a partir da `main`. **O repositório é público.**

## Antes de começar

- Rode `git pull`: posts novos chegam pelo remoto.
- `temp/` é material de trabalho local e privado (transcrições de aula, rascunhos, PDFs). Pode ser lido para dar contexto, se existir. **Nunca vai para o repositório**: não use `git add -A` nem `git add .`, e nunca force a inclusão dessa pasta.
- Nada de segredo, chave de acesso ou dado pessoal em arquivo versionado.

## Onde fica cada coisa

| Caminho | O que é |
|---|---|
| `_guia/pt/NN-slug.md`, `_guia/en/NN-slug.md` | Capítulos do guia. O par PT/EN é ligado pelo campo `ref`. |
| `ia/index.md`, `ai/index.md` | Página de abertura do guia. |
| `ia/livro.md`, `ai/book.md` | Versão livro, montada sozinha a partir dos capítulos. |
| `assets/js/guia.js`, `assets/css/guia.css` | Experimentos interativos (textos em PT e EN lado a lado) e estilos. |
| `_tools/guia/` | Ferramentas: referências, conferência, build, testes e PDF. O Jekyll ignora esta pasta. |
| `_posts/pt/`, `_posts/en/` | Posts do blog, com o mesmo nome de arquivo nos dois idiomas. |
| `redirects/` | Um arquivo por atalho do encurtador. |

## Comandos

```bash
python3 _tools/guia/refs.py             # regenera as referências de todos os capítulos
python3 _tools/guia/refs.py --check     # só confere se estão em dia
_tools/guia/build.sh                    # gera o site com a imagem do GitHub Pages (precisa de Docker)
python3 _tools/guia/conferir.py <_site> # paridade PT/EN, formato do diário e links internos
node _tools/guia/testar-widgets.js <_site> ia ai   # exercita os experimentos (npm install em _tools/guia)
node _tools/guia/pdf.js <url> <saida.pdf>          # PDF da versão livro (precisa do navegador do Playwright)
```

`<_site>` é a pasta que o `build.sh` informa ao terminar.

## Como trabalhar

- **Português primeiro, inglês como espelho.** Toda mudança em `_guia/pt/` vai com a mudança equivalente em `_guia/en/` no mesmo PR.
- **Commit só quando pedirem.** Nunca direto na `main`: crie uma branch, abra um PR e faça merge com rebase.
- **Mensagens de commit** em português, no padrão Conventional Commits (`feat(guia): …`, `fix(home): …`, `chore: …`).
- **Não edite o bloco de referências à mão.** Ele é gerado: edite `_tools/guia/referencias.json` e rode `refs.py`.
- **Pronto é quando** `refs.py --check`, `conferir.py` e `testar-widgets.js` passam e o site foi gerado sem erro.

## Linha editorial do guia

**Para quem é.** Para quem quer mudar alguma coisa construindo com tecnologia: pessoas empreendedoras, de produto, builders. O fio é autonomia, por dois letramentos: IA generativa e pensamento computacional.

**Voz.** Primeira pessoa do autor: direta, meio irônica, às vezes irritada, sempre explicando. Casos dele no lugar de regra. Ele aceita aparecer errando.

**Só entra em primeira pessoa o que o autor disse ou escreveu.** Não invente rotina, hábito, número ou opinião em nome dele. Na dúvida, pergunte ou deixe de fora.

**Socrático e atemporal.** Títulos de seção em forma de pergunta; provocação no lugar de gabarito. No corpo do texto não entram nomes de produto, versões, preços nem datas: o nome e o número exatos ficam nas referências e nas notas.

**Convenção.** "IA", sem adjetivo, é IA generativa. Quando for outra coisa, o texto avisa.

**Linguagem.** Sem masculino genérico: "estudante", "a pessoa", "o time", "quem usa". Nada de neolinguagem.

**Jornada da Lia.** Contada como um caso, com prazo, conflito e mais de um caminho defensável. Lia, Bia e Caio constroem: discutem a estratégia, dividem o trabalho, cada pessoa implementa com os seus agentes e uma revisa o que a outra fez. Iara coordena a parceria pela secretaria de educação; Aída é da área de tecnologia. As cenas mostram pedidos a agentes e a leitura do que voltou. Cada capítulo tem cena (termina em pergunta), provocação e diário de bordo: o que ficou em disputa, os caminhos na mesa (um por personagem, com o custo) e o que o time fez, por enquanto. Personagem nova leva nome que brinque com "IA" ou "AI".

**O alerta.** Quando o autor opina fora da área dele (arte, design, direito, estatística, educação), o texto diz isso com todas as letras, na voz dele, e o conceito é conferido em fonte antes de publicar. Tom humano, sim; erro de fato, dado ou conceito, não.

**Citações.** Todo número ou fato externo tem link no texto e entrada formal nas referências (ABNT em português, APA em inglês). Abra a fonte e releia o trecho antes de citar. Quem tem interesse no assunto é apresentado como parte interessada.

**Casos de outras pessoas.** O mérito fica com a pessoa; gastar mais ou errar é parte de aprender. Nomes de pessoas, clientes e empresas ficam de fora.

**Material antigo.** Aulas e workshops antigos servem de fonte para exemplos e para o tom. Onde contrariam as posições abaixo, valem as posições.

## Posições do autor que o texto deve refletir

- O diferencial é autonomia, não velocidade: fazer e não travar.
- Os modelos aguentam pedidos grandes. O trabalho é organizar a solução, e saber pedir e ler o que voltou.
- Vontade de fazer pesa mais do que acertar de primeira.
- Ele não programa, mas faz desenvolvimento: diz o que quer resolver, e agentes implementam.
- Teste conforme o contexto: às vezes com dado inventado, às vezes em uso real com volta atrás.
- Vale entender o essencial de tecnologia: função, variável, condicional, loop, API, modularização e camadas.
- Começa pelo modelo mais capaz e desce quando a tarefa está provada. Menor não quer dizer mais barato.
- Prefere ser muito bom em uma ferramenta. O conhecimento mora no repositório, para poder trocar.
- Desenhar fluxo continua valendo, como jeito de pensar; ferramentas de pouco código perderam valor.
- Cada vez menos aprova passo a passo; continua respondendo pelo resultado.
- Personas sintéticas complementam a conversa com gente de verdade; não substituem.
- Não usa "vibe coding" como termo dele: prefere "construir lendo".
- Não propor método de avaliação para as disciplinas dele.
