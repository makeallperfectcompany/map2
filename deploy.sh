#!/usr/bin/env bash
set -euo pipefail

# Fast build + deploy to Vercel production
# Usage: ./deploy.sh [commit-message]

cd "$(dirname "$0")"

MSG="${1:-deploy: $(date +%H:%M)}"

echo "→ Проверка TypeScript..."
npm run build 2>/dev/null || npx next build

echo "→ Коммит..."
git add -A
git commit -m "$MSG" 2>/dev/null || echo "(nothing to commit)"
git push

echo "→ Деплой на Vercel..."
vc --prod --yes --token "$VERCEL_TOKEN"
