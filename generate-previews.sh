#!/usr/bin/env bash
set -euo pipefail

API_KEY="${OPENROUTER_API_KEY:-}"
OUTPUT_DIR="public/images/previews"
mkdir -p "$OUTPUT_DIR"

declare -A PROMPTS=(
  ["case-01-odezhda"]='Premium minimalist visual. A single elegant draped premium fabric in navy blue, warm amber light accent from the right side. Dark sophisticated background. Clean product photography aesthetic. Cinematic lighting, shallow depth of field. No text or typography. High-end fashion e-commerce vibe.'
  ["case-02-kofe"]='Premium minimalist visual. One perfect ceramic cup of specialty coffee on a dark marble surface, delicate steam rising gracefully. Warm amber accent light, deep navy background. Clean, quiet, luxurious atmosphere. Cinematic side lighting, soft shadows. No text or typography. Premium coffee brand aesthetic.'
  ["article-01-byudzhet"]='Premium minimalist visual. Abstract clean data visualization with subtle geometric chart lines in glowing electric blue on a deep navy background. Soft bokeh lights in the distance. Business analytics aesthetic. No text or typography. Professional financial theme.'
  ["article-02-marketplejsy"]='Premium minimalist visual. Abstract geometric composition with subtle overlapping circular shapes suggesting a marketplace grid, illuminated with soft blue glow on dark navy background. Clean modern e-commerce aesthetic. No text or typography.'
)

echo "=================================================="
echo "  🎨 Генерация 4 превью через Flux 2 Pro"
echo "=================================================="
echo ""

for key in "${!PROMPTS[@]}"; do
  prompt="${PROMPTS[$key]}"
  echo "[$key]"
  echo "  Промпт: ${prompt:0:60}..."

  resp=$(curl -s -w "\n%{http_code}" https://openrouter.ai/api/v1/chat/completions \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "black-forest-labs/flux.2-pro",
      "messages": [{"role":"user","content":"'"$prompt"'"}],
      "modalities": ["image"]
    }')

  http_code=$(echo "$resp" | tail -1)
  body=$(echo "$resp" | head -n -1)

  if [ "$http_code" != "200" ]; then
    echo "  ❌ HTTP $http_code"
    echo "$body" | python3 -m json.tool 2>/dev/null | head -3
    echo ""
    continue
  fi

  result=$(python3 -c "
import json, sys
d = json.loads('''$body''')
msg = d.get('choices', [{}])[0].get('message', {})
images = msg.get('images', [])
if images:
    url = images[0].get('image_url', {}).get('url', '')
    if url:
        sys.stdout.write(url)
        sys.exit(0)
    # check content_parts
parts = msg.get('content_parts', [])
for p in parts:
    if isinstance(p, dict) and p.get('type') == 'image_url':
        sys.stdout.write(p['image_url']['url'])
        sys.exit(0)
# fallback: try content
content = msg.get('content', '')
if content and ('data:image' in content or 'http' in content):
    sys.stdout.write(content)
    sys.exit(0)
print('NO_IMAGE')
sys.exit(1)
" 2>/dev/null || echo "PARSE_ERR")

  if [[ "$result" == "NO_IMAGE" || "$result" == "PARSE_ERR" ]]; then
    echo "  ❌ Нет изображения в ответе"
    echo "$body" | python3 -c "
import json, sys
d = json.load(sys.stdin)
print(json.dumps({k: v for k,v in d.items() if k != 'request_id'}, ensure_ascii=False)[:500])
" 2>/dev/null
    echo ""
    continue
  fi

  # Скачиваем
  fname="$OUTPUT_DIR/$key.png"
  if [[ "$result" == data:image/* ]]; then
    python3 -c "
import base64, sys
data = sys.stdin.read()
# data:image/png;base64,...
b64 = data.split(',', 1)[1]
with open('$fname', 'wb') as f:
    f.write(base64.b64decode(b64))
" <<< "$result"
  else
    curl -s -o "$fname" "$result"
  fi

  size=$(stat -c%s "$fname" 2>/dev/null || stat -f%z "$fname" 2>/dev/null)
  echo "  ✅ $fname ($(( size/1024 ))KB)"
  echo ""
done

echo "=================================================="
echo "  ✅ Готово! Превью в /$OUTPUT_DIR/"
echo "=================================================="
ls -lh "$OUTPUT_DIR"/*.png 2>/dev/null