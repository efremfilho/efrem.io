#!/usr/bin/env python3
"""Gera o bloco de referências no fim de cada capítulo do guia "IA sem mágica".

ABNT em português ("Referências"), APA em inglês ("References"). O script apaga o bloco
anterior e escreve de novo, então pode rodar quantas vezes for preciso.

    python3 _tools/guia/refs.py          regenera os blocos
    python3 _tools/guia/refs.py --check  só confere; sai com erro se algum arquivo mudaria

De onde vêm as entradas:
  - referencias.json (nesta pasta): as fontes externas, a lista de fontes de cada capítulo
    (pelo campo `ref` do front matter) e as notas que vão depois da lista;
  - posts do próprio blog: entram sozinhos quando o capítulo tem um link /blog/pt|en/<slug>/.

Antes de acrescentar uma fonte, abra a fonte e confira o que o texto afirma sobre ela.
"""
import glob
import io
import json
import os
import re
import sys
import unicodedata

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(AQUI))
DADOS = json.load(io.open(os.path.join(AQUI, 'referencias.json'), encoding='utf-8'))

MES_PT = ['', 'jan.', 'fev.', 'mar.', 'abr.', 'maio', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.']
MES_EN = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


def post_ref(slug, lang):
    """Referência de um post do blog, montada a partir do front matter do post."""
    achados = glob.glob(os.path.join(RAIZ, '_posts', lang, '*-%s.md' % slug))
    if not achados:
        return None
    texto = io.open(achados[0], encoding='utf-8').read()
    titulo = re.search(r'^title:\s*"(.*)"\s*$', texto, re.M).group(1).replace('\\"', '"')
    ano, mes, dia = [int(x) for x in re.search(r'^date:\s*(\d{4})-(\d{2})-(\d{2})', texto, re.M).groups()]
    url = '<https://efrem.io/blog/%s/%s/>' % (lang, slug)
    if lang == 'pt':
        titulo = titulo.rstrip('.?!') + (titulo[-1] if titulo[-1] in '?!' else '')
        return ('MARANHÃO FILHO, Éfrem. **%s**. [*S. l.*]: efrem.io, %d %s %d. Publicado originalmente no LinkedIn. '
                'Disponível em: %s. Acesso em: %s.' % (titulo, dia, MES_PT[mes], ano, url, DADOS['acesso_posts_pt']))
    return 'Maranhão Filho, É. (%d, %s %d). *%s*. efrem.io. %s' % (ano, MES_EN[mes], dia, titulo, url)


def ordem(entrada):
    """Chave de ordenação alfabética, sem marcação e sem acento."""
    limpo = re.sub(r'[*\[\]_]', '', entrada)
    return unicodedata.normalize('NFKD', limpo).encode('ascii', 'ignore').decode().lower()


def sem_bloco(texto):
    inicio = texto.find('<div class="g-fontes"')
    if inicio < 0:
        return texto.rstrip('\n') + '\n'
    fim = texto.index('</div>', inicio) + len('</div>')
    return (texto[:inicio] + texto[fim:]).rstrip('\n') + '\n'


def bloco(ref, lang, corpo):
    itens = [DADOS['fontes'][chave][lang] for chave in DADOS['capitulos'].get(ref, [])]
    vistos = set()
    for slug in re.findall(r'\]\(/blog/(?:pt|en)/([a-z0-9-]+)/\)', corpo):
        if slug in vistos:
            continue
        vistos.add(slug)
        entrada = post_ref(slug, lang)
        if entrada:
            itens.append(entrada)
    if not itens:
        return ''
    itens.sort(key=ordem)
    titulo = 'Referências' if lang == 'pt' else 'References'
    saida = '<div class="g-fontes" markdown="1">\n\n#### ' + titulo + '\n\n' + '\n'.join('- ' + i for i in itens) + '\n'
    nota = DADOS['notas'][lang].get(ref)
    if nota:
        saida += '\n' + ('*Notas:* ' if lang == 'pt' else '*Notes:* ') + nota + '\n'
    return saida + '\n</div>\n'


def main():
    conferir = '--check' in sys.argv[1:]
    mudariam = []
    for lang in ('pt', 'en'):
        arquivos = sorted(glob.glob(os.path.join(RAIZ, '_guia', lang, '*.md')))
        arquivos.append(os.path.join(RAIZ, 'ia' if lang == 'pt' else 'ai', 'index.md'))
        for caminho in arquivos:
            atual = io.open(caminho, encoding='utf-8').read()
            achou = re.search(r'^ref:\s*(\S+)', atual, re.M)
            ref = achou.group(1) if achou else '_index'
            novo = sem_bloco(atual)
            referencias = bloco(ref, lang, novo)
            if referencias:
                novo = novo + '\n' + referencias
            if novo != atual:
                mudariam.append(os.path.relpath(caminho, RAIZ))
                if not conferir:
                    io.open(caminho, 'w', encoding='utf-8').write(novo)
    if conferir:
        if mudariam:
            print('referências desatualizadas em:')
            for caminho in mudariam:
                print('  ' + caminho)
            sys.exit(1)
        print('referências em dia')
    else:
        print('arquivos atualizados: %d' % len(mudariam))
        for caminho in mudariam:
            print('  ' + caminho)


if __name__ == '__main__':
    main()
