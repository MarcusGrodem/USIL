#!/usr/bin/env bash
# Africa & Asia magazine — Claude Opus editorial draft
# Build the PDF from source/magazine.html using headless Google Chrome.
#
# USAGE:   bash drafts/claude-opus-magazine/source/build.sh
# OUTPUT:  drafts/claude-opus-magazine/Africa_Asia_Magazine_Claude_Draft.pdf

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"               # .../source
ROOT="$(cd "$HERE/.." && pwd)"                      # .../claude-opus-magazine
HTML="$HERE/magazine.html"
PDF="$ROOT/Africa_Asia_Magazine_Claude_Draft.pdf"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [[ ! -x "$CHROME" ]]; then
  CHROME="$(command -v google-chrome || command -v chromium || true)"
fi
if [[ -z "${CHROME:-}" ]]; then
  echo "ERROR: Google Chrome / Chromium not found." >&2
  exit 1
fi

# --no-pdf-header-footer and --disable-pdf-tagging suppress browser URL/date chrome.
# A4 and margins are set in CSS via @page.
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --disable-pdf-tagging \
  --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  --run-all-compositor-stages-before-draw \
  --print-to-pdf="$PDF" \
  --print-to-pdf-no-header \
  "file://$HTML"

echo "Wrote: $PDF"
ls -la "$PDF"
