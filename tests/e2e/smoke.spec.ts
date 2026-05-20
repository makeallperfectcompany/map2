import { test, expect } from "@playwright/test";

const BASE = process.env.BASE_URL || "https://map2-ten.vercel.app";
// Known anchors that are placeholders — skip or warn
const PLACEHOLDER_LINKS = new Set(["#", "/services", "/#services"]);
// Social links that may not respond to HEAD
const SKIPPED_DOMAINS = ["wa.me", "vk.com", "t.me", "facebook.com", "instagram.com", "youtube.com"];

// ---------- helpers ----------

/** Collect all unique non-empty hrefs from visible <a> tags on the page. */
async function collectLinks(page: import("@playwright/test").Page): Promise<string[]> {
  const raw = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("a[href]"));
    return anchors.map((a) => (a as HTMLAnchorElement).href).filter(Boolean);
  });
  return [...new Set(raw)];
}

/** Check a single link responds with 200 (or redirects to a page that does). */
async function checkLink(linkUrl: string): Promise<boolean> {
  if (PLACEHOLDER_LINKS.has(linkUrl) || linkUrl.startsWith("tel:") || linkUrl.startsWith("mailto:")) {
    return true; // skip known placeholders & contact links
  }
  try {
    const resp = await fetch(linkUrl, { method: "HEAD", redirect: "follow" });
    return resp.ok;
  } catch {
    return false;
  }
}

// ---------- quick suite (pre-push friendly) ----------

test.describe("quick — main navigation smoke", () => {
  test("homepage loads and all header nav links are valid", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();

    const links = await collectLinks(page);
    const results = await Promise.all(links.map(checkLink));
    const broken = links.filter((_, i) => !results[i]);

    expect(broken).toEqual([]);
  });

  test("mobile — burger menu opens and contains valid links", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    // Open burger
    const burger = page.locator('button[aria-label="Меню"]');
    await burger.click();
    await expect(page.locator('nav[aria-label="full menu"]')).toBeVisible();

    // Collect links from overlay
    const links = await collectLinks(page);
    const results = await Promise.all(links.map(checkLink));
    const broken = links.filter((_, i) => !results[i]);
    expect(broken).toEqual([]);
  });

  test("404 page shows correct content", async ({ page }) => {
    await page.goto("/some-non-existent-page");
    await expect(page.locator("h1")).toContainText("Не нашли");
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
    await expect(page.locator('a[href="/cases"]').first()).toBeVisible();
    await expect(page.locator('a[href="/contacts"]').first()).toBeVisible();
  });
});

// ---------- full suite (runs on demand / nightly) ----------

test.describe("full — every page every link", () => {
  test("all pages from sitemap have valid links", async ({ page }) => {
    // Fetch sitemap
    const sitemapResp = await fetch(`${BASE}/sitemap.xml`);
    expect(sitemapResp.ok).toBeTruthy();
    const xml = await sitemapResp.text();

    // Extract all <loc> URLs from sitemap
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.length).toBeGreaterThan(0);

    // Keep a set of unique links we've already checked across pages
    const checked = new Set<string>();
    const broken: { pageUrl: string; linkUrl: string }[] = [];

    for (const pageUrl of locs) {
      const localPath = new URL(pageUrl).pathname;
      await page.goto(localPath);
      await expect(page.locator("h1")).toBeVisible({ timeout: 10000 });

      const links = await collectLinks(page);
      for (const link of links) {
        if (checked.has(link)) continue;
        const skip = SKIPPED_DOMAINS.some((d) => link.includes(d));
        if (skip) continue;
        checked.add(link);
        const ok = await checkLink(link);
        if (!ok) {
          broken.push({ pageUrl: pageUrl, linkUrl: link });
        }
      }

      // — optional: check mobile burger on every page
      if (page.viewportSize()?.width && page.viewportSize()!.width < 1024) {
        const burger = page.locator('button[aria-label="Меню"]');
        if (await burger.isVisible()) {
          await burger.click();
          const mobileLinks = await collectLinks(page);
          for (const link of mobileLinks) {
            if (checked.has(link)) continue;
            checked.add(link);
            const ok = await checkLink(link);
            if (!ok) {
              broken.push({ pageUrl: pageUrl, linkUrl: link });
            }
          }
        }
      }
    }

    expect(broken).toEqual([]);
  });
});
