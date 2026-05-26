#!/usr/bin/env bash
set -euo pipefail

# Fast build + deploy to Vercel production
# Usage: ./deploy.sh [commit-message]

cd "$(dirname "$0")"

MSG="${1:-deploy: $(date +%H:%M)}"

# Get token from openclaw config
VERCEL_TOKEN=$(python3 -c "
import json5
with open('/home/openclaw/.openclaw/openclaw.json') as f:
    data = json5.load(f)
print(data['plugins']['entries']['deploy']['config']['token'])" 2>/dev/null)

export VERCEL_TOKEN

echo "→ Проверка TypeScript..."
npm run build 2>/dev/null || npx next build

echo "→ Коммит..."
git add -A
git commit -m "$MSG" 2>/dev/null || echo "(nothing to commit)"
git push

echo "→ Деплой на Vercel..."
vc --prod --yes --token "$VERCEL_TOKEN"
