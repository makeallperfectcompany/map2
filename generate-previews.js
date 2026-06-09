const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.OPENROUTER_API_KEY || "";
const OUTPUT_DIR = "public/images/previews";
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const PROMPTS = {
  "case-01-odezhda": "Premium minimalist visual. A single elegant draped premium fabric in navy blue, warm amber light accent from the right side. Dark sophisticated background. Clean product photography aesthetic. Cinematic lighting, shallow depth of field. No text or typography. High-end fashion e-commerce vibe.",
  "case-02-kofe": "Premium minimalist visual. One perfect ceramic cup of specialty coffee on a dark marble surface, delicate steam rising gracefully. Warm amber accent light, deep navy background. Clean, quiet, luxurious atmosphere. Cinematic side lighting, soft shadows. No text or typography. Premium coffee brand aesthetic.",
  "article-01-byudzhet": "Premium minimalist visual. Abstract clean data visualization with subtle geometric chart lines in glowing electric blue on a deep navy background. Soft bokeh lights in the distance. Business analytics aesthetic, clean and modern. No text or typography. Professional financial theme.",
  "article-02-marketplejsy": "Premium minimalist visual. Abstract geometric composition with subtle overlapping circular shapes suggesting a marketplace grid or product shelves, illuminated with soft blue glow on dark navy background. Clean modern e-commerce aesthetic. No text or typography.",
};

async function callOpenRouter(prompt) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: "black-forest-labs/flux.2-pro",
      messages: [{ role: "user", content: prompt }],
      modalities: ["image"],
    });

    const req = https.request({
      hostname: "openrouter.ai",
      path: "/api/v1/chat/completions",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      timeout: 60000,
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 300)}`));
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error(`JSON parse error: ${data.slice(0, 200)}`)); }
      });
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

function extractImageUrl(body) {
  const msg = body?.choices?.[0]?.message || {};
  // Check images array
  if (msg.images?.[0]?.image_url?.url) return msg.images[0].image_url.url;
  // Check content_parts
  if (msg.content_parts) {
    for (const p of msg.content_parts) {
      if (p?.type === "image_url" && p?.image_url?.url) return p.image_url.url;
    }
  }
  // Check content string
  if (typeof msg.content === "string" && (msg.content.startsWith("data:image") || msg.content.startsWith("http"))) {
    return msg.content.trim();
  }
  return null;
}

async function saveImage(url, filepath) {
  if (url.startsWith("data:image")) {
    const b64 = url.split(",")[1];
    fs.writeFileSync(filepath, Buffer.from(b64, "base64"));
    return;
  }
  // Download from URL
  const resp = await new Promise((resolve, reject) => {
    https.get(url, { timeout: 30000 }, resolve).on("error", reject);
  });
  const chunks = [];
  for await (const chunk of resp) chunks.push(chunk);
  fs.writeFileSync(filepath, Buffer.concat(chunks));
}

async function main() {
  console.log("=".repeat(58));
  console.log("  🎨  Генерация 4 превью через Flux 2 Pro");
  console.log("=".repeat(58));
  console.log();

  for (const [key, prompt] of Object.entries(PROMPTS)) {
    process.stdout.write(`[${key}]\n  Промпт: ${prompt.slice(0, 70)}...\n`);

    try {
      const body = await callOpenRouter(prompt);
      const url = extractImageUrl(body);

      if (!url) {
        console.log(`  ❌ Нет изображения в ответе\n  ${JSON.stringify(body).slice(0, 400)}\n`);
        continue;
      }

      const fname = path.join(OUTPUT_DIR, `${key}.png`);
      await saveImage(url, fname);

      const size = fs.statSync(fname).size;
      console.log(`  ✅ ${fname} (${Math.round(size/1024)} KB)\n`);
    } catch (err) {
      console.log(`  ❌ ${err.message}\n`);
    }
  }

  console.log("=".repeat(58));
  console.log("  ✅  Готово!");
  console.log("=".repeat(58));
  for (const f of fs.readdirSync(OUTPUT_DIR)) {
    const size = fs.statSync(path.join(OUTPUT_DIR, f)).size;
    console.log(`  ${f}  (${Math.round(size/1024)} KB)`);
  }
}

main().catch(console.error);
