#!/usr/bin/env bash
set -euo pipefail
# Borra todas las issues de un repositorio de GitHub.

# Borra TODAS las issues (abiertas y cerradas) del repo actual
gh issue list -s all -L 1000 --json number --jq '.[].number' \
  | xargs -n1 -I{} gh issue delete {} --yes
