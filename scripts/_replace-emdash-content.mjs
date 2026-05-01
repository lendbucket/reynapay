/**
 * Replace U+2014 em-dash inside TS/TSX string literals only (not comments / JSX comments).
 */
import fs from "node:fs";
import path from "node:path";

const EM = "\u2014";
const REPL = ", ";

const FILES = [
  "lib/industries-content.ts",
  "lib/site-config.ts",
  "lib/seo.ts",
  "app/page.tsx",
  "app/who-we-serve/page.tsx",
  "app/who-we-serve/[slug]/page.tsx",
  "app/solutions/page.tsx",
  "app/solutions/[slug]/page.tsx",
  "app/pricing/page.tsx",
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/partners/page.tsx",
  "app/salontransact/page.tsx",
  "app/blog/page.tsx",
  "app/blog/[slug]/page.tsx",
  "app/legal/terms/page.tsx",
  "app/legal/privacy/page.tsx",
  "app/legal/cookies/page.tsx",
  "app/sitemap/page.tsx",
  "app/layout.tsx",
  "components/cta-section.tsx",
  "components/hero-section.tsx",
  "components/footer.tsx",
  "components/pricing-table.tsx",
];

const MD_FILES = [
  "content/blog/best-payment-processor-for-salons-2026.md",
  "content/blog/salon-card-on-file.md",
  "content/blog/why-salons-overpay-credit-card-processing.md",
  "content/blog/reyna-pay-vs-square-vs-clover.md",
  "content/blog/how-to-start-a-payments-company.md",
  "content/blog/salon-pci-compliance.md",
  "content/blog/salon-no-show-fee.md",
  "content/blog/franchise-salon-payment-processing.md",
  "content/blog/salon-stylist-commission-software.md",
  "content/blog/white-label-payment-processor.md",
];

const root = process.cwd();

function skipLineComment(s, i) {
  const nl = s.indexOf("\n", i);
  return nl === -1 ? s.length : nl + 1;
}

function skipBlockComment(s, i) {
  const end = s.indexOf("*/", i + 2);
  if (end === -1) return s.length;
  return end + 2;
}

function skipJsxComment(s, i) {
  const end = s.indexOf("*/}", i + 3);
  if (end === -1) return s.length;
  return end + 3;
}

function skipQuoted(s, start, quote) {
  let i = start + 1;
  let out = quote;
  while (i < s.length) {
    const c = s[i];
    if (c === "\\") {
      out += c + (s[i + 1] ?? "");
      i += 2;
      continue;
    }
    out += c;
    if (c === quote) {
      i++;
      break;
    }
    i++;
  }
  return { segment: out, next: i };
}

function replaceInsideQuotedString(seg, quote) {
  const inner = seg.slice(1, -1);
  if (inner === ` ${EM} ` || inner.trim() === EM) {
    return seg;
  }
  return quote + inner.split(EM).join(REPL) + quote;
}

function skipBraceExpression(s, startOpenBrace) {
  let i = startOpenBrace + 1;
  let depth = 1;
  while (i < s.length && depth > 0) {
    if (s.slice(i, i + 2) === "//") {
      i = skipLineComment(s, i);
      continue;
    }
    if (s.slice(i, i + 2) === "/*") {
      i = skipBlockComment(s, i);
      continue;
    }
    const c = s[i];
    if (c === '"' || c === "'" || c === "`") {
      const skipped = skipQuoted(s, i, c);
      i = skipped.next;
      continue;
    }
    if (c === "{") {
      depth++;
      i++;
      continue;
    }
    if (c === "}") {
      depth--;
      i++;
      continue;
    }
    i++;
  }
  return i;
}

function processTemplateLiteral(s, startBacktick) {
  let i = startBacktick + 1;
  let out = "`";
  while (i < s.length) {
    const c = s[i];
    if (c === "\\") {
      out += c + (s[i + 1] ?? "");
      i += 2;
      continue;
    }
    if (c === "`") {
      out += "`";
      return { value: out, next: i + 1 };
    }
    if (c === "$" && s[i + 1] === "{") {
      out += "${";
      const afterExpr = skipBraceExpression(s, i + 1);
      out += s.slice(i + 2, afterExpr);
      i = afterExpr;
      continue;
    }
    if (c === EM) {
      out += REPL;
    } else {
      out += c;
    }
    i++;
  }
  throw new Error("Unterminated template literal");
}

function transformTsx(ts) {
  let out = "";
  let i = 0;
  while (i < ts.length) {
    if (ts.slice(i, i + 3) === "{/*") {
      const end = skipJsxComment(ts, i);
      out += ts.slice(i, end);
      i = end;
      continue;
    }
    if (ts.slice(i, i + 2) === "//") {
      const end = skipLineComment(ts, i);
      out += ts.slice(i, end);
      i = end;
      continue;
    }
    if (ts.slice(i, i + 2) === "/*") {
      const end = skipBlockComment(ts, i);
      out += ts.slice(i, end);
      i = end;
      continue;
    }
    const c = ts[i];
    if (c === '"' || c === "'") {
      const { segment, next } = skipQuoted(ts, i, c);
      out += replaceInsideQuotedString(segment, c);
      i = next;
      continue;
    }
    if (c === "`") {
      const { value, next } = processTemplateLiteral(ts, i);
      out += value;
      i = next;
      continue;
    }
    out += c;
    i++;
  }
  return out;
}

function cleanupText(t) {
  let p = t;
  for (let n = 0; n < 20; n++) {
    const q = p
      .replaceAll(" ,", ",")
      .replaceAll("  ", " ")
      .replaceAll(",,", ",");
    if (q === p) break;
    p = q;
  }
  return p;
}

function main() {
  for (const rel of FILES) {
    const fp = path.join(root, rel);
    let text = fs.readFileSync(fp, "utf8");
    text = transformTsx(text);
    text = cleanupText(text);
    fs.writeFileSync(fp, text, "utf8");
    console.log("patched:", rel);
  }
  for (const rel of MD_FILES) {
    const fp = path.join(root, rel);
    if (!fs.existsSync(fp)) {
      console.warn("skip missing:", rel);
      continue;
    }
    let text = fs.readFileSync(fp, "utf8");
    text = text.split(EM).join(REPL);
    text = cleanupText(text);
    fs.writeFileSync(fp, text, "utf8");
    console.log("patched md:", rel);
  }
}

main();
