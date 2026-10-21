const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('/Users/ahmedadnan/.gemini/antigravity/brain/8c740cf3-5166-488f-8226-cac3cc6c63f0/.system_generated/steps/2/content.md', 'utf8');

const match = content.match(/window\['bootstrap'\]\s*=\s*JSON\.parse\('(.*?)'\);/);
if (match) {
  const context = { window: {} };
  vm.runInNewContext(match[0], context);
  const bootstrap = context.window['bootstrap'];

  console.log('Document Title:', bootstrap.page?.A?.D);
  const pages = bootstrap.page?.A?.A || [];
  console.log('Total pages:', pages.length);

  pages.forEach((page, pIdx) => {
    console.log(`\n================ PAGE ${pIdx} (Dim: ${page.C?.A} x ${page.C?.B}) ================`);
    const elements = page.E || [];
    elements.forEach((el, eIdx) => {
      // Texts
      if (el.a?.A) {
        const textStr = el.a.A.map(t => t.A || '').join('');
        console.log(`  [TEXT ${eIdx}] -> "${textStr.replace(/\n/g, ' ')}"`);
      }
      // Embeds
      if (typeof el.a === 'string' && el.a.startsWith('http')) {
        console.log(`  [EMBED ${eIdx}] -> ${el.a}`);
      }
      // Links
      if (el.G) {
        console.log(`  [LINK ${eIdx}] -> ${el.G}`);
      }
      // Shapes / SVGs
      if (el.b && Array.isArray(el.b)) {
        el.b.forEach(shape => {
          if (shape.B?.C) console.log(`  [COLOR ${eIdx}] -> Fill: ${shape.B.C}`);
        });
      }
    });
  });
}
