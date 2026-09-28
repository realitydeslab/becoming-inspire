#!/usr/bin/env bash
# Rebuild data and serve the gallery at http://localhost:8934
# (YouTube embeds need http://, they fail from file://)
set -euo pipefail
cd "$(dirname "$0")"
python3 tools/build_data.py
echo "Open http://localhost:8934"
exec python3 -m http.server 8934 --bind 127.0.0.1
