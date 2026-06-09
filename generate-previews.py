#!/usr/bin/env python3
"""Generate preview images via OpenRouter Flux 2 Pro"""

import json, base64, os, sys, time, urllib.request, urllib.error

import os
API_KEY = os.environ.get("OPENROUTER_API_KEY", "")
OUTPUT_DIR = "public/images/previews"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PROMPTS = {
    "case-01-odezhda": "Premium minimalist visual. A single elegant draped premium fabric in navy blue, warm amber light accent from the right side. Dark sophisticated background. Clean product photography aesthetic. Cinematic lighting, shallow depth of field. No text or typography. High-end fashion e-commerce vibe.",
    "case-02-kofe": "Premium minimalist visual. One perfect ceramic cup of specialty coffee on a dark marble surface, delicate steam rising gracefully. Warm amber accent light, deep navy background. Clean, quiet, luxurious atmosphere. Cinematic side lighting, soft shadows. No text or typography. Premium coffee brand aesthetic.",
    "article-01-byudzhet": "Premium minimalist visual. Abstract clean data visualization with subtle geometric chart lines in glowing electric blue on a deep navy background. Soft bokeh lights in the distance. Business analytics aesthetic, clean and modern. No text or typography. Professional financial theme.",
    "article-02-marketplejsy": "Premium minimalist visual. Abstract geometric composition with subtle overlapping circular shapes suggesting a marketplace grid or product shelves, illuminated with soft blue glow on dark navy background. Clean modern e-commerce aesthetic. No text or typography.",
}

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}

print("=" * 58)
print("  🎨  Генерация 4 превью через Flux 2 Pro")
print("=" * 58)
print()

for key, prompt in PROMPTS.items():
    print(f"[{key}]")
    print(f"  Промпт: {prompt[:70]}...")

    payload = {
        "model": "black-forest-labs/flux.2-pro",
        "messages": [{"role": "user", "content": prompt}],
        "modalities": ["image"],
    }

    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=json.dumps(payload).encode(),
        headers=HEADERS,
    )

    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            body = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        print(f"  ❌ HTTP {e.code}")
        try:
            detail = json.loads(err_body)
            print(f"     {json.dumps(detail, ensure_ascii=False)[:500]}")
        except json.JSONDecodeError:
            print(f"     {err_body[:300]}")
        print()
        continue
    except Exception as e:
        print(f"  ❌ {e}")
        print()
        continue

    # Извлекаем изображение
    msg = body.get("choices", [{}])[0].get("message", {})
    images = msg.get("images", [])

    img_url = None
    if images:
        img_url = images[0].get("image_url", {}).get("url")
    if not img_url:
        parts = msg.get("content_parts", [])
        for p in parts:
            if isinstance(p, dict) and p.get("type") == "image_url":
                img_url = p["image_url"]["url"]
                break
    if not img_url:
        content = msg.get("content", "")
        if content and ("data:image" in content or "http" in content):
            img_url = content.strip()

    if not img_url:
        print("  ❌ Нет изображения в ответе")
        print(f"     {json.dumps(body, ensure_ascii=False)[:500]}")
        print()
        continue

    # Сохраняем
    fname = os.path.join(OUTPUT_DIR, f"{key}.png")
    if img_url.startswith("data:image"):
        b64_data = img_url.split(",", 1)[1]
        with open(fname, "wb") as f:
            f.write(base64.b64decode(b64_data))
    else:
        urllib.request.urlretrieve(img_url, fname)

    size = os.path.getsize(fname)
    print(f"  ✅ {fname} ({size // 1024} KB)")
    print()

print("=" * 58)
print("  ✅  Готово!")
print("=" * 58)
for f in os.listdir(OUTPUT_DIR):
    size = os.path.getsize(os.path.join(OUTPUT_DIR, f))
    print(f"  {f}  ({size // 1024} KB)")
