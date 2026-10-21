const fs = require('fs');

const content = fs.readFileSync('/Users/ahmedadnan/.gemini/antigravity/brain/8c740cf3-5166-488f-8226-cac3cc6c63f0/.system_generated/steps/2/content.md', 'utf8');

// Find all text elements with their exact fonts, colors, text contents
// In Canva exports: {"A":[{"A?":"A","A":"some text\n"}]} or {"A":"some text\n"}
const textBlockRegex = /"A":\[\{"A\?":"A","A":"(.*?)"\}\](?:.*?"B":\[\{"A\?":"A","A":(\{[^}]+\})\}\])?/g;

let m;
const items = [];
while ((m = textBlockRegex.exec(content)) !== null) {
  const text = m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
  const style = m[2] ? m[2].replace(/\\"/g, '"') : '';
  if (text.trim()) {
    items.push({ text: text.trim(), style });
  }
}

console.log('--- ALL TEXT ITEMS WITH CONTEXT ---');
items.forEach((item, idx) => {
  console.log(`[${idx + 1}] Text: "${item.text}"`);
  if (item.style) {
    try {
      const s = JSON.parse(item.style);
      console.log(`     Color: ${s.color?.B || 'N/A'}, Size: ${s['font-size']?.B || 'N/A'}, Align: ${s['text-align']?.B || 'N/A'}`);
    } catch (e) {
      console.log(`     Style raw: ${item.style.substring(0, 80)}`);
    }
  }
});

// Also find any external URLs, images, links in the Canva file
const urlRegex = /https?:\/\/[^\s"',\\]+/g;
const urls = [...new Set(content.match(urlRegex) || [])];
console.log('\n--- ALL URLS IN CANVA FILE ---');
urls.forEach(u => console.log('  ', u));
