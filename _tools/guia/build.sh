#!/bin/bash
# Gera o site com a mesma imagem que o GitHub Pages usa (precisa de Docker).
# Uso: _tools/guia/build.sh [pasta-de-trabalho]   (padrão: $TMPDIR/efrem-io-build)
# O site fica em <pasta-de-trabalho>/src/_site. A pasta temp/ nunca é copiada.
set -e
RAIZ="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${1:-${TMPDIR:-/tmp}/efrem-io-build}"
IMG=ghcr.io/actions/jekyll-build-pages:v1.0.13
mkdir -p "$OUT"
# a imagem grava como root; apagar pela própria imagem evita erro de permissão
docker run --rm --network none --entrypoint rm -v "$OUT":/s "$IMG" -rf /s/src
mkdir -p "$OUT/src"
tar -C "$RAIZ" --exclude=.git --exclude=./_site --exclude=./vendor --exclude=./temp --exclude=node_modules -cf - . | tar -xf - -C "$OUT/src"
printf '\nbaseurl: ""\n' >> "$OUT/src/_config.yml"
chmod -R a+rwX "$OUT/src"
docker run --rm --network none \
	-e PAGES_REPO_NWO=user/site -e GITHUB_WORKSPACE=/github/workspace \
	-e INPUT_SOURCE=. -e INPUT_DESTINATION=./_site -e INPUT_FUTURE=false -e INPUT_VERBOSE=false -e INPUT_TOKEN=none \
	-e JEKYLL_ENV=production -v "$OUT/src":/github/workspace "$IMG" 2>&1 | tail -20
echo "site gerado em: $OUT/src/_site"
