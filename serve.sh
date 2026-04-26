#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"
cd "$(dirname "$0")"

echo "Serving UK Facts Kiosk at http://localhost:${PORT} (live-reload on)"
exec npx --yes live-server --port="${PORT}" --no-browser --wait=150
