#!/bin/bash
# Auto-deploy to Vercel after git push
# Token stored in ~/.vercel-deploy-token (gitignored, not in repo)

TOKEN_FILE="$HOME/.vercel-deploy-token"
if [ ! -f "$TOKEN_FILE" ]; then
  echo "❌ No deploy token found at $TOKEN_FILE"
  exit 1
fi

VERCEL_TOKEN=$(cat "$TOKEN_FILE" | tr -d '\n')
PROJECT="prj_TrwIhihVaANP1khFCApQLqwWXgfg"
REPO_ID="1243239722"
REPO="makeallperfectcompany/map2"

echo "🚀 Triggering Vercel deploy..."

RESP=$(curl -s -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"map2\",\"project\":\"$PROJECT\",\"target\":\"production\",\"gitSource\":{\"type\":\"github\",\"ref\":\"master\",\"repoId\":$REPO_ID,\"repo\":\"$REPO\"}}")

URL=$(echo "$RESP" | python3 -c "import sys,json; print(json.load(sys.stdin).get('url','unknown'))" 2>/dev/null)

if [ "$URL" = "unknown" ] || [ -z "$URL" ]; then
  echo "❌ Deploy failed:"
  echo "$RESP" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('error',{}).get('message','unknown error'))" 2>/dev/null
  exit 1
fi

echo "✅ Deploy started: https://$URL"
echo "📊 https://map2-ten.vercel.app (обновится через ~60 сек)"
