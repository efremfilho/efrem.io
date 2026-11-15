#!/usr/bin/env python3
"""Confere o guia "IA sem mágica" antes de publicar.

    python3 _tools/guia/conferir.py                 confere os arquivos dos capítulos
    python3 _tools/guia/conferir.py <pasta _site>   confere também os links internos do site gerado

O que é conferido:
  - paridade entre português e inglês: mesmas seções, mesmos experimentos, mesmos blocos da
    jornada da Lia, mesmo `ref`, `order`, `part` e `last_modified`;
  - formato do diário de bordo (três rótulos, três caminhos na mesa);
  - sobras: rótulos antigos, link para página em português dentro do inglês, frase em português
    no texto em inglês;
  - fontes do referencias.json que nenhum capítulo usa;
  - com a pasta do site: links internos quebrados nas páginas do guia.
"""
import glob
import io
import json
import os
import re
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(os.path.dirname(AQUI))

ROTULOS = {
    'pt': ['**Em disputa:**', '**Caminhos na mesa:**', '**O que o time fez, por enquanto:**'],
    'en': ['**In dispute:**', '**Paths on the table:**', '**What the team did, for now:**'],
}
ROTULOS_ANTIGOS = {
    'pt': ['Perguntas que ela levou', 'Um caminho para responder', 'Peça nova no projeto'],
    'en': ['Questions she took with her', 'A path to an answer', 'New piece in the project', 'A way to find the answer', 'New project piece'],
}
problemas = []


def problema(texto):
    problemas.append(texto)
    print('  PROBLEMA: ' + texto)


def ler(caminho):
    return io.open(caminho, encoding='utf-8').read()


def corpo(texto):
    return texto.split('<div class="g-fontes"')[0]


def medidas(texto):
    c = corpo(texto)
    return {
        'seções (##)': len(re.findall(r'^## ', c, re.M)),
        'subtítulos (####)': len(re.findall(r'^#### ', c, re.M)),
        'experimentos': re.findall(r'data-widget="([a-z-]+)"', c),
        'blocos da Lia': len(re.findall(r'<div class="g-lia', c)),
        'caminhos na mesa': len(re.findall(r'^  - \*[^*]+:\*', c, re.M)),
        'links internos': len(re.findall(r'\]\(/', c)),
    }


def campo(texto, nome):
    achou = re.search(r'^%s: (.*)$' % nome, texto, re.M)
    return achou.group(1) if achou else None


def conferir_capitulos():
    pt = sorted(glob.glob(os.path.join(RAIZ, '_guia', 'pt', '*.md')))
    en = sorted(glob.glob(os.path.join(RAIZ, '_guia', 'en', '*.md')))
    if len(pt) != len(en):
        problema('número de capítulos difere: %d em pt, %d em en' % (len(pt), len(en)))
    for a, b in zip(pt, en):
        n = os.path.basename(a)[:2]
        if os.path.basename(b)[:2] != n:
            problema('%s: o arquivo em inglês de mesma posição é %s' % (os.path.basename(a), os.path.basename(b)))
        textos = {'pt': ler(a), 'en': ler(b)}
        for lang, texto in textos.items():
            for rotulo in ROTULOS_ANTIGOS[lang]:
                if rotulo in texto:
                    problema('cap. %s (%s): rótulo antigo "%s"' % (n, lang, rotulo))
            for rotulo in ROTULOS[lang]:
                if texto.count(rotulo) != 1:
                    problema('cap. %s (%s): rótulo "%s" aparece %d vez(es)' % (n, lang, rotulo, texto.count(rotulo)))
            if medidas(texto)['caminhos na mesa'] != 3:
                problema('cap. %s (%s): %d caminhos na mesa (esperado: 3)' % (n, lang, medidas(texto)['caminhos na mesa']))
        m_pt, m_en = medidas(textos['pt']), medidas(textos['en'])
        for nome in m_pt:
            if m_pt[nome] != m_en[nome]:
                problema('cap. %s: %s difere (pt %s, en %s)' % (n, nome, m_pt[nome], m_en[nome]))
        for nome in ('ref', 'order', 'part', 'last_modified'):
            if campo(textos['pt'], nome) != campo(textos['en'], nome):
                problema('cap. %s: front matter `%s` difere (pt %s, en %s)' % (n, nome, campo(textos['pt'], nome), campo(textos['en'], nome)))
        if re.search(r'/blog/pt/|\]\(/ia/', textos['en']):
            problema('cap. %s (en): link para página em português' % n)
        if re.search(r'\b(não|você|também|então|capítulo)\b', corpo(textos['en'])):
            problema('cap. %s (en): sobrou texto em português' % n)
    print('capítulos conferidos: %d pares' % min(len(pt), len(en)))


def conferir_base():
    dados = json.load(io.open(os.path.join(AQUI, 'referencias.json'), encoding='utf-8'))
    usadas = {chave for chaves in dados['capitulos'].values() for chave in chaves}
    for chave in sorted(usadas - set(dados['fontes'])):
        problema('referencias.json: o capítulo pede a fonte "%s", que não existe' % chave)
    sobrando = sorted(set(dados['fontes']) - usadas)
    if sobrando:
        print('  aviso: fontes sem uso no referencias.json: ' + ', '.join(sobrando))


def conferir_site(site):
    paginas = glob.glob(os.path.join(site, 'ia', '**', 'index.html'), recursive=True)
    paginas += glob.glob(os.path.join(site, 'ai', '**', 'index.html'), recursive=True)
    quebrados = set()
    for pagina in paginas:
        for destino in re.findall(r'href="(/[^"#?]*)', ler(pagina)):
            alvo = site + destino
            if not (os.path.isfile(alvo) or os.path.isfile(os.path.join(alvo, 'index.html'))):
                quebrados.add(destino)
    print('páginas do guia no site: %d | links internos quebrados: %s' % (len(paginas), ', '.join(sorted(quebrados)) or 'nenhum'))
    for destino in sorted(quebrados):
        problemas.append('link quebrado: ' + destino)
    for nome in ('AGENTS.md', 'CLAUDE.md', 'Gemfile', 'temp'):
        if os.path.exists(os.path.join(site, nome)):
            problema('o site gerado contém %s, que não deveria ser publicado' % nome)


def main():
    conferir_capitulos()
    conferir_base()
    if len(sys.argv) > 1:
        conferir_site(sys.argv[1].rstrip('/'))
    print('TUDO OK' if not problemas else 'HÁ %d PROBLEMA(S)' % len(problemas))
    sys.exit(1 if problemas else 0)


if __name__ == '__main__':
    main()
